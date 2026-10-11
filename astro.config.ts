import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/config";

export default defineConfig({
  // TODO(content): replace with the real domain once hosting is chosen.
  site: "https://www.regovern.gr",
  trailingSlash: "always",
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      // Greek lives at "/", English under "/en/".
      prefixDefaultLocale: false,
    },
  },
});
