export default function PrivacyPage() {
  const updated = "7 maggio 2026";

  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Legale
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.02em", color: "var(--bb-blue-ink)", margin: "0 0 8px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: "var(--bb-ink-mute)", margin: 0 }}>
            Informativa ai sensi dell&apos;art. 13 GDPR (Reg. UE 2016/679) — Ultimo aggiornamento: {updated}
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, fontSize: 15, lineHeight: 1.8, color: "var(--bb-ink-soft)" }}>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>1. Titolare del trattamento</h2>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--bb-blue-ink)" }}>Bed&Bed di Maio Luca</strong><br />
              Messina (ME), Italia<br />
              Email: <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)" }}>info@bedandbed.it</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>2. Dati raccolti e finalità</h2>
            <p style={{ margin: "0 0 16px" }}>Raccogliamo i seguenti dati personali:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { tipo: "Dati di prenotazione", esempi: "Nome, cognome, email, telefono, date del soggiorno, metodo di pagamento.", finalita: "Gestione della prenotazione e del rapporto contrattuale (art. 6(1)(b) GDPR)." },
                { tipo: "Dati di navigazione", esempi: "Indirizzo IP, pagine visitate, browser, sistema operativo.", finalita: "Sicurezza del sito e analisi statistica aggregata (art. 6(1)(f) GDPR — legittimo interesse)." },
                { tipo: "Dati del modulo contatti", esempi: "Nome, email, messaggio inviato.", finalita: "Risposta alla richiesta (art. 6(1)(b) GDPR)." },
                { tipo: "Dati di pagamento", esempi: "Non conserviamo dati della carta — il pagamento è elaborato da Stripe Inc. secondo la propria privacy policy.", finalita: "—" },
              ].map((row) => (
                <div key={row.tipo} style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-md)", padding: "16px 20px" }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--bb-blue-ink)", marginBottom: 4 }}>{row.tipo}</div>
                  <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", marginBottom: 4 }}>{row.esempi}</div>
                  <div style={{ fontSize: 13, color: "var(--bb-ink-mute)", fontStyle: "italic" }}>Base giuridica: {row.finalita}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>3. Conservazione dei dati</h2>
            <p style={{ margin: 0 }}>
              I dati di prenotazione sono conservati per 10 anni ai fini fiscali e contabili (obbligo di legge). I dati del modulo contatti sono conservati per 12 mesi dalla ricezione, salvo necessità di gestione di eventuali controversie. I dati di navigazione sono conservati per 90 giorni.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>4. Comunicazione a terzi</h2>
            <p style={{ margin: 0 }}>
              I dati non vengono ceduti a terzi a scopi commerciali. Possono essere comunicati a:
            </p>
            <ul style={{ margin: "12px 0 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Stripe Inc.</strong> — gestore dei pagamenti online (con sede in UE, certificato PCI DSS)</li>
              <li><strong>Vercel Inc.</strong> — hosting del sito web</li>
              <li><strong>Autorità pubbliche</strong> — in caso di obbligo di legge (Questura per comunicazione presenze ex art. 109 TULPS)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>5. Diritti dell&apos;interessato</h2>
            <p style={{ margin: "0 0 12px" }}>Hai il diritto di:</p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiederne la rettifica o la cancellazione</li>
              <li>Opporti al trattamento o richiederne la limitazione</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{ color: "var(--bb-blue)" }}>garanteprivacy.it</a>)</li>
            </ul>
            <p style={{ margin: "16px 0 0" }}>
              Per esercitare i tuoi diritti scrivi a: <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)" }}>info@bedandbed.it</a>. Risponderemo entro 30 giorni.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>6. Cookie</h2>
            <p style={{ margin: 0 }}>
              Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento (sessione, preferenze di lingua). Non utilizziamo cookie di profilazione o di terze parti a scopi pubblicitari. Non è richiesto il consenso per i soli cookie tecnici (Provvedimento Garante 10 giugno 2021).
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>7. Modifiche alla policy</h2>
            <p style={{ margin: 0 }}>
              Questa informativa può essere aggiornata per adeguamenti normativi o tecnici. La versione vigente è sempre disponibile su questa pagina con la data di aggiornamento.
            </p>
          </section>

          <div style={{ borderTop: "1px solid var(--bb-line)", paddingTop: 24, fontSize: 14, color: "var(--bb-ink-mute)" }}>
            Per domande sulla privacy: <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)" }}>info@bedandbed.it</a>
          </div>

        </div>
      </div>
    </div>
  );
}
