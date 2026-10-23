const params = new URLSearchParams(location.search);
const projects = window.PORTFOLIO_DATA?.journey ?? [];
const item = projects.find((project) => project.id === params.get("id"));
const safe = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
const formatDate = (value) => value?.replaceAll("-", ".") ?? "확인되지 않음";

if (!item) {
  document.querySelector("#detail-content").innerHTML = '<div class="detail-title"><h1>학습 기록을<br />찾을 수 없습니다.</h1></div>';
} else if (item.detail) {
  location.replace(item.detail);
} else {
  document.body.classList.add("learning-detail");
  document.title = `${item.title} · 송종화 포트폴리오`;
  const related = projects.filter((project) => project.group === item.group && project.id !== item.id && project.id !== "eokka")
    .sort((a, b) => b.created.localeCompare(a.created)).slice(0, 3);
  document.querySelector("#detail-content").innerHTML = `<div class="detail-title"><div><p class="label">${safe(item.group)} · ${safe(item.kind)}</p><h1>${safe(item.title)}</h1></div><p>${safe(item.purpose)}</p></div>
    <div class="detail-meta"><div><span>저장소 생성일</span><strong>${formatDate(item.created)}</strong></div><div><span>마지막 커밋일</span><strong>${formatDate(item.updated)}</strong></div><div><span>확인한 커밋</span><strong>${item.commits ?? "—"}개 · 기본 브랜치</strong></div><div><span>관련 학습 글</span><strong>${item.blogs.length}편</strong></div></div>
    <p class="learning-date-note">날짜는 GitHub 기록 기준입니다. 두 날짜 사이를 연속 개발 기간으로 계산하지 않았습니다.</p>`;
  const images = item.images ?? [];
  const challengeTitles = new Set([
    "반응형 디자인의 가능성과 어려움",
    "DOM을 직접 다루며 느낀 번거로움",
    "구현하지 못한 기능에서 남은 과제",
    "재생바와 실제 영상 상태를 맞추는 어려움",
    "이벤트별 역할을 나누며 다듬은 조작 경험",
    "강의와 다른 환경에서 직접 해결책 찾기",
  ]);
  const reflectionCategory = (reflection) => reflection.category || (challengeTitles.has(reflection.title) ? "challenge" : "positive");
  const codeHighlights = item.codeHighlights?.length ? `<section class="detail-block"><h2>인상 깊었던 코드</h2><div class="learning-code-highlights">${item.codeHighlights.map((entry) => `<article><h3>${safe(entry.title)}</h3><p>${safe(entry.description)}</p><div class="learning-code-label">${safe(entry.language || "CSS")} · 핵심 코드 발췌</div><pre><code>${safe(entry.code)}</code></pre><p>${safe(entry.takeaway)}</p></article>`).join("")}</div></section>` : "";
  const reflectionImage = (reflection) => reflection.image ? `<figure><button type="button" class="learning-image" data-image="${safe("../" + reflection.image.replace(/^\.\//, ""))}" data-caption="${safe(reflection.imageCaption)}" aria-label="오류 해결 기록 크게 보기"><img src="${safe("../" + reflection.image.replace(/^\.\//, ""))}" alt="${safe(reflection.imageCaption)}" loading="lazy" /><span aria-hidden="true">크게 보기 ↗</span></button><figcaption>${safe(reflection.imageCaption)}</figcaption></figure>` : "";
  document.querySelector("#detail-body").innerHTML = `
    ${item.motivation ? `<section class="detail-block"><h2>이 공부를 시작한 이유</h2><p>${safe(item.motivation)}</p></section>` : ""}
    <section class="detail-block"><h2>무엇을 배웠나요?</h2><div><p>${safe(item.purpose)}</p><ul>${item.learned.map((point) => `<li>${safe(point)}</li>`).join("")}</ul><div class="badges">${item.stack.map((stack) => `<span>${safe(stack)}</span>`).join("")}</div></div></section>
    ${item.reflections?.length ? `<section class="detail-block"><h2>공부하며 느낀 점</h2><div class="learning-reflections">${[{id:"positive",title:"좋았던 점"},{id:"challenge",title:"어려웠던 점과 남은 과제"}].map((group) => {
      const entries = item.reflections.filter((reflection) => reflectionCategory(reflection) === group.id);
      if (!entries.length) return "";
      return `<div class="learning-reflection-group" data-kind="${group.id}"><h3 class="learning-reflection-group-title">${group.title}</h3>${entries.map((reflection) => `<article><h4>${safe(reflection.title)}</h4><p>${safe(reflection.text)}</p>${reflectionImage(reflection)}${reflection.link && /^https:\/\//.test(reflection.link) ? `<a href="${safe(reflection.link)}" target="_blank" rel="noreferrer">${safe(reflection.linkLabel || "관련 기록")} ↗</a>` : ""}</article>`).join("")}</div>`;
    }).join("")}</div></section>` : ""}
    ${codeHighlights}
    ${images.length ? `<section class="detail-block"><h2>프로젝트 화면</h2><div class="learning-gallery${item.galleryLayout === "landscape" ? " learning-gallery--landscape" : ""}">${images.map((image) => `<figure><button type="button" class="learning-image" data-image="${safe("../" + image.src.replace(/^\.\//, ""))}" data-caption="${safe(image.caption)}" aria-label="${safe(item.title)} 화면 크게 보기"><img src="${safe("../" + image.src.replace(/^\.\//, ""))}" alt="${safe(item.title)} · ${safe(image.caption)}" loading="lazy" /><span aria-hidden="true">크게 보기 ↗</span></button><figcaption>${safe(image.caption)}</figcaption></figure>`).join("")}</div></section>` : ""}
    ${item.nextDirection ? `<section class="detail-block"><h2>다음 학습 방향</h2><p>${safe(item.nextDirection)}</p></section>` : ""}
    ${item.blogs.length ? `<section class="detail-block"><h2>글로 남긴 학습</h2><div><p>프로젝트에서 다룬 주제와 연결되는 블로그 기록입니다. 관련 개념 글은 프로젝트 자체의 개발 후기가 아닌 기술 정리 글입니다.</p><div class="learning-blog-list">${item.blogs.map((blog) => `<a href="${safe(blog.url)}" target="_blank" rel="noreferrer"><span>${safe(blog.kind)}</span><strong>${safe(blog.title)}</strong><i aria-hidden="true">↗</i></a>`).join("")}</div></div></section>` : ""}
    <section class="detail-block"><h2>코드에서 확인하기</h2><div>${item.course ? `<p class="learning-course"><a href="${safe(item.course.url)}" target="_blank" rel="noreferrer">관련 강의 · ${safe(item.course.title)} ↗</a></p><p class="learning-date-note">커리큘럼과 구현 파일을 대조해 정리한 학습 기록입니다. 강의 전체 기능의 구현·완성을 의미하지 않습니다.</p>` : `<p>실제 구현 파일을 바탕으로 정리한 학습 기록입니다.</p>`}${item.sources.length ? `<details class="learning-evidence"><summary>구현 근거 코드 ${item.sources.length}개 살펴보기</summary><ul class="learning-source-list">${item.sources.map((path) => `<li><a href="${safe(item.repo + "/blob/" + item.branch + "/" + path.split("/").map(encodeURIComponent).join("/"))}" target="_blank" rel="noreferrer">${safe(path)} ↗</a></li>`).join("")}</ul></details>` : ""}${item.runtimeNote ? `<p class="learning-runtime">${safe(item.runtimeNote)}</p>` : ""}<div class="learning-actions"><a href="${safe(item.repo)}" target="_blank" rel="noreferrer">GitHub 저장소 ↗</a>${item.demo ? `<a href="${safe(item.demo)}" target="_blank" rel="noreferrer">프로젝트 실행 ↗</a>` : ""}</div>${item.demo ? `<p class="learning-date-note">${safe(item.demoStatus || "저장소에 안내된 배포 주소입니다. 외부 API·배포 상태에 따라 일부 기능이 제한될 수 있습니다.")}</p>` : ""}</div></section>
    ${related.length ? `<section class="detail-block"><h2>같은 기술, 다른 시도</h2><div class="learning-related">${related.map((project) => `<a href="./detail.html?id=${encodeURIComponent(project.id)}"><span>${project.year} · ${safe(project.group)}</span><strong>${safe(project.title)} ↗</strong><p>${safe(project.purpose)}</p></a>`).join("")}</div></section>` : ""}`;
  if (images.length || item.reflections?.some((reflection) => reflection.image)) {
    const dialog = document.createElement("dialog");
    dialog.className = "learning-lightbox";
    dialog.setAttribute("aria-label", "프로젝트 화면 크게 보기");
    dialog.innerHTML = '<button type="button" aria-label="이미지 닫기"><span>닫기</span><span aria-hidden="true">×</span></button><img alt="" /><p></p>';
    document.body.append(dialog);
    document.querySelectorAll("[data-image]").forEach((button) => button.addEventListener("click", () => {
      dialog.querySelector("img").src = button.dataset.image;
      dialog.querySelector("img").alt = `${item.title} · ${button.dataset.caption}`;
      dialog.querySelector("p").textContent = button.dataset.caption;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }));
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
  }
}
