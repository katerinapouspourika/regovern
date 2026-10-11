/**
 * Background video for the home hero. The still image always renders; the
 * video only loads and plays when the visitor has not asked for reduced
 * motion or reduced data and the screen is at least tablet-sized. A button
 * pauses and resumes it (WCAG 2.2.2: moving content needs a pause control).
 */

/** Below this width (px) phones keep the still image to save data. */
export const minVideoWidth = 768;

export interface PlaybackConditions {
  reducedMotion: boolean;
  saveData: boolean;
  width: number;
}

export function shouldPlayVideo({
  reducedMotion,
  saveData,
  width,
}: PlaybackConditions): boolean {
  return !reducedMotion && !saveData && width >= minVideoWidth;
}

interface NetworkInformationLike {
  saveData?: boolean;
}

function prefersSaveData(): boolean {
  const connection: unknown = Reflect.get(navigator, "connection");
  return (
    typeof connection === "object" &&
    connection !== null &&
    (connection as NetworkInformationLike).saveData === true
  );
}

export function setupHeroVideo(root: HTMLElement): void {
  const video = root.querySelector("video");
  const button = root.querySelector<HTMLButtonElement>("[data-video-toggle]");
  if (!video || !button) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const conditions = (): PlaybackConditions => ({
    reducedMotion: reducedMotion.matches,
    saveData: prefersSaveData(),
    width: window.innerWidth,
  });

  const setState = (state: "playing" | "paused") => {
    root.dataset.videoState = state;
    const label =
      state === "playing"
        ? button.dataset.labelPause
        : button.dataset.labelPlay;
    if (label) button.setAttribute("aria-label", label);
  };

  const play = () => {
    video.play().then(
      () => {
        setState("playing");
      },
      () => {
        // Autoplay blocked or the file failed: the still image stays.
      },
    );
  };

  button.addEventListener("click", () => {
    if (video.paused) {
      play();
    } else {
      video.pause();
      setState("paused");
    }
  });

  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches && !video.paused) {
      video.pause();
      setState("paused");
    }
  });

  if (shouldPlayVideo(conditions())) play();
}
