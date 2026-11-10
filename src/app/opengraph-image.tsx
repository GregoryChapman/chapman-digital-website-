import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Chapman Digital Services: modern websites for creators and small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fontDir = join(process.cwd(), "assets/fonts");
  const [interRegular, interExtraBold] = await Promise.all([
    readFile(join(fontDir, "inter-latin-400-normal.woff")),
    readFile(join(fontDir, "inter-latin-800-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #0B1F33 0%, #162636 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#5BA8BD",
            fontSize: 28,
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 28,
          }}
        >
          chapmandigitalservices.com
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Chapman Digital Services
        </div>
        <div
          style={{
            display: "flex",
            color: "#E4ECF3",
            fontSize: 40,
            marginTop: 36,
            maxWidth: 1000,
            lineHeight: 1.3,
          }}
        >
          Modern websites for creators and small businesses.
        </div>
        <div style={{ display: "flex", color: "#C3D2DF", fontSize: 32, marginTop: 16 }}>
          Live in weeks, not months.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            width: 160,
            height: 6,
            background: "#5BA8BD",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interExtraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
