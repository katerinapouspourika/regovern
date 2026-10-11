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

  "skip.link": "Μετάβαση στο περιεχόμενο",

  "header.home.label": "ReGovern, αρχική σελίδα",
  "menu.open": "Μενού",
  "menu.close": "Κλείσιμο μενού",

  "nav.privacy": "Πολιτική απορρήτου",
  "nav.cookies": "Πολιτική cookies",

  // The language's own invitation, shown on the switcher that leads to it.
  "language.readIn": "Διαβάστε αυτή τη σελίδα στα ελληνικά",
  "language.short": "ΕΛ",

  "contact.phone": "Τηλέφωνο",
  "contact.email": "Email",
  "contact.address": "Διεύθυνση",
  "contact.hours": "Ώρες λειτουργίας",

  // TODO(content): real legal name, address and office hours.
  "company.legalName": "ReGovern Ι.Κ.Ε.",
  "company.address": "Λεωφόρος Παράδειγμα 1, 106 00 Αθήνα",
  "company.hours": "Δευτέρα – Παρασκευή, 09:00 – 17:00",
  "company.gemi": "Αρ. ΓΕΜΗ",
  "company.vat": "ΑΦΜ",

  // TODO(content): real company description.
  "footer.about":
    "Ανεξάρτητες υπηρεσίες εσωτερικού ελέγχου, διαχείρισης κινδύνων και κανονιστικής συμμόρφωσης για επιχειρήσεις στην Ελλάδα.",
  "footer.nav": "Σελίδες",
  "footer.contact": "Επικοινωνία",
  "footer.legal": "Στοιχεία εταιρείας",
  "footer.legalNav": "Νομικές πληροφορίες",
  "footer.cookieSettings": "Ρυθμίσεις cookies",
  "footer.copyright": "Με την επιφύλαξη παντός δικαιώματος.",

  "cookies.title": "Cookies",
  "cookies.text":
    "Χρησιμοποιούμε μόνο τα απαραίτητα cookies για τη λειτουργία του ιστότοπου. Με τη συγκατάθεσή σας, μπορεί στο μέλλον να χρησιμοποιήσουμε και cookies στατιστικών.",
  "cookies.policy": "Πολιτική cookies",
  "cookies.accept": "Αποδοχή",
  "cookies.reject": "Απόρριψη",

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
