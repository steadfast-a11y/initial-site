import type React from "react";

const NAVY = "#1e2060";
const GOLD = "#B89650";

function DottedI({ invertText }: { invertText: boolean }) {
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
        style={{
          position: "absolute",
          inset: 0,
          color: bodyColor,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        ı
      </span>
      <span
        style={{
          position: "absolute",
          top: "0.04em",
          left: "50%",
          transform: "translateX(-50%)",
          width: "0.2em",
          height: "0.2em",
          borderRadius: "50%",
          background: GOLD,
          display: "block",
        }}
        aria-hidden="true"
      />
    </span>
  );
}

const ACCESS_CHARS = [
  "A","c","c","e","s","s","i","b","i","l","i","t","y",
] as const;

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
      aria-label="Steadfast Accessibility"
    >
      <span
        style={{ display: "flex", alignItems: "center", gap: "0.15em" }}
        aria-hidden="true"
      >
        <span>Steadfast</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          style={{
            width: "0.72em",
            height: "0.72em",
            flexShrink: 0,
            display: "inline-block",
            verticalAlign: "middle",
            marginBottom: "0.04em",
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
      <span
        style={{ display: "block", marginTop: "-0.05em" }}
        aria-hidden="true"
      >
        {ACCESS_CHARS.map((char, idx) =>
          char === "i" ? (
            <DottedI key={idx} invertText={invertText} />
          ) : (
            <span key={idx} style={{ color: textColor }}>
              {char}
            </span>
          )
        )}
      </span>
    </span>
  );
}
