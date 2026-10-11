/**
 * Greek UI strings. This file defines the keys: every other language must
 * provide the same ones (enforced by the `UiStrings` type).
 */
export const el = {
  "site.name": "ReGovern",
  // TODO(content): real tagline.
  "site.tagline": "Εσωτερικός έλεγχος και εταιρική διακυβέρνηση",

  "nav.label": "Κύρια πλοήγηση",
  "nav.home": "Αρχική",
  "nav.about": "Σχετικά με εμάς",
  "nav.services": "Υπηρεσίες",
  "nav.blog": "Blog",
  "nav.contact": "Επικοινωνία",

  "language.switcher.label": "Γλώσσα",
  "language.el": "Ελληνικά",
  "language.en": "English",

  // TODO(content): real home page title, description and hero text.
  "home.meta.title": "ReGovern | Εσωτερικός έλεγχος",
  "home.meta.description":
    "Η ReGovern παρέχει υπηρεσίες εσωτερικού ελέγχου, διαχείρισης κινδύνων και κανονιστικής συμμόρφωσης στην Ελλάδα.",
  "home.hero.title.before": "Εσωτερικός έλεγχος με",
  "home.hero.title.highlight": "διαφάνεια",
  "home.hero.subtitle":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
} as const;

export type UiKey = keyof typeof el;
export type UiStrings = Record<UiKey, string>;
