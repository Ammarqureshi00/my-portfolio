# Ammar Qureshi — Portfolio (Next.js 15, App Router)

Server-rendered / statically generated portfolio built for SEO. All content is in the initial HTML
(no client-side-only rendering), so Google can crawl it fully.

## Run

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Before you deploy — set these (`.env.local` or your host's env settings)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Your real domain.** Drives canonical URL, sitemap, robots, Open Graph, JSON-LD. |
| `NEXT_PUBLIC_EMAIL` / `_LINKEDIN` / `_GITHUB` / `_WHATSAPP` | Contact links + contact form target (empty = hidden). |
| `GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token. |

## SEO included

- Metadata API: title template, description, keywords, canonical, Open Graph, Twitter card, robots/googleBot directives
- JSON-LD (`@graph`): WebSite, Person, ProfessionalService (with services), ItemList of projects
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`
- Generated Open Graph image (`app/opengraph-image.tsx`) and favicon (`app/icon.tsx`)
- `next/image` (AVIF/WebP, priority LCP image with explicit size), `next/font` (self-hosted, no layout shift)
- Semantic landmarks, one `<h1>`, `aria-labelledby` sections, descriptive alt text
- Scroll-reveal is progressive: content is visible without JS
- Security + caching headers in `next.config.mjs`

## After deploying

1. Add the site in Google Search Console and verify (use `GOOGLE_SITE_VERIFICATION`).
2. Submit `https://your-domain/sitemap.xml`.
3. Run PageSpeed Insights and the Rich Results Test.

## Edit content

All text/data lives in `lib/site.ts` (projects, services, skills, process). Styles are in `app/globals.css`
(carried over unchanged from the original design). Deploy on Vercel (zero config) or any Node host.

## Adding / editing projects

1. Put a screenshot (16:10, ~1200px wide, `.webp`) in `public/projects/`.
2. Add an entry to `PROJECTS` in `lib/site.ts` (name, url, categories, description, image, alt text).
   The project count, filter tabs, JSON-LD and cards all update automatically.
