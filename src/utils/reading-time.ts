/** Average adult reading speed, in words per minute. */
const wordsPerMinute = 200;

/** Estimated reading time of a text, in whole minutes (at least 1). */
export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/u).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
