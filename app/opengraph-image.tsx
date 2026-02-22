import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Paddleout — Handpick your founding team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: "#ffffff",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            P
          </div>
          <span style={{ color: "#94a3b8", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>
            paddleout
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#64748b", fontSize: 18, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            For recently funded founders
          </div>
          <div
            style={{
              color: "#f8fafc",
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 800,
            }}
          >
            Your first 3 hires determine your culture.
          </div>
          <div style={{ color: "#94a3b8", fontSize: 24, fontWeight: 400, maxWidth: 680, lineHeight: 1.5 }}>
            GitHub-backed Builder Passes. No recruiters. No placement fees. No noise.
          </div>
        </div>

        {/* Bottom: pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Verified velocity", "Stack Radar", "Peer vouches", "Blinded identity"].map((label) => (
            <div
              key={label}
              style={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#94a3b8",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
