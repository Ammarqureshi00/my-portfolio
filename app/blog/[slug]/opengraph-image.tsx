import { ImageResponse } from "next/og";
import { POSTS, getPost } from "@/lib/content";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 15% 0%, #2a1a5e, #07060d 65%)", color: "#f2f4f2" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#a78bfa" }}>{p?.category ?? "Blog"} · Ammar Qureshi</div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 }}>{p?.title ?? "Blog"}</div>
        <div style={{ display: "flex", fontSize: 28, color: "#a39fb4" }}>WordPress · WooCommerce · Next.js</div>
      </div>
    ),
    size
  );
}
