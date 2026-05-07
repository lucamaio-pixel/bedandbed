import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";

const GALLERY_ROOMS = [
  {
    propertySlug: "atelier",
    propertyName: "Atelier · Torre Faro",
    color: "#0A4D7E",
    photos: [
      { label: "Camera Vista Stretto", ratio: "4/3", span: 2 },
      { label: "Bagno en suite", ratio: "1/1", span: 1 },
      { label: "Living con terrazza", ratio: "4/3", span: 1 },
      { label: "Vista panoramica", ratio: "16/9", span: 3 },
    ],
  },
  {
    propertySlug: "ai-laghi",
    propertyName: "Ai Laghi · Ganzirri",
    color: "#2F6B3E",
    photos: [
      { label: "Vista sui laghi", ratio: "16/9", span: 3 },
      { label: "Camera matrimoniale", ratio: "4/3", span: 1 },
      { label: "Balcone privato", ratio: "1/1", span: 1 },
      { label: "Area comune", ratio: "4/3", span: 2 },
    ],
  },
  {
    propertySlug: "policlinico",
    propertyName: "Policlinico · Messina",
    color: "#5B3A8C",
    photos: [
      { label: "Camera singola", ratio: "4/3", span: 1 },
      { label: "Camera doppia", ratio: "4/3", span: 1 },
      { label: "Camera tripla", ratio: "1/1", span: 1 },
      { label: "Zona studio", ratio: "16/9", span: 3 },
    ],
  },
];

function PhotoPlaceholder({
  label,
  color,
  aspectRatio,
  gridColumn,
}: {
  label: string;
  color: string;
  aspectRatio: string;
  gridColumn: string;
}) {
  return (
    <div
      style={{
        gridColumn,
        aspectRatio,
        background: color,
        borderRadius: "var(--r-lg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        opacity: 0.12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)` }} />
      <div style={{ fontSize: 36, opacity: 0.5, position: "relative" }}>📷</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: ".08em", position: "relative", textAlign: "center", padding: "0 12px" }}>
        {label}
      </div>
    </div>
  );
}

export default function GalleriaPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Galleria
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--bb-blue-ink)" }}>
              Le nostre<br />
              <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>strutture</em>
            </h1>
            <p style={{ maxWidth: 380, color: "var(--bb-ink-soft)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Tre ambienti curati nei dettagli, ognuno con il suo carattere e la sua vista su Messina.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>

        {/* Coming soon notice */}
        <div style={{ background: "rgba(10,77,126,.06)", border: "1px solid rgba(10,77,126,.15)", borderRadius: "var(--r-lg)", padding: "16px 24px", marginBottom: 48, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>📸</span>
          <div>
            <span style={{ fontWeight: 600, fontSize: 14, color: "var(--bb-blue-ink)" }}>Foto in arrivo</span>
            <span style={{ fontSize: 14, color: "var(--bb-ink-soft)", marginLeft: 8 }}>
              Le fotografie professionali delle strutture saranno disponibili a breve.
            </span>
          </div>
        </div>

        {GALLERY_ROOMS.map((property) => (
          <div key={property.propertySlug} style={{ marginBottom: 72 }}>

            {/* Section header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
              <div>
                <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 4px" }}>
                  {property.propertyName}
                </h2>
                <div style={{ width: 40, height: 3, background: property.color, borderRadius: 2 }} />
              </div>
              <Link
                href={`/strutture/${property.propertySlug}`}
                style={{ fontSize: 14, fontWeight: 600, color: "var(--bb-blue)", textDecoration: "none" }}
              >
                Scopri la struttura →
              </Link>
            </div>

            {/* Photo grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {property.photos.map((photo, i) => (
                <div
                  key={i}
                  style={{
                    gridColumn: `span ${photo.span}`,
                    aspectRatio: photo.ratio,
                    background: `${property.color}18`,
                    borderRadius: "var(--r-lg)",
                    border: `1px solid ${property.color}22`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: 40, opacity: 0.3 }}>📷</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-ink-mute)", textTransform: "uppercase", letterSpacing: ".08em", textAlign: "center", padding: "0 16px" }}>
                    {photo.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Messina section */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 4px" }}>
              Messina e dintorni
            </h2>
            <div style={{ width: 40, height: 3, background: "var(--bb-yellow)", borderRadius: 2 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { label: "Stretto di Messina", span: 2, ratio: "16/9" },
              { label: "Centro storico", span: 1, ratio: "4/3" },
              { label: "Laghi di Ganzirri", span: 1, ratio: "4/3" },
              { label: "Duomo di Messina", span: 1, ratio: "4/3" },
              { label: "Tramonto sullo Stretto", span: 1, ratio: "4/3" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  gridColumn: `span ${item.span}`,
                  aspectRatio: item.ratio,
                  background: "var(--bb-yellow)18",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--bb-yellow)33",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <div style={{ fontSize: 40, opacity: 0.3 }}>🌅</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-ink-mute)", textTransform: "uppercase", letterSpacing: ".08em", textAlign: "center", padding: "0 16px" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ background: "var(--bb-cream)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-xl)", padding: "48px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, color: "var(--bb-blue-ink)", marginBottom: 10, letterSpacing: "-0.015em" }}>
            Vuoi vedere dal vivo?
          </div>
          <p style={{ color: "var(--bb-ink-soft)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.6, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Scrivici su WhatsApp e ti mostriamo le strutture in videochiamata o organizziamo una visita.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/39XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "white", padding: "14px 28px", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
            >
              💬 Videochiamata su WhatsApp
            </a>
            <Link
              href="/camere/disponibilita"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bb-blue)", color: "white", padding: "14px 28px", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
            >
              Prenota ora →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
