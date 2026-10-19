const journeyItems = window.PORTFOLIO_DATA?.journey ?? [];
const journeyGrid = document.querySelector("#journey-grid");
const emptyState = document.querySelector("#empty-state");

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function renderJourney(filter = "all") {
  const filtered = filter === "all" ? journeyItems : journeyItems.filter((item) => item.stack.includes(filter));
  journeyGrid.innerHTML = filtered.map((item, index) => `
    <a class="journey-card reveal visible" href="./journey/detail.html?id=${encodeURIComponent(item.id)}" style="--delay:${index * 40}ms">
      <div class="card-top"><span>${escapeHtml(item.year)}</span><i>${String(index + 1).padStart(2, "0")}</i></div>
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.purpose)}</p>
      <div class="mini-badges">${item.stack.map((stack) => `<span>${escapeHtml(stack)}</span>`).join("")}</div>
      <strong>학습 내용 보기 ↗</strong>
    </a>`).join("");
  emptyState.hidden = filtered.length > 0;
}

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
  renderJourney(button.dataset.filter);
}));
renderJourney();

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
