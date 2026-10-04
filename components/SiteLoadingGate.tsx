"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function waitForImage(image: HTMLImageElement) {
  if (image.complete) return Promise.resolve();

  return new Promise<void>((resolve) => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}

export default function SiteLoadingGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    let cancelled = false;
    const pageLoaded = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => window.addEventListener("load", resolve, { once: true }));
    const fontsLoaded = document.fonts.ready;
    const firstScreenImages = Array.from(
      document.querySelectorAll<HTMLImageElement>('#site-content img[fetchpriority="high"]'),
    );

    Promise.all([pageLoaded, fontsLoaded, ...firstScreenImages.map(waitForImage)]).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;
          document.documentElement.removeAttribute("data-app-loading");
          setReady(true);
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div
        className={`site-loading${ready ? " is-ready" : ""}`}
        aria-hidden="true"
      >
        <div className="loading-nav w">
          <span className="loading-mark" />
          <div className="loading-nav-links"><i /><i /><i /></div>
        </div>
        {isHome ? (
          <main className="loading-home w">
            <div className="loading-copy">
              <i className="loading-pill" />
              <div className="loading-title"><i /><i /><i /></div>
              <div className="loading-paragraph"><i /><i /><i /></div>
              <div className="loading-actions"><i /><i /></div>
            </div>
            <div className="loading-portrait"><i /></div>
          </main>
        ) : (
          <main className="loading-page w">
            <div className="loading-breadcrumb"><i /><i /><i /></div>
            <i className="loading-pill" />
            <div className="loading-page-title"><i /><i /></div>
            <div className="loading-page-copy"><i /><i /><i /></div>
            <div className="loading-cards"><i /><i /><i /></div>
          </main>
        )}
        <div className="loading-below w"><i /><i /><i /></div>
      </div>
      <div id="site-content" className="site-content" aria-busy={!ready}>
        {children}
      </div>
    </>
  );
}
