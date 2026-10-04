import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "radial-gradient(circle at 20% 10%, #2a1a5e, #07060d 65%)", color: "#f2f4f2" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#a78bfa", marginBottom: 24 }}>WordPress · WooCommerce · Next.js</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>{SITE.name}</div>
        <div style={{ display: "flex", fontSize: 34, color: "#a39fb4", marginTop: 28, maxWidth: 900 }}>WordPress · Shopify · React · Laravel · Node.js</div>
      </div>
    ),
    size
  );
}
