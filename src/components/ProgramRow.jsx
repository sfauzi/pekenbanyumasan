import { PhotoTile } from "./PhotoTile.jsx";
import { PillButton } from "./primitives.jsx";

/**
 * ProgramRow — one row of the Program index (`$h` in the origin bundle).
 *
 * A 1.2fr/1fr grid that alternates sides via `flip`; the copy column carries
 * the oversized number, title, body and a "Selengkapnya" pill.
 */
export function ProgramRow({ program, flip, onNavigate }) {
  const media = (
    <PhotoTile
      src={program.image_url}
      alt={program.title}
      aspect="16/9"
      mode="hover"
      style={{ width: "100%" }}
      caption={
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            PROGRAM · {program.n}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 18,
              color: "#fff",
            }}
          >
            {program.title}
          </div>
        </div>
      }
    />
  );

  const copy = (
    <div
      style={{ padding: "40px 40px 40px 0", display: "flex", flexDirection: "column", gap: 20 }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "clamp(32px, 7vw, 64px)",
            lineHeight: 1,
            color: "var(--accent)",
          }}
        >
          {program.n}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#fff" }}>
          {program.title}
        </div>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.9,
          color: "var(--fg-secondary)",
          margin: 0,
          maxWidth: "52ch",
        }}
      >
        {program.body}
      </p>
      <div>
        <PillButton
          onClick={() => onNavigate && onNavigate("PROGRAM_DETAIL", program.slug || program.n)}
        >
          Selengkapnya
        </PillButton>
      </div>
    </div>
  );

  return (
    <div
      className={`cp-program-row${flip ? " is-flip" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: flip ? "1fr 1.2fr" : "1.2fr 1fr",
        gap: 40,
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,.08)",
        paddingBlock: 24,
      }}
    >
      {flip ? copy : media}
      {flip ? media : copy}
    </div>
  );
}
