import Link from "next/link";
import { Button, Badge } from "@/components/ui";

interface Props {
  searchParams: Promise<{ code?: string; method?: string }>;
}

const METHOD_LABEL: Record<string, string> = {
  card: "Carta di credito",
  transfer: "Bonifico bancario",
  onsite: "Pagamento in struttura",
};

export default async function ConfermaPage({ searchParams }: Props) {
  const { code = "BB-2026-0000", method = "card" } = await searchParams;

  return (
    <div style={{ background: "var(--bb-paper)", minHeight: "100vh" }}>

      {/* Stepper completato */}
      <div style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "16px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          {["Cerca", "Seleziona", "I tuoi dati", "Pagamento", "Conferma"].map((label, i, arr) => (
            <div key={label} style={{ display: "flex", alignItems: "center", flex: i === arr.length - 1 ? 2 : 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--bb-success)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                  ✓
                </div>
                <span style={{ fontSize: 13, fontWeight: i === arr.length - 1 ? 600 : 400, color: "var(--bb-success)", whiteSpace: "nowrap" }}>
                  {label}
                </span>
              </div>
              {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: "var(--bb-success)", opacity: .3, margin: "0 12px" }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 32px", textAlign: "center" }}>

        {/* Icona successo */}
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(47,122,77,.1)", border: "2px solid var(--bb-success)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 36 }}>
          ✓
        </div>

        <Badge variant="green" style={{ marginBottom: 20 }}>Prenotazione confermata</Badge>

        <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 42, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--bb-blue-ink)", margin: "0 0 14px" }}>
          Grazie!<br />Ci vediamo a Messina.
        </h1>
        <p style={{ fontSize: 16, color: "var(--bb-ink-soft)", lineHeight: 1.65, margin: "0 0 36px" }}>
          {method === "transfer"
            ? "Riceverai la conferma definitiva entro 24h dal ricevimento del bonifico."
            : "Abbiamo inviato la conferma al tuo indirizzo email con tutti i dettagli e le istruzioni per il check-in."}
        </p>

        {/* Codice prenotazione */}
        <div style={{ background: "var(--bb-white)", border: "2px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: "24px 32px", marginBottom: 32, display: "inline-block", minWidth: 320 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--bb-ink-mute)", marginBottom: 8 }}>
            Codice prenotazione
          </div>
          <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 700, fontSize: 32, letterSpacing: ".04em", color: "var(--bb-blue-ink)" }}>
            {code}
          </div>
          <div style={{ fontSize: 13, color: "var(--bb-ink-mute)", marginTop: 8 }}>
            Metodo: {METHOD_LABEL[method] ?? method}
          </div>
        </div>

        {/* Prossimi passi */}
        <div style={{ background: "var(--bb-cream)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: 24, textAlign: "left", marginBottom: 32 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "var(--bb-blue-ink)", marginBottom: 16 }}>
            Cosa succede adesso
          </div>
          {[
            { icon: "📧", text: "Controlla l'email — trovi la conferma con tutti i dettagli" },
            { icon: "📱", text: "Riceverai il codice di accesso 24h prima del check-in su WhatsApp" },
            { icon: "🗺️", text: "Nella conferma trovi l'indirizzo esatto e come raggiungerci" },
            { icon: "💬", text: "Per qualsiasi necessità scrivici — rispondiamo 7 giorni su 7, 7–23" },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", gap: 12, fontSize: 14, color: "var(--bb-ink-soft)", padding: "8px 0", borderBottom: "1px solid var(--bb-line)", lineHeight: 1.5 }}>
              <span style={{ flexShrink: 0 }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

        {method === "transfer" && (
          <div style={{ background: "rgba(184,118,30,.07)", border: "1px solid rgba(184,118,30,.25)", borderRadius: "var(--r-lg)", padding: 20, textAlign: "left", marginBottom: 32 }}>
            <div style={{ fontWeight: 600, color: "var(--bb-warning)", marginBottom: 8 }}>⚠ Istruzioni bonifico</div>
            <p style={{ fontSize: 14, color: "var(--bb-ink-soft)", margin: 0, lineHeight: 1.6 }}>
              Esegui il bonifico con causale <strong>{code}</strong> entro 24h. La prenotazione si conferma al ricevimento.
              Le coordinate bancarie le trovi nell&apos;email di conferma.
            </p>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" asChild>
            <Link href="/">Torna alla home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/strutture">Scopri le strutture</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
