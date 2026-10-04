import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import Terminal from "@/components/Terminal";
import { SERVICE_PAGES, getService, getPost } from "@/lib/content";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => SERVICE_PAGES.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

const TERM = ["$ wp plugin deactivate --all", "Success: Deactivated all plugins.", "$ wp theme activate twentytwentyfive", "✗ problem still there? theme is the cause", "✓ problem gone? reactivate in halves", "✓ culprit isolated on staging", "✓ fixed, tested, documented"];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const crumbs: [string, string][] = [["Home", "/"], ["Services", "/services"], [s.name, path]];
  const posts = s.posts.map(getPost).filter(Boolean) as NonNullable<ReturnType<typeof getPost>>[];
  const others = SERVICE_PAGES.filter((x) => x.slug !== s.slug);

  return (
    <PageShell>
      <Schema data={[
        crumbsSchema(crumbs),
        { "@type": "Service", name: s.name, description: s.metaDescription, url: `${SITE.url}${path}`, serviceType: s.name, areaServed: "Worldwide", provider: { "@id": `${SITE.url}/#person` } },
      ]} />
      <section className="ph"><div className="w ph2">
        <div>
          <Breadcrumbs items={crumbs} />
          <span className="pill">Full Stack WordPress Developer</span>
          <h1>{s.h1}</h1>
          <p className="lead">{s.intro}</p>
          <div className="cta"><Link className="btn g" href="/hire" data-track={`quote_${s.slug}`}>Get a quote →</Link><a className="btn" href="#faq">Read the FAQ</a></div>
        </div>
        <Terminal lines={s.terminal ?? TERM} />
      </div></section>

      <section><div className="w two">
        <div>
          <h2>Who this is <em>for</em></h2>
          <ul className="ticks">{s.forWho.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        {s.symptoms && (
          <div className="glass sym rv">
            <h2 className="h3">Problems I fix</h2>
            <ul className="ticks x">{s.symptoms.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        )}
      </div></section>

      <section><div className="w">
        <div className="c"><span className="pill">What’s included</span><h2>What you <em>get</em></h2></div>
        <ul className="sv inc">{s.included.map(([t, d], i) => <li key={t} className="glass rv"><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </div></section>

      <section><div className="w">
        <div className="c"><span className="pill">Process</span><h2>How we <em>work</em></h2></div>
        <ol className="pr">{s.process.map(([t, d], i) => <li key={t} className="glass rv"><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </div></section>

      {s.proof && (
        <section><div className="w nar"><div className="glass cta-box rv"><h2 className="h3" style={{ marginTop: 0 }}>Proof, not promises</h2><p><Link href={s.proof[1]}>{s.proof[0]} →</Link></p></div></div></section>
      )}

      <section id="faq"><div className="w nar">
        <div className="c"><span className="pill">FAQ</span><h2>Common <em>questions</em></h2></div>
        <div className="faq">{s.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
      </div></section>

      <section><div className="w">
        <div className="c"><h2>Related <em>reading</em></h2></div>
        <div className="pcs">{posts.map((p) => (
          <article key={p.slug} className="glass pc rv"><span className="cat">{p.category}</span><h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3><p>{p.description}</p></article>
        ))}</div>
        <p className="c alsolink">Also see: {others.map((o, i) => <span key={o.slug}>{i > 0 && " · "}<Link href={`/services/${o.slug}`}>{o.name}</Link></span>)} · <Link href="/#work">my portfolio</Link></p>
      </div></section>

      <section className="hb"><div className="w c">
        <h2>Ready to fix it <em>properly?</em></h2>
        <p className="lead">Send me the details and I’ll reply with next steps and a clear quote.</p>
        <div className="cta" style={{ justifyContent: "center" }}><Link className="btn g" href="/hire" data-track={`bottom_hire_${s.slug}`}>Hire me →</Link></div>
      </div></section>
    </PageShell>
  );
}
