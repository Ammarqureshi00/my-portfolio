import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { POSTS, getPost, getService, slugify, readMins, fmtDate } from "@/lib/content";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return buildMetadata({ title: p.metaTitle, description: p.description, path: `/blog/${p.slug}`, type: "article", noOgImage: true, published: p.date, modified: p.updated });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}`;
  const svc = getService(p.service)!;
  const related = p.related.map(getPost).filter(Boolean) as NonNullable<ReturnType<typeof getPost>>[];
  const crumbs: [string, string][] = [["Home", "/"], ["Blog", "/blog"], [p.title, path]];

  return (
    <PageShell>
      <Schema data={[
        crumbsSchema(crumbs),
        { "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, dateModified: p.updated, mainEntityOfPage: `${SITE.url}${path}`, image: `${SITE.url}${path}/opengraph-image`, author: { "@id": `${SITE.url}/#person` }, publisher: { "@id": `${SITE.url}/#person` }, articleSection: p.category, keywords: p.keyword },
      ]} />
      <article>
        <header className="ph"><div className="w nar">
          <Breadcrumbs items={crumbs} />
          <span className="pill">{p.category}</span>
          <h1>{p.title}</h1>
          <div className="meta"><span>By <Link href="/#about">Ammar Qureshi</Link></span><time dateTime={p.date}>{fmtDate(p.date)}</time><span>{readMins(p)} min read</span></div>
        </div></header>
        <div className="w ar">
          <div className="prose">
            <p className="lede">{p.intro}</p>
            {p.sections.map((s) => (
              <section key={s.h} id={slugify(s.h)}>
                <h2>{s.h}</h2>
                {s.p?.map((t) => <p key={t}>{t}</p>)}
                {s.code && <pre className="code"><code>{s.code}</code></pre>}
                {s.codes?.map((c, i) => (
                  <figure key={i} className="codefig">
                    {c.label && <figcaption>{c.label}</figcaption>}
                    <pre className="code"><code>{c.code}</code></pre>
                  </figure>
                ))}
                {s.list && <ul>{s.list.map((t) => <li key={t}>{t}</li>)}</ul>}
                {s.after?.map((t) => <p key={t}>{t}</p>)}
              </section>
            ))}
            <aside className="glass cta-box">
              <h2 className="h3">Need this fixed for you?</h2>
              <p>I handle this kind of work as a full stack WordPress developer. See how I can help with <Link href={`/services/${svc.slug}`}>{svc.name.toLowerCase()}</Link>, or <Link href="/hire">send me the details</Link>.</p>
            </aside>
          </div>
          <aside className="toc" aria-label="Table of contents">
            <strong>On this page</strong>
            <ol>{p.sections.map((s) => <li key={s.h}><a href={`#${slugify(s.h)}`}>{s.h}</a></li>)}</ol>
          </aside>
        </div>
      </article>
      <section><div className="w">
        <div className="c"><h2>Keep <em>reading</em></h2></div>
        <div className="pcs">{related.map((r) => <article key={r.slug} className="glass pc rv"><span className="cat">{r.category}</span><h3><Link href={`/blog/${r.slug}`}>{r.title}</Link></h3><p>{r.description}</p></article>)}</div>
      </div></section>
    </PageShell>
  );
}
