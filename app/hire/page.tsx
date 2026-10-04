import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hire a Full Stack WordPress Developer | Ammar Qureshi",
  description: "Hire Ammar Qureshi, a full stack WordPress developer for freelance projects and remote roles: WooCommerce, blogs, plugin and theme fixes, React and Laravel.",
  path: "/hire",
});

const RESUME = process.env.NEXT_PUBLIC_RESUME_URL || "";
const FACTS: [string, string][] = [
  ["Role", "Full Stack WordPress Developer"],
  ["Core stack", "WordPress, WooCommerce, Elementor, PHP, JavaScript, React"],
  ["Also", "Shopify (Liquid), Laravel, Node.js / Express, REST APIs, MySQL"],
  ["Specialties", "Blog and store builds, plugin and theme issue fixing, speed and technical SEO"],
  ["Availability", "Freelance projects and remote opportunities"],
  ["Work", "Selected projects across WordPress, Shopify and React"],
];

export default function HirePage() {
  return (
    <PageShell>
      <Schema data={[crumbsSchema([["Home", "/"], ["Hire", "/hire"]]), { "@type": "ContactPage", name: "Hire Ammar Qureshi", url: `${SITE.url}/hire`, about: { "@id": `${SITE.url}/#person` } }]} />
      <section className="ph"><div className="w">
        <Breadcrumbs items={[["Home", "/"], ["Hire", "/hire"]]} />
        <span className="pill">Open to work</span>
        <h1>Hire a full stack <em>WordPress developer</em></h1>
        <p className="lead">Whether you’re a business with a broken or slow site, or a recruiter looking for a developer who ships end to end, here’s everything on one page.</p>
        <div className="cta">
          {RESUME && <a className="btn g" href={RESUME} target="_blank" rel="noopener" data-track="resume_download">Download résumé ↗</a>}
          <Link className="btn" href="/#work">View selected work</Link>
          <Link className="btn" href="/services">See services</Link>
        </div>
      </div></section>
      <section><div className="w two">
        <div className="glass rv facts"><h2 className="h3">For recruiters: quick facts</h2>
          <dl>{FACTS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div>
        <div className="glass rv facts"><h2 className="h3">For clients: what to send me</h2>
          <ul className="ticks">
            <li>Your website URL (and a staging link if you have one)</li>
            <li>What’s wrong, or what you want built</li>
            <li>Screenshots or error messages, if any</li>
            <li>Your deadline and rough budget</li>
          </ul>
          <p style={{ marginTop: 16, color: "var(--t2)", fontSize: 14 }}>I’ll reply with next steps and a clear quote. I work from backups and staging copies so your live site stays safe.</p></div>
      </div></section>
      <Contact />
    </PageShell>
  );
}
