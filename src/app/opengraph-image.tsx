import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Chakradhar Dhulipalla — AI Implementation Partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      fetch(
        new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)
      ).then((res) => res.arrayBuffer()),
      fetch(
        new URL(
          "../../public/fonts/ClashDisplay-Semibold.ttf",
          import.meta.url
        )
      ).then((res) => res.arrayBuffer()),
    ]);
    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
};

export default async function Image() {
  try {
    const fontData = await getFontData();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FAFAF7",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle warm gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle at top right, rgba(234, 88, 12, 0.06) 0%, transparent 70%)",
              display: "flex",
            }}
          />

          {/* Orange accent bar at top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "#EA580C",
              display: "flex",
            }}
          />

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              padding: "64px 72px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Top: Name + status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Clash Display",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1C1917",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Chakradhar Dhulipalla
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    backgroundColor: "#D6D3D1",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Cabinet Grotesk",
                    fontSize: "18px",
                    color: "#78716C",
                  }}
                >
                  AI Implementation Partner
                </div>
              </div>
              {/* Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#F5F5F0",
                  border: "1px solid #E7E5E4",
                  borderRadius: "100px",
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Cabinet Grotesk",
                    fontSize: "14px",
                    color: "#57534E",
                  }}
                >
                  Available for projects
                </span>
              </div>
            </div>

            {/* Center: Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                maxWidth: "900px",
              }}
            >
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontSize: "64px",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  color: "#1C1917",
                  letterSpacing: "-0.03em",
                }}
              >
                Your AI implementation partner.
              </div>
              <div
                style={{
                  fontFamily: "Cabinet Grotesk",
                  fontSize: "22px",
                  lineHeight: 1.5,
                  color: "#78716C",
                  maxWidth: "700px",
                }}
              >
                I build AI agents, ship web apps, and automate workflows
                for businesses — end to end.
              </div>
            </div>

            {/* Bottom: Highlights */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
            >
              {[
                { value: "8+", label: "AI products live" },
                { value: "10+", label: "years building" },
                { value: "End to end", label: "delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Clash Display",
                      fontSize: "28px",
                      fontWeight: 600,
                      color: "#EA580C",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk",
                      fontSize: "16px",
                      color: "#A8A29E",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}

              {/* Domain */}
              <div
                style={{
                  marginLeft: "auto",
                  fontFamily: "Cabinet Grotesk",
                  fontSize: "18px",
                  color: "#A8A29E",
                }}
              >
                chakradhar.dev
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: fontData
          ? [
              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                weight: 400,
                style: "normal" as const,
              },
              {
                name: "Clash Display",
                data: fontData.clashDisplay,
                weight: 600,
                style: "normal" as const,
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 }
    );
  }
}
