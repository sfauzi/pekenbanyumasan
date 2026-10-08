import { NAV_ITEMS } from "../data/content.js";

/** FooterInfoBlock — one label plus one or more lines in the sage footer (`Vo`). */
function FooterInfoBlock({ label, lines }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      {lines.map((line, index) => (
        <div
          key={index}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            lineHeight: 1.8,
            color: "var(--accent-ink)",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

/**
 * Footer — sage panel plus the deep-ink legal strip (`Ko` in the origin).
 *
 * Three auto-fit columns: brand lockup and strapline, address/contact/social,
 * and a right-aligned sitemap with the six-pixel row.
 */
export function Footer({ onNavigate }) {
  const go = (item) => (event) => {
    event.preventDefault();
    if (onNavigate) onNavigate(item);
  };

  return (
    <footer>
      <div
        style={{
          background: "var(--accent)",
          color: "var(--accent-ink)",
          padding: "clamp(48px, 8vw, 80px) var(--page-px) clamp(40px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "clamp(32px, 5vw, 60px)",
          alignItems: "flex-start",
        }}
      >
        <div>
          <img
            src="./assets/logo-peken-banyumasan.png"
            alt=""
            style={{ width: 80, height: 80, mixBlendMode: "multiply" }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              lineHeight: 1.8,
              color: "var(--accent-ink)",
              maxWidth: "32ch",
              margin: "32px 0 0",
            }}
          >
            Ruang budaya dan ekonomi kreatif di Banyumas yang mempertemukan seni, Artisan, dan
            masyarakat dalam satu ruang kolaborasi yang hidup dan berkelanjutan.
          </p>
          <div
            style={{
              marginTop: 40,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            #MirapatBanyumasan
          </div>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          <FooterInfoBlock
            label="Alamat"
            lines={["Banyumas, Sudagaran, Kec. Banyumas,", "Kabupaten Banyumas, Jawa Tengah 53192"]}
          />
          <FooterInfoBlock
            label="Kontak"
            lines={["(+62) 812 3456 7899", "hello@pekenbanyumasan.id"]}
          />
          <FooterInfoBlock label="Sosial" lines={["Instagram · @pekenbanyumasan"]} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20 }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: ".04em",
            }}
          >
            SITEMAP
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              textAlign: "right",
              display: "grid",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontSize: 14,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={go(item)}
                  style={{ color: "var(--accent-ink)", textDecoration: "none" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div aria-hidden="true" style={{ marginTop: 20, display: "flex", gap: 4 }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} style={{ width: 8, height: 8, background: "var(--accent-ink)" }} />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "var(--bg-deep)",
          color: "var(--fg-muted)",
          padding: "16px var(--page-px)",
          fontFamily: "var(--font-body)",
          fontSize: 11,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>© {new Date().getFullYear()} Peken Banyumasan. All Rights Reserved.</span>
        <span>Design &amp; Code · Kolektif Kota Lama</span>
      </div>
    </footer>
  );
}
