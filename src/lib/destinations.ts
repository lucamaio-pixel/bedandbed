export interface Attraction {
  name: string;
  desc: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  travelTime: string;
  travelHow: string;
  tagline: string;
  intro: string;
  heroPhoto: string;
  photoBg: string;
  highlights: Attraction[];
  tips: string[];
  bestSeason: string;
  gallery: { photo: string; caption: string; photoBg: string }[];
}

const W = (path: string, w = 1280) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${w}px-${path.split("/").pop()}`;

export const DESTINATIONS: Destination[] = [
  {
    slug: "taormina",
    name: "Taormina",
    region: "Costa Ionica · ME",
    travelTime: "45 min",
    travelHow: "Auto · A18 direzione Catania",
    tagline: "La perla della Sicilia",
    intro:
      "Taormina è una delle mete più suggestive del Mediterraneo. Adagiata su uno sperone roccioso a 200 metri sul mare, domina la costa ionica con una vista sull'Etna che toglie il fiato. Il Teatro Greco-Romano è il monumento più fotografato della Sicilia — e uno dei più belli del mondo.",
    heroPhoto: W("2/20/Taormina-Teatro_Greco01.JPG"),
    photoBg: "linear-gradient(160deg, #1a0800 0%, #5a2a00 30%, #a06020 60%, #d4a050 80%, #7ab8d4 100%)",
    highlights: [
      { name: "Teatro Greco-Romano", desc: "Anfiteatro del III sec. a.C. con vista sull'Etna e sul mare. Ancora oggi sede di concerti e festival internazionali d'estate." },
      { name: "Isola Bella", desc: "Riserva naturale a pochi passi dal centro. Una lingua di sabbia collega l'isolotto alla riva — il bagno più scenico della Sicilia orientale." },
      { name: "Corso Umberto", desc: "La via principale di Taormina, lastricata di pietra lavica, tra boutique, bar con vista e palazzi nobiliari medievali." },
      { name: "Giardino Pubblico", desc: "Terrazza panoramica sul mare con piante esotiche e fontane. Il punto migliore per ammirare l'intera baia di Naxos." },
      { name: "Palazzo Corvaja", desc: "Il palazzo medievale più antico di Taormina, oggi sede del museo dell'artigianato siciliano." },
    ],
    tips: [
      "Arriva la mattina presto: il teatro è quasi deserto prima delle 10",
      "In estate lascia l'auto a Mazzarò e prendi la funivia — i parcheggi sono saturi",
      "Il biglietto teatro include la terrazza più alta — non saltarla",
      "Bar Turrisi: la granita al gelso nero è leggendaria",
    ],
    bestSeason: "Aprile–Giugno e Settembre–Ottobre. L'estate è affollata ma il festival Taormina Arte vale ogni folla.",
    gallery: [
      { photo: W("2/20/Taormina-Teatro_Greco01.JPG", 800), caption: "Teatro Greco-Romano", photoBg: "linear-gradient(135deg, #8a4a00 0%, #d4a050 100%)" },
      { photo: W("1/17/Isola_Bella_%28Taormina%29.jpg", 800), caption: "Isola Bella", photoBg: "linear-gradient(135deg, #006080 0%, #40b8d8 100%)" },
      { photo: W("e/ed/Taormina_BW_2012-10-05_10-27-01.jpg", 800), caption: "Centro storico", photoBg: "linear-gradient(135deg, #3a2a00 0%, #a06020 100%)" },
    ],
  },
  {
    slug: "etna",
    name: "Etna",
    region: "Vulcano attivo · CT",
    travelTime: "1h – 1h 30min",
    travelHow: "Auto · A18 + SP92 verso Nicolosi o Linguaglossa",
    tagline: "Il gigante di fuoco",
    intro:
      "L'Etna è il vulcano attivo più alto d'Europa — 3.357 metri — e uno dei più attivi al mondo. Il paesaggio lavico è lunare, i crateri fumano, e quando erutta di notte il cielo si tinge di arancio. Un'esperienza che ridefinisce la scala delle cose.",
    heroPhoto: W("5/55/Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG"),
    photoBg: "linear-gradient(160deg, #080808 0%, #1a0800 20%, #3a0a00 40%, #8a2a00 60%, #c84a00 80%, #f07000 100%)",
    highlights: [
      { name: "Crateri Sommitali", desc: "A 2.900–3.357 m di quota, raggiungibili con funivia + jeep 4x4 o a piedi da Piano del Lago. Le guide vulcanologiche sono obbligatorie oltre i 2.900 m." },
      { name: "Piano Provenzana", desc: "Il versante nord dell'Etna, più selvaggio e meno turistico. Punto di partenza per le escursioni più spettacolari sui campi di lava recente." },
      { name: "Grotte laviche", desc: "Tunnel sotterranei formati dalla lava solidificata all'esterno mentre continuava a scorrere all'interno. La Grotta del Gelo è la più straordinaria." },
      { name: "Funivia dell'Etna", desc: "Parte da Rifugio Sapienza (1.900 m) e sale a 2.500 m. Da lì jeep o trekking per i crateri. Operativa aprile–novembre." },
      { name: "Zafferana Etnea", desc: "Il borgo più bello del versante orientale. La sagra d'autunno (ottobre) è un'immersione nei sapori etnei: miele, funghi, castagne, pistacchio di Bronte." },
    ],
    tips: [
      "Porta un giubbotto anche d'estate: in quota la temperatura scende di 15–20°C",
      "Prenota le jeep in anticipo in alta stagione",
      "La visita notturna (con guida) è l'esperienza più spettacolare quando l'Etna è attivo",
      "Sul versante ovest: il pistacchio di Bronte è il migliore al mondo",
    ],
    bestSeason: "Maggio–Ottobre per i crateri. Dicembre–Marzo per sciare a Piano Provenzana.",
    gallery: [
      { photo: W("5/55/Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG", 800), caption: "Etna dalla costa", photoBg: "linear-gradient(135deg, #1a0400 0%, #c84a00 100%)" },
      { photo: W("d/d1/Mount_Etna_eruption_seen_from_the_International_Space_Station.jpg", 800), caption: "Eruzione dallo spazio", photoBg: "linear-gradient(135deg, #2a1000 0%, #8a4a00 100%)" },
      { photo: W("b/be/Etna_and_Catania.jpg", 800), caption: "Etna e Catania", photoBg: "linear-gradient(135deg, #0a0a0a 0%, #3a1a00 100%)" },
    ],
  },
  {
    slug: "eolie",
    name: "Isole Eolie",
    region: "Arcipelago UNESCO · ME",
    travelTime: "1h – 2h (aliscafo)",
    travelHow: "Aliscafo o traghetto da Porto di Milazzo (45 min da Messina)",
    tagline: "Sette isole, un paradiso",
    intro:
      "Le Isole Eolie sono Patrimonio UNESCO e uno degli arcipelaghi più belli del Mediterraneo. Sette isole, ognuna con un carattere diverso: Stromboli erutta ogni 20 minuti, Vulcano ha i fanghi termali, Lipari è la più vivace, Salina è verde e tranquilla.",
    heroPhoto: W("b/b9/Stromboli_und_Strombolicchio.JPG"),
    photoBg: "linear-gradient(160deg, #000a1a 0%, #001a4a 30%, #002a7a 55%, #0050b0 75%, #2a8ad4 90%, #70c8f0 100%)",
    highlights: [
      { name: "Stromboli", desc: "Il vulcano che erutta ogni 20 minuti. L'escursione notturna in cima (920 m) per vedere la Sciara del Fuoco è una delle esperienze più indimenticabili d'Italia. Guida obbligatoria." },
      { name: "Vulcano — Fanghi termali", desc: "Bagno nei fanghi sulfurei del Gran Cratere — l'esperienza termale più selvaggia del Mediterraneo. L'odore di zolfo fa parte del pacchetto." },
      { name: "Lipari", desc: "La più grande e vivace delle Eolie. Acque cristalline, Castello con museo archeologico, ottima ristorazione. Base ideale per l'arcipelago." },
      { name: "Salina", desc: "La più verde e silenziosa. Il cappero di Salina è il migliore al mondo. Il film Il Postino fu girato qui. Due vulcani spenti ricoperti di vegetazione." },
      { name: "Panarea", desc: "L'isola chic dell'arcipelago. Nessuna auto, case bianche, calette turchesi. Raggiungibile in giornata da Lipari." },
    ],
    tips: [
      "Da Messina: treno o auto fino a Milazzo (45 min), poi aliscafo",
      "Per Stromboli: l'escursione serale (partenza ore 17:00, rientro mezzanotte) è la più spettacolare",
      "In agosto le isole sono affollatissime — preferisci giugno o settembre",
      "Porta cash: alcune isole minori hanno ATM limitati",
    ],
    bestSeason: "Giugno e Settembre — mare caldo, meno folla, prezzi migliori.",
    gallery: [
      { photo: W("b/b9/Stromboli_und_Strombolicchio.JPG", 800), caption: "Stromboli e Strombolicchio", photoBg: "linear-gradient(135deg, #001840 0%, #0060b0 100%)" },
      { photo: W("6/6b/Stromboli_sciara_del_fuoco.jpg", 800), caption: "Sciara del Fuoco", photoBg: "linear-gradient(135deg, #000820 0%, #3030a0 100%)" },
      { photo: W("0/0c/Lipari_view.jpg", 800), caption: "Lipari", photoBg: "linear-gradient(135deg, #002850 0%, #40a8e0 100%)" },
    ],
  },
  {
    slug: "cefalu",
    name: "Cefalù",
    region: "Costa Tirrenica · PA",
    travelTime: "1h 45min",
    travelHow: "Auto · A20 direzione Palermo",
    tagline: "Il borgo medievale sul mare",
    intro:
      "Cefalù è il borgo più fotografato della Sicilia. Il Duomo normanno UNESCO si innalza sotto una Rocca imponente che domina un mare turchese impossibile. Il centro medievale è percorribile a piedi — ogni vicolo nasconde una sorpresa. Le spiagge di sabbia fine sono tra le migliori della Sicilia.",
    heroPhoto: W("8/87/Panorama_Cefalu_2023.jpg"),
    photoBg: "linear-gradient(160deg, #000a10 0%, #002a40 30%, #005a7a 55%, #0090a8 75%, #40c0d8 88%, #c8f0f8 100%)",
    highlights: [
      { name: "Duomo normanno", desc: "Costruito dai Normanni nel 1131, Patrimonio UNESCO. I mosaici dorati del Cristo Pantocratore sono tra i più grandi d'Europa." },
      { name: "La Rocca", desc: "Il promontorio di 270 m che domina Cefalù. Si sale a piedi in 20 minuti per un panorama straordinario. Restano le mura di un tempio greco del V sec. a.C." },
      { name: "Spiaggia di Cefalù", desc: "Sabbia fine e acque limpide, a due passi dal centro. Una delle spiagge più belle della Sicilia settentrionale." },
      { name: "Lavatoio medievale", desc: "Scavato nella roccia con acqua sorgiva che scorre ancora oggi. Una delle fontane più evocative di Sicilia." },
    ],
    tips: [
      "Il Duomo chiude a pranzo (13:00–15:30): visitalo di mattina",
      "Il tramonto visto dalla Rocca è tra i più belli della Sicilia",
      "In estate il parcheggio è difficile — lascia l'auto fuori dal centro",
      "Granita di mandorla con brioche: colazione siciliana autentica",
    ],
    bestSeason: "Maggio–Giugno e Settembre. In luglio–agosto il mare giustifica la folla.",
    gallery: [
      { photo: W("8/87/Panorama_Cefalu_2023.jpg", 800), caption: "Cefalù panorama", photoBg: "linear-gradient(135deg, #003050 0%, #0090c0 100%)" },
      { photo: W("8/88/Cathedral_of_Cefalu_-_facade.jpg", 800), caption: "Duomo normanno", photoBg: "linear-gradient(135deg, #2a1800 0%, #a07040 100%)" },
      { photo: W("4/45/Cefalu_beach.jpg", 800), caption: "Spiaggia di Cefalù", photoBg: "linear-gradient(135deg, #004060 0%, #40c0e0 100%)" },
    ],
  },
  {
    slug: "siracusa",
    name: "Siracusa",
    region: "Costa Ionica · SR",
    travelTime: "2h",
    travelHow: "Auto · A18 direzione Catania, poi SS114",
    tagline: "Magna Grecia sull'acqua",
    intro:
      "Siracusa fu la città più potente del mondo greco-antico, rivale di Atene e Cartagine. Oggi è Patrimonio UNESCO. Ortigia, l'isola storica collegata da un ponte, è un dedalo di vicoli barocchi, mercati di pesce e chiese costruite su templi greci.",
    heroPhoto: W("3/31/Luftpanorama_von_Syrakus.jpg"),
    photoBg: "linear-gradient(160deg, #100800 0%, #3a1a00 25%, #7a4a00 50%, #c09040 70%, #7ab0d0 90%, #b0d8f0 100%)",
    highlights: [
      { name: "Ortigia", desc: "L'isola storica — 1 km × 600 m, percorribile a piedi. Piazza del Duomo è una delle più belle d'Italia. Il Duomo è costruito attorno alle colonne di un tempio dorico del V sec. a.C." },
      { name: "Parco Archeologico Neapolis", desc: "Il teatro greco del V sec. a.C. è tra i più grandi e meglio conservati al mondo. L'Orecchio di Dionisio — grotta artificiale con acustica straordinaria — è uno dei luoghi più misteriosi della Sicilia." },
      { name: "Fonte Aretusa", desc: "La leggendaria fonte d'acqua dolce in riva al mare, dimora dei papiri. Circondata dalla mitologia greca e ancora viva nel cuore di Ortigia." },
      { name: "Mercato di Ortigia", desc: "Il mercato del pesce mattutino è un'esplosione di colori, odori e dialetto siciliano autentico. Tonno rosso e pesce spada sono la specialità locale." },
    ],
    tips: [
      "Parcheggia fuori da Ortigia e attraversa il ponte a piedi",
      "Il festival di teatro classico (maggio–giugno) — biglietti esauriti mesi prima, prenota online",
      "Combina la visita con Noto (30 min): il barocco siciliano più puro",
      "Per il pesce: i locali sul mercato battono le trattorie sulla piazza principale",
    ],
    bestSeason: "Aprile–Giugno e Settembre–Ottobre. L'estate è calda ma il festival vale il viaggio.",
    gallery: [
      { photo: W("3/31/Luftpanorama_von_Syrakus.jpg", 800), caption: "Siracusa dall'alto", photoBg: "linear-gradient(135deg, #002040 0%, #0060a0 100%)" },
      { photo: W("6/62/Teatro_greco_di_Siracusa.jpg", 800), caption: "Teatro Greco", photoBg: "linear-gradient(135deg, #2a1800 0%, #906040 100%)" },
      { photo: W("0/09/Ortigia%2C_duomo%2C_facciata_01.JPG", 800), caption: "Duomo di Ortigia", photoBg: "linear-gradient(135deg, #001830 0%, #4080c0 100%)" },
    ],
  },
  {
    slug: "capo-peloro",
    name: "Capo Peloro",
    region: "Torre Faro · Messina",
    travelTime: "15 min",
    travelHow: "Auto o bici · strada litoranea nord",
    tagline: "Dove due mari si incontrano",
    intro:
      "Capo Peloro è la punta più nord-orientale della Sicilia — il punto in cui il Mar Ionio e il Mar Tirreno si incontrano visibilmente, con correnti e colori diversi. La laguna è una riserva naturale protetta, con fenicotteri e aironi. Il faro ottocentesco domina lo Stretto. A 15 minuti da Messina.",
    heroPhoto: W("9/93/Torre_Faro_lighthouse_-_Capo_Peloro_-_Messina%2C_Italy_-_20_Oct._2010.jpg"),
    photoBg: "linear-gradient(160deg, #0a3a2a 0%, #0a7e5a 40%, #3ab8a0 70%, #7ad4c8 100%)",
    highlights: [
      { name: "Lo Stretto dalla punta", desc: "Dal promontorio si vedono contemporaneamente la Calabria (a 3,1 km), il faro, la laguna e i due mari con colorazioni diverse. Il tramonto da qui è uno spettacolo naturale rarissimo." },
      { name: "Laguna di Capo Peloro", desc: "Riserva naturale con canneti, fenicotteri e aironi. Si può fare birdwatching o girare in canoa — noleggio disponibile in loco." },
      { name: "Spiaggia di Torre Faro", desc: "La spiaggia più a nord della Sicilia. Sabbia scura e acque con forti correnti — scenograficamente unica, con la vista su entrambe le coste." },
      { name: "Piloni di Messina", desc: "Le antiche torri dei tralicci che attraversavano lo Stretto prima del cavo sottomarino. Monumenti industriali diventati simbolo del paesaggio dello Stretto." },
    ],
    tips: [
      "Vai all'alba o al tramonto — la luce sullo Stretto è straordinaria",
      "D'estate la spiaggia di Torre Faro si anima con lidi e locali serali",
      "La corrente dello Stretto è forte — non nuotare lontano dalla riva",
      "I ristoranti sul lungomare servono pesce spada locale freschissimo",
    ],
    bestSeason: "Tutto l'anno. D'estate per il mare, in inverno per l'atmosfera selvaggia. Il tramonto vale qualsiasi stagione.",
    gallery: [
      { photo: W("9/93/Torre_Faro_lighthouse_-_Capo_Peloro_-_Messina%2C_Italy_-_20_Oct._2010.jpg", 800), caption: "Faro di Torre Faro", photoBg: "linear-gradient(135deg, #003830 0%, #40b890 100%)" },
      { photo: W("e/e2/Laghi_di_Ganzirri_-_Messina.jpg", 800), caption: "Laghi di Ganzirri", photoBg: "linear-gradient(135deg, #002820 0%, #308870 100%)" },
      { photo: W("d/d6/Sicilia_Messina1_tango7174.jpg", 800), caption: "Costa dello Stretto", photoBg: "linear-gradient(135deg, #001830 0%, #2060a0 100%)" },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
