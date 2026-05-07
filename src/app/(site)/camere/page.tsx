import { SearchBar } from "@/components/booking/SearchBar";
import { IconBed, IconShower, IconWifi } from "@/components/icons";

const STEPS = [
  { n: 1, label: "Scegli le date" },
  { n: 2, label: "Seleziona la camera" },
  { n: 3, label: "I tuoi dati" },
  { n: 4, label: "Pagamento" },
  { n: 5, label: "Conferma" },
];

const WHY = [
  { icon: <IconBed style={{ width: 28, height: 28 }} />, title: "Bagno privato garantito", desc: "Ogni camera ha il suo bagno esclusivo. Nessuna condivisione." },
  { icon: <IconShower style={{ width: 28, height: 28 }} />, title: "Prezzo diretto", desc: "Prenoti qui? Risparmi le commissioni Booking e Airbnb. Il prezzo è quello reale." },
  { icon: <IconWifi style={{ width: 28, height: 28 }} />, title: "Cancellazione gratuita", desc: "Fino a 48h prima del check-in, rimborso completo senza domande." },
];

export default function CamerePage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* ─── HERO CON SEARCHBAR ─── */}
      <section
        style={{
          background: "var(--bb-blue-ink)",
          padding: "72px 32px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: -200, top: -200, width: 700, height: 700, borderRadius: "50%", background: "rgba(242,197,0,.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--bb-yellow)", marginBottom: 16 }}>
            Disponibilità e prenotazione
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--bb-cream)", margin: "0 0 12px" }}>
            Trova la tua camera a Messina
          </h1>
          <p style={{ fontSize: 17, color: "rgba(251,247,238,.7)", margin: "0 0 40px" }}>
            Tre strutture — mare, lago, ospedale. Scegli le date e prenota direttamente.
          </p>

          {/* Search card */}
          <div style={{ background: "rgba(251,247,238,.06)", border: "1px solid rgba(251,247,238,.12)", borderRadius: "var(--r-xl)", padding: "28px 28px 24px" }}>
            <SearchBar />
          </div>

          {/* Stepper */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 32 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: s.n === 1 ? "var(--bb-yellow)" : "rgba(251,247,238,.15)",
                    color: s.n === 1 ? "var(--bb-blue-ink)" : "rgba(251,247,238,.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700,
                  }}>
                    {s.n}
                  </div>
                  <span style={{ fontSize: 11, color: s.n === 1 ? "rgba(251,247,238,.9)" : "rgba(251,247,238,.4)", fontWeight: s.n === 1 ? 600 : 400, whiteSpace: "nowrap" }}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 1, background: "rgba(251,247,238,.15)", margin: "0 8px", marginBottom: 24 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERCHÉ PRENOTARE QUI ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 32, letterSpacing: "-0.015em", margin: "0 0 40px", color: "var(--bb-blue-ink)", textAlign: "center" }}>
          Perché prenotare direttamente
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {WHY.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ color: "var(--bb-blue)" }}>{icon}</div>
              <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 20, color: "var(--bb-blue-ink)" }}>{title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--bb-ink-soft)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REGOLE ─── */}
      <section style={{ background: "var(--bb-cream)", borderTop: "1px solid var(--bb-line)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", margin: "0 0 24px", color: "var(--bb-blue-ink)" }}>
            Da sapere prima di prenotare
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {[
              "Check-in dalle 15:00, check-out entro le 10:30",
              "Tassa di soggiorno €2/persona/notte (max 4 notti) — da pagare in struttura",
              "Nessuna colazione inclusa — bar e forni eccellenti a pochi passi",
              "Check-in autonomo con codice — siamo disponibili in chat 7–23",
              "Animali non ammessi",
              "Non si fuma in camera — balconi o esterno consentiti",
            ].map((r) => (
              <div key={r} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>
                <span style={{ color: "var(--bb-blue)", fontWeight: 700, flexShrink: 0 }}>·</span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
