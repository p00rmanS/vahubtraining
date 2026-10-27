// Attach Taglish companion notes (example, exercise, mistake, tips, why, deep)
// and the extra detailed walkthroughs to lessons.
for (const lesson of lessons) {
  if (!lesson.deepDive && deepDiveExtra[lesson.id])
    lesson.deepDive = deepDiveExtra[lesson.id];
  lesson.fieldTip = lessonTips[lesson.id];
  lesson.tl = { ...taglishExtra[lesson.id], deep: deepTaglishExtra[lesson.id] };
}
