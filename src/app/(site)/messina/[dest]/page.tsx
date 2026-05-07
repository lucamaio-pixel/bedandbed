import { notFound } from "next/navigation";
import Link from "next/link";
import { DESTINATIONS, getDestination } from "@/lib/destinations";
import { Button } from "@/components/ui";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ dest: d.slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ dest: string }>;
}) {
  const { dest } = await params;
  const d = getDestination(dest);
  if (!d) notFound();

  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section
        style={{
          minHeight: 520,
          background: `url('${d.heroPhoto}') center/cover no-repeat, ${d.photoBg}`,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 32px 56px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,30,.85) 0%, rgba(5,15,30,.3) 55%, transparent 100%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <Link
            href="/messina"
            style={{ fontSize: 13, color: "rgba(255,255,255,.6)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 20 }}
          >
            ← Messina e dintorni
          </Link>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-yellow)", marginBottom: 10 }}>
                {d.region} · {d.travelTime} da Messina
              </div>
              <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "white", margin: "0 0 8px" }}>
                {d.name}
              </h1>
              <p style={{ fontFamily: "var(--bb-serif)", fontStyle: "italic", fontWeight: 400, fontSize: 22, color: "var(--bb-yellow)", margin: 0 }}>
                {d.tagline}
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "var(--r-lg)", padding: "14px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", color: "rgba(255,255,255,.6)", textTransform: "uppercase", marginBottom: 4 }}>Da Messina</div>
              <div style={{ fontWeight: 700, fontSize: 22, color: "white" }}>{d.travelTime}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 2 }}>{d.travelHow.split("·")[0].trim()}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="bb-mobile-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 32px" }}>
        <div className="bb-sidebar-grid">

          {/* MAIN CONTENT */}
          <div>
            {/* Intro */}
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--bb-ink-soft)", margin: "0 0 48px", borderLeft: "3px solid var(--bb-yellow)", paddingLeft: 20 }}>
              {d.intro}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 24px" }}>
                Cosa vedere
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {d.highlights.map((h, i) => (
                  <div
                    key={h.name}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--bb-line)",
                      display: "grid",
                      gridTemplateColumns: "28px 1fr",
                      gap: 16,
                      alignItems: "start",
                    }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--bb-blue)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 4 }}>{h.name}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--bb-ink-soft)" }}>{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 20px" }}>
                Galleria
              </h2>
              <div className="bb-gallery-grid">
                {d.gallery.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: i === 0 ? "4/3" : "1/1",
                      gridColumn: i === 0 ? "span 2" : "span 1",
                      background: `url('${g.photo}') center/cover no-repeat, ${g.photoBg}`,
                      borderRadius: "var(--r-lg)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 50%)" }} />
                    <div style={{ position: "absolute", bottom: 10, left: 14, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.85)", textTransform: "uppercase", letterSpacing: ".06em" }}>
                      {g.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside style={{ position: "sticky", top: 96 }}>

            {/* How to get there */}
            <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 16 }}>Come arrivare</div>
              <div style={{ fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.6, marginBottom: 10 }}>
                {d.travelHow}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(10,77,126,.06)", borderRadius: "var(--r-md)", padding: "10px 12px" }}>
                <span style={{ fontSize: 18 }}>🚗</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "var(--bb-blue-ink)" }}>{d.travelTime}</div>
                  <div style={{ fontSize: 11, color: "var(--bb-ink-mute)" }}>da Messina centro</div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div style={{ background: "var(--bb-cream)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 14 }}>Consigli pratici</div>
              {d.tips.map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>
                  <span style={{ color: "var(--bb-yellow-ink)", fontWeight: 700, flexShrink: 0 }}>→</span>
                  {tip}
                </div>
              ))}
            </div>

            {/* Best season */}
            <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 24 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 8 }}>Periodo migliore</div>
              <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.6 }}>{d.bestSeason}</div>
            </div>

            {/* CTA */}
            <div style={{ background: "var(--bb-blue-ink)", borderRadius: "var(--r-lg)", padding: 24, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "white", marginBottom: 8, letterSpacing: "-0.01em" }}>
                Base a Messina
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.65)", margin: "0 0 16px", lineHeight: 1.5 }}>
                Prenota una camera e parti ogni mattina alla scoperta della Sicilia.
              </p>
              <Button variant="accent" asChild>
                <Link href="/camere">Verifica disponibilità</Link>
              </Button>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://wa.me/39XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "rgba(255,255,255,.5)", textDecoration: "none" }}
                >
                  💬 Hai domande? Scrivici
                </a>
              </div>
            </div>

          </aside>
        </div>

        {/* OTHER DESTINATIONS */}
        <div style={{ borderTop: "1px solid var(--bb-line)", paddingTop: 48, marginTop: 16 }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 24px" }}>
            Altre destinazioni da Messina
          </h2>
          <div className="bb-grid-3">
            {DESTINATIONS.filter((dest) => dest.slug !== d.slug).slice(0, 3).map((dest) => (
              <Link
                key={dest.slug}
                href={`/messina/${dest.slug}`}
                style={{ textDecoration: "none", borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--bb-line)", display: "block" }}
              >
                <div
                  style={{
                    height: 140,
                    background: `url('${dest.heroPhoto}') center/cover no-repeat, ${dest.photoBg}`,
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: 12, left: 14 }}>
                    <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 16, color: "white" }}>{dest.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 2 }}>{dest.travelTime} da Messina</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
