import { SKILLS } from "@/lib/skills";
import "@/app/extras.css";

export default function Toolbox() {
  return (
    <section id="skills" className="sk" aria-labelledby="skills-h">
      <div className="w">
        <div className="c">
          <span className="pill">Skills &amp; Tech Stack</span>
          <h2 id="skills-h">My tech <em>toolbox</em></h2>
          <p className="lead">The languages, platforms and tools I use to ship fast, maintainable websites.</p>
        </div>

        <nav className="sk-index" aria-label="Jump to a skill category">
          {SKILLS.map((skill, index) => (
            <a key={skill.title} href={`#skill-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill.title}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>

        <ol className="sk-grid">
          {SKILLS.map((skill, index) => (
            <li key={skill.title} id={`skill-${index + 1}`} className={`sk-item${index === 0 ? " sk-featured" : ""}`}>
              <article className="sk-card">
                <div className="sk-card-head">
                  <span className="sk-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sk-label">{skill.label}</span>
                  <span className="sk-mark" aria-hidden="true">{skill.mark}</span>
                </div>
                <div className="sk-card-main">
                  <h3>{skill.title}</h3>
                  <p>{skill.blurb}</p>
                </div>
                {index === 0 && (
                  <div className="sk-orbit" aria-hidden="true">
                    <i className="sk-orbit-ring sk-orbit-ring-outer" />
                    <i className="sk-orbit-ring sk-orbit-ring-middle" />
                    <i className="sk-orbit-ring sk-orbit-ring-inner" />
                    <span className="sk-orbit-core">&lt;/&gt;</span>
                    <span className="sk-orbit-tag sk-orbit-tag-react">React</span>
                    <span className="sk-orbit-tag sk-orbit-tag-wordpress">WordPress</span>
                    <span className="sk-orbit-tag sk-orbit-tag-php">PHP</span>
                    <span className="sk-orbit-tag sk-orbit-tag-laravel">Laravel</span>
                    <span className="sk-orbit-tag sk-orbit-tag-node">Node.js</span>
                    <span className="sk-orbit-tag sk-orbit-tag-next">Next.js</span>
                  </div>
                )}
                <div className="sk-toolkit-head">
                  <span>Toolkit</span>
                  <span>{String(skill.stack.length).padStart(2, "0")} technologies</span>
                </div>
                <ul className="sk-stack" aria-label={`${skill.title} technologies`}>
                  {skill.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
