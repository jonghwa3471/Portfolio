const params = new URLSearchParams(location.search);
const item = (window.PORTFOLIO_DATA?.journey ?? []).find((project) => project.id === params.get("id"));
const safe = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);

if (!item) {
  document.querySelector("#detail-content").innerHTML = `<div class="detail-title"><h1>프로젝트를<br/>찾을 수 없습니다.</h1></div>`;
} else if (item.detail) {
  location.replace(item.detail);
} else {
  document.title = `${item.title} · 송종화 포트폴리오`;
  document.querySelector("#detail-content").innerHTML = `<div class="detail-title"><div><p class="label">학습 프로젝트 · ${safe(item.year)}</p><h1>${safe(item.title)}</h1></div><p>${safe(item.purpose)}</p></div><div class="detail-meta"><div><span>진행 기간</span><strong>${safe(item.period)}</strong></div><div><span>구분</span><strong>개인 학습 프로젝트</strong></div><div><span>집중 영역</span><strong>${safe(item.stack.slice(0,2).join(" · "))}</strong></div><div><span>저장소</span><strong>GitHub 공개</strong></div></div>`;
  document.querySelector("#detail-body").innerHTML = `<section class="detail-block"><h2>학습 목적</h2><div><h3>${safe(item.purpose)}</h3><p>새로운 기술을 강의에서 확인하는 데 그치지 않고 직접 화면과 기능으로 구현하며 작동 흐름을 이해하는 것을 목표로 진행했습니다.</p><div class="badges">${item.stack.map((stack)=>`<span>${safe(stack)}</span>`).join("")}</div></div></section><section class="detail-block"><h2>배운 내용</h2><div><ul>${item.learned.map((point)=>`<li>${safe(point)}</li>`).join("")}</ul></div></section><section class="detail-block"><h2>어려웠던 부분</h2><div><h3>구현 과정에서 마주한 문제</h3><p>${safe(item.challenge)}</p></div></section><section class="detail-block"><h2>프로젝트 화면</h2><div class="gallery-grid"><div class="image-placeholder"><p><strong>대표 화면 예정</strong>journey/${safe(item.id)}/images/cover.webp</p></div><div class="image-placeholder"><p><strong>기능 화면 예정</strong>journey/${safe(item.id)}/images/feature-01.webp</p></div></div></section><div class="detail-cta"><h2>코드에서 학습 과정을 확인할 수 있습니다.</h2><a href="${safe(item.repo)}" target="_blank" rel="noreferrer">GitHub 저장소 보기 ↗</a></div>`;
}
