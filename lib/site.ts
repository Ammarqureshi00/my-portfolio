export const SITE = {
  name: "Ammar Qureshi",
  title: "Ammar Qureshi | WordPress, WooCommerce & Next.js Developer",
  jobTitle: "WordPress & Full-Stack Web Developer",
  description:
    "I build and improve WordPress and WooCommerce sites, fix the issues slowing them down, and use React or Next.js when a project needs a custom front end.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ammarqureshi-nine.vercel.app").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_EMAIL || "ammar.techmail@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+92 329 7727245",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "tel:+923297727245",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/ammarqureshi099/",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/Ammarqureshi00",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/ez.scripts/",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/923297727245",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "",
  responseTime: process.env.NEXT_PUBLIC_RESPONSE_TIME || "",
  keywords: [
    "Ammar Qureshi",
    "full-stack web developer",
    "WordPress developer",
    "Shopify developer",
    "React developer",
    "Laravel developer",
    "Node.js developer",
    "WooCommerce developer",
    "freelance web developer",
    "technical SEO",
    "Core Web Vitals optimization",
  ],
};

export const contactLinks = [
  { label: "Email", href: SITE.email ? `mailto:${SITE.email}` : "", text: SITE.email },
  { label: "Phone", href: SITE.phoneHref, text: SITE.phone },
  { label: "WhatsApp", href: SITE.whatsapp, text: SITE.phone },
  { label: "LinkedIn", href: SITE.linkedin, text: "" },
  { label: "GitHub", href: SITE.github, text: "" },
  { label: "Instagram", href: SITE.instagram, text: "" },
].filter((l) => l.href);

export const TOOLS: { title: string; tiles: string[]; stack: string; blurb: string; wide?: boolean }[] = [
  { title: "Frontend", tiles: ["HTML", "CSS", "JS", "React"], stack: "JavaScript, React, HTML, CSS", blurb: "Interfaces that feel clear on a phone, not just in a design file.", wide: true },
  { title: "CMS & Commerce", tiles: ["WP", "Elementor", "Woo", "Liquid"], stack: "WordPress, Elementor, WooCommerce, Shopify", blurb: "Sites and storefronts your team can update without calling me for every edit." },
  { title: "Backend", tiles: ["PHP", "Laravel", "Node", "Express"], stack: "PHP, Laravel, Node.js, Express.js", blurb: "The APIs and server-side logic that connect a site to the rest of your business." },
  { title: "Optimization", tiles: ["SEO", "GA4", "GSC", "CWV"], stack: "Technical SEO, GA4, Search Console, Core Web Vitals", blurb: "I find what is slowing a page down or getting in the way of search." },
  { title: "Automation & integrations", tiles: ["APIs", "n8n", "Flows"], stack: "APIs, n8n, workflow automation", blurb: "Useful connections between the tools you already rely on—without adding complexity for its own sake." },
];

export const ORBIT = ["React", "WordPress", "Shopify", "Node", "Laravel", "PHP"];

export type Project = {
  name: string;
  slug: string;
  categories: string[];
  url: string;
  tech: string;
  kind: string;
  description: string;
  image: string;
  alt: string;
  role?: string;
  caseStudyPath?: string;
  results?: string[];
};

export const PROJECTS: Project[] = [
  { name: "Top Edge Admin Dashboard", slug: "top-edge-admin-dashboard", categories: ["React", "Frontend", "Custom Development"], url: "https://topedgetechnologies.com/admin/", tech: "React.js · Dashboard UI", kind: "Admin dashboard", description: "An admin dashboard for managing events, jobs, projects and site content, with analytics alongside the day-to-day publishing tools.", image: "/projects/tet-dashboard.webp", alt: "Top Edge Technologies admin dashboard — overview of content, analytics and operations" },
  { name: "Remote IT Jobs", slug: "remote-it-jobs", categories: ["WordPress", "Frontend", "Custom Development"], url: "https://remoteitjobs.us/", tech: "WordPress · Custom Development", kind: "Job platform", description: "A job board for remote IT roles, with filters to narrow a search and career guides and salary information alongside the listings.", image: "/projects/remote-it-jobs.webp", alt: "Remote IT Jobs website — remote job board homepage with search and job listings" },
  { name: "Top Edge Technologies", slug: "top-edge-technologies", categories: ["React", "Frontend", "Custom Development"], url: "https://topedgetechnologies.com/", tech: "React.js · Custom Development", kind: "Software company website", description: "A React website for a software and digital agency, bringing its services, projects, awards and team together in one place.", image: "/projects/top-edge-technologies.webp", alt: "Top Edge Technologies website — React-built software company homepage" },
  { name: "Hexura", slug: "hexura", categories: ["Shopify", "E-commerce", "Frontend"], url: "https://hexura.shop/", tech: "E-commerce · Shopify", kind: "E-commerce storefront", description: "A Shopify storefront organized around department-based collections and a simple path from browsing products to checkout.", image: "/projects/hexura.webp", alt: "Hexura Shopify store homepage with product collections and categories" },
  { name: "ATechNewsDaily", slug: "a-tech-news-daily", categories: ["WordPress", "SEO"], url: "https://atechnewsdaily.com/", tech: "WordPress · SEO", kind: "News website", description: "A WordPress tech publication covering AI tools, cybersecurity and how-to guides, with articles easy to scan and browse.", image: "/projects/a-tech-news-daily.webp", alt: "ATechNewsDaily WordPress news website homepage — tech news and digital insights" },
  { name: "Cursed Text Generator", slug: "cursed-text-generator", categories: ["WordPress", "Custom Development", "SEO"], url: "https://cursedtextgenerator.us/", tech: "WordPress · Custom Tool", kind: "Online tool website", description: "A WordPress tool site with a live text-style generator, plus guides and FAQs for people looking for more than a one-click result.", image: "/projects/cursed-text-generator.webp", alt: "Cursed Text Generator website — free online cursed text tool interface" },
  { name: "Pet Life Expert", slug: "pet-life-expert", categories: ["WordPress", "SEO"], url: "https://petlifeexpert.com/", tech: "WordPress · SEO", kind: "Editorial website", description: "A pet-care publication with practical guides for dog and cat owners, organized to make useful advice easy to find.", image: "/projects/pet-life-expert.webp", alt: "Pet Life Expert WordPress website — pet care guidance homepage" },
  { name: "Harvard Ave Electric", slug: "harvard-ave-electric", categories: ["WordPress"], url: "https://harvardaveelectric.com/", tech: "WordPress", kind: "Business website", description: "A local electrician’s website that puts services, credentials, reviews and contact details where customers can find them.", image: "/projects/harvard-ave-electric.webp", alt: "Harvard Ave Electric WordPress website — residential and commercial electrician services" },
  { name: "Jones Family Follies", slug: "jones-family-follies", categories: ["WordPress"], url: "https://jonesfamilyfollies.com/", tech: "WordPress", kind: "Content website", description: "A family site for sharing photos and stories, with a simple post grid that makes it easy to revisit older memories.", image: "/projects/jones-family-follies.webp", alt: "Jones Family Follies WordPress website — photo posts grid" },
];

export const TABS = ["All", "WordPress", "Shopify", "React", "Frontend", "E-commerce", "Custom Development"];

export const SERVICES: [string, string][] = [
  ["WordPress & WooCommerce", "Build a new site or store, improve the one you have, or track down a plugin, theme or checkout problem."],
  ["Shopify", "Theme changes, Liquid sections and storefront improvements that keep your catalog easy to browse."],
  ["React & Next.js", "Custom interfaces, marketing sites and front ends that need more than a standard theme."],
  ["Backend & APIs", "PHP, Laravel, Node.js and the integrations that connect your website to other services."],
  ["Speed & technical SEO", "Find what is slowing pages down or keeping useful content out of search."],
  ["Workflow automation", "Connect APIs and remove repetitive steps when a small, reliable workflow is the right solution."],
];

export const APPROACH: [string, string][] = [
  ["Start with the context", "I look at the site, the people using it and what you need to change."],
  ["Agree the useful scope", "We settle what is included, what can wait and what it will cost before work starts."],
  ["Build or troubleshoot", "I keep changes focused and use a staging copy before touching a live site."],
  ["Test the real journey", "Forms, checkout, mobile layouts and performance get checked where they matter."],
  ["Hand it back clearly", "You get a working result, a plain-English summary and a sensible next step."],
];

export const WHY = [
  "One developer to speak to", "No rebuild without a reason", "Staging before live edits", "Scope agreed up front",
  "Mobile checks included", "Plain-English updates", "Clean handover", "Performance considered early",
];
