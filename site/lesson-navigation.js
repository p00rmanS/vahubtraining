"use strict";
// Always-reachable previous/next bar plus Left/Right arrow shortcuts.

const lessonBar = document.createElement("nav");
lessonBar.className = "lesson-navigation";
lessonBar.setAttribute("aria-label", "Previous and next lessons");
lessonBar.hidden = true;
document.body.appendChild(lessonBar);

const TEXT_CONTROLS =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"],[role="combobox"],[role="slider"],[role="listbox"],[role="menu"],[role="tablist"]';

const currentLessonIndex = () =>
  lessons.findIndex((l) => "#lesson/" + l.id === location.hash);

function stepButton(kind, target) {
  const previous = kind === "previous";
  const label = previous ? "Previous" : "Next";
  const edge = previous ? "first" : "last";
  const aria = target
    ? `${label} lesson: ${target.title}`
    : `${label} lesson unavailable — ${edge} lesson`;
  const title = target ? target.title : `You’re at the ${edge} lesson`;
  return `<button data-step="${kind}" ${target ? "" : "disabled"} aria-keyshortcuts="Arrow${previous ? "Left" : "Right"}" aria-label="${esc(aria)}"><span class="nav-label">${previous ? "← " : ""}${label}${previous ? "" : " →"}</span><span class="nav-title">${esc(title)}</span></button>`;
}

function refreshLessonBar() {
  const index = currentLessonIndex();
  const focused = lessonBar.contains(document.activeElement)
    ? document.activeElement.dataset.step
    : null;
  lessonBar.hidden = index < 0;
  document.body.classList.toggle("has-lesson-navigation", index >= 0);
  if (index < 0) {
    lessonBar.replaceChildren();
    return;
  }
  lessonBar.innerHTML = `${stepButton("previous", lessons[index - 1])}<div class="nav-position"><a href="#learn">All lessons</a><span>${index + 1} / ${lessons.length}</span><span class="keyboard-hint">Left / Right arrow keys</span></div>${stepButton("next", lessons[index + 1])}`;
  if (focused) {
    const button = lessonBar.querySelector(`[data-step="${focused}"]`);
    (button && !button.disabled ? button : lessonBar.querySelector("a")).focus({
      preventScroll: true,
    });
  }
}

function navigateLessonStep(direction) {
  const target = lessons[currentLessonIndex() + direction];
  if (currentLessonIndex() < 0 || !target) return false;
  location.hash = "lesson/" + target.id;
  return true;
}

lessonBar.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-step]");
  if (button && !button.disabled)
    navigateLessonStep(button.dataset.step === "previous" ? -1 : 1);
});

document.addEventListener("keydown", (event) => {
  if (
    event.defaultPrevented ||
    event.repeat ||
    event.isComposing ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
  )
    return;
  const target = event.target;
  if (
    target instanceof Element &&
    (target.closest(TEXT_CONTROLS) || target.isContentEditable)
  )
    return;
  if (window.getSelection()?.toString()) return;
  if (navigateLessonStep(event.key === "ArrowLeft" ? -1 : 1))
    event.preventDefault();
});

document.addEventListener("va:rendered", refreshLessonBar);
refreshLessonBar();
