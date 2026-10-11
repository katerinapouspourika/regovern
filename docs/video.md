# Hero background video

The home page hero can play a muted, looping background video over its still image. The video is self-hosted (no YouTube or Vimeo, which set cookies) and is configured in `src/data/hero.ts`.

## How it behaves

- The still image (`src/assets/placeholders/skyline.jpg` for now) always loads first, so the page is fast and readable. The video fades in once it plays.
- The video loads only on screens at least 768px wide, and never when the visitor has asked their system for reduced motion or data saving. Everyone else sees the still image. The width limit is `minVideoWidth` in `src/scripts/hero-video.ts`.
- A round pause/play button appears in the corner of the hero while the video plays (WCAG 2.2.2 requires a way to stop moving content).
- The light wash behind the headline stays, so text remains readable over any footage.

## Choosing footage

- 10–20 seconds that loop smoothly (the last frame flows into the first), no sound.
- Calm, slow movement: architecture, glass buildings, a city timelapse, an office. Avoid fast cuts and people facing the camera.
- Keep the left third quiet; the headline sits there.
- Pick a frame from the clip as the still image, so the switch from still to video is invisible.

## Encoding

Export the clip at 1920×1080 or larger, then encode two files with [ffmpeg](https://ffmpeg.org/) (replace `input.mov` with your file):

```sh
# WebM (VP9): smallest; used by browsers that support it
ffmpeg -i input.mov -an -vf "scale=1920:-2,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 public/video/hero.webm

# MP4 (H.264): plays everywhere
ffmpeg -i input.mov -an -vf "scale=1920:-2,fps=30,format=yuv420p" -c:v libx264 -crf 26 -preset slow -movflags +faststart public/video/hero.mp4

# Still image from the first frame, for src/assets/
ffmpeg -i public/video/hero.mp4 -frames:v 1 -q:v 2 src/assets/hero-still.jpg
```

Aim for under 3–5 MB per file. If a file is larger, raise `-crf` by 2–4 (lower quality, smaller file).

Then point `heroVideo` in `src/data/hero.ts` at the files, and swap the still image import in `src/components/pages/HomePage.astro`. To turn the video off, set `heroVideo` to `null`.

## Current files

TODO(content): `public/video/hero.webm` and `hero.mp4` are a generated placeholder: a slow drift across the placeholder skyline image, so the behaviour can be reviewed before real footage exists.
