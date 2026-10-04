import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { SITE, TOOLS } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

const PATH = "/about";

export const metadata = buildMetadata({
  title: "About Ammar Qureshi | Full-Stack Web Developer",
  description: "Meet Ammar Qureshi, a full-stack web developer working across WordPress, Shopify, React, Laravel, performance and technical SEO.",
  path: PATH,
});

const SKILLS = ["WordPress", "WooCommerce", "Shopify", "React", "Next.js", "JavaScript", "HTML", "CSS", "PHP", "Laravel", "Node.js", "Express.js", "Technical SEO", "Core Web Vitals", "REST APIs", "Workflow automation"];

export default function AboutPage() {
  const crumbs: [string, string][] = [["Home", "/"], ["About", PATH]];

  return (
    <PageShell>
      <Schema data={[
        crumbsSchema(crumbs),
        { "@type": "AboutPage", "@id": `${SITE.url}${PATH}#about`, name: `About ${SITE.name}`, url: `${SITE.url}${PATH}`, mainEntity: { "@id": `${SITE.url}/#person` }, about: { "@id": `${SITE.url}/#person` } },
      ]} />
      <section className="ph"><div className="w nar">
        <Breadcrumbs items={crumbs} />
        <span className="pill">About</span>
        <h1>The developer behind <em>the work</em></h1>
        <p className="lead">I’m Ammar Qureshi, a full-stack web developer focused on building and improving websites, storefronts and web applications.</p>
      </div></section>

      <section><div className="w two">
        <div className="prose">
          <h2 className="h3">A practical, end-to-end approach</h2>
          <p>I work across WordPress, WooCommerce, Shopify and modern JavaScript stacks. That range lets me handle the visible interface as well as the implementation behind it, from a content site or storefront to an API-driven feature.</p>
          <p>My work includes building new experiences and troubleshooting existing ones: plugin and theme issues, performance concerns, technical SEO, and responsive behavior. I start by understanding the goal and constraints, then focus on the smallest clear solution that will be straightforward to maintain.</p>
          <p>For site changes, I use a staging-first approach and explain the work in plain language. The aim is to leave the site easier to use and maintain, with performance and search considerations included in the implementation.</p>
          {SITE.resumeUrl && <p><a className="btn" href={SITE.resumeUrl} target="_blank" rel="noopener" data-track="resume_download">Download résumé ↗</a></p>}
        </div>
        <aside className="glass facts">
          <h2 className="h3">What I work on</h2>
          <ul className="ticks">
            <li>Websites, blogs and online stores</li>
            <li>Frontend interfaces and backend APIs</li>
            <li>Site troubleshooting and improvements</li>
            <li>Performance and technical SEO</li>
          </ul>
          <Link className="more" href="/hire">Discuss a project →</Link>
        </aside>
      </div></section>

      <section><div className="w">
        <div className="c"><span className="pill">Capabilities</span><h2>Skills &amp; <em>tools</em></h2></div>
        <div className="about-skills" aria-label="Skills">
          {SKILLS.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <ul className="sv about-tools">
          {TOOLS.map((tool) => <li key={tool.title} className="glass"><h3>{tool.title}</h3><p>{tool.stack}</p><p>{tool.blurb}</p></li>)}
        </ul>
      </div></section>
    </PageShell>
  );
}