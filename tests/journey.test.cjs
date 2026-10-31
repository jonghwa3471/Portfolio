const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { searchProjects } = require("../src/lib/journey-query.ts");
const { assetPath, projectPath } = require("../src/lib/portfolio.ts");
const EokkaContent = require("../src/content/eokka.tsx").default;
const { SiteHeader } = require("../src/components/site-header.tsx");
const JourneyArchive = require("../src/components/journey-archive.tsx").default;
const root = path.resolve(__dirname, "..");
const context = {
  window: { PORTFOLIO_DATA: require("../src/content/portfolio.json") },
};
const { journey, groups } = context.window.PORTFOLIO_DATA;

test("EOKKA 상세는 이미지·목차가 연결되고 구현 역할과 테스트 범위를 구분한다", () => {
  const html = renderToStaticMarkup(React.createElement(EokkaContent));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const match of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(match[1]), match[1]);
  for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    assert.ok(
      fs.existsSync(
        path.resolve(root, decodeURIComponent(match[1]).replace(/^\//, "")),
      ),
      match[1],
    );
  }
  assert.equal(
    (html.match(/src="\/projects\/eokka\/images\/login.jpg"/g) || []).length,
    1,
  );
  assert.ok(html.includes("직접 판단한 부분과 AI의 도움을 받은 부분"));
  assert.ok(html.includes("캐시 저장·조회·무효화 동작을 단위 테스트로 확인"));
  assert.ok(!html.includes("테스트 개수보다, 막고 싶은 회귀를 기준으로"));
});

test("EOKKA는 프론트엔드 사례를 먼저 보여주고 AI 회고와 지원 범위를 구분한다", () => {
  const html = renderToStaticMarkup(React.createElement(EokkaContent));
  const order = [
    "experience",
    "frontend",
    "loading",
    "architecture",
    "backend",
    "technical",
    "verification",
    "operations",
    "feedback",
  ].map((id) => html.indexOf(`id="${id}"`));
  assert.ok(
    order.every(
      (position, index) =>
        position >= 0 && (!index || position > order[index - 1]),
    ),
  );
  assert.equal((html.match(/AI 구현을 검토하며 배운 점/g) || []).length, 1);
  assert.ok(html.includes("미국 종목이 포함된 화면 예시"));
  assert.ok(html.includes("주요 역할:"));
  assert.ok(!html.includes("당황했습니다"));
  assert.ok(!html.includes("DB 장애 시에는 현재 인스턴스의 메모리 제한"));
});

test("EOKKA 목차는 본문의 주요 섹션 순서를 그대로 따른다", () => {
  const html = renderToStaticMarkup(
    React.createElement(SiteHeader, { project: true }),
  );
  const ids = [
    "motivation",
    "experience",
    "frontend",
    "architecture",
    "feedback",
  ];
  const positions = ids.map((id) => html.indexOf(`href="#${id}"`));
  assert.ok(
    positions.every(
      (position, index) =>
        position >= 0 && (!index || position > positions[index - 1]),
    ),
  );
  assert.ok(html.includes(">기획·핵심 역량<"));
  assert.ok(html.includes(">구현·문제 해결<"));
  assert.ok(html.includes(">구조·검증<"));
  assert.ok(!html.includes('href="#loading"'));
  assert.ok(!html.includes('href="#verification"'));
});

test("학습 기록은 기본 연도별로 9개를 표시하며 검색 함수가 실제 데이터를 찾는다", () => {
  const html = renderToStaticMarkup(React.createElement(JourneyArchive));
  assert.ok(!html.includes("journey-tag"));
  assert.match(html, /aria-pressed="true">연도별/);
  assert.match(html, /년 학습/);
  assert.equal((html.match(/class="journey-card"/g) || []).length, 9);
  assert.equal(searchProjects(journey, "").length, 73);
  assert.equal(searchProjects(journey, "FAISS").length, 1);
  assert.equal(searchProjects(journey, "no-such-project-12345").length, 0);
  const results = searchProjects(journey, "SCSS");
  assert.ok(results.length >= 20);
  assert.ok(
    results.every(
      (item, index) => !index || results[index - 1].created >= item.created,
    ),
  );
});

test("이동 경로와 이미지 경로가 정적 배포에 대응한다", () => {
  assert.equal(projectPath("eokka"), "/projects/eokka/");
  assert.equal(projectPath("carrot"), "/journey/carrot/");
  assert.equal(
    assetPath("./journey/images/kakao-login.png"),
    "/journey/images/kakao-login.png",
  );
});

test("커리큘럼 연결은 69개 학습 기록에만 적용하고 독립 학습의 출처를 추측하지 않는다", () => {
  assert.equal(context.window.PORTFOLIO_DATA.courseReview.courseCount, 26);
  assert.equal(journey.filter((item) => item.course).length, 69);
  for (const item of journey.filter((item) => item.course)) {
    assert.match(item.course.url, /^https:\/\/nomadcoders\.co\/[a-z0-9-]+$/);
    assert.ok(item.course.title && item.course.topics.length);
  }
  for (const id of [
    "coding-test",
    "study-java-for-oop",
    "challenge-bookclub-nomad",
    "personal-project-AvanteN",
    "eokka",
  ]) {
    assert.equal(journey.find((item) => item.id === id).course, undefined);
  }
});

test("주요 프로젝트는 경험을 유지하면서 핵심 학습과 회고를 간결하게 제공한다", () => {
  for (const id of ["kakao", "todo", "wetube", "trello", "wemake"]) {
    const item = journey.find((item) => item.id === id);
    assert.ok(item.learned.length <= 6, id);
    assert.ok((item.reflections?.length || 0) <= 5, id);
  }
  assert.ok(
    journey
      .find((item) => item.id === "wetube")
      .learned.some((point) => point.includes("성공 응답")),
  );
  assert.ok(
    journey
      .find((item) => item.id === "study-react-hooks")
      .learned.some((point) => point.includes("리스너 해제")),
  );
});

test("당근마켓은 프론트엔드 UX 학습과 미완성 범위를 구분한다", () => {
  const carrot = journey.find((item) => item.id === "carrot");
  assert.ok(carrot.learned.some((point) => point.includes("useOptimistic")));
  assert.ok(carrot.learned.some((point) => point.includes("useFormStatus")));
  assert.ok(carrot.sources.includes("components/like-button.tsx"));
  assert.ok(carrot.demoStatus.includes("플레이스홀더"));
  assert.ok(carrot.reflections.length <= 8);
  assert.ok(carrot.learned.length <= 7);
});

test("Trello는 실행 링크와 배포 앱 캡처를 제공하고 학습 회고를 간결하게 유지한다", () => {
  const trello = journey.find((item) => item.id === "trello");
  assert.equal(
    trello.demo,
    "https://jonghwa3471.github.io/react-challenge-trello/",
  );
  assert.equal(trello.runtimeNote, undefined);
  assert.equal(trello.images.length, 4);
  assert.equal(trello.galleryLayout, "landscape");
  assert.equal(trello.reflections.length, 4);
  assert.equal(trello.learned.length, 6);
  assert.ok(trello.sources.includes("src/components/BoardModal.tsx"));
});

test("카카오톡은 로그인 캡처와 저장소 preview 3개를 모두 표시한다", () => {
  const kakao = journey.find((item) => item.id === "kakao");
  assert.equal(kakao.images.length, 4);
  assert.ok(kakao.images[0].src.endsWith("kakao-login.png"));
  kakao.images
    .slice(1)
    .forEach((image, index) =>
      assert.ok(image.source.endsWith(`preview${index + 1}.png`)),
    );
});

test("74개 공개 저장소가 고유한 ID·분야·학습 내용으로 연결된다", () => {
  assert.equal(journey.length, 74);
  assert.ok(!journey.some((item) => item.name === "capstone2"));
  assert.equal(new Set(journey.map((item) => item.id)).size, journey.length);
  assert.equal(new Set(journey.map((item) => item.name)).size, journey.length);
  for (const item of journey) {
    assert.ok(
      groups.some((group) => group.id === item.group),
      item.name,
    );
    assert.ok(
      item.title && item.purpose && item.learned.length && item.stack.length,
      item.name,
    );
    assert.ok(
      item.repo.startsWith("https://github.com/jonghwa3471/"),
      item.name,
    );
    assert.ok(Number.isInteger(item.commits) && item.commits > 0, item.name);
  }
});

test("날짜는 유효하며 생성 연도와 연도 필터가 일치한다", () => {
  for (const item of journey) {
    assert.match(item.created, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(item.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(!Number.isNaN(Date.parse(item.created)));
    assert.ok(!Number.isNaN(Date.parse(item.updated)));
    assert.equal(item.year, item.created.slice(0, 4));
    assert.equal(item.period, item.created.replaceAll("-", "."));
  }
});

test("모든 이미지·상세 페이지 파일이 존재하고 이미지 출처가 있다", () => {
  for (const item of journey) {
    for (const image of item.images || []) {
      const file = path.resolve(root, image.src);
      assert.ok(file.startsWith(root + path.sep));
      assert.ok(fs.existsSync(file), file);
      assert.ok(fs.statSync(file).size > 1000, file);
      assert.match(image.source, /^https:\/\//);
      assert.ok(image.caption);
    }
    if (item.detail)
      assert.ok(
        fs.existsSync(path.join(root, "src/app/projects/eokka/page.tsx")),
      );
  }
});

test("블로그는 검증한 개별 글 링크이고 기술 글과 회고가 구분된다", () => {
  assert.equal(journey.filter((item) => item.blogs.length).length, 34);
  for (const item of journey)
    for (const blog of item.blogs) {
      assert.match(blog.url, /^https:\/\/j2yonghwa\.tistory\.com\/\d+$/);
      assert.ok(blog.title);
      assert.ok(["관련 개념", "학습 회고"].includes(blog.kind));
    }
});

test("기존 상세 링크 ID를 유지하고 미확인 개인 경험을 생성하지 않는다", () => {
  for (const id of [
    "kakao",
    "todo",
    "paintbox",
    "wetube",
    "trello",
    "netflix",
    "carrot",
    "wemake",
    "eokka",
  ]) {
    assert.ok(
      journey.some((item) => item.id === id),
      id,
    );
  }
  for (const item of journey) assert.equal(item.challenge, undefined);
});
