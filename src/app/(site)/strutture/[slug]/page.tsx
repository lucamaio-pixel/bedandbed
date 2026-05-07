import { notFound } from "next/navigation";
import { getProperty, PROPERTIES } from "@/lib/properties";
import { Button, Badge, Chip } from "@/components/ui";
import { RoomCard } from "@/components/ui/RoomCard";
import { IconWave, IconLake, IconHospital } from "@/components/icons";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

const GEO_ICON = {
  wave:     <IconWave style={{ width: 32, height: 32 }} />,
  lake:     <IconLake style={{ width: 32, height: 32 }} />,
  hospital: <IconHospital style={{ width: 32, height: 32 }} />,
};

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* ─── HERO ─── */}
      <section style={{ background: property.heroColor, padding: "80px 32px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, rgba(255,255,255,.02) 0 20px, transparent 20px 40px)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, color: "var(--bb-yellow)" }}>
            {GEO_ICON[property.geoIcon]}
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase" }}>
              {property.location}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(40px,6vw,68px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--bb-cream)", margin: "0 0 8px" }}>
            {property.name}
          </h1>
          <p style={{ fontFamily: "var(--bb-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(20px,3vw,28px)", color: "var(--bb-yellow-soft)", margin: "0 0 24px" }}>
            {property.tagline}
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(251,247,238,.8)", maxWidth: 540, margin: "0 0 36px" }}>
            {property.longDesc}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="accent" size="lg" asChild>
              <a href={`/camere?struttura=${property.slug}`}>Cerca disponibilità</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/contatti" style={{ borderColor: "rgba(251,247,238,.3)", color: "var(--bb-cream)" }}>
                Chiedi informazioni
              </a>
            </Button>
          </div>

          {/* address */}
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, color: "rgba(251,247,238,.5)" }}>📍</span>
            <span style={{ fontSize: 14, color: "rgba(251,247,238,.65)", fontWeight: 500 }}>{property.address}</span>
          </div>
        </div>
      </section>

      {/* ─── CAMERE ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 8 }}>
              Le camere
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.015em", margin: 0, color: "var(--bb-blue-ink)" }}>
              {property.rooms.length} camere disponibili
            </h2>
          </div>
          <Badge variant="yellow">Best price · Prenota direttamente</Badge>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {property.rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              badgeLabel={`${room.maxGuests} ${room.maxGuests === 1 ? "ospite" : "ospiti"}`}
              photoBg={room.photoBg}
              features={room.features}
              price={room.price}
              priceNote="A NOTTE · BAGNO PRIVATO"
            />
          ))}
        </div>
      </section>

      {/* ─── DOTAZIONI ─── */}
      <section style={{ background: "var(--bb-cream)", borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 30, letterSpacing: "-0.015em", margin: "0 0 24px", color: "var(--bb-blue-ink)" }}>
              Dotazioni
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {property.features.map((f) => (
                <Chip key={f}>{f}</Chip>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 30, letterSpacing: "-0.015em", margin: "0 0 24px", color: "var(--bb-blue-ink)" }}>
              Nelle vicinanze
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {property.nearbyPOI.map((poi) => (
                <li key={poi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--bb-ink-soft)" }}>
                  <span style={{ color: "var(--bb-blue)", fontWeight: 700, marginTop: 1 }}>→</span>
                  {poi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── REGOLE ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 30, letterSpacing: "-0.015em", margin: "0 0 32px", color: "var(--bb-blue-ink)" }}>
          Come funziona
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { title: "Check-in autonomo", desc: "Ricevi il codice prima dell'arrivo. Nessuna attesa." },
            { title: "Siamo in chat 7–23", desc: "Per qualsiasi necessità rispondiamo su WhatsApp." },
            { title: "Check-in 15:00", desc: "Check-out entro le 10:30. Flessibili se possibile." },
            { title: "Senza colazione", desc: "Bar e forni eccellenti a pochi passi — ti consigliamo i nostri preferiti." },
            { title: "Non si fuma", desc: "Stanze non fumatori. Balconi o esterno consentiti." },
            { title: "Silenzio 22–8", desc: "Palazzi residenziali, rispetto dei vicini." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 20 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: "var(--bb-blue-ink)", padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.015em", margin: "0 0 12px", color: "var(--bb-cream)" }}>
            Prenota {property.name}
          </h2>
          <p style={{ fontSize: 16, color: "rgba(251,247,238,.7)", lineHeight: 1.6, margin: "0 0 28px" }}>
            Scegli le date e la camera. Pagamento diretto, nessuna commissione.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href={`/camere?struttura=${property.slug}`}>Cerca disponibilità</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
