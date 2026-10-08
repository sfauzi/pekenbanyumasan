import { useEffect, useState } from "react";
import { ProgramRow } from "../components/ProgramRow.jsx";
import { Eyebrow, Loading } from "../components/primitives.jsx";
import { PROGRAMS } from "../data/content.js";
import { companyProfile } from "../lib/api.js";

/** Program — the six-program index, rows alternating side (`Vh`). */
export function Program({ onNavigate }) {
  const [programs, setPrograms] = useState(PROGRAMS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    companyProfile
      .get("programs")
      .then((data) => {
        if (Array.isArray(data) && data.length) setPrograms(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      <section style={{ padding: "100px var(--page-px) 60px" }}>
        <Eyebrow style={{ color: "var(--accent)" }}>PROGRAM · ENAM PILAR PEKEN</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(30px, 6vw, 56px)",
            lineHeight: 1.15,
            margin: "24px 0 0",
            maxWidth: 1e3,
          }}
        >
          Enam program yang berulang setiap edisi — dari peragaan busana hingga panggung cerita
          lisan.
        </h1>
      </section>

      <section style={{ padding: "40px var(--page-px) 100px" }}>
        {programs.map((program, index) => (
          <ProgramRow
            key={program.n}
            program={program}
            flip={index % 2 === 1}
            onNavigate={onNavigate}
          />
        ))}
      </section>
    </main>
  );
}
