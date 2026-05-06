import Link from "next/link";
import { LogoHorizontal } from "@/components/logo";

const STRUTTURE = [
  { label: "Atelier · Torre Faro", href: "/strutture/atelier" },
  { label: "Ai Laghi · Ganzirri", href: "/strutture/ai-laghi" },
  { label: "Policlinico · Messina", href: "/strutture/policlinico" },
];

const INFO = [
  { label: "Le strutture", href: "/strutture" },
  { label: "Camere e disponibilità", href: "/camere" },
  { label: "Servizi", href: "/servizi" },
  { label: "Cosa fare a Messina", href: "/messina" },
  { label: "Galleria", href: "/galleria" },
  { label: "Recensioni", href: "/recensioni" },
];

const LEGALE = [
  { label: "Contatti", href: "/contatti" },
  { label: "FAQ", href: "/faq" },
  { label: "Termini e condizioni", href: "/termini" },
  { label: "Privacy policy", href: "/privacy" },
];

const linkStyle: React.CSSProperties = {
  color: "rgba(251,247,238,.65)",
  textDecoration: "none",
  fontSize: 14,
  lineHeight: 1.8,
  display: "block",
  transition: "color .12s",
};

const headStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "var(--bb-yellow)",
  marginBottom: 16,
};

export function Footer() {
  return (
    <footer style={{ background: "var(--bb-blue-ink)", color: "var(--bb-cream)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
        }}
      >
        {/* brand column */}
        <div>
          <LogoHorizontal size={44} variant="dark" />
          <p
            style={{
              marginTop: 24,
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(251,247,238,.6)",
              maxWidth: 280,
            }}
          >
            Tre strutture a Messina. Stanze con bagno privato, senza colazione, senza reception.
            Prezzi diretti, niente commissioni.
          </p>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <a
              href="mailto:info@bedandbed.it"
              style={{ ...linkStyle, color: "var(--bb-yellow-soft)" }}
            >
              info@bedandbed.it
            </a>
          </div>
        </div>

        {/* strutture */}
        <div>
          <div style={headStyle}>Strutture</div>
          {STRUTTURE.map(({ label, href }) => (
            <Link key={href} href={href} style={linkStyle}>
              {label}
            </Link>
          ))}
        </div>

        {/* info */}
        <div>
          <div style={headStyle}>Info</div>
          {INFO.map(({ label, href }) => (
            <Link key={href} href={href} style={linkStyle}>
              {label}
            </Link>
          ))}
        </div>

        {/* legale */}
        <div>
          <div style={headStyle}>Legale</div>
          {LEGALE.map(({ label, href }) => (
            <Link key={href} href={href} style={linkStyle}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(251,247,238,.1)",
          padding: "20px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 13, color: "rgba(251,247,238,.4)" }}>
          © 2026 Bed&amp;Bed · Affittacamere Messina · P.IVA in aggiornamento
        </span>
        <span style={{ fontSize: 13, color: "rgba(251,247,238,.4)" }}>IT · EN · ES · DE</span>
      </div>
    </footer>
  );
}
