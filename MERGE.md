# Merge guide (drop-in additions)

Copy everything in this zip into your project root (same folder structure). It does not touch
`components/Work.tsx`, `app/globals.css` or `lib/site.ts`, so your custom Work section stays as is.

## Files that REPLACE existing ones (only overwrite if you haven't edited them)
- `components/Header.tsx`, `components/Footer.tsx`, `components/Contact.tsx`, `components/Toolbox.tsx` (new scroll-stack skills), `components/About.tsx`, `components/JsonLd.tsx`, `components/Analytics.tsx`
- `app/sitemap.ts` (22 URLs), `app/not-found.tsx`

## Manual edit 1: `app/page.tsx`
```tsx
// replace:  import Services from "@/components/Services";
import ServicesPreview from "@/components/ServicesPreview";
import BlogPreview from "@/components/BlogPreview";
import HireBand from "@/components/HireBand";
// in <main>: <Services />  ->  <ServicesPreview />
// and add these (Testimonials before BlogPreview, HireBand before Contact):
import Testimonials from "@/components/Testimonials";
<Testimonials />   // renders nothing until lib/testimonials.ts has REAL entries
<BlogPreview />
<HireBand />
```

## Manual edit 2: `app/layout.tsx` (Google Tag Manager)
```tsx
import Analytics, { GtmNoScript } from "@/components/Analytics";
// ...
<body>
  <GtmNoScript />
  {children}
  <Analytics />
</body>
```

## Env (set in your host, e.g. Vercel, then redeploy)
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX        # production only
GOOGLE_SITE_VERIFICATION=...          # Search Console HTML-tag token (optional)
NEXT_PUBLIC_RESUME_URL=https://...    # optional
```

## Content
Services and blog posts: `lib/content.ts` (WordPress) and `lib/content-react.ts` (React/Next.js).
See `CONTENT_TODO.md` for the real-experience paragraphs to add, and `ANALYTICS_SETUP.md` for GTM, GA4 and Search Console.

## New in this round
- `lib/social.ts`: your email, phone, WhatsApp, LinkedIn, GitHub, Instagram (single source; used by footer, contact, 404, JSON-LD).
- `lib/skills.ts`: the six skill cards. Edit text here.
- `lib/testimonials.ts`: add REAL testimonials only.
- `/privacy-policy` and `/terms` pages, plus a cookie consent banner (Consent Mode v2). The banner only appears when NEXT_PUBLIC_GTM_ID is set.
- `app/extras.css` holds the styles for skills, footer, testimonials and the banner (imported by the components, no layout edit needed).
