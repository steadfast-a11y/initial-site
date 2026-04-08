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
        style={{ position: "absolute", inset: 0, color: bodyColor, lineHeight: 1 }}
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
          width: "0.23em",
          height: "0.23em",
          borderRadius: "50%",
          background: GOLD,
          display: "block",
        }}
        aria-hidden="true"
      />
    </span>
  );
}

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

// "Accessibility": indices 6, 8, 10 are the three "i" characters
// First two get a gold dot; the third gets a gold checkmark as the dot
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
  let iCount = 0;

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
      {/* Line 1: "Steadfast" — no separate checkmark */}
      <span style={{ display: "block" }} aria-hidden="true">
        Steadfast
      </span>
      {/* Line 2: "Accessibility" with 2 gold dots + 1 gold checkmark as dots */}
      <span style={{ display: "block", marginTop: "-0.05em" }} aria-hidden="true">
        {ACCESS_CHARS.map((char, idx) => {
          if (char === "i") {
            iCount += 1;
            return iCount < 3
              ? <DottedI key={idx} invertText={invertText} />
              : <CheckI key={idx} invertText={invertText} />;
          }
          return (
            <span key={idx} style={{ color: textColor }}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
