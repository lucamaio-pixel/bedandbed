import Link from "next/link";
import { Button } from "@/components/ui";
import { StructureCard } from "@/components/ui/StructureCard";
import { HomeSearchBar } from "@/components/booking/HomeSearchBar";
import { IconWave, IconLake, IconHospital } from "@/components/icons";
import { PROPERTIES } from "@/lib/properties";

const GEO_ICON = {
  wave:     <IconWave style={{ width: 28, height: 28 }} />,
  lake:     <IconLake style={{ width: 28, height: 28 }} />,
  hospital: <IconHospital style={{ width: 28, height: 28 }} />,
};

const showcase = PROPERTIES[0]; // Atelier — prima struttura
const showcaseMinPrice = Math.min(...showcase.rooms.map((r) => r.price));

export default function HomePage() {
  return (
    <div style={{ background: "var(--bb-cream)" }}>

      {/* ─── HERO SPLIT ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

        {/* LEFT — copy */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 20 }}>
            Affittacamere · Messina dal 2018
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,4.5vw,58px)", letterSpacing: "-0.025em", lineHeight: 1.08, color: "var(--bb-blue-ink)", margin: "0 0 20px" }}>
            Tre case a Messina,{" "}
            <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>
              una sola
            </em>{" "}
            promessa.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--bb-ink-soft)", margin: "0 0 36px", maxWidth: 460 }}>
            Stanze pulite, prossimità al motivo del tuo viaggio — mare, lago, ospedale — e prezzi senza sorprese.
            Scegli la struttura che ti porta dove devi andare.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" asChild>
              <Link href="/camere">Verifica disponibilità</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/strutture">Vedi le 3 strutture</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT — property showcase card */}
        <div style={{ position: "relative", paddingTop: 16 }}>

          {/* Price badge — outside card, top-right */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10,
            background: "var(--bb-yellow)",
            color: "var(--bb-blue-ink)",
            borderRadius: "var(--r-lg)",
            padding: "12px 16px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(242,197,0,.4)",
            lineHeight: 1.1,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Da</div>
            <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em" }}>{showcaseMinPrice}€</div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 2, opacity: .75 }}>a notte</div>
          </div>

          {/* Card */}
          <div style={{
            background: showcase.photoBg,
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            height: 480,
            position: "relative",
            boxShadow: "0 12px 48px rgba(10,30,60,.18)",
          }}>
            {/* Diagonal texture */}
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, rgba(255,255,255,.03) 0 24px, transparent 24px 48px)" }} />

            {/* Bottom overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,30,.8) 0%, transparent 55%)" }} />

            {/* Content */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".28em", color: "var(--bb-yellow)", textTransform: "uppercase", marginBottom: 6 }}>
                {showcase.name}
              </div>
              <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "white", letterSpacing: "-0.01em", marginBottom: 4 }}>
                {showcase.tagline}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>{showcase.location}</div>

              {/* Room chips */}
              <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                {showcase.rooms.map((r) => (
                  <span key={r.id} style={{ fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.85)", borderRadius: "var(--r-pill)", padding: "4px 10px", backdropFilter: "blur(4px)" }}>
                    {r.name.split(" ").slice(0, 2).join(" ")} · {r.price}€
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH BAR ─── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 32px 0" }}>
        <HomeSearchBar />
      </div>

      {/* ─── ANCHOR BAR ─── */}
      <div style={{ borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", background: "var(--bb-white)", marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", gap: 32, overflowX: "auto" }}>
          {[
            { label: "Bagno privato in ogni camera", icon: "🛁" },
            { label: "Self check-in con codice", icon: "🔑" },
            { label: "Risposta WhatsApp 7–23", icon: "💬" },
            { label: "Prenotazione diretta · nessuna commissione", icon: "✓" },
          ].map(({ label, icon }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 0", whiteSpace: "nowrap", fontSize: 13, color: "var(--bb-ink-soft)", fontWeight: 500, flexShrink: 0 }}>
              <span style={{ color: "var(--bb-blue)", fontWeight: 700 }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ─── LE TRE STRUTTURE ─── */}
      <section style={{ padding: "72px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 10 }}>
              Le nostre strutture
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", margin: 0, color: "var(--bb-blue-ink)", lineHeight: 1.1 }}>
              Tre indirizzi, una sola promessa
            </h2>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/strutture">Vedi tutte →</Link>
          </Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROPERTIES.map((s) => (
            <StructureCard
              key={s.slug}
              slug={s.slug}
              name={s.name}
              location={s.location}
              desc={s.desc}
              icon={GEO_ICON[s.geoIcon]}
              badge={s.badge}
              badgeVariant={s.badgeVariant}
              photoBg={s.photoBg}
              rooms={s.rooms.length}
            />
          ))}
        </div>
      </section>

      {/* ─── COSA SIAMO ─── */}
      <section style={{ background: "var(--bb-white)", borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Cosa siamo — e cosa no
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 16px", color: "var(--bb-blue-ink)" }}>
              Affittacamere.<br />Non hotel, non B&amp;B.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>
              Una categoria distinta: stanze indipendenti con bagno privato. Nessuna colazione
              servita, nessuna reception fissa. Più economico, più autentico, più libero.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { si: true,  text: "Bagno privato in ogni stanza" },
              { si: true,  text: "Check-in autonomo con codice — disponibili in chat 7–23" },
              { si: true,  text: "Prezzo trasparente, nessun costo nascosto" },
              { si: false, text: "Colazione inclusa — ci sono bar ottimi a pochi passi" },
              { si: false, text: "Reception h24 — ma rispondiamo sempre su WhatsApp" },
            ].map(({ si, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", borderRadius: "var(--r-md)", background: si ? "rgba(47,122,77,.06)" : "rgba(179,58,46,.04)", border: `1px solid ${si ? "rgba(47,122,77,.15)" : "rgba(179,58,46,.12)"}` }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: si ? "var(--bb-success)" : "var(--bb-error)", flexShrink: 0, marginTop: 1 }}>
                  {si ? "✓" : "✗"}
                </span>
                <span style={{ fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: "0 0 14px" }}>
            Pronto a prenotare?
          </h2>
          <p style={{ fontSize: 17, color: "var(--bb-ink-soft)", lineHeight: 1.6, margin: "0 0 28px" }}>
            Scegli le date, trova la camera giusta. Paghi direttamente — niente commissioni Booking, niente sorprese.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/camere">Cerca disponibilità</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
