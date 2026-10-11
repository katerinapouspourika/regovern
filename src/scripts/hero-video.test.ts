import { describe, expect, it } from "vitest";
import { minVideoWidth, shouldPlayVideo } from "./hero-video";

describe("shouldPlayVideo", () => {
  const ok = { reducedMotion: false, saveData: false, width: 1280 };

  it("plays on a large screen with no preferences set", () => {
    expect(shouldPlayVideo(ok)).toBe(true);
  });

  it("respects reduced motion", () => {
    expect(shouldPlayVideo({ ...ok, reducedMotion: true })).toBe(false);
  });

  it("respects data saver", () => {
    expect(shouldPlayVideo({ ...ok, saveData: true })).toBe(false);
  });

  it("keeps the still image on phones", () => {
    expect(shouldPlayVideo({ ...ok, width: minVideoWidth - 1 })).toBe(false);
    expect(shouldPlayVideo({ ...ok, width: minVideoWidth })).toBe(true);
  });
});
