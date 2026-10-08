import { useEffect, useState } from "react";
import { HeroCarousel } from "../components/HeroCarousel.jsx";
import { PixelBand } from "../components/PixelBand.jsx";
import { PhotoTile, ColorPin } from "../components/PhotoTile.jsx";
import {
  PillButton,
  Eyebrow,
  Wordmark,
  SectionHeader,
  AccentEm,
  Loading,
} from "../components/primitives.jsx";
import { HOME_CONTENT, PROGRAMS_HOME } from "../data/content.js";
import { companyProfile, events as eventsApi } from "../lib/api.js";
import { describeEvent, upcomingEvents } from "../lib/utils.js";

/** Home — hero carousel, manifesto, agenda, six-program strip, location (`_f`). */
export function Home({ onNavigate }) {
  const [programs, setPrograms] = useState(PROGRAMS_HOME);
  const [content, setContent] = useState(() => {
    const next = upcomingEvents(1)[0] || null;
    return next ? { ...HOME_CONTENT, ...describeEvent(next) } : HOME_CONTENT;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    companyProfile
      .get("programs")
      .then((data) => {
        if (Array.isArray(data) && data.length) setPrograms(data.slice(0, 6));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    companyProfile
      .get("home")
      .then((data) => {
        if (data) setContent((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    eventsApi
      .upcoming({ limit: 1 })
      .then((data) => {
        const first = Array.isArray(data) ? data[0] : data;
        const described = describeEvent(first);
        if (described) setContent((prev) => ({ ...prev, ...described }));
      })
      .catch(() => {});
  }, []);

  if (loading) return <Loading />;

  return (
    <main style={{ background: "var(--bg-page)" }}>
      <HeroCarousel slides={content.hero_slides}>
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
        >
          <PixelBand fullHeight />
        </div>

        <section
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: 640,
            padding: "100px var(--page-px) 100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
          }}
        >
          <Eyebrow style={{ color: "var(--accent)" }}>{content.hero_eyebrow}</Eyebrow>
          <div style={{ textAlign: "center" }}>
            <Wordmark size={28} gap={18} />
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(32px, 7vw, 64px)",
                color: "#fff",
                lineHeight: 1.1,
                margin: "28px 0 0",
                maxWidth: 980,
                textAlign: "center",
              }}
            >
              {content.hero_headline_pre} <AccentEm>{content.hero_headline_em}</AccentEm>
              {content.hero_headline_post}
            </h1>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <PillButton onClick={() => onNavigate("PROGRAM")}>Detail Agenda</PillButton>
            <PillButton inverse onClick={() => onNavigate("ABOUT")}>
              Tentang Peken
            </PillButton>
          </div>
        </section>
      </HeroCarousel>

      {/* manifesto band */}
      <section
        style={{
          padding: "80px var(--page-px)",
          background: "var(--bg-inverse)",
          color: "var(--accent-ink)",
        }}
      >
        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr 1fr",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          <div>
            <Wordmark size={16} color="var(--accent-ink)" />
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.8,
              margin: 0,
              color: "var(--accent-ink)",
              whiteSpace: "pre-line",
            }}
          >
            {content.manifesto_col1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.8,
              margin: 0,
              color: "var(--accent-ink)",
              whiteSpace: "pre-line",
            }}
          >
            {content.manifesto_col2}
          </p>
        </div>
      </section>

      {/* agenda */}
      <section
        style={{ padding: "100px var(--page-px)", background: "var(--bg-page)", color: "#fff" }}
      >
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <div>
            <Eyebrow style={{ color: "#fff" }}>
              AGENDA
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  background: "var(--accent)",
                  margin: "0 10px",
                  verticalAlign: "2px",
                }}
              />
              TERDEKAT
            </Eyebrow>
            <div
              style={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "clamp(44px, 13vw, 128px)",
                lineHeight: 1,
                color: "var(--accent)",
                marginTop: 24,
              }}
            >
              {content.agenda_date}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, marginTop: 12 }}>
              {content.agenda_label}
            </div>
            <div
              style={{
                marginTop: 12,
                color: "var(--fg-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              {content.agenda_lokasi}
            </div>
          </div>

          <div>
            <img
              src="./assets/logo-peken-banyumasan.png"
              alt=""
              style={{ width: 30, height: 30, marginBottom: 20 }}
            />
            {content.agenda_nama && (
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  margin: "0 0 14px",
                }}
              >
                {content.agenda_nama}
              </h3>
            )}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--fg-secondary)",
                margin: 0,
                maxWidth: "44ch",
                whiteSpace: "pre-line",
              }}
            >
              {content.agenda_deskripsi}
            </p>
            <div style={{ marginTop: 36 }}>
              <PillButton onClick={() => onNavigate("PROGRAM")}>Detail Agenda</PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* six programs */}
      <section style={{ background: "var(--bg-page)" }}>
        <div style={{ padding: "100px var(--page-px) 40px" }}>
          <SectionHeader
            eyebrow="ENAM PROGRAM · TIAP EDISI"
            title={
              <>
                Setiap edisi Peken berputar pada <AccentEm>enam program</AccentEm> tetap.
              </>
            }
            right={
              <PillButton onClick={() => onNavigate("PROGRAM")}>Lihat Semua Program</PillButton>
            }
          />
        </div>
        <div
          className="cp-home-programs"
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}
        >
          {programs.map((program, index) => (
            <PhotoTile
              key={program.n}
              src={program.image_url}
              alt={program.title}
              aspect="480/520"
              mode="hover"
              onClick={() => onNavigate("PROGRAM")}
              ariaLabel={`Buka program ${program.title}`}
              corner={index < 5 ? "✕" : null}
              caption={
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    PROGRAM · {program.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: 16,
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {program.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      color: "var(--fg-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {program.body_short || program.body}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* location */}
      <section
        id="lokasi"
        style={{
          padding: "100px var(--page-px)",
          background: "var(--bg-elevated)",
          color: "#fff",
        }}
      >
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          <div>
            <Eyebrow style={{ color: "var(--accent)" }}>LOKASI</Eyebrow>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 400,
                color: "#fff",
                marginTop: 16,
                lineHeight: 1.25,
                whiteSpace: "pre-line",
              }}
            >
              {content.lokasi_headline}
            </div>
            <div
              className="cp-stack-mobile"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "var(--accent)",
                      marginRight: 10,
                    }}
                  />
                  Perjalanan menuju Peken Banyumasan
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--fg-secondary)",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {content.lokasi_alamat}
                </div>
                <div style={{ marginTop: 16 }}>
                  <PillButton
                    onClick={() =>
                      content.lokasi_trans1_url &&
                      window.open(content.lokasi_trans1_url, "_blank", "noopener,noreferrer")
                    }
                  >
                    Rute Peken Banyumasan
                  </PillButton>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "var(--accent)",
                      marginRight: 10,
                    }}
                  />
                  Halte Trans Banyumas Terdekat
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--fg-secondary)",
                    lineHeight: 1.9,
                    whiteSpace: "pre-line",
                  }}
                >
                  {content.lokasi_trans}
                </div>
                <div style={{ marginTop: 16 }}>
                  <PillButton
                    onClick={() =>
                      content.lokasi_trans2_url &&
                      window.open(content.lokasi_trans2_url, "_blank", "noopener,noreferrer")
                    }
                  >
                    Trayek Trans Banyumas
                  </PillButton>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              aspectRatio: "16/11",
              background: "var(--bg-deep)",
              overflow: "hidden",
            }}
          >
            <img
              src={content.lokasi_image_url || "./assets/map-kota-lama.png"}
              alt="Peta kawasan Kota Lama Banyumas"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -60%)",
              }}
            >
              <ColorPin label="TAMAN SARI · BANYUMAS" targetId="lokasi" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
