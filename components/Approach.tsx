import { APPROACH, WHY } from "@/lib/site";

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-h">
      <div className="w">
        <div className="c">
          <span className="pill">Approach</span>
          <h2 id="approach-h">A clear route from <em>problem to launch</em></h2>
          <p className="lead">We start with what you need, agree the useful scope, then keep the work and the next step easy to follow.</p>
        </div>
        <ol className="pr">
          {APPROACH.map(([t, d], i) => (
            <li key={t} className="rv"><span className="pr-number">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
        <div className="wy">{WHY.map((x) => <span key={x}>{x}</span>)}</div>
      </div>
    </section>
  );
}
