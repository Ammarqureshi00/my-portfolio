export type Skill = { title: string; label: string; mark: string; stack: string[]; blurb: string };

export const SKILLS: Skill[] = [
  { title: "Frontend", label: "Interfaces", mark: "</>", stack: ["JavaScript", "React", "Next.js", "HTML", "CSS"], blurb: "Responsive interfaces that are easy to follow, work across screen sizes and feel quick to use." },
  { title: "CMS & Commerce", label: "WordPress & Shopify", mark: "WP", stack: ["WordPress", "Elementor", "WooCommerce", "Shopify (Liquid)"], blurb: "Themes, plugins and storefronts your team can update without a developer for every small change." },
  { title: "Backend", label: "Server side", mark: "{ }", stack: ["PHP", "Laravel", "Node.js", "Express.js"], blurb: "APIs and server-side features that connect the site to the tools and data behind it." },
  { title: "Optimization", label: "Speed & SEO", mark: "CWV", stack: ["Technical SEO", "GA4", "Search Console", "Core Web Vitals"], blurb: "Practical checks to find what is slowing pages down or making them harder to find." },
  { title: "Automation & integrations", label: "Useful workflows", mark: "n8n", stack: ["APIs", "n8n", "Workflow automation"], blurb: "Connect tools and remove repetitive steps when automation genuinely makes the work simpler." },
  { title: "Databases & APIs", label: "Data layer", mark: "API", stack: ["MySQL", "REST APIs", "Third-party integrations"], blurb: "Reliable connections between your website, its data and the services you already use." },
];
