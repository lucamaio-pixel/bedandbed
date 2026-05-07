"use client";

import { useState } from "react";
import { Input, Button } from "@/components/ui";
import { PROPERTIES } from "@/lib/properties";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Placeholder — verrà collegato all'API /api/contact
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  }

  const fieldLabel: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, letterSpacing: ".04em",
    color: "var(--bb-blue-ink)", marginBottom: 6, display: "block",
  };

  if (sent) {
    return (
      <div style={{ background: "rgba(47,122,77,.07)", border: "1px solid rgba(47,122,77,.2)", borderRadius: "var(--r-lg)", padding: "40px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 24, color: "var(--bb-blue-ink)", marginBottom: 10 }}>
          Messaggio inviato!
        </div>
        <p style={{ color: "var(--bb-ink-soft)", fontSize: 15, margin: 0 }}>
          Risponderemo entro qualche ora. Se è urgente scrivici su WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div><label style={fieldLabel}>Nome *</label><Input placeholder="Mario" required /></div>
        <div><label style={fieldLabel}>Cognome *</label><Input placeholder="Rossi" required /></div>
      </div>

      <div>
        <label style={fieldLabel}>Email *</label>
        <Input type="email" placeholder="mario.rossi@example.it" required />
      </div>

      <div>
        <label style={fieldLabel}>Telefono / WhatsApp</label>
        <Input type="tel" placeholder="+39 320 000 0000" />
      </div>

      <div>
        <label style={fieldLabel}>Struttura di interesse</label>
        <select style={{ fontFamily: "var(--bb-sans)", fontSize: 15, padding: "12px 14px", background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", color: "var(--bb-ink)", width: "100%", outline: "none" }}>
          <option value="">Tutte / non so ancora</option>
          {PROPERTIES.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name} — {p.location}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={fieldLabel}>Oggetto *</label>
        <select style={{ fontFamily: "var(--bb-sans)", fontSize: 15, padding: "12px 14px", background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", color: "var(--bb-ink)", width: "100%", outline: "none" }}>
          <option>Informazioni disponibilità</option>
          <option>Richiesta preventivo</option>
          <option>Modifica prenotazione esistente</option>
          <option>Soggiorno lungo (7+ notti)</option>
          <option>Altro</option>
        </select>
      </div>

      <div>
        <label style={fieldLabel}>Messaggio *</label>
        <textarea
          required
          rows={5}
          placeholder="Scrivi qui la tua richiesta..."
          style={{ fontFamily: "var(--bb-sans)", fontSize: 15, padding: "12px 14px", background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", color: "var(--bb-ink)", width: "100%", resize: "vertical", outline: "none" }}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={loading} style={loading ? { opacity: .7, cursor: "not-allowed" } : {}}>
        {loading ? "Invio in corso..." : "Invia messaggio"}
      </Button>

      <p style={{ fontSize: 12, color: "var(--bb-ink-mute)", margin: 0 }}>
        I campi contrassegnati con * sono obbligatori. I tuoi dati non verranno ceduti a terzi.
      </p>
    </form>
  );
}
