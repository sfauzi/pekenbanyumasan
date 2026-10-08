import { useState } from "react";

/**
 * PillButton — the site's single button primitive (`Xe` in the origin bundle).
 *
 * A label sits on an accent bar; a square cap on the right carries a small dot
 * that slides 6px left on hover/focus. `inverse` swaps the accent/ink pair so
 * the same control reads correctly on sage backgrounds.
 */
export function PillButton({ children, style, onClick, inverse, type = "button", ariaLabel }) {
  const [active, setActive] = useState(false);

  const surface = inverse ? "var(--accent-ink)" : "var(--accent)";
  const label = inverse ? "var(--accent)" : "var(--accent-ink)";
  const capBg = inverse ? "var(--accent)" : "var(--accent-ink)";
  const dotBg = inverse ? "var(--accent-ink)" : "var(--accent)";

  return (
    <button
      type={type}
      className="pill-button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        height: 29,
        padding: "0 0 0 16px",
        background: surface,
        color: label,
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: ".04em",
        outlineOffset: 2,
        ...(style || {}),
      }}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        style={{
          width: 29,
          height: 29,
          background: capBg,
          display: "grid",
          placeItems: "center",
          transform: active ? "translateX(-6px)" : "translateX(0)",
          transition: "transform 320ms cubic-bezier(.22,.61,.36,1)",
        }}
      >
        <span style={{ width: 9, height: 9, background: dotBg, display: "block" }} />
      </span>
    </button>
  );
}

/** Eyebrow — small uppercase section label (`Je`). */
export function Eyebrow({ children, style }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: ".02em",
        color: "var(--fg-secondary)",
        textTransform: "uppercase",
        ...(style || {}),
      }}
    >
      {children}
    </div>
  );
}

/** Wordmark — the "PEKEN ◆ BANYUMASAN" lockup used in hero and manifesto (`us`). */
export function Wordmark({ size = 16, color = "#fff", gap = 10 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: size,
        color,
        lineHeight: 1,
      }}
    >
      <span>PEKEN</span>
      <img src="./assets/logo-peken-banyumasan.png" alt="" style={{ width: size, height: size }} />
      <span>BANYUMASAN</span>
    </span>
  );
}

/** Loading — the sage spinner shown while a screen waits on content (`ji`). */
export function Loading({ minHeight = "70vh" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight,
        background: "var(--bg-page)",
      }}
    >
      <div
        aria-label="Memuat"
        role="status"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "3px solid rgba(195,202,150,.2)",
          borderTopColor: "var(--accent, #C3CA96)",
          animation: "spin .8s linear infinite",
        }}
      />
    </div>
  );
}

/** SectionHeader — eyebrow + display title + optional trailing action (`Wa`). */
export function SectionHeader({ eyebrow, title, right, style, align = "left" }) {
  return (
    <div
      className="cp-section-header"
      style={{
        display: align === "center" ? "block" : "grid",
        gridTemplateColumns: align === "center" ? undefined : "1fr auto",
        alignItems: "baseline",
        paddingBottom: 24,
        marginBottom: 40,
        textAlign: align,
        ...(style || {}),
      }}
    >
      <div>
        {eyebrow && (
          <Eyebrow
            style={{
              color: "var(--accent)",
              marginBottom: 14,
              ...(align === "center" ? { display: "inline-block" } : {}),
            }}
          >
            {eyebrow}
          </Eyebrow>
        )}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 32,
            color: "#fff",
            lineHeight: 1.25,
            maxWidth: 800,
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {title}
        </div>
      </div>
      {right}
    </div>
  );
}

/** Italic accent span used inside display headlines (`em` with Playfair). */
export function AccentEm({ children }) {
  return (
    <em
      style={{
        fontFamily: "var(--font-italic)",
        fontStyle: "italic",
        color: "var(--accent)",
      }}
    >
      {children}
    </em>
  );
}
