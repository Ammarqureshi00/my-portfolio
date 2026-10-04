import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1>404</h1>
        <p className="sub" style={{ margin: "0 auto 24px" }}>This page doesn’t exist.</p>
        <a className="btn g" href="/">Back to home</a>
      </div>
    </main>
  );
}
