# ReGovern

Website for ReGovern, an internal audit company.

- Project brief, design direction and open questions: [docs/brief.md](docs/brief.md)
- Design references: [docs/design-references/](docs/design-references/)
- Conventions for contributors and Claude Code: [CLAUDE.md](CLAUDE.md)

## Development

Requires Node 24 (see `.nvmrc`) and npm.

```sh
npm install       # also installs the pre-commit hook (husky + lint-staged)
npm run dev       # http://localhost:4321 (Greek) and /en/ (English)
npm run check     # format check, ESLint, Stylelint, astro check, unit tests
npm run build     # type-checks and builds the static site into dist/
npm run preview   # serves dist/
```

## Project structure

| Path                           | Contents                                                                                      |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| `src/pages/`, `src/pages/en/`  | Routes: Greek at `/`, English under `/en/`. Thin files that render a page component.          |
| `src/components/pages/`        | One body component per page, shared by both languages.                                        |
| `src/components/`              | Shared components (header, footer, cards and so on).                                          |
| `src/layouts/BaseLayout.astro` | The HTML document: `lang`, title, description, canonical and `hreflang` links, font preloads. |
| `src/i18n/`                    | Languages (`config.ts`), UI strings (`el.ts`, `en.ts`) and helpers (`index.ts`).              |
| `src/styles/global.css`        | Fonts, reset, design tokens and base styles.                                                  |
| `public/fonts/`                | Self-hosted fonts. See [docs/fonts.md](docs/fonts.md).                                        |

## Branches

| Branch               | Purpose                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `main`               | Approved releases only.                                           |
| `dev`                | Integration branch. Branches from `main`.                         |
| `feature/*`, `fix/*` | One piece of work each. Branch from `dev`, merge back into `dev`. |

`dev` is merged into `main` once the client approves.
