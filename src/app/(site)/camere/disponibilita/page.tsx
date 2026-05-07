import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";
import { Badge, Button, Chip } from "@/components/ui";
import { SearchBar } from "@/components/booking/SearchBar";

interface Props {
  searchParams: Promise<{ checkin?: string; checkout?: string; ospiti?: string; struttura?: string }>;
}

function nightsBetween(a: string, b: string) {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("it-IT", { day: "numeric", month: "short" });
}

export default async function DisponibilitaPage({ searchParams }: Props) {
  const { checkin = "", checkout = "", ospiti = "2", struttura = "" } = await searchParams;
  const notti = checkin && checkout ? nightsBetween(checkin, checkout) : 0;
  const numOspiti = Number(ospiti);

  // Filtra strutture e camere in base ai parametri
  const properties = PROPERTIES.filter((p) => !struttura || p.slug === struttura);
  const rooms = properties.flatMap((p) =>
    p.rooms
      .filter((r) => r.maxGuests >= numOspiti)
      .map((r) => ({ ...r, propertySlug: p.slug, propertyName: p.name, propertyLocation: p.location, photoBg: r.photoBg }))
  );

  return (
    <div style={{ background: "var(--bb-paper)", minHeight: "100vh" }}>

      {/* ─── SEARCHBAR STICKY ─── */}
      <div style={{ background: "var(--bb-blue-ink)", padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SearchBar
            compact
            initialStruttura={struttura}
            initialCheckin={checkin}
            initialCheckout={checkout}
            initialOspiti={numOspiti}
          />
        </div>
      </div>

      <div className="bb-sidebar-grid bb-mobile-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px" }}>

        {/* ─── RISULTATI ─── */}
        <div>
          {/* Riepilogo ricerca */}
          <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", margin: "0 0 6px", color: "var(--bb-blue-ink)" }}>
                {rooms.length} {rooms.length === 1 ? "camera disponibile" : "camere disponibili"}
              </h1>
              {checkin && checkout && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Chip>{fmtDate(checkin)} → {fmtDate(checkout)} · {notti} {notti === 1 ? "notte" : "notti"}</Chip>
                  <Chip>{numOspiti} {numOspiti === 1 ? "ospite" : "ospiti"}</Chip>
                  {struttura && <Chip>{properties[0]?.name}</Chip>}
                </div>
              )}
            </div>
            <Badge variant="yellow">Miglior prezzo · Prenotazione diretta</Badge>
          </div>

          {/* Room list */}
          {rooms.length === 0 ? (
            <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: "48px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--bb-serif)", fontSize: 24, color: "var(--bb-blue-ink)", marginBottom: 12 }}>Nessuna camera trovata</div>
              <p style={{ color: "var(--bb-ink-soft)", marginBottom: 24 }}>Prova a modificare le date o il numero di ospiti.</p>
              <Button variant="ghost" asChild><a href="/camere">Nuova ricerca</a></Button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {rooms.map((room) => (
                <article key={room.id} className="bb-room-card" style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", overflow: "hidden", display: "grid", gridTemplateColumns: "280px 1fr" }}>
                  {/* foto */}
                  <div style={{ background: room.photoBg, position: "relative", minHeight: 200 }}>
                    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, rgba(255,255,255,.04) 0 10px, transparent 10px 20px)" }} />
                    <div style={{ position: "absolute", top: 12, left: 12 }}>
                      <Badge variant="blue" style={{ background: "var(--bb-white)", color: "var(--bb-blue)" }}>
                        {room.propertyName}
                      </Badge>
                    </div>
                  </div>

                  {/* body */}
                  <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--bb-ink-mute)", marginBottom: 6 }}>
                        {room.propertyLocation}
                      </div>
                      <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--bb-blue-ink)" }}>
                        {room.name}
                      </h2>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                        {room.features.map((f) => <Chip key={f}>{f}</Chip>)}
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--bb-line)" }}>
                      <div>
                        <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, color: "var(--bb-blue-ink)", lineHeight: 1 }}>
                          {room.price}€
                          <span style={{ fontFamily: "var(--bb-sans)", fontWeight: 400, fontSize: 13, color: "var(--bb-ink-mute)", marginLeft: 4 }}>/notte</span>
                        </div>
                        {notti > 0 && (
                          <div style={{ fontSize: 13, color: "var(--bb-ink-mute)", marginTop: 4 }}>
                            Totale {notti} notti: <strong style={{ color: "var(--bb-blue-ink)" }}>{room.price * notti}€</strong>
                          </div>
                        )}
                      </div>
                      <Button variant="primary" asChild>
                        <Link href={`/camere/prenota/${room.id}?checkin=${checkin}&checkout=${checkout}&ospiti=${ospiti}&struttura=${room.propertySlug}`}>
                          Prenota questa camera
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* ─── SIDEBAR ─── */}
        <aside style={{ position: "sticky", top: 90 }}>
          <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", marginBottom: 16 }}>
              Il tuo soggiorno
            </div>
            {checkin && checkout ? (
              <>
                {[
                  ["Check-in", fmtDate(checkin)],
                  ["Check-out", fmtDate(checkout)],
                  ["Notti", String(notti)],
                  ["Ospiti", String(numOspiti)],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "8px 0", borderBottom: "1px solid var(--bb-line)" }}>
                    <span style={{ color: "var(--bb-ink-mute)" }}>{label}</span>
                    <span style={{ fontWeight: 600, color: "var(--bb-blue-ink)" }}>{val}</span>
                  </div>
                ))}
              </>
            ) : (
              <p style={{ fontSize: 14, color: "var(--bb-ink-mute)" }}>Seleziona le date per vedere i totali.</p>
            )}
          </div>

          <div style={{ background: "rgba(47,122,77,.07)", border: "1px solid rgba(47,122,77,.18)", borderRadius: "var(--r-md)", padding: "14px 16px" }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-success)", marginBottom: 4 }}>
              ✓ Cancellazione gratuita
            </div>
            <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>
              Fino a 48h prima del check-in, rimborso completo.
            </div>
          </div>

          <div style={{ marginTop: 16, background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", padding: "14px 16px" }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-blue-ink)", marginBottom: 4 }}>
              Hai dubbi?
            </div>
            <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.5, marginBottom: 10 }}>
              Scrivici su WhatsApp — rispondiamo entro pochi minuti.
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="/contatti">Contattaci</a>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
