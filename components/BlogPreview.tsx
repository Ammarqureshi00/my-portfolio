import Link from "next/link";
import { POSTS, fmtDate, readMins } from "@/lib/content";
import "@/app/pages.css";

export default function BlogPreview() {
  return (
    <section id="blog" aria-labelledby="blog-h">
      <div className="w">
        <div className="c"><span className="pill">From the blog</span><h2 id="blog-h">Fixes, <em>checklists</em> &amp; guides</h2>
          <p className="lead">Practical WordPress and WooCommerce troubleshooting, written from real project work.</p></div>
        <div className="pcs">
          {POSTS.map((p) => (
            <article key={p.slug} className="glass pc rv">
              <span className="cat">{p.category}</span>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p>{p.description}</p>
              <div className="meta"><time dateTime={p.date}>{fmtDate(p.date)}</time><span>{readMins(p)} min read</span></div>
            </article>
          ))}
        </div>
        <p className="c" style={{ marginTop: 32 }}><Link className="btn" href="/blog">All articles →</Link></p>
      </div>
    </section>
  );
}
