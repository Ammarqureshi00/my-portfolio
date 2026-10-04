import Link from "next/link";

export default function ConversionCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-h">
      <div className="w c">
        <h2 id="bottom-cta-h">A quick note is enough to <em>start.</em></h2>
        <p className="lead">Tell me what you&apos;re building, what&apos;s broken or what you want the site to do next. I&apos;ll reply with an honest next step.</p>
        <Link className="btn g" href="/hire#contact">Send a project brief →</Link>
      </div>
    </section>
  );
}