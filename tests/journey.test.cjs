const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8'), context);
const { journey, groups } = context.window.PORTFOLIO_DATA;

test('학습 기록은 태그 없이 연도별·기술별 전환과 검색을 제공한다', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(!html.includes('id="journey-tech"'));
  assert.ok(!html.includes('id="journey-year"'));
  const elements = new Map();
  const element = key => {
    if (!elements.has(key)) elements.set(key, { innerHTML: '', value: '', addEventListener() {}, setAttribute() {}, querySelectorAll() { return []; } });
    return elements.get(key);
  };
  const script = fs.readFileSync(path.join(root, 'app.js'), 'utf8').split('// A short, evidence-backed reading path')[0];
  const runtime = { window: context.window, document: { querySelector: element, querySelectorAll: () => [] } };
  vm.createContext(runtime);
  vm.runInContext(script, runtime);
  assert.match(element('#journey-grid').innerHTML, /년 학습/);
  vm.runInContext('journeyState.view = "tech"; renderJourney();', runtime);
  assert.match(element('#journey-grid').innerHTML, /journey-tech-group/);
  vm.runInContext('journeyState.search = "SCSS"; renderJourney();', runtime);
  const scssCount = journey.filter(item => item.id !== 'eokka' && [item.title, item.name, item.purpose, item.group, ...item.stack, ...item.learned].join(' ').toLowerCase().includes('scss')).length;
  assert.ok(element('#journey-count').textContent.startsWith(`${scssCount}개 프로젝트`));
  vm.runInContext('journeyState.search = "no-such-project-12345"; renderJourney();', runtime);
  assert.equal(element('#empty-state').hidden, false);
  vm.runInContext('journeyState.search = ""; journeyState.view = "date"; journeyState.limit = 18; renderJourney();', runtime);
  assert.equal((element('#journey-grid').innerHTML.match(/class="journey-card"/g) || []).length, 18);
});

test('커리큘럼 연결은 69개 학습 기록에만 적용하고 독립 학습의 출처를 추측하지 않는다', () => {
  assert.equal(context.window.PORTFOLIO_DATA.courseReview.courseCount, 26);
  assert.equal(journey.filter(item => item.course).length, 69);
  for (const item of journey.filter(item => item.course)) {
    assert.match(item.course.url, /^https:\/\/nomadcoders\.co\/[a-z0-9-]+$/);
    assert.ok(item.course.title && item.course.topics.length);
  }
  for (const id of ['coding-test', 'study-java-for-oop', 'challenge-bookclub-nomad', 'personal-project-AvanteN', 'eokka']) {
    assert.equal(journey.find(item => item.id === id).course, undefined);
  }
});

test('주요 프로젝트는 경험을 유지하면서 핵심 학습과 회고를 간결하게 제공한다', () => {
  for (const id of ['kakao', 'todo', 'wetube', 'trello', 'wemake']) {
    const item = journey.find(item => item.id === id);
    assert.ok(item.learned.length <= 6, id);
    assert.ok((item.reflections?.length || 0) <= 5, id);
  }
  assert.ok(journey.find(item => item.id === 'wetube').learned.some(point => point.includes('성공 응답')));
  assert.ok(journey.find(item => item.id === 'study-react-hooks').learned.some(point => point.includes('리스너 해제')));
});

test('당근마켓은 프론트엔드 UX 학습과 미완성 범위를 구분한다', () => {
  const carrot = journey.find(item => item.id === 'carrot');
  assert.ok(carrot.learned.some(point => point.includes('useOptimistic')));
  assert.ok(carrot.learned.some(point => point.includes('useFormStatus')));
  assert.ok(carrot.sources.includes('components/like-button.tsx'));
  assert.ok(carrot.demoStatus.includes('플레이스홀더'));
  assert.ok(carrot.reflections.length <= 8);
  assert.ok(carrot.learned.length <= 7);
});

test('Trello는 실행 링크와 배포 앱 캡처를 제공하고 학습 회고를 간결하게 유지한다', () => {
  const trello = journey.find(item => item.id === 'trello');
  assert.equal(trello.demo, 'https://jonghwa3471.github.io/react-challenge-trello/');
  assert.equal(trello.runtimeNote, undefined);
  assert.equal(trello.images.length, 4);
  assert.equal(trello.galleryLayout, 'landscape');
  assert.equal(trello.reflections.length, 4);
  assert.equal(trello.learned.length, 6);
  assert.ok(trello.sources.includes('src/components/BoardModal.tsx'));
});

test('카카오톡은 로그인 캡처와 저장소 preview 3개를 모두 표시한다', () => {
  const kakao = journey.find(item => item.id === 'kakao');
  assert.equal(kakao.images.length, 4);
  assert.ok(kakao.images[0].src.endsWith('kakao-login.png'));
  kakao.images.slice(1).forEach((image, index) => assert.ok(image.source.endsWith(`preview${index + 1}.png`)));
});

test('74개 공개 저장소가 고유한 ID·분야·학습 내용으로 연결된다', () => {
  assert.equal(journey.length, 74);
  assert.ok(!journey.some(item => item.name === 'capstone2'));
  assert.equal(new Set(journey.map(item => item.id)).size, journey.length);
  assert.equal(new Set(journey.map(item => item.name)).size, journey.length);
  for (const item of journey) {
    assert.ok(groups.some(group => group.id === item.group), item.name);
    assert.ok(item.title && item.purpose && item.learned.length && item.stack.length, item.name);
    assert.ok(item.repo.startsWith('https://github.com/jonghwa3471/'), item.name);
    assert.ok(Number.isInteger(item.commits) && item.commits > 0, item.name);
  }
});

test('날짜는 유효하며 생성 연도와 연도 필터가 일치한다', () => {
  for (const item of journey) {
    assert.match(item.created, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(item.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(!Number.isNaN(Date.parse(item.created)));
    assert.ok(!Number.isNaN(Date.parse(item.updated)));
    assert.equal(item.year, item.created.slice(0, 4));
    assert.equal(item.period, item.created.replaceAll('-', '.'));
  }
});

test('모든 이미지·상세 페이지 파일이 존재하고 이미지 출처가 있다', () => {
  for (const item of journey) {
    for (const image of item.images || []) {
      const file = path.resolve(root, image.src);
      assert.ok(file.startsWith(root + path.sep));
      assert.ok(fs.existsSync(file), file);
      assert.ok(fs.statSync(file).size > 1000, file);
      assert.match(image.source, /^https:\/\//);
      assert.ok(image.caption);
    }
    if (item.detail) assert.ok(fs.existsSync(path.join(root, 'journey', item.detail, 'index.html')));
  }
});

test('블로그는 검증한 개별 글 링크이고 기술 글과 회고가 구분된다', () => {
  assert.equal(journey.filter(item => item.blogs.length).length, 33);
  for (const item of journey) for (const blog of item.blogs) {
    assert.match(blog.url, /^https:\/\/j2yonghwa\.tistory\.com\/\d+$/);
    assert.ok(blog.title);
    assert.ok(['관련 개념', '학습 회고'].includes(blog.kind));
  }
});

test('기존 상세 링크 ID를 유지하고 미확인 개인 경험을 생성하지 않는다', () => {
  for (const id of ['kakao', 'todo', 'paintbox', 'wetube', 'trello', 'netflix', 'carrot', 'wemake', 'eokka']) {
    assert.ok(journey.some(item => item.id === id), id);
  }
  for (const item of journey) assert.equal(item.challenge, undefined);
});
