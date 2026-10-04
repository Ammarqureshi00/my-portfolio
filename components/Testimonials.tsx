import { TESTIMONIALS } from "@/lib/testimonials";
import "@/app/extras.css";

export default function Testimonials() {
  if (!TESTIMONIALS.length) {
    if (process.env.NODE_ENV === "production") return null;
    return (
      <section aria-label="Testimonials placeholder"><div className="w"><div className="tm-empty">Dev only: no testimonials yet. Add real ones in <code>lib/testimonials.ts</code>. This box never shows in production.</div></div></section>
    );
  }
  return (
    <section id="testimonials" aria-labelledby="tm-h">
      <div className="w">
        <div className="c"><span className="pill">Testimonials</span><h2 id="tm-h">What clients <em>say</em></h2></div>
        <div className="tm-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name + t.quote.slice(0, 12)} className="glass tm rv">
              <blockquote><p>{t.quote}</p></blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}{t.company ? `, ${t.company}` : ""}</span>
                {t.url && <a href={t.url} target="_blank" rel="noopener nofollow">{t.source || "Source"} ↗</a>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
