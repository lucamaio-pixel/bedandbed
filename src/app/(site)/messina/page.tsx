import Link from "next/link";
import { Button } from "@/components/ui";

const CITY_HIGHLIGHTS = [
  {
    icon: "⛪",
    title: "Il Duomo e l'Orologio Astronomico",
    desc: "Il campanile del Duomo ospita uno degli orologi astronomici più grandi del mondo. Ogni giorno a mezzogiorno lo spettacolo meccanico richiama visitatori da tutta la Sicilia.",
    photoBg: "linear-gradient(160deg, #2a1a0a 0%, #6b4a1a 40%, #c8860a 100%)",
    photoLabel: "Duomo di Messina",
  },
  {
    icon: "🌊",
    title: "Lo Stretto di Messina",
    desc: "Il punto più stretto tra Sicilia e Calabria — appena 3 km. Dalla punta di Torre Faro si vedono entrambe le coste e si percepisce la corrente che divide due mari.",
    photoBg: "linear-gradient(160deg, #0a1a3a 0%, #0a4d7e 50%, #1a8ab8 100%)",
    photoLabel: "Stretto di Messina",
  },
  {
    icon: "🏖️",
    title: "Spiaggia di Capo Peloro",
    desc: "La punta più a nord-est della Sicilia, dove il Mar Ionio e il Mar Tirreno si incontrano visibilmente. La spiaggia è a pochi passi dalla Laguna di Capo Peloro — un ecosistema unico.",
    photoBg: "linear-gradient(160deg, #0a3a2a 0%, #0a7e5a 40%, #3ab8a0 70%, #7ad4c8 100%)",
    photoLabel: "Capo Peloro · Torre Faro",
  },
  {
    icon: "🏛️",
    title: "Museo Regionale di Messina",
    desc: "Uno dei musei più ricchi della Sicilia. Ospita opere di Caravaggio (la Resurrezione di Lazzaro e l'Adorazione dei Pastori), Antonello da Messina e sculture rinascimentali.",
    photoBg: "linear-gradient(160deg, #1a0a2a 0%, #4a2a6a 50%, #8a5aaa 100%)",
    photoLabel: "Museo Regionale",
  },
  {
    icon: "🐟",
    title: "Ganzirri e i Laghi",
    desc: "Il borgo di pescatori tra il Lago Grande e lo Stretto. I ristoranti sul bordo del lago servono il pesce spada freschissimo e le cozze allevate nelle acque tranquille del lago.",
    photoBg: "linear-gradient(160deg, #0a2a1a 0%, #1a5a3a 50%, #2a8a5a 100%)",
    photoLabel: "Laghi di Ganzirri",
  },
  {
    icon: "🌅",
    title: "Lungomare e Falce",
    desc: "Il porto falcato che dà nome alla città. Il lungomare è il cuore della vita sociale messinese, con la passeggiata sul porto, i bar e la vista sul continente.",
    photoBg: "linear-gradient(160deg, #1a0a0a 0%, #6a1a1a 30%, #c84a0a 60%, #f0a030 100%)",
    photoLabel: "Lungomare di Messina",
  },
];

const DAY_TRIPS = [
  {
    dest: "Taormina",
    time: "45 min",
    dir: "Sud · A18",
    color: "#8C4A00",
    photoBg: "linear-gradient(160deg, #1a0800 0%, #5a2a00 30%, #a06020 60%, #d4a050 80%, #7ab8d4 100%)",
    icon: "🏛️",
    highlights: ["Teatro Greco-Romano", "Isola Bella", "Corso Umberto", "Vista sull'Etna"],
    desc: "La perla della Sicilia. Il teatro greco affacciato sul mare è uno dei panorami più fotografati del Mediterraneo.",
  },
  {
    dest: "Etna",
    time: "1h – 1h 30min",
    dir: "Sud-Ovest · A18 + SP92",
    color: "#5a1a00",
    photoBg: "linear-gradient(160deg, #080808 0%, #1a0800 20%, #3a0a00 40%, #8a2a00 60%, #c84a00 80%, #f07000 100%)",
    icon: "🌋",
    highlights: ["Cratere Centrale (2.900 m)", "Piano Provenzana", "Grotte laviche", "Funivia"],
    desc: "Il vulcano attivo più alto d'Europa. D'estate si sale in jeep ai crateri, d'inverno si scia sui fianchi innevati.",
  },
  {
    dest: "Isole Eolie",
    time: "1h – 2h (aliscafo)",
    dir: "Nord · Porto di Milazzo",
    color: "#003a6a",
    photoBg: "linear-gradient(160deg, #000a1a 0%, #001a4a 30%, #002a7a 55%, #0050b0 75%, #2a8ad4 90%, #70c8f0 100%)",
    icon: "🏝️",
    highlights: ["Stromboli (vulcano attivo)", "Vulcano (fanghi termali)", "Lipari", "Salina"],
    desc: "Arcipelago UNESCO. Stromboli erutta ogni 20 minuti — lo spettacolo notturno dalla barca è indimenticabile.",
  },
  {
    dest: "Cefalù",
    time: "1h 45min",
    dir: "Ovest · A20",
    color: "#00506a",
    photoBg: "linear-gradient(160deg, #000a10 0%, #002a40 30%, #005a7a 55%, #0090a8 75%, #40c0d8 88%, #c8f0f8 100%)",
    icon: "🏖️",
    highlights: ["Duomo normanno UNESCO", "Rocca di Cefalù", "Centro medievale", "Spiagge sabbiose"],
    desc: "Il borgo medievale più fotografato della Sicilia. Il Duomo normanno e la Rocca dominano una baia cristallina.",
  },
  {
    dest: "Siracusa",
    time: "2h",
    dir: "Sud · A18",
    color: "#5a3a00",
    photoBg: "linear-gradient(160deg, #100800 0%, #3a1a00 25%, #7a4a00 50%, #c09040 70%, #7ab0d0 90%, #b0d8f0 100%)",
    icon: "🏺",
    highlights: ["Ortigia (isola storica)", "Teatro Greco", "Parco Archeologico", "Fonte Aretusa"],
    desc: "Magna Grecia pura. Ortigia è un'isola storica percorribile a piedi, con il mercato del pesce e le chiese barocche.",
  },
  {
    dest: "Costa Tirrenica",
    time: "30–60 min",
    dir: "Ovest · A20",
    color: "#004a3a",
    photoBg: "linear-gradient(160deg, #000a08 0%, #001a14 25%, #004a38 50%, #00806a 70%, #40b898 85%, #90e0d0 100%)",
    icon: "🏊",
    highlights: ["Milazzo", "Capo Milazzo", "Spiagge di Oliveri", "Fondali di Tindari"],
    desc: "La costa tirrenica siciliana è diversa dalla ionica: spiagge sabbiose più lunghe, acque calme e borghi di pescatori.",
  },
];

export default function MessinaPage() {
  return (
    <div style={{ background: "var(--bb-paper)" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #050e1a 0%, #0a2a4a 40%, #0a4d7e 70%, #1a6a9e 100%)",
        padding: "96px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles evoking the two seas */}
        <div style={{ position: "absolute", right: -100, bottom: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(10,125,180,.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, top: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(242,197,0,.04)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-yellow)", marginBottom: 16 }}>
            Messina · Sicilia
          </div>
          <h1 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: "clamp(40px,6vw,68px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--bb-cream)", margin: "0 0 20px", maxWidth: 780 }}>
            La porta della Sicilia,{" "}
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--bb-yellow)" }}>nel mezzo di tutto</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(251,247,238,.75)", maxWidth: 600, margin: "0 0 16px" }}>
            Messina non è solo una città da visitare — è la base perfetta per esplorare la Sicilia.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(251,247,238,.6)", maxWidth: 580, margin: "0 0 40px" }}>
            Mar Ionio a est, Mar Tirreno a ovest, Eolie a nord e Etna a sud: Taormina, Stromboli e le spiagge di Capo Peloro sono tutte a meno di due ore.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/camere">Prenota la tua base</Link>
          </Button>
        </div>
      </section>

      {/* STRATEGIC POSITION */}
      <section style={{ background: "var(--bb-cream)", borderBottom: "1px solid var(--bb-line)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Posizione strategica
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: "0 0 16px" }}>
              Il cuore del Mediterraneo orientale
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--bb-ink-soft)", maxWidth: 640, margin: "0 auto" }}>
              All&apos;incrocio tra lo Ionio e il Tirreno, Messina è il punto di ingresso naturale per chi arriva dal Nord Italia o dall&apos;Europa. Da qui, in meno di due ore, raggiungi le mete più belle della Sicilia orientale — e non solo.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { dir: "NORD", label: "Isole Eolie", sub: "Stromboli, Vulcano, Lipari, Salina", photoBg: "linear-gradient(160deg, #000a1a 0%, #001a4a 50%, #0060c0 100%)", time: "1–2h in aliscafo" },
              { dir: "SUD", label: "Taormina & Etna", sub: "Costa ionica, Etna, Siracusa, Catania", photoBg: "linear-gradient(160deg, #080400 0%, #3a1500 50%, #c84a00 100%)", time: "45 min – 2h in auto" },
              { dir: "OVEST", label: "Costa Tirrenica", sub: "Cefalù, Milazzo, Tindari, Palermo", photoBg: "linear-gradient(160deg, #000a08 0%, #004a38 50%, #40b898 100%)", time: "30 min – 2h in auto" },
              { dir: "EST", label: "Stretto di Messina", sub: "Calabria, Aspromonte, Costa dei Gelsomini", photoBg: "linear-gradient(160deg, #000814 0%, #0a3060 50%, #4a8ac0 100%)", time: "20 min in traghetto" },
            ].map((d) => (
              <div key={d.dir} style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--bb-line)", background: "var(--bb-white)" }}>
                {/* Photo area */}
                <div style={{ height: 120, background: d.photoBg, position: "relative", display: "flex", alignItems: "flex-end", padding: "12px 16px" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 60%)" }} />
                  <div style={{ position: "relative", zIndex: 1, fontSize: 10, fontWeight: 700, letterSpacing: ".2em", color: "rgba(255,255,255,.9)", textTransform: "uppercase" }}>
                    {d.dir}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "16px" }}>
                  <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 17, color: "var(--bb-blue-ink)", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--bb-ink-soft)", lineHeight: 1.5, marginBottom: 12 }}>
                    {d.sub}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--bb-blue)", background: "rgba(10,77,126,.07)", borderRadius: "var(--r-pill)", padding: "4px 10px", display: "inline-block" }}>
                    {d.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY TRIPS */}
      <section style={{ padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
              Gite da Messina
            </div>
            <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-blue-ink)", margin: 0 }}>
              Tutto a portata di giornata
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {DAY_TRIPS.map((trip) => (
              <div key={trip.dest} style={{ borderRadius: "var(--r-xl)", overflow: "hidden", border: "1px solid var(--bb-line)", background: "var(--bb-white)", boxShadow: "0 2px 20px rgba(10,30,60,.05)" }}>
                {/* Photo header */}
                <div style={{ height: 220, background: trip.photoBg, position: "relative", display: "flex", alignItems: "flex-end", padding: "24px 28px" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.65) 0%, rgba(0,0,0,.1) 60%, transparent 100%)" }} />
                  <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <div style={{ fontSize: 28, marginBottom: 6 }}>{trip.icon}</div>
                        <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 700, fontSize: 28, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>
                          {trip.dest}
                        </div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,.65)", marginTop: 4 }}>{trip.dir}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 22, fontWeight: 700, color: "white" }}>{trip.time}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)" }}>da Messina</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 28px 24px" }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: "0 0 16px" }}>
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
      <section style={{ background: "var(--bb-cream)", borderTop: "1px solid var(--bb-line)", borderBottom: "1px solid var(--bb-line)", padding: "72px 32px" }}>
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
              <div key={h.title} style={{ background: "var(--bb-white)", border: "1px solid var(--bb-line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
                {/* Photo area */}
                <div style={{ height: 160, background: h.photoBg, position: "relative", display: "flex", alignItems: "flex-end", padding: "14px 20px" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 60%)" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 20 }}>{h.icon}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.8)", letterSpacing: ".06em" }}>{h.photoLabel}</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <div style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 16, color: "var(--bb-blue-ink)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {h.title}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section style={{ padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--bb-blue)", marginBottom: 12 }}>
                Come arrivare
              </div>
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 24px" }}>
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
              <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--bb-blue-ink)", margin: "0 0 24px" }}>
                Clima e stagioni
              </h2>
              {[
                { period: "Maggio – Giugno", desc: "Il momento migliore. Mare già caldo, folla non ancora estiva. Ideale per le Eolie e Capo Peloro.", temp: "22–28°C" },
                { period: "Luglio – Agosto", desc: "Alta stagione. Caldo intenso ma compensato dal mare. Le Eolie sono all'apice. Prenota con anticipo.", temp: "28–35°C" },
                { period: "Settembre – Ottobre", desc: "La stagione d'oro. Mare ancora caldo, luoghi meno affollati. Consigliata per Taormina e l'Etna.", temp: "22–28°C" },
                { period: "Novembre – Aprile", desc: "Messina è vivibile tutto l'anno. Ideale per chi viene per l'Etna innevata o per motivi di lavoro.", temp: "10–18°C" },
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
      <section style={{
        background: "linear-gradient(160deg, #050e1a 0%, #0a2a4a 40%, #0a4d7e 100%)",
        padding: "72px 32px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--bb-serif)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--bb-cream)", margin: "0 0 16px" }}>
            Prenota la tua base<br />
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--bb-yellow)" }}>a Messina</em>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(251,247,238,.7)", margin: "0 0 32px", lineHeight: 1.6 }}>
            Una stanza da cui ogni mattina scegli dove andare — il vulcano, Stromboli, Taormina, Capo Peloro, o semplicemente restare ad assaporare la città.
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
