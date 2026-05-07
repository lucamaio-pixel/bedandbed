import { Accordion } from "@/components/ui/Accordion";
import Link from "next/link";

const FAQ_SECTIONS = [
  {
    title: "Prenotazione e disponibilità",
    items: [
      {
        q: "Come posso prenotare una camera?",
        a: "Puoi prenotare direttamente dal nostro sito: cerca la struttura e le date nel motore di ricerca, seleziona la camera, inserisci i tuoi dati e scegli il metodo di pagamento. In alternativa scrivici su WhatsApp e ti aiutiamo noi.",
      },
      {
        q: "Posso prenotare per lo stesso giorno?",
        a: "Sì, accettiamo prenotazioni last minute. Se trovi disponibilità sul sito puoi prenotare subito. Per arrivi nelle prossime ore ti consigliamo di scriverci anche su WhatsApp per confermare il check-in.",
      },
      {
        q: "Le camere sono sempre disponibili sul sito?",
        a: "Il calendario viene aggiornato manualmente. In caso di dubbio o date ravvicinate, contattaci direttamente — rispondiamo entro pochi minuti tutti i giorni dalle 7 alle 23.",
      },
      {
        q: "Posso fare una richiesta per più notti (soggiorno lungo)?",
        a: "Assolutamente sì! Per soggiorni di 7 notti o più abbiamo tariffe speciali. Scrivici tramite il modulo contatti o su WhatsApp e prepariamo un preventivo personalizzato.",
      },
    ],
  },
  {
    title: "Check-in e check-out",
    items: [
      {
        q: "A che ora posso fare il check-in?",
        a: "Il check-in standard è dalle 15:00. Comunichiamo il codice di accesso via WhatsApp 24 ore prima del tuo arrivo, così puoi entrare autonomamente in qualsiasi momento dalla mattina concordata.",
      },
      {
        q: "A che ora devo lasciare la camera?",
        a: "Il check-out è entro le 11:00. Se hai bisogno di lasciare i bagagli qualche ora in più, scrivici: facciamo del nostro meglio per accontendarti quando la struttura lo permette.",
      },
      {
        q: "C'è qualcuno ad accogliermi all'arrivo?",
        a: "L'accesso è self check-in tramite codice digitale. Riceverai tutte le istruzioni via WhatsApp prima dell'arrivo. Siamo sempre raggiungibili in caso di problemi.",
      },
      {
        q: "Posso arrivare di notte?",
        a: "Sì, grazie al self check-in con codice puoi arrivare a qualsiasi ora, purché la prenotazione sia già confermata. Avvisaci semplicemente dell'orario previsto.",
      },
    ],
  },
  {
    title: "Pagamento e cancellazione",
    items: [
      {
        q: "Quali metodi di pagamento accettate?",
        a: "Accettiamo carta di credito/debito (Visa, Mastercard, Amex) tramite Stripe, bonifico bancario (conferma entro 24h dal ricevimento) e pagamento in struttura con caparra del 30% al momento della prenotazione.",
      },
      {
        q: "Qual è la politica di cancellazione?",
        a: "Cancellazione gratuita fino a 48 ore prima del check-in. Dopo tale termine o in caso di no-show viene addebitata la prima notte. Per soggiorni speciali o periodi di alta stagione le condizioni potrebbero variare.",
      },
      {
        q: "Come funziona il bonifico bancario?",
        a: "Dopo aver confermato la prenotazione ricevi via email le coordinate bancarie. Il bonifico va eseguito entro 24 ore con causale il codice prenotazione. La camera viene bloccata a tuo nome durante questo periodo.",
      },
      {
        q: "Posso modificare la mia prenotazione?",
        a: "Sì, contattaci il prima possibile via WhatsApp o email. Le modifiche sono soggette a disponibilità e alle condizioni vigenti al momento della prenotazione originale.",
      },
    ],
  },
  {
    title: "Le strutture",
    items: [
      {
        q: "Dove si trovano le vostre strutture?",
        a: "Abbiamo tre strutture a Messina: Bed&Bed Atelier in zona Torre Faro (punta nord, fronte Stretto), Bed&Bed Ai Laghi a Ganzirri (laghi di Ganzirri) e Bed&Bed Policlinico vicino all'ospedale universitario.",
      },
      {
        q: "C'è il parcheggio?",
        a: "Dipende dalla struttura. Contattaci e ti indichiamo la soluzione migliore per dove hai prenotato — in zona Torre Faro e Ganzirri ci sono parcheggi nelle vicinanze facilmente raggiungibili.",
      },
      {
        q: "Gli animali sono ammessi?",
        a: "Al momento non accettiamo animali nelle nostre strutture. Contattaci per casi particolari: valutiamo sempre le richieste individuali.",
      },
      {
        q: "C'è la colazione inclusa?",
        a: "Le nostre strutture non offrono colazione inclusa, ma ogni camera è dotata di quello che serve per preparare caffè e piccola colazione. Nelle vicinanze ci sono ottimi bar e pasticcerie siciliane.",
      },
    ],
  },
  {
    title: "Messina e dintorni",
    items: [
      {
        q: "Come si raggiunge Messina?",
        a: "Messina si raggiunge in aereo (aeroporto di Catania, 45 min in auto), in treno (stazione centrale con traghetti per la terraferma), in auto tramite traghetto da Villa San Giovanni o via autostrada dalla Calabria.",
      },
      {
        q: "Vale la pena visitare Messina?",
        a: "Assolutamente sì! Messina offre il Duomo con orologio astronomico, la Fontana di Orione, il museo Regionale, il lungomare panoramico sullo Stretto e la vicinanza alla Costa Viola e alle Eolie.",
      },
      {
        q: "È possibile visitare la Sicilia da Messina?",
        a: "Messina è il punto di ingresso ideale per la Sicilia orientale: Taormina (45 min), Etna (1h), Siracusa (2h), Cefalù (2h). Perfetta come base per esplorare l'isola.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
            FAQ
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--bb-blue-ink)" }}>
              Domande<br />
              <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>frequenti</em>
            </h1>
            <p style={{ maxWidth: 380, color: "var(--bb-ink-soft)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Tutto quello che vuoi sapere su prenotazioni, check-in, pagamenti e le nostre strutture a Messina.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 32px" }}>

        {FAQ_SECTIONS.map((section) => (
          <div key={section.title} style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em", color: "var(--bb-blue-ink)", margin: "0 0 4px", paddingBottom: 16, borderBottom: "2px solid var(--bb-blue)", display: "inline-block" }}>
              {section.title}
            </h2>
            <div style={{ marginTop: 24 }}>
              <Accordion items={section.items} />
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ background: "var(--bb-blue)", borderRadius: "var(--r-xl)", padding: "40px 48px", textAlign: "center", marginTop: 32 }}>
          <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 26, color: "white", marginBottom: 10, letterSpacing: "-0.01em" }}>
            Non hai trovato la risposta?
          </div>
          <p style={{ color: "rgba(255,255,255,.75)", fontSize: 15, margin: "0 0 24px", lineHeight: 1.6 }}>
            Scrivici su WhatsApp o via email — rispondiamo entro pochi minuti tutti i giorni.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/39XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "white", padding: "12px 24px", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
            >
              💬 WhatsApp
            </a>
            <Link
              href="/contatti"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.15)", color: "white", padding: "12px 24px", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.25)" }}
            >
              Scrivi un messaggio →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
