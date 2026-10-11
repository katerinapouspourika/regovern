import { describe, expect, it } from "vitest";
import {
  formatDate,
  formatNumber,
  localizePath,
  stripLocale,
  toLocale,
  useTranslations,
} from "./index";

describe("toLocale", () => {
  it("keeps supported locales", () => {
    expect(toLocale("en")).toBe("en");
    expect(toLocale("el")).toBe("el");
  });

  it("falls back to Greek", () => {
    expect(toLocale(undefined)).toBe("el");
    expect(toLocale("fr")).toBe("el");
  });
});

describe("stripLocale", () => {
  it.each([
    ["/", "/"],
    ["/en", "/"],
    ["/en/", "/"],
    ["/en/services/", "/services/"],
    ["/en/blog/my-post", "/blog/my-post/"],
    ["/services/", "/services/"],
    ["/english-guide/", "/english-guide/"],
  ])("%s becomes %s", (input, expected) => {
    expect(stripLocale(input)).toBe(expected);
  });
});

describe("localizePath", () => {
  it.each([
    ["/", "el", "/"],
    ["/", "en", "/en/"],
    ["/services/", "el", "/services/"],
    ["/services", "en", "/en/services/"],
    ["/en/services/", "el", "/services/"],
    ["/en/services/", "en", "/en/services/"],
  ] as const)("%s in %s is %s", (path, locale, expected) => {
    expect(localizePath(path, locale)).toBe(expected);
  });
});

describe("useTranslations", () => {
  it("returns the string for the requested language", () => {
    expect(useTranslations("el")("nav.services")).toBe("Υπηρεσίες");
    expect(useTranslations("en")("nav.services")).toBe("Services");
  });
});

describe("formatting", () => {
  const date = new Date(Date.UTC(2026, 2, 5, 12));

  it("formats dates per language", () => {
    expect(formatDate(date, "el")).toBe("5 Μαρτίου 2026");
    expect(formatDate(date, "en")).toBe("5 March 2026");
  });

  it("formats numbers per language", () => {
    expect(formatNumber(1500, "el")).toBe("1.500");
    expect(formatNumber(1500, "en")).toBe("1,500");
  });
});
