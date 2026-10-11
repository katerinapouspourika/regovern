# ReGovern website — project brief

Decisions and design direction agreed so far. Update this file whenever a decision changes or an open question is answered.

## Goal and phases

1. **UI/UX build (current):** every page and component, placeholder content, contact form with no sending service, cookie banner and legal pages in place. Shown to the client for approval.
2. **Content:** the owner supplies real text, contact details, address, team details, services list, starter blog posts and photos. Replace every `TODO(content):` placeholder.
3. **Functionality:** contact form service, hosting and deployment, domain, analytics (if any).
4. **Release:** merge `dev` into `main`.

## Pages

| Page               | Contents                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**           | Top contact bar (phone, email). Hero with headline, short subtitle and two buttons (Our services, Contact us). A row of 3–4 service cards overlapping the bottom of the hero. Company overview with stat counters and a photo. "Why choose us" icon row. Latest three blog posts. Dark call-to-action band (book a consultation). Footer. |
| **About us**       | Short hero banner. Company story. Stat counters. Values (icons). Team members with photos and short bios.                                                                                                                                                                                                                                 |
| **Services**       | Short hero banner. Card grid of all services, then one section per service with a fuller description. Placeholder services: Internal Audit, Risk Management, Regulatory Compliance, Governance Advisory.                                                                                                                                  |
| **Contact us**     | Form (name, email, phone, company, message, privacy consent checkbox) next to phone, email, address and office hours. Optional map. The form does not send anywhere yet; show a clear placeholder success state.                                                                                                                          |
| **Blog**           | Grid of image cards (cover image, date, title, summary, "Read more"). Single-post template. Developer-run: Markdown files in `src/content/blog/`.                                                                                                                                                                                         |
| **Privacy Policy** | GDPR privacy notice (placeholder text marked for legal review).                                                                                                                                                                                                                                                                           |
| **Cookie Policy**  | Explains the cookies used.                                                                                                                                                                                                                                                                                                                |

Shared components: top contact bar, header with logo, nav and language switcher, footer (logo, short description, nav links, contact details, company legal details, links to the privacy and cookie policies), cookie banner, page hero banner, section heading, service card, stat counter, blog card, call-to-action band.

## Design direction

Reference images are in `docs/design-references/`. They are AI-generated mockups (the text in them is garbled), so use them for layout and mood only.

| File                        | What to take from it                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `01-beadvices.jpg`          | Top contact bar; the "years of experience" section. Ignore the dated all-caps type and stock-people photos.                                                                                                                          |
| `02-skystructure-dark.jpg`  | Main reference. Dark navy hero with architecture photography, serif headline, three-panel block overlapping the hero (About / Expertise grid with icons / Recent items), company overview with `+15 / +350 / +80` stats and a photo. |
| `03-elevate-advisory.jpg`   | Icon row of three services on a dark band; light section with three image cards (use for blog cards); centred section heading with subtitle.                                                                                         |
| `04-skystructure-light.jpg` | Same layout as 02 in a lighter treatment; floating nav bar; one headline word in the accent colour.                                                                                                                                  |
| `05-global-logistics.jpg`   | Contact details in the header; white service cards overlapping the hero; "Why choose us" with round icons; About block with a photo.                                                                                                 |

Common patterns to reproduce:

- Dark hero with corporate architecture or office photography and a dark overlay for legible text.
- A card row that overlaps the bottom edge of the hero. On mobile the cards stack below the hero instead of overlapping.
- Thin line icons above short blurbs.
- Stat counters.
- Alternating dark and light full-width sections.
- One accent colour used sparingly (buttons, a highlighted headline word, icons, small labels).

### Colours

The ReGovern logo uses **navy and gold**, so the site follows the logo. Teal from the references is not used. Final values will be sampled from the logo file once it is in the repo; until then use:

| Token                | Value     | Use                                       |
| -------------------- | --------- | ----------------------------------------- |
| `--color-navy-900`   | `#0B1F3A` | Hero, dark sections, footer               |
| `--color-navy-700`   | `#1C2E4A` | Cards and panels on dark sections         |
| `--color-gold-500`   | `#C9A227` | Accent: buttons, highlighted words, icons |
| `--color-gold-300`   | `#E3C770` | Hover states, accents on navy             |
| `--color-surface`    | `#F4F6F9` | Light section background                  |
| `--color-white`      | `#FFFFFF` | Cards on light sections                   |
| `--color-text`       | `#1E2733` | Body text on light backgrounds            |
| `--color-text-muted` | `#5B6676` | Secondary text                            |

Contrast rule: gold works on navy and as a button fill with navy text, but gold text on white fails WCAG contrast. On light backgrounds use navy for text and links, and gold only for decoration or as a fill.

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

## Legal (Greece / EU)

- **Privacy Policy** page following GDPR, naming the data controller (ReGovern), what the contact form collects, why, how long it is kept, the visitor's rights, and the right to complain to the Hellenic Data Protection Authority. Placeholder text, to be reviewed by the client.
- **Cookie banner** with equal Accept and Reject buttons and a link to the Cookie Policy. With no analytics the site only needs strictly necessary cookies, but the banner is built now so analytics can be added later behind consent. The visitor's choice is stored and can be changed from a footer link.
- **Company details in the footer** (required for EU business websites): legal name, address, email, phone, General Commercial Registry (ΓΕΜΗ) number and VAT number (ΑΦΜ). Placeholders for now.
- The contact form gets an unticked consent checkbox linking to the privacy policy.

## Open questions

- [ ] Final brand colours and fonts, from the logo file. **Owner will add the logo to the repo.**
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
