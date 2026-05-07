"use client";
import { useState } from "react";
import Link from "next/link";
import { LogoHorizontal } from "@/components/logo";
import { Button } from "@/components/ui";

const NAV = [
  { label: "Le strutture", href: "/strutture" },
  { label: "Camere", href: "/camere" },
  { label: "Messina", href: "/messina" },
  { label: "Galleria", href: "/galleria" },
  { label: "FAQ", href: "/faq" },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
      {/* ─── Main bar ─── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }} onClick={() => setOpen(false)}>
          <LogoHorizontal size={40} variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="bb-mobile-hide" style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--bb-ink-soft)",
                textDecoration: "none",
                padding: "6px 11px",
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

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {/* Desktop CTA */}
          <Button className="bb-mobile-hide" variant="primary" size="sm" asChild>
            <a href="/camere">Prenota ora</a>
          </Button>

          {/* Mobile hamburger */}
          <button
            className="bb-desktop-hide"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            style={{
              background: "none",
              border: "1px solid var(--bb-line)",
              borderRadius: "var(--r-md)",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--bb-blue-ink)",
              fontSize: 18,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ─── Mobile menu drawer ─── */}
      {open && (
        <div
          className="bb-desktop-hide"
          style={{
            borderTop: "1px solid var(--bb-line)",
            background: "var(--bb-cream)",
            padding: "16px 20px 24px",
          }}
        >
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--bb-blue-ink)",
                textDecoration: "none",
                padding: "13px 0",
                borderBottom: "1px solid var(--bb-line)",
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 20 }}>
            <Button variant="primary" size="lg" asChild style={{ width: "100%" }}>
              <a href="/camere" onClick={() => setOpen(false)}>Prenota ora</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
