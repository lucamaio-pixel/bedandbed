import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";
import { Button, Badge } from "@/components/ui";
import { GuestForm } from "@/components/booking/GuestForm";

interface Props {
  params: Promise<{ roomId: string }>;
  searchParams: Promise<{ checkin?: string; checkout?: string; ospiti?: string; struttura?: string }>;
}

function nightsBetween(a: string, b: string) {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

export default async function PrenotaPage({ params, searchParams }: Props) {
  const { roomId } = await params;
  const { checkin = "", checkout = "", ospiti = "2", struttura = "" } = await searchParams;

  const property = PROPERTIES.find((p) => p.slug === struttura);
  const room = property?.rooms.find((r) => r.id === roomId);
  const notti = checkin && checkout ? nightsBetween(checkin, checkout) : 0;
  const totale = room ? room.price * notti : 0;

  return (
    <div style={{ background: "var(--bb-paper)", minHeight: "100vh" }}>

      {/* Stepper */}
      <div style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "16px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          {[
            { n: 1, label: "Cerca", done: true },
            { n: 2, label: "Seleziona", done: true },
            { n: 3, label: "I tuoi dati", active: true },
            { n: 4, label: "Pagamento" },
            { n: 5, label: "Conferma" },
          ].map((s, i, arr) => (
            <div key={s.n} style={{ display: "flex", alignItems: "center", flex: s.active ? 2 : 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: s.done ? "var(--bb-success)" : s.active ? "var(--bb-blue)" : "var(--bb-stone)",
                  color: s.done || s.active ? "white" : "var(--bb-ink-mute)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, flexShrink: 0,
                }}>
                  {s.done ? "✓" : s.n}
                </div>
                <span style={{ fontSize: 13, fontWeight: s.active ? 600 : 400, color: s.active ? "var(--bb-blue-ink)" : s.done ? "var(--bb-success)" : "var(--bb-ink-mute)", whiteSpace: "nowrap" }}>
                  {s.label}
                </span>
              </div>
              {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: "var(--bb-line)", margin: "0 12px" }} />}
            </div>
          ))}
        </div>
      </div>

      <div className="bb-sidebar-grid bb-mobile-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px" }}>

        {/* ─── FORM ─── */}
        <div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 34, letterSpacing: "-0.02em", margin: "0 0 8px", color: "var(--bb-blue-ink)" }}>
            I tuoi dati
          </h1>
          <p style={{ color: "var(--bb-ink-soft)", margin: "0 0 32px", fontSize: 15 }}>
            Inserisci i dati dell&apos;ospite principale. Riceverai la conferma per email.
          </p>
          <GuestForm
            roomId={roomId}
            checkin={checkin}
            checkout={checkout}
            ospiti={ospiti}
            struttura={struttura}
          />
        </div>

        {/* ─── RIEPILOGO ─── */}
        <aside style={{ position: "sticky", top: 90 }}>
          <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
            <div style={{ background: room?.photoBg ?? "var(--bb-stone)", height: 140 }} />
            <div style={{ padding: 24 }}>
              <Badge variant="blue" style={{ marginBottom: 10 }}>{property?.name}</Badge>
              <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", marginBottom: 16 }}>
                {room?.name ?? "Camera"}
              </div>

              {[
                ["Check-in", checkin ? fmtDate(checkin) : "—"],
                ["Check-out", checkout ? fmtDate(checkout) : "—"],
                ["Notti", String(notti)],
                ["Ospiti", ospiti],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "8px 0", borderBottom: "1px solid var(--bb-line)" }}>
                  <span style={{ color: "var(--bb-ink-mute)" }}>{label}</span>
                  <span style={{ fontWeight: 600, color: "var(--bb-blue-ink)" }}>{val}</span>
                </div>
              ))}

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, padding: "14px 0 0", marginTop: 4 }}>
                <span style={{ fontWeight: 600, color: "var(--bb-blue-ink)" }}>Totale</span>
                <span style={{ fontFamily: "var(--bb-serif)", fontWeight: 700, fontSize: 22, color: "var(--bb-blue-ink)" }}>{totale}€</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 4 }}>
                + tassa di soggiorno €2/persona/notte (in struttura)
              </div>

              <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(47,122,77,.07)", borderRadius: "var(--r-md)", fontSize: 13, color: "var(--bb-success)", fontWeight: 600 }}>
                ✓ Cancellazione gratuita fino a 48h prima
              </div>
            </div>
          </div>

          <div style={{ marginTop: 12, textAlign: "center" }}>
            <Link href={`/camere/disponibilita?checkin=${checkin}&checkout=${checkout}&ospiti=${ospiti}&struttura=${struttura}`} style={{ fontSize: 13, color: "var(--bb-ink-mute)", textDecoration: "none" }}>
              ← Torna alle camere
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
