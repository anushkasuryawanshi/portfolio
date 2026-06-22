const hero = document.getElementById("hero");
const projectsRow = document.getElementById("projectsRow");
const projectsSection = projectsRow.closest(".projects");
const modalLayer = document.getElementById("projectModalLayer");
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImages = document.getElementById("modalImages");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalDiscipline = document.getElementById("modalDiscipline");
const modalMeta = document.getElementById("modalMeta");

const projectData = {
  toru: {
    accent: "#ef1b13",
    kicker: "Ambient object / Toru",
    title: "Most homes are lit for visibility, not for moments.",
    paragraphs: [
      "Late dinners, quiet conversations, reading before bed, or simply sitting with a cup of tea often happen under bright overhead lights designed for tasks rather than atmosphere. The result is a space that feels illuminated, but not comfortable.",
      "TORU was created to change that. Its soft, downward glow creates a gentle pool of light that accompanies a moment rather than dominating it. TORU is not designed to light a room. It is designed to shape a moment."
    ],
    lead: "TORU was created to change that.",
    discipline: "Industrial design",
    meta: "2024",
    images: [
      { src: "assets/toru-hero.png", alt: "Toru ambient lamp glowing against a dark background", caption: "Toru / Ambient light study" },
      { src: "assets/project-toru.png", alt: "Toru ambient lamp product view", caption: "Toru / Form and glow" }
    ]
  },
  earthy: {
    accent: "#647d8f",
    kicker: "Luxury wellness / Earthy",
    title: "Reimagining how water is experienced in the home.",
    paragraphs: [
      "Earthy is a luxury wellness water purifier brand reimagining how water is experienced in the home. I contributed to the development of the brand identity while leading the design of key product touchpoints, including product branding, packaging, and the user manual.",
      "Spanning packaging structure, visual language, 3D visualisation, and imagery, my work focused on creating a cohesive product experience that balanced functionality, premium perception, and a refined unboxing journey."
    ],
    discipline: "Product experience",
    meta: "Earthy",
    images: [
      { src: "assets/earthy-hero.png", alt: "Earthy luxury water purifier in a dark studio setting", caption: "Earthy / Product visualisation" },
      { src: "assets/project-earthy.png", alt: "Earthy packaging system", caption: "Earthy / Packaging system" }
    ]
  },
  frame: {
    accent: "#69696e",
    kicker: "Hospitality brochure / The Frame",
    title: "A building conceived as a frame, translated into print.",
    paragraphs: [
      "The Frame is a brochure for Pooja Crafted Homes' hospitality collaboration with JW Marriott. As part of the design team, I worked on the brochure cover, helping develop its layered construction and print production strategy. The building itself acts as a frame—filtering light, views, and movement—and the cover translates this concept into a tactile visual language through depth, layering, and material expression."
    ],
    discipline: "Print production",
    meta: "The Frame",
    images: [
      { src: "assets/frame-hero.png", alt: "Layered black paper construction created for The Frame brochure cover", caption: "The Frame / Layered cover construction" },
      { src: "assets/project-frame.png", alt: "The Frame print system", caption: "The Frame / Material and print detail" }
    ]
  },
  chair: {
    accent: "#795139",
    kicker: "Furniture study / Chandigarh Chair",
    title: "A material and construction study of the iconic Chandigarh Chair.",
    paragraphs: [
      "The project involved accurately reproducing the chair to understand its dimensions, joinery, section profiles, and structural geometry. Through machining, hand-finishing, and assembly, I studied how wood grain, material thickness, tolerances, and joint detailing influence strength, ergonomics, and visual lightness. The exercise provided valuable insight into furniture construction, precision manufacturing, and the relationship between material decisions and form."
    ],
    discipline: "Furniture construction",
    meta: "Material study",
    images: [
      { src: "assets/chair-hero.jpg", alt: "Reproduction of the Chandigarh Chair against a pale studio wall", caption: "Chandigarh Chair / Completed study" },
      { src: "assets/project-chair.jpg", alt: "Chandigarh Chair construction study", caption: "Chandigarh Chair / Form and construction" }
    ]
  },
  retrace: {
    accent: "#4d705b",
    kicker: "Presentation object / Retrace",
    title: "A custom birch plywood box for a pioneering low-carbon community.",
    paragraphs: [
      "For Retrace, a pioneering low-carbon housing community in India, I was part of the team that designed a custom birch plywood box to package the project’s coffee table book and supplemental pamphlets. I led the 3D modelling and prototyping of the box, exploring opening mechanisms and interaction details to create a seamless and intuitive unboxing experience.",
      "Drawing from the materiality and architectural language of the homes, the design combined exposed grain, concealed hinges, and softly rounded edges to create a refined, understated object. I also contributed to the creative direction of the product and publication photography, helping elevate the publication into a collectible expression of the brand."
    ],
    discipline: "Packaging / Product direction",
    meta: "2025",
    images: [
      { src: "assets/project-retrace.jpg", alt: "Retrace coffee table book and custom birch plywood presentation box", caption: "Retrace / Birch plywood presentation box" }
    ]
  }
};

let ticking = false;
let lastFocusedElement = null;

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

function createProjectFigure(image, index) {
  const figure = document.createElement("figure");
  figure.className = `project-modal__figure${index === 0 ? " project-modal__figure--hero" : ""}`;

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const caption = document.createElement("figcaption");
  caption.className = "project-modal__caption";
  caption.textContent = image.caption;

  figure.append(img, caption);
  return figure;
}

function openProject(projectId, trigger) {
  const project = projectData[projectId];
  if (!project) return;

  lastFocusedElement = trigger;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalDiscipline.textContent = project.discipline;
  modalMeta.textContent = project.meta;
  modal.style.setProperty("--project-accent", project.accent);

  modalBody.replaceChildren();
  modalBody.classList.toggle("is-single", project.paragraphs.length === 1);
  project.paragraphs.forEach((copy) => {
    const paragraph = document.createElement("p");
    if (project.lead && copy.startsWith(project.lead)) {
      const lead = document.createElement("strong");
      lead.textContent = project.lead;
      paragraph.append(lead, document.createTextNode(copy.slice(project.lead.length)));
    } else {
      paragraph.textContent = copy;
    }
    modalBody.append(paragraph);
  });

  modalImages.replaceChildren(...project.images.map(createProjectFigure));
  modalImages.scrollTop = 0;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProject() {
  modalLayer.classList.remove("is-open");
  modalLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

projectsRow.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    openProject(card.dataset.project, card);
  });
});

modalClose.addEventListener("click", closeProject);

modalLayer.addEventListener("click", (event) => {
  if (event.target === modalLayer) closeProject();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalLayer.classList.contains("is-open")) {
    closeProject();
  }

  if (event.key === "Tab" && modalLayer.classList.contains("is-open")) {
    const focusable = [modalImages, modalClose];
    const currentIndex = focusable.indexOf(document.activeElement);
    if (event.shiftKey && currentIndex <= 0) {
      event.preventDefault();
      modalImages.focus();
    } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
      event.preventDefault();
      modalClose.focus();
    }
  }
});

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
