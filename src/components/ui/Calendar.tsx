"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type DayState = "normal" | "muted" | "in" | "start" | "end";

interface CalendarDay {
  day: number;
  state: DayState;
}

interface CalendarProps {
  month?: string;
  days?: CalendarDay[];
}

const WEEKDAYS = ["L", "M", "M", "G", "V", "S", "D"];

const defaultDays: CalendarDay[] = [
  { day: 23, state: "muted" }, { day: 24, state: "muted" }, { day: 25, state: "muted" },
  { day: 26, state: "muted" }, { day: 27, state: "muted" }, { day: 28, state: "muted" },
  { day: 1, state: "normal" },
  ...[2,3,4,5,6,7,8,9,10,11].map(d => ({ day: d, state: "normal" as DayState })),
  { day: 12, state: "start" }, { day: 13, state: "in" }, { day: 14, state: "in" }, { day: 15, state: "end" },
  ...[16,17,18,19,20,21,22,23,24,25,26,27,28,29].map(d => ({ day: d, state: "normal" as DayState })),
];

const dayStyle: Record<DayState, string> = {
  normal: "hover:bg-[rgba(10,77,126,.06)] cursor-pointer",
  muted:  "text-bb-ink-mute opacity-40",
  in:     "bg-[rgba(10,77,126,.1)] text-bb-blue",
  start:  "bg-bb-blue text-bb-white font-semibold",
  end:    "bg-bb-blue text-bb-white font-semibold",
};

export function Calendar({
  month = "Marzo 2026",
  days = defaultDays,
}: CalendarProps) {
  return (
    <div
      style={{
        background: "var(--bb-white)",
        border: "1px solid var(--bb-line)",
        borderRadius: "var(--r-lg)",
        padding: 16,
        maxWidth: 280,
      }}
    >
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 14, color: "var(--bb-ink-mute)", cursor: "pointer" }}>←</span>
        <span
          style={{
            fontFamily: "var(--bb-serif)",
            fontWeight: 600,
            fontSize: 16,
            color: "var(--bb-blue-ink)",
          }}
        >
          {month}
        </span>
        <span style={{ fontSize: 14, color: "var(--bb-ink-mute)", cursor: "pointer" }}>→</span>
      </div>

      {/* grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {WEEKDAYS.map((d, i) => (
          <div
            key={i}
            style={{
              fontSize: 11,
              color: "var(--bb-ink-mute)",
              textAlign: "center",
              padding: "4px 0",
              fontWeight: 600,
            }}
          >
            {d}
          </div>
        ))}
        {days.map(({ day, state }, i) => (
          <div
            key={i}
            className={cn(
              "aspect-square flex items-center justify-center text-[13px] rounded-[var(--r-sm)]",
              dayStyle[state]
            )}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
