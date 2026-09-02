(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const style = document.createElement("style");
  style.textContent = `
    body.has-dot-cursor,
    body.has-dot-cursor a,
    body.has-dot-cursor button,
    body.has-dot-cursor [role="button"] {
      cursor: none;
    }

    body.has-dot-cursor [contenteditable="true"] {
      cursor: text;
    }

    .cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: 8px;
      height: 8px;
      pointer-events: none;
      background: #fff;
      border-radius: 50%;
      mix-blend-mode: difference;
      opacity: 0;
      transform: translate3d(-50%, -50%, 0);
      transition: opacity 160ms ease, width 160ms ease, height 160ms ease;
    }

    .cursor-dot.is-visible {
      opacity: 1;
    }

    .cursor-dot.is-active {
      width: 14px;
      height: 14px;
    }
  `;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.head.append(style);
  document.body.append(dot);
  document.body.classList.add("has-dot-cursor");

  window.addEventListener("pointermove", (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    dot.classList.add("is-visible");
  });

  window.addEventListener("pointerdown", () => {
    dot.classList.add("is-active");
  });

  window.addEventListener("pointerup", () => {
    dot.classList.remove("is-active");
  });

  document.addEventListener("mouseleave", () => {
    dot.classList.remove("is-visible");
  });
})();
