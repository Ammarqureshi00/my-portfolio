import Link from "next/link";
import "@/app/pages.css";

const ISSUES = ["White screen of death", "Plugin conflict", "Slow WooCommerce checkout", "Broken layout after update", "Core Web Vitals failing", "Forms not sending", "Theme won’t update safely", "Blog not indexing"];

export default function HireBand() {
  return (
    <section className="hb" aria-labelledby="hire-h">
      <div className="mq" aria-hidden="true"><div>{[...ISSUES, ...ISSUES].map((t, i) => <span key={i}>{t}</span>)}</div></div>
      <div className="w c">
        <h2 id="hire-h">Got a site that needs <em>attention?</em></h2>
        <p className="lead">Send me the link and the short version. I’ll tell you what I’d check first.</p>
        <div className="cta" style={{ justifyContent: "center" }}>
          <Link className="btn g" href="/hire#contact" data-track="home_band_hire">Tell me what’s going on →</Link>
          <Link className="btn" href="/services">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
