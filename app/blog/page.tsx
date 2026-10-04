import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { POSTS, fmtDate, readMins } from "@/lib/content";
import { SITE } from "@/lib/site";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Notes on WordPress, WooCommerce, React & Next.js | Ammar Qureshi",
  description: "Clear, practical guides for WordPress and WooCommerce problems, plus the React and Next.js errors that can stop a project in its tracks.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <PageShell>
      <Schema data={[
        crumbsSchema([["Home", "/"], ["Blog", "/blog"]]),
        { "@type": "Blog", name: `${SITE.name} — WordPress Blog`, url: `${SITE.url}/blog`, blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE.url}/blog/${p.slug}`, datePublished: p.date })) },
      ]} />
      <section className="ph"><div className="w">
        <Breadcrumbs items={[["Home", "/"], ["Blog", "/blog"]]} />
        <span className="pill">Blog</span>
        <h1>Notes from the <em>builds and fixes</em></h1>
        <p className="lead">The kind of notes I wish were easier to find when a site breaks: what the error means, what to check first and how to avoid making it worse.</p>
      </div></section>
      <section><div className="w">
        <div className="pcs">{posts.map((p) => (
          <article key={p.slug} className="glass pc rv">
            <span className="cat">{p.category}</span>
            <h2 className="h3"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
            <p>{p.description}</p>
            <div className="meta"><time dateTime={p.date}>{fmtDate(p.date)}</time><span>{readMins(p)} min read</span></div>
          </article>
        ))}</div>
      </div></section>
    </PageShell>
  );
}
