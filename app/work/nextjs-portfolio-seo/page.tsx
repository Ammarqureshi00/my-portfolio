import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { SITE } from "@/lib/site";
import { METRICS } from "@/lib/metrics";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

const PATH = "/work/nextjs-portfolio-seo";

export const metadata = buildMetadata({
  title: "Case Study: SEO-First Next.js Portfolio | Ammar Qureshi",
  description: "How this portfolio was built with Next.js App Router: static generation, Metadata API, JSON-LD, sitemap, RSS, generated social images and fast loading.",
  path: PATH,
});

const BUILT: [string, string][] = [
  ["Static generation", "Every page is pre-rendered at build time. Service and blog pages use generateStaticParams with dynamicParams off, so unknown URLs return a 404."],
  ["Metadata API", "A helper builds a unique title, description, canonical URL, Open Graph and Twitter tags for each route."],
  ["Structured data", "JSON-LD for the site, the person, services, blog posts, breadcrumbs and the contact page, generated from the same data as the pages."],
  ["Crawl files", "A generated sitemap, robots file and RSS feed, all built from the content data so they never drift out of date."],
  ["Social images", "Open Graph images are generated for the site and for every blog post with next/og."],
  ["Images and fonts", "next/image serves modern formats at the right size, and next/font self-hosts the fonts to avoid layout shift."],
  ["Small client islands", "Pages are server components. Only the header, the project filter, the contact form and the scroll reveal run JavaScript in the browser."],
  ["Works without JavaScript", "Content is in the HTML. The scroll animation only hides elements below the fold after hydration."],
];

export default function CaseStudy() {
  const crumbs: [string, string][] = [["Home", "/"], ["Work", "/#work"], ["Next.js portfolio", PATH]];
  return (
    <PageShell>
      <Schema data={[
        crumbsSchema(crumbs),
        { "@type": "CreativeWork", name: "SEO-first Next.js portfolio", url: `${SITE.url}${PATH}`, description: "A portfolio built with Next.js App Router, static generation and structured data.", creator: { "@id": `${SITE.url}/#person` }, about: ["Next.js", "Technical SEO", "Core Web Vitals"] },
      ]} />
      <section className="ph"><div className="w nar">
        <Breadcrumbs items={crumbs} />
        <span className="pill">Case study</span>
        <h1>An SEO-first <em>Next.js</em> portfolio</h1>
        <p className="lead">This website is the project. I rebuilt a single-page HTML portfolio as a Next.js app so every page, heading and link is in the HTML that search engines receive.</p>
      </div></section>

      <section><div className="w nar prose">
        <h2>The goal</h2>
        <p>A portfolio that clients and recruiters can find through search, that loads quickly on a phone, and that can grow with new services and articles without rebuilding the site each time.</p>
        <h2>What I built</h2>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="w">
        <ul className="sv inc">{BUILT.map(([t, d], i) => <li key={t} className="glass rv"><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </div></section>

      <section><div className="w nar prose">
        <h2>Stack</h2>
        <p>Next.js 15 with the App Router, React 19 and TypeScript. Content lives in typed data files, so a new article or service page is one object, and the sitemap, feed, schema and related links update from it.</p>
        {METRICS.length > 0 && (
          <>
            <h2>Measured results</h2>
            <div className="cs-metrics">{METRICS.map((m) => <div key={m.label} className="glass"><strong>{m.value}</strong><span>{m.label}{m.note ? ` · ${m.note}` : ""}</span></div>)}</div>
          </>
        )}
        <aside className="glass cta-box">
          <h2 className="h3">Want this for your site?</h2>
          <p>See <Link href="/services/nextjs-development">Next.js development</Link>, or if you already have a React app, <Link href="/services/react-to-nextjs-migration">converting it to Next.js for SEO</Link>. You can also <Link href="/hire">get in touch</Link>.</p>
        </aside>
      </div></section>
    </PageShell>
  );
}
