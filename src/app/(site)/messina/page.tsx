import Link from "next/link";
import { Button } from "@/components/ui";

const CITY_HIGHLIGHTS = [
  {
    icon: "⛪",
    title: "Il Duomo e l'Orologio Astronomico",
    desc: "Il campanile del Duomo ospita uno degli orologi astronomici più grandi del mondo. Ogni giorno a mezzogiorno lo spettacolo meccanico richiama visitatori da tutta la Sicilia.",
  },
  {
    icon: "🌊",
    title: "Lo Stretto di Messina",
    desc: "Il punto più stretto tra Sicilia e Calabria — appena 3 km. Dalla punta di Torre Faro si vedono entrambe le coste e si percepisce la corrente che divide due mari.",
  },
  {
    icon: "🏛️",
    title: "Museo Regionale di Messina",
    desc: "Uno dei musei più ricchi della Sicilia. Ospita opere di Caravaggio (la Resurrezione di Lazzaro e l'Adorazione dei Pastori), Antonello da Messina e sculture rinascimentali.",
  },
  {
    icon: "🐟",
    title: "Ganzirri e i Laghi",
    desc: "Il borgo di pescatori tra il Lago Grande e lo Stretto. I ristoranti sul bordo del lago servono il pesce spada freschissimo e le cozze allevate nelle acque tranquille del lago.",
  },
  {
    icon: "🌅",
    title: "Lungomare e Falce",
    desc: "Il porto falcato che dà nome alla città. Il lungomare è il cuore della vita sociale messinese, con la passeggiata sul porto, i bar e la vista sul continente.",
  },
  {
    icon: "🎭",
    title: "Cultura e università",
    desc: "Messina è una città universitaria vivace. L'Università degli Studi, il Conservatorio e i teatri animano la città tutto l'anno con eventi, concerti e mostre.",
  },
];

const DAY_TRIPS = [
  {
    dest: "Taormina",
    time: "45 min",
    dir: "Sud · A18",
    color: "#C8860A",
    icon: "🏛️",
    highlights: ["Teatro Greco-Romano", "Isola Bella", "Corso Umberto", "Vista sull'Etna"],
    desc: "La perla della Sicilia. Il teatro greco affacciato sul mare è uno dei panorami più fotografati del Mediterraneo.",
  },
  {
    dest: "Etna",
    time: "1h – 1h 30min",
    dir: "Sud-Ovest · A18 + SP92",
    color: "#8C3A1A",
    icon: "🌋",
    highlights: ["Cratere Centrale (2.900 m)", "Piano Provenzana", "Grotte laviche", "Funivia"],
    desc: "Il vulcano attivo più alto d'Europa. D'estate si sale in jeep ai crateri, d'inverno si scia sui fianchi innevati.",
  },
  {
    dest: "Isole Eolie",
    time: "1h – 2h (aliscafo)",
    dir: "Nord · Porto di Milazzo",
    color: "#0A4D7E",
    icon: "🏝️",
    highlights: ["Stromboli (vulcano attivo)", "Vulcano (fanghi termali)", "Lipari", "Salina (Il Postino)"],
    desc: "Arcipelago UNESCO. Stromboli erutta ogni 20 minuti — lo spettacolo notturno dalla barca è indimenticabile.",
  },
  {
    dest: "Cefalù",
    time: "1h 45min",
    dir: "Ovest · A20",
    color: "#2F6B3E",
    icon: "🏖️",
    highlights: ["Duomo normanno UNESCO", "Rocca di Cefalù", "Centro medievale", "Spiagge sabbiose"],
    desc: "Il borgo medievale più fotografato della Sicilia. Il Duomo normanno e la Rocca dominano una baia cristallina.",
  },
  {
    dest: "Siracusa",
    time: "2h",
    dir: "Sud · A18",
    color: "#6B3A8C",
    icon: "🏺",
    highlights: ["Ortigia (isola storica)", "Teatro Greco", "Parco Archeologico", "Fonte Aretusa"],
    desc: "Magna Grecia pura. Ortigia è un'isola storica percorribile a piedi, con il mercato del pesce e le chiese barocche.",
  },
  {
    dest: "Costa Tirrenica",
    time: "30–60 min",
    dir: "Ovest · A20",
    color: "#0A7E6A",
    icon: "🏊",
    highlights: ["Milazzo", "Capo Milazzo", "Spiagge di Oliveri", "Fondali di Tindari"],
    desc: "La costa tirrenica siciliana è diversa dalla ionica: spiagge sabbiose più lunghe, acque calme e borghi di pescatori.",
  },
];

export default function MessinaPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section style={{ background: "var(--bb-blue-ink)", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: -80, width: 500, height: 500, borderRadius: "50%", background: "rgba(242,197,0,.05)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-yellow)", marginBottom: 16 }}>
            Messina · Sicilia
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(40px,6vw,68px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--bb-cream)", margin: "0 0 20px", maxWidth: 780 }}>
            La porta della Sicilia,{" "}
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--bb-yellow)" }}>nel mezzo di tutto</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(251,247,238,.75)", maxWidth: 600, margin: "0 0 40px" }}>
            Messina non è solo una città da visitare — è la base perfetta per esplorare la Sicilia. Mar Ionio a est, Mar Tirreno a ovest, Eolie a nord e Etna a sud: tutto raggiungibile in meno di due ore.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/camere">Prenota la tua base</Link>
          </Button>
        </div>
      </section>

      {/* STRATEGIC POSITION */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Posizione strategica
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: "0 0 16px" }}>
              Il cuore del Mediterraneo orientale
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--bb-ink-soft)", maxWidth: 640, margin: "0 auto" }}>
              All'incrocio tra lo Ionio e il Tirreno, Messina è il punto di ingresso naturale per chi arriva dal Nord Italia o dall'Europa. Da qui, in meno di due ore, raggiungi le mete più belle della Sicilia orientale — e non solo.
            </p>
          </div>

          {/* The 4 directions */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { dir: "NORD", label: "Isole Eolie", sub: "Stromboli, Vulcano, Lipari, Salina", icon: "🏝️", time: "1–2h in aliscafo" },
              { dir: "SUD", label: "Taormina & Etna", sub: "Costa ionica, Etna, Siracusa, Catania", icon: "🌋", time: "45 min – 2h in auto" },
              { dir: "OVEST", label: "Costa Tirrenica", sub: "Cefalù, Milazzo, Tindari, Palermo", icon: "🏖️", time: "30 min – 2h in auto" },
              { dir: "EST", label: "Stretto di Messina", sub: "Calabria, Aspromonte, Costa dei Gelsomini", icon: "⛴️", time: "20 min in traghetto" },
            ].map((d) => (
              <div
                key={d.dir}
                style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: "28px 20px", textAlign: "center" }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{d.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", color: "var(--bb-blue)", textTransform: "uppercase", marginBottom: 8 }}>
                  {d.dir}
                </div>
                <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>
                  {d.label}
                </div>
                <div style={{ fontSize: 12, color: "var(--bb-ink-soft)", lineHeight: 1.5, marginBottom: 10 }}>
                  {d.sub}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue)", background: "rgba(10,77,126,.06)", borderRadius: "var(--r-pill)", padding: "4px 10px", display: "inline-block" }}>
                  {d.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY TRIPS */}
      <section style={{ padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Gite da Messina
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: 0 }}>
              Tutto a portata di giornata
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {DAY_TRIPS.map((trip) => (
              <div
                key={trip.dest}
                style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}
              >
                <div style={{ background: trip.color, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 28 }}>{trip.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 22, color: "white", letterSpacing: "-0.01em" }}>
                        {trip.dest}
                      </div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginTop: 2 }}>{trip.dir}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>{trip.time}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>da Messina</div>
                  </div>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--bb-ink-soft)", margin: "0 0 16px" }}>
                    {trip.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {trip.highlights.map((h) => (
                      <span key={h} style={{ fontSize: 11, fontWeight: 500, color: "var(--bb-ink-mute)", background: "var(--bb-stone)", borderRadius: "var(--r-pill)", padding: "3px 8px" }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY HIGHLIGHTS */}
      <section style={{ background: "var(--bb-cream)", borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Da non perdere
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: 0 }}>
              Messina, la città
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {CITY_HIGHLIGHTS.map((h) => (
              <div key={h.title} style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{h.icon}</div>
                <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 18, color: "var(--bb-blue-ink)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                  {h.title}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section style={{ padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
                Come arrivare
              </div>
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 20px" }}>
                Raggiungi Messina
              </h2>
              {[
                { icon: "✈️", label: "Aereo", text: "Aeroporto di Catania (CTA) — 45 min in auto. Aeroporto di Reggio Calabria (REG) — 40 min in auto + traghetto." },
                { icon: "🚗", label: "Auto", text: "Autostrada A18 (da Catania), A20 (da Palermo). Traghetto da Villa San Giovanni: attraversamento in 20 minuti." },
                { icon: "🚂", label: "Treno", text: "Stazione Messina Centrale — i treni Intercity salgono direttamente sul traghetto. Collegamento diretto con Roma, Napoli e il Nord." },
                { icon: "⛴️", label: "Traghetto", text: "Caronte & Tourist e RFI operano da Villa San Giovanni tutto il giorno. Traversata in 20 minuti." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--bb-blue-ink)", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "var(--bb-ink-soft)", lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
                Quando venire
              </div>
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 20px" }}>
                Clima e stagioni
              </h2>
              {[
                { period: "Maggio – Giugno", desc: "Il momento migliore. Mare già caldo, folla non ancora estiva, prezzi ragionevoli. Ideale per le gite alle Eolie.", temp: "22–28°C" },
                { period: "Luglio – Agosto", desc: "Alta stagione. Caldo intenso ma compensato dal mare. Le Eolie sono all'apice. Prenota con anticipo.", temp: "28–35°C" },
                { period: "Settembre – Ottobre", desc: "La stagione d'oro. Mare ancora caldo, luoghi meno affollati, luce perfetta. Consigliata per Taormina.", temp: "22–28°C" },
                { period: "Novembre – Aprile", desc: "Messina è vivibile tutto l'anno. Ideale per chi viene per l'Etna innevata o per motivi di lavoro/studio.", temp: "10–18°C" },
              ].map((s) => (
                <div key={s.period} style={{ padding: "14px 0", borderBottom: "1px solid var(--bb-line)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--bb-blue-ink)" }}>{s.period}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--bb-blue)" }}>{s.temp}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--bb-ink-soft)", lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bb-blue-ink)", padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-cream)", margin: "0 0 16px" }}>
            Prenota la tua base<br />
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--bb-yellow)" }}>a Messina</em>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(251,247,238,.7)", margin: "0 0 32px", lineHeight: 1.6 }}>
            Una stanza da cui ogni mattina puoi scegliere dove andare — il vulcano, il mare, le isole o semplicemente restare a Messina.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="accent" size="lg" asChild>
              <Link href="/camere">Cerca disponibilità</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/strutture" style={{ color: "var(--bb-cream)", borderColor: "rgba(251,247,238,.3)" }}>Le nostre strutture</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
