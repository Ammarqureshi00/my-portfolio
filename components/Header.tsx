"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS: [string, string][] = [["Work", "/#work"], ["Services", "/services"], ["Blog", "/blog"], ["About", "/#about"], ["Skills", "/#skills"], ["Contact", "/hire"]];

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
          <Link href="/" className="logo" aria-label="Ammar Qureshi, home"><b>A</b><span>AMMAR<br />QURESHI</span></Link>
          <button className="mb" aria-expanded={open} aria-controls="lk" aria-label="Menu" onClick={() => setOpen((o) => !o)}><i /><i /></button>
          <div className={`lk${open ? " o" : ""}`} id="lk" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
            {LINKS.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
            <ThemeToggle />
            <Link className="btn p" href="/hire" data-track="header_hire">Hire Me →</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
