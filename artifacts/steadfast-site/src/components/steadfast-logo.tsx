import type React from "react";

const NAVY = "#1e2060";
const GOLD = "#B89650";

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
        display: "inline-flex",
        alignItems: "center",
        gap: "0.2em",
        ...style,
      }}
      aria-label="Let Everyone In"
    >
      <span aria-hidden="true">Let Everyone In</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        style={{
          width: "0.75em",
          height: "0.75em",
          flexShrink: 0,
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
