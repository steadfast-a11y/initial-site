const NAVY = "#1e2060";
const GOLD = "#B89650";

function DottedI() {
  return (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 1 }}>
      <span style={{ visibility: "hidden" }}>i</span>
      <span style={{ position: "absolute", inset: 0, color: NAVY, lineHeight: 1 }}>ı</span>
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
      />
    </span>
  );
}

function CheckI() {
  return (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 1 }}>
      <span style={{ visibility: "hidden" }}>i</span>
      <span style={{ position: "absolute", inset: 0, color: NAVY, lineHeight: 1 }}>ı</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "-0.35em",
          left: "50%",
          transform: "translateX(-50%)",
          width: "0.85em",
          height: "0.6em",
          overflow: "visible",
        }}
      >
        <polyline
          points="2.5,10 8,16.5 17.5,3.5"
          stroke={GOLD}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// "Accessibility": 3 i's — first two get gold dots, third gets a gold checkmark
const ACCESS_CHARS = [
  "A","c","c","e","s","s","i","b","i","l","i","t","y",
] as const;

function LogoMark({ invertText = false }: { invertText?: boolean }) {
  const textColor = invertText ? "#fff" : NAVY;
  let iCount = 0;

  return (
    <div
      style={{
        fontFamily: "'Nunito', 'Poppins', 'Montserrat', sans-serif",
        fontWeight: 800,
        color: textColor,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        display: "inline-block",
      }}
    >
      {/* Line 1: "Steadfast" — no separate checkmark */}
      <div>Steadfast</div>
      {/* Line 2: "Accessibility" — 2 dots + 1 checkmark */}
      <div style={{ marginTop: "-0.05em" }}>
        {ACCESS_CHARS.map((char, idx) => {
          if (char === "i") {
            iCount += 1;
            return iCount < 3
              ? <DottedI key={idx} />
              : <CheckI key={idx} />;
          }
          return <span key={idx} style={{ color: textColor }}>{char}</span>;
        })}
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 80px",
        gap: "64px",
        boxSizing: "border-box",
      }}
    >
      <section>
        <p style={{ color: "#bbb", fontSize: "11px", fontFamily: "system-ui, sans-serif", marginBottom: "18px", marginTop: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Nav / header size
        </p>
        <div style={{ fontSize: "26px" }}>
          <LogoMark />
        </div>
      </section>

      <div style={{ width: "100%", height: "1px", background: "#f2f2f2" }} />

      <section>
        <p style={{ color: "#bbb", fontSize: "11px", fontFamily: "system-ui, sans-serif", marginBottom: "18px", marginTop: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Large / hero size
        </p>
        <div style={{ fontSize: "68px" }}>
          <LogoMark />
        </div>
      </section>

      <div style={{ width: "100%", height: "1px", background: "#f2f2f2" }} />

      <section
        style={{ background: NAVY, padding: "40px 48px", borderRadius: "12px", width: "100%", boxSizing: "border-box" }}
      >
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", fontFamily: "system-ui, sans-serif", marginBottom: "18px", marginTop: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          On dark / navy background
        </p>
        <div style={{ fontSize: "48px" }}>
          <LogoMark invertText />
        </div>
      </section>
    </div>
  );
}
