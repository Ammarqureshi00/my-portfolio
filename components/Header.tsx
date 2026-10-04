"use client";
import { useEffect, useState } from "react";

const LINKS = [["Work", "#work"], ["About", "#about"], ["Services", "#services"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <header id="hd" className={scrolled ? "s" : undefined}>
      <div className="w">
        <nav aria-label="Primary">
          <a href="#top" className="logo" aria-label="Ammar Qureshi, home"><b>A</b><span>AMMAR<br />QURESHI</span></a>
          <button className="mb" aria-expanded={open} aria-controls="lk" aria-label="Menu" onClick={() => setOpen((o) => !o)}><i /><i /></button>
          <div className={`lk${open ? " o" : ""}`} id="lk" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
            {LINKS.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a className="btn p" href="#contact">Let&apos;s Talk →</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
