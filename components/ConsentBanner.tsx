"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "consent:v1";
declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setOpen(true); } catch { setOpen(true); }
    const show = () => setOpen(true);
    window.addEventListener("open-cookie-settings", show);
    return () => window.removeEventListener("open-cookie-settings", show);
  }, []);

  const choose = (v: "granted" | "denied") => {
    try { localStorage.setItem(KEY, v); } catch { /* storage blocked */ }
    window.gtag?.("consent", "update", { analytics_storage: v });
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="cb" role="dialog" aria-labelledby="cb-t" aria-describedby="cb-d">
      <h2 id="cb-t">Analytics cookies</h2>
      <p id="cb-d">I use Google Analytics, loaded through Tag Manager, to see which pages are useful. It only runs if you accept. There are no ads and I don&apos;t sell data. <Link href="/privacy-policy">Privacy policy</Link></p>
      <div className="cb-a">
        <button type="button" className="btn g" onClick={() => choose("granted")}>Accept</button>
        <button type="button" className="btn" onClick={() => choose("denied")}>Decline</button>
      </div>
    </div>
  );
}
