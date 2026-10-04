import { APPROACH, WHY } from "@/lib/site";

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-h">
      <div className="w">
        <div className="c">
          <span className="pill">Approach</span>
          <h2 id="approach-h">More than <em>code</em></h2>
          <p className="lead">A process that starts with the business and ends with a polished, fast experience.</p>
        </div>
        <ol className="pr">
          {APPROACH.map(([t, d], i) => (
            <li key={t} className="glass rv"><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
        <div className="wy">{WHY.map((x) => <span key={x}>{x}</span>)}</div>
      </div>
    </section>
  );
}
