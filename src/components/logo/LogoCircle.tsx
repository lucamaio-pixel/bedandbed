import { Key } from "./Key";
import { ScribbleRing } from "./ScribbleRing";

const BLUE = "#0A4D7E";
const BLUE_DEEP = "#083A60";
const YELLOW = "#F2C500";
const YELLOW_SOFT = "#F7D94C";

interface LogoCircleProps {
  /** undefined = master Bed&Bed mark; string = property name */
  name?: string;
  size?: number;
  /** Show italic style for property name */
  italic?: boolean;
  payoffSub?: string;
}

export function LogoCircle({
  name,
  size = 200,
  italic = false,
  payoffSub = "Messina",
}: LogoCircleProps) {
  const isMaster = !name;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* blue disc */}
      <div
        style={{
          position: "absolute",
          inset: "4%",
          background: BLUE,
          borderRadius: "50%",
          boxShadow: `inset 0 -${size * 0.04}px ${size * 0.08}px ${BLUE_DEEP}`,
        }}
      />

      <ScribbleRing size={size} />

      {/* content stack */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: size * 0.012,
        }}
      >
        <Key size={size * 0.18} />

        {/* wordmark */}
        <div
          style={{
            fontFamily: "var(--bb-serif)",
            fontWeight: isMaster ? 600 : italic ? 500 : 600,
            fontStyle: italic && !isMaster ? "italic" : "normal",
            fontSize: size * 0.2,
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: YELLOW,
            display: "flex",
            alignItems: "baseline",
          }}
        >
          {isMaster ? (
            <>
              <span>Bed</span>
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: YELLOW_SOFT,
                  padding: `0 ${size * 0.005}px`,
                  fontSize: "0.95em",
                }}
              >
                &amp;
              </span>
              <span>Bed</span>
            </>
          ) : (
            <span>{name}</span>
          )}
        </div>

        {/* address line instead of "Affittacamere" */}
        <div
          style={{
            fontFamily: "var(--bb-sans)",
            fontWeight: 600,
            fontSize: size * 0.038,
            letterSpacing: ".28em",
            color: YELLOW,
            textTransform: "uppercase",
            marginTop: size * 0.014,
            textAlign: "center",
          }}
        >
          {payoffSub}
        </div>
      </div>
    </div>
  );
}
