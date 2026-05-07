import Link from "next/link";
import { Button } from "@/components/ui";
import { StructureCard } from "@/components/ui/StructureCard";
import { IconWave, IconLake, IconHospital } from "@/components/icons";

const STRUTTURE = [
  {
    slug: "atelier",
    name: "Atelier",
    location: "Torre Faro · Messina",
    desc: "Sulla punta nord della Sicilia, dove lo Ionio incontra il Tirreno. Dal letto al mare: due minuti a piedi.",
    icon: <IconWave style={{ width: 28, height: 28 }} />,
    badge: "Vista mare",
    badgeVariant: "blue" as const,
    photoBg: "linear-gradient(155deg, #1a4a6e 0%, #0a3050 60%, #c8a84b 100%)",
    rooms: 4,
  },
  {
    slug: "ai-laghi",
    name: "Ai Laghi",
    location: "Ganzirri · Messina",
    desc: "Una finestra sul lago di Ganzirri. Silenzio, natura e il profumo dell'acqua dolce a due passi dallo Stretto.",
    icon: <IconLake style={{ width: 28, height: 28 }} />,
    badge: "Vista lago",
    badgeVariant: "green" as const,
    photoBg: "linear-gradient(155deg, #1a3d2e 0%, #0f2d1f 60%, #2a5a3e 100%)",
    rooms: 4,
  },
  {
    slug: "policlinico",
    name: "Policlinico",
    location: "Via Vecchia Comunale · Messina",
    desc: "A 200 metri dal Policlinico di Messina. Ideale per familiari di pazienti, studenti universitari e medici in trasferta.",
    icon: <IconHospital style={{ width: 28, height: 28 }} />,
    badge: "Vicino al Policlinico",
    badgeVariant: "stone" as const,
    photoBg: "linear-gradient(155deg, #3a2e1a 0%, #2a200f 60%, #5a4a2e 100%)",
    rooms: 3,
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* ─── HERO ─── */}
      <section
        style={{
          background: "var(--bb-blue-ink)",
          padding: "96px 32px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circle */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(242,197,0,.06)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "var(--bb-yellow)",
              marginBottom: 24,
            }}
          >
            Affittacamere · Messina · Tre strutture
          </div>

          <h1
            style={{
              fontFamily: "var(--bb-serif)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--bb-cream)",
              margin: "0 0 24px",
              maxWidth: 720,
            }}
          >
            La tua stanza a Messina,{" "}
            <em style={{ fontStyle: "italic", color: "var(--bb-yellow)", fontWeight: 500 }}>
              vicino a dove devi essere
            </em>
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(251,247,238,.75)",
              maxWidth: 540,
              margin: "0 0 40px",
            }}
          >
            Tre strutture indipendenti. Bagno privato in ogni stanza, senza colazione, senza
            reception. Prezzi diretti, niente commissioni.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="accent" size="lg" asChild>
              <a href="/camere">Cerca disponibilità</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="/strutture"
                style={{ borderColor: "rgba(251,247,238,.3)", color: "var(--bb-cream)" }}
              >
                Scopri le strutture
              </a>
            </Button>
          </div>

          {/* differenziazione */}
          <div
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              "Solo stanze con bagno privato",
              "Niente colazione, niente reception",
              "Prenotazione diretta · Nessuna commissione",
            ].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(251,247,238,.6)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--bb-yellow)",
                    flexShrink: 0,
                  }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LE TRE STRUTTURE ─── */}
      <section style={{ padding: "80px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "var(--bb-blue)",
            marginBottom: 12,
          }}
        >
          Le nostre strutture
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--bb-serif)",
              fontWeight: 600,
              fontSize: 40,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "var(--bb-blue-ink)",
              lineHeight: 1.1,
            }}
          >
            Tre indirizzi, una sola promessa
          </h2>
          <Button variant="ghost" asChild>
            <a href="/strutture">Vedi tutte →</a>
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {STRUTTURE.map((s) => (
            <StructureCard key={s.slug} {...s} />
          ))}
        </div>
      </section>

      {/* ─── COSA SIAMO ─── */}
      <section
        style={{
          background: "var(--bb-cream)",
          borderTop: "1px solid var(--bb-line)",
          borderBottom: "1px solid var(--bb-line)",
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "var(--bb-blue)",
                  marginBottom: 12,
                }}
              >
                Cosa siamo — e cosa no
              </div>
              <h2
                style={{
                  fontFamily: "var(--bb-serif)",
                  fontWeight: 600,
                  fontSize: 40,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  color: "var(--bb-blue-ink)",
                }}
              >
                Affittacamere. Non hotel, non B&amp;B.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>
                Una categoria distinta: stanze indipendenti con bagno privato. Nessuna colazione
                servita, nessuna reception fissa. Più economico, più autentico, più libero.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  si: true,
                  text: "Bagno privato in ogni stanza",
                },
                {
                  si: true,
                  text: "Check-in autonomo con codice — disponibili in chat 7-23",
                },
                {
                  si: true,
                  text: "Prezzo trasparente, nessun costo nascosto",
                },
                {
                  si: false,
                  text: "Colazione inclusa — ci sono bar ottimi a pochi passi",
                },
                {
                  si: false,
                  text: "Reception h24 — ma rispondiamo sempre su WhatsApp",
                },
              ].map(({ si, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    borderRadius: "var(--r-md)",
                    background: si
                      ? "rgba(47,122,77,.06)"
                      : "rgba(179,58,46,.04)",
                    border: `1px solid ${si ? "rgba(47,122,77,.15)" : "rgba(179,58,46,.12)"}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: si ? "var(--bb-success)" : "var(--bb-error)",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {si ? "✓" : "✗"}
                  </span>
                  <span style={{ fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--bb-serif)",
              fontWeight: 600,
              fontSize: 40,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--bb-blue-ink)",
              margin: "0 0 16px",
            }}
          >
            Pronto a prenotare?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--bb-ink-soft)",
              lineHeight: 1.6,
              margin: "0 0 32px",
            }}
          >
            Scegli le date, trova la camera giusta. Paghi direttamente — niente commissioni
            Booking, niente sorprese.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href="/camere">Cerca disponibilità</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
