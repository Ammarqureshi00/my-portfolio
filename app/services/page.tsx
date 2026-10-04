import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { SERVICE_PAGES } from "@/lib/content";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "WordPress, WooCommerce & Next.js Services | Ammar Qureshi",
  description: "Hire a full stack developer: WordPress blogs, WooCommerce stores, plugin fixes, plus Next.js development, React debugging and migration to Next.js for SEO.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <Schema data={[
        crumbsSchema([["Home", "/"], ["Services", "/services"]]),
        { "@type": "CollectionPage", name: "Services", url: `${SITE.url}/services`, mainEntity: { "@type": "ItemList", itemListElement: SERVICE_PAGES.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/services/${s.slug}`, name: s.name })) } },
      ]} />
      <section className="ph"><div className="w">
        <Breadcrumbs items={[["Home", "/"], ["Services", "/services"]]} />
        <span className="pill">Services</span>
        <h1>WordPress services that <em>solve</em> the problem</h1>
        <p className="lead">I’m a full stack developer. I build WordPress blogs and WooCommerce stores, fix the plugin and theme issues that slow them down, and build, debug and migrate React and Next.js sites. Pick the one that matches your situation.</p>
      </div></section>
      <section><div className="w">
        <ul className="sv pv">
          {SERVICE_PAGES.map((s, i) => (
            <li key={s.slug} className="glass rv">
              <span className="n">0{i + 1}</span>
              <h2 className="h3"><Link href={`/services/${s.slug}`}>{s.name}</Link></h2>
              <p>{s.short}</p>
              <ul className="ticks">{s.included.slice(0, 3).map(([t]) => <li key={t}>{t}</li>)}</ul>
              <Link className="more" href={`/services/${s.slug}`} aria-label={`Learn more about ${s.name}`}>Learn more →</Link>
            </li>
          ))}
        </ul>
        <p className="c" style={{ marginTop: 40 }}><Link className="btn g" href="/hire">Tell me about your project →</Link></p>
      </div></section>
    </PageShell>
  );
}
