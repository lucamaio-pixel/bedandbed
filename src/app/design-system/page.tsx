import { LogoCircle, LogoHorizontal } from "@/components/logo";
import { Button, Badge, Chip, Input, Select, RoomCard, Calendar } from "@/components/ui";
import {
  IconWifi, IconReception, IconParking, IconRoom, IconBed, IconShower,
  IconWave, IconLake, IconHospital,
} from "@/components/icons";

/* ─── Shell helpers ─── */
function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section
      id={id}
      style={{
        padding: "48px 0",
        borderBottom: "1px solid var(--bb-line)",
      }}
    >
      {children}
    </section>
  );
}

function SectionHead({ title, num }: { title: string; num: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 24,
        marginBottom: 32,
      }}
    >
      <h2
        style={{
          fontFamily: "var(--bb-serif)",
          fontWeight: 600,
          fontSize: 32,
          letterSpacing: "-0.015em",
          margin: 0,
          color: "var(--bb-blue-ink)",
        }}
      >
        {title}
      </h2>
      <span
        style={{
          fontFamily: "var(--bb-sans)",
          fontSize: 12,
          letterSpacing: ".24em",
          color: "var(--bb-ink-mute)",
        }}
      >
        {num}
      </span>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: "var(--bb-ink-soft)", fontSize: 14, maxWidth: 600, marginTop: 0 }}>
      {children}
    </p>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: "var(--bb-white)",
        border: "1px solid var(--bb-line)",
        borderRadius: "var(--r-lg)",
        padding: 24,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Label({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: "var(--bb-ink-mute)",
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Row({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", ...style }}>
      {children}
    </div>
  );
}

/* ─── Swatch ─── */
function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div
      style={{
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid var(--bb-line)",
        background: "var(--bb-white)",
      }}
    >
      <div style={{ aspectRatio: "4/3", background: hex }} />
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 8,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-blue-ink)" }}>{name}</span>
        <span
          style={{
            fontFamily: "SFMono-Regular, Consolas, monospace",
            fontSize: 11,
            color: "var(--bb-ink-mute)",
          }}
        >
          {hex}
        </span>
      </div>
    </div>
  );
}

/* ─── Type row ─── */
function TypeRow({
  label,
  spec,
  children,
}: {
  label: React.ReactNode;
  spec: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: 24,
        padding: "20px 0",
        borderBottom: "1px solid var(--bb-line)",
        alignItems: "baseline",
      }}
    >
      <div style={{ color: "var(--bb-ink-mute)", fontSize: 12 }}>
        <strong style={{ display: "block", color: "var(--bb-blue-ink)", fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
          {label}
        </strong>
        {spec}
      </div>
      <div>{children}</div>
    </div>
  );
}

/* ─── Logo tile ─── */
function LogoTile({
  children,
  dark,
  aspectRatio = "1",
}: {
  children: React.ReactNode;
  dark?: boolean;
  aspectRatio?: string;
}) {
  return (
    <div
      style={{
        aspectRatio,
        borderRadius: "var(--r-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: dark ? "var(--bb-blue-ink)" : "var(--bb-cream)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Icon cell ─── */
function IconCell({
  children,
  label,
  wide,
}: {
  children: React.ReactNode;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      style={{
        aspectRatio: wide ? "3/1" : "1",
        border: "1px dashed var(--bb-line)",
        borderRadius: "var(--r-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 6,
        color: "var(--bb-blue)",
        fontSize: 11,
        padding: wide ? 16 : undefined,
      }}
    >
      <div style={{ color: "var(--bb-blue)" }}>{children}</div>
      <span style={{ color: "var(--bb-ink-mute)", fontWeight: 500 }}>{label}</span>
    </div>
  );
}

/* ─── Grid helper ─── */
function Grid({
  cols,
  children,
  style,
}: {
  cols: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 24,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function DesignSystemPage() {
  return (
    <div style={{ background: "var(--bb-paper)", minHeight: "100vh" }}>
      {/* ─── Header ─── */}
      <header
        style={{
          borderBottom: "1px solid var(--bb-line)",
          padding: "40px 32px",
          background: "var(--bb-cream)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "var(--bb-blue)",
                fontWeight: 600,
              }}
            >
              Bed&amp;Bed · Design System v1.0
            </div>
            <h1
              style={{
                fontFamily: "var(--bb-serif)",
                fontWeight: 600,
                fontSize: 56,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "12px 0 0",
                color: "var(--bb-blue-ink)",
              }}
            >
              Linguaggio visivo
              <br />
              per il{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--bb-yellow-ink)",
                  fontWeight: 500,
                }}
              >
                sito
              </em>
              , le pagine social, l&apos;app.
            </h1>
          </div>
          <p
            style={{
              maxWidth: 540,
              color: "var(--bb-ink-soft)",
              fontSize: 16,
              margin: 0,
            }}
          >
            Token, componenti e regole di utilizzo. Tutto ciò che serve per costruire il sito
            bedandbed.it mantenendo coerenza visiva tra la struttura madre e le tre strutture
            (Atelier, Ai Laghi, Policlinico).
          </p>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px" }}>

        {/* ─── 01 LOGHI ─── */}
        <Section id="loghi">
          <SectionHead title="Loghi" num="01 · BRAND" />
          <Note>
            Marchio madre + 3 loghi struttura. Stessa griglia (cerchio blu + chiave gialla +
            scarabocchio + payoff), cambia solo il nome.
          </Note>

          {/* 4-up circle logos */}
          <Grid cols={4} style={{ marginTop: 32 }}>
            {[
              { name: undefined, label: "Bed&Bed", sub: "marchio madre", payoffSub: "Messina" },
              { name: "Atelier", label: "Atelier", sub: "Torre Faro", payoffSub: "Torre Faro" },
              { name: "Ai Laghi", label: "Ai Laghi", sub: "Ganzirri", payoffSub: "Ganzirri" },
              { name: "Policlinico", label: "Policlinico", sub: "Via Vecchia Comunale", payoffSub: "Messina" },
            ].map(({ name, label, sub, payoffSub }) => (
              <div
                key={label}
                style={{
                  background: "var(--bb-white)",
                  border: "1px solid var(--bb-line)",
                  borderRadius: "var(--r-lg)",
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <LogoTile>
                  <LogoCircle name={name} size={180} italic={!!name} payoffSub={payoffSub} />
                </LogoTile>
                <div
                  style={{
                    padding: "12px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 8,
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-blue-ink)" }}>
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "SFMono-Regular, Consolas, monospace",
                      fontSize: 11,
                      color: "var(--bb-ink-mute)",
                    }}
                  >
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </Grid>

          {/* horizontal lockups */}
          <Grid cols={2} style={{ marginTop: 24 }}>
            <div
              style={{
                background: "var(--bb-white)",
                border: "1px solid var(--bb-line)",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
              }}
            >
              <LogoTile aspectRatio="16/9">
                <LogoHorizontal size={56} variant="light" />
              </LogoTile>
              <div
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-blue-ink)" }}>
                  Lockup orizzontale · chiaro
                </span>
                <span style={{ fontSize: 11, color: "var(--bb-ink-mute)" }}>
                  header, biglietti, firme email
                </span>
              </div>
            </div>
            <div
              style={{
                background: "var(--bb-white)",
                border: "1px solid var(--bb-line)",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
              }}
            >
              <LogoTile dark aspectRatio="16/9">
                <LogoHorizontal size={56} variant="dark" />
              </LogoTile>
              <div
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 13, color: "var(--bb-blue-ink)" }}>
                  Lockup orizzontale · scuro
                </span>
                <span style={{ fontSize: 11, color: "var(--bb-ink-mute)" }}>
                  footer, applicazioni invertite
                </span>
              </div>
            </div>
          </Grid>
        </Section>

        {/* ─── 02 COLORI ─── */}
        <Section id="colori">
          <SectionHead title="Colori" num="02 · TOKEN" />
          <Note>
            Blu profondo come voce primaria, giallo come accento e CTA secondaria. Crema/sabbia come
            neutro caldo, MAI bianco puro per le superfici principali.
          </Note>

          <Label style={{ marginTop: 32 }}>Brand</Label>
          <Grid cols={4} style={{ marginTop: 12 }}>
            <Swatch name="Blue" hex="#0A4D7E" />
            <Swatch name="Blue Deep" hex="#083A60" />
            <Swatch name="Blue Ink" hex="#052742" />
            <Swatch name="Yellow" hex="#F2C500" />
          </Grid>
          <Grid cols={4} style={{ marginTop: 12 }}>
            <Swatch name="Yellow Soft" hex="#F7D94C" />
            <Swatch name="Yellow Ink" hex="#C99E00" />
            <Swatch name="Cream" hex="#FBF7EE" />
            <Swatch name="Paper" hex="#F5EFE2" />
          </Grid>

          <Label style={{ marginTop: 32 }}>Neutrali</Label>
          <Grid cols={4} style={{ marginTop: 12 }}>
            <Swatch name="Stone" hex="#E6DFCE" />
            <Swatch name="Line" hex="#DDD3BC" />
            <Swatch name="Ink Mute" hex="#8A8174" />
            <Swatch name="Ink" hex="#1A1410" />
          </Grid>

          <Label style={{ marginTop: 32 }}>Semantica</Label>
          <Grid cols={3} style={{ marginTop: 12 }}>
            <Swatch name="Success" hex="#2F7A4D" />
            <Swatch name="Warning" hex="#B8761E" />
            <Swatch name="Error" hex="#B33A2E" />
          </Grid>
        </Section>

        {/* ─── 03 TIPOGRAFIA ─── */}
        <Section id="tipografia">
          <SectionHead title="Tipografia" num="03 · TYPE" />
          <Note>
            <strong>Fraunces</strong> serif espressivo per titoli, payoff e numeri di prezzo — la
            sua &ldquo;&amp;&rdquo; italic è il dettaglio firmato del marchio.{" "}
            <strong>Inter</strong> sans-serif per UI, copy lungo e form.
          </Note>

          <div style={{ marginTop: 32 }}>
            <TypeRow label="Display" spec="Fraunces 600 · 72px / 1.02">
              <span
                style={{
                  fontFamily: "var(--bb-serif)",
                  fontWeight: 600,
                  fontSize: 72,
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                  display: "block",
                }}
              >
                Una finestra{" "}
                <em style={{ fontStyle: "italic", color: "var(--bb-yellow-ink)", fontWeight: 500 }}>
                  sul lago
                </em>
              </span>
            </TypeRow>

            <TypeRow label="H1" spec="Fraunces 600 · 48px / 1.05">
              <span
                style={{
                  fontFamily: "var(--bb-serif)",
                  fontWeight: 600,
                  fontSize: 48,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  display: "block",
                }}
              >
                A due passi dal mare
              </span>
            </TypeRow>

            <TypeRow label="H2" spec="Fraunces 600 · 36px / 1.1">
              <span
                style={{
                  fontFamily: "var(--bb-serif)",
                  fontWeight: 600,
                  fontSize: 36,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  display: "block",
                }}
              >
                Le nostre tre case di Messina
              </span>
            </TypeRow>

            <TypeRow label="H3" spec="Fraunces 600 · 24px / 1.2">
              <span
                style={{
                  fontFamily: "var(--bb-serif)",
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  display: "block",
                }}
              >
                Camera doppia con vista
              </span>
            </TypeRow>

            <TypeRow label="Eyebrow" spec="Inter 600 · 12px · tracking .28em">
              <span
                style={{
                  fontFamily: "var(--bb-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "var(--bb-blue)",
                  display: "block",
                }}
              >
                Affittacamere · Messina
              </span>
            </TypeRow>

            <TypeRow label="Lead" spec="Inter 400 · 19px / 1.5">
              <span
                style={{
                  fontFamily: "var(--bb-sans)",
                  fontWeight: 400,
                  fontSize: 19,
                  lineHeight: 1.5,
                  display: "block",
                }}
              >
                Tre strutture indipendenti, una sola promessa: stanze pulite, prossimità al motivo
                del tuo viaggio, prezzi senza sorprese.
              </span>
            </TypeRow>

            <TypeRow label="Body" spec="Inter 400 · 16px / 1.6">
              <span
                style={{
                  fontFamily: "var(--bb-sans)",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.6,
                  display: "block",
                }}
              >
                L&apos;Atelier sorge a Torre Faro, sulla punta nord della Sicilia, dove lo Ionio
                incontra il Tirreno. Dalla camera al mare ci sono due minuti a piedi e il profumo di
                salsedine ti accoglie quando apri la finestra al mattino.
              </span>
            </TypeRow>

            <TypeRow label="Small" spec="Inter 400 · 14px / 1.5">
              <span
                style={{
                  fontFamily: "var(--bb-sans)",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.5,
                  display: "block",
                }}
              >
                Cancellazione gratuita fino a 48 ore prima del check-in. Tassa di soggiorno
                comunale non inclusa (€2/persona/notte, max 4 notti).
              </span>
            </TypeRow>

            <TypeRow label="Caption" spec="Inter 500 · 12px / 1.4">
              <span
                style={{
                  fontFamily: "var(--bb-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: "var(--bb-ink-mute)",
                  display: "block",
                }}
              >
                DA · 78€ A NOTTE · COLAZIONE INCLUSA
              </span>
            </TypeRow>
          </div>
        </Section>

        {/* ─── 04 BOTTONI ─── */}
        <Section id="bottoni">
          <SectionHead title="Bottoni" num="04 · COMPONENTI" />
          <Note>
            Pillola, sempre. <strong>Primary</strong> per &ldquo;Prenota&rdquo;.{" "}
            <strong>Accent giallo</strong> riservato a momenti decisivi (Conferma pagamento, Applica
            codice). <strong>Ghost</strong> per azioni secondarie. <strong>Link</strong> per
            testo-azione inline.
          </Note>

          <Card style={{ marginTop: 32 }}>
            <Label>Varianti</Label>
            <Row style={{ marginTop: 16 }}>
              <Button variant="primary">Prenota ora</Button>
              <Button variant="accent">Conferma e paga</Button>
              <Button variant="ghost">Vedi disponibilità</Button>
              <Button variant="link">Maggiori dettagli →</Button>
            </Row>

            <Label style={{ marginTop: 32 }}>Taglie</Label>
            <Row style={{ marginTop: 16, alignItems: "center" }}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
            </Row>

            <Label style={{ marginTop: 32 }}>Stati</Label>
            <Row style={{ marginTop: 16 }}>
              <Button variant="primary">Attivo</Button>
              <Button variant="primary" style={{ background: "var(--bb-blue-deep)" }}>Hover</Button>
              <Button variant="primary" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
                Disabilitato
              </Button>
              <Button variant="primary" style={{ opacity: 0.8 }}>⏳ Caricamento</Button>
            </Row>
          </Card>
        </Section>

        {/* ─── 05 FORM ─── */}
        <Section id="form">
          <SectionHead title="Form &amp; input" num="05 · COMPONENTI" />

          <Grid cols={2} style={{ marginTop: 32 }}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--bb-blue-ink)",
                    letterSpacing: ".04em",
                  }}
                >
                  Nome e cognome
                </label>
                <Input placeholder="Mario Rossi" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--bb-blue-ink)",
                    letterSpacing: ".04em",
                  }}
                >
                  Email
                </label>
                <Input type="email" defaultValue="mario.rossi@example.it" />
                <span style={{ fontSize: 12, color: "var(--bb-ink-mute)" }}>
                  Ti invieremo qui la conferma di prenotazione.
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--bb-blue-ink)",
                    letterSpacing: ".04em",
                  }}
                >
                  Struttura
                </label>
                <Select defaultValue="atelier">
                  <option value="atelier">Atelier — Torre Faro</option>
                  <option value="ailaghi">Ai Laghi — Ganzirri</option>
                  <option value="policlinico">Policlinico — Via Vecchia Comunale</option>
                </Select>
              </div>
            </Card>

            <Card>
              <Label>Date picker</Label>
              <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
                <Calendar />
              </div>
              <Row style={{ justifyContent: "center", marginTop: 16 }}>
                <Badge variant="blue">12 → 15 marzo · 3 notti</Badge>
              </Row>
            </Card>
          </Grid>
        </Section>

        {/* ─── 06 BADGE & CHIP ─── */}
        <Section id="badge-chip">
          <SectionHead title="Badge, chip, tag" num="06 · COMPONENTI" />

          <Card style={{ marginTop: 32 }}>
            <Label>Badge informativi</Label>
            <Row style={{ marginTop: 16 }}>
              <Badge variant="blue">Disponibile</Badge>
              <Badge variant="yellow">Best price · diretto</Badge>
              <Badge variant="green">Cancellazione gratuita</Badge>
              <Badge variant="stone">3 notti minimo</Badge>
            </Row>

            <Label style={{ marginTop: 32 }}>Chip filtro</Label>
            <Row style={{ marginTop: 16 }}>
              <Chip>2 ospiti</Chip>
              <Chip>12 → 15 marzo</Chip>
              <Chip>Vista mare</Chip>
              <Chip>Wi-Fi</Chip>
              <Chip>Parcheggio</Chip>
              <Chip>+ Aggiungi filtro</Chip>
            </Row>
          </Card>
        </Section>

        {/* ─── 07 ROOM CARD ─── */}
        <Section id="room-card">
          <SectionHead title="Card camera" num="07 · COMPONENTI" />
          <Note>
            Componente cardine: appare in elenchi, hub strutture, motore prenotazione e
            disponibilità.
          </Note>

          <Grid cols={3} style={{ marginTop: 32 }}>
            <RoomCard
              name="Camera matrimoniale<br/>vista Stretto"
              badgeLabel="Vista mare"
              photoBg="linear-gradient(135deg, #5e89b0 0%, #3a6589 100%)"
              features={["2 ospiti", "22 m²", "Wi-Fi"]}
              price={98}
              priceNote="A NOTTE · BAGNO PRIVATO"
            />
            <RoomCard
              name="Camera familiare<br/>quadrupla"
              badgeLabel="Vista lago"
              photoBg="linear-gradient(135deg, #6a8a5e 0%, #3f5d3a 100%)"
              features={["4 ospiti", "28 m²", "Cucina"]}
              price={142}
              priceNote="A NOTTE · 4 OSPITI"
            />
            <RoomCard
              name="Camera singola<br/>silenziosa"
              badgeLabel="A 200m dal Policlinico"
              photoBg="linear-gradient(135deg, #b8a98a 0%, #8a7a5e 100%)"
              features={["1 ospite", "14 m²", "Scrivania"]}
              price={62}
              priceNote="A NOTTE · BAGNO PRIVATO"
            />
          </Grid>
        </Section>

        {/* ─── 08 ICONOGRAFIA ─── */}
        <Section id="iconografia">
          <SectionHead title="Iconografia" num="08 · ASSET" />
          <Note>
            Lineari, 24px, stroke 1.6. Stile <em>essenziale</em>: niente icone &ldquo;amichevoli&rdquo;
            colorate. Le tre strutture hanno un&apos;icona-firma per il geo-claim.
          </Note>

          <Label style={{ marginTop: 32 }}>Servizi</Label>
          <Grid cols={6} style={{ marginTop: 12 }}>
            <IconCell label="Wi-Fi"><IconWifi /></IconCell>
            <IconCell label="Reception 24h"><IconReception /></IconCell>
            <IconCell label="Parcheggio"><IconParking /></IconCell>
            <IconCell label="Camera"><IconRoom /></IconCell>
            <IconCell label="Letto"><IconBed /></IconCell>
            <IconCell label="Doccia"><IconShower /></IconCell>
          </Grid>

          <Label style={{ marginTop: 32 }}>Geo-firma per le 3 strutture</Label>
          <Grid cols={3} style={{ marginTop: 12 }}>
            <IconCell label="Atelier · onde, mare" wide>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconWave style={{ width: 32, height: 32 }} />
                <strong style={{ color: "var(--bb-blue)" }}>Atelier</strong>
              </div>
            </IconCell>
            <IconCell label="Ai Laghi · specchio d'acqua" wide>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconLake style={{ width: 32, height: 32 }} />
                <strong style={{ color: "var(--bb-blue)" }}>Ai Laghi</strong>
              </div>
            </IconCell>
            <IconCell label="Policlinico · ospedale" wide>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconHospital style={{ width: 32, height: 32 }} />
                <strong style={{ color: "var(--bb-blue)" }}>Policlinico</strong>
              </div>
            </IconCell>
          </Grid>
        </Section>

        {/* ─── 09 SPACING & RADII ─── */}
        <Section id="spacing">
          <SectionHead title="Spacing, radii, ombre" num="09 · TOKEN" />

          <Grid cols={2} style={{ marginTop: 32 }}>
            <Card>
              <Label>Scala spazi (4-based)</Label>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-end", marginTop: 16 }}>
                {[4, 8, 12, 16, 24, 32, 48, 64].map((s) => (
                  <div
                    key={s}
                    style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: s,
                        height: s,
                        background: "var(--bb-blue)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--bb-sans)",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: 1.4,
                        color: "var(--bb-ink-mute)",
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <Label>Radii</Label>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                {[
                  { r: 4, label: "sm 4" },
                  { r: 8, label: "md 8" },
                  { r: 14, label: "lg 14" },
                  { r: 22, label: "xl 22" },
                  { r: 999, label: "pill" },
                ].map(({ r, label }) => (
                  <div
                    key={label}
                    style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        background: "var(--bb-blue)",
                        borderRadius: r,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--bb-sans)",
                        fontWeight: 500,
                        fontSize: 12,
                        color: "var(--bb-ink-mute)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Label style={{ marginTop: 24 }}>Ombre</Label>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                {[
                  { shadow: "var(--sh-sm)", label: "sm" },
                  { shadow: "var(--sh-md)", label: "md" },
                  { shadow: "var(--sh-lg)", label: "lg" },
                ].map(({ shadow, label }) => (
                  <div
                    key={label}
                    style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 80,
                        height: 56,
                        background: "var(--bb-white)",
                        borderRadius: 8,
                        boxShadow: shadow,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--bb-sans)",
                        fontWeight: 500,
                        fontSize: 12,
                        color: "var(--bb-ink-mute)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </Grid>
        </Section>

        {/* ─── 10 REGOLE D'USO ─── */}
        <Section id="regole">
          <SectionHead title="Regole d'uso" num="10 · GUIDELINE" />

          <Grid cols={2} style={{ marginTop: 32 }}>
            <Card
              style={{ borderLeft: "4px solid var(--bb-success)" }}
            >
              <Label style={{ color: "var(--bb-success)" }}>✓ Da fare</Label>
              <ul style={{ margin: "16px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
                <li>
                  Sfondo <strong>Paper o Cream</strong> per le pagine principali, mai bianco puro
                </li>
                <li>
                  Pulsante <strong>Prenota in blu</strong>, sempre primario in pagina
                </li>
                <li>
                  Giallo per stati positivi e momenti chiave (codice promo applicato, conferma)
                </li>
                <li>
                  Logo struttura solo nella pagina di quella struttura, marchio madre altrove
                </li>
                <li>
                  Spaziatura generosa: i titoli respirano (almeno 32px sopra/sotto un H2)
                </li>
                <li>
                  Foto sempre con cornice sottile a 14px raggio, mai full-bleed senza margini su
                  mobile
                </li>
              </ul>
            </Card>

            <Card style={{ borderLeft: "4px solid var(--bb-error)" }}>
              <Label style={{ color: "var(--bb-error)" }}>✗ Da evitare</Label>
              <ul style={{ margin: "16px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
                <li>Bianco puro come sfondo principale</li>
                <li>Giallo come colore di testo lungo (poco leggibile su crema)</li>
                <li>Pulsanti rettangolari spigolosi: la pillola è il nostro standard</li>
                <li>Più di un colore d&apos;accento per pagina</li>
                <li>Gradient pesanti, ombre nere, drop shadow drammatici</li>
                <li>Emoji nel copy</li>
                <li>Stock photo di &ldquo;famiglia felice in hotel&rdquo; — mai</li>
              </ul>
            </Card>
          </Grid>
        </Section>

      </main>

      <footer
        style={{
          padding: "48px 32px",
          textAlign: "center",
          color: "var(--bb-ink-mute)",
          fontSize: 13,
        }}
      >
        Bed&amp;Bed Design System · v1.0 · da consegnare con BRIEF.md e HANDOFF.md
      </footer>
    </div>
  );
}
