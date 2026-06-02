const hero = document.getElementById("hero");
const projectsRow = document.getElementById("projectsRow");
const projectsSection = projectsRow.closest(".projects");

let ticking = false;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function updateContrast(scrollY) {
  const transitionStart = hero.offsetHeight * 0.72;
  const transitionProgress = clamp(
    (scrollY - transitionStart) / Math.max(window.innerHeight * 0.45, 1),
    0,
    1
  );

  document.body.classList.toggle("light-mode", transitionProgress > 0.5);
}

function updateProjects(scrollY) {
  if (window.matchMedia("(max-width: 900px)").matches) {
    projectsRow.style.transform = "none";
    projectsSection.style.removeProperty("--projects-height");
    return;
  }

  const rowWidth = projectsRow.scrollWidth;
  const travel = Math.max(rowWidth - window.innerWidth + 36, 0);
  const rowHeight = projectsRow.offsetHeight;
  const sectionHeight = Math.max(
    window.innerHeight,
    travel + rowHeight + window.innerHeight * 0.18
  );

  projectsSection.style.setProperty("--projects-height", `${sectionHeight}px`);

  const projectsTop = projectsSection.offsetTop;
  const projectsHeight = projectsSection.offsetHeight;
  const progress = clamp(
    (scrollY - projectsTop) / Math.max(projectsHeight - window.innerHeight, 1),
    0,
    1
  );

  projectsRow.style.transform = `translateX(${-travel * progress}px)`;
}

function updateScrollEffects() {
  const scrollY = window.scrollY;

  updateContrast(scrollY);
  updateProjects(scrollY);

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
});

window.addEventListener("resize", updateScrollEffects);
window.addEventListener("load", updateScrollEffects);

projectsRow.querySelectorAll("img").forEach((image) => {
  image.addEventListener("load", updateScrollEffects, { once: true });
});

updateScrollEffects();
