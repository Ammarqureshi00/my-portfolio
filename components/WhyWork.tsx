const POINTS = [
  ["No unnecessary rebuild", "I look at what is already working before recommending a bigger change."],
  ["Live site kept safe", "For fixes, I use a backup and staging copy where the setup allows it."],
  ["No mystery updates", "I explain what I found, what I changed and what still needs attention."],
  ["A useful handover", "You leave with a site you can manage and a clear note of how it works."],
];

export default function WhyWork() {
  return (
    <section aria-labelledby="why-work-h">
      <div className="w">
        <div className="c">
          <span className="pill">Working together</span>
          <h2 id="why-work-h">What you can <em>expect</em></h2>
          <p className="lead">You work directly with me—from the first question to the handover.</p>
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