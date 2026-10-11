/**
 * Stores the visitor's cookie choice in localStorage. Recording consent is
 * itself strictly necessary, so it needs no consent of its own.
 *
 * When analytics are added, load them only when `getConsent()` returns
 * "accepted", and listen for the `consentchange` event on `window`.
 */
export type Consent = "accepted" | "rejected";

const storageKey = "regovern-cookie-consent";

interface StoredConsent {
  choice: Consent;
  /** ISO date of the choice, so it can be asked again after a policy change. */
  date: string;
}

function isStoredConsent(value: unknown): value is StoredConsent {
  if (typeof value !== "object" || value === null) return false;
  const { choice, date } = value as Partial<StoredConsent>;
  return (
    (choice === "accepted" || choice === "rejected") && typeof date === "string"
  );
}

export function getConsent(storage: Storage = localStorage): Consent | null {
  try {
    const raw = storage.getItem(storageKey);
    if (raw === null) return null;
    const parsed: unknown = JSON.parse(raw);
    return isStoredConsent(parsed) ? parsed.choice : null;
  } catch {
    // Storage blocked or corrupted: ask again.
    return null;
  }
}

export function setConsent(
  choice: Consent,
  storage: Storage = localStorage,
): void {
  const value: StoredConsent = { choice, date: new Date().toISOString() };
  try {
    storage.setItem(storageKey, JSON.stringify(value));
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent("consentchange", { detail: choice }));
}
