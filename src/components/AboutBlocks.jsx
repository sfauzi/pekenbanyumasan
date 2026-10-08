import { useState } from "react";
import { Eyebrow } from "./primitives.jsx";

/** KeyPersonCard — portrait + role, bio slides open on hover/focus (`Fh`). */
export function KeyPersonCard({ photo, role, name, title, bio }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid rgba(195,202,150,.22)",
        outlineOffset: 2,
        display: "flex",
        flexDirection: "column",
        transition: "border-color 320ms cubic-bezier(.22,.61,.36,1)",
      }}
    >
      <div
        style={{
          aspectRatio: "1/1",
          background: `url('${photo}') center/cover`,
          borderBottom: "1px solid rgba(195,202,150,.22)",
        }}
      />
      <div style={{ padding: 24 }}>
        <Eyebrow style={{ color: "var(--accent)" }}>{role}</Eyebrow>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 16,
            fontWeight: 500,
            color: "#fff",
            marginTop: 8,
            lineHeight: 1.3,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--fg-secondary)",
            marginTop: 4,
          }}
        >
          {title}
        </div>
        <div
          style={{
            maxHeight: open ? 280 : 0,
            opacity: open ? 1 : 0,
            overflow: "hidden",
            transition:
              "max-height 320ms cubic-bezier(.22,.61,.36,1), opacity 320ms cubic-bezier(.22,.61,.36,1) 80ms",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.8,
              color: "#fff",
              margin: "20px 0 0",
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {bio}
          </p>
        </div>
      </div>
    </article>
  );
}

/** HelixCard — one of the six collaboration sectors (`Nh`). */
export function HelixCard({ name, body }) {
  return (
    <div
      className="helix-card"
      tabIndex={0}
      style={{
        borderTop: "1px solid rgba(255,255,255,.15)",
        paddingTop: 24,
        paddingInline: 16,
        paddingBottom: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        outlineOffset: 2,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 18,
          color: "var(--accent)",
          letterSpacing: ".02em",
        }}
      >
        {name}
      </div>
      <p
        className="helix-body"
        style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.8, margin: 0 }}
      >
        {body}
      </p>
    </div>
  );
}

/** PillarItem — numbered pillar with label + body (`Bh`). */
export function PillarItem({ n, label, body }) {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 14,
            color: "var(--accent)",
          }}
        >
          {label}
        </div>
        <div
          style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: "var(--fg-muted)" }}
        >
          {n}
        </div>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.8,
          color: "var(--fg-secondary)",
          margin: "24px 0 0",
          maxWidth: "42ch",
        }}
      >
        {body}
      </p>
    </div>
  );
}

/** StatBlock — oversized numeral plus caption (`Dh`). */
export function StatBlock({ n, label }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: "clamp(40px, 10vw, 96px)",
          lineHeight: 1,
          color: "var(--accent)",
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-secondary)",
          marginTop: 12,
          letterSpacing: ".04em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
