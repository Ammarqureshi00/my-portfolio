"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export default function StickyActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    let footerVisible = false;
    const update = () => setVisible(window.scrollY > 240 && !footerVisible);
    const observer = footer ? new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    }) : null;

    observer?.observe(footer!);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <nav className={`mobile-actions${visible ? " is-visible" : ""}`} aria-label="Quick contact">
      <a href={SITE.phoneHref}>Call</a>
      <a href={SITE.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
      <a href={`mailto:${SITE.email}`}>Email</a>
    </nav>
  );
}