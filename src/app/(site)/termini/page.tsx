export default function TerminiPage() {
  const updated = "7 maggio 2026";

  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            Legale
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.02em", color: "var(--bb-blue-ink)", margin: "0 0 8px" }}>
            Termini e Condizioni
          </h1>
          <p style={{ fontSize: 14, color: "var(--bb-ink-mute)", margin: 0 }}>Ultimo aggiornamento: {updated}</p>
        </div>
      </section>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, fontSize: 15, lineHeight: 1.8, color: "var(--bb-ink-soft)" }}>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>1. Titolare e struttura</h2>
            <p style={{ margin: 0 }}>
              Il servizio è offerto da <strong style={{ color: "var(--bb-blue-ink)" }}>Bed&Bed di Maio Luca</strong>, con sede a Messina (ME), Italia.
              Email: <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)" }}>info@bedandbed.it</a>.
              Le strutture operate sono: Bed&Bed Atelier (Torre Faro), Bed&Bed Ai Laghi (Ganzirri) e Bed&Bed Policlinico — tutte situate nel Comune di Messina.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>2. Prenotazione e conferma</h2>
            <p style={{ margin: "0 0 12px" }}>
              La prenotazione si intende confermata al ricevimento del pagamento (o della caparra, secondo il metodo scelto) e della relativa email di conferma con il codice prenotazione.
            </p>
            <p style={{ margin: 0 }}>
              Il titolare si riserva il diritto di annullare una prenotazione in casi eccezionali (forza maggiore, indisponibilità improvvisa della camera), rimborsando integralmente l&apos;importo versato entro 5 giorni lavorativi.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>3. Check-in e check-out</h2>
            <p style={{ margin: "0 0 12px" }}>
              Check-in: dalle ore <strong>15:00</strong>. Check-out: entro le ore <strong>11:00</strong>.
              Il codice di accesso verrà comunicato via WhatsApp entro 24 ore dall&apos;arrivo previsto.
            </p>
            <p style={{ margin: 0 }}>
              Arrivi anticipati o partenze tardive sono soggetti a disponibilità e devono essere concordati in anticipo. Possono comportare un supplemento.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>4. Cancellazione e rimborsi</h2>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Cancellazione gratuita</strong> fino a 48 ore prima del check-in: rimborso integrale.</li>
              <li><strong>Cancellazione entro 48 ore</strong> dal check-in: addebito di 1 notte.</li>
              <li><strong>No-show</strong> (mancato arrivo senza disdetta): addebito dell&apos;intera prenotazione.</li>
              <li>Per prenotazioni in periodi di alta stagione (luglio–agosto) o eventi speciali, le condizioni possono variare e saranno comunicate al momento della prenotazione.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>5. Pagamento</h2>
            <p style={{ margin: 0 }}>
              I pagamenti sono accettati tramite carta di credito/debito (Visa, Mastercard, Amex — circuito Stripe), bonifico bancario e pagamento in struttura (con caparra del 30% anticipata).
              I prezzi esposti sono comprensivi di IVA. La tassa di soggiorno, se applicabile per normativa comunale, è a carico dell&apos;ospite e viene comunicata al momento della prenotazione.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>6. Regole della struttura</h2>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Vietato fumare all&apos;interno delle camere e delle aree comuni.</li>
              <li>Non sono ammessi animali domestici, salvo accordo preventivo scritto.</li>
              <li>È richiesto il rispetto del silenzio dalle ore 22:00 alle 08:00.</li>
              <li>Non sono ammessi ospiti non registrati senza preventiva comunicazione.</li>
              <li>Il numero di ospiti non può eccedere la capienza indicata per ogni camera.</li>
              <li>Eventuali danni alla struttura o agli arredi saranno addebitati all&apos;ospite responsabile.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>7. Responsabilità</h2>
            <p style={{ margin: 0 }}>
              Il titolare non è responsabile per furto, smarrimento o danneggiamento di oggetti personali lasciati incustoditi nelle camere o nelle aree comuni. Gli ospiti sono responsabili della custodia dei propri effetti personali.
              Il titolare non risponde di disservizi causati da forza maggiore (interruzioni di corrente, guasti alla rete idrica, eventi atmosferici).
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>8. Legge applicabile e foro competente</h2>
            <p style={{ margin: 0 }}>
              I presenti termini sono disciplinati dalla legge italiana. Per qualsiasi controversia è competente in via esclusiva il Foro di Messina, salvo diversa disposizione di legge per i consumatori.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "var(--bb-blue-ink)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>9. Modifiche ai termini</h2>
            <p style={{ margin: 0 }}>
              Il titolare si riserva il diritto di modificare i presenti termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. L&apos;utilizzo continuato del servizio dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.
            </p>
          </section>

          <div style={{ borderTop: "1px solid var(--bb-line)", paddingTop: 24, fontSize: 14, color: "var(--bb-ink-mute)" }}>
            Per domande o chiarimenti: <a href="mailto:info@bedandbed.it" style={{ color: "var(--bb-blue)" }}>info@bedandbed.it</a>
          </div>

        </div>
      </div>
    </div>
  );
}
