import Link from "next/link";
import { ORBIT } from "@/lib/site";

const HOW = ["Staging first, never your live site", "Plain-language updates", "Speed and SEO built in", "Clean, maintainable code"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="w ab">
        <div>
          <span className="pill">About</span>
          <h2 id="about-h">WordPress built right, <em>problems</em> fixed fast</h2>
          <p>I&apos;m Ammar Qureshi, a <strong>full stack WordPress developer</strong>. I build blogs, business sites and WooCommerce stores, and I&apos;m the person people call when a plugin conflict, a broken theme update or a slow page is costing them visitors.</p>
          <p>Because I work across the whole stack, from <strong>WordPress and Shopify to React, Next.js, Laravel and Node.js</strong>, I can usually trace a problem to its real cause instead of patching the symptom. A slow blog might be an oversized image, a heavy plugin or a bad caching rule. I find out which one it is and fix that.</p>
          <p>My approach is simple: understand the business first, work on a safe copy, change only what&apos;s needed and explain what I did in plain language. You end up with a site that&apos;s faster, easier to edit and properly set up for search, not a pile of fixes you can&apos;t maintain.</p>
          <div className="wy" style={{ marginTop: 24 }}>{HOW.map((h) => <span key={h}>{h}</span>)}</div>
          <div className="cta" style={{ marginTop: 28 }}>
            <Link className="btn g" href="/hire">Hire me →</Link>
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
