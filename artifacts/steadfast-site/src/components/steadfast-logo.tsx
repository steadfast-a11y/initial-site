import type React from "react";

const NAVY = "#1e2060";
const GOLD = "#B89650";

function CheckI({ invertText }: { invertText: boolean }) {
  const bodyColor = invertText ? "#fff" : NAVY;
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        lineHeight: 1,
      }}
    >
      <span style={{ visibility: "hidden" }}>i</span>
      <span
        style={{ position: "absolute", inset: 0, color: bodyColor, lineHeight: 1 }}
        aria-hidden="true"
      >
        ı
      </span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-0.28em",
          left: "50%",
          transform: "translateX(-38%)",
          width: "0.78em",
          height: "0.6em",
          overflow: "visible",
        }}
      >
        <polyline
          points="2.5,10 8,16.5 17.5,3.5"
          stroke={GOLD}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface SteadfastLogoProps {
  invertText?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function SteadfastLogo({ invertText = false, className, style }: SteadfastLogoProps) {
  const textColor = invertText ? "#fff" : NAVY;

  return (
    <span
      className={className}
      style={{
        fontFamily: "'Nunito', 'Poppins', 'Montserrat', sans-serif",
        fontWeight: 800,
        color: textColor,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        display: "inline-block",
        ...style,
      }}
      aria-label="Let Everyone In"
    >
      <span aria-hidden="true">
        Let Everyone{" "}
        <CheckI invertText={invertText} />
        <span style={{ color: textColor }}>n</span>
      </span>
    </span>
  );
}
