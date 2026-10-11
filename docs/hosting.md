# Hosting on Cloudflare Pages

The site is static (Astro builds plain HTML, CSS, images and fonts into `dist/`), so it needs no server or Docker. [Cloudflare Pages](https://pages.cloudflare.com/) builds it from GitHub on every push, for free:

- a **fixed link** for the `dev` branch, to share with the owner (for example `https://regovern.pages.dev`);
- a **separate preview link for every other branch and pull request** (for example `https://feature-contact-page.regovern.pages.dev`), so a step can be reviewed before it is merged. Cloudflare posts the link as a comment on the pull request.

## One-time setup (about 10 minutes)

1. Create a free account at <https://dash.cloudflare.com/sign-up> (or log in).
2. In the dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorise the Cloudflare GitHub app for `katerinapouspourika/regovern` (you can limit it to this repository).
4. Select the repository and set:

   | Setting                | Value                                     |
   | ---------------------- | ----------------------------------------- |
   | Project name           | `regovern` (becomes `regovern.pages.dev`) |
   | Production branch      | `dev` (switch to `main` at launch)        |
   | Framework preset       | Astro                                     |
   | Build command          | `npm run build`                           |
   | Build output directory | `dist`                                    |

   No environment variables are needed: the build reads the Node version (24) from `.nvmrc`.

5. Select **Save and Deploy**. The first build takes 1–2 minutes; the link appears when it finishes.
6. Under the project's **Settings → Builds → Branch control**, check that preview deployments are enabled for all non-production branches.

After that there is nothing to do by hand: every push to `dev` updates the fixed link, and every pull request gets its own preview link.

## What the repository already does for Cloudflare

- `public/_headers` sends `X-Robots-Tag: noindex` on every page, so search engines do not index the unfinished site. **Remove it at launch** (it is marked `TODO(launch):`).
- `src/pages/404.astro` builds `404.html`. Without it Cloudflare would treat the site as a single-page app and show the home page for every unknown URL.
- URLs end in `/` (`trailingSlash: "always"` in `astro.config.ts`), which matches how Cloudflare serves `about/index.html` as `/about/`.

## Optional: keep previews private

Anyone with a link can open the site. To require a login, enable [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/) for the preview deployments in the Pages project settings (free for small teams) and allow the owner's email address. The exact menu names change from time to time; search the Cloudflare docs for "Pages preview deployments access policy".

## At launch

- Switch the production branch to `main`.
- Add the custom domain under **Custom domains** and update `site` in `astro.config.ts` (marked `TODO(content):`).
- Remove the noindex rule from `public/_headers`.
