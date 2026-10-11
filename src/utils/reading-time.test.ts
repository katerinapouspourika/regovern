import { describe, expect, it } from "vitest";
import { readingMinutes } from "./reading-time";

describe("readingMinutes", () => {
  it("is at least one minute", () => {
    expect(readingMinutes("")).toBe(1);
    expect(readingMinutes("Λίγες λέξεις μόνο.")).toBe(1);
  });

  it("rounds up at 200 words a minute", () => {
    expect(readingMinutes("λέξη ".repeat(200))).toBe(1);
    expect(readingMinutes("word ".repeat(201))).toBe(2);
  });
});
