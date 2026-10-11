import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", ".astro", "coverage"]),
  {
    files: ["**/*.{ts,js,mjs}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Astro components: frontmatter and <script> blocks are TypeScript.
    files: ["**/*.astro"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      astro.configs.recommended,
    ],
  },
  {
    files: ["src/**/*.{ts,astro}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["*.{ts,js,mjs}", "scripts/**"],
    languageOptions: { globals: globals.node },
  },
  {
    // Plain JavaScript files (configs, scripts) are not part of a tsconfig.
    files: ["**/*.{js,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // Must stay last: turns off rules that conflict with Prettier.
  prettier,
]);
