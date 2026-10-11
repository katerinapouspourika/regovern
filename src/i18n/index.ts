import { defaultLocale, intlLocales, locales, type Locale } from "./config";
import { el, type UiKey, type UiStrings } from "./el";
import { en } from "./en";

export { defaultLocale, locales, type Locale } from "./config";
export type { UiKey } from "./el";

const ui: Record<Locale, UiStrings> = { el, en };

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

/** Narrows `Astro.currentLocale` (a plain string) to a supported locale. */
export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Returns a lookup function for one language's UI strings. */
export function useTranslations(locale: Locale): (key: UiKey) => string {
  return (key) => ui[locale][key];
}

/** Ensures a path starts and ends with "/", matching `trailingSlash: "always"`. */
function normalizePath(path: string): string {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed === "" ? "/" : `/${trimmed}/`;
}

/**
 * Removes the language prefix from a URL path:
 * "/en/services/" becomes "/services/", "/services/" stays the same.
 */
export function stripLocale(pathname: string): string {
  const path = normalizePath(pathname);
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    const prefix = `/${locale}/`;
    if (path.startsWith(prefix))
      return normalizePath(path.slice(prefix.length));
  }
  return path;
}

/**
 * Builds the URL path of a page in a given language. `path` is the
 * language-neutral path, such as "/services/" (the Greek URL).
 */
export function localizePath(path: string, locale: Locale): string {
  const neutral = stripLocale(path);
  if (locale === defaultLocale) return neutral;
  return neutral === "/" ? `/${locale}/` : `/${locale}${neutral}`;
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Content dates (blog front matter) are parsed as UTC midnight.
    timeZone: "UTC",
  }).format(date);
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocales[locale]).format(value);
}
