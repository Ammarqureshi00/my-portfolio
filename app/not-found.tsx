import type { Metadata } from "next";
import Link from "next/link";
import { SOCIALS } from "@/lib/social";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1>404</h1>
        <p className="sub" style={{ margin: "0 auto 24px" }}>This page doesn’t exist, but these do:</p>
        <div className="cta" style={{ justifyContent: "center" }}>
          <Link className="btn g" href="/">Home</Link>
          <Link className="btn" href="/services">Services</Link>
          <Link className="btn" href="/blog">Blog</Link>
          <Link className="btn" href="/hire">Hire me</Link>
        </div>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          {SOCIALS.filter((s) => s.key === "mail" || s.key === "whatsapp").map((s, i) => (
            <span key={s.key}>{i > 0 && " · "}<a href={s.href}>{s.label}</a></span>
          ))}
        </p>
      </div>
    </main>
  );
}
