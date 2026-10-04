"use client";
import { useEffect } from "react";

/** Progressive scroll-reveal: content is fully visible in the server HTML (good for crawlers);
 *  only elements below the fold get hidden, then animated in on scroll. */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const io = new IntersectionObserver((en) => en.forEach((x) => {
      if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
    }), { threshold: 0.1 });
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("pre");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
