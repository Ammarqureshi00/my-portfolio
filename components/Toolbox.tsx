import { SKILLS } from "@/lib/skills";
import "@/app/extras.css";

export default function Toolbox() {
  return (
    <section id="skills" className="sk" aria-labelledby="skills-h">
      <div className="w">
        <div className="sk-heading">
          <div>
            <span className="sk-eyebrow">Capabilities</span>
            <h2 id="skills-h">A practical <em>toolkit</em></h2>
          </div>
          <p className="sk-intro">The tools I use to build, improve and support websites.</p>
        </div>

        <ul className="sk-list">
          {SKILLS.map((skill) => (
            <li key={skill.title} className="sk-item">
              <h3>{skill.title}</h3>
              <p className="sk-label">{skill.label}</p>
              <p className="sk-tools">{skill.stack.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
