"use client";

import Link from "next/link";
import { Badge } from "./Badge";

interface StructureCardProps {
  slug: string;
  name: string;
  location: string;
  desc: string;
  icon: React.ReactNode;
  badge: string;
  badgeVariant: "blue" | "yellow" | "green" | "stone";
  photoBg: string;
  rooms: number;
}

export function StructureCard({
  slug, name, location, desc, icon, badge, badgeVariant, photoBg, rooms,
}: StructureCardProps) {
  return (
    <Link href={`/strutture/${slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          background: "var(--bb-white)",
          border: "1px solid var(--bb-line)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          transition: "box-shadow .18s, transform .18s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--sh-lg)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <div
          style={{
            aspectRatio: "16/9",
            background: photoBg,
            display: "flex",
            alignItems: "flex-end",
            padding: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(-45deg, rgba(255,255,255,.03) 0 12px, transparent 12px 24px)",
            }}
          />
          <Badge variant={badgeVariant} style={{ position: "relative", zIndex: 1 }}>
            {badge}
          </Badge>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, color: "var(--bb-blue)" }}>
            {icon}
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--bb-ink-mute)" }}>
              {location}
            </span>
          </div>

          <h3 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--bb-blue-ink)" }}>
            {name}
          </h3>

          <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--bb-ink-soft)", margin: "0 0 20px" }}>
            {desc}
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--bb-line)" }}>
            <span style={{ fontSize: 13, color: "var(--bb-ink-mute)", fontWeight: 500 }}>
              {rooms} camere disponibili
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--bb-blue)" }}>Scopri →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
