/**
 * Contact form behaviour. Validation is the browser's own (required, type);
 * this script only replaces the browser's messages with ones in the page's
 * language and shows the thank-you panel instead of sending.
 *
 * TODO(functionality): send the form to the chosen form service
 * (Formspree, Web3Forms, ...) before showing the thank-you panel.
 */

export interface ErrorMessages {
  required: string;
  email: string;
  consent: string;
}

type FieldValidity = Pick<ValidityState, "valueMissing" | "typeMismatch">;

/** The message for a field's first problem, or "" when it is valid. */
export function errorMessage(
  validity: FieldValidity,
  isCheckbox: boolean,
  messages: ErrorMessages,
): string {
  if (validity.valueMissing) {
    return isCheckbox ? messages.consent : messages.required;
  }
  if (validity.typeMismatch) return messages.email;
  return "";
}

type Field = HTMLInputElement | HTMLTextAreaElement;

function isField(element: Element): element is Field {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement
  );
}

export function setupContactForm(
  form: HTMLFormElement,
  success: HTMLElement,
): void {
  const messages: ErrorMessages = {
    required: form.dataset.msgRequired ?? "",
    email: form.dataset.msgEmail ?? "",
    consent: form.dataset.msgConsent ?? "",
  };
  const fields = [...form.elements].filter(isField);

  for (const field of fields) {
    field.addEventListener("invalid", () => {
      // Clear first so the validity flags reflect only the built-in rules.
      field.setCustomValidity("");
      const isCheckbox =
        field instanceof HTMLInputElement && field.type === "checkbox";
      field.setCustomValidity(
        errorMessage(field.validity, isCheckbox, messages),
      );
    });
    const clear = () => {
      field.setCustomValidity("");
    };
    field.addEventListener("input", clear);
    field.addEventListener("change", clear);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.hidden = true;
    success.hidden = false;
    success.focus();
  });

  success
    .querySelector<HTMLButtonElement>("[data-contact-again]")
    ?.addEventListener("click", () => {
      form.reset();
      success.hidden = true;
      form.hidden = false;
      fields[0]?.focus();
    });
}
