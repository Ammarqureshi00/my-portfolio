export type Skill = { title: string; label: string; mark: string; stack: string[]; blurb: string };

export const SKILLS: Skill[] = [
  { title: "Frontend", label: "Interfaces", mark: "</>", stack: ["JavaScript", "React", "Next.js", "HTML", "CSS"], blurb: "Sleek, responsive and accessible user interfaces that load fast and read well on every screen." },
  { title: "CMS & Commerce", label: "WordPress & Shopify", mark: "WP", stack: ["WordPress", "Elementor", "WooCommerce", "Shopify (Liquid)"], blurb: "Themes, plugins and storefronts that clients can manage without calling a developer." },
  { title: "Backend", label: "Server side", mark: "{ }", stack: ["PHP", "Laravel", "Node.js", "Express.js"], blurb: "REST APIs and server-side logic that scales with your business." },
  { title: "Optimization", label: "Speed & SEO", mark: "CWV", stack: ["Technical SEO", "GA4", "Search Console", "Core Web Vitals"], blurb: "Faster pages, clean markup and measurable technical health." },
  { title: "Automation", label: "Workflows", mark: "n8n", stack: ["AI", "APIs", "n8n", "Workflow automation"], blurb: "Connecting tools and automating repeat work so your team can focus on real work." },
  { title: "Databases & APIs", label: "Data layer", mark: "API", stack: ["MySQL", "REST APIs", "Third-party integrations"], blurb: "Structured data, connected reliably to the tools you already use." },
];
