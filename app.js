const root = document.documentElement;
const themeButton = document.querySelector(".theme-button");
const storedTheme = localStorage.getItem("portfolio-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (storedTheme) root.dataset.theme = storedTheme;
else if (prefersLight) root.dataset.theme = "light";

const updateThemeLabel = () => {
  if (!themeButton) return;
  const nextTheme = root.dataset.theme === "light" ? "어두운" : "밝은";
  themeButton.setAttribute("aria-label", `${nextTheme} 테마로 변경`);
};
updateThemeLabel();

themeButton?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  updateThemeLabel();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  revealElements.forEach((element) => revealObserver.observe(element));
}

const copyButton = document.querySelector(".copy-email");
copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  if (!email) return;
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "복사했습니다";
  } catch {
    window.location.href = `mailto:${email}`;
  }
  window.setTimeout(() => { copyButton.textContent = "이메일 복사"; }, 1800);
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
