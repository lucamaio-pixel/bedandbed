import { Key } from "./Key";

const BLUE = "#0A4D7E";
const BLUE_DEEP = "#083A60";
const YELLOW = "#F2C500";

interface LogoHorizontalProps {
  size?: number;
  variant?: "light" | "dark";
}

export function LogoHorizontal({ size = 60, variant = "light" }: LogoHorizontalProps) {
  const textColor = variant === "dark" ? "#FBF7EE" : BLUE;
  const subColor =
    variant === "dark" ? "rgba(251,247,238,.7)" : BLUE;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.32,
      }}
    >
      {/* disc with key */}
      <div
        style={{
          width: size,
          height: size,
          position: "relative",
          background: BLUE,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `inset 0 -${size * 0.05}px ${size * 0.08}px ${BLUE_DEEP}`,
          flexShrink: 0,
        }}
      >
        <Key size={size * 0.55} />
      </div>

      {/* text stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: size * 0.04,
          lineHeight: 1,
        }}
      >
        <div
          style={{
            fontFamily: "var(--bb-serif)",
            fontWeight: 600,
            fontSize: size * 0.55,
            letterSpacing: "-0.03em",
            color: textColor,
          }}
        >
          Bed
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              color: YELLOW,
              padding: "0 0.02em",
            }}
          >
            &amp;
          </span>
          Bed
        </div>
        <div
          style={{
            fontFamily: "var(--bb-sans)",
            fontWeight: 600,
            fontSize: size * 0.13,
            letterSpacing: ".32em",
            color: subColor,
            textTransform: "uppercase",
          }}
        >
          Affittacamere · Messina
        </div>
      </div>
    </div>
  );
}
