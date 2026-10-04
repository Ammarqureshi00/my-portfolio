import Link from "next/link";
import { ORBIT } from "@/lib/site";

const HOW = ["Staging first, never your live site", "Plain-language updates", "Speed and SEO built in", "Clean, maintainable code"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="w ab">
        <div>
          <span className="pill">About</span>
          <h2 id="about-h">Build what helps. <em>Fix what doesn&apos;t.</em></h2>
          <p>I&apos;m Ammar, a web developer working mainly with <strong>WordPress and WooCommerce</strong>. I build sites and stores, and I also help when an update breaks the layout, checkout stops behaving or a page that used to be quick starts dragging.</p>
          <p>I work across <strong>Shopify, React, Next.js, PHP, Laravel and Node.js</strong>, so I can follow a problem past the surface and choose a fix that fits the site—not just add another plugin or suggest a rebuild.</p>
          <p>Before I change a live site, I want to understand what you need from it. I work safely, explain the trade-offs in plain English and leave you with a clear handover.</p>
          <div className="wy" style={{ marginTop: 24 }}>{HOW.map((h) => <span key={h}>{h}</span>)}</div>
          <div className="cta" style={{ marginTop: 28 }}>
            <Link className="btn g" href="/hire#contact">Talk about your project →</Link>
            <a className="btn" href="#work">See my work</a>
          </div>
        </div>
        <div className="orb rv" aria-hidden="true">
          <i style={{ "--i": "0%" } as React.CSSProperties} />
          <i style={{ "--i": "16%", "--d": "1s" } as React.CSSProperties} />
          <i style={{ "--i": "32%", "--d": "2s" } as React.CSSProperties} />
          <span className="chip">&lt;/&gt;</span>
          {ORBIT.map((n, i) => {
            const a = (i / 6) * 6.283 - 1.57, r = i % 2 ? 32 : 48;
            return <span key={n} className="tile" style={{ left: `${(50 + r * Math.cos(a)).toFixed(2)}%`, top: `${(50 + r * Math.sin(a)).toFixed(2)}%` }}>{n}</span>;
          })}
        </div>
      </div>
    </section>
  );
}
