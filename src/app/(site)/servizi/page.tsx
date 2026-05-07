import Link from "next/link";
import { Button } from "@/components/ui";

const SERVICES = [
  {
    icon: "🔑",
    title: "Self check-in",
    desc: "Accedi in autonomia con codice digitale. Ricevi le istruzioni via WhatsApp 24 ore prima dell'arrivo. Nessuna attesa, nessuna reception.",
  },
  {
    icon: "🛁",
    title: "Bagno privato",
    desc: "Ogni camera ha il suo bagno privato. Non condiviso, non in corridoio. Sempre incluso nel prezzo.",
  },
  {
    icon: "🛏️",
    title: "Biancheria fresca",
    desc: "Lenzuola e asciugamani cambiati ad ogni check-in. Per soggiorni lunghi il cambio biancheria è disponibile su richiesta.",
  },
  {
    icon: "📶",
    title: "Wi-Fi fibra",
    desc: "Connessione veloce in tutte le strutture. Ideale per smart working, streaming e videochiamate.",
  },
  {
    icon: "❄️",
    title: "Aria condizionata",
    desc: "Climatizzazione in tutte le camere. Fresco d'estate, caldo d'inverno. Telecomando in stanza.",
  },
  {
    icon: "💬",
    title: "Assistenza WhatsApp 7–23",
    desc: "Siamo sempre raggiungibili su WhatsApp dalle 7 alle 23, sette giorni su sette. Risposta in pochi minuti.",
  },
  {
    icon: "🅿️",
    title: "Parcheggio (Ganzirri)",
    desc: "Parcheggio gratuito disponibile presso la struttura Ai Laghi di Ganzirri. Per le altre strutture indichiamo le soluzioni migliori nelle vicinanze.",
  },
  {
    icon: "🧹",
    title: "Pulizia professionale",
    desc: "Pulizia approfondita tra ogni soggiorno. Per soggiorni superiori a 7 notti è disponibile un servizio di riassetto intermedio.",
  },
  {
    icon: "📍",
    title: "Guida alla città",
    desc: "Al check-in ricevi consigli personalizzati su ristoranti, spiagge, mercati e gite fuori porta — scritti da chi vive a Messina.",
  },
];

const LONG_STAY = [
  "Tariffe settimanali e mensili scontate",
  "Cambio biancheria incluso ogni 3-4 giorni",
  "Supporto per commissioni e necessità pratiche",
  "Flessibilità sugli orari di check-in/out",
  "Sconto fedeltà per ritorni frequenti",
];

export default function ServiziPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Servizi
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--bb-blue-ink)" }}>
              Tutto incluso,<br />
              <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>niente di superfluo</em>
            </h1>
            <p style={{ maxWidth: 380, color: "var(--bb-ink-soft)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Non siamo un hotel — e non vogliamo esserlo. Offriamo quello che serve davvero, senza fronzoli e senza costi nascosti.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 64 }}>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--bb-white)",
                border: "1px solid var(--bb-line)",
                borderRadius: "var(--r-lg)",
                padding: "28px 24px",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{s.icon}</div>
              <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                {s.title}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Long stay section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", background: "var(--bb-blue-ink)", borderRadius: "var(--r-xl)", padding: "56px 64px" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-yellow)", marginBottom: 12 }}>
              Soggiorni lunghi
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-cream)", margin: "0 0 16px" }}>
              Resti più di 7 notti?<br />
              <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--bb-yellow)" }}>Tariffe dedicate.</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(251,247,238,.7)", margin: "0 0 28px" }}>
              Ideale per medici in trasferta, familiari di pazienti, studenti universitari e lavoratori in mobilità. Contattaci per un preventivo personalizzato.
            </p>
            <a
              href="https://wa.me/39XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "white", padding: "12px 24px", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
            >
              💬 Chiedi il preventivo
            </a>
          </div>
          <div>
            {LONG_STAY.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.1)", fontSize: 14, color: "rgba(251,247,238,.85)" }}
              >
                <span style={{ color: "var(--bb-yellow)", fontWeight: 700, fontSize: 16 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "var(--bb-cream)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-xl)", padding: "40px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 10px" }}>
              Hai bisogno di qualcosa di specifico?
            </h2>
            <p style={{ color: "var(--bb-ink-soft)", fontSize: 15, margin: "0 0 24px" }}>
              Scrivici — cerchiamo sempre di accontentarti.
            </p>
            <Button variant="primary" asChild>
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
