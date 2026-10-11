# Hosting on Cloudflare

The site is static (Astro builds plain HTML, CSS, images and fonts into `dist/`), so it needs no server or Docker. Cloudflare builds it from GitHub on every push and serves it for free, as a **Worker with static assets** (Cloudflare's current recommendation for new projects; it replaces the older "Pages" setup). The configuration is in `wrangler.jsonc`.

You get:

- a **fixed link** for the production branch (`dev` for now), to share with the owner, for example `https://regovern.<your-subdomain>.workers.dev`;
- a **preview link for every other branch and pull request**, so a step can be reviewed before it is merged. Cloudflare posts it as a comment on the pull request.

## One-time setup (about 10 minutes)

1. Create a free account at <https://dash.cloudflare.com/sign-up> (or log in).
2. Go to **Workers & Pages → Create application → Import a repository** (Continue with GitHub) and allow Cloudflare access to `katerinapouspourika/regovern`.
3. On **Set up your application**:

   | Field                          | Value                                                                  |
   | ------------------------------ | ---------------------------------------------------------------------- |
   | Project name                   | `regovern` (must match `name` in `wrangler.jsonc`)                     |
   | Build command                  | `npm run build`                                                        |
   | Deploy command                 | `npx wrangler deploy` (the default)                                    |
   | Preview command                | the default (`npx wrangler preview` or `npx wrangler versions upload`) |
   | Enable Preview builds          | **On**                                                                 |
   | Protect with Cloudflare Access | Off for now (see below)                                                |

4. Open **Advanced settings** and set the **production branch** to `dev`, if the field is there. If it is not, change it after the first deploy under the Worker's **Settings → Build → Branch control**.
5. Select **Deploy**. The first build takes 1–2 minutes; the link appears when it finishes.

No environment variables are needed: the build reads the Node version (24) from `.nvmrc`.

After that there is nothing to do by hand: every push to `dev` updates the fixed link, and every pull request gets its own preview link.

## What the repository does for Cloudflare

- `wrangler.jsonc` serves `dist/`, answers unknown URLs with `404.html` and handles trailing slashes (`/about` redirects to `/about/`).
- `public/_headers` sends `X-Robots-Tag: noindex` on every page, so search engines do not index the unfinished site. **Remove it at launch** (marked `TODO(launch):`).
- `src/pages/404.astro` builds the bilingual `404.html`.

## Optional: keep previews private

Anyone with a link can open the site. To require a login, turn on **Protect with Cloudflare Access** (in setup or later in the Worker's settings) and allow the owner's email address. Cloudflare Access is free for small teams.

## At launch

- Switch the production branch to `main`.
- Add the custom domain under the Worker's **Settings → Domains & Routes**, and update `site` in `astro.config.ts` (marked `TODO(content):`).
- Remove the noindex rule from `public/_headers`.
