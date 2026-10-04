export const SITE = {
  name: "Ammar Qureshi",
  title: "Ammar Qureshi — Full-Stack Web Developer",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in WordPress, Shopify, modern frontend development, performance optimization and custom web experiences.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.your-domain.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
  github: process.env.NEXT_PUBLIC_GITHUB || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
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
  { label: "LinkedIn", href: SITE.linkedin, text: "" },
  { label: "GitHub", href: SITE.github, text: "" },
  { label: "WhatsApp", href: SITE.whatsapp, text: "" },
].filter((l) => l.href);

export const TOOLS: { title: string; tiles: string[]; stack: string; blurb: string; wide?: boolean }[] = [
  { title: "Frontend", tiles: ["HTML", "CSS", "JS", "React"], stack: "JavaScript, React, HTML, CSS", blurb: "Sleek, responsive and accessible user interfaces.", wide: true },
  { title: "CMS & Commerce", tiles: ["WP", "Elementor", "Woo", "Liquid"], stack: "WordPress, Elementor, WooCommerce, Shopify", blurb: "Themes, plugins and storefronts that clients can manage." },
  { title: "Backend", tiles: ["PHP", "Laravel", "Node", "Express"], stack: "PHP, Laravel, Node.js, Express.js", blurb: "REST APIs and server-side logic that scales." },
  { title: "Optimization", tiles: ["SEO", "GA4", "GSC", "CWV"], stack: "SEO, GA4, Search Console, Core Web Vitals", blurb: "Faster pages and measurable technical health." },
  { title: "Automation", tiles: ["AI", "APIs", "n8n", "Flows"], stack: "AI, APIs, n8n, workflow automation", blurb: "Connecting tools and automating repeat work." },
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
};

export const PROJECTS: Project[] = [
  { name: "Remote IT Jobs", slug: "remote-it-jobs", categories: ["WordPress", "Frontend", "Custom Development"], url: "https://remoteitjobs.us/", tech: "WordPress · Custom Development", kind: "Job platform", description: "A remote-focused job listings website for IT professionals, with job search, filters, career guides and a salary report.", image: "/projects/remote-it-jobs.webp", alt: "Remote IT Jobs website — remote job board homepage with search and job listings" },
  { name: "Top Edge Technologies", slug: "top-edge-technologies", categories: ["React", "Frontend", "Custom Development"], url: "https://topedgetechnologies.com/", tech: "React.js · Custom Development", kind: "Software company website", description: "A modern React-based website for a software and digital agency, presenting services, featured projects, awards and the team.", image: "/projects/top-edge-technologies.webp", alt: "Top Edge Technologies website — React-built software company homepage" },
  { name: "Hexura", slug: "hexura", categories: ["Shopify", "E-commerce", "Frontend"], url: "https://hexura.shop/", tech: "E-commerce · Shopify", kind: "E-commerce storefront", description: "A Shopify store with department-based collections and a clean shopping journey from product discovery to checkout.", image: "/projects/hexura.webp", alt: "Hexura Shopify store homepage with product collections and categories" },
  { name: "ATechNewsDaily", slug: "a-tech-news-daily", categories: ["WordPress", "SEO"], url: "https://atechnewsdaily.com/", tech: "WordPress · SEO", kind: "News website", description: "A tech news and insights website covering AI tools, cybersecurity and how-to guides, organized for fast, readable browsing.", image: "/projects/a-tech-news-daily.webp", alt: "ATechNewsDaily WordPress news website homepage — tech news and digital insights" },
  { name: "Cursed Text Generator", slug: "cursed-text-generator", categories: ["WordPress", "Custom Development", "SEO"], url: "https://cursedtextgenerator.us/", tech: "WordPress · Custom Tool", kind: "Online tool website", description: "A free online text-styling tool with a live generator, guides and FAQs, built as a content-rich, search-focused WordPress site.", image: "/projects/cursed-text-generator.webp", alt: "Cursed Text Generator website — free online cursed text tool interface" },
  { name: "Pet Life Expert", slug: "pet-life-expert", categories: ["WordPress", "SEO"], url: "https://petlifeexpert.com/", tech: "WordPress · SEO", kind: "Editorial website", description: "A pet-care information website organized around readable, well-structured guides for dog, cat and pet owners.", image: "/projects/pet-life-expert.webp", alt: "Pet Life Expert WordPress website — pet care guidance homepage" },
  { name: "Harvard Ave Electric", slug: "harvard-ave-electric", categories: ["WordPress"], url: "https://harvardaveelectric.com/", tech: "WordPress", kind: "Business website", description: "A local electrician website that presents services, credentials and reviews and makes contacting the company straightforward.", image: "/projects/harvard-ave-electric.webp", alt: "Harvard Ave Electric WordPress website — residential and commercial electrician services" },
  { name: "Jones Family Follies", slug: "jones-family-follies", categories: ["WordPress"], url: "https://jonesfamilyfollies.com/", tech: "WordPress", kind: "Content website", description: "A personal family-memories website with a photo-driven post grid, designed to present content clearly.", image: "/projects/jones-family-follies.webp", alt: "Jones Family Follies WordPress website — photo posts grid" },
];

export const TABS = ["All", "WordPress", "Shopify", "React", "Frontend", "E-commerce", "Custom Development"];

export const SERVICES: [string, string][] = [
  ["WordPress Development", "Custom themes, plugins, Elementor customization, WooCommerce and business websites."],
  ["Shopify Development", "Custom Liquid sections, theme customization, responsive storefronts and e-commerce experiences."],
  ["Frontend Development", "HTML, CSS, JavaScript, React and API-driven interfaces."],
  ["Backend Development", "PHP, Laravel, Node.js and Express APIs."],
  ["Performance & SEO", "Website audits, speed optimization, technical SEO and performance improvements."],
  ["AI & Automation", "AI-assisted workflows, API integrations and business automation."],
];

export const APPROACH: [string, string][] = [
  ["Understand", "The business, audience and requirements."],
  ["Structure", "Content, architecture and user journey."],
  ["Build", "The interface and functionality."],
  ["Optimize", "Performance, responsiveness, SEO and accessibility."],
  ["Refine", "Test across devices and polish the result."],
];

export const WHY = [
  "Business-first thinking", "Clean implementation", "Responsive development", "Performance awareness",
  "CMS flexibility", "Conversion-focused UX", "Maintainable code", "Cross-platform experience",
];
