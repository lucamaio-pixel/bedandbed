"use client";
import Link from "next/link";
import { LogoHorizontal } from "@/components/logo";
import { Button } from "@/components/ui";

const NAV = [
  { label: "Le strutture", href: "/strutture" },
  { label: "Camere", href: "/camere" },
  { label: "Servizi", href: "/servizi" },
  { label: "Messina", href: "/messina" },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  return (
    <header
      style={{
        background: "var(--bb-cream)",
        borderBottom: "1px solid var(--bb-line)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <LogoHorizontal size={44} variant="light" />
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--bb-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--bb-ink-soft)",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "var(--r-pill)",
                transition: "color .12s, background .12s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--bb-blue)";
                (e.target as HTMLAnchorElement).style.background = "rgba(10,77,126,.06)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--bb-ink-soft)";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--bb-ink-mute)",
              letterSpacing: ".04em",
            }}
          >
            IT
          </span>
          <Button variant="primary" size="sm" asChild>
            <a href="/camere">Prenota</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
