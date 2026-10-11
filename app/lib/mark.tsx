import { ImageResponse } from "next/og";

// "SK" in Great Vibes (the hero font), black and white, for favicons
async function loadScriptFont() {
  const css = await (
    await fetch("https://fonts.googleapis.com/css2?family=Great+Vibes&text=SK")
  ).text();
  const url = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!url) throw new Error("Great Vibes font file not found");
  return (await fetch(url)).arrayBuffer();
}

export async function renderMark(px: number, radius: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161413",
          color: "#faf8f4",
          borderRadius: radius,
          fontFamily: "Great Vibes",
          // Script flourishes are wide: smaller size, letters pulled together
          fontSize: px * 0.4,
          letterSpacing: -px * 0.06,
          paddingTop: px * 0.04,
          paddingRight: px * 0.26,
        }}
      >
        SK
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [
        { name: "Great Vibes", data: await loadScriptFont(), weight: 400 },
      ],
    },
  );
}
