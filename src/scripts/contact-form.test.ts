import { describe, expect, it } from "vitest";
import { errorMessage } from "./contact-form";

const messages = { required: "required", email: "email", consent: "consent" };
const valid = { valueMissing: false, typeMismatch: false };

describe("errorMessage", () => {
  it("is empty for a valid field", () => {
    expect(errorMessage(valid, false, messages)).toBe("");
  });

  it("asks for a missing value", () => {
    expect(
      errorMessage({ ...valid, valueMissing: true }, false, messages),
    ).toBe("required");
  });

  it("asks for consent on an unticked checkbox", () => {
    expect(errorMessage({ ...valid, valueMissing: true }, true, messages)).toBe(
      "consent",
    );
  });

  it("explains an invalid email", () => {
    expect(
      errorMessage({ ...valid, typeMismatch: true }, false, messages),
    ).toBe("email");
  });
});
