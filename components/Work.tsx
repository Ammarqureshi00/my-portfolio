"use client";
import Image from "next/image";
import { useState } from "react";
import { PROJECTS, TABS } from "@/lib/site";

export default function Work() {
  const [filter, setFilter] = useState("All");
  return (
    <section id="work" aria-labelledby="work-h">
      <div className="w">
        <div className="c">
          <span className="pill">Selected Work</span>
          <h2 id="work-h">Selected <em>Work</em></h2>
          <p className="lead">A selection of websites, storefronts and digital experiences I&apos;ve worked on.</p>
        </div>
        <div className="tabs" role="group" aria-label="Filter projects">
          {TABS.map((t) => (
            <button key={t} type="button" aria-pressed={filter === t} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className={`wk${filter !== "All" ? " f" : ""}`} aria-live="polite">
          {PROJECTS.map((p, i) => {
            const hide = filter !== "All" && !p.categories.includes(filter);
            const projectUrl = new URL(p.url);
            const projectLink = projectUrl.host + (projectUrl.pathname === "/" ? "" : projectUrl.pathname.replace(/\/$/, ""));
            return (
              <article key={p.name} className={`glass pj rv${hide ? " hide" : ""}`}>
                <a href={p.url} target="_blank" rel="noopener" aria-label={`${p.name} — view live site`}>
                  <div className="sh"><Image src={p.image} alt={p.alt} fill sizes="(max-width:768px) 100vw, 560px" quality={80} /><span>{projectLink}</span></div>
                </a>
                <div className="pb">
                  <h3>{p.name}<span>0{i + 1}</span></h3>
                  <p><strong>What it is:</strong> {p.description}</p>
                  {p.role && <p><strong>My role:</strong> {p.role}</p>}
                  {p.results?.length ? <p><strong>Results:</strong> {p.results.join(" · ")}</p> : null}
                  <div className="tg">{p.kind} · {p.tech}</div>
                  <a href={p.url} target="_blank" rel="noopener">View Project ↗</a>
                  {p.caseStudyPath && <a href={p.caseStudyPath}>View case study →</a>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
