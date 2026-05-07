import { ContactForm } from "@/components/booking/ContactForm";
import { PROPERTIES } from "@/lib/properties";
import { IconWave, IconLake, IconHospital } from "@/components/icons";

const GEO_ICON = {
  wave:     <IconWave style={{ width: 20, height: 20 }} />,
  lake:     <IconLake style={{ width: 20, height: 20 }} />,
  hospital: <IconHospital style={{ width: 20, height: 20 }} />,
};

export default function ContattiPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* ─── HERO ─── */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Contatti
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--bb-blue-ink)" }}>
              Scrivici,<br />
              <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>rispondiamo subito</em>
            </h1>
            <p style={{ maxWidth: 380, color: "var(--bb-ink-soft)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Siamo disponibili su WhatsApp e via email tutti i giorni dalle 7 alle 23.
              Per prenotazioni, informazioni o qualsiasi dubbio.
            </p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "start" }}>

        {/* ─── FORM ─── */}
        <div>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", margin: "0 0 28px", color: "var(--bb-blue-ink)" }}>
            Mandaci un messaggio
          </h2>
          <ContactForm />
        </div>

        {/* ─── SIDEBAR CONTATTI ─── */}
        <aside>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/39XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#25D366", color: "white",
              borderRadius: "var(--r-lg)", padding: "20px 24px",
              textDecoration: "none", marginBottom: 24,
              boxShadow: "0 4px 20px rgba(37,211,102,.25)",
            }}
          >
            <span style={{ fontSize: 36 }}>💬</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Scrivici su WhatsApp</div>
              <div style={{ fontSize: 13, opacity: .85, marginTop: 2 }}>Risposta in pochi minuti · 7–23 tutti i giorni</div>
            </div>
          </a>

          {/* Email */}
          <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 12 }}>Email</div>
            <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              info@bedandbed.it
            </a>
            <div style={{ fontSize: 13, color: "var(--bb-ink-mute)", marginTop: 4 }}>Risposta entro qualche ora</div>
          </div>

          {/* Le 3 strutture */}
          <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 16 }}>I nostri indirizzi</div>
            {PROPERTIES.map((p, i) => (
              <div
                key={p.slug}
                style={{
                  paddingBottom: i < PROPERTIES.length - 1 ? 16 : 0,
                  marginBottom: i < PROPERTIES.length - 1 ? 16 : 0,
                  borderBottom: i < PROPERTIES.length - 1 ? "1px solid var(--bb-line)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--bb-blue)", marginBottom: 4 }}>
                  {GEO_ICON[p.geoIcon]}
                  <span style={{ fontWeight: 600, fontSize: 14, color: "var(--bb-blue-ink)" }}>{p.name}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.5, paddingLeft: 28 }}>
                  {p.address}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(p.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "var(--bb-blue)", textDecoration: "none", paddingLeft: 28, display: "block", marginTop: 4 }}
                >
                  Apri in Google Maps →
                </a>
              </div>
            ))}
          </div>

        </aside>
      </div>
    </div>
  );
}
