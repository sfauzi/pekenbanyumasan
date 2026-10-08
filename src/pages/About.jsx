import { useEffect, useState } from "react";
import { RevealToAccent } from "../components/RevealToAccent.jsx";
import { PillarItem, HelixCard, KeyPersonCard, StatBlock } from "../components/AboutBlocks.jsx";
import { Eyebrow, Wordmark, SectionHeader, AccentEm, Loading } from "../components/primitives.jsx";
import {
  ABOUT_CONTENT,
  ABOUT_STATS,
  HEXA_HELIX,
  KEY_PEOPLE,
  LEGAL_DUKUNGAN,
  LEGAL_HUKUM,
} from "../data/content.js";
import { companyProfile, stats as statsApi } from "../lib/api.js";
import { compactNumber } from "../lib/utils.js";

/** About — manifesto, mirapat statement, pillars, visi, team, hexa-helix, legal (`Kh`). */
export function About() {
  const [team, setTeam] = useState(null);
  const [about, setAbout] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      companyProfile.get("tim").then((data) => data && setTeam(data)),
      companyProfile.get("about").then((data) => data && setAbout(data)),
    ]).finally(() => setLoading(false));
    statsApi
      .public()
      .then((data) => data && setStats(data))
      .catch(() => {});
  }, []);

  const content = { ...ABOUT_CONTENT, ...(about || {}) };
  const pillars = content.pillars?.length ? content.pillars : ABOUT_CONTENT.pillars;
  const helix = team?.hexa_helix?.length ? team.hexa_helix : HEXA_HELIX;
  const people = team?.key_people?.length ? team.key_people : KEY_PEOPLE;
  const baseStats = content.stats?.length
    ? content.stats
    : team?.stats?.length
      ? team.stats
      : ABOUT_STATS;
  const statCards = stats
    ? [
        { n: compactNumber(stats.edisi_count), label: "Edisi Peken diselenggarakan" },
        { n: compactNumber(stats.kolaborator_aktif), label: "Kolaborator aktif" },
        { n: compactNumber(stats.artisan_aktif), label: "Artisan terlibat" },
        { n: compactNumber(stats.pengunjung_total), label: "Pengunjung setiap edisi" },
      ]
    : baseStats;

  const hero = (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('./assets/banner-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,.6)" }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: "0 var(--page-px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Eyebrow style={{ color: "var(--accent)" }}>ABOUT · TENTANG KAMI</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(30px, 6vw, 56px)",
            lineHeight: 1.15,
            margin: "24px auto 0",
            maxWidth: 960,
          }}
        >
          {content.hero_headline}
        </h1>
      </div>
    </section>
  );

  const manifesto = (
    <section
      style={{
        padding: "100px var(--page-px)",
        background: "var(--accent)",
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
  );

  if (loading) return <Loading />;

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      <RevealToAccent
        before={hero}
        after={manifesto}
        mode="sticky"
        pinHeight="200vh"
        fromColor="var(--bg-page)"
        toColor="var(--accent)"
      />

      {/* mirapat */}
      <section style={{ padding: "120px var(--page-px) 60px", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: ".04em",
            color: "var(--accent)",
            padding: "6px 12px",
            border: "1px solid var(--accent)",
            marginBottom: 40,
          }}
        >
          #MIRAPAT
          <span aria-hidden="true" style={{ width: 4, height: 4, background: "var(--accent)" }} />
          BANYUMASAN
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.9,
            color: "var(--fg-secondary)",
            margin: "0 auto",
            maxWidth: "62ch",
          }}
        >
          {content.mirapat_intro}
        </p>
        <blockquote
          style={{
            margin: "60px auto",
            padding: "32px 0",
            borderTop: "1px solid rgba(255,255,255,.15)",
            borderBottom: "1px solid rgba(255,255,255,.15)",
            fontFamily: "var(--font-italic)",
            fontStyle: "italic",
            fontSize: 28,
            lineHeight: 1.5,
            color: "#fff",
            maxWidth: "44ch",
          }}
        >
          {content.mirapat_quote}
        </blockquote>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.9,
            color: "var(--fg-secondary)",
            margin: "0 auto",
            maxWidth: "62ch",
          }}
        >
          {content.mirapat_closing}
        </p>
      </section>

      {/* pillars */}
      <section style={{ padding: "60px var(--page-px) 100px" }}>
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}
        >
          {pillars.map((pillar, index) => (
            <PillarItem key={index} n={pillar.n} label={pillar.label} body={pillar.body} />
          ))}
        </div>
      </section>

      {/* visi / tujuan / sasaran */}
      <section
        style={{
          padding: "120px var(--page-px)",
          background: "var(--accent)",
          color: "var(--accent-ink)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: ".08em",
              color: "var(--peken-smoke)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            VISI
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: 1.4,
              color: "var(--accent-ink)",
              margin: 0,
              maxWidth: "44ch",
            }}
          >
            {content.visi}
          </p>
        </div>

        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            paddingTop: 60,
            borderTop: "1px solid rgba(13,13,13,.18)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: ".08em",
                color: "var(--peken-smoke)",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              TUJUAN
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                margin: 0,
                color: "var(--accent-ink)",
                maxWidth: "56ch",
              }}
            >
              {content.tujuan}
            </p>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: ".08em",
                color: "var(--peken-smoke)",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              SASARAN
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                margin: 0,
                color: "var(--accent-ink)",
                maxWidth: "56ch",
              }}
            >
              {content.sasaran}
            </p>
          </div>
        </div>
      </section>

      {/* key people */}
      <section style={{ padding: "120px var(--page-px)" }}>
        <SectionHeader
          eyebrow="KEY PEOPLE · TIM INTI"
          title={
            <>
              Orang-orang yang menjaga <AccentEm>denyut</AccentEm> Peken setiap edisi.
            </>
          }
        />
        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          {people.map((person, index) => (
            <KeyPersonCard
              key={index}
              photo={person.photo || person.foto_url}
              role={person.role}
              name={person.name || person.nama}
              title={person.title}
              bio={person.bio}
            />
          ))}
        </div>
      </section>

      {/* hexa-helix */}
      <section
        style={{ padding: "120px var(--page-px)", background: "var(--bg-elevated)", color: "#fff" }}
      >
        <SectionHeader
          eyebrow="MODEL KOLABORASI · HEXA-HELIX"
          title={
            <>
              Enam pilar yang menjaga Peken tetap <AccentEm>berimbang</AccentEm> — bukan hanya
              berjalan.
            </>
          }
        />
        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: 20,
            columnGap: 0,
          }}
        >
          {helix.map((item, index) => (
            <HelixCard key={index} name={item.name} body={item.body} />
          ))}
        </div>
      </section>

      {/* legalitas */}
      <section
        style={{ padding: "120px var(--page-px)", background: "var(--bg-page)", color: "#fff" }}
      >
        <SectionHeader
          eyebrow="LEGALITAS & DUKUNGAN"
          title="Landasan hukum dan jaringan dukungan kelembagaan."
        />
        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 60,
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: ".08em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Dukungan Kelembagaan
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--fg-secondary)",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {team?.legalitas_dukungan || LEGAL_DUKUNGAN}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 40,
              alignSelf: "center",
            }}
          >
            <img
              src="./assets/logo-peken-banyumasan.png"
              alt="Logo Peken Banyumasan"
              style={{ width: 100, height: 100 }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: ".08em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Landasan Legalitas
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--fg-secondary)",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {team?.legalitas_hukum || LEGAL_HUKUM}
            </p>
          </div>
        </div>
      </section>

      {/* ecosystem stats */}
      <section style={{ padding: "100px var(--page-px)", background: "var(--bg-elevated)" }}>
        <Eyebrow style={{ color: "var(--accent)", marginBottom: 40 }}>
          EKOSISTEM PEKEN · SEJAK FEBRUARI 2022
        </Eyebrow>
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}
        >
          {statCards.map((stat, index) => (
            <StatBlock key={index} n={stat.n} label={stat.label} />
          ))}
        </div>
      </section>
    </main>
  );
}
