import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EA580C",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
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
