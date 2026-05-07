"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components/ui";

const METHODS = [
  { id: "card", label: "Carta di credito / debito", icon: "💳", desc: "Visa, Mastercard, Amex — pagamento immediato" },
  { id: "transfer", label: "Bonifico bancario", icon: "🏦", desc: "Conferma entro 24h dal ricevimento" },
  { id: "onsite", label: "Pagamento in struttura", icon: "🏠", desc: "Caparra del 30% ora, resto al check-in" },
];

export function PaymentForm({ totale }: { totale: number }) {
  const router = useRouter();
  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Placeholder — qui andrà la chiamata all'API Stripe
    await new Promise((r) => setTimeout(r, 1500));
    const code = "BB-2026-" + Math.floor(1000 + Math.random() * 9000);
    router.push(`/camere/conferma?code=${code}&method=${method}`);
  }

  return (
    <form onSubmit={handlePay} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Metodi di pagamento */}
      <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
        {METHODS.map((m, i) => (
          <label
            key={m.id}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 20px", cursor: "pointer",
              borderBottom: i < METHODS.length - 1 ? "1px solid var(--bb-line)" : "none",
              background: method === m.id ? "rgba(10,77,126,.04)" : "transparent",
              transition: "background .12s",
            }}
          >
            <input
              type="radio"
              name="method"
              value={m.id}
              checked={method === m.id}
              onChange={() => setMethod(m.id)}
              style={{ accentColor: "var(--bb-blue)", width: 18, height: 18, flexShrink: 0 }}
            />
            <span style={{ fontSize: 20 }}>{m.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)" }}>{m.label}</div>
              <div style={{ fontSize: 13, color: "var(--bb-ink-mute)", marginTop: 2 }}>{m.desc}</div>
            </div>
            {method === m.id && <span style={{ color: "var(--bb-blue)", fontWeight: 700, fontSize: 16 }}>✓</span>}
          </label>
        ))}
      </div>

      {/* Dati carta */}
      {method === "card" && (
        <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)" }}>Dati carta</span>
            <span style={{ fontSize: 12, color: "var(--bb-ink-mute)", background: "var(--bb-stone)", padding: "2px 8px", borderRadius: "var(--r-pill)" }}>
              Powered by Stripe
            </span>
          </div>
          {/* Stripe Elements andrà qui — per ora placeholder UI */}
          <div style={{ background: "var(--bb-paper)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", padding: "14px", marginBottom: 14, fontSize: 15, color: "var(--bb-ink-mute)" }}>
            Numero carta · · · · · · · · · · · ·
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue-ink)", display: "block", marginBottom: 6 }}>Scadenza</label>
              <Input placeholder="MM / AA" />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue-ink)", display: "block", marginBottom: 6 }}>CVV</label>
              <Input placeholder="···" type="password" maxLength={4} />
            </div>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: "var(--bb-ink-mute)", display: "flex", alignItems: "center", gap: 6 }}>
            🔒 Connessione SSL sicura · Non conserviamo i dati della tua carta
          </div>
        </div>
      )}

      {/* Bonifico */}
      {method === "transfer" && (
        <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 14 }}>Dati per il bonifico</div>
          {[
            ["Intestatario", "Bed&Bed di Maio Luca"],
            ["IBAN", "IT·· XXXX XXXX XXXX XXXX XXXX XXX"],
            ["Causale", "Prenotazione Bed&Bed — inserisci il tuo nome"],
            ["Importo", `${totale}€`],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--bb-line)", fontSize: 14 }}>
              <span style={{ color: "var(--bb-ink-mute)" }}>{k}</span>
              <span style={{ fontWeight: 600, color: "var(--bb-blue-ink)" }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 14, fontSize: 13, color: "var(--bb-warning)", background: "rgba(184,118,30,.07)", borderRadius: "var(--r-md)", padding: "10px 12px" }}>
            ⚠ La prenotazione verrà confermata entro 24h dal ricevimento del bonifico.
          </div>
        </div>
      )}

      {/* In struttura */}
      {method === "onsite" && (
        <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 10 }}>Caparra 30%</div>
          <p style={{ fontSize: 14, color: "var(--bb-ink-soft)", margin: "0 0 16px", lineHeight: 1.6 }}>
            Paghi ora {Math.round(totale * 0.3)}€ come caparra (carta). Il restante {Math.round(totale * 0.7)}€ lo paghi al check-in, in contanti o carta.
          </p>
          <div style={{ background: "var(--bb-paper)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", padding: "14px", marginBottom: 14, fontSize: 15, color: "var(--bb-ink-mute)" }}>
            Numero carta · · · · · · · · · · · ·
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue-ink)", display: "block", marginBottom: 6 }}>Scadenza</label><Input placeholder="MM / AA" /></div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue-ink)", display: "block", marginBottom: 6 }}>CVV</label><Input placeholder="···" type="password" maxLength={4} /></div>
          </div>
        </div>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={loading} style={loading ? { opacity: 0.7, cursor: "not-allowed" } : {}}>
        {loading ? "Elaborazione in corso..." : method === "card" ? `Paga ${totale}€` : method === "transfer" ? "Conferma prenotazione" : `Paga caparra ${Math.round(totale * 0.3)}€`}
      </Button>

      <p style={{ fontSize: 12, color: "var(--bb-ink-mute)", textAlign: "center", margin: 0 }}>
        Cliccando confermi di aver letto e accettato i nostri Termini e condizioni.
      </p>
    </form>
  );
}
