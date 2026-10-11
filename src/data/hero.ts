/** Background video for the home page hero. Files live in public/video/. */
export interface HeroVideo {
  /** WebM (VP9 or AV1): smaller, used by browsers that support it. */
  webm?: string;
  /** MP4 (H.264): plays everywhere. */
  mp4: string;
}

// TODO(content): replace with the client's footage; see docs/video.md for how
// to encode it. Set to null to show only the still image.
export const heroVideo: HeroVideo | null = {
  webm: "/video/hero.webm",
  mp4: "/video/hero.mp4",
};
