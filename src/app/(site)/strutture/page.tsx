import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";
import { Badge, Button } from "@/components/ui";
import { StructureCard } from "@/components/ui/StructureCard";
import { IconWave, IconLake, IconHospital } from "@/components/icons";

const GEO_ICON = {
  wave: <IconWave style={{ width: 20, height: 20 }} />,
  lake: <IconLake style={{ width: 20, height: 20 }} />,
  hospital: <IconHospital style={{ width: 20, height: 20 }} />,
};

export default function StrutturePage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* ─── HERO ─── */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Le strutture
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--bb-blue-ink)", maxWidth: 560 }}>
              Tre indirizzi,{" "}
              <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>tre storie</em>
            </h1>
            <p style={{ maxWidth: 400, color: "var(--bb-ink-soft)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Mare, lago, ospedale — ogni struttura è pensata per il motivo del tuo viaggio a Messina.
              Stessa qualità, stesso standard, indirizzi diversi.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CARDS ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {PROPERTIES.map((p) => (
            <StructureCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              location={p.location}
              desc={p.desc}
              icon={GEO_ICON[p.geoIcon]}
              badge={p.badge}
              badgeVariant={p.badgeVariant}
              photoBg={p.photoBg}
              rooms={p.rooms.length}
            />
          ))}
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section style={{ background: "var(--bb-cream)", borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.015em", margin: "0 0 40px", color: "var(--bb-blue-ink)" }}>
            A colpo d&apos;occhio
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--bb-ink-mute)", fontWeight: 600, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", borderBottom: "2px solid var(--bb-line)" }}>
                    Struttura
                  </th>
                  {PROPERTIES.map((p) => (
                    <th key={p.slug} style={{ textAlign: "center", padding: "12px 16px", borderBottom: "2px solid var(--bb-line)" }}>
                      <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)" }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 2 }}>{p.location}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Camere", values: PROPERTIES.map((p) => `${p.rooms.length} camere`) },
                  { label: "Da", values: PROPERTIES.map((p) => `${Math.min(...p.rooms.map((r) => r.price))}€/notte`) },
                  { label: "Ideale per", values: ["Mare & vacanza", "Natura & relax", "Ospedale & università"] },
                  { label: "Parcheggio", values: ["Non disponibile", "Gratuito", "Zona ZTL"] },
                  { label: "Wi-Fi", values: ["✓", "✓", "✓"] },
                  { label: "Bagno privato", values: ["✓", "✓", "✓"] },
                ].map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? "var(--bb-white)" : "transparent" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--bb-ink-soft)", fontSize: 13 }}>{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} style={{ padding: "14px 16px", textAlign: "center", color: v === "✓" ? "var(--bb-success)" : "var(--bb-ink)", fontWeight: v === "✓" ? 700 : 400 }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.015em", margin: "0 0 16px", color: "var(--bb-blue-ink)" }}>
            Non sai quale scegliere?
          </h2>
          <p style={{ fontSize: 16, color: "var(--bb-ink-soft)", lineHeight: 1.6, margin: "0 0 28px" }}>
            Scrivici su WhatsApp — ti diciamo qual è la struttura più comoda per il motivo del tuo viaggio.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href="/contatti">Scrivici</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
