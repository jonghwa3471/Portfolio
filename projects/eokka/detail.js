const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
let pending = false;

function updateNavigation() {
  const marker = (document.querySelector(".site-header")?.offsetHeight ?? 72) + 100;
  let active = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) active = section.id;
  }
  for (const link of links) {
    const current = link.hash === `#${active}`;
    link.classList.toggle("is-active", current);
    if (current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  pending = false;
}

function scheduleNavigation() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(updateNavigation);
}

window.addEventListener("scroll", scheduleNavigation, { passive: true });
window.addEventListener("resize", scheduleNavigation);
updateNavigation();

const imageModal = document.querySelector(".image-modal");
const modalImage = imageModal.querySelector("img");
const modalCaption = imageModal.querySelector("figcaption");
const closeButton = imageModal.querySelector("button");
let imageOpener = null;

// Give cover images the same keyboard and click behavior as inline images.
document.querySelectorAll(".project-cover > img").forEach((image) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-cover__image-button";
  button.setAttribute("aria-label", `${image.alt} 크게 보기`);
  image.before(button);
  button.append(image);
});

document.querySelectorAll(".context-shot a, .project-cover__image-button").forEach((trigger) => {
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.addEventListener("click", (event) => {
    // Preserve the browser's open-in-new-tab gesture on image links.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const image = trigger.querySelector("img");
    imageOpener = trigger;
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.alt;
    imageModal.showModal();
    document.body.classList.add("image-modal-open");
    closeButton.focus();
  });
});

closeButton.addEventListener("click", () => imageModal.close());
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) imageModal.close();
});
imageModal.addEventListener("close", () => {
  document.body.classList.remove("image-modal-open");
  modalImage.removeAttribute("src");
  imageOpener?.focus({ preventScroll: true });
});
