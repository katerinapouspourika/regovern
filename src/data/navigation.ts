import type { UiKey } from "@/i18n";

export interface NavItem {
  /** Translation key of the link text. */
  label: UiKey;
  /** Language-neutral path; localise it with `localizePath`. */
  path: string;
}

export const mainNav: readonly NavItem[] = [
  { label: "nav.home", path: "/" },
  { label: "nav.about", path: "/about/" },
  { label: "nav.services", path: "/services/" },
  { label: "nav.blog", path: "/blog/" },
  { label: "nav.contact", path: "/contact/" },
];

export const legalNav: readonly NavItem[] = [
  { label: "nav.privacy", path: "/privacy/" },
  { label: "nav.cookies", path: "/cookies/" },
];
