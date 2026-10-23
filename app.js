const journeyItems = (window.PORTFOLIO_DATA?.journey ?? []).filter((item) => item.id !== "eokka");
const journeyGroups = window.PORTFOLIO_DATA?.groups ?? [];
const journeyGrid = document.querySelector("#journey-grid");
const emptyState = document.querySelector("#empty-state");
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const journeyState = { view: "date", search: "", limit: 9 };
const searchInput = document.querySelector("#journey-search");
const moreButton = document.querySelector("#journey-more");
searchInput.value = "";

function journeyCard(item) {
  const image = item.images?.[0];
  return `<article class="journey-card">
    <a class="journey-card-link" href="./journey/detail.html?id=${encodeURIComponent(item.id)}">
      ${image ? `<div class="journey-thumb"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(item.title)} 실행 화면" loading="lazy" decoding="async" width="720" height="450" /></div>` : ""}
      <div class="journey-card-body"><div class="card-top"><time datetime="${item.created}">${item.created.replaceAll("-", ".")}</time><span>${escapeHtml(item.kind)}</span></div>
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.purpose)}</p>
      <div class="mini-badges">${item.stack.slice(0, 4).map((stack) => `<span>${escapeHtml(stack)}</span>`).join("")}${item.stack.length > 4 ? `<span>+${item.stack.length - 4}</span>` : ""}</div>
      <span class="journey-detail-link">학습 내용 보기 ↗</span></div>
    </a>
    ${item.blogs.length ? `<a class="journey-blog-link" href="${escapeHtml(item.blogs[0].url)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.title)} 관련 블로그: ${escapeHtml(item.blogs[0].title)}">${item.blogs[0].kind} · 블로그 ${item.blogs.length}편 ↗</a>` : ""}
  </article>`;
}

function renderJourney() {
  const query = journeyState.search.trim().toLocaleLowerCase();
  const filtered = journeyItems.filter((item) =>
    !query || [item.title, item.name, item.purpose, item.group, ...item.stack, ...item.learned].join(" ").toLocaleLowerCase().includes(query)
  )
    .sort((a, b) => b.created.localeCompare(a.created) || a.title.localeCompare(b.title));
  const visible = journeyState.view === "date" ? filtered.slice(0, journeyState.limit) : filtered;
  const keys = journeyState.view === "date" ? [...new Set(visible.map((item) => item.year))] : journeyGroups.map((group) => group.id);
  journeyGrid.innerHTML = keys.map((key) => {
    const items = visible.filter((item) => (journeyState.view === "date" ? item.year : item.group) === key);
    if (!items.length) return "";
    const description = journeyGroups.find((group) => group.id === key)?.description ?? "저장소 생성일 순으로 살펴보는 학습 기록";
    const cards = `<div class="journey-grid">${items.map(journeyCard).join("")}</div>`;
    const timeline = [...new Set(items.map((item) => item.year))].map((year) => {
      const yearItems = items.filter((item) => item.year === year);
      return `<section class="journey-year-section" aria-label="${escapeHtml(key)} ${year}년"><div class="journey-year-heading"><h4>${year}</h4><span>${yearItems.length}개 프로젝트 · 최신 생성일 순</span></div><div class="journey-grid">${yearItems.map(journeyCard).join("")}</div></section>`;
    }).join("");
    return journeyState.view === "date"
      ? `<section class="journey-group" aria-label="${key}년 학습"><div class="journey-group-heading"><h3>${key}</h3><span>${filtered.filter((item) => item.year === key).length}개 기록</span></div>${cards}</section>`
      : `<details class="journey-group journey-tech-group"${query ? " open" : ""}><summary><span><strong>${escapeHtml(key)}</strong><small>${escapeHtml(description)} · 펼치면 연도별로 보기</small></span><span class="journey-group-count">${items.length}<i aria-hidden="true">＋</i></span></summary>${timeline}</details>`;
  }).join("");
  document.querySelector("#journey-count").textContent = `${filtered.length}개 프로젝트${journeyState.view === "date" && visible.length < filtered.length ? ` · ${visible.length}개 표시` : ""} · ${journeyState.view === "date" ? "최신 생성일 순" : "주요 학습 분야별"}`;
  emptyState.hidden = filtered.length > 0;
  moreButton.hidden = journeyState.view !== "date" || visible.length >= filtered.length;
  moreButton.textContent = `프로젝트 더 보기 (${Math.max(0, filtered.length - visible.length)}) ↓`;
  document.querySelectorAll("[data-view]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === journeyState.view)));
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => {
  journeyState.view = button.dataset.view; journeyState.limit = 9; renderJourney();
}));
searchInput.addEventListener("input", () => { journeyState.search = searchInput.value; journeyState.limit = 9; renderJourney(); });
moreButton.addEventListener("click", () => {
  const oldCount = journeyGrid.querySelectorAll(".journey-card").length;
  journeyState.limit += 9; renderJourney();
  journeyGrid.querySelectorAll(".journey-card-link")[oldCount]?.focus({ preventScroll: true });
});
renderJourney();

// A short, evidence-backed reading path comes before the complete archive.
const learningStages = [
  { year: "2022–2024", title: "화면 구현의 기초", tech: "HTML · CSS · SCSS", text: "마크업과 레이아웃, 반복 스타일을 구성했습니다.", target: "kakao" },
  { year: "2023–2024", title: "브라우저와 상호작용", tech: "JavaScript · DOM · Canvas", text: "입력과 이벤트를 처리하고 브라우저에 데이터를 저장했습니다.", target: "todo" },
  { year: "2024–2025", title: "브라우저에서 서버로", tech: "Node.js · Express · MongoDB", text: "요청·응답과 인증, 데이터베이스 저장 흐름을 익혔습니다.", target: "wetube" },
  { year: "2024–2025", title: "데이터와 상태 관리", tech: "React · TypeScript", text: "API 데이터를 화면에 연결하고 상태 변경을 다뤘습니다.", target: "trello" },
  { year: "2025–2026", title: "서비스 출시 전, 마지막 준비", tech: "Next.js · React Router", text: "직접 기획한 서비스를 만들기 전, 인증·데이터 모델링과 서버·클라이언트 설계를 익히며 풀스택 개발의 기반을 다졌습니다.", target: "carrot" }
];
document.querySelector("#learning-path").innerHTML = learningStages.map((stage, index) => `<li><a href="#learning-${stage.target}"><span class="learning-path-step">0${index + 1} · ${stage.year}</span><h3>${stage.title}</h3><strong>${stage.tech}</strong><p>${stage.text}</p></a></li>`).join("");

const learningHighlights = [
  { id: "kakao", feature: "로그인·친구·채팅 화면을 HTML과 CSS로 구성했습니다.", point: "페이지마다 반복되는 UI와 화면별 스타일을 나누는 연습", tags: ["HTML", "CSS"], evidence: "마크업과 공통 스타일", path: "index.html" },
  { id: "todo", feature: "할 일을 추가·삭제하고, 새로고침 후에도 목록을 복원했습니다.", point: "DOM 이벤트와 실제 데이터, LocalStorage를 연결하는 흐름", tags: ["JavaScript", "DOM", "LocalStorage"], evidence: "목록 생성·삭제·저장 로직", path: "js/todo.js" },
  { id: "wetube", feature: "Node.js로 영상 서비스의 로그인과 데이터 저장을 구현했습니다.", point: "LocalStorage를 넘어 서버의 요청·응답과 데이터베이스로 확장", tags: ["Node.js", "Express", "MongoDB"], evidence: "서버 요청과 데이터 처리", path: "src/controllers/videoController.js" },
  { id: "trello", feature: "보드 사이로 카드를 이동하고 바뀐 순서를 저장했습니다.", point: "배열의 불변 업데이트와 상태·화면의 동기화", tags: ["React", "TypeScript", "Recoil"], evidence: "드래그에 따른 상태 변경", path: "src/App.tsx" },
  { id: "carrot", feature: "상품 등록 폼을 서버 처리와 데이터베이스에 연결했습니다.", point: "입력 검증과 서버·클라이언트의 역할 분리", tags: ["Next.js", "Prisma", "Zod"], evidence: "상품 등록 폼과 서버 연결", path: "app/add/page.tsx" },
  { id: "wemake", feature: "제품·커뮤니티·채용 화면을 풀스택 라우트로 구성했습니다.", point: "React Router의 서버 데이터 흐름과 Supabase·Drizzle 연결", tags: ["React Router", "Supabase", "Drizzle"], evidence: "기능별 라우트 구성", path: "app/routes.ts" }
];
document.querySelector("#learning-highlights").innerHTML = learningHighlights.map((highlight, index) => {
  const project = journeyItems.find((item) => item.id === highlight.id);
  if (!project) return "";
  const detail = project.detail ? "./projects/eokka/" : `./journey/detail.html?id=${encodeURIComponent(project.id)}`;
  const image = project.images?.[0]?.src ?? (project.id === "eokka" ? "./projects/eokka/images/home-desktop-clean.jpg" : null);
  const previews = project.id === "eokka"
    ? [{ src: image, caption: "홈 화면" }, { src: "./projects/eokka/images/dashboard-live.png", caption: "대시보드" }, { src: "./projects/eokka/images/investment-committee.jpg", caption: "포트폴리오 심사" }]
    : (project.images ?? []).slice(0, 4);
  const evidence = highlight.path ? project.repo + "/blob/" + project.branch + "/" + highlight.path : detail;
  return `<article class="learning-highlight" id="learning-${project.id}">
    <div class="learning-highlight-copy"><span class="learning-highlight-meta">0${index + 1} · ${project.year} · ${project.id === "eokka" ? "직접 기획한 개인 서비스" : project.kind}</span><h4><a href="${detail}">${escapeHtml(project.title)}</a></h4><p>${highlight.feature}</p><div class="learning-point"><span>학습 포인트</span><p>${highlight.point}</p></div><div class="mini-badges">${highlight.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="learning-highlight-links"><a href="${detail}">${image ? "화면·학습 내용" : "학습 내용"} ↗</a><a href="${escapeHtml(evidence)}"${highlight.path ? ' target="_blank" rel="noreferrer"' : ""}>${highlight.evidence} ↗</a></div></div>
    ${previews.length ? `<a class="learning-highlight-image" href="${detail}" aria-label="${escapeHtml(project.title)} 화면과 학습 내용"><span class="learning-preview-canvas learning-preview-strip" style="--preview-count:${previews.length}">${previews.map((preview) => `<span class="learning-preview-tile"><img src="${escapeHtml(preview.src)}" alt="${escapeHtml(project.title)} · ${escapeHtml(preview.caption)}" loading="lazy" decoding="async" /></span>`).join("")}</span><span class="learning-preview-caption"><span>PROJECT PREVIEW · ${previews.length}장</span><span>자세히 보기 ↗</span></span></a>` : ""}
  </article>`;
}).join("");
const writingIds = ["41", "87", "164"];
const allBlogLinks = journeyItems.flatMap((item) => item.blogs);
document.querySelector("#learning-writing-links").innerHTML = writingIds.map((id) => {
  const blog = allBlogLinks.find((item) => item.url.endsWith("/" + id));
  return blog ? `<a href="${escapeHtml(blog.url)}" target="_blank" rel="noreferrer"><span>${blog.kind}</span><strong>${escapeHtml(blog.title)}</strong><i aria-hidden="true">↗</i></a>` : "";
}).join("");
document.querySelector(".learning-archive summary small").textContent = `${journeyItems.length}개 프로젝트 · 연도와 기술로 찾아보기`;
document.querySelectorAll("[data-learning-filter]").forEach((button) => button.addEventListener("click", () => {
  Object.assign(journeyState, { view: "tech", search: button.dataset.learningFilter, limit: 9 });
  searchInput.value = journeyState.search;
  document.querySelector("#learning-archive").open = true;
  renderJourney();
  document.querySelector("#learning-archive").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add("visible"); observer.unobserve(entry.target);
}), { threshold: .08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const navLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let scrollTicking = false;

function updateActiveNavigation() {
  const headerHeight = document.querySelector(".site-header")?.offsetHeight ?? 0;
  const marker = headerHeight + window.innerHeight * .28;
  const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let activeId = null;

  navSections.forEach((section) => {
    const bounds = section.getBoundingClientRect();
    if (bounds.top <= marker && bounds.bottom > headerHeight) activeId = section.id;
  });
  if (pageBottom && navSections.length) activeId = navSections.at(-1).id;

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollTicking = false;
}

function requestNavigationUpdate() {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(updateActiveNavigation);
}

window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
window.addEventListener("resize", requestNavigationUpdate);
navLinks.forEach((link) => link.addEventListener("click", () => {
  navLinks.forEach((item) => item.classList.toggle("is-active", item === link));
}));
updateActiveNavigation();
document.querySelector("#year").textContent = new Date().getFullYear();
