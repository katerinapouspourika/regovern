# ReGovern website — Claude Code guide

Read `docs/brief.md` before starting any work. It holds every decision made so far, the design direction and the open questions.

## About the project

Marketing website for **ReGovern**, an internal audit company based in Greece. Five sections: Home, About us, Services, Contact us and Blog. No users, no login, no sign-up.

The current goal is **UI/UX approval**: build every page with placeholder content and a contact form that is not wired to any service. Functionality (form sending, analytics, deployment) comes after approval.

## How we work

- Make small, focused changes: one page or component per branch.
- Ask before adding a new dependency, framework, integration or third-party service.
- Use placeholder text and images until the owner supplies real content. Mark every placeholder with a `TODO(content):` comment so they are easy to find.
- Run `npm run check` and `npm run build` before saying a change is done.

## Stack

- **Astro** static site. Pages are real HTML at build time; ship little or no client JavaScript.
- Tooling and conventions come from [templates-frontend](https://github.com/katerinapouspourika/templates-frontend): Prettier, ESLint (typescript-eslint strict), Stylelint (`stylelint-config-standard`), EditorConfig, husky + lint-staged, strict TypeScript, Node 24, npm.
- Not used from the template: the OpenAPI client (`src/api/`), Docker/nginx, Aspire proxying, the React variant.
- Blog: developer-run. Posts are Markdown files in an Astro content collection (`src/content/blog/`). No CMS.

## HTML rules

- Every page is a full HTML document rendered by Astro. Shared parts (top contact bar, header, nav, footer, cookie banner) are Astro components in `src/components/`, and pages share one layout in `src/layouts/`.
- Always set `lang`, a meaningful `<title>` and `<meta name="description">` per page.
- Semantic elements first (`header`, `nav`, `main`, `section`, `article`, `footer`, `button`); ARIA only when no native element fits.
- Every image needs `alt` (`alt=""` for decorative images). Every form control needs a `<label>`.
- Use Astro's `<Image />` for content images so they are resized and optimised.

## CSS rules

- Plain modern CSS, no preprocessor and no Tailwind: native nesting, custom properties, logical properties.
- Global styles live in `src/styles/global.css`, in the cascade layers `reset`, `tokens`, `base`. No global selectors elsewhere. Component styles use Astro's scoped `<style>` blocks.
- Use the design tokens (`--color-*`, `--space-*`, `--radius`, `--font-*`) instead of literal values. Add a token when a value repeats.
- **Light-only site.** The design has fixed dark and light sections, so do not use `light-dark()` or automatic dark mode (a deliberate departure from the template).
- Class names are kebab-case. No `!important`, no ID selectors, nesting at most two levels deep.
- Mobile first. Respect `prefers-reduced-motion`.
- Self-host fonts (no Google Fonts requests) for GDPR.

## TypeScript rules

- Strict mode. No `any`, no `!` non-null assertions, no `enum`. Named exports only.
- Never weaken `tsconfig*.json`, `eslint.config.js` or `stylelint.config.js` to make code pass.

## Git

- Branches: `main` holds only approved releases. `dev` branches from `main`. Every piece of work gets its own branch from `dev` (for example `feature/home-page`, `fix/nav-mobile`) and merges back into `dev`. `dev` merges into `main` only after the owner approves.
- Never commit or push directly to `main` or `dev`.
- Commit messages follow gitmoji: `<emoji> <Third-person imperative summary>` (for example `✨ Adds services page`).
- Commits carry only the owner's name. Never add a Co-Authored-By line, a "Generated with Claude Code" line or any other AI attribution to commit messages or PR descriptions.
