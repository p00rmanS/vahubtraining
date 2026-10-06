// Always-reachable navigation; uses the same lesson routes as the lesson picker.
const lessonBar = document.createElement("nav");
lessonBar.className = "lesson-navigation";
lessonBar.setAttribute("aria-label", "Previous and next lessons");
lessonBar.hidden = true;
document.body.appendChild(lessonBar);
function currentLessonIndex() {
  return lessons.findIndex((l) => "#lesson/" + l.id === location.hash);
}
function refreshLessonBar() {
  const index = currentLessonIndex();
  const focusedStep = lessonBar.contains(document.activeElement)
    ? document.activeElement.dataset.step
    : null;
  lessonBar.hidden = index < 0;
  document.body.classList.toggle("has-lesson-navigation", index >= 0);
  if (index < 0) {
    lessonBar.replaceChildren();
    return;
  }
  const previous = lessons[index - 1],
    next = lessons[index + 1];
  lessonBar.innerHTML = `<button data-step="previous" ${previous ? "" : "disabled"} aria-keyshortcuts="ArrowLeft" aria-label="${previous ? "Previous lesson: " + esc(previous.title) : "Previous lesson unavailable — first lesson"}"><span class="nav-label">Previous</span><span class="nav-title">${previous ? esc(previous.title) : "You’re at the first lesson"}</span></button><div class="nav-position"><a href="#learn">All lessons</a><span>${index + 1} / ${lessons.length}</span><span class="keyboard-hint">Left / Right arrow keys</span></div><button data-step="next" ${next ? "" : "disabled"} aria-keyshortcuts="ArrowRight" aria-label="${next ? "Next lesson: " + esc(next.title) : "Next lesson unavailable — last lesson"}"><span class="nav-label">Next</span><span class="nav-title">${next ? esc(next.title) : "You’re at the last lesson"}</span></button>`;
  if (focusedStep) {
    const button = lessonBar.querySelector(`[data-step="${focusedStep}"]`);
    if (button && !button.disabled) button.focus({ preventScroll: true });
    else lessonBar.querySelector("a").focus({ preventScroll: true });
  }
}
function navigateLessonStep(direction) {
  const index = currentLessonIndex();
  if (index < 0) return false;
  const next = lessons[index + direction];
  if (!next) return false;
  location.hash = "lesson/" + next.id;
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
    event.shiftKey
  )
    return;
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  const target = event.target;
  if (
    target instanceof Element &&
    (target.closest(
      'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"],[role="combobox"],[role="slider"],[role="listbox"],[role="menu"],[role="tablist"]',
    ) ||
      target.isContentEditable)
  )
    return;
  if (window.getSelection()?.toString()) return;
  if (navigateLessonStep(event.key === "ArrowLeft" ? -1 : 1))
    event.preventDefault();
});
window.addEventListener("hashchange", refreshLessonBar);
refreshLessonBar();
