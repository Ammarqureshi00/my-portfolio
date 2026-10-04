# GTM -> GA4 -> Search Console setup

The site only loads Tag Manager. GA4 is added INSIDE Tag Manager. Do not also paste a gtag.js snippet, or pageviews are counted twice.

## 1. GA4
1. analytics.google.com -> Admin -> Create property -> Web data stream with your domain.
2. Copy the Measurement ID (G-XXXXXXXXXX). Leave Enhanced measurement ON (page changes, scrolls, outbound clicks, file downloads).

## 2. Tag Manager
1. tagmanager.google.com -> Create account/container (Web). Copy the container ID (GTM-XXXXXXX).
2. Put it in `NEXT_PUBLIC_GTM_ID` on your PRODUCTION host and redeploy (leave it out of local .env so dev traffic isn't counted).
3. Tags -> New -> **Google tag** -> Tag ID = your G-ID -> Trigger: **Initialization - All Pages**.
4. Variables -> New -> Data Layer Variable: `cta_label`, `form_name`, `project_type`, `page_path`.
5. Triggers -> New -> Custom Event: `cta_click`, and another for `generate_lead`.
6. Tags -> New -> **Google Analytics: GA4 Event**: event name `cta_click` (param cta_label), trigger = cta_click event. Repeat for `generate_lead` (params form_name, project_type).
7. Click **Preview**, open your live site, confirm the tags fire. Then **Submit** to publish.

## 3. GA4 key events
GA4 -> Admin -> Events: after `generate_lead` appears (up to a day), mark it as a **key event**.
Check Realtime while testing. Do not send names, emails or other personal data as parameters (the code doesn't).

## 4. Search Console
1. search.google.com/search-console -> Add property.
   - Best: **Domain** property with the DNS TXT record from your registrar.
   - Or **URL prefix** + HTML tag: put the token in `GOOGLE_SITE_VERIFICATION` and redeploy (the site outputs the meta tag).
2. Sitemaps -> submit `https://your-domain.com/sitemap.xml`.
3. URL Inspection -> Request indexing for: /, /services, each service page, /blog, each post, /hire, /work/nextjs-portfolio-seo.
4. Link GA4: GA4 Admin -> Product links -> Search Console links.

## 5. After 2-4 weeks
Search Console -> Performance: see queries with impressions, then write the next post for those topics.
Pages report: check anything "Crawled, currently not indexed" and improve that page's content.

## Consent (already built in)
The site starts with analytics storage DENIED (Google Consent Mode v2) and only grants it after the visitor presses Accept.
Test it: open the site in a private window, check Application -> Cookies (no _ga cookie yet), press Accept, reload, and the _ga cookies appear.
The Google tag in Tag Manager respects these consent signals automatically. If you ever add AdSense or other ads, use a Google-certified consent tool
(for example AdSense's Privacy & messaging) for visitors in the EEA, UK and Switzerland.
