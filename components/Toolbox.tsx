import { TOOLS } from "@/lib/site";

const POS = [[8, 50], [36, 12], [64, 88], [92, 50]];

function Circuit({ tiles }: { tiles: string[] }) {
  return (
    <div className="ci" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="rgba(139,92,246,.4)" strokeWidth="1">
        <path d="M8 50H50M36 12V50M64 88V50M92 50H50" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="chip">&lt;/&gt;</div>
      {tiles.map((t, i) => (
        <span key={t} className="tile" style={{ left: `${POS[i][0]}%`, top: `${POS[i][1]}%`, transform: "translate(-50%,-50%)" }}>{t}</span>
      ))}
    </div>
  );
}

export default function Toolbox() {
  return (
    <section id="skills" className="tb" aria-labelledby="skills-h">
      <div className="beams" />
      <div className="w c" style={{ position: "relative" }}>
        <span className="pill">Skills &amp; Tech Stack</span>
        <h2 id="skills-h">My tech <em>toolbox</em></h2>
        <p className="lead">The languages, platforms and tools I use to ship fast, maintainable websites.</p>
        <div className="bento" style={{ textAlign: "left" }}>
          {TOOLS.map((t) => (
            <article key={t.title} className={`glass bc${t.wide ? " b" : ""} rv`}>
              <Circuit tiles={t.tiles} />
              <h3>{t.title}</h3><small>{t.stack}</small><p>{t.blurb}</p>
            </article>
          ))}
          <article className="glass bc rv" style={{ gridColumn: "span 2" }}>
            <div className="ci" aria-hidden="true" style={{ height: "auto", margin: "0 0 12px" }}>
              <div className="orb" style={{ width: 130 }}>
                <i style={{ "--i": "0%" } as React.CSSProperties} />
                <i style={{ "--i": "22%", "--d": "1s" } as React.CSSProperties} />
                <i style={{ "--i": "44%", "--d": "2s" } as React.CSSProperties} />
                <span className="chip" style={{ width: 32, height: 32, fontSize: 11 }}>API</span>
              </div>
            </div>
            <h3>Databases &amp; APIs</h3><small>MySQL, REST APIs, third-party integrations</small><p>Structured data connected reliably.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
