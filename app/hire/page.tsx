import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hire Ammar Qureshi | WordPress, WooCommerce & React Developer",
  description: "Need a WordPress or WooCommerce site built or fixed, or a React/Next.js developer for your team? Tell me what you need and we can start with a clear scope.",
  path: "/hire",
});

const RESUME = process.env.NEXT_PUBLIC_RESUME_URL || "";
const FACTS: [string, string][] = [
  ["Role", "WordPress & Full-Stack Web Developer"],
  ["Core stack", "WordPress, WooCommerce, PHP, JavaScript, React, Next.js"],
  ["Also", "Shopify (Liquid), Laravel, Node.js / Express, REST APIs, MySQL"],
  ["Typical work", "Site and store builds, plugin and theme fixes, speed and technical SEO"],
  ["Availability", "Freelance projects and remote opportunities"],
  ["Work", "Selected projects across WordPress, Shopify and React"],
];

export default function HirePage() {
  return (
    <PageShell>
      <Schema data={[crumbsSchema([["Home", "/"], ["Hire", "/hire"]]), { "@type": "ContactPage", name: "Hire Ammar Qureshi", url: `${SITE.url}/hire`, about: { "@id": `${SITE.url}/#person` } }]} />
      <section className="ph"><div className="w">
        <Breadcrumbs items={[["Home", "/"], ["Hire", "/hire"]]} />
        <span className="pill">Freelance projects · Remote roles</span>
        <h1>Need a developer for your site? <em>Let’s talk.</em></h1>
        <p className="lead">I’m Ammar, a WordPress and full-stack developer. I build and improve sites, take on tricky fixes, and work with React and Next.js when a project needs a custom front end. Tell me what you need; I’ll be upfront about whether I’m a fit.</p>
        <div className="cta">
          <Link className="btn g" href="#contact">Tell me what you need →</Link>
          <Link className="btn" href="/#work">See selected work</Link>
          {RESUME && <a className="btn" href={RESUME} target="_blank" rel="noopener" data-track="resume_download">Download résumé ↗</a>}
        </div>
      </div></section>
      <section><div className="w two">
        <div className="glass rv facts"><h2 className="h3">Quick facts</h2>
          <dl>{FACTS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div>
        <div className="glass rv facts"><h2 className="h3">A useful first message</h2>
          <ul className="ticks">
            <li>A website link, if there is one</li>
            <li>What is going wrong—or what you want to build</li>
            <li>A screenshot or error message, if it helps explain it</li>
            <li>A deadline or budget, if you already have one (optional)</li>
          </ul>
          <p style={{ marginTop: 16, color: "var(--t2)", fontSize: 14 }}>You don’t need a polished brief. A few honest details are enough for me to understand the job and suggest a next step.</p></div>
      </div></section>
      <Contact />
    </PageShell>
  );
}
