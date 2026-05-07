"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { PROPERTIES } from "@/lib/properties";

interface SearchBarProps {
  initialStruttura?: string;
  initialCheckin?: string;
  initialCheckout?: string;
  initialOspiti?: number;
  compact?: boolean;
}

export function SearchBar({
  initialStruttura = "",
  initialCheckin = "",
  initialCheckout = "",
  initialOspiti = 2,
  compact = false,
}: SearchBarProps) {
  const router = useRouter();
  const [struttura, setStruttura] = useState(initialStruttura);
  const [checkin, setCheckin] = useState(initialCheckin);
  const [checkout, setCheckout] = useState(initialCheckout);
  const [ospiti, setOspiti] = useState(initialOspiti);
  const [error, setError] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!checkin || !checkout) {
      setError("Seleziona le date di check-in e check-out.");
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      setError("Il check-out deve essere dopo il check-in.");
      return;
    }
    setError("");
    const params = new URLSearchParams({
      checkin,
      checkout,
      ospiti: String(ospiti),
      ...(struttura ? { struttura } : {}),
    });
    router.push(`/camere/disponibilita?${params}`);
  }

  const fieldLabel: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: compact ? "rgba(251,247,238,.7)" : "var(--bb-blue-ink)",
    marginBottom: 6,
    display: "block",
  };

  const fieldInput: React.CSSProperties = {
    fontFamily: "var(--bb-sans)",
    fontSize: 15,
    padding: "12px 14px",
    background: "var(--bb-white)",
    border: "1px solid var(--bb-line)",
    borderRadius: "var(--r-md)",
    color: "var(--bb-ink)",
    width: "100%",
    outline: "none",
  };

  return (
    <form onSubmit={handleSearch}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: compact
            ? "1fr 1fr 1fr 80px 160px"
            : "1fr 1fr 1fr 100px auto",
          gap: 12,
          alignItems: "flex-end",
        }}
      >
        {/* Struttura */}
        <div>
          <label style={fieldLabel}>Struttura</label>
          <select
            value={struttura}
            onChange={(e) => setStruttura(e.target.value)}
            style={fieldInput}
          >
            <option value="">Tutte le strutture</option>
            {PROPERTIES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} — {p.location}
              </option>
            ))}
          </select>
        </div>

        {/* Check-in */}
        <div>
          <label style={fieldLabel}>Check-in</label>
          <input
            type="date"
            value={checkin}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckin(e.target.value)}
            style={fieldInput}
            required
          />
        </div>

        {/* Check-out */}
        <div>
          <label style={fieldLabel}>Check-out</label>
          <input
            type="date"
            value={checkout}
            min={checkin || new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckout(e.target.value)}
            style={fieldInput}
            required
          />
        </div>

        {/* Ospiti */}
        <div>
          <label style={fieldLabel}>Ospiti</label>
          <select
            value={ospiti}
            onChange={(e) => setOspiti(Number(e.target.value))}
            style={fieldInput}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div>
          {!compact && <div style={{ height: 23 }} />}
          <Button
            variant="accent"
            size="md"
            type="submit"
            style={{ width: "100%", whiteSpace: "nowrap" }}
          >
            Cerca camere
          </Button>
        </div>
      </div>

      {error && (
        <p style={{ color: "var(--bb-error)", fontSize: 13, marginTop: 10 }}>
          {error}
        </p>
      )}
    </form>
  );
}
