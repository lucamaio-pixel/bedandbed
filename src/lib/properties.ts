export interface RoomType {
  id: string;
  name: string;
  size: number;
  maxGuests: number;
  price: number;
  features: string[];
  photoBg: string;
  photos?: string[];
}

export interface Property {
  slug: string;
  name: string;
  fullName: string;
  address: string;
  location: string;
  tagline: string;
  desc: string;
  longDesc: string;
  badge: string;
  badgeVariant: "blue" | "yellow" | "green" | "stone";
  photoBg: string;
  heroColor: string;
  geoIcon: "wave" | "lake" | "hospital";
  rooms: RoomType[];
  features: string[];
  nearbyPOI: string[];
}

export const PROPERTIES: Property[] = [
  {
    slug: "atelier",
    name: "Atelier",
    fullName: "Bed&Bed Atelier",
    address: "Via Circuito 88, Torre Faro",
    location: "Torre Faro · Messina",
    tagline: "A due passi dal mare",
    badge: "Vista mare",
    badgeVariant: "blue",
    photoBg: "linear-gradient(155deg, #1a4a6e 0%, #0a3050 60%, #1a6080 100%)",
    heroColor: "#0a3050",
    geoIcon: "wave",
    desc: "Sulla punta nord della Sicilia, dove lo Ionio incontra il Tirreno. Dal letto al mare: due minuti a piedi.",
    longDesc:
      "L'Atelier sorge a Torre Faro, sulla punta estrema nord-est della Sicilia, dove le acque dello Ionio e del Tirreno si incontrano. Un posto unico — dalla finestra vedi sia il continente che il faro. Dal portone all'acqua: meno di 200 metri.",
    features: ["Wi-Fi gratuito", "Aria condizionata", "Bagno privato", "Biancheria inclusa", "Ingresso indipendente"],
    nearbyPOI: ["Spiaggia Torre Faro (2 min a piedi)", "Ristoranti sul mare", "Faro di Messina", "Traghetto per Villa S. Giovanni (15 min)"],
    rooms: [
      { id: "atelier-matrimoniale", name: "Camera matrimoniale vista mare", size: 22, maxGuests: 2, price: 98, features: ["Vista mare", "2 ospiti", "22 m²", "Wi-Fi"], photoBg: "linear-gradient(135deg, #5e89b0 0%, #3a6589 100%)", photos: ["/camere/atelier/cam1-01.jpg","/camere/atelier/cam1-02.jpg","/camere/atelier/cam1-03.jpg","/camere/atelier/cam1-04.jpg","/camere/atelier/cam1-05.jpg","/camere/atelier/cam1-06.jpg","/camere/atelier/cam1-07.jpg","/camere/atelier/cam1-08.jpg","/camere/atelier/cam1-09.jpg","/camere/atelier/cam1-10.jpg","/camere/atelier/cam1-11.jpg"] },
      { id: "atelier-doppia", name: "Camera doppia", size: 18, maxGuests: 2, price: 85, features: ["2 ospiti", "18 m²", "Wi-Fi", "AC"], photoBg: "linear-gradient(135deg, #4a7a9b 0%, #2a5a7a 100%)", photos: ["/camere/atelier/cam2-01.jpg","/camere/atelier/cam2-02.jpg","/camere/atelier/cam2-03.jpg","/camere/atelier/cam2-04.jpg","/camere/atelier/cam2-05.jpg","/camere/atelier/cam2-06.jpg","/camere/atelier/cam2-07.jpg"] },
      { id: "atelier-singola", name: "Camera singola", size: 14, maxGuests: 1, price: 62, features: ["1 ospite", "14 m²", "Scrivania", "Wi-Fi"], photoBg: "linear-gradient(135deg, #6a8fa8 0%, #4a6f88 100%)" },
    ],
  },
  {
    slug: "ai-laghi",
    name: "Ai Laghi",
    fullName: "Bed&Bed Ai Laghi",
    address: "Via Petraro, Ganzirri",
    location: "Ganzirri · Messina",
    tagline: "Una finestra sul lago",
    badge: "Vista lago",
    badgeVariant: "green",
    photoBg: "linear-gradient(155deg, #1a3d2e 0%, #0f2d1f 60%, #2a5a3e 100%)",
    heroColor: "#0f2d1f",
    geoIcon: "lake",
    desc: "Una finestra sul lago di Ganzirri. Silenzio, natura e il profumo dell'acqua dolce a pochi passi dallo Stretto.",
    longDesc:
      "Ganzirri è un borgo di pescatori tra il lago e lo Stretto. Ai Laghi si affaccia sul lago naturale, tra canneti e barche. La mattina è silenziosa, la sera profuma di pesce arrostito dai ristoranti sul bordo dell'acqua. Messina centro è raggiungibile in 15 minuti.",
    features: ["Wi-Fi gratuito", "Aria condizionata", "Bagno privato", "Parcheggio gratuito", "Vista lago"],
    nearbyPOI: ["Lago di Ganzirri (50 m)", "Ristoranti di pesce sul lago", "Spiaggia di Mortelle (5 min)", "Centro Messina (15 min in auto)"],
    rooms: [
      { id: "laghi-matrimoniale", name: "Camera matrimoniale vista lago", size: 24, maxGuests: 2, price: 92, features: ["Vista lago", "2 ospiti", "24 m²", "Balcone"], photoBg: "linear-gradient(135deg, #4a7a5e 0%, #2a5a3e 100%)" },
      { id: "laghi-familiare", name: "Camera familiare quadrupla", size: 28, maxGuests: 4, price: 142, features: ["4 ospiti", "28 m²", "Cucina", "Wi-Fi"], photoBg: "linear-gradient(135deg, #6a8a5e 0%, #3f5d3a 100%)" },
      { id: "laghi-doppia", name: "Camera doppia", size: 18, maxGuests: 2, price: 80, features: ["2 ospiti", "18 m²", "AC", "Wi-Fi"], photoBg: "linear-gradient(135deg, #5a7a6e 0%, #3a5a4e 100%)" },
    ],
  },
  {
    slug: "policlinico",
    name: "Policlinico",
    fullName: "Bed&Bed Policlinico",
    address: "Via Vecchia Comunale 17, Messina",
    location: "Policlinico · Messina",
    tagline: "A due passi dal Policlinico",
    badge: "Vicino al Policlinico",
    badgeVariant: "stone",
    photoBg: "linear-gradient(155deg, #3a2e1a 0%, #2a200f 60%, #4a3a1e 100%)",
    heroColor: "#2a200f",
    geoIcon: "hospital",
    desc: "A 200 metri dal Policlinico di Messina. Ideale per familiari di pazienti, studenti e medici in trasferta.",
    longDesc:
      "La struttura Policlinico è a 200 metri dall'ingresso principale dell'A.O.U. Policlinico G. Martino di Messina — l'ospedale universitario della città. Pensata per soggiorni funzionali: familiari di pazienti ricoverati, studenti di medicina, professionisti sanitari in trasferta. Camere silenziose, prezzi dedicati per soggiorni lunghi.",
    features: ["Wi-Fi gratuito", "Aria condizionata", "Bagno privato", "Scrivania in ogni camera", "Prezzi long-stay da 7 notti"],
    nearbyPOI: ["Policlinico G. Martino (200 m)", "Università di Messina", "Conservatorio Corelli", "Farmacia h24"],
    rooms: [
      { id: "poli-singola", name: "Camera singola silenziosa", size: 14, maxGuests: 1, price: 62, features: ["1 ospite", "14 m²", "Scrivania", "Wi-Fi"], photoBg: "linear-gradient(135deg, #b8a98a 0%, #8a7a5e 100%)" },
      { id: "poli-doppia", name: "Camera doppia", size: 18, maxGuests: 2, price: 82, features: ["2 ospiti", "18 m²", "Scrivania", "AC"], photoBg: "linear-gradient(135deg, #a8987a 0%, #7a6a4e 100%)" },
      { id: "poli-matrimoniale", name: "Camera matrimoniale", size: 20, maxGuests: 2, price: 88, features: ["2 ospiti", "20 m²", "Wi-Fi", "AC"], photoBg: "linear-gradient(135deg, #c8b89a 0%, #9a8a6e 100%)" },
    ],
  },
];

export function getProperty(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}
