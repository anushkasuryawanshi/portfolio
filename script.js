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
const modalIndex = document.getElementById("modalIndex");
const modalDiscipline = document.getElementById("modalDiscipline");
const modalMeta = document.getElementById("modalMeta");

const projectData = {
  toru: {
    accent: "#ef1b13",
    index: "01 / Overview",
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
      {
        src: "assets/toru-design-intent.jpg",
        alt: "Toru lamp glowing softly on a bedside table while someone reads in bed",
        caption: "Toru / Design intent",
        copy: {
          index: "02 / Design Intent",
          kicker: "Design Intent",
          title: "Shaping light, not the room.",
          paragraphs: [
            "The broad floating cap shields the light source from direct view, while the translucent ribbed diffuser gently scatters light to reduce glare and create a warm, comfortable glow."
          ],
          discipline: "Industrial design",
          meta: "Design intent"
        }
      },
      {
        src: "assets/toru-form-mechanism.png",
        alt: "Close-up of a hand pressing the top surface of the Toru lamp to switch it on",
        caption: "Toru / Form and mechanism",
        copy: {
          index: "03 / FORM & MECHANISM",
          kicker: "Form & Mechanism",
          title: "Integrated interaction. Minimal construction.",
          paragraphs: [
            "A gentle press-to-toggle mechanism on the top surface switches the lamp on or off, eliminating external switches and maintaining a seamless form. The lamp is constructed from 3D-printed components with a frosted ribbed translucent diffuser to soften the light and an opaque upper housing that conceals the electronics. The modular construction simplifies assembly while maintaining a clean, uninterrupted silhouette."
          ],
          discipline: "Industrial design",
          meta: "Form & mechanism"
        }
      },
      {
        src: "assets/toru-prototype-outcome.png",
        alt: "Final Toru prototype glowing warmly against an orange background",
        caption: "Toru / Prototype and outcome",
        copy: {
          index: "04 / PROTOTYPE & OUTCOME",
          kicker: "Prototype & Outcome",
          title: "From concept to prototype.",
          paragraphs: [
            "TORU evolved through iterative sketches, CAD modelling, 3D-printed prototypes, and lighting tests to refine its form, proportions, and light quality. The final prototype demonstrates how thoughtful interaction, materiality, and controlled illumination can transform a functional object into a calming everyday companion.",
            "TORU isn't designed to brighten a room. It's designed to make you want to stay in it."
          ],
          discipline: "Industrial design",
          meta: "Prototype outcome"
        }
      }
    ]
  },
  earthy: {
    accent: "#647d8f",
    index: "01 / Overview",
    kicker: "Luxury wellness / Earthy",
    title: "Reimagining how water is experienced in the home.",
    paragraphs: [
      "Earthy is a luxury wellness water purifier brand reimagining how water is experienced in the home. I contributed to the development of the brand identity while leading the design of key product touchpoints, including product branding, packaging, and the user manual.",
      "Spanning packaging structure, visual language, 3D visualisation, and imagery, my work focused on creating a cohesive product experience that balanced functionality, premium perception, and a refined unboxing journey.",
      "ROLE Brand Identity • Product Branding • Packaging Design • User Manual • 3D Visualisation • Product Imagery"
    ],
    lead: "ROLE",
    discipline: "Product experience",
    meta: "Earthy",
    images: [
      { src: "assets/earthy-hero.png", alt: "Earthy luxury water purifier in a dark studio setting", caption: "Earthy / Product visualisation" },
      {
        caption: "Earthy / Brand system",
        placeholder: "Image space reserved",
        copy: {
          index: "02 / BRAND SYSTEM",
          kicker: "Brand System",
          title: "Building a premium visual language.",
          paragraphs: [
            "The identity was developed around clarity, precision, and calm—qualities reflected across the logo, typography, colour palette, iconography, and product graphics. Every element was designed to communicate wellness without relying on conventional healthcare aesthetics."
          ],
          discipline: "Product experience",
          meta: "Brand system"
        }
      },
      {
        caption: "Earthy / User manual",
        placeholder: "Image space reserved",
        copy: {
          index: "03 / USER MANUAL",
          kicker: "User Manual",
          title: "Making technical information approachable.",
          paragraphs: [
            "A 30+ page user manual was designed to simplify installation, operation, and maintenance through a clear editorial system. Technical drawings, exploded views, schematics, UI walkthroughs, and specifications were organised into a hierarchy that balances engineering accuracy with readability."
          ],
          discipline: "Product experience",
          meta: "User manual"
        }
      },
      {
        caption: "Earthy / Packaging experience",
        placeholder: "Image space reserved",
        copy: {
          index: "04 / PACKAGING EXPERIENCE",
          kicker: "Packaging Experience",
          title: "Packaging designed as an extension of the product.",
          paragraphs: [
            "The packaging was designed to carry the same premium experience beyond the product itself. Structural development, internal organisation, graphics, and opening sequence were considered together to create an intuitive unboxing while protecting the system during transport."
          ],
          discipline: "Product experience",
          meta: "Packaging experience"
        }
      },
      {
        caption: "Earthy / Product visualisation",
        placeholder: "Image space reserved",
        copy: {
          index: "05 / PRODUCT VISUALISATION",
          kicker: "Product Visualisation",
          title: "Visualising the product before production.",
          paragraphs: [
            "High-fidelity 3D visualisations were created to communicate material finishes, lighting, and product form throughout development. These renders supported internal reviews while establishing a premium visual language for presentations and marketing.",
            "Earthy demonstrates how branding, packaging, documentation, and visualisation can work together to transform a functional appliance into a refined product experience."
          ],
          discipline: "Product experience",
          meta: "Product visualisation"
        }
      }
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
  skate: {
    accent: "#c6752c",
    index: "01 / Overview",
    kicker: "Research / Skate",
    title: "A design exploration of skateboarding culture, mobility, and product mechanics.",
    paragraphs: [
      "Skate is a design exploration of skateboarding culture, mobility, and product mechanics. The project involved researching the history and lifestyle of skating, studying and refining skateboard components to enhance ride quality, and ultimately designing and branding a skateboard that encourages skating as a fun and alternative mode of urban transport."
    ],
    discipline: "Industrial design",
    meta: "Research / Play",
    images: [
      { src: "assets/project-skate.png", alt: "Skate board industrial design study", caption: "Skate / Industrial design study" },
      {
        src: "assets/skate-research.png",
        alt: "Skateboard rider standing on a board during skate research",
        caption: "Skate / Research foundation",
        copy: {
          index: "02 / Research",
          kicker: "Research",
          title: "Understanding the culture before redesigning the product.",
          paragraphs: [
            "The project combined research into skateboarding history, riding behaviour, urban commuting, and board anatomy to identify opportunities that could make skating smoother, more intuitive, and more accessible for everyday users."
          ],
          bullets: [
            "Urban mobility",
            "Skate culture",
            "Board mechanics",
            "Rider ergonomics"
          ],
          discipline: "Industrial design",
          meta: "Research"
        }
      },
      {
        caption: "Skate / Design direction",
        placeholder: "Image space reserved",
        copy: {
          index: "03 / Design Direction",
          kicker: "Design Direction",
          title: "A compact cruiser for everyday streets.",
          paragraphs: [
            "The final concept focused on creating a stable cruiser board designed for short urban journeys. Every proportion and component was considered to improve confidence, manoeuvrability, and ride comfort without losing the playful identity of skateboarding."
          ],
          discipline: "Industrial design",
          meta: "Design direction"
        }
      },
      {
        src: "assets/skate-engineering.png",
        alt: "Exploded skateboard assembly showing deck, trucks, axles, wheels, and hardware",
        caption: "Skate / Engineering",
        copy: {
          index: "04 / Engineering",
          kicker: "Engineering",
          title: "Component studies before assembly.",
          paragraphs: [
            "The board was modelled in Fusion 360, allowing each component to be studied individually before assembly. Particular attention was given to truck geometry, wheel placement, and construction to better understand how individual parts influence ride quality."
          ],
          discipline: "Industrial design",
          meta: "Engineering"
        }
      },
      {
        src: "assets/skate-prototype.png",
        alt: "Black and white collage showing skateboard prototype fabrication steps",
        caption: "Skate / Prototype",
        copy: {
          index: "05 / Prototype",
          kicker: "Prototype",
          title: "From CAD to physical prototype.",
          paragraphs: [
            "The final prototype was fabricated using plywood and assembled by hand through cutting, shaping, sanding, drilling, and finishing. Building the board offered valuable insight into manufacturing tolerances, material behaviour, and assembly."
          ],
          discipline: "Industrial design",
          meta: "Prototype"
        }
      },
      {
        src: "assets/skate-outcome.png",
        alt: "Black and white sequence of a skateboard rider moving across an indoor floor",
        caption: "Skate / Outcome",
        copy: {
          index: "06 / Outcome",
          kicker: "Outcome",
          title: "More than a skateboard.",
          paragraphs: [
            "The project became an exploration of mobility, culture, and product engineering. By combining research with hands-on prototyping, it demonstrated how thoughtful design can encourage sustainable movement while making everyday commuting more enjoyable."
          ],
          discipline: "Industrial design",
          meta: "Outcome"
        }
      }
    ]
  },
  walkway: {
    accent: "#2f8f79",
    kicker: "Spatial graphics / Leonor's Egeria",
    title: "Transforming the visitor pathway into an introduction to the brand.",
    paragraphs: [
      "For Leonor's Egeria, I contributed to the design of the project's external branding, including the arrival canopy and site wrap. Moving beyond a flat printed surface, the canopy was developed as a layered installation using acrylic and sunboard elements that projected from the structure to create depth and hierarchy.",
      "The design communicated the project's amenities, facilities, and key differentiators through a more engaging spatial experience, transforming the visitor pathway into an introduction to the brand."
    ],
    discipline: "Spatial graphics / Installation",
    meta: "Leonor's Egeria",
    images: [
      { src: "assets/walkway-hero.png", alt: "Leonor's Egeria arrival canopy and layered site wrap graphics", caption: "Leonor's Egeria / Arrival canopy and site wrap" },
      { src: "assets/project-walkway.png", alt: "Walkway canopy graphics", caption: "Walkway Canopy / Layered spatial branding" }
    ]
  },
  chair: {
    accent: "#795139",
    index: "01 / Overview",
    kicker: "Furniture study / Chandigarh Chair",
    title: "A material and construction study of the iconic Chandigarh Chair.",
    paragraphs: [
      "The project involved accurately reproducing the chair to understand its dimensions, joinery, section profiles, and structural geometry. Through machining, hand-finishing, and assembly, I studied how wood grain, material thickness, tolerances, and joint detailing influence strength, ergonomics, and visual lightness. The exercise provided valuable insight into furniture construction, precision manufacturing, and the relationship between material decisions and form."
    ],
    discipline: "Furniture construction",
    meta: "Material study",
    images: [
      { src: "assets/chair-hero.jpg", alt: "Reproduction of the Chandigarh Chair against a pale studio wall", caption: "Chandigarh Chair / Completed study" },
      {
        caption: "Chandigarh Chair / Construction study",
        placeholder: "Image space reserved",
        copy: {
          index: "02 / UNDERSTANDING THE CONSTRUCTION",
          kicker: "Understanding the Construction",
          title: "Breaking down an icon.",
          paragraphs: [
            "The chair was reverse-engineered into individual components to study its structural logic. Orthographic drawings, dimensions, and traditional woodworking joints informed the fabrication process before machining began."
          ],
          discipline: "Furniture construction",
          meta: "Construction study"
        }
      },
      {
        caption: "Chandigarh Chair / Making",
        placeholder: "Image space reserved",
        copy: {
          index: "03 / MAKING",
          kicker: "Making",
          title: "Traditional woodworking at full scale.",
          paragraphs: [
            "Every component was machined, hand-finished, assembled, and sanded using workshop tools before applying the final finish. The woven cane seat and backrest were completed using traditional hand caning techniques."
          ],
          discipline: "Furniture construction",
          meta: "Making"
        }
      },
      {
        caption: "Chandigarh Chair / Final outcome",
        placeholder: "Image space reserved",
        copy: {
          index: "04 / FINAL OUTCOME",
          kicker: "Final Outcome",
          title: "A lesson in precision.",
          paragraphs: [
            "The completed 1:1 prototype faithfully captures the proportions, materiality, and construction of the original Chandigarh Chair while deepening my understanding of furniture manufacturing, tolerances, and craft-led design."
          ],
          discipline: "Furniture construction",
          meta: "Final outcome"
        }
      }
    ]
  },
  retrace: {
    accent: "#4d705b",
    index: "01 / Overview",
    kicker: "Presentation object / Retrace",
    title: "A custom birch plywood box for a pioneering low-carbon community.",
    paragraphs: [
      "For Retrace, a pioneering low-carbon housing community in India, I was part of the team that designed a custom birch plywood box to package the project’s coffee table book and supplemental pamphlets. My work included 3D modelling and prototyping of the box, exploring opening mechanisms and interaction details to create a seamless and intuitive unboxing experience.",
      "Drawing from the materiality and architectural language of the homes, the design combined exposed grain, concealed hinges, and softly rounded edges to create a refined, understated object. I also contributed to the creative direction of the product and publication photography, helping elevate the publication into a collectible expression of the brand."
    ],
    discipline: "Packaging / Product direction",
    meta: "2025",
    images: [
      { src: "assets/project-retrace.jpg", alt: "Retrace coffee table book and custom birch plywood presentation box", caption: "Retrace / Birch plywood presentation box" },
      {
        caption: "Retrace / Design development",
        placeholder: "Image space reserved",
        copy: {
          index: "02 / DESIGN DEVELOPMENT",
          kicker: "Design Development",
          title: "Exploring mechanisms and construction.",
          paragraphs: [
            "My work centred on studying concealed hinge solutions and alternative opening mechanisms that would preserve the uninterrupted plywood surfaces. Multiple concepts were modelled in CAD and evaluated through rapid prototypes, with several construction directions explored before arriving at the final design."
          ],
          discipline: "Packaging / Product direction",
          meta: "Design development"
        }
      },
      {
        caption: "Retrace / Prototyping",
        placeholder: "Image space reserved",
        copy: {
          index: "03 / PROTOTYPING",
          kicker: "Prototyping",
          title: "Translating ideas into physical form.",
          paragraphs: [
            "Using Fusion 360, I developed 3D models for a range of presentation box concepts, testing proportions, assembly methods, and interaction. While several explorations were eventually set aside, they informed the detailing and feasibility of the final solution."
          ],
          discipline: "Packaging / Product direction",
          meta: "Prototyping"
        }
      },
      {
        caption: "Retrace / Material and detail",
        placeholder: "Image space reserved",
        copy: {
          index: "04 / MATERIAL & DETAIL",
          kicker: "Material & Detail",
          title: "Refining the object.",
          paragraphs: [
            "The final box combines birch plywood, concealed hinges, rounded edges, and leather pull tabs to create a restrained, tactile object. Particular attention was given to maintaining clean exterior surfaces while ensuring smooth opening and reliable construction."
          ],
          discipline: "Packaging / Product direction",
          meta: "Material detail"
        }
      },
      {
        caption: "Retrace / Outcome",
        placeholder: "Image space reserved",
        copy: {
          index: "05 / OUTCOME",
          kicker: "Outcome",
          title: "Presenting the brand as an object.",
          paragraphs: [
            "I also contributed to the creative direction of the product and publication photography, helping position the presentation box as a collectible brand object rather than simply packaging for printed material."
          ],
          discipline: "Packaging / Product direction",
          meta: "Outcome"
        }
      }
    ]
  }
};

let ticking = false;
let lastFocusedElement = null;
let activeProject = null;
let activeModalCopyIndex = -1;

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
  figure.dataset.index = index;

  if (image.src) {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    figure.append(img);
  } else {
    figure.classList.add("project-modal__figure--placeholder");

    const placeholder = document.createElement("div");
    placeholder.className = "project-modal__placeholder";
    placeholder.textContent = image.placeholder || "Image space reserved";
    figure.append(placeholder);
  }

  const caption = document.createElement("figcaption");
  caption.className = "project-modal__caption";
  caption.textContent = image.caption;

  figure.append(caption);
  return figure;
}

function renderProjectText(project, copy = project) {
  modalIndex.textContent = copy.index || project.index || "01 / Overview";
  modalKicker.textContent = copy.kicker || project.kicker;
  modalTitle.textContent = copy.title || project.title;
  modalDiscipline.textContent = copy.discipline || project.discipline;
  modalMeta.textContent = copy.meta || project.meta;

  const paragraphs = copy.paragraphs || project.paragraphs;
  modalBody.replaceChildren();
  modalBody.classList.toggle("is-single", paragraphs.length === 1);
  paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    const lead = copy.lead || project.lead;

    if (lead && text.startsWith(lead)) {
      const strong = document.createElement("strong");
      strong.textContent = lead;
      paragraph.append(strong, document.createTextNode(text.slice(lead.length)));
    } else {
      paragraph.textContent = text;
    }

    modalBody.append(paragraph);
  });

  if (copy.bullets?.length) {
    const list = document.createElement("ul");
    list.className = "project-modal__bullets";

    copy.bullets.forEach((item) => {
      const bullet = document.createElement("li");
      bullet.textContent = item;
      list.append(bullet);
    });

    modalBody.append(list);
  }
}

function syncModalTextWithImage() {
  if (!activeProject) return;

  const figures = Array.from(modalImages.querySelectorAll(".project-modal__figure"));
  if (!figures.length) return;

  const containerTop = modalImages.getBoundingClientRect().top;
  const activeFigure = figures.reduce((closest, figure) => {
    const distance = Math.abs(figure.getBoundingClientRect().top - containerTop);
    return distance < closest.distance ? { figure, distance } : closest;
  }, { figure: figures[0], distance: Infinity }).figure;

  const index = Number(activeFigure.dataset.index);
  if (index === activeModalCopyIndex) return;

  activeModalCopyIndex = index;
  renderProjectText(activeProject, activeProject.images[index]?.copy || activeProject);
}

function openProject(projectId, trigger) {
  const project = projectData[projectId];
  if (!project) return;

  lastFocusedElement = trigger;
  activeProject = project;
  activeModalCopyIndex = -1;
  modalDiscipline.textContent = project.discipline;
  modalMeta.textContent = project.meta;
  modal.style.setProperty("--project-accent", project.accent);

  modalImages.replaceChildren(...project.images.map(createProjectFigure));
  modalImages.scrollTop = 0;
  syncModalTextWithImage();
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProject() {
  modalLayer.classList.remove("is-open");
  modalLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProject = null;
  activeModalCopyIndex = -1;
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

modalImages.addEventListener("scroll", syncModalTextWithImage);

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
