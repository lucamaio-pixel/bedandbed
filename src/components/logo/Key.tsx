interface KeyProps {
  size?: number;
  color?: string;
  blueColor?: string;
}

export function Key({
  size = 60,
  color = "#F2C500",
  blueColor = "#0A4D7E",
}: KeyProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      aria-hidden
      style={{ display: "block" }}
    >
      <g transform="rotate(-22 30 30)">
        {/* portachiavi quadrato */}
        <rect x="19" y="4" width="16" height="11" rx="1.4" fill={color} />
        {/* foro orizzontale */}
        <rect x="23.5" y="7.5" width="7" height="2.4" rx="0.8" fill={blueColor} />
        {/* anellino */}
        <circle
          cx="27"
          cy="18.5"
          r="2"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        {/* testa rotonda */}
        <circle cx="27" cy="26" r="5.2" fill={color} />
        <circle cx="27" cy="26" r="2.1" fill={blueColor} />
        {/* stelo */}
        <rect x="25.6" y="30.5" width="2.8" height="19" rx="0.5" fill={color} />
        {/* denti */}
        <rect x="28.4" y="41" width="4.5" height="2.6" fill={color} />
        <rect x="28.4" y="45.5" width="3" height="2.6" fill={color} />
      </g>
    </svg>
  );
}
