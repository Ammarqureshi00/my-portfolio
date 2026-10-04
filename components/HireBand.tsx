import Link from "next/link";
import "@/app/pages.css";

const ISSUES = ["White screen of death", "Plugin conflict", "Slow WooCommerce checkout", "Broken layout after update", "Core Web Vitals failing", "Forms not sending", "Theme won’t update safely", "Blog not indexing"];

export default function HireBand() {
  return (
    <section className="hb" aria-labelledby="hire-h">
      <div className="mq" aria-hidden="true"><div>{[...ISSUES, ...ISSUES].map((t, i) => <span key={i}>{t}</span>)}</div></div>
      <div className="w c">
        <h2 id="hire-h">Got a WordPress problem <em>or a project?</em></h2>
        <p className="lead">I’m available for freelance work and remote roles. Recruiters and clients: start here.</p>
        <div className="cta" style={{ justifyContent: "center" }}>
          <Link className="btn g" href="/hire" data-track="home_band_hire">Hire me →</Link>
          <Link className="btn" href="/services">See services</Link>
        </div>
      </div>
    </section>
  );
}
