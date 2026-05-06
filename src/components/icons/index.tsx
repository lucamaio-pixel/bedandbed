import { SVGProps } from "react";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconWifi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2 9 L12 4 L22 9 M4 9 V20 H20 V9 M9 14 H15" />
    </svg>
  );
}

export function IconReception(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="9" r="3.5" />
      <path d="M5 20 V18 a4 4 0 0 1 4-4 h6 a4 4 0 0 1 4 4 V20" />
    </svg>
  );
}

export function IconParking(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11 H21" />
    </svg>
  );
}

export function IconRoom(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 19 V11 a3 3 0 0 1 3-3 h8 a3 3 0 0 1 3 3 V19 M3 19 H21 M9 8 V5 h6 v3" />
    </svg>
  );
}

export function IconBed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 13 V5 a2 2 0 0 1 2-2 h10 a2 2 0 0 1 2 2 V13 M3 17 H21 M3 13 H21 V19 a1 1 0 0 1-1 1 H4 a1 1 0 0 1-1-1 z" />
    </svg>
  );
}

export function IconShower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 11 a7 7 0 0 1 14 0 V18 H5 z M9 18 V21 M15 18 V21" />
    </svg>
  );
}

export function IconWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2 17 c2-1 4-1 6 0 s4 1 6 0 s4-1 6 0 M2 13 c2-1 4-1 6 0 s4 1 6 0 s4-1 6 0" />
    </svg>
  );
}

export function IconLake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <ellipse cx="12" cy="13" rx="9" ry="5" />
      <path d="M3 13 a9 5 0 0 0 18 0" />
    </svg>
  );
}

export function IconHospital(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="4" y="6" width="16" height="14" rx="1" />
      <path d="M12 10 V16 M9 13 H15" />
    </svg>
  );
}
