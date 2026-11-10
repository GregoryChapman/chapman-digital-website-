# Chapman Digital Services

Marketing site for [chapmandigitalservices.com](https://chapmandigitalservices.com): modern websites for creators and small businesses, built by Gregory Chapman in Montreal.

## Stack

- Next.js 16 (App Router), React 19.2, TypeScript
- Tailwind CSS 4
- Resend for the contact form (`src/app/api/contact/route.ts`)
- Vercel hosting, Web Analytics and Speed Insights

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The contact form needs one environment variable. Put it in `.env.local`, which git ignores:

```
RESEND_API_KEY=your_key_here
```

Never commit a key. Every `.env*` file is ignored except `.env.example`. Without the key the site still builds and runs, and the form returns an error instead of pretending to send.

## Checks

```bash
npm run lint
npm run build
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/app/` | Pages, plus `robots.ts`, `sitemap.ts`, `opengraph-image.tsx` and the 404 page |
| `src/lib/site.ts` | Site name, URL and the `pageMetadata()` helper every page uses |
| `src/components/` | Header, footer, contact form and layout pieces |
| `next.config.ts` | Security headers, including the Content Security Policy |
| `assets/fonts/` | Inter, used to render the share image (SIL Open Font License) |

## Deploying

Vercel deploys `main` to production and every other branch to a preview URL. Environment variables are managed in the Vercel project settings, not in this repo.
