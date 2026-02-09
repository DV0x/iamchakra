import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EA580C",
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          C
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
