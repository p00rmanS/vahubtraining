# Security and privacy

## Design

This is a static website with no login, API calls, or backend. Lesson content is public. Notes, quiz choices, and progress stay in local browser storage. Avoid confidential client information on shared devices.

User-entered notes are escaped before being rendered. Browser storage is treated as untrusted input and normalized to known lesson IDs and allowed values. External links open with `noopener noreferrer`. A restrictive HTML Content Security Policy allows only same-origin scripts and styles and forbids network connections, embedded objects, and form submission. There are no inline scripts or style attributes (dynamic values are applied through CSS custom properties), and `npm run check` fails if either appears. Imported progress files are size-limited and pass through the same validation as saved data.

GitHub Pages does not support custom response headers through this repository. An HTML policy cannot enforce `frame-ancestors`, so this site does not claim comprehensive clickjacking protection. Browser storage can be read by scripts on the same origin; it is not encrypted storage or a secrets vault.

## Repository hygiene

Do not commit credentials, `.env` files, private client records, screenshots of personal notes, or generated publishing archives. `.gitignore` excludes common local artifacts. No credentials are needed for the website itself. GitHub Actions receives its own limited, short-lived deployment authorization. Workflow actions are pinned to commit SHAs and Dependabot proposes updates weekly.

The checks look for common credential patterns and verify content invariants. They reduce mistakes but are not a guarantee against every vulnerability. Review changes that add remote scripts, authentication, analytics, APIs, or uploads before deploying.

## Reporting

For suspected credential exposure, contact the repository owner privately, revoke the credential, and review Git history. Do not include secrets in public issue reports.
