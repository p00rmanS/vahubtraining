// Attach Taglish companion notes (example, exercise, mistake, tips, why) to lessons.
for (const lesson of lessons) lesson.tl = taglishExtra[lesson.id];
