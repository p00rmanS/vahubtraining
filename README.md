# VA Hub Training

A static, responsive virtual assistant academy with 128 English lessons, Taglish explanations, pro tips, exercises, quizzes, templates, and client simulations.

## Run locally

Install Node.js and Python, then:

```sh
npm ci --ignore-scripts
npm run check
python -m http.server 8765 --directory site
```

Open http://localhost:8765. Use Left/Right arrow keys or the fixed Previous/Next controls to move between lessons. Arrow shortcuts do not interrupt text inputs or form controls.

## Features

Lessons with Taglish explanations and pro tips, quizzes and readiness checks, a portfolio tracker for every lesson's deliverable, two timed mock paid trials with a pass rule (80% and no zero on critical criteria), a Real-life tips page with a tip of the day, a daily review session that quizzes you on finished lessons with spaced repetition, a study streak with achievements, light and dark themes, and progress export and import. All progress stays in the browser.

## Source structure

- `site/index.html`: page shell, strict CSP, and ordered script loading.
- `site/theme.js`: applies the saved light or dark theme before first paint.
- `site/util.js`: HTML escaping, debounce, and motion preference helpers.
- `site/store.js`: persistence, validation of saved and imported data, export and import.
- `site/motion.js`: view transitions, reveal-on-scroll, count-ups, progress rings, and confetti. Everything respects `prefers-reduced-motion`.
- `site/app.js`: routing, views, and a single `data-action` event dispatcher.
- `site/lesson-navigation.js`: fixed previous and next bar plus arrow-key shortcuts.
- `site/course*.js`, `site/mentoring.js`: lesson, simulation, and Taglish content, appended with stable IDs.
- `site/exams.js`: timed mock paid-trial assessments with self-scoring criteria.
- `site/style.css`: design tokens, light and dark themes, components, motion, and responsive rules.
- `scripts/check.cjs`: content, syntax, CSP, security-pattern, and storage-validation tests.

No API keys, environment variables, backend, or runtime packages are required. Prettier is only a development formatter. Run `npm run format` after edits and `npm run check` before pushing.

## GitHub Pages

In repository Settings → Pages, choose GitHub Actions as the source. The workflow checks pull requests and deploys pushes to `main` only after checks pass. It publishes only `site/`, never the whole repository. The expected project URL is https://p00rmans.github.io/vahubtraining/ after successful deployment.

The site uses relative asset paths and hash navigation, so it works under the repository URL prefix. No custom domain or secrets are needed.

## Progress and privacy

Notes and completion records are stored in localStorage on the current browser and origin. They are not sent to a server. Moving from the private Sites URL to GitHub Pages creates a separate storage origin, so old progress does not transfer automatically. Export your progress from the old site, then use Import on the new one to restore it. GitHub Pages makes the training content accessible to visitors; it does not publish your browser's notes.

Use fictional data for practice. This academy is a learning resource, not a certification or employment guarantee.
