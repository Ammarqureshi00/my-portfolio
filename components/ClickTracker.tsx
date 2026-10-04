"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Any element with data-track="label" sends a `cta_click` event to the dataLayer. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (el) track("cta_click", { cta_label: el.dataset.track, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
