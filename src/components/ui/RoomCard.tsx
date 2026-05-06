import { ReactNode } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Chip } from "./Chip";

export interface RoomCardProps {
  name: string;
  badgeLabel: string;
  photoBg?: string;
  features: string[];
  price: number;
  priceNote?: string;
  onBook?: () => void;
}

export function RoomCard({
  name,
  badgeLabel,
  photoBg = "linear-gradient(135deg, #5e89b0 0%, #3a6589 100%)",
  features,
  price,
  priceNote = "A NOTTE",
  onBook,
}: RoomCardProps) {
  return (
    <article
      style={{
        background: "var(--bb-white)",
        border: "1px solid var(--bb-line)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* photo area */}
      <div
        style={{
          aspectRatio: "4/3",
          background: photoBg,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(45deg, rgba(255,255,255,.04) 0 8px, transparent 8px 16px)",
          }}
        />
        <Badge
          variant="blue"
          style={{
            position: "relative",
            zIndex: 1,
            background: "var(--bb-white)",
            color: "var(--bb-blue)",
          }}
        >
          {badgeLabel}
        </Badge>
      </div>

      {/* body */}
      <div
        style={{
          padding: "18px 18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--bb-serif)",
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: "-0.01em",
            color: "var(--bb-blue-ink)",
            margin: 0,
          }}
          dangerouslySetInnerHTML={{ __html: name }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {features.map((f) => (
            <Chip key={f}>{f}</Chip>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            paddingTop: 12,
            borderTop: "1px solid var(--bb-line)",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontFamily: "var(--bb-serif)",
              fontWeight: 600,
              fontSize: 22,
              color: "var(--bb-blue-ink)",
            }}
          >
            {price}€
            <small
              style={{
                fontFamily: "var(--bb-sans)",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--bb-ink-mute)",
                display: "block",
                letterSpacing: ".04em",
              }}
            >
              {priceNote}
            </small>
          </div>
          <Button size="sm" variant="primary" onClick={onBook}>
            Prenota
          </Button>
        </div>
      </div>
    </article>
  );
}
