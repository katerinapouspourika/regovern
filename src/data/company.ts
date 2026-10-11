/**
 * Company details that are the same in every language. Translated details
 * (address, office hours, legal name) are in src/i18n/.
 */
export const company = {
  // TODO(content): real phone number, email, ΓΕΜΗ and ΑΦΜ.
  phone: "+30 210 000 0000",
  email: "info@regovern.gr",
  gemi: "000000000000",
  vat: "000000000",
} as const;

/** The phone number in the form a `tel:` link needs (no spaces). */
export const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
export const emailHref = `mailto:${company.email}`;
