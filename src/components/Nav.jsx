import { useState } from "react";
import { PillButton } from "./primitives.jsx";
import { NAV_ITEMS } from "../data/content.js";

/**
 * Nav — the sticky top bar (`Wo` in the origin bundle).
 *
 * Desktop: logotype · centred links (56px gap) · Login pill.
 * ≤860px: links + Login collapse into a hamburger that opens a stacked sheet
 * pinned below the bar. The active item is marked with a 6px accent square.
 */
export function Nav({ current, onNavigate, onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (item) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(item);
  };

  return (
    <nav
      className="pk-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 80,
        padding: "0 var(--page-px)",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 24,
        background: "var(--bg-page)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
      }}
    >
      <a
        href="#"
        onClick={go("HOME")}
        aria-label="Peken Banyumasan — beranda"
        style={{ gridColumn: 1 }}
      >
        <img
          src="./assets/logotype-peken-nav.png"
          alt="Peken Banyumasan"
          style={{ width: 88, height: 50, display: "block" }}
        />
      </a>

      <ul
        className="pk-nav-center"
        style={{
          gridColumn: 2,
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          gap: 56,
        }}
      >
        {NAV_ITEMS.map((item) => {
          const active = item === current;
          return (
            <li key={item} style={{ position: "relative" }}>
              <a
                href="#"
                onClick={go(item)}
                aria-current={active ? "page" : undefined}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: ".04em",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
              {active && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: -12,
                    transform: "translateX(-50%)",
                    width: 6,
                    height: 6,
                    background: "var(--accent)",
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>

      <span className="pk-nav-login" style={{ gridColumn: 3, justifySelf: "end" }}>
        <PillButton onClick={onLogin} ariaLabel="Buka pilihan login">
          Login
        </PillButton>
      </span>

      <button
        className="pk-nav-burger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
        style={{
          gridColumn: 3,
          justifySelf: "end",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          background: "transparent",
          border: 0,
          cursor: "pointer",
          padding: 8,
        }}
      >
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            zIndex: 49,
            background: "var(--bg-page)",
            borderBottom: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            flexDirection: "column",
            padding: "8px var(--page-px) 20px",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={go(item)}
              aria-current={item === current ? "page" : undefined}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                letterSpacing: ".04em",
                color: item === current ? "var(--accent)" : "#fff",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,.06)",
              }}
            >
              {item}
            </a>
          ))}
          <div style={{ marginTop: 16 }}>
            <PillButton
              onClick={() => {
                setMenuOpen(false);
                onLogin();
              }}
              ariaLabel="Buka pilihan login"
            >
              Login
            </PillButton>
          </div>
        </div>
      )}
    </nav>
  );
}
