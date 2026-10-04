import Link from "next/link";

export default function ConversionCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-h">
      <div className="w c">
        <h2 id="bottom-cta-h">Have a project <em>in mind?</em></h2>
        <p className="lead">Share what you’re building or what needs fixing, and we can work out the next step.</p>
        <Link className="btn g" href="/hire">Tell me about your project →</Link>
      </div>
    </section>
  );
}