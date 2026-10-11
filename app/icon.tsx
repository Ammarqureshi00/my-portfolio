import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#101318", color: "#B8F36B", fontFamily: "Arial, sans-serif", fontSize: 42, fontWeight: 700, border: "2px solid #B8F36B", borderRadius: 15 }}>
        A
      </div>
    ),
    size
  );
}
