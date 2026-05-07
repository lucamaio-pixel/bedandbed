"use client";

import { useState } from "react";

interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map(({ q, a }, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid var(--bb-line)",
            background: open === i ? "var(--bb-white)" : "transparent",
            transition: "background .15s",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", textAlign: "left", background: "none", border: "none",
              padding: "20px 0", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
            }}
          >
            <span style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", letterSpacing: "-0.01em" }}>
              {q}
            </span>
            <span style={{
              width: 28, height: 28, borderRadius: "50%",
              background: open === i ? "var(--bb-blue)" : "var(--bb-stone)",
              color: open === i ? "white" : "var(--bb-ink-mute)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 300, flexShrink: 0,
              transition: "background .15s, transform .2s",
              transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 20, paddingRight: 44 }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
