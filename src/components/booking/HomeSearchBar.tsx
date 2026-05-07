"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROPERTIES } from "@/lib/properties";

const PROMO_CODES: Record<string, number> = {
  DIRETTO10: 10,
  BEDANDBED10: 10,
  BENVENUTO: 5,
};

export function HomeSearchBar() {
  const router = useRouter();
  const [struttura, setStruttura] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [ospiti, setOspiti] = useState("2");
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState<number | null>(null);

  function handlePromoChange(val: string) {
    const code = val.toUpperCase();
    setPromo(code);
    setPromoApplied(PROMO_CODES[code] ?? null);
  }

  function handleSearch() {
    if (!checkin || !checkout) return;
    const params = new URLSearchParams({ checkin, checkout, ospiti });
    if (struttura) params.set("struttura", struttura);
    if (promoApplied !== null) params.set("promo", promo);
    router.push(`/camere/disponibilita?${params}`);
  }

  const sectionLabel: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: "var(--bb-ink-mute)",
    marginBottom: 4,
    display: "block",
  };

  const nights =
    checkin && checkout
      ? Math.max(
          0,
          Math.round(
            (new Date(checkout).getTime() - new Date(checkin).getTime()) /
              86400000
          )
        )
      : null;

  return (
    <div
      className="bb-search-bar"
      style={{
        background: "var(--bb-white)",
        border: "1px solid var(--bb-line)",
        borderRadius: "var(--r-xl)",
        boxShadow: "0 4px 32px rgba(10,30,60,.10)",
      }}
    >
      {/* STRUTTURA */}
      <div style={{ padding: "20px 24px", borderRight: "1px solid var(--bb-line)" }}>
        <label style={sectionLabel}>Struttura</label>
        <select
          value={struttura}
          onChange={(e) => setStruttura(e.target.value)}
          style={{
            fontFamily: "var(--bb-sans)",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--bb-blue-ink)",
            background: "none",
            border: "none",
            outline: "none",
            width: "100%",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <option value="">Tutte le strutture</option>
          {PROPERTIES.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
        {!struttura && (
          <div style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 2 }}>
            {PROPERTIES.map((p) => p.name).join(" · ")}
          </div>
        )}
      </div>

      {/* DATE */}
      <div style={{ padding: "20px 24px", borderRight: "1px solid var(--bb-line)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={sectionLabel}>Check-in</label>
          <input
            type="date"
            value={checkin}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckin(e.target.value)}
            style={{
              fontFamily: "var(--bb-sans)",
              fontWeight: 600,
              fontSize: 14,
              color: checkin ? "var(--bb-blue-ink)" : "var(--bb-ink-mute)",
              background: "none",
              border: "none",
              outline: "none",
              padding: 0,
              cursor: "pointer",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label style={sectionLabel}>Check-out</label>
          <input
            type="date"
            value={checkout}
            min={checkin || new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckout(e.target.value)}
            style={{
              fontFamily: "var(--bb-sans)",
              fontWeight: 600,
              fontSize: 14,
              color: checkout ? "var(--bb-blue-ink)" : "var(--bb-ink-mute)",
              background: "none",
              border: "none",
              outline: "none",
              padding: 0,
              cursor: "pointer",
              width: "100%",
            }}
          />
          {nights !== null && nights > 0 && (
            <div style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 2 }}>
              {nights} {nights === 1 ? "notte" : "notti"}
            </div>
          )}
        </div>
      </div>

      {/* OSPITI */}
      <div style={{ padding: "20px 24px", borderRight: "1px solid var(--bb-line)" }}>
        <label style={sectionLabel}>Ospiti</label>
        <select
          value={ospiti}
          onChange={(e) => setOspiti(e.target.value)}
          style={{
            fontFamily: "var(--bb-sans)",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--bb-blue-ink)",
            background: "none",
            border: "none",
            outline: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "ospite" : "ospiti"}
            </option>
          ))}
        </select>
        <div style={{ fontSize: 12, color: "var(--bb-ink-mute)", marginTop: 2 }}>Bambini · su richiesta</div>
      </div>

      {/* CODICE PROMO */}
      <div style={{ padding: "20px 24px", borderRight: "1px solid var(--bb-line)" }}>
        <label style={sectionLabel}>Codice promo</label>
        <input
          type="text"
          value={promo}
          onChange={(e) => handlePromoChange(e.target.value)}
          placeholder="Hai un codice?"
          style={{
            fontFamily: "var(--bb-sans)",
            fontWeight: promoApplied !== null ? 700 : 600,
            fontSize: 14,
            color: promoApplied !== null ? "var(--bb-success)" : "var(--bb-blue-ink)",
            background: "none",
            border: "none",
            outline: "none",
            padding: 0,
            width: "100%",
          }}
        />
        {promoApplied !== null && (
          <div style={{ fontSize: 12, color: "var(--bb-success)", marginTop: 2, fontWeight: 600 }}>
            −{promoApplied}% applicato
          </div>
        )}
        {promo && promoApplied === null && (
          <div style={{ fontSize: 12, color: "var(--bb-error)", marginTop: 2 }}>
            Codice non valido
          </div>
        )}
      </div>

      {/* CERCA */}
      <button
        onClick={handleSearch}
        disabled={!checkin || !checkout}
        style={{
          background: "var(--bb-blue)",
          color: "white",
          border: "none",
          padding: "0 32px",
          fontFamily: "var(--bb-sans)",
          fontWeight: 700,
          fontSize: 15,
          cursor: checkin && checkout ? "pointer" : "not-allowed",
          opacity: checkin && checkout ? 1 : 0.5,
          display: "flex",
          alignItems: "center",
          gap: 6,
          whiteSpace: "nowrap",
          transition: "background .15s",
        }}
        onMouseEnter={(e) => { if (checkin && checkout) (e.currentTarget as HTMLButtonElement).style.background = "var(--bb-blue-ink)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bb-blue)"; }}
      >
        Cerca →
      </button>
    </div>
  );
}
