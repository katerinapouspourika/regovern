import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getConsent, setConsent } from "./consent";

function memoryStorage(): Storage {
  const data = new Map<string, string>();
  return {
    get length() {
      return data.size;
    },
    clear: () => {
      data.clear();
    },
    getItem: (key) => data.get(key) ?? null,
    key: (index) => [...data.keys()][index] ?? null,
    removeItem: (key) => {
      data.delete(key);
    },
    setItem: (key, value) => {
      data.set(key, value);
    },
  };
}

describe("consent", () => {
  let storage: Storage;

  beforeEach(() => {
    storage = memoryStorage();
    vi.stubGlobal("window", new EventTarget());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("has no choice until the visitor makes one", () => {
    expect(getConsent(storage)).toBeNull();
  });

  it.each(["accepted", "rejected"] as const)("remembers %s", (choice) => {
    setConsent(choice, storage);
    expect(getConsent(storage)).toBe(choice);
  });

  it("announces the choice", () => {
    const listener = vi.fn();
    window.addEventListener("consentchange", listener);
    setConsent("accepted", storage);
    expect(listener).toHaveBeenCalledOnce();
  });

  it("ignores corrupted values", () => {
    storage.setItem("regovern-cookie-consent", "{not json");
    expect(getConsent(storage)).toBeNull();
    storage.setItem(
      "regovern-cookie-consent",
      JSON.stringify({ choice: "maybe" }),
    );
    expect(getConsent(storage)).toBeNull();
  });
});
