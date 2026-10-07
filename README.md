# VA Hub Training

A static, responsive virtual assistant academy with 61 English lessons, Taglish explanations, pro tips, exercises, quizzes, templates, and client simulations.

## Run locally

Install Node.js and Python, then:

```sh
npm ci --ignore-scripts
npm run check
python -m http.server 8765 --directory site
```

Open http://localhost:8765. Use Left/Right arrow keys or the fixed Previous/Next controls to move between lessons. Arrow shortcuts do not interrupt text inputs or form controls.

## Source structure

- `site/index.html`: page shell and ordered script loading.
- `site/app.js`: navigation, lesson rendering, notes, quizzes, and progress.
- `site/lesson-navigation.js`: fixed navigation and keyboard shortcuts.
- `site/course*.js`: lesson and assignment content, appended with stable IDs.
- `site/mentoring.js`: Taglish explanations and pro tips for the original lessons.
- `site/style.css`: desktop and mobile styles.
- `scripts/check.cjs`: content, syntax, asset, and security checks.

No API keys, environment variables, backend, or runtime packages are required. Prettier is only a development formatter. Run `npm run format` after edits and `npm run check` before pushing.

## GitHub Pages

In repository Settings → Pages, choose GitHub Actions as the source. The workflow checks pull requests and deploys pushes to `main` only after checks pass. It publishes only `site/`, never the whole repository. The expected project URL is https://p00rmans.github.io/vahubtraining/ after successful deployment.

The site uses relative asset paths and hash navigation, so it works under the repository URL prefix. No custom domain or secrets are needed.

## Progress and privacy

Notes and completion records are stored in localStorage on the current browser and origin. They are not sent to a server. Moving from the private Sites URL to GitHub Pages creates a separate storage origin, so old progress does not transfer automatically. Export your progress from the old site for a backup. GitHub Pages makes the training content accessible to visitors; it does not publish your browser's notes.

Use fictional data for practice. This academy is a learning resource, not a certification or employment guarantee.
