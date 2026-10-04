const POINTS = [
  ["Staging first", "I test changes on a staging copy before they touch your live site."],
  ["Plain-language reports", "You get a clear summary of what changed, why, and what to watch next."],
  ["Speed and SEO included", "Performance and technical SEO checks are part of the build, not a last-minute add-on."],
  ["Maintainable code", "I keep the implementation understandable so future updates are easier."],
];

export default function WhyWork() {
  return (
    <section aria-labelledby="why-work-h">
      <div className="w">
        <div className="c">
          <span className="pill">Working together</span>
          <h2 id="why-work-h">Why work <em>with me</em></h2>
        </div>
        <ul className="why-grid">
          {POINTS.map(([title, detail]) => (
            <li className="glass" key={title}><h3>{title}</h3><p>{detail}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}