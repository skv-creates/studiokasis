# Studio Kasis

The studiokasis.com landing page. Next.js 16 (App Router), Tailwind v4, exported
as a fully static site and hosted on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script            | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Next dev server with hot reload.                                     |
| `npm run build`   | Static export into `out/`.                                           |
| `npm run preview` | Build, then serve `out/` through the local Cloudflare Workers runtime — the closest thing to production. |
| `npm run deploy`  | Build and push straight to Cloudflare, bypassing CI. Rarely needed.  |
| `npm run lint`    | ESLint.                                                              |

There is no `npm start`: `next start` needs a Node server, and this site is a
static export.

## Deploying

Cloudflare Workers Builds watches this repo:

- **Push to `main`** → deploys to production (studiokasis.com).
- **Open a pull request** → deploys a preview URL, posted as a comment on the PR.

So the normal flow is: branch, push, open a PR, check the preview, merge. Nobody
needs to run `npm run deploy` by hand.

## Notes

- The whole site is one static page, so `output: "export"` in `next.config.ts`
  is what makes this work. Adding anything that needs a server — route handlers,
  Server Actions, `next/image` optimization, ISR — means dropping the static
  export and moving to the `@opennextjs/cloudflare` adapter instead.
- `wrangler.jsonc` tells Cloudflare to serve `out/` as static assets and to use
  Next's generated `404.html` for unknown paths.
- Analytics is Cloudflare Web Analytics, enabled from the Cloudflare dashboard.
  There is no tracking script in this codebase.
