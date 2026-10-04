import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#07060d", color: "#a78bfa", fontSize: 40, fontWeight: 700, border: "3px solid #a78bfa", borderRadius: 16 }}>
        A
      </div>
    ),
    size
  );
}
