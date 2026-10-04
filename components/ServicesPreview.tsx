import Link from "next/link";
import { SERVICE_PAGES } from "@/lib/content";
import "@/app/pages.css";

const MORE = ["Laravel & Node.js APIs", "Technical SEO", "Shopify & Liquid", "APIs & workflow automation"];

export default function ServicesPreview() {
  return (
    <section id="services" aria-labelledby="services-h">
      <div className="w">
        <div className="c"><span className="pill">Services</span><h2 id="services-h">How I can <em>help</em></h2>
          <p className="lead">From a blog that won’t load to a store that won’t convert — I find the cause and fix it properly.</p></div>
        <ul className="sv pv">
          {SERVICE_PAGES.map((s, i) => (
            <li key={s.slug} className="glass rv">
              <span className="n">0{i + 1}</span>
              <h3><Link href={`/services/${s.slug}`}>{s.name}</Link></h3>
              <p>{s.short}</p>
              <Link className="more" href={`/services/${s.slug}`} aria-label={`Learn more about ${s.name}`}>Learn more →</Link>
            </li>
          ))}
        </ul>
        <div className="wy">{MORE.map((m) => <span key={m}>{m}</span>)}</div>
        <p className="c" style={{ marginTop: 28 }}><Link className="btn" href="/services">All services →</Link></p>
      </div>
    </section>
  );
}
