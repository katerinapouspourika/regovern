/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  rules: {
    // Allow Astro's :global() escape hatch in scoped <style> blocks.
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    // CLAUDE.md: no ID selectors, nesting at most two levels deep.
    "selector-max-id": 0,
    "max-nesting-depth": 2,
    "declaration-no-important": true,
  },
};
