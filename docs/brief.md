# ReGovern website — project brief

Decisions and design direction agreed so far. Update this file whenever a decision changes or an open question is answered.

## Goal and phases

1. **UI/UX build (current):** every page and component, placeholder content, contact form with no sending service, cookie banner and legal pages in place. Shown to the client for approval.
2. **Content:** the owner supplies real text, contact details, address, team details, services list, starter blog posts and photos. Replace every `TODO(content):` placeholder.
3. **Functionality:** contact form service, hosting and deployment, domain, analytics (if any).
4. **Release:** merge `dev` into `main`.

## Pages

| Page               | Contents                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Home**           | Hero with headline, tagline and two buttons (Our services, Contact us). Three panels overlapping the bottom of the hero: About us (dark, with photo), Our expertise (light, the four services), Latest articles (dark, two posts). Company overview sheet with stat counters and a photo. "How we work" steps. Call-to-action panel (book a consultation). Footer. |
| **About us**       | Short hero banner. Company story. Stat counters. Values (icons). Team members with photos and short bios.                                                                                                                                                                                                                                                          |
| **Services**       | Short hero banner. Card grid of all services, then one section per service with a fuller description. Placeholder services: Internal Audit, Risk Management, Regulatory Compliance, Governance Advisory.                                                                                                                                                           |
| **Contact us**     | Form (name, email, phone, company, message, privacy consent checkbox) next to phone, email, address and office hours. A static map image that links to Google Maps (no embedded map, which would set cookies). The form does not send anywhere yet; show a clear placeholder success state.                                                                        |
| **Blog**           | Grid of image cards (cover image, date, title, summary, "Read more"). Single-post template. Developer-run: Markdown files in `src/content/blog/`.                                                                                                                                                                                                                  |
| **Privacy Policy** | GDPR privacy notice (placeholder text marked for legal review).                                                                                                                                                                                                                                                                                                    |
| **Cookie Policy**  | Explains the cookies used.                                                                                                                                                                                                                                                                                                                                         |

Shared components: header with logo, nav and language switcher, footer (logo, short description, nav links, contact details, company legal details, links to the privacy and cookie policies), cookie banner, page hero banner, section heading, service card, stat counter, blog card, call-to-action band.

## Design direction

**Revised after client feedback (October 2026):** the first build, in the logo's navy and gold with dense dark bands, felt "too AI-made". The client wants the airier, more modern look of references 04 (preferred) and 06: bright photography, charcoal and slate panels, a teal accent, light greys and generous white space. The site no longer takes its colours from the logo.

Reference images are in `docs/design-references/`. They are AI-generated mockups (the text in them is garbled), so use them for layout and mood only.

| File                                                                     | What to take from it                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `04-skystructure-light.jpg`                                              | **Main reference.** Bright, sunlit architecture hero with dark serif headline and one word in teal; logo top left and a floating frosted-glass nav bar top right; three panels overlapping the bottom of the hero (dark About with photo, raised light-grey Expertise 2×2 grid with teal line icons, dark Recent items with captioned photos); thin bronze lines under panels; white "company overview" sheet on a blue-grey backdrop with teal `+15 / +350 / +80` stats and a photo. |
| `06-prosperum.jpg`                                                       | Second reference. White cards overlapping the hero, generous spacing, serif headings, and the "How we work" row of round icons joined by a line.                                                                                                                                                                                                                                                                                                                                      |
| `02-skystructure-dark.jpg`                                               | Same layout as 04 in a dark treatment. Layout only.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `01-beadvices.jpg`, `03-elevate-advisory.jpg`, `05-global-logistics.jpg` | Earlier references, now secondary.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Patterns to reproduce:

- Bright hero photo with a light wash on the text side; dark text; one headline word in teal.
- The header floats over the hero: logo on the left, navigation in a frosted-glass panel on the right. No separate top contact bar (contact details are in the footer and on the contact page).
- Panels or cards overlapping the bottom edge of the hero. On mobile they stack below it instead.
- Mix of dark slate panels, light grey panels and white sheets, each with a thin bronze line along its base.
- Thin teal line icons, teal stat figures.
- Plenty of space: large section padding, few elements per row.

### Colours

| Token                | Value     | Use                                                           |
| -------------------- | --------- | ------------------------------------------------------------- |
| `--color-ink`        | `#2A2C2E` | Headings, primary text on light backgrounds                   |
| `--color-slate-900`  | `#262C2F` | Footer                                                        |
| `--color-slate-800`  | `#323A3D` | Dark panels, primary buttons                                  |
| `--color-slate-700`  | `#3F484C` | Caption bars and dividers on dark panels                      |
| `--color-teal-500`   | `#0E8B91` | Accent for large text (headline word, stat figures) and icons |
| `--color-teal-700`   | `#0B7177` | Links, small accent text, accent button fill                  |
| `--color-teal-200`   | `#7FD3D3` | Accent on dark panels                                         |
| `--color-bronze-500` | `#9C7A5E` | Thin lines under panels and cards (decoration only)           |
| `--color-mist-500`   | `#87919B` | Blue-grey backdrop behind panels and sheets                   |
| `--color-mist-200`   | `#DBDFE2` | Light grey panels, icon circles                               |
| `--color-surface`    | `#F5F7F8` | Alternate light section background                            |
| `--color-white`      | `#FFFFFF` | Sheets and cards                                              |
| `--color-text`       | `#3A3F43` | Body text                                                     |
| `--color-text-muted` | `#545D63` | Secondary text                                                |
| `--color-on-dark`    | `#C7CFD4` | Body text on slate panels                                     |

Contrast (WCAG 2.2):

- Ink on white 14:1; ink on mist 200 10.5:1; muted text on mist 200 5:1.
- Teal 700 on white 5.8:1 (any text). Teal 500 on white 4.1:1: **large text and icons only**.
- On slate 800: white 11.6:1, teal 200 6.7:1, on-dark grey 7.4:1.
- Bronze is decoration only; never use it for text.

### Logo

Files are in `src/assets/brand/`, derived from the owner's originals in `src/assets/brand/source/`:

| File                                         | Use                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| `wordmark.png`                               | Header ("ReGovern" only; the stacked logo is unreadable at header size)  |
| `wordmark-reversed.png`, `logo-reversed.png` | Dark backgrounds such as the footer: navy turned white, gold unchanged   |
| `logo.png`                                   | Full stacked logo with the R mark and tagline, on light backgrounds      |
| `mark.png`                                   | The R mark alone. Favicons in `public/` are made from it on a white tile |

TODO(content): ask the designer for SVG versions and a horizontal lockup (mark beside the wordmark); the PNG crops are stand-ins.

### Typography

- Headings: a serif for an authoritative tone, as in references 02 and 04. It **must include Greek glyphs**. **Source Serif 4** is used (variable font, Greek subset). Noto Serif Display was the alternative; DM Serif Display has no Greek, so it is ruled out.
- Body: Inter (includes Greek).
- Both self-hosted, including the Greek subsets: font files in `public/fonts/`, `@font-face` rules in `src/styles/global.css`, sources and licences in `docs/fonts.md`.
- Do not use `text-transform: uppercase` on Greek text without `lang="el"` set on the page: Greek capitals drop their accent marks (tonos), and browsers only do this correctly when they know the language. Prefer sentence-case headings.

## Languages

The site is bilingual: **Greek and English**, with every page, component and legal text in both.

- Astro's built-in i18n routing. **Greek is the default language at `/`** (for example `/services/`); English lives under `/en/` (for example `/en/services/`). Page slugs stay in English in both languages so the URLs mirror each other. URLs always end in `/` (`trailingSlash: "always"`).
- Each page's body is one component in `src/components/pages/`, rendered by a thin route file in both `src/pages/` and `src/pages/en/`, so the two languages never drift apart. `src/i18n/index.ts` has the helpers (`useTranslations`, `localizePath`, `formatDate`, `formatNumber`).
- A language switcher in the header links to the same page in the other language, not to the home page.
- Each page sets `<html lang="el">` or `<html lang="en">` and adds `hreflang` alternate links for both languages plus `x-default`.
- UI strings (nav labels, buttons, form labels, footer, cookie banner) live in one translation file per language under `src/i18n/`; components never hard-code text.
- Blog posts live in `src/content/blog/el/` and `src/content/blog/en/`. A post may exist in only one language; the blog list shows only that language's posts, and the switcher on such a post goes to the other language's blog list.
- Dates and numbers are formatted per language (`Intl.DateTimeFormat('el-GR')` / `'en-GB'`).
- Placeholder text: short Greek and English placeholder headings and lorem ipsum body text, marked `TODO(content):`.
- The cookie banner, privacy policy, cookie policy and contact form consent text are needed in both languages.
- Greek text often runs about 20–30% longer than English. Check buttons, nav items and cards in Greek, not only English.

### Photography

Placeholder photos come from free stock libraries (Unsplash, Pexels): architecture, glass office buildings, meeting rooms, documents and laptops. Avoid posed smiling-people stock. Record each photo's source URL next to it so licences can be checked.

Until then the site uses generated abstract placeholder images in `src/assets/placeholders/` (the build environment cannot reach the stock libraries). Its README lists where each one is used.

## Legal (Greece / EU)

- **Privacy Policy** page following GDPR, naming the data controller (ReGovern), what the contact form collects, why, how long it is kept, the visitor's rights, and the right to complain to the Hellenic Data Protection Authority. Placeholder text, to be reviewed by the client.
- **Cookie banner** with equal Accept and Reject buttons and a link to the Cookie Policy. With no analytics the site only needs strictly necessary cookies, but the banner is built now so analytics can be added later behind consent. The visitor's choice is stored and can be changed from a footer link.
- **Company details in the footer** (required for EU business websites): legal name, address, email, phone, General Commercial Registry (ΓΕΜΗ) number and VAT number (ΑΦΜ). Placeholders for now.
- The contact form gets an unticked consent checkbox linking to the privacy policy.

## Open questions

- [x] Brand colours, sampled from the logo. See **Colours**.
- [ ] Vector (SVG) logo files and a horizontal lockup, from the designer.
- [x] Language: both Greek (default) and English. See **Languages**.
- [ ] Real content: page text, services list, team, stats, contact details, address, legal company details, starter blog posts, photos.
- [ ] Contact form service (Formspree, Web3Forms, Netlify Forms) and the receiving inbox. After approval.
- [ ] Hosting (Netlify, Cloudflare Pages, GitHub Pages) and domain. After approval.
- [ ] Analytics, if any. After approval; must sit behind the cookie banner.

## Build order

1. Scaffold Astro with the templates-frontend tooling; set design tokens and fonts in `global.css`.
2. Base layout and shared components: top bar, header and nav (with mobile menu), footer, cookie banner.
3. Home page.
4. Services page.
5. About us page.
6. Contact us page.
7. Blog list and post template with 2–3 placeholder posts.
8. Privacy and Cookie Policy pages.
9. Responsive, accessibility and performance pass (Lighthouse), then client review.
