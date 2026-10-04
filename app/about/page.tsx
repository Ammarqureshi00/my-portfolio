import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { SITE, TOOLS } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

const PATH = "/about";

export const metadata = buildMetadata({
git   title: "About Ammar Qureshi | WordPress & Full-Stack Developer",
  description: "I build and improve WordPress and WooCommerce sites, troubleshoot the problems that slow them down, and develop custom React and Next.js interfaces.",
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
        <h1>A developer who starts with <em>the actual problem</em></h1>
        <p className="lead">I’m Ammar. I build WordPress and WooCommerce sites, sort out the issues that get in their way, and develop custom interfaces with React and Next.js.</p>
      </div></section>

      <section><div className="w two">
        <div className="prose">
          <h2 className="h3">I start with the problem, not a pile of tools</h2>
          <p>Sometimes that means building a site from a clear brief. Sometimes it means tracing a plugin conflict, a slow checkout or a page that looks fine on desktop but falls apart on a phone. I work across WordPress, WooCommerce, Shopify, React, Next.js and the APIs behind them.</p>
          <p>I don’t recommend a rebuild just because it would be more interesting to code. I look at what is already working, explain the options and keep the fix as small as the problem allows.</p>
          <p>For existing sites, I use a safe working copy where the setup allows it. Before I hand anything over, I explain what changed and what you need to know to keep it running.</p>
          {SITE.resumeUrl && <p><a className="btn" href={SITE.resumeUrl} target="_blank" rel="noopener" data-track="resume_download">Download résumé ↗</a></p>}
        </div>
        <aside className="glass facts">
          <h2 className="h3">What I can help with</h2>
          <ul className="ticks">
            <li>New WordPress sites, blogs and WooCommerce stores</li>
            <li>Plugin, theme, checkout and performance problems</li>
            <li>Custom React and Next.js interfaces</li>
            <li>Technical SEO and third-party integrations</li>
          </ul>
          <Link className="more" href="/hire#contact">Tell me what you need →</Link>
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