/** Languages the site is published in. The first one is the default, served at "/". */
export const locales = ["el", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "el";

/** BCP 47 tags for `Intl` formatting and `og:locale`-style metadata. */
export const intlLocales: Record<Locale, string> = {
  el: "el-GR",
  en: "en-GB",
};
