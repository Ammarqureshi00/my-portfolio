import { ORBIT } from "@/lib/site";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="w ab">
        <div>
          <span className="pill">About</span>
          <h2 id="about-h">From the layer people see to <em>the systems</em> that run it</h2>
          <p>I work across <strong>design, frontend, CMS, backend, performance, e-commerce and automation</strong> — so a project can move from first layout to final speed audit without being handed between specialists.</p>
          <p>WordPress and Shopify are where much of my work happens: custom themes and plugins, Liquid sections, WooCommerce and Elementor builds. Alongside them I build with React, PHP, Laravel and Node.js when a project needs something more custom.</p>
          <p>I care about the details visitors feel without noticing: how fast a page settles, how a form behaves on a small screen, how easily a client can edit their own content.</p>
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
