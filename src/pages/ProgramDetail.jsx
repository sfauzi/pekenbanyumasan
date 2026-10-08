import { useEffect, useState } from "react";
import { RichText } from "../components/RichText.jsx";
import { PillButton, Eyebrow, Loading } from "../components/primitives.jsx";
import { PROGRAMS } from "../data/content.js";
import { companyProfile } from "../lib/api.js";

/** MetaRow — one label + value pair in the detail sidebar. */
function MetaRow({ label, children }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--fg-secondary)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/**
 * ProgramDetail — a single program page (`Hv`).
 *
 * A 60vh image header with a bottom-anchored eyebrow + title, then a 1.6fr/1fr
 * grid: the body on the left, the metadata sidebar on the right.
 */
export function ProgramDetail({ programId, onBack }) {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const match = (list) =>
      (Array.isArray(list) ? list : []).find((p) => p.slug === programId || p.n === programId);

    companyProfile
      .get("programs")
      .then((data) => setProgram(match(data) || match(PROGRAMS) || null))
      .catch(() => setProgram(match(PROGRAMS) || null))
      .finally(() => setLoading(false));
  }, [programId]);

  if (loading) return <Loading minHeight="40vh" />;

  if (!program) {
    return (
      <main
        style={{
          background: "var(--bg-page)",
          color: "#fff",
          padding: "clamp(40px, 8vw, 120px)",
          textAlign: "center",
        }}
      >
        <Eyebrow style={{ color: "var(--accent)" }}>PROGRAM · TIDAK DITEMUKAN</Eyebrow>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--fg-secondary)", marginTop: 24 }}>
          Program tidak ditemukan.
        </p>
        <div style={{ marginTop: 36 }}>
          <PillButton onClick={onBack}>← Kembali ke Program</PillButton>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      <section
        style={{
          position: "relative",
          height: "60vh",
          background: `url('${program.image_url}') center/cover no-repeat`,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(13,13,13,.3), rgba(13,13,13,.85))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "60px var(--page-px)",
          }}
        >
          <Eyebrow style={{ color: "var(--accent)", marginBottom: 12 }}>
            PROGRAM · {program.n}
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(30px, 6vw, 52px)",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 900,
            }}
          >
            {program.title}
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px var(--page-px) 120px", maxWidth: 1200 }}>
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80 }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 2,
                color: "var(--fg-secondary)",
              }}
            >
              <RichText>{program.body || program.body_short || ""}</RichText>
            </div>
            <div style={{ marginTop: 48 }}>
              <PillButton onClick={onBack}>← Kembali ke Program</PillButton>
            </div>
          </div>

          <div
            style={{
              borderLeft: "1px solid rgba(255,255,255,.08)",
              paddingLeft: 48,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {program.target_peserta && (
              <MetaRow label="Target Peserta">{program.target_peserta}</MetaRow>
            )}
            {program.durasi && <MetaRow label="Durasi">{program.durasi}</MetaRow>}
            <MetaRow label="Program">Enam program berulang setiap edisi Peken Banyumasan</MetaRow>
          </div>
        </div>
      </section>
    </main>
  );
}
