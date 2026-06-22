const panel = document.getElementById("summaryPanel");
const trigger = document.getElementById("summaryTrigger");
const closeButton = document.getElementById("summaryClose");

function setPanel(open) {
  panel.classList.toggle("is-open", open);
  trigger.setAttribute("aria-expanded", String(open));
}

trigger.addEventListener("click", () => {
  setPanel(!panel.classList.contains("is-open"));
});

closeButton.addEventListener("click", () => {
  setPanel(false);
  trigger.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && panel.classList.contains("is-open")) {
    setPanel(false);
    trigger.focus();
  }
});
