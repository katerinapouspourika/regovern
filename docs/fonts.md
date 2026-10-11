# Fonts

Self-hosted so visitors' browsers make no requests to third-party font services (GDPR). Files live in `public/fonts/`; the `@font-face` rules are in `src/styles/global.css`.

| Family                                    | Use       | Files                                                       | Source                                                                                                         | Licence                                   |
| ----------------------------------------- | --------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Inter (variable, weight 100–900)          | Body text | `inter-{latin,latin-ext,greek,greek-ext}-wght-normal.woff2` | [@fontsource-variable/inter 5.3.0](https://www.npmjs.com/package/@fontsource-variable/inter)                   | SIL OFL 1.1, `LICENSE-inter.txt`          |
| Source Serif 4 (variable, weight 200–900) | Headings  | `source-serif-4-{latin,latin-ext,greek}-wght-normal.woff2`  | [@fontsource-variable/source-serif-4 5.3.1](https://www.npmjs.com/package/@fontsource-variable/source-serif-4) | SIL OFL 1.1, `LICENSE-source-serif-4.txt` |

Only the upright styles are included. Add the `*-wght-italic` files from the same packages if the design needs real italics.

Final fonts may change once the logo is in the repo (see the open questions in `docs/brief.md`).
