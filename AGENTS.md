# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** marketing site (App Router) for "Kedy", an AI-powered salon communication platform. It is a single-service, fully static site with no backend, no database, and no environment variables.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |

- **Package manager**: npm (lockfile: `package-lock.json`)
- **i18n**: Two locales — `/en` and `/tr`. The root `/` redirects to a locale.
- **No automated tests**: The project has no test framework or test files. Validate changes via `npm run lint`, `npm run build`, and manual browser testing.
- **No `.env` required**: All content is hardcoded in `src/content/`. No secrets or environment variables are needed.
- **Contact form**: The form on `/[locale]/contact` is UI-only with no API endpoint wired up.
