"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components/ui";

interface GuestFormProps {
  roomId: string;
  checkin: string;
  checkout: string;
  ospiti: string;
  struttura: string;
}

export function GuestForm({ roomId, checkin, checkout, ospiti, struttura }: GuestFormProps) {
  const router = useRouter();
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoMsg, setPromoMsg] = useState("");

  function applyPromo() {
    // Placeholder — verrà collegato all'API reale
    if (promo.toUpperCase() === "BEDANDBED10") {
      setPromoMsg("✓ Sconto 10% applicato!");
    } else {
      setPromoMsg("Codice non valido.");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams({ checkin, checkout, ospiti, struttura });
    router.push(`/camere/paga/${roomId}?${params}`);
  }

  const fieldLabel: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, letterSpacing: ".04em",
    color: "var(--bb-blue-ink)", marginBottom: 6, display: "block",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0 }}>

      {/* Dati personali */}
      <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 20 }}>Dati personali</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div><label style={fieldLabel}>Nome *</label><Input placeholder="Mario" required /></div>
          <div><label style={fieldLabel}>Cognome *</label><Input placeholder="Rossi" required /></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={fieldLabel}>Email *</label>
          <Input type="email" placeholder="mario.rossi@example.it" required />
          <span style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 4, display: "block" }}>
            Ti invieremo qui la conferma e le istruzioni per il check-in.
          </span>
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={fieldLabel}>Telefono / WhatsApp *</label>
          <Input type="tel" placeholder="+39 320 000 0000" required />
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={fieldLabel}>Paese di residenza</label>
          <select style={{ fontFamily: "var(--bb-sans)", fontSize: 15, padding: "12px 14px", background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", color: "var(--bb-ink)", width: "100%" }}>
            <option>Italia</option>
            <option>Germania</option>
            <option>Spagna</option>
            <option>Francia</option>
            <option>Regno Unito</option>
            <option>Altro</option>
          </select>
        </div>
      </div>

      {/* Note */}
      <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, marginBottom: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 16 }}>Richieste speciali</div>
        <textarea
          placeholder="Orario di arrivo previsto, esigenze particolari, allergie... (facoltativo)"
          rows={3}
          style={{ fontFamily: "var(--bb-sans)", fontSize: 14, padding: "12px 14px", background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", color: "var(--bb-ink)", width: "100%", resize: "vertical", outline: "none" }}
        />
      </div>

      {/* Codice promo */}
      <div style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 20, marginBottom: 24 }}>
        <button
          type="button"
          onClick={() => setPromoOpen(!promoOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "var(--bb-blue)", fontWeight: 600, padding: 0, display: "flex", alignItems: "center", gap: 6 }}
        >
          {promoOpen ? "▾" : "▸"} Ho un codice sconto
        </button>
        {promoOpen && (
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <Input
              placeholder="Inserisci il codice"
              value={promo}
              onChange={(e) => { setPromo(e.target.value); setPromoMsg(""); }}
              style={{ flex: 1 }}
            />
            <Button type="button" variant="accent" onClick={applyPromo}>Applica</Button>
          </div>
        )}
        {promoMsg && (
          <div style={{ marginTop: 8, fontSize: 13, color: promoMsg.startsWith("✓") ? "var(--bb-success)" : "var(--bb-error)", fontWeight: 600 }}>
            {promoMsg}
          </div>
        )}
      </div>

      {/* Privacy */}
      <div style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--bb-ink-soft)", marginBottom: 24, alignItems: "flex-start" }}>
        <input type="checkbox" required style={{ marginTop: 2, flexShrink: 0 }} />
        <span>
          Accetto i <a href="/termini" style={{ color: "var(--bb-blue)" }}>Termini e condizioni</a> e la{" "}
          <a href="/privacy" style={{ color: "var(--bb-blue)" }}>Privacy policy</a> di Bed&amp;Bed. *
        </span>
      </div>

      <Button type="submit" variant="primary" size="lg">
        Continua al pagamento →
      </Button>
    </form>
  );
}
