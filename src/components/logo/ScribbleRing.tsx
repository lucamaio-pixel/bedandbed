interface ScribbleRingProps {
  size?: number;
  color?: string;
}

export function ScribbleRing({ size = 320, color = "#F2C500" }: ScribbleRingProps) {
  const r = 48;
  const c1 = Math.PI * 2 * r;
  const c2 = Math.PI * 2 * (r - 1.5);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray={`${c1 * 0.92} ${c1}`}
        transform="rotate(-25 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r={r - 1.5}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray={`${c2 * 0.78} ${c2}`}
        transform="rotate(60 50 50)"
        opacity="0.85"
      />
    </svg>
  );
}
