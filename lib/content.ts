import { REACT_SERVICES, REACT_POSTS } from "./content-react";

export type Faq = { q: string; a: string };
export type CodeBlock = { label?: string; code: string };
export type Section = { h: string; p?: string[]; list?: string[]; code?: string; codes?: CodeBlock[]; after?: string[] };

export type ServicePage = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  forWho: string[];
  symptoms?: string[];
  included: [string, string][];
  process: [string, string][];
  faqs: Faq[];
  posts: string[];
  proof?: [string, string];
  terminal?: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  category: string;
  date: string;
  updated: string;
  intro: string;
  sections: Section[];
  service: string;
  related: string[];
};

const BASE_SERVICES: ServicePage[] = [
  {
    slug: "wordpress-blog-development",
    name: "WordPress Blog Development",
    short: "Fast, search-ready blogs for bloggers, publishers and businesses — built or rescued.",
    metaTitle: "WordPress Blog Development & Fixes | Ammar Qureshi",
    metaDescription: "Custom WordPress blog development and fixes: fast themes, clean plugin setups, technical SEO and ad-ready layouts for bloggers and publishers.",
    h1: "WordPress Blog Development for Bloggers & Publishers",
    intro: "I’m Ammar Qureshi, a full stack WordPress developer. I build WordPress blogs that load fast, read well and are set up for search from day one — and I fix the theme and plugin problems that quietly slow existing blogs down.",
    forWho: ["Bloggers and niche publishers launching a content site", "News, review and affiliate websites that depend on search traffic", "Businesses that want a blog that supports their main website", "Owners of a slow, cluttered or broken blog that needs a clean-up, not a rebuild"],
    included: [
      ["Custom or child theme", "A lightweight theme (or a safe child theme of your current one) so design changes survive updates."],
      ["Reading experience", "Readable typography, table of contents, related posts, author box and clean mobile layouts."],
      ["Content structure", "Category and tag plan, clean permalinks and internal linking that helps both readers and crawlers."],
      ["SEO foundation", "Yoast SEO or Rank Math configured properly, XML sitemap, schema, Search Console connected."],
      ["Speed & Core Web Vitals", "Caching, image optimization and script clean-up so pages settle quickly on real phones."],
      ["Ad- and affiliate-ready layouts", "Placements designed to avoid layout shift. Ad approval itself is always the network’s decision."],
      ["Newsletter & forms", "Signup and contact forms that actually deliver, with spam protection."],
      ["Easy editing", "Blocks or custom fields so you can publish without touching code."],
    ],
    process: [["Audit", "Review the current site, plugins, theme, speed and indexing."], ["Plan", "Agree structure, goals and what to keep or remove."], ["Build", "Theme, templates, plugin setup and content structure."], ["Optimize", "Speed, accessibility, on-page SEO and mobile testing."], ["Launch & hand over", "Go live safely, document everything, show you how to manage it."]],
    faqs: [
      { q: "How much does a WordPress blog cost?", a: "It depends on whether you need a new design, a clean-up of an existing blog, or both. Send me your site and goals and I’ll reply with a fixed quote instead of a vague range." },
      { q: "Custom theme or a premium theme?", a: "A well-built premium or block theme plus a child theme is often the best value. I only recommend a fully custom theme when the design or performance goals genuinely need it." },
      { q: "Can you fix my existing blog without rebuilding it?", a: "Usually yes. Most slow or buggy blogs have a handful of plugin, theme or image problems that can be isolated and fixed on a staging copy first." },
      { q: "Will my blog rank first on Google?", a: "No one can promise rankings. I build the technical and structural foundation correctly — speed, indexing, structure, schema — so your content has a fair chance to rank." },
      { q: "Do you set up AdSense?", a: "I prepare fast, ad-friendly layouts and make sure ad code doesn’t hurt Core Web Vitals. Approval is decided by Google, based mainly on your content and site quality." },
      { q: "Which hosting do you recommend?", a: "Any host with a supported PHP version, daily backups, staging and good support. I can advise based on your traffic and budget." },
    ],
    posts: ["wordpress-blog-seo-setup-checklist", "wordpress-plugin-conflict-fix"],
  },
  {
    slug: "woocommerce-development",
    name: "WooCommerce Development",
    short: "Custom WooCommerce stores, faster checkout, product-page SEO and safe migrations.",
    metaTitle: "WooCommerce Developer: Custom Store Development",
    metaDescription: "Freelance WooCommerce developer for custom stores, faster checkout, product-page SEO, payment integrations and Shopify-to-WooCommerce migrations.",
    h1: "WooCommerce Developer for Fast, Conversion-Focused Stores",
    intro: "I build and improve WooCommerce stores with a focus on speed, a clean checkout and product pages that search engines can understand. I also build Shopify storefronts, so I can tell you honestly which platform fits your business.",
    forWho: ["Store owners with a slow or confusing WooCommerce checkout", "Businesses launching a new WooCommerce shop", "Shops moving from Shopify, Wix or another platform to WooCommerce", "Owners whose plugins and theme no longer play well together"],
    included: [
      ["Custom theme & template overrides", "Product, category, cart and checkout templates adjusted the safe way, via a child theme or hooks."],
      ["Checkout & cart customization", "Fewer fields, clearer steps and sensible validation to reduce abandoned checkouts."],
      ["Speed optimization", "Cache rules that exclude cart and checkout, image work, script clean-up and database tidying."],
      ["Product-page SEO", "Clean titles, product schema, category structure and crawlable internal links."],
      ["Payments & shipping", "Gateway and shipping integrations set up and tested end to end."],
      ["Migrations", "Products, customers and orders moved with matching URLs and 301 redirects."],
      ["Custom functionality", "Small custom plugins or snippets when an off-the-shelf plugin is overkill."],
      ["Safe updates", "Changes tested on staging first so your live shop keeps selling."],
    ],
    process: [["Discover", "Understand products, customers and current problems."], ["Audit", "Test speed, checkout flow, plugins and SEO basics."], ["Build & fix", "Implement changes on a staging copy."], ["Test", "Run through orders, payments, emails and mobile."], ["Launch & support", "Deploy carefully and monitor for issues."]],
    faqs: [
      { q: "WooCommerce or Shopify — which should I choose?", a: "WooCommerce gives more control and no platform fee but needs hosting and maintenance. Shopify is simpler to run. I work with both and will recommend what suits your catalog, budget and technical comfort." },
      { q: "Can you speed up my existing WooCommerce store?", a: "Yes. I start by measuring product, category, cart and checkout pages separately, then fix the biggest causes first — usually images, scripts, caching rules and heavy plugins." },
      { q: "Do I need a custom plugin?", a: "Often not. I try existing, well-maintained plugins and small snippets first, and only build custom code when it’s the simpler, safer option." },
      { q: "Can you migrate my store without losing SEO?", a: "That’s the goal: keep URLs where possible, add 301 redirects where they change, carry over titles and descriptions, and verify in Search Console after launch." },
      { q: "Which payment gateways do you integrate?", a: "Any gateway with a maintained WooCommerce integration. Tell me where you sell and I’ll confirm the best options." },
      { q: "Do you offer ongoing support?", a: "Yes, on request — updates on staging first, monitoring and fixes after launch." },
    ],
    posts: ["woocommerce-speed-optimization-checklist", "wordpress-plugin-conflict-fix"],
  },
  {
    slug: "wordpress-plugin-theme-issue-fixing",
    name: "WordPress Plugin & Theme Issue Fixing",
    short: "Plugin conflicts, theme bugs and slow pages found and fixed safely on staging.",
    metaTitle: "WordPress Plugin & Theme Issue Fixing Service",
    metaDescription: "Plugin conflicts, theme bugs, white screens and slow pages fixed safely on staging. Hire a WordPress developer to troubleshoot your site.",
    h1: "WordPress Plugin & Theme Issue Fixing",
    intro: "Most WordPress problems come from a plugin, a theme or a setting interacting badly. I isolate the cause on a staging copy, fix it properly and tell you in plain language what went wrong — so it doesn’t come back.",
    forWho: ["Bloggers whose site broke after an update", "Store owners with a checkout or layout bug", "Agencies that need a reliable developer for tricky WordPress issues", "Anyone who’s tried five plugins and still has the problem"],
    symptoms: ["White screen or “critical error” message", "Layout broke after a plugin or theme update", "Site became slow after installing a plugin", "Page builder or customizer won’t save", "Contact forms not sending emails", "Mobile layout overlapping or cut off", "Admin dashboard painfully slow", "Traffic dropped after a redesign or migration"],
    included: [
      ["Reproduce & isolate", "Work on a staging copy so your live site stays safe."],
      ["Conflict testing", "Systematic plugin and theme testing instead of guesswork."],
      ["Error log analysis", "Read debug and PHP error logs to find the exact file and cause."],
      ["The fix", "Configuration change, child-theme override, plugin replacement or a small piece of custom code."],
      ["Regression testing", "Check key pages, forms and checkout on desktop and mobile."],
      ["Written summary", "What caused it, what I changed and how to prevent it."],
    ],
    process: [["Backup", "Full backup and staging copy."], ["Reproduce", "Confirm the problem and collect error logs."], ["Isolate", "Narrow down the plugin, theme or setting."], ["Fix", "Apply and test the smallest safe change."], ["Deploy & report", "Push live and send a clear summary."]],
    faqs: [
      { q: "Is it safe to let you into my site?", a: "I work from a backup and a staging copy, change only what’s needed and document every change. Use a separate admin account you can remove afterwards." },
      { q: "My site shows a critical error. Can it be fixed?", a: "Almost always. WordPress usually logs which file caused it, and the fix is often disabling or replacing one plugin or reverting a recent change." },
      { q: "How long does a fix take?", a: "Simple conflicts can take under an hour once isolated; deeper theme or performance problems take longer. I’ll give an estimate after a quick look." },
      { q: "Can you stop this happening again?", a: "I can’t guarantee zero issues, but a staging-first update routine, fewer plugins and proper backups make problems rare and quick to fix." },
      { q: "Do you fix hacked sites?", a: "Clean-up of a compromised site is a separate, more careful job. Contact me with details and I’ll tell you honestly whether I’m the right fit." },
    ],
    posts: ["wordpress-plugin-conflict-fix", "woocommerce-speed-optimization-checklist"],
  },
];

const BASE_POSTS: Post[] = [
  {
    slug: "wordpress-plugin-conflict-fix",
    title: "WordPress Plugin Conflict: How to Find and Fix the Culprit",
    metaTitle: "WordPress Plugin Conflict: Find & Fix It (Step by Step)",
    description: "A practical, safe workflow to find which plugin or theme is breaking your WordPress site, using staging, debug logs and a binary-search method.",
    keyword: "WordPress plugin conflict",
    category: "Troubleshooting",
    date: "2026-10-04",
    updated: "2026-10-04",
    intro: "A plugin conflict usually shows up right after an update: a white screen, a broken layout, a form that stops sending or an admin area that crawls. The good news is that conflicts can be found with a repeatable method instead of guesswork. This is the workflow I follow when I troubleshoot a WordPress plugin conflict.",
    sections: [
      { h: "Step 0: Work on a copy, not the live site", p: ["Take a full backup first and, if your host offers it, clone the site to a staging environment. Deactivating plugins on a live blog or store can break forms, payments or ads for real visitors."] },
      { h: "Step 1: Turn on debug logging", p: ["Add these lines to wp-config.php, above the comment that says to stop editing. They write errors to a file instead of showing them to visitors."], code: "define( 'WP_DEBUG', true );\ndefine( 'WP_DEBUG_LOG', true );\ndefine( 'WP_DEBUG_DISPLAY', false );", after: ["Reproduce the problem, then open wp-content/debug.log. A fatal error normally names a file path, and the folder under wp-content/plugins or wp-content/themes tells you who is responsible. Switch debugging off again when you’re done."] },
      { h: "Step 2: Rule out the theme", p: ["On staging, activate a default WordPress theme such as Twenty Twenty-Five. If the problem disappears, the issue lives in your theme or its customizations. If it stays, keep going."] },
      { h: "Step 3: Find the plugin with a binary search", p: ["Instead of testing plugins one by one, halve the problem each round:"], list: ["Deactivate all plugins. If the problem is gone, a plugin is responsible.", "Reactivate half of them and test again.", "If the problem returns, the culprit is in that half; if not, it’s in the other half.", "Repeat until one plugin remains. Twenty plugins take about four or five rounds."], after: ["Pay special attention to caching, security, optimization and page-builder add-ons, since they touch many parts of a page."] },
      { h: "A safer option on live sites", p: ["The official Health Check & Troubleshooting plugin has a troubleshooting mode that disables plugins and switches the theme only for your logged-in session, so visitors keep seeing the normal site while you test."] },
      { h: "Step 4: Decide on the fix", list: ["Update, or roll back to the previous version if the update caused it.", "Check the plugin’s settings, for example excluding it from minify or combine options.", "Replace it with a lighter, better-maintained alternative.", "Send the exact log lines to the plugin author when reporting the bug.", "For deeper problems, a developer can write a small compatibility fix."] },
      { h: "How to prevent the next conflict", list: ["Test updates on staging before updating live.", "Keep the plugin count low and delete what you don’t use.", "Run a supported PHP version.", "Keep automated backups so you can roll back quickly."] },
    ],
    service: "wordpress-plugin-theme-issue-fixing",
    related: ["woocommerce-speed-optimization-checklist", "wordpress-blog-seo-setup-checklist"],
  },
  {
    slug: "woocommerce-speed-optimization-checklist",
    title: "WooCommerce Speed Optimization: A Practical Checklist",
    metaTitle: "WooCommerce Speed Optimization Checklist (Practical)",
    description: "A practical checklist to speed up a WooCommerce store: cache rules for cart and checkout, images, scripts, database clean-up and hosting.",
    keyword: "WooCommerce speed optimization",
    category: "WooCommerce",
    date: "2026-10-04",
    updated: "2026-10-04",
    intro: "A slow shop loses customers at exactly the moments that matter: product pages, cart and checkout. WooCommerce speed optimization isn’t one magic plugin; it’s a short list of fixes applied in the right order. Here’s the checklist I work through.",
    sections: [
      { h: "1. Measure the pages that earn money", p: ["Test a product page, a category page, the cart and the checkout separately in PageSpeed Insights, and check the Core Web Vitals report in Search Console. Note the biggest problems on each page before changing anything, so you can prove what helped."] },
      { h: "2. Cache the right pages, and exclude the wrong ones", p: ["Page caching helps on the home page, categories and products. The cart, checkout and My Account pages are personal and must not be served from a shared cache. Most WooCommerce-aware cache plugins and hosts handle this, but verify it: add a product to your cart in one browser and make sure another browser doesn’t see it."] },
      { h: "3. Fix images first", list: ["Serve modern formats such as WebP or AVIF.", "Upload images near the size they’re displayed instead of huge originals.", "Lazy-load images below the fold, but never the main image at the top of a product page.", "Set width and height so the layout doesn’t jump while loading."] },
      { h: "4. Trim plugins and scripts", p: ["Every plugin can add CSS and JavaScript to every page. Audit what you really use, remove duplicates and load scripts only where they’re needed, for example form scripts only on the contact page. Heavy sliders and page-builder widgets above the fold are common causes of a slow main content paint."] },
      { h: "5. Look at cart fragments", p: ["Many themes update the mini-cart through an AJAX request (wc-ajax=get_refreshed_fragments). On stores that don’t show a mini-cart, that request can be unnecessary. Test carefully before disabling it, because the mini-cart count will stop updating if your theme relies on it."] },
      { h: "6. Clean the database", p: ["Expired transients, old sessions and leftover data from removed plugins pile up. Back up first, then clean them. Recent WooCommerce versions also support High-Performance Order Storage (HPOS), which keeps orders in dedicated tables; check that your plugins are compatible before enabling it."] },
      { h: "7. Use current PHP and decent hosting", p: ["Run a supported PHP version, and choose hosting with enough resources for your traffic. Object caching such as Redis or Memcached and a CDN help a lot on busy stores if your host offers them."] },
      { h: "8. Re-test and keep notes", p: ["Repeat the measurements from step one and keep a changelog. If something breaks, you’ll know which change caused it, and the troubleshooting workflow for a plugin conflict will get you back on track quickly."] },
    ],
    service: "woocommerce-development",
    related: ["wordpress-plugin-conflict-fix", "wordpress-blog-seo-setup-checklist"],
  },
  {
    slug: "wordpress-blog-seo-setup-checklist",
    title: "WordPress Blog SEO Setup Checklist for New Blogs",
    metaTitle: "WordPress Blog SEO Setup Checklist (New Blogs)",
    description: "Set up a new WordPress blog for search: indexing, permalinks, SEO plugin, sitemap, categories, speed and Search Console, step by step.",
    keyword: "WordPress blog SEO setup",
    category: "SEO",
    date: "2026-10-04",
    updated: "2026-10-04",
    intro: "Good WordPress blog SEO starts before you publish the first post. Get the foundations right once and every article benefits. This is the setup checklist I use when launching a new blog.",
    sections: [
      { h: "1. Make sure search engines can see the site", p: ["In Settings → Reading, confirm that “Discourage search engines from indexing this site” is unchecked. Many sites launch with it still on. Also make sure the whole site runs on HTTPS and that you have one preferred version of the domain, with or without www."] },
      { h: "2. Set clean permalinks before you publish", p: ["Use Settings → Permalinks and choose the post name structure. Decide this early: changing URLs later means setting up redirects for every post."] },
      { h: "3. Install one SEO plugin and configure it", p: ["Pick either Yoast SEO or Rank Math, never both. Set your site name, social profiles and title templates, turn on the XML sitemap and check that thin archive pages, such as unused tag archives, aren’t cluttering the index."] },
      { h: "4. Plan categories and internal links", list: ["Keep to roughly four to eight clear categories and use tags sparingly.", "Write a few in-depth pillar posts and link supporting posts to them.", "Give every post two or three links to related posts, with descriptive anchor text instead of “click here”."] },
      { h: "5. Write for the search query", p: ["Choose one main keyword per post, answer the question in the first paragraph, keep the title under about 60 characters and write a meta description that makes people want to click. Use headings to break the article into scannable sections."] },
      { h: "6. Images and speed", p: ["Compress images, add descriptive alt text, set dimensions and use caching. Avoid heavy page-builder widgets at the top of posts, and check Core Web Vitals once the first posts are live."] },
      { h: "7. Connect Google Search Console", p: ["Verify your site, then submit the sitemap URL shown by your SEO plugin. Use the URL Inspection tool to request indexing for your first posts, and review the Pages report for anything that isn’t indexed."] },
      { h: "Common mistakes to avoid", list: ["Leaving the search-engine discouragement setting on.", "Running two SEO plugins at once.", "Publishing many thin posts instead of a few useful ones.", "Changing permalinks after posts are indexed without redirects."] },
    ],
    service: "wordpress-blog-development",
    related: ["wordpress-plugin-conflict-fix", "woocommerce-speed-optimization-checklist"],
  },
];

export const SERVICE_PAGES: ServicePage[] = [...BASE_SERVICES, ...REACT_SERVICES];
export const POSTS: Post[] = [...BASE_POSTS, ...REACT_POSTS];

export const getService = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const readMins = (p: Post) => {
  const words = [p.intro, ...p.sections.flatMap((s) => [...(s.p || []), ...(s.list || []), ...(s.after || [])])].join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};
export const fmtDate = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
