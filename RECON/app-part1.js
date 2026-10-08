function Xe({ children: t, style: i, onClick: a, inverse: o, type: u = "button", ariaLabel: c }) {
  const [f, m] = re.useState(!1),
    g = o ? "var(--accent-ink)" : "var(--accent)",
    y = o ? "var(--accent)" : "var(--accent-ink)",
    k = o ? "var(--accent)" : "var(--accent-ink)",
    x = o ? "var(--accent-ink)" : "var(--accent)";
  return p.jsxs("button", {
    type: u,
    className: "pill-button",
    onClick: a,
    "aria-label": c,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      height: 29,
      padding: "0 0 0 16px",
      background: g,
      color: y,
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".04em",
      outlineOffset: 2,
      ...(i || {}),
    },
    children: [
      p.jsx("span", { children: t }),
      p.jsx("span", {
        "aria-hidden": "true",
        style: {
          width: 29,
          height: 29,
          background: k,
          display: "grid",
          placeItems: "center",
          transform: f ? "translateX(-6px)" : "translateX(0)",
          transition: "transform 320ms cubic-bezier(.22,.61,.36,1)",
        },
        children: p.jsx("span", {
          style: { width: 9, height: 9, background: x, display: "block" },
        }),
      }),
    ],
  });
}
const Ad = ["HOME", "ABOUT", "PROGRAM", "PUBLICATION", "GALLERY"];
function Wo({ current: t, onNavigate: i, onLogin: a }) {
  const [o, u] = re.useState(!1),
    c = (f) => (m) => {
      (m.preventDefault(), u(!1), i(f));
    };
  return p.jsxs("nav", {
    className: "pk-nav",
    style: {
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
    },
    children: [
      p.jsx("a", {
        href: "#",
        onClick: c("HOME"),
        "aria-label": "Peken Banyumasan — beranda",
        style: { gridColumn: 1 },
        children: p.jsx("img", {
          src: "/assets/logotype-peken-nav.png",
          alt: "Peken Banyumasan",
          style: { width: 88, height: 50, display: "block" },
        }),
      }),
      p.jsx("ul", {
        className: "pk-nav-center",
        style: {
          gridColumn: 2,
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          gap: 56,
        },
        children: Ad.map((f) => {
          const m = f === t;
          return p.jsxs(
            "li",
            {
              style: { position: "relative" },
              children: [
                p.jsx("a", {
                  href: "#",
                  onClick: c(f),
                  "aria-current": m ? "page" : void 0,
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: ".04em",
                    color: "#fff",
                    textDecoration: "none",
                  },
                  children: f,
                }),
                m &&
                  p.jsx("span", {
                    "aria-hidden": "true",
                    style: {
                      position: "absolute",
                      left: "50%",
                      bottom: -12,
                      transform: "translateX(-50%)",
                      width: 6,
                      height: 6,
                      background: "var(--accent)",
                    },
                  }),
              ],
            },
            f,
          );
        }),
      }),
      p.jsx("span", {
        className: "pk-nav-login",
        style: { gridColumn: 3, justifySelf: "end" },
        children: p.jsx(Xe, { onClick: a, ariaLabel: "Buka pilihan login", children: "Login" }),
      }),
      p.jsxs("button", {
        className: "pk-nav-burger",
        onClick: () => u((f) => !f),
        "aria-label": o ? "Tutup menu" : "Buka menu",
        "aria-expanded": o,
        style: {
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
        },
        children: [
          p.jsx("span", { style: { display: "block", width: 22, height: 2, background: "#fff" } }),
          p.jsx("span", { style: { display: "block", width: 22, height: 2, background: "#fff" } }),
          p.jsx("span", { style: { display: "block", width: 22, height: 2, background: "#fff" } }),
        ],
      }),
      o &&
        p.jsxs("div", {
          style: {
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
          },
          children: [
            Ad.map((f) =>
              p.jsx(
                "a",
                {
                  href: "#",
                  onClick: c(f),
                  "aria-current": f === t ? "page" : void 0,
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    letterSpacing: ".04em",
                    color: f === t ? "var(--accent)" : "#fff",
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,.06)",
                  },
                  children: f,
                },
                f,
              ),
            ),
            p.jsx("div", {
              style: { marginTop: 16 },
              children: p.jsx(Xe, {
                onClick: () => {
                  (u(!1), a());
                },
                ariaLabel: "Buka pilihan login",
                children: "Login",
              }),
            }),
          ],
        }),
    ],
  });
}
function Ko({ onNavigate: t }) {
  const i = (a) => (o) => {
    (o.preventDefault(), t && t(a));
  };
  return p.jsxs("footer", {
    children: [
      p.jsxs("div", {
        style: {
          background: "var(--accent)",
          color: "var(--accent-ink)",
          padding: "clamp(48px, 8vw, 80px) var(--page-px) clamp(40px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "clamp(32px, 5vw, 60px)",
          alignItems: "flex-start",
        },
        children: [
          p.jsxs("div", {
            children: [
              p.jsx("img", {
                src: "/assets/logo-peken-banyumasan.png",
                alt: "",
                style: { width: 80, height: 80, mixBlendMode: "multiply" },
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  lineHeight: 1.8,
                  color: "var(--accent-ink)",
                  maxWidth: "32ch",
                  margin: "32px 0 0",
                },
                children:
                  "Ruang budaya dan ekonomi kreatif di Banyumas yang mempertemukan seni, Artisan, dan masyarakat dalam satu ruang kolaborasi yang hidup dan berkelanjutan.",
              }),
              p.jsx("div", {
                style: {
                  marginTop: 40,
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 14,
                },
                children: "#MirapatBanyumasan",
              }),
            ],
          }),
          p.jsxs("div", {
            style: { display: "grid", gap: 24 },
            children: [
              p.jsx(Vo, {
                label: "Alamat",
                lines: [
                  "Banyumas, Sudagaran, Kec. Banyumas,",
                  "Kabupaten Banyumas, Jawa Tengah 53192",
                ],
              }),
              p.jsx(Vo, {
                label: "Kontak",
                lines: ["(+62) 812 3456 7899", "hello@pekenbanyumasan.id"],
              }),
              p.jsx(Vo, { label: "Sosial", lines: ["Instagram · @pekenbanyumasan"] }),
            ],
          }),
          p.jsxs("div", {
            style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20 },
            children: [
              p.jsx("div", {
                style: {
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: ".04em",
                },
                children: "SITEMAP",
              }),
              p.jsx("ul", {
                style: {
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "right",
                  display: "grid",
                  gap: 10,
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                },
                children: ["HOME", "ABOUT", "PROGRAM", "PUBLICATION", "GALLERY"].map((a) =>
                  p.jsx(
                    "li",
                    {
                      children: p.jsx("a", {
                        href: "#",
                        onClick: i(a),
                        style: { color: "var(--accent-ink)", textDecoration: "none" },
                        children: a,
                      }),
                    },
                    a,
                  ),
                ),
              }),
              p.jsx("div", {
                "aria-hidden": "true",
                style: { marginTop: 20, display: "flex", gap: 4 },
                children: Array.from({ length: 6 }).map((a, o) =>
                  p.jsx(
                    "div",
                    { style: { width: 8, height: 8, background: "var(--accent-ink)" } },
                    o,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      p.jsxs("div", {
        style: {
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
        },
        children: [
          p.jsxs("span", {
            children: ["© ", new Date().getFullYear(), " Peken Banyumasan. All Rights Reserved."],
          }),
          p.jsx("span", { children: "Design & Code · Kolektif Kota Lama" }),
        ],
      }),
    ],
  });
}
function Vo({ label: t, lines: i }) {
  return p.jsxs("div", {
    children: [
      p.jsx("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          marginBottom: 6,
        },
        children: t,
      }),
      i.map((a, o) =>
        p.jsx(
          "div",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 12,
              lineHeight: 1.8,
              color: "var(--accent-ink)",
            },
            children: a,
          },
          o,
        ),
      ),
    ],
  });
}
function Ss({ open: t, onClose: i, labelledBy: a, children: o, width: u = 720, padded: c = !0 }) {
  const f = re.useRef(null),
    m = re.useRef(null);
  return (
    re.useEffect(() => {
      if (!t) return;
      m.current = document.activeElement;
      const g = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const y = (k) => {
        if (k.key === "Escape") {
          i();
          return;
        }
        if (k.key !== "Tab") return;
        const x = f.current;
        if (!x) return;
        const b = x.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"]), input, select, textarea',
        );
        if (b.length === 0) return;
        const v = b[0],
          N = b[b.length - 1];
        k.shiftKey && document.activeElement === v
          ? (k.preventDefault(), N.focus())
          : !k.shiftKey && document.activeElement === N && (k.preventDefault(), v.focus());
      };
      return (
        window.addEventListener("keydown", y),
        setTimeout(() => {
          const k =
            f.current &&
            f.current.querySelector('a[href], button, input, [tabindex]:not([tabindex="-1"])');
          k && k.focus();
        }, 0),
        () => {
          (window.removeEventListener("keydown", y),
            (document.body.style.overflow = g),
            m.current && m.current.focus && m.current.focus());
        }
      );
    }, [t, i]),
    t
      ? p.jsx("div", {
          className: "peken-modal-backdrop",
          role: "presentation",
          onClick: (g) => {
            g.target === g.currentTarget && i();
          },
          children: p.jsx("div", {
            ref: f,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": a,
            style: {
              background: "var(--bg-elevated)",
              border: "1px solid var(--accent)",
              width: `min(${u}px, calc(100vw - 48px))`,
              maxHeight: "calc(100vh - 48px)",
              overflowY: "auto",
              padding: c ? 48 : 0,
              color: "#fff",
            },
            children: o,
          }),
        })
      : null
  );
}
function Je({ children: t, style: i }) {
  return p.jsx("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: ".02em",
      color: "var(--fg-secondary)",
      textTransform: "uppercase",
      ...(i || {}),
    },
    children: t,
  });
}
function us({ size: t = 16, color: i = "#fff", gap: a = 10 }) {
  return p.jsxs("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: a,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: t,
      color: i,
      lineHeight: 1,
    },
    children: [
      p.jsx("span", { children: "PEKEN" }),
      p.jsx("img", {
        src: "/assets/logo-peken-banyumasan.png",
        alt: "",
        style: { width: t, height: t },
      }),
      p.jsx("span", { children: "BANYUMASAN" }),
    ],
  });
}
const yh = {
  kolaborator: {
    envVar: "VITE_KOLABORATOR_URL",
    url: "https://kolabolator-pekenbanyumasan.pages.dev",
  },
  artisan: { envVar: "VITE_ARTISAN_URL", url: "https://artisan-pekenbanyumasan.pages.dev" },
};
function $o({ open: t, onClose: i }) {
  const a = (o) => () => {
    const u = yh[o],
      c = u?.url;
    if (!c) {
      console.warn(
        `[LoginModal] ${u?.envVar ?? "env var"} is not set; cannot navigate to ${o} login.`,
      );
      return;
    }
    ((window.location.href = `${c.replace(/\/+$/, "")}/login`), i());
  };
  return p.jsx(Ss, {
    open: t,
    onClose: i,
    labelledBy: "login-modal-title",
    width: 760,
    children: p.jsxs("div", {
      style: { display: "flex", flexDirection: "column", gap: 32 },
      children: [
        p.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
          },
          children: [
            p.jsxs("div", {
              children: [
                p.jsx(Je, { style: { color: "var(--accent)" }, children: "MASUK · PILIH PERAN" }),
                p.jsx("h2", {
                  id: "login-modal-title",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: 28,
                    lineHeight: 1.25,
                    color: "#fff",
                    margin: "16px 0 0",
                    maxWidth: "32ch",
                  },
                  children: "Pilih peranmu untuk melanjutkan.",
                }),
              ],
            }),
            p.jsx("button", {
              onClick: i,
              "aria-label": "Tutup modal",
              style: {
                background: "transparent",
                border: 0,
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
                padding: 4,
                fontFamily: "var(--font-display)",
                lineHeight: 1,
              },
              children: "✕",
            }),
          ],
        }),
        p.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 16,
          },
          children: [
            p.jsx(Ld, {
              role: "Kolaborator",
              tagline: "Profesional kreatif & institusi terkurasi",
              body: "Untuk fotografer, jurnalis, kurator, brand, dan lembaga yang ingin berkontribusi karya editorial atau program kolaboratif ke ekosistem Peken.",
              onClick: a("kolaborator"),
            }),
            p.jsx(Ld, {
              role: "Artisan",
              tagline: "Perajin & pelaku usaha lokal Peken",
              body: "Untuk perajin dan pelaku usaha lokal yang ingin memajang produk dan profil usaha sebagai bagian dari katalog karya Peken.",
              onClick: a("artisan"),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ld({ role: t, tagline: i, body: a, onClick: o }) {
  return p.jsxs("div", {
    style: {
      background: "var(--bg-page)",
      border: "1px solid rgba(195,202,150,.25)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 280,
    },
    children: [
      p.jsx("img", {
        src: "/assets/logo-peken-banyumasan.png",
        alt: "",
        style: { width: 32, height: 32 },
      }),
      p.jsxs("div", {
        children: [
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 20,
              color: "#fff",
            },
            children: t,
          }),
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--accent)",
              marginTop: 4,
            },
            children: i,
          }),
        ],
      }),
      p.jsx("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 13,
          lineHeight: 1.7,
          color: "var(--fg-secondary)",
          margin: 0,
        },
        children: a,
      }),
      p.jsx("div", {
        style: { marginTop: "auto", paddingTop: 16 },
        children: p.jsxs(Xe, { onClick: o, children: ["Masuk sebagai ", t] }),
      }),
    ],
  });
}
function js() {
  const [t, i] = re.useState(
    () =>
      typeof window < "u" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  return (
    re.useEffect(() => {
      if (!window.matchMedia) return;
      const a = window.matchMedia("(prefers-reduced-motion: reduce)"),
        o = (u) => i(u.matches);
      return (
        a.addEventListener ? a.addEventListener("change", o) : a.addListener(o),
        () => (a.removeEventListener ? a.removeEventListener("change", o) : a.removeListener(o))
      );
    }, []),
    t
  );
}
const Rd = 40,
  kh = [1440, 320],
  vh = [
    [0, 280],
    [40, 280],
    [80, 280],
    [120, 280],
    [160, 280],
    [200, 280],
    [240, 280],
    [0, 240],
    [40, 240],
    [120, 240],
    [160, 240],
    [200, 240],
    [40, 200],
    [80, 200],
    [160, 200],
    [0, 160],
    [120, 160],
    [40, 120],
    [320, 280],
    [400, 280],
    [520, 280],
    [880, 280],
    [1e3, 280],
    [1080, 280],
    [1160, 280],
    [1200, 280],
    [1240, 280],
    [1280, 280],
    [1320, 280],
    [1360, 280],
    [1400, 280],
    [1200, 240],
    [1240, 240],
    [1280, 240],
    [1360, 240],
    [1400, 240],
    [1240, 200],
    [1320, 200],
    [1360, 200],
    [1280, 160],
    [1400, 160],
    [1360, 120],
  ];
function xh({ height: t, bgColor: i = "transparent", style: a, fullHeight: o = !1 }) {
  const u = js(),
    [c, f] = kh,
    m = o
      ? { width: "100%", height: "100%", display: "block" }
      : { height: t || 200, width: "100%", display: "block" },
    g = o
      ? { background: i, lineHeight: 0, position: "absolute", inset: 0, ...(a || {}) }
      : { background: i, lineHeight: 0, ...(a || {}) };
  return p.jsx("div", {
    style: g,
    children: p.jsx("svg", {
      className: "pixel-flicker",
      viewBox: `0 0 ${c} ${f}`,
      preserveAspectRatio: "xMidYMax meet",
      shapeRendering: "crispEdges",
      fill: "var(--accent)",
      style: m,
      "aria-hidden": "true",
      children: vh.map(([y, k], x) =>
        p.jsx(
          "rect",
          {
            x: y,
            y: k,
            width: Rd,
            height: Rd,
            style: u
              ? null
              : { animationDelay: `${x % 2 === 0 ? (x * 389) % 14e3 : (x * 647 + 4200) % 14e3}ms` },
          },
          x,
        ),
      ),
    }),
  });
}
function Wa({ eyebrow: t, title: i, right: a, style: o, align: u = "left" }) {
  return p.jsxs("div", {
    className: "cp-section-header",
    style: {
      display: u === "center" ? "block" : "grid",
      gridTemplateColumns: u === "center" ? void 0 : "1fr auto",
      alignItems: "baseline",
      paddingBottom: 24,
      marginBottom: 40,
      textAlign: u,
      ...(o || {}),
    },
    children: [
      p.jsxs("div", {
        children: [
          t &&
            p.jsx(Je, {
              style: {
                color: "var(--accent)",
                marginBottom: 14,
                ...(u === "center" ? { display: "inline-block" } : {}),
              },
              children: t,
            }),
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 32,
              color: "#fff",
              lineHeight: 1.25,
              maxWidth: 800,
              marginInline: u === "center" ? "auto" : void 0,
            },
            children: i,
          }),
        ],
      }),
      a,
    ],
  });
}
function Si({
  src: t,
  alt: i = "",
  aspect: a = "480/260",
  mode: o = "static",
  corner: u,
  caption: c,
  onClick: f,
  style: m,
  eager: g = !1,
  ariaLabel: y,
}) {
  const k = o === "hover",
    x = o === "static",
    b = "photo-tile" + (k ? " photo-tile--hover" : "");
  return p.jsxs("div", {
    className: b,
    role: f ? "button" : void 0,
    "aria-label": y,
    style: { aspectRatio: a, cursor: f ? "pointer" : "default", ...(m || {}) },
    onClick: f,
    tabIndex: f ? 0 : -1,
    onKeyDown: (v) => {
      f && (v.key === "Enter" || v.key === " ") && (v.preventDefault(), f(v));
    },
    children: [
      p.jsx("img", { src: t, alt: i, loading: g ? "eager" : "lazy" }),
      k &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx("img", {
              src: t,
              alt: "",
              "aria-hidden": "true",
              loading: g ? "eager" : "lazy",
              className: "photo-tile__color",
            }),
            p.jsx("div", { "aria-hidden": "true", className: "photo-tile__pixelgrid" }),
          ],
        }),
      u &&
        !x &&
        p.jsx("div", {
          style: {
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            color: "var(--accent)",
            fontSize: 12,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            pointerEvents: "none",
          },
          children: u,
        }),
      c && p.jsx("div", { className: "photo-tile__caption", children: c }),
    ],
  });
}
function wh({ label: t = "TAMAN SARI · BANYUMAS", targetId: i = "lokasi" }) {
  const a = (o) => {
    o.preventDefault();
    const u = document.getElementById(i);
    u && u.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return p.jsxs("a", {
    href: `#${i}`,
    onClick: a,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      color: "#fff",
    },
    children: [
      p.jsxs("svg", {
        width: "24",
        height: "32",
        viewBox: "0 0 24 32",
        "aria-hidden": "true",
        children: [
          p.jsx("path", {
            d: "M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z",
            fill: "var(--accent)",
          }),
          p.jsx("circle", { cx: "12", cy: "12", r: "4", fill: "var(--bg-deep)" }),
        ],
      }),
      p.jsx("span", {
        style: {
          fontFamily: "var(--font-display)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: ".04em",
          textTransform: "uppercase",
          background: "var(--bg-deep)",
          padding: "4px 8px",
        },
        children: t,
      }),
    ],
  });
}
function ji() {
  return p.jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      background: "var(--bg-page)",
    },
    children: p.jsx("div", {
      "aria-label": "Memuat",
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "3px solid rgba(195,202,150,.2)",
        borderTopColor: "var(--accent, #C3CA96)",
        animation: "spin .8s linear infinite",
      },
    }),
  });
}
const cs = [
    {
      n: "01",
      slug: "banyumasan-fashionshow",
      title: "Banyumasan Fashionshow",
      image_url: "/assets/program-fashion.jpg",
      body: "Peragaan busana bertema kebudayaan Banyumas dengan materi tenun, batik, dan karya desainer lokal.",
    },
    {
      n: "02",
      slug: "bring-your-own-bowl",
      title: "Bring Your Own Bowl",
      image_url: "/assets/program-byob.jpg",
      body: "Gerakan zero-waste — pengunjung membawa wadah sendiri, artisan kuliner melayani tanpa kemasan sekali pakai.",
    },
    {
      n: "03",
      slug: "local-market",
      title: "Local Market",
      image_url: "/assets/program-local-market.jpg",
      body: "Pasar produk kerajinan, makanan, dan kebutuhan rumah tangga dari Artisan Banyumasan.",
    },
    {
      n: "04",
      slug: "pitutur-banyumasan",
      title: "Pitutur Banyumasan",
      image_url: "/assets/program-pitutur.jpg",
      body: "Panggung cerita lisan: kidung, wayang, geguritan. Dipandu oleh para pelaku pertunjukan setempat.",
    },
    {
      n: "05",
      slug: "coffee-and-conversation",
      title: "Coffee & Conversation",
      image_url: "/assets/program-coffee.jpg",
      body: "Ruang ngopi lambat untuk percakapan lintas komunitas: seniman, perajin, pemerintah, akademisi.",
    },
    {
      n: "06",
      slug: "makers-workshop",
      title: "Makers Workshop",
      image_url: "/assets/program-makers.jpg",
      body: "Workshop dua-jam: batik ecoprint, tenun mini, aksara Jawa, sablon manual. Terbuka untuk pengunjung.",
    },
  ],
  Sh = [
    {
      n: "01",
      slug: "banyumasan-fashionshow",
      title: "Banyumasan Fashionshow",
      image_url: "/assets/program-fashion.jpg",
      body: "Peragaan busana bertema kebudayaan Banyumas — tenun, batik, karya desainer lokal.",
    },
    {
      n: "02",
      slug: "bring-your-own-bowl",
      title: "Bring Your Own Bowl",
      image_url: "/assets/program-byob.jpg",
      body: "Gerakan zero-waste — pengunjung membawa wadah sendiri, artisan kuliner tanpa kemasan sekali pakai.",
    },
    {
      n: "03",
      slug: "local-market",
      title: "Local Market",
      image_url: "/assets/program-local-market.jpg",
      body: "Pasar produk kerajinan, makanan, dan kebutuhan rumah tangga dari Artisan Banyumasan.",
    },
    {
      n: "04",
      slug: "pitutur-banyumasan",
      title: "Pitutur Banyumasan",
      image_url: "/assets/program-pitutur.jpg",
      body: "Panggung cerita lisan: kidung, wayang, geguritan, dipandu pelaku pertunjukan setempat.",
    },
    {
      n: "05",
      slug: "coffee-and-conversation",
      title: "Coffee & Conversation",
      image_url: "/assets/program-coffee.jpg",
      body: "Ruang ngopi lambat untuk percakapan lintas komunitas — seniman, perajin, akademisi.",
    },
    {
      n: "06",
      slug: "makers-workshop",
      title: "Makers Workshop",
      image_url: "/assets/program-makers.jpg",
      body: "Workshop dua-jam: batik ecoprint, tenun mini, aksara Jawa, sablon manual.",
    },
  ],
  jh = [
    {
      id: "ev-static-01",
      nama: "Peken Banyumasan — Edisi Mei 2026",
      tanggal: "2026-05-17",
      tanggal_selesai: "2026-05-17",
      jam_mulai: "15:00",
      jam_selesai: "22:00",
      lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
      deskripsi:
        "Edisi Mei Peken Banyumasan menghadirkan pertunjukan seni lisan, pasar kriya lokal, dan sesi Coffee & Conversation. Terbuka untuk semua pengunjung — masuk gratis.",
      peserta_count: 0,
      kapasitas: 500,
      status: "published",
    },
    {
      id: "ev-static-02",
      nama: "Peken Banyumasan — Edisi Juni 2026",
      tanggal: "2026-06-07",
      tanggal_selesai: "2026-06-07",
      jam_mulai: "15:00",
      jam_selesai: "22:00",
      lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
      deskripsi:
        "Edisi Juni menampilkan Banyumasan Fashionshow, workshop Makers, dan panggung Pitutur Banyumasan. Artisan dan kolaborator baru dipersilakan mendaftar.",
      peserta_count: 0,
      kapasitas: 500,
      status: "published",
    },
    {
      id: "ev-static-03",
      nama: "Peken Banyumasan — Edisi Juli 2026",
      tanggal: "2026-07-05",
      tanggal_selesai: "2026-07-05",
      jam_mulai: "15:00",
      jam_selesai: "22:00",
      lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
      deskripsi:
        "Edisi pertengahan tahun dengan program Local Market yang diperluas — lebih dari 60 artisan lokal Banyumasan berpartisipasi.",
      peserta_count: 0,
      kapasitas: 500,
      status: "published",
    },
  ];
function bh(t = 1) {
  const i = new Date();
  return (
    i.setHours(0, 0, 0, 0),
    jh
      .filter((a) => a.status === "published" && new Date(a.tanggal) >= i)
      .sort((a, o) => new Date(a.tanggal) - new Date(o.tanggal))
      .slice(0, t)
  );
}
function Eh(t) {
  let i = t.trim().replace(/\/+$/, "");
  return (/^https?:\/\//i.test(i) || (i = `https://${i}`), i);
}
const _h = Eh("https://company-profile-pb.up.railway.app");
async function br(t, i = {}) {
  const a = await fetch(`${_h}${t}`, {
    headers: { "Content-Type": "application/json", ...i.headers },
    ...i,
  });
  if (!a.ok) {
    const u = await a.json().catch(() => ({}));
    throw new Error(u.message || `HTTP ${a.status}`);
  }
  const o = await a.json();
  return "data" in o ? o.data : o;
}
const It = { get: (t) => br(`/api/public/company-profile?section=${encodeURIComponent(t)}`) },
  Ch = {
    list: (t = {}) => {
      const i = new URLSearchParams(t).toString();
      return br(`/api/public/karya${i ? `?${i}` : ""}`);
    },
  },
  Ph = { bySlug: (t) => br(`/api/public/profiles/${encodeURIComponent(t)}`) },
  Th = {
    list: (t = {}) => {
      const i = new URLSearchParams(t).toString();
      return br(`/api/public/events${i ? `?${i}` : ""}`);
    },
    upcoming: (t = {}) => {
      const i = new URLSearchParams(t).toString();
      return br(`/api/public/events/upcoming${i ? `?${i}` : ""}`);
    },
  },
  Ih = { public: () => br("/api/public/stats") },
  Fd = {
    hero_slides: [
      "/assets/banner-home-1.jpg",
      "/assets/banner-home-2.jpg",
      "/assets/banner-about.png",
    ],
    hero_eyebrow: "MIRAPAT · BANYUMASAN · 2026",
    hero_headline_pre: "Temukan",
    hero_headline_em: "pertunjukan",
    hero_headline_post: ", karya artisan, dan cerita Banyumasan dalam satu ekosistem.",
    manifesto_col1: `Peken Banyumasan adalah sebuah ruang kreatif berbasis budaya
lokal yang dirancang sebagai wadah berkumpulnya masyarakat,
pelaku Artisan, seniman, dan komunitas dalam satu ekosistem yang
hidup, inklusif, dan berkelanjutan.

Peken tidak hanya berfungsi sebagai pasar atau tempat berkumpul
biasa, tetapi sebagai ruang interaksi yang menghadirkan
pengalaman budaya khas Banyumas melalui berbagai aktivitas
seperti pertunjukan seni, kuliner tradisional, produk kreatif,
hingga eksplorasi identitas lokal.`,
    manifesto_col2: `Peken Banyumasan adalah ruang temu budaya dan ekonomi kreatif
di Banyumas yang mempertemukan seniman, Artisan, dan masyarakat
dalam satu perayaan kearifan lokal.

Menghadirkan kuliner tradisional, pertunjukan seni, serta
aktivitas komunitas, Peken menjadi tempat di mana budaya
tidak hanya dipamerkan, tetapi dirasakan dan dialami bersama.

Sejak pertama kali hadir pada Februari 2022 dan diselenggarakan
dua kali setiap bulan di kawasan Kota Lama Banyumas, Peken
terus berkembang sebagai ekosistem kreatif.`,
    agenda_date: "—",
    agenda_nama: "",
    agenda_label: "Agenda berikutnya akan diumumkan",
    agenda_lokasi: "",
    agenda_deskripsi: "Pantau terus informasi event Peken Banyumasan berikutnya.",
    lokasi_headline: `Kawasan Kota Lama Banyumas.
Taman Sari · Sudagaran.`,
    lokasi_alamat: `Banyumas, Sudagaran, Kec. Banyumas,
Kabupaten Banyumas, Jawa Tengah 53192`,
    lokasi_trans: `Trans Banyumas Koridor 4 · Terminal Bulupitu
Trans Banyumas Koridor 4 · RS Margono — Halte Alun-alun
Operasional · 04:40 – 18:30 WIB`,
    lokasi_trans1_url:
      "https://maps.google.com/?q=Taman+Sari+Kecamatan+Banyumas+Kabupaten+Banyumas+Jawa+Tengah",
    lokasi_trans2_url: "https://maps.google.com/?q=Trans+Banyumas+Koridor+4",
    lokasi_image_url: "",
  };
function zh({ slides: t, children: i }) {
  const [a, o] = re.useState(0),
    [u, c] = re.useState(!1),
    f = js(),
    m = re.useRef(null);
  return (
    re.useEffect(() => {
      if (!(f || u))
        return (
          (m.current = setInterval(() => o((g) => (g + 1) % t.length), 6e3)),
          () => clearInterval(m.current)
        );
    }, [u, f, t.length]),
    re.useEffect(() => {
      const g = () => c(document.hidden);
      return (
        document.addEventListener("visibilitychange", g),
        () => document.removeEventListener("visibilitychange", g)
      );
    }, []),
    p.jsxs("div", {
      style: { position: "relative", minHeight: 640, overflow: "hidden" },
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      "aria-roledescription": "carousel",
      children: [
        t.map((g, y) =>
          p.jsx(
            "div",
            {
              "aria-hidden": y !== a,
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `url('${g}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: y === a ? 1 : 0,
                transition: "opacity 1200ms cubic-bezier(.22,.61,.36,1)",
              },
            },
            g,
          ),
        ),
        p.jsx("div", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(13,13,13,.45) 0%, rgba(13,13,13,.25) 35%, rgba(13,13,13,.85) 100%)",
          },
        }),
        p.jsx("div", { style: { position: "relative", zIndex: 2, minHeight: 640 }, children: i }),
        p.jsx("div", {
          role: "tablist",
          "aria-label": "Pilih slide hero",
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 24,
            display: "flex",
            justifyContent: "center",
            gap: 10,
            zIndex: 3,
          },
          children: t.map((g, y) =>
            p.jsx(
              "button",
              {
                role: "tab",
                "aria-selected": y === a,
                "aria-label": `Slide ${y + 1} dari ${t.length}`,
                onClick: () => o(y),
                style: {
                  width: 12,
                  height: 12,
                  padding: 0,
                  border: 0,
                  cursor: "pointer",
                  background: y === a ? "var(--accent)" : "rgba(255,255,255,.45)",
                  transition: "background 320ms cubic-bezier(.22,.61,.36,1)",
                },
              },
              y,
            ),
          ),
        }),
      ],
    })
  );
}
const Ah = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  Lh = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
function Ef(t) {
  if (!t) return null;
  const i = new Date(t.tanggal),
    a = String(i.getDate()).padStart(2, "0"),
    o = Ah[i.getDay()],
    u = Lh[i.getMonth()],
    c = i.getFullYear(),
    f =
      t.jam_mulai && t.jam_selesai
        ? ` · ${t.jam_mulai.slice(0, 5).replace(":", ".")}–${t.jam_selesai.slice(0, 5).replace(":", ".")} WIB`
        : "";
  return {
    agenda_date: a,
    agenda_nama: t.nama || "",
    agenda_label: `${o} · ${u} ${c}${f}`,
    agenda_lokasi: t.lokasi || "",
    agenda_deskripsi:
      t.deskripsi ||
      [t.nama ? `${t.nama} akan segera digelar` : null, t.lokasi ? `di ${t.lokasi}` : null]
        .filter(Boolean)
        .join(" ") + (t.nama || t.lokasi ? ". Sampai jumpa di lokasi!" : ""),
  };
}
const Nd = bh(1)[0] || null,
  Rh = Nd ? { ...Fd, ...Ef(Nd) } : Fd;
function _f({ onNavigate: t }) {
  const [i, a] = re.useState(Sh),
    [o, u] = re.useState(Rh),
    [c, f] = re.useState(!0);
  return (
    re.useEffect(() => {
      It.get("programs")
        .then((m) => {
          Array.isArray(m) && m.length && a(m.slice(0, 6));
        })
        .catch(() => {});
    }, []),
    re.useEffect(() => {
      It.get("home")
        .then((m) => {
          m && u((g) => ({ ...g, ...m }));
        })
        .catch(() => {})
        .finally(() => f(!1));
    }, []),
    re.useEffect(() => {
      Th.upcoming({ limit: 1 })
        .then((m) => {
          const g = Array.isArray(m) ? m[0] : m,
            y = Ef(g);
          y && u((k) => ({ ...k, ...y }));
        })
        .catch(() => {});
    }, []),
    c
      ? p.jsx(ji, {})
      : p.jsxs("main", {
          style: { background: "var(--bg-page)" },
          children: [
            p.jsxs(zh, {
              slides: o.hero_slides,
              children: [
                p.jsx("div", {
                  "aria-hidden": "true",
                  style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 },
                  children: p.jsx(xh, { fullHeight: !0 }),
                }),
                p.jsxs("section", {
                  style: {
                    position: "relative",
                    zIndex: 1,
                    minHeight: 640,
                    padding: "100px var(--page-px) 100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 48,
                  },
                  children: [
                    p.jsx(Je, { style: { color: "var(--accent)" }, children: o.hero_eyebrow }),
                    p.jsxs("div", {
                      style: { textAlign: "center" },
                      children: [
                        p.jsx(us, { size: 28, gap: 18 }),
                        p.jsxs("h1", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontWeight: 400,
                            fontSize: "clamp(32px, 7vw, 64px)",
                            color: "#fff",
                            lineHeight: 1.1,
                            margin: "28px 0 0",
                            maxWidth: 980,
                            textAlign: "center",
                          },
                          children: [
                            o.hero_headline_pre,
                            " ",
                            p.jsx("em", {
                              style: {
                                fontFamily: "var(--font-italic)",
                                fontStyle: "italic",
                                color: "var(--accent)",
                              },
                              children: o.hero_headline_em,
                            }),
                            o.hero_headline_post,
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        gap: 16,
                        flexWrap: "wrap",
                        justifyContent: "center",
                      },
                      children: [
                        p.jsx(Xe, { onClick: () => t("PROGRAM"), children: "Detail Agenda" }),
                        p.jsx(Xe, {
                          inverse: !0,
                          onClick: () => t("ABOUT"),
                          children: "Tentang Peken",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("section", {
              style: {
                padding: "80px var(--page-px)",
                background: "var(--bg-inverse)",
                color: "var(--accent-ink)",
              },
              children: p.jsxs("div", {
                className: "cp-stack-mobile",
                style: {
                  display: "grid",
                  gridTemplateColumns: "280px 1fr 1fr",
                  gap: 40,
                  alignItems: "flex-start",
                },
                children: [
                  p.jsx("div", { children: p.jsx(us, { size: 16, color: "var(--accent-ink)" }) }),
                  p.jsx("p", {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      lineHeight: 1.8,
                      margin: 0,
                      color: "var(--accent-ink)",
                      whiteSpace: "pre-line",
                    },
                    children: o.manifesto_col1,
                  }),
                  p.jsx("p", {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      lineHeight: 1.8,
                      margin: 0,
                      color: "var(--accent-ink)",
                      whiteSpace: "pre-line",
                    },
                    children: o.manifesto_col2,
                  }),
                ],
              }),
            }),
            p.jsx("section", {
              style: {
                padding: "100px var(--page-px)",
                background: "var(--bg-page)",
                color: "#fff",
              },
              children: p.jsxs("div", {
                className: "cp-stack-mobile",
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 80,
                  alignItems: "center",
                },
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsxs(Je, {
                        style: { color: "#fff" },
                        children: [
                          "AGENDA",
                          p.jsx("span", {
                            "aria-hidden": "true",
                            style: {
                              display: "inline-block",
                              width: 6,
                              height: 6,
                              background: "var(--accent)",
                              margin: "0 10px",
                              verticalAlign: "2px",
                            },
                          }),
                          "TERDEKAT",
                        ],
                      }),
                      p.jsx("div", {
                        style: {
                          fontFamily: "Inter",
                          fontWeight: 300,
                          fontSize: "clamp(44px, 13vw, 128px)",
                          lineHeight: 1,
                          color: "var(--accent)",
                          marginTop: 24,
                        },
                        children: o.agenda_date,
                      }),
                      p.jsx("div", {
                        style: { fontFamily: "var(--font-display)", fontSize: 20, marginTop: 12 },
                        children: o.agenda_label,
                      }),
                      p.jsx("div", {
                        style: {
                          marginTop: 12,
                          color: "var(--fg-secondary)",
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                        },
                        children: o.agenda_lokasi,
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("img", {
                        src: "/assets/logo-peken-banyumasan.png",
                        alt: "",
                        style: { width: 30, height: 30, marginBottom: 20 },
                      }),
                      o.agenda_nama &&
                        p.jsx("h3", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontSize: 24,
                            fontWeight: 400,
                            lineHeight: 1.3,
                            margin: "0 0 14px",
                          },
                          children: o.agenda_nama,
                        }),
                      p.jsx("p", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.9,
                          color: "var(--fg-secondary)",
                          margin: 0,
                          maxWidth: "44ch",
                          whiteSpace: "pre-line",
                        },
                        children: o.agenda_deskripsi,
                      }),
                      p.jsx("div", {
                        style: { marginTop: 36 },
                        children: p.jsx(Xe, {
                          onClick: () => t("PROGRAM"),
                          children: "Detail Agenda",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            p.jsxs("section", {
              style: { background: "var(--bg-page)", padding: "0 0 0 0" },
              children: [
                p.jsx("div", {
                  style: { padding: "100px var(--page-px) 40px" },
                  children: p.jsx(Wa, {
                    eyebrow: "ENAM PROGRAM · TIAP EDISI",
                    title: p.jsxs(p.Fragment, {
                      children: [
                        "Setiap edisi Peken berputar pada",
                        " ",
                        p.jsx("em", {
                          style: {
                            fontFamily: "var(--font-italic)",
                            fontStyle: "italic",
                            color: "var(--accent)",
                          },
                          children: "enam program",
                        }),
                        " ",
                        "tetap.",
                      ],
                    }),
                    right: p.jsx(Xe, {
                      onClick: () => t("PROGRAM"),
                      children: "Lihat Semua Program",
                    }),
                  }),
                }),
                p.jsx("div", {
                  className: "cp-home-programs",
                  style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 },
                  children: i.map((m, g) =>
                    p.jsx(
                      Si,
                      {
                        src: m.image_url,
                        alt: m.title,
                        aspect: "480/520",
                        mode: "hover",
                        onClick: () => t("PROGRAM"),
                        ariaLabel: `Buka program ${m.title}`,
                        corner: g < 5 ? "✕" : null,
                        caption: p.jsxs("div", {
                          children: [
                            p.jsxs("div", {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: 11,
                                color: "var(--accent)",
                                letterSpacing: ".08em",
                                textTransform: "uppercase",
                                marginBottom: 8,
                              },
                              children: ["PROGRAM · ", m.n],
                            }),
                            p.jsx("div", {
                              style: {
                                fontFamily: "var(--font-display)",
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#fff",
                                marginBottom: 8,
                              },
                              children: m.title,
                            }),
                            p.jsx("div", {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: 12,
                                color: "var(--fg-secondary)",
                                lineHeight: 1.6,
                              },
                              children: m.body_short || m.body,
                            }),
                          ],
                        }),
                      },
                      m.n,
                    ),
                  ),
                }),
              ],
            }),
            p.jsx("section", {
              id: "lokasi",
              style: {
                padding: "100px var(--page-px)",
                background: "var(--bg-elevated)",
                color: "#fff",
              },
              children: p.jsxs("div", {
                className: "cp-stack-mobile",
                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 },
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx(Je, { style: { color: "var(--accent)" }, children: "LOKASI" }),
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: 32,
                          fontWeight: 400,
                          color: "#fff",
                          marginTop: 16,
                          lineHeight: 1.25,
                          whiteSpace: "pre-line",
                        },
                        children: o.lokasi_headline,
                      }),
                      p.jsxs("div", {
                        className: "cp-stack-mobile",
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 24,
                          marginTop: 48,
                        },
                        children: [
                          p.jsxs("div", {
                            children: [
                              p.jsxs("div", {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontWeight: 500,
                                  fontSize: 14,
                                  marginBottom: 8,
                                },
                                children: [
                                  p.jsx("span", {
                                    style: {
                                      display: "inline-block",
                                      width: 8,
                                      height: 8,
                                      background: "var(--accent)",
                                      marginRight: 10,
                                    },
                                  }),
                                  "Perjalanan menuju Peken Banyumasan",
                                ],
                              }),
                              p.jsx("div", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 12,
                                  color: "var(--fg-secondary)",
                                  lineHeight: 1.8,
                                  whiteSpace: "pre-line",
                                },
                                children: o.lokasi_alamat,
                              }),
                              p.jsx("div", {
                                style: { marginTop: 16 },
                                children: p.jsx(Xe, {
                                  onClick: () =>
                                    o.lokasi_trans1_url &&
                                    window.open(
                                      o.lokasi_trans1_url,
                                      "_blank",
                                      "noopener,noreferrer",
                                    ),
                                  children: "Rute Peken Banyumasan",
                                }),
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            children: [
                              p.jsxs("div", {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontWeight: 500,
                                  fontSize: 14,
                                  marginBottom: 8,
                                },
                                children: [
                                  p.jsx("span", {
                                    style: {
                                      display: "inline-block",
                                      width: 8,
                                      height: 8,
                                      background: "var(--accent)",
                                      marginRight: 10,
                                    },
                                  }),
                                  "Halte Trans Banyumas Terdekat",
                                ],
                              }),
                              p.jsx("div", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 12,
                                  color: "var(--fg-secondary)",
                                  lineHeight: 1.9,
                                  whiteSpace: "pre-line",
                                },
                                children: o.lokasi_trans,
                              }),
                              p.jsx("div", {
                                style: { marginTop: 16 },
                                children: p.jsx(Xe, {
                                  onClick: () =>
                                    o.lokasi_trans2_url &&
                                    window.open(
                                      o.lokasi_trans2_url,
                                      "_blank",
                                      "noopener,noreferrer",
                                    ),
                                  children: "Trayek Trans Banyumas",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    style: {
                      position: "relative",
                      aspectRatio: "16/11",
                      background: "var(--bg-deep)",
                      overflow: "hidden",
                    },
                    children: [
                      p.jsx("img", {
                        src: o.lokasi_image_url || "/assets/map-kota-lama.png",
                        alt: "Peta kawasan Kota Lama Banyumas",
                        style: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 },
                      }),
                      p.jsx("div", {
                        style: {
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -60%)",
                        },
                        children: p.jsx(wh, { label: "TAMAN SARI · BANYUMAS", targetId: "lokasi" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
  );
}
function Cf({
  before: t,
  after: i,
  mode: a = "sticky",
  pinHeight: o = "200vh",
  fromColor: u = "var(--bg-page)",
  toColor: c = "var(--accent)",
  pinnedTail: f,
}) {
  const m = js(),
    g = re.useRef(null),
    [y, k] = re.useState(0);
  if (
    (re.useEffect(() => {
      if (m || typeof window > "u" || !g.current) return;
      let b = 0,
        v = !1;
      const N = () => {
          const L = g.current;
          if (!L) return;
          const te = L.getBoundingClientRect(),
            $ = window.innerHeight,
            ue = L.offsetHeight - $;
          if (ue <= 0) {
            k(1);
            return;
          }
          const ge = Math.max(0, Math.min(1, -te.top / ue));
          k(ge);
        },
        D = () => {
          v && (b && cancelAnimationFrame(b), (b = requestAnimationFrame(N)));
        },
        z = new IntersectionObserver(
          (L) => {
            ((v = L[0].isIntersecting), v && D());
          },
          { rootMargin: "100% 0px" },
        );
      return (
        z.observe(g.current),
        window.addEventListener("scroll", D, { passive: !0 }),
        window.addEventListener("resize", D, { passive: !0 }),
        N(),
        () => {
          (z.disconnect(),
            window.removeEventListener("scroll", D),
            window.removeEventListener("resize", D),
            b && cancelAnimationFrame(b));
        }
      );
    }, [m]),
    m)
  )
    return p.jsxs(p.Fragment, {
      children: [
        t,
        p.jsx("div", {
          "aria-hidden": "true",
          style: { height: "60vh", background: `linear-gradient(to bottom, ${u} 0%, ${c} 100%)` },
        }),
        p.jsx("div", { style: { background: c }, children: i }),
      ],
    });
  const x = p.jsx("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "100vh",
      background: `linear-gradient(to top, ${c} 0%, ${c} 65%, transparent 100%)`,
      transform: `translateY(${(1 - y) * 100}%)`,
      willChange: "transform",
      pointerEvents: "none",
      zIndex: 2,
    },
  });
  return a === "tail"
    ? p.jsxs(p.Fragment, {
        children: [
          t,
          p.jsx("div", {
            ref: g,
            style: { position: "relative", height: o, background: u },
            children: p.jsxs("div", {
              style: {
                position: "sticky",
                top: 0,
                height: "100vh",
                overflow: "hidden",
                background: u,
              },
              children: [
                f || p.jsx("div", { style: { position: "absolute", inset: 0, background: u } }),
                x,
              ],
            }),
          }),
          p.jsx("div", { style: { background: c }, children: i }),
        ],
      })
    : p.jsxs(p.Fragment, {
        children: [
          p.jsx("div", {
            ref: g,
            style: { position: "relative", height: o, background: u },
            children: p.jsxs("div", {
              style: {
                position: "sticky",
                top: 0,
                height: "100vh",
                overflow: "hidden",
                background: u,
              },
              children: [
                p.jsx("div", {
                  style: { position: "absolute", inset: 0, overflow: "auto" },
                  children: t,
                }),
                x,
              ],
            }),
          }),
          p.jsx("div", { style: { background: c }, children: i }),
        ],
      });
}
function Fh({ photo: t, role: i, name: a, title: o, bio: u }) {
  const [c, f] = re.useState(!1);
  return p.jsxs("article", {
    tabIndex: 0,
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    onFocus: () => f(!0),
    onBlur: () => f(!1),
    style: {
      background: "var(--bg-elevated)",
      border: "1px solid rgba(195,202,150,.22)",
      outlineOffset: 2,
      display: "flex",
      flexDirection: "column",
      transition: "border-color 320ms cubic-bezier(.22,.61,.36,1)",
    },
    children: [
      p.jsx("div", {
        style: {
          aspectRatio: "1/1",
          background: `url('${t}') center/cover`,
          borderBottom: "1px solid rgba(195,202,150,.22)",
        },
      }),
      p.jsxs("div", {
        style: { padding: 24 },
        children: [
          p.jsx(Je, { style: { color: "var(--accent)" }, children: i }),
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 500,
              color: "#fff",
              marginTop: 8,
              lineHeight: 1.3,
            },
            children: a,
          }),
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--fg-secondary)",
              marginTop: 4,
            },
            children: o,
          }),
          p.jsx("div", {
            style: {
              maxHeight: c ? 280 : 0,
              opacity: c ? 1 : 0,
              overflow: "hidden",
              transition:
                "max-height 320ms cubic-bezier(.22,.61,.36,1), opacity 320ms cubic-bezier(.22,.61,.36,1) 80ms",
            },
            children: p.jsx("p", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 13,
                lineHeight: 1.8,
                color: "#fff",
                margin: "20px 0 0",
                paddingTop: 20,
                borderTop: "1px solid rgba(255,255,255,.08)",
              },
              children: u,
            }),
          }),
        ],
      }),
    ],
  });
}
function Nh({ name: t, body: i }) {
  return p.jsxs("div", {
    className: "helix-card",
    tabIndex: 0,
    style: {
      borderTop: "1px solid rgba(255,255,255,.15)",
      paddingTop: 24,
      paddingInline: 16,
      paddingBottom: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      outlineOffset: 2,
    },
    children: [
      p.jsx("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 18,
          color: "var(--accent)",
          letterSpacing: ".02em",
        },
        children: t,
      }),
      p.jsx("p", {
        className: "helix-body",
        style: { fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.8, margin: 0 },
        children: i,
      }),
    ],
  });
}
function Bh({ n: t, label: i, body: a }) {
  return p.jsxs("div", {
    style: { borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 24 },
    children: [
      p.jsxs("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" },
        children: [
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 14,
              color: "var(--accent)",
            },
            children: i,
          }),
          p.jsx("div", {
            style: { fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: "var(--fg-muted)" },
            children: t,
          }),
        ],
      }),
      p.jsx("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.8,
          color: "var(--fg-secondary)",
          margin: "24px 0 0",
          maxWidth: "42ch",
        },
        children: a,
      }),
    ],
  });
}
function Dh({ n: t, label: i }) {
  return p.jsxs("div", {
    children: [
      p.jsx("div", {
        style: {
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: "clamp(40px, 10vw, 96px)",
          lineHeight: 1,
          color: "var(--accent)",
        },
        children: t,
      }),
      p.jsx("div", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-secondary)",
          marginTop: 12,
          letterSpacing: ".04em",
          textTransform: "uppercase",
        },
        children: i,
      }),
    ],
  });
}
const Mh = [
    {
      photo: "/assets/tokoh-portrait-1.png",
      role: "FOUNDER",
      name: "Gilang Ramadhan, S.Sn., M.Ds.",
      title: "Founder & Program Director",
      bio: "Menggagas Peken pada Februari 2022 dan mengawal kurasi setiap edisi sejak. Latar belakang antropologi pertunjukan, dengan fokus pada kesenian Banyumasan kontemporer.",
    },
    {
      photo: "/assets/tokoh-portrait-2.png",
      role: "CURATOR",
      name: "Galih Putra Pamungkas, S.Sn., M.Sn.",
      title: "Curator — Artisan",
      bio: "Mengkurasi artisan yang masuk ke setiap edisi Peken. Sebelumnya menjalankan kolektif batik di Sokaraja; membangun program pendampingan artisan dari hulu ke hilir.",
    },
    {
      photo: "/assets/tokoh-portrait-3.png",
      role: "STRATEGIC PARTNER",
      name: "Jakarta Tisam S.STP, M.Si",
      title: "Strategic Partner & Community Lead",
      bio: "Menjaga jaringan kolaborator, sponsor, dan mitra institusi — kampus, pemerintah daerah, swasta. Memegang rasio kolaborasi yang sehat antar enam helix.",
    },
  ],
  Oh = [
    { n: "86", label: "Edisi Peken diselenggarakan" },
    { n: "240", label: "Kolaborator aktif" },
    { n: "1.2k", label: "Artisan terlibat" },
    { n: "38k", label: "Pengunjung setiap edisi" },
  ],
  Bd = {
    hero_headline:
      "Peken lahir dari keinginan untuk menghidupkan kembali denyut kota lama melalui seni, pasar, dan kebersamaan.",
    manifesto_col1: `Peken Banyumasan tumbuh dari percakapan kecil di sudut Kota Lama — antara seniman pertunjukan, pelaku Artisan, dan warga sekitar yang ingin menghidupkan kembali ruang publik sebagai tempat bertemu, bukan sekadar berdagang.

Dari obrolan itu, lahir gerakan dwi-mingguan yang konsisten sejak Februari 2022 — sebuah ritual kolektif yang mempertemukan tradisi, kerajinan, dan kuliner Banyumasan dalam satu malam.`,
    manifesto_col2: `Kami percaya kebudayaan tidak perlu dipajang di balik kaca. Ia hidup ketika dirayakan secara rutin, dalam skala kecil, oleh orang-orang yang merasa memilikinya.

Setiap edisi Peken adalah usaha sederhana untuk menjaga warisan tetap berdetak — sambil membuka ruang bagi karya baru tumbuh di atasnya.`,
    mirapat_intro:
      "Peken Banyumasan bukan event satu-malam — ia adalah mirapat, kata Banyumasan yang berarti perjumpaan rutin yang dijaga bersama. Setiap edisi mempertemukan seniman pertunjukan tradisional, perajin muda, pelaku Artisan, akademisi, hingga warga sekitar dalam satu ruang yang sama.",
    mirapat_quote:
      '"Bukan pasar yang menjadi tujuan, melainkan perjumpaan yang menjadikan pasar itu bermakna."',
    mirapat_closing:
      "Tiga sumbu menjadi fondasi gerakan ini — pelestarian budaya, ruang berkarya bagi pelaku kreatif, dan ekonomi yang berputar di dalam komunitasnya sendiri.",
    pillars: [
      {
        n: "01",
        label: "CULTURE",
        body: "Melestarikan kearifan lokal, seni pertunjukan tradisional, dan warisan budaya takbenda Banyumas sebagai fondasi gerakan.",
      },
      {
        n: "02",
        label: "CREATIVE",
        body: "Memberikan ruang bagi seniman, perajin, dan kolektif muda untuk berkarya dan bertemu audiens yang sebenarnya.",
      },
      {
        n: "03",
        label: "CIRCULAR",
        body: "Mendorong ekonomi berputar di dalam komunitas — dari artisan lokal, bahan lokal, hingga pengunjung lokal.",
      },
    ],
    visi: "Menjadi ekosistem budaya dan ekonomi kreatif yang menjaga kearifan lokal Banyumas tetap berdetak — relevan, hidup, dan berkelanjutan.",
    tujuan:
      "Menyediakan ruang publik dwi-mingguan yang mempertemukan pelaku seni, Artisan, dan masyarakat — sehingga warisan budaya Banyumasan dirawat melalui praktik bersama, bukan sekadar dipamerkan.",
    sasaran:
      "Seniman pertunjukan tradisional, perajin & Artisan Banyumas, komunitas kreatif muda, akademisi, mitra pemerintah dan swasta, serta pengunjung lokal-regional yang menjadi audiens sekaligus pelaku.",
  },
  Uh = [
    {
      name: "Government",
      body: "Pemerintah Kabupaten Banyumas dan instansi terkait sebagai mitra kebijakan dan ruang publik.",
    },
    {
      name: "Academia",
      body: "Kampus dan lembaga riset sebagai sumber kajian, kurikulum, dan tenaga kurasi muda.",
    },
    {
      name: "Industry",
      body: "Pelaku usaha skala Artisan hingga korporasi sebagai mitra ekonomi dan ekosistem produk.",
    },
    {
      name: "Community",
      body: "Warga, kolektif seni, dan komunitas hobi sebagai inti gerakan dan audiens setia Peken.",
    },
    {
      name: "Media",
      body: "Jejaring media independen dan jurnalisme budaya sebagai penjaga narasi gerakan.",
    },
    {
      name: "Finance",
      body: "Mitra pembiayaan — bank, koperasi, hingga skema gotong royong — yang menjaga sirkulasi ekonomi tetap sehat.",
    },
  ],
  Hh = `Peken Banyumasan didukung oleh jaringan mitra lintas sektor: Pemerintah Kabupaten Banyumas dan Dinas Kebudayaan sebagai mitra kebijakan; Universitas Jenderal Soedirman sebagai mitra riset dan pendampingan kurasi; Bank BPD Jawa Tengah sebagai mitra pembiayaan Artisan; Komunitas Kota Lama Banyumas sebagai mitra penyelenggara di lokasi.

Dukungan ini terdokumentasi dalam Memorandum of Understanding yang diperbarui setiap dua tahun, dan operasional tahunan dilaporkan secara terbuka kepada para mitra sebagai bagian dari prinsip akuntabilitas gerakan.`,
  Wh = `Peken Banyumasan beroperasi di bawah payung Yayasan Peken Banyumasan, dengan landasan hukum nasional pada UU No. 5/2017 tentang Pemajuan Kebudayaan dan UU No. 24/2019 tentang Ekonomi Kreatif, serta payung daerah pada Peraturan Daerah Kabupaten Banyumas No. 6/2020 tentang Pemajuan Kebudayaan Daerah.

Yayasan terdaftar resmi dengan NPWP 00.000.000.0-000.000 dan NIB 0000000000000 (akan diperbarui pada handoff data legal sebenarnya), tunduk pada laporan keuangan dan tata kelola yayasan sebagaimana diatur dalam UU Yayasan.`;
function Ma(t) {
  return t >= 1e6
    ? (t / 1e6).toFixed(1).replace(/\.0$/, "") + "jt"
    : t >= 1e3
      ? (t / 1e3).toFixed(1).replace(/\.0$/, "") + "k"
      : String(t);
}
function Kh() {
  const [t, i] = re.useState(null),
    [a, o] = re.useState(null),
    [u, c] = re.useState(null),
    [f, m] = re.useState(!0);
  re.useEffect(() => {
    (Promise.allSettled([
      It.get("tim").then((z) => {
        z && i(z);
      }),
      It.get("about").then((z) => {
        z && o(z);
      }),
    ]).finally(() => m(!1)),
      Ih.public()
        .then((z) => {
          z && c(z);
        })
        .catch(() => {}));
  }, []);
  const g = { ...Bd, ...(a || {}) },
    y = g.pillars?.length ? g.pillars : Bd.pillars,
    k = t?.hexa_helix?.length ? t.hexa_helix : Uh,
    x = t?.key_people?.length ? t.key_people : Mh,
    b = g.stats?.length ? g.stats : t?.stats?.length ? t.stats : Oh,
    v = u
      ? [
          { n: Ma(u.edisi_count), label: "Edisi Peken diselenggarakan" },
          { n: Ma(u.kolaborator_aktif), label: "Kolaborator aktif" },
          { n: Ma(u.artisan_aktif), label: "Artisan terlibat" },
          { n: Ma(u.pengunjung_total), label: "Pengunjung setiap edisi" },
        ]
      : b,
    N = p.jsxs("section", {
      style: {
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/assets/banner-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      children: [
        p.jsx("div", {
          "aria-hidden": "true",
          style: { position: "absolute", inset: 0, background: "rgba(13,13,13,.6)" },
        }),
        p.jsxs("div", {
          style: {
            position: "relative",
            zIndex: 2,
            height: "100%",
            padding: "0 var(--page-px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          },
          children: [
            p.jsx(Je, { style: { color: "var(--accent)" }, children: "ABOUT · TENTANG KAMI" }),
            p.jsx("h1", {
              style: {
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(30px, 6vw, 56px)",
                lineHeight: 1.15,
                margin: "24px auto 0",
                maxWidth: 960,
              },
              children: g.hero_headline,
            }),
          ],
        }),
      ],
    }),
    D = p.jsx("section", {
      style: {
        padding: "100px var(--page-px)",
        background: "var(--accent)",
        color: "var(--accent-ink)",
      },
      children: p.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "280px 1fr 1fr",
          gap: 40,
          alignItems: "flex-start",
        },
        children: [
          p.jsx("div", { children: p.jsx(us, { size: 16, color: "var(--accent-ink)" }) }),
          p.jsx("p", {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.8,
              margin: 0,
              color: "var(--accent-ink)",
              whiteSpace: "pre-line",
            },
            children: g.manifesto_col1,
          }),
          p.jsx("p", {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.8,
              margin: 0,
              color: "var(--accent-ink)",
              whiteSpace: "pre-line",
            },
            children: g.manifesto_col2,
          }),
        ],
      }),
    });
  return f
    ? p.jsx(ji, {})
    : p.jsxs("main", {
        style: { background: "var(--bg-page)", color: "#fff" },
        children: [
          p.jsx(Cf, {
            before: N,
            after: D,
            mode: "sticky",
            pinHeight: "200vh",
            fromColor: "var(--bg-page)",
            toColor: "var(--accent)",
          }),
          p.jsxs("section", {
            style: { padding: "120px var(--page-px) 60px", textAlign: "center" },
            children: [
              p.jsxs("div", {
                style: {
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
                },
                children: [
                  "#MIRAPAT",
                  p.jsx("span", {
                    "aria-hidden": "true",
                    style: { width: 4, height: 4, background: "var(--accent)" },
                  }),
                  "BANYUMASAN",
                ],
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "var(--fg-secondary)",
                  margin: "0 auto",
                  maxWidth: "62ch",
                },
                children: g.mirapat_intro,
              }),
              p.jsx("blockquote", {
                style: {
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
                },
                children: g.mirapat_quote,
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "var(--fg-secondary)",
                  margin: "0 auto",
                  maxWidth: "62ch",
                },
                children: g.mirapat_closing,
              }),
            ],
          }),
          p.jsx("section", {
            style: { padding: "60px var(--page-px) 100px" },
            children: p.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 },
              children: y.map((z, L) => p.jsx(Bh, { n: z.n, label: z.label, body: z.body }, L)),
            }),
          }),
          p.jsxs("section", {
            style: {
              padding: "120px var(--page-px)",
              background: "var(--accent)",
              color: "var(--accent-ink)",
            },
            children: [
              p.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: 80,
                },
                children: [
                  p.jsx("div", {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: ".08em",
                      color: "var(--peken-smoke)",
                      textTransform: "uppercase",
                      marginBottom: 24,
                    },
                    children: "VISI",
                  }),
                  p.jsx("p", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: 32,
                      lineHeight: 1.4,
                      color: "var(--accent-ink)",
                      margin: 0,
                      maxWidth: "44ch",
                    },
                    children: g.visi,
                  }),
                ],
              }),
              p.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  paddingTop: 60,
                  borderTop: "1px solid rgba(13,13,13,.18)",
                },
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          letterSpacing: ".08em",
                          color: "var(--peken-smoke)",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        },
                        children: "TUJUAN",
                      }),
                      p.jsx("p", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.9,
                          margin: 0,
                          color: "var(--accent-ink)",
                          maxWidth: "56ch",
                        },
                        children: g.tujuan,
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          letterSpacing: ".08em",
                          color: "var(--peken-smoke)",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        },
                        children: "SASARAN",
                      }),
                      p.jsx("p", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.9,
                          margin: 0,
                          color: "var(--accent-ink)",
                          maxWidth: "56ch",
                        },
                        children: g.sasaran,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("section", {
            style: { padding: "120px var(--page-px)" },
            children: [
              p.jsx(Wa, {
                eyebrow: "KEY PEOPLE · TIM INTI",
                title: p.jsxs(p.Fragment, {
                  children: [
                    "Orang-orang yang menjaga",
                    " ",
                    p.jsx("em", {
                      style: {
                        fontFamily: "var(--font-italic)",
                        fontStyle: "italic",
                        color: "var(--accent)",
                      },
                      children: "denyut",
                    }),
                    " ",
                    "Peken setiap edisi.",
                  ],
                }),
              }),
              p.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                  alignItems: "flex-start",
                },
                children: x.map((z, L) =>
                  p.jsx(
                    Fh,
                    {
                      photo: z.photo || z.foto_url,
                      role: z.role,
                      name: z.name || z.nama,
                      title: z.title,
                      bio: z.bio,
                    },
                    L,
                  ),
                ),
              }),
            ],
          }),
          p.jsxs("section", {
            style: {
              padding: "120px var(--page-px)",
              background: "var(--bg-elevated)",
              color: "#fff",
            },
            children: [
              p.jsx(Wa, {
                eyebrow: "MODEL KOLABORASI · HEXA-HELIX",
                title: p.jsxs(p.Fragment, {
                  children: [
                    "Enam pilar yang menjaga Peken tetap",
                    " ",
                    p.jsx("em", {
                      style: {
                        fontFamily: "var(--font-italic)",
                        fontStyle: "italic",
                        color: "var(--accent)",
                      },
                      children: "berimbang",
                    }),
                    " ",
                    "— bukan hanya berjalan.",
                  ],
                }),
              }),
              p.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: 20,
                  columnGap: 0,
                },
                children: k.map((z, L) => p.jsx(Nh, { name: z.name, body: z.body }, L)),
              }),
            ],
          }),
          p.jsxs("section", {
            style: { padding: "120px var(--page-px)", background: "var(--bg-page)", color: "#fff" },
            children: [
              p.jsx(Wa, {
                eyebrow: "LEGALITAS & DUKUNGAN",
                title: "Landasan hukum dan jaringan dukungan kelembagaan.",
              }),
              p.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  gap: 60,
                  alignItems: "flex-start",
                },
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          letterSpacing: ".08em",
                          color: "var(--accent)",
                          textTransform: "uppercase",
                          marginBottom: 20,
                        },
                        children: "Dukungan Kelembagaan",
                      }),
                      p.jsx("p", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.9,
                          color: "var(--fg-secondary)",
                          margin: 0,
                          whiteSpace: "pre-line",
                        },
                        children: t?.legalitas_dukungan || Hh,
                      }),
                    ],
                  }),
                  p.jsx("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: 40,
                      alignSelf: "center",
                    },
                    children: p.jsx("img", {
                      src: "/assets/logo-peken-banyumasan.png",
                      alt: "Logo Peken Banyumasan",
                      style: { width: 100, height: 100 },
                    }),
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          letterSpacing: ".08em",
                          color: "var(--accent)",
                          textTransform: "uppercase",
                          marginBottom: 20,
                        },
                        children: "Landasan Legalitas",
                      }),
                      p.jsx("p", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.9,
                          color: "var(--fg-secondary)",
                          margin: 0,
                          whiteSpace: "pre-line",
                        },
                        children: t?.legalitas_hukum || Wh,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("section", {
            style: { padding: "100px var(--page-px)", background: "var(--bg-elevated)" },
            children: [
              p.jsx(Je, {
                style: { color: "var(--accent)", marginBottom: 40 },
                children: "EKOSISTEM PEKEN · SEJAK FEBRUARI 2022",
              }),
              p.jsx("div", {
                style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 },
                children: v.map((z, L) => p.jsx(Dh, { n: z.n, label: z.label }, L)),
              }),
            ],
          }),
        ],
      });
}
function Vh({ onNavigate: t }) {
  const [i, a] = re.useState(cs),
    [o, u] = re.useState(!0);
  return (
    re.useEffect(() => {
      It.get("programs")
        .then((c) => {
          Array.isArray(c) && c.length && a(c);
        })
        .catch(() => {})
        .finally(() => u(!1));
    }, []),
    o
      ? p.jsx(ji, {})
      : p.jsxs("main", {
          style: { background: "var(--bg-page)", color: "#fff" },
          children: [
            p.jsxs("section", {
              style: { padding: "100px var(--page-px) 60px" },
              children: [
                p.jsx(Je, {
                  style: { color: "var(--accent)" },
                  children: "PROGRAM · ENAM PILAR PEKEN",
                }),
                p.jsx("h1", {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(30px, 6vw, 56px)",
                    lineHeight: 1.15,
                    margin: "24px 0 0",
                    maxWidth: 1e3,
                  },
                  children:
                    "Enam program yang berulang setiap edisi — dari peragaan busana hingga panggung cerita lisan.",
                }),
              ],
            }),
            p.jsx("section", {
              style: { padding: "40px var(--page-px) 100px" },
              children: i.map((c, f) =>
                p.jsx($h, { program: c, flip: f % 2 === 1, onNavigate: t }, c.n),
              ),
            }),
          ],
        })
  );
}
function $h({ program: t, flip: i, onNavigate: a }) {
  const o = p.jsx(Si, {
      src: t.image_url,
      alt: t.title,
      aspect: "16/9",
      mode: "hover",
      style: { width: "100%" },
      caption: p.jsxs("div", {
        children: [
          p.jsxs("div", {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: 6,
            },
            children: ["PROGRAM · ", t.n],
          }),
          p.jsx("div", {
            style: {
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 18,
              color: "#fff",
            },
            children: t.title,
          }),
        ],
      }),
    }),
    u = p.jsxs("div", {
      style: { padding: "40px 40px 40px 0", display: "flex", flexDirection: "column", gap: 20 },
      children: [
        p.jsxs("div", {
          style: { display: "flex", alignItems: "baseline", gap: 24 },
          children: [
            p.jsx("div", {
              style: {
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "clamp(32px, 7vw, 64px)",
                lineHeight: 1,
                color: "var(--accent)",
              },
              children: t.n,
            }),
            p.jsx("div", {
              style: { fontFamily: "var(--font-display)", fontSize: 28, color: "#fff" },
              children: t.title,
            }),
          ],
        }),
        p.jsx("p", {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.9,
            color: "var(--fg-secondary)",
            margin: 0,
            maxWidth: "52ch",
          },
          children: t.body,
        }),
        p.jsx("div", {
          children: p.jsx(Xe, {
            onClick: () => a && a("PROGRAM_DETAIL", t.slug || t.n),
            children: "Selengkapnya",
          }),
        }),
      ],
    });
  return p.jsxs("div", {
    className: `cp-program-row${i ? " is-flip" : ""}`,
    style: {
      display: "grid",
      gridTemplateColumns: i ? "1fr 1.2fr" : "1.2fr 1fr",
      gap: 40,
      alignItems: "center",
      borderTop: "1px solid rgba(255,255,255,.08)",
      paddingBlock: 24,
    },
    children: [i ? u : o, i ? o : u],
  });
}
const Qh = [
    { filename: "gallery-1", label: "Mrapat #01", year: "2022" },
    { filename: "gallery-2", label: "Mrapat #02", year: "2022" },
    { filename: "gallery-3", label: "Mrapat #03", year: "2022" },
    { filename: "gallery-4", label: "Mrapat #04", year: "2023" },
    { filename: "gallery-5", label: "Mrapat #05", year: "2023" },
    { filename: "gallery-6", label: "Mrapat #06", year: "2023" },
    { filename: "gallery-perform-1", label: "Pertunjukan #01", year: "2024" },
    { filename: "gallery-perform-2", label: "Pertunjukan #02", year: "2024" },
    { filename: "banner-home-1", label: "Banner Peken", year: "2025" },
    { filename: "banner-home-2", label: "Banner Mrapat", year: "2025" },
  ],
  Qo = {
    headline: "Setiap edisi Peken didokumentasikan secara terbuka.",
    body: `Foto-foto di laman ini diambil oleh tim dokumentasi Peken bersama relawan fotografer komunitas — dirilis di bawah lisensi Creative Commons BY-NC 4.0 untuk penggunaan non-komersial dengan atribusi.

Setiap edisi dikemas sebagai paket gambar resolusi tinggi (RAW + JPEG terkurasi) yang dapat diunduh untuk keperluan riset, jurnalisme, atau kebutuhan komunitas.`,
    ukuran: "ZIP · ±420 MB per edisi",
    download_url: "",
  };
function Gh() {
  const [t, i] = re.useState(Qh),
    [a, o] = re.useState(Qo),
    [u, c] = re.useState(!0);
  re.useEffect(() => {
    It.get("gallery")
      .then((y) => {
        (y?.images?.length && i(y.images.filter((k) => k.visible !== !1)),
          y?.doc_headline &&
            o({
              headline: y.doc_headline,
              body: y.doc_body || Qo.body,
              ukuran: y.doc_ukuran || Qo.ukuran,
              download_url: y.doc_download_url || "",
            }));
      })
      .catch(() => {})
      .finally(() => c(!1));
  }, []);
  const f = p.jsxs("div", {
      style: { background: "var(--bg-elevated)", color: "#fff" },
      children: [
        p.jsxs("section", {
          style: { padding: "100px var(--page-px) 40px" },
          children: [
            p.jsx(Je, { style: { color: "var(--accent)" }, children: "GALLERY · 2022 — 2026" }),
            p.jsx("h1", {
              style: {
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(30px, 6vw, 56px)",
                lineHeight: 1.15,
                margin: "24px 0 0",
                maxWidth: 1e3,
              },
              children: "Empat tahun Peken dalam gambar.",
            }),
          ],
        }),
        p.jsx("section", {
          style: { padding: "40px clamp(16px, 4vw, 60px) 80px" },
          children: p.jsx("div", {
            style: { columnCount: 3, columnGap: 24 },
            children: t.map((y, k) => {
              const x = y.src || `/assets/${y.filename}.jpg`;
              return p.jsxs(
                "div",
                {
                  style: { breakInside: "avoid", marginBottom: 24 },
                  children: [
                    p.jsx(Si, {
                      src: x,
                      alt: y.label,
                      aspect: "auto",
                      mode: "static",
                      style: { aspectRatio: "auto", paddingBottom: "62%" },
                    }),
                    p.jsxs("div", {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        color: "var(--fg-muted)",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        marginTop: 8,
                        display: "flex",
                        justifyContent: "space-between",
                      },
                      children: [
                        p.jsx("span", { children: y.label }),
                        p.jsx("span", { children: y.year }),
                      ],
                    }),
                  ],
                },
                y.id || y.filename,
              );
            }),
          }),
        }),
      ],
    }),
    m = p.jsx("section", {
      style: {
        padding: "100px var(--page-px) 120px",
        background: "var(--accent)",
        color: "var(--accent-ink)",
      },
      children: p.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "280px 1fr 320px",
          gap: 60,
          alignItems: "flex-start",
        },
        children: [
          p.jsx("div", {
            children: p.jsx("div", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".04em",
                color: "var(--peken-smoke)",
                textTransform: "uppercase",
              },
              children: "DOKUMENTASI · ARSIP TERBUKA",
            }),
          }),
          p.jsxs("div", {
            children: [
              p.jsx("div", {
                style: {
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 32,
                  lineHeight: 1.25,
                  color: "var(--accent-ink)",
                  maxWidth: "24ch",
                },
                children: a.headline,
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "var(--accent-ink)",
                  margin: "32px 0 0",
                  maxWidth: "60ch",
                  whiteSpace: "pre-line",
                },
                children: a.body,
              }),
            ],
          }),
          p.jsxs("div", {
            style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 },
            children: [
              p.jsx(Xe, {
                inverse: !0,
                onClick: () =>
                  a.download_url && window.open(a.download_url, "_blank", "noopener,noreferrer"),
                children: "Unduh Paket Dokumentasi",
              }),
              p.jsx("div", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "var(--peken-smoke)",
                  letterSpacing: ".04em",
                  textTransform: "uppercase",
                },
                children: a.ukuran,
              }),
            ],
          }),
        ],
      }),
    }),
    g = p.jsxs("section", {
      style: {
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "var(--bg-elevated)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 var(--page-px)",
        textAlign: "center",
      },
      children: [
        p.jsx(Je, {
          style: { color: "var(--accent)", marginBottom: 32 },
          children: "ARSIP TERBUKA · CREATIVE COMMONS",
        }),
        p.jsxs("h2", {
          style: {
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(28px, 6vw, 48px)",
            lineHeight: 1.2,
            color: "#fff",
            maxWidth: 900,
            margin: "0 auto",
          },
          children: [
            "Setiap foto di atas bebas",
            " ",
            p.jsx("em", {
              style: {
                fontStyle: "italic",
                fontFamily: "var(--font-italic)",
                color: "var(--accent)",
              },
              children: "digunakan kembali",
            }),
            " ",
            "— untuk riset, jurnalisme, atau keperluan komunitas.",
          ],
        }),
        p.jsxs("p", {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.9,
            color: "var(--fg-secondary)",
            margin: "40px auto 0",
            maxWidth: "52ch",
          },
          children: [
            "Dokumentasi Peken Banyumasan dirilis di bawah lisensi",
            " ",
            p.jsx("span", { style: { color: "#fff" }, children: "Creative Commons BY-NC 4.0" }),
            " — gunakan dengan atribusi, jangan untuk komersial.",
          ],
        }),
      ],
    });
  return u
    ? p.jsx(ji, {})
    : p.jsxs("main", {
        style: { background: "var(--bg-elevated)" },
        children: [
          f,
          p.jsx(Cf, {
            before: g,
            after: m,
            mode: "sticky",
            pinHeight: "200vh",
            fromColor: "var(--bg-elevated)",
            toColor: "var(--accent)",
          }),
        ],
      });
}
function Yh({ work: t, onClose: i, onViewProfile: a }) {
  const o = !!a && !!t?.has_profile,
    u = () => {
      !t || !o || (i(), a(t.owner_id || t.owner));
    };
  return p.jsx(Ss, {
    open: !!t,
    onClose: i,
    labelledBy: "lightbox-title",
    width: 1080,
    padded: !1,
    children:
      t &&
      p.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          minHeight: "min(480px, 70vh)",
        },
        children: [
          p.jsx("div", {
            style: {
              background: `var(--bg-deep) url('${t.gambar_url}') center/contain no-repeat`,
              aspectRatio: "4/3",
              minHeight: 200,
            },
          }),
          p.jsxs("div", {
            style: {
              padding: "clamp(24px, 5vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            },
            children: [
              p.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 12,
                },
                children: [
                  p.jsxs(Je, {
                    style: { color: "var(--accent)" },
                    children: [
                      "PUBLICATION · ",
                      (t.kategori_display || "").toUpperCase(),
                      " · ",
                      t.tahun,
                    ],
                  }),
                  p.jsx("button", {
                    onClick: i,
                    "aria-label": "Tutup lightbox",
                    style: {
                      background: "transparent",
                      border: 0,
                      color: "#fff",
                      fontSize: 20,
                      lineHeight: 1,
                      cursor: "pointer",
                      fontFamily: "var(--font-display)",
                      padding: 4,
                    },
                    children: "✕",
                  }),
                ],
              }),
              p.jsx("h2", {
                id: "lightbox-title",
                style: {
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 28,
                  lineHeight: 1.25,
                  color: "#fff",
                  margin: 0,
                },
                children: t.judul,
              }),
              p.jsx("div", {
                style: { paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.12)" },
                children: p.jsxs("button", {
                  onClick: u,
                  title: o ? `Lihat profil publik ${t.owner}` : void 0,
                  style: {
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    cursor: o ? "pointer" : "default",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "left",
                  },
                  children: [
                    p.jsx("span", {
                      style: {
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 12,
                        color: "var(--accent-ink)",
                        flexShrink: 0,
                      },
                      children: (t.owner || "?").charAt(0).toUpperCase(),
                    }),
                    p.jsxs("span", {
                      children: [
                        p.jsx("span", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontSize: 14,
                            color: "var(--accent)",
                            display: "block",
                            lineHeight: 1.25,
                            ...(o
                              ? {
                                  textDecoration: "underline",
                                  textUnderlineOffset: 3,
                                  textDecorationColor: "rgba(195,202,150,.45)",
                                }
                              : {}),
                          },
                          children: t.owner,
                        }),
                        p.jsxs("span", {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            color: "var(--fg-muted)",
                            textTransform: "uppercase",
                            letterSpacing: ".05em",
                          },
                          children: [t.kategori_display || "", o ? " · Lihat profil →" : ""],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "var(--fg-secondary)",
                  margin: 0,
                },
                children:
                  t.deskripsi ||
                  "Karya ini dirilis sebagai bagian dari katalog kontributor Peken Banyumasan.",
              }),
              p.jsxs("div", {
                style: {
                  marginTop: "auto",
                  paddingTop: 16,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                },
                children: [
                  o && p.jsx(Xe, { onClick: u, children: "Profil Kolaborator" }),
                  p.jsx(Xe, { inverse: !0, onClick: i, children: "Tutup Karya" }),
                ],
              }),
            ],
          }),
        ],
      }),
  });
}
const qh = [
  {
    id: "w-static-01",
    judul: "Senja di Pasar Lama",
    gambar_url: "/assets/gallery-1.jpg",
    owner: "Aji Pradana",
    owner_type: "kolaborator",
    owner_id: "aji-pradana",
    kategori_display: "Fotografi",
    tahun: 2026,
    deskripsi:
      "Seri foto malam di kawasan Pasar Lama Banyumas. Diambil dengan kamera analog format 35mm.",
    featured: !0,
  },
  {
    id: "w-static-02",
    judul: "Tenun Lurik Modular",
    gambar_url: "/assets/gallery-2.jpg",
    owner: "Sanggar Lestari Sokaraja",
    owner_type: "artisan",
    owner_id: "sanggar-lestari-sokaraja",
    kategori_display: "Kriya",
    tahun: 2025,
    deskripsi:
      "Eksperimen tenun lurik dengan modul lebar tetap untuk memudahkan kombinasi warna oleh desainer pakaian.",
    featured: !0,
  },
  {
    id: "w-static-03",
    judul: "Edisi #54 — Geguritan Malam",
    gambar_url: "/assets/gallery-3.jpg",
    owner: "Komunitas Pitutur",
    owner_type: "kolaborator",
    owner_id: "komunitas-pitutur",
    kategori_display: "Seni Pertunjukan",
    tahun: 2025,
    deskripsi: "Dokumentasi panggung geguritan malam pada Peken Edisi #54.",
    featured: !0,
  },
  {
    id: "w-static-04",
    judul: "Wadah Bambu Lipat",
    gambar_url: "/assets/gallery-4.jpg",
    owner: "Artisan Tirta Karya",
    owner_type: "artisan",
    owner_id: "artisan-tirta-karya",
    kategori_display: "Kriya",
    tahun: 2024,
    deskripsi: "Wadah makanan bambu lipat untuk mendukung gerakan Bring Your Own Bowl Peken.",
    featured: !0,
  },
  {
    id: "w-static-05",
    judul: "Mural Kota Lama",
    gambar_url: "/assets/gallery-5.jpg",
    owner: "Kolektif Coret",
    owner_type: "kolaborator",
    owner_id: "kolektif-coret",
    kategori_display: "Seni Rupa",
    tahun: 2024,
    deskripsi: "Mural permanen pada dinding selatan Taman Sari, dilukis selama dua minggu.",
    featured: !0,
  },
  {
    id: "w-static-06",
    judul: "Aksara Jawa Banyumasan",
    gambar_url: "/assets/gallery-6.jpg",
    owner: "Studio Wignya",
    owner_type: "kolaborator",
    owner_id: "studio-wignya",
    kategori_display: "Desain Produk",
    tahun: 2023,
    deskripsi: "Tipografi aksara Jawa varian Banyumasan, dirilis sebagai font terbuka.",
    featured: !0,
  },
  {
    id: "w-static-07",
    judul: "Banyumasan Streetwear Cap.1",
    gambar_url: "/assets/program-fashion.jpg",
    owner: "Reka Studio",
    owner_type: "kolaborator",
    owner_id: "reka-studio",
    kategori_display: "Fashion",
    tahun: 2025,
    deskripsi: "Lini streetwear pertama dari Reka Studio yang mengadaptasi motif batik banyumasan.",
    featured: !1,
  },
  {
    id: "w-static-08",
    judul: "Anyaman Pandan Modular",
    gambar_url: "/assets/gallery-perform-1.jpg",
    owner: "Bu Tasrip & Komunitas",
    owner_type: "artisan",
    owner_id: "bu-tasrip-komunitas",
    kategori_display: "Kriya",
    tahun: 2023,
    deskripsi:
      "Anyaman pandan modular yang bisa dirangkai menjadi tas, alas duduk, atau partisi ruang.",
    featured: !1,
  },
];
function Dd({ onNavigate: t }) {
  const [i, a] = re.useState(null),
    [o, u] = re.useState(qh),
    [c, f] = re.useState(!0);
  re.useEffect(() => {
    Promise.allSettled([It.get("works"), Ch.list({ limit: 100 })])
      .then(([g, y]) => {
        const k =
            g.status === "fulfilled" && Array.isArray(g.value)
              ? g.value.filter((v) => v.visible !== !1).map((v) => ({ ...v, has_profile: !1 }))
              : [],
          b = [
            ...(y.status === "fulfilled" && Array.isArray(y.value)
              ? y.value.map((v) => ({
                  id: v.id,
                  judul: v.judul,
                  gambar_url: v.gambar_url,
                  owner: v.owner,
                  owner_id: v.owner_slug || v.owner_id,
                  kategori_display: v.subsektor,
                  tahun: v.tahun,
                  deskripsi: v.deskripsi,
                  has_profile: !0,
                }))
              : []),
            ...k,
          ];
        b.length && u(b);
      })
      .catch(() => {})
      .finally(() => f(!1));
  }, []);
  const m = (g) => {
    t && t("PUBLIC_PROFILE", g);
  };
  return c
    ? p.jsx(ji, {})
    : p.jsxs("main", {
        style: { background: "var(--bg-page)", color: "#fff" },
        children: [
          p.jsxs("section", {
            style: { padding: "100px var(--page-px) 40px" },
            children: [
              p.jsx(Je, {
                style: { color: "var(--accent)" },
                children: "PUBLICATION · KATALOG KOLABORATOR & ARTISAN",
              }),
              p.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr",
                  gap: 40,
                  alignItems: "flex-end",
                  marginTop: 24,
                },
                children: [
                  p.jsx("h1", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "clamp(30px, 6vw, 56px)",
                      lineHeight: 1.15,
                      margin: 0,
                      maxWidth: 900,
                    },
                    children: "Karya kolaborator dan artisan yang pernah berproses di Peken.",
                  }),
                  p.jsx("p", {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      lineHeight: 1.9,
                      color: "var(--fg-secondary)",
                      margin: 0,
                    },
                    children:
                      "Klik pada karya untuk melihat detail — foto besar, deskripsi karya, dan tautan ke profil kreatornya.",
                  }),
                ],
              }),
            ],
          }),
          p.jsx("section", {
            style: { padding: "40px clamp(16px, 4vw, 60px) 120px" },
            children: p.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
              children: o.map((g) =>
                p.jsx(
                  Si,
                  {
                    src: g.gambar_url,
                    alt: `${g.judul} oleh ${g.owner}`,
                    aspect: "4/5",
                    mode: "caption",
                    onClick: () => a(g),
                    ariaLabel: `Buka detail karya ${g.judul} oleh ${g.owner}`,
                    caption: p.jsxs("div", {
                      children: [
                        p.jsx("div", {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            color: "var(--accent)",
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            marginBottom: 6,
                          },
                          children: g.kategori_display,
                        }),
                        p.jsx("div", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#fff",
                            marginBottom: 4,
                          },
                          children: g.owner,
                        }),
                        p.jsx("div", {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            color: "var(--fg-secondary)",
                          },
                          children: g.judul,
                        }),
                      ],
                    }),
                  },
                  g.id,
                ),
              ),
            }),
          }),
          p.jsx(Yh, { work: i, onClose: () => a(null), onViewProfile: m }),
        ],
      });
}
const Pf = (...t) =>
  t
    .filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a)
    .join(" ")
    .trim();
const Xh = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Jh = (t) =>
  t.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, o) => (o ? o.toUpperCase() : a.toLowerCase()));
const Md = (t) => {
  const i = Jh(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var Go = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Zh = (t) => {
    for (const i in t) if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
    return !1;
  },
  eg = re.createContext({}),
  ng = () => re.useContext(eg),
  tg = re.forwardRef(
    (
      {
        color: t,
        size: i,
        strokeWidth: a,
        absoluteStrokeWidth: o,
        className: u = "",
        children: c,
        iconNode: f,
        ...m
      },
      g,
    ) => {
      const {
          size: y = 24,
          strokeWidth: k = 2,
          absoluteStrokeWidth: x = !1,
          color: b = "currentColor",
          className: v = "",
        } = ng() ?? {},
        N = (o ?? x) ? (Number(a ?? k) * 24) / Number(i ?? y) : (a ?? k);
      return re.createElement(
        "svg",
        {
          ref: g,
          ...Go,
          width: i ?? y ?? Go.width,
          height: i ?? y ?? Go.height,
          stroke: t ?? b,
          strokeWidth: N,
          className: Pf("lucide", v, u),
          ...(!c && !Zh(m) && { "aria-hidden": "true" }),
          ...m,
        },
        [...f.map(([D, z]) => re.createElement(D, z)), ...(Array.isArray(c) ? c : [c])],
      );
    },
  );
const Ga = (t, i) => {
  const a = re.forwardRef(({ className: o, ...u }, c) =>
    re.createElement(tg, {
      ref: c,
      iconNode: i,
      className: Pf(`lucide-${Xh(Md(t))}`, `lucide-${t}`, o),
      ...u,
    }),
  );
  return ((a.displayName = Md(t)), a);
};
const rg = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  ig = Ga("calendar", rg);
const ag = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  lg = Ga("circle-check-big", ag);
const og = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Tf = Ga("map-pin", og);
const sg = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
    ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
  ],
  ug = Ga("share-2", sg);
function bs(t) {
  return t
    ? t
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";
}
const cg = [
    {
      id: "aji-pradana",
      slug: "aji-pradana",
      nama: "Aji Pradana",
      role: "kolaborator",
      subsektor: ["Fotografi", "Lainnya"],
      kota: "Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Fotografer dokumenter yang berfokus pada kebudayaan lokal Banyumas. Bekerja sama dengan Peken Banyumasan sejak 2022 sebagai fotografer tetap setiap edisi.",
      tanggal_daftar: "2022-03-01",
      total_karya: 12,
      total_story: 28,
      total_event: 4,
      karya: [
        {
          id: "k1",
          judul: "Senja di Pasar Lama",
          gambar_url: "/assets/gallery-1.jpg",
          subsektor: "Fotografi",
          tahun: 2026,
          deskripsi:
            "Seri foto malam di kawasan Pasar Lama Banyumas. Diambil dengan kamera analog format 35mm.",
          featured: !0,
        },
        {
          id: "k2",
          judul: "Wajah-Wajah Peken",
          gambar_url: "/assets/gallery-perform-1.jpg",
          subsektor: "Fotografi",
          tahun: 2025,
          deskripsi:
            "Potret para pedagang dan pengunjung Peken dalam momen kebersamaan yang autentik.",
          featured: !1,
        },
        {
          id: "k3",
          judul: "Ritual Panggung #47",
          gambar_url: "/assets/gallery-perform-2.jpg",
          subsektor: "Fotografi",
          tahun: 2025,
          deskripsi: "Dokumentasi pertunjukan Pitutur Banyumasan edisi ke-47 di Taman Sari.",
          featured: !1,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Malam ini mengabadikan Peken edisi ke-86. Selalu ada sudut baru yang belum pernah saya foto sebelumnya — itulah yang membuat saya terus kembali setiap edisi.",
          media_url: null,
          tags: ["Fotografi", "Peken"],
          like_count: 42,
          status: "aktif",
          created_at: "2025-04-10",
        },
        {
          id: "s2",
          konten:
            'Menggunakan kamera film Kodak Ultramax 400 untuk seluruh seri "Senja di Pasar Lama". Ada sesuatu yang tidak bisa ditiru digital dari butiran film analog.',
          media_url: null,
          tags: ["Fotografi", "Analog"],
          like_count: 31,
          status: "aktif",
          created_at: "2025-03-22",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Peken Edisi #86",
          tanggal: "2025-04-10",
          lokasi: "Taman Sari, Banyumas",
          status: "selesai",
          peran: "Fotografer Resmi",
          deskripsi: "Dokumentasi penuh edisi ke-86 Peken Banyumasan.",
        },
        {
          id: "e2",
          nama: "Workshop Foto Analog",
          tanggal: "2025-06-15",
          lokasi: "Studio Wignya, Purwokerto",
          status: "published",
          peran: "Fasilitator",
          deskripsi: "Workshop praktik fotografi analog untuk komunitas kreatif Banyumas.",
        },
      ],
    },
    {
      id: "sanggar-lestari-sokaraja",
      slug: "sanggar-lestari-sokaraja",
      nama: "Sanggar Lestari Sokaraja",
      role: "artisan",
      kategori_usaha: ["Kriya"],
      kota: "Sokaraja, Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Sanggar tenun lurik yang dijalankan oleh tiga generasi keluarga penenun dari Sokaraja. Berkomitmen menjaga teknik tenun tradisional sembari mengeksplorasi desain kontemporer.",
      tanggal_daftar: "2022-05-15",
      total_karya: 9,
      total_story: 14,
      total_event: 5,
      karya: [
        {
          id: "k1",
          judul: "Tenun Lurik Modular",
          gambar_url: "/assets/gallery-2.jpg",
          kategori_usaha: "Kriya",
          tahun: 2025,
          deskripsi:
            "Eksperimen tenun lurik dengan modul lebar tetap untuk memudahkan kombinasi warna oleh desainer pakaian.",
          featured: !0,
        },
        {
          id: "k2",
          judul: "Lurik Diagonal Cilacap",
          gambar_url: "/assets/banner-home-1.jpg",
          kategori_usaha: "Kriya",
          tahun: 2024,
          deskripsi:
            "Koleksi tenun lurik dengan pola diagonal hasil kolaborasi dengan pengrajin Cilacap.",
          featured: !1,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Tiga generasi, satu alat tenun. Nenek saya memulai ini 60 tahun lalu. Saya hanya meneruskan, tapi dengan visi yang lebih jauh ke depan. 🧵",
          media_url: null,
          tags: ["Tenun", "Tradisi"],
          like_count: 58,
          status: "aktif",
          created_at: "2025-04-05",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Pameran Tenun Nusantara",
          tanggal: "2025-05-20",
          lokasi: "Gedung Kesenian Banyumas",
          status: "published",
          peran: "Peserta Pameran",
          deskripsi: "Pameran koleksi tenun lurik bersama pengrajin dari berbagai daerah.",
        },
        {
          id: "e2",
          nama: "Peken Edisi #80",
          tanggal: "2024-10-12",
          lokasi: "Taman Sari, Banyumas",
          status: "selesai",
          peran: "Artisan Resmi",
          deskripsi: "Booth tenun lurik di edisi ke-80 Peken Banyumasan.",
        },
      ],
    },
    {
      id: "komunitas-pitutur",
      slug: "komunitas-pitutur",
      nama: "Komunitas Pitutur",
      role: "kolaborator",
      subsektor: ["Seni Pertunjukan", "Lainnya"],
      kota: "Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Komunitas pelestari seni lisan Banyumasan — kidung, wayang, geguritan. Tampil rutin di setiap edisi Peken sejak awal berdirinya gerakan ini.",
      tanggal_daftar: "2022-02-10",
      total_karya: 24,
      total_story: 31,
      total_event: 10,
      karya: [
        {
          id: "k1",
          judul: "Edisi #54 — Geguritan Malam",
          gambar_url: "/assets/gallery-3.jpg",
          subsektor: "Seni Pertunjukan",
          tahun: 2025,
          deskripsi: "Dokumentasi panggung geguritan malam pada Peken Edisi #54.",
          featured: !0,
        },
        {
          id: "k2",
          judul: "Kidung Banyumasan #39",
          gambar_url: "/assets/gallery-perform-2.jpg",
          subsektor: "Seni Pertunjukan",
          tahun: 2024,
          deskripsi: "Penampilan kidung Banyumasan dipandu dalang muda dari Kecamatan Sokaraja.",
          featured: !1,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Geguritan bukan hanya puisi — ia adalah cara orang Banyumas berbicara tentang dukanya, syukurnya, dan harapannya. Kami menjaga agar ia tetap hidup di telinga generasi baru.",
          media_url: null,
          tags: ["Seni Pertunjukan", "Geguritan"],
          like_count: 87,
          status: "aktif",
          created_at: "2025-03-18",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Festival Seni Lisan Banyumasan",
          tanggal: "2025-07-08",
          lokasi: "Pendopo Banyumas",
          status: "published",
          peran: "Penampil Utama",
          deskripsi: "Festival tahunan seni lisan Banyumasan.",
        },
        {
          id: "e2",
          nama: "Peken Edisi #54",
          tanggal: "2025-01-18",
          lokasi: "Taman Sari",
          status: "selesai",
          peran: "Penampil",
          deskripsi: "Penampilan geguritan malam di Peken #54.",
        },
      ],
    },
    {
      id: "reka-studio",
      slug: "reka-studio",
      nama: "Reka Studio",
      role: "kolaborator",
      subsektor: ["Fashion", "Desain Produk"],
      kota: "Purwokerto, Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Studio desain mode yang mengadaptasi warisan batik dan tenun Banyumasan ke siluet pakaian kontemporer. Debut di Banyumasan Fashionshow Peken edisi ke-48.",
      tanggal_daftar: "2023-01-20",
      total_karya: 7,
      total_story: 19,
      total_event: 3,
      karya: [
        {
          id: "k1",
          judul: "Banyumasan Streetwear Cap.1",
          gambar_url: "/assets/program-fashion.jpg",
          subsektor: "Fashion",
          tahun: 2025,
          deskripsi:
            "Lini streetwear pertama dari Reka Studio yang mengadaptasi motif batik banyumasan.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Koleksi terbaru sudah siap. Kami menggabungkan motif kawung dengan siluet oversized — percaya atau tidak, hasilnya sangat Banyumas tapi juga sangat saat ini.",
          media_url: null,
          tags: ["Mode", "Batik"],
          like_count: 73,
          status: "aktif",
          created_at: "2025-04-08",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Banyumasan Fashionshow #48",
          tanggal: "2025-03-22",
          lokasi: "Taman Sari",
          status: "selesai",
          peran: "Perancang Utama",
          deskripsi: "Debut koleksi streetwear Banyumasan oleh Reka Studio.",
        },
      ],
    },
    {
      id: "artisan-tirta-karya",
      slug: "artisan-tirta-karya",
      nama: "Artisan Tirta Karya",
      role: "artisan",
      kategori_usaha: ["Kriya"],
      kota: "Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Usaha kerajinan bambu ramah lingkungan yang mendukung gerakan zero-waste Peken melalui produksi wadah makanan tanpa lem sintetis.",
      tanggal_daftar: "2023-04-01",
      total_karya: 5,
      total_story: 8,
      total_event: 3,
      karya: [
        {
          id: "k1",
          judul: "Wadah Bambu Lipat",
          gambar_url: "/assets/gallery-4.jpg",
          kategori_usaha: "Kriya",
          tahun: 2024,
          deskripsi: "Wadah makanan bambu lipat untuk mendukung Bring Your Own Bowl.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Setiap wadah bambu yang kami buat menggantikan sekitar 200 wadah plastik sekali pakai selama masa pakainya. Kecil, tapi nyata dampaknya. 🌿",
          media_url: null,
          tags: ["Kriya", "ZeroWaste"],
          like_count: 45,
          status: "aktif",
          created_at: "2025-02-14",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Peken Zero-Waste Challenge",
          tanggal: "2024-12-07",
          lokasi: "Taman Sari",
          status: "selesai",
          peran: "Mitra BYOB",
          deskripsi: "Penyediaan wadah bambu untuk kampanye zero-waste Peken.",
        },
      ],
    },
    {
      id: "kolektif-coret",
      slug: "kolektif-coret",
      nama: "Kolektif Coret",
      role: "kolaborator",
      subsektor: ["Seni Rupa", "Desain Produk"],
      kota: "Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Enam seniman muda yang percaya seni milik jalan, bukan galeri. Mural permanen mereka di Taman Sari menjadi latar ikonik Peken Banyumasan.",
      tanggal_daftar: "2023-07-10",
      total_karya: 6,
      total_story: 22,
      total_event: 3,
      karya: [
        {
          id: "k1",
          judul: "Mural Kota Lama",
          gambar_url: "/assets/gallery-5.jpg",
          subsektor: "Seni Rupa",
          tahun: 2024,
          deskripsi: "Mural permanen pada dinding selatan Taman Sari, dilukis selama dua minggu.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Dua minggu, enam tangan, satu tembok. Mural Kota Lama bukan hanya lukisan — ia adalah percakapan antara tradisi dan masa depan.",
          media_url: null,
          tags: ["Mural", "Seni Publik"],
          like_count: 112,
          status: "aktif",
          created_at: "2024-11-02",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Open Call Mural Banyumas",
          tanggal: "2025-08-01",
          lokasi: "Kota Lama Banyumas",
          status: "published",
          peran: "Seniman Terpilih",
          deskripsi: "Open call karya mural untuk ruang publik baru di kota lama.",
        },
      ],
    },
    {
      id: "petani-kopi-baturraden",
      slug: "petani-kopi-baturraden",
      nama: "Petani Kopi Baturraden",
      role: "artisan",
      kategori_usaha: ["F&B / Kuliner"],
      kota: "Baturraden, Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Kelompok tani kopi di ketinggian 800 mdpl lereng Gunung Slamet. Robusta single-origin yang disangrai sendiri dan disajikan rutin di Coffee & Conversation Peken.",
      tanggal_daftar: "2023-09-05",
      total_karya: 3,
      total_story: 11,
      total_event: 4,
      karya: [
        {
          id: "k1",
          judul: "Kopi Robusta Banyumas",
          gambar_url: "/assets/program-coffee.jpg",
          kategori_usaha: "F&B / Kuliner",
          tahun: 2024,
          deskripsi: "Robusta single-origin dari ketinggian 800 mdpl di Baturraden.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Musim panen kali ini luar biasa. Kondisi cuaca yang sempurna menghasilkan biji kopi dengan rasa lebih clean dan fruity dari biasanya.",
          media_url: null,
          tags: ["Kopi", "Panen"],
          like_count: 29,
          status: "aktif",
          created_at: "2025-03-30",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Coffee & Conversation #12",
          tanggal: "2025-05-03",
          lokasi: "Taman Sari",
          status: "published",
          peran: "Penyedia Kopi",
          deskripsi: "Sesi diskusi santai sambil menikmati kopi Baturraden.",
        },
        {
          id: "e2",
          nama: "Harvest Open Farm",
          tanggal: "2025-04-20",
          lokasi: "Kebun Kopi, Baturraden",
          status: "berlangsung",
          peran: "Tuan Rumah",
          deskripsi: "Kunjungan terbuka ke kebun kopi saat panen raya.",
        },
      ],
    },
    {
      id: "studio-wignya",
      slug: "studio-wignya",
      nama: "Studio Wignya",
      role: "kolaborator",
      subsektor: ["Desain Produk", "Seni Rupa"],
      kota: "Purwokerto, Banyumas",
      status: "aktif",
      foto_url: null,
      cover_url: null,
      bio: "Studio desain yang berspesialisasi dalam identitas budaya Banyumasan. Merilis tipografi aksara Jawa sebagai font terbuka hasil riset bersama Universitas Jenderal Soedirman.",
      tanggal_daftar: "2022-08-20",
      total_karya: 4,
      total_story: 17,
      total_event: 3,
      karya: [
        {
          id: "k1",
          judul: "Aksara Jawa Banyumasan",
          gambar_url: "/assets/gallery-6.jpg",
          subsektor: "Desain Produk",
          tahun: 2023,
          deskripsi: "Tipografi aksara Jawa varian Banyumasan, dirilis sebagai font terbuka.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Font aksara Jawa Banyumasan sudah diunduh lebih dari 3.000 kali di seluruh dunia. Identitas lokal ternyata bisa berdampak global jika dikemas dengan baik. ✍️",
          media_url: null,
          tags: ["Desain Grafis", "Aksara"],
          like_count: 63,
          status: "aktif",
          created_at: "2025-01-15",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Peken Brand Identity Workshop",
          tanggal: "2025-02-08",
          lokasi: "Co-working UNSOED",
          status: "selesai",
          peran: "Fasilitator",
          deskripsi: "Workshop identitas visual untuk Artisan lokal Banyumas.",
        },
      ],
    },
    {
      id: "bu-tasrip-komunitas",
      slug: "bu-tasrip-komunitas",
      nama: "Bu Tasrip & Komunitas",
      role: "artisan",
      kategori_usaha: ["Kriya"],
      kota: "Desa Banjarsari, Banyumas",
      status: "pending",
      foto_url: null,
      cover_url: null,
      bio: "Komunitas perempuan Desa Banjarsari yang mengembangkan kerajinan anyaman pandan modular. Karya mereka bisa dirangkai menjadi berbagai produk fungsional.",
      tanggal_daftar: "2023-06-01",
      total_karya: 3,
      total_story: 6,
      total_event: 2,
      karya: [
        {
          id: "k1",
          judul: "Anyaman Pandan Modular",
          gambar_url: "/assets/gallery-perform-1.jpg",
          kategori_usaha: "Kriya",
          tahun: 2023,
          deskripsi:
            "Anyaman pandan modular yang bisa dirangkai menjadi tas, alas duduk, atau partisi ruang.",
          featured: !0,
        },
      ],
      story: [
        {
          id: "s1",
          konten:
            "Dua puluh perempuan di desa kami kini punya penghasilan dari kerajinan anyaman pandan. Kecil tapi pasti — dan itu lebih dari cukup untuk membuat kami terus berkarya.",
          media_url: null,
          tags: ["Kriya", "Komunitas"],
          like_count: 94,
          status: "aktif",
          created_at: "2024-09-20",
        },
      ],
      events: [
        {
          id: "e1",
          nama: "Peken Makers Market",
          tanggal: "2024-08-17",
          lokasi: "Taman Sari",
          status: "selesai",
          peran: "Peserta",
          deskripsi: "Penjualan anyaman pandan di pasar makers Peken.",
        },
      ],
    },
  ],
  dg = (t) => {
    if (!t) return null;
    const i = bs(t);
    return (
      cg.find((a) => a.slug === i) || {
        id: i,
        slug: i,
        nama: t.replace(/-/g, " ").replace(/\b\w/g, (a) => a.toUpperCase()),
        role: "kolaborator",
        subsektor: [],
        kota: "Banyumas",
        status: "aktif",
        foto_url: null,
        cover_url: null,
        bio: "Kolaborator yang berkolaborasi dengan Peken Banyumasan.",
        tanggal_daftar: "2024-01-01",
        total_karya: 0,
        total_story: 0,
        total_event: 0,
        karya: [],
        story: [],
        events: [],
      }
    );
  };
function Es(t) {
  const i = t?.role === "artisan" || t?.owner_type === "artisan",
    a = i ? (t?.kategori_usaha ?? t?.subsektor) : (t?.subsektor ?? t?.kategori_usaha),
    o = Array.isArray(a) ? a : a ? [a] : [];
  return {
    key: i ? "kategori_usaha" : "subsektor",
    label: i ? "Kategori Usaha" : "Subsektor",
    values: o,
  };
}
const If = (t) =>
    t
      ? new Date(t).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
      : "",
  fg = (t) => {
    if (!t) return "";
    const i = Math.floor((Date.now() - new Date(t)) / 864e5);
    return i === 0 ? "Hari ini" : i === 1 ? "Kemarin" : i < 7 ? `${i} hari lalu` : If(t);
  },
  pg = (t) =>
    t.status === "published" && new Date(t.tanggal) > new Date() ? "upcoming" : t.status;
function mg({ foto_url: t, nama: i, size: a = 86 }) {
  const o = (i || "?").charAt(0).toUpperCase();
  return p.jsx("div", {
    style: {
      width: a,
      height: a,
      borderRadius: "50%",
      flexShrink: 0,
      background: t ? `url('${t}') center/cover` : "var(--accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children:
      !t &&
      p.jsx("span", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: a * 0.38,
          color: "var(--accent-ink)",
        },
        children: o,
      }),
  });
}
function hg({ item: t, onClose: i }) {
  return p.jsx(Ss, {
    open: !!t,
    onClose: i,
    labelledBy: "pp-lb",
    width: 960,
    padded: !1,
    children:
      t &&
      p.jsxs("div", {
        style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", minHeight: 440 },
        children: [
          p.jsx("div", {
            style: {
              background: `var(--bg-deep) url('${t.gambar_url}') center/contain no-repeat`,
              aspectRatio: "4/3",
            },
          }),
          p.jsxs("div", {
            style: { padding: 36, display: "flex", flexDirection: "column", gap: 16 },
            children: [
              p.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  p.jsxs(Je, {
                    style: { color: "var(--accent)" },
                    children: [Es(t).values.join(", ") || "—", " · ", t.tahun],
                  }),
                  p.jsx("button", {
                    onClick: i,
                    style: {
                      background: "none",
                      border: 0,
                      color: "#fff",
                      fontSize: 18,
                      cursor: "pointer",
                    },
                    children: "✕",
                  }),
                ],
              }),
              p.jsx("h3", {
                id: "pp-lb",
                style: {
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 24,
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.25,
                },
                children: t.judul,
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  lineHeight: 1.85,
                  color: "var(--fg-secondary)",
                  margin: 0,
                },
                children: t.deskripsi,
              }),
              p.jsx("div", {
                style: { marginTop: "auto", paddingTop: 12 },
                children: p.jsx(Xe, { onClick: i, children: "Tutup Karya" }),
              }),
            ],
          }),
        ],
      }),
  });
}
function gg({ item: t, onClick: i }) {
  return p.jsx(Si, {
    src: t.gambar_url,
    alt: t.judul,
    aspect: "4/5",
    mode: "caption",
    onClick: () => i(t),
    ariaLabel: `Buka detail ${t.judul}`,
    caption: p.jsxs("div", {
      children: [
        p.jsx("div", {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: ".06em",
            marginBottom: 6,
          },
          children: Es(t).values.join(", "),
        }),
        p.jsx("div", {
          style: {
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 15,
            color: "#fff",
            marginBottom: 4,
          },
          children: t.judul,
        }),
        p.jsx("div", {
          style: { fontFamily: "var(--font-body)", fontSize: 11, color: "var(--fg-secondary)" },
          children: t.tahun,
        }),
      ],
    }),
  });
}
function yg({ story: t }) {
  return p.jsxs("article", {
    style: {
      borderLeft: "2px solid var(--accent)",
      paddingLeft: 24,
      paddingBlock: 4,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    children: [
      t.media_url &&
        p.jsx("img", {
          src: t.media_url,
          alt: "",
          style: { width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" },
        }),
      p.jsx("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 13,
          lineHeight: 1.85,
          color: "var(--fg-secondary)",
          margin: 0,
        },
        children: t.konten,
      }),
      p.jsx("span", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "var(--fg-muted)",
          textTransform: "uppercase",
          letterSpacing: ".06em",
        },
        children: fg(t.created_at),
      }),
    ],
  });
}
const kg = {
    upcoming: "var(--accent)",
    berlangsung: "#7dd3fc",
    selesai: "var(--fg-muted)",
    published: "var(--accent)",
  },
  vg = {
    upcoming: "Akan Datang",
    berlangsung: "Berlangsung",
    selesai: "Selesai",
    published: "Akan Datang",
    draft: "Draft",
  };
function xg({ ev: t }) {
  const i = pg(t),
    a = kg[i] || "var(--fg-muted)";
  return p.jsxs("div", {
    style: {
      borderLeft: `2px solid ${a}`,
      paddingLeft: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    children: [
      p.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" },
        children: [
          p.jsx(Je, { style: { color: a }, children: vg[i] || i }),
          t.peran &&
            p.jsx("span", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 10,
                color: "var(--fg-muted)",
                border: "1px solid rgba(255,255,255,.1)",
                padding: "1px 7px",
                textTransform: "uppercase",
                letterSpacing: ".06em",
              },
              children: t.peran,
            }),
        ],
      }),
      p.jsx("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: 16,
          color: "#fff",
          lineHeight: 1.3,
        },
        children: t.nama,
      }),
      p.jsxs("div", {
        style: { display: "flex", gap: 16, flexWrap: "wrap" },
        children: [
          t.tanggal &&
            p.jsxs("span", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--fg-secondary)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              },
              children: [p.jsx(ig, { size: 11 }), " ", If(t.tanggal)],
            }),
          t.lokasi &&
            p.jsxs("span", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--fg-secondary)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              },
              children: [p.jsx(Tf, { size: 11 }), " ", t.lokasi],
            }),
        ],
      }),
      t.deskripsi &&
        p.jsx("p", {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: 12,
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            margin: 0,
          },
          children: t.deskripsi,
        }),
    ],
  });
}
function Yo({ label: t }) {
  return p.jsxs("div", {
    style: { textAlign: "center", padding: "80px 0" },
    children: [
      p.jsx("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(30px, 6vw, 56px)",
          color: "rgba(195,202,150,.08)",
          marginBottom: 16,
        },
        children: "—",
      }),
      p.jsx("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-muted)",
          textTransform: "uppercase",
          letterSpacing: ".07em",
        },
        children: t,
      }),
    ],
  });
}
function wg({ ownerName: t, onBack: i }) {
  const a = dg(t),
    [o, u] = re.useState(a),
    [c, f] = re.useState(null),
    [m, g] = re.useState("karya");
  re.useEffect(() => {
    if (!t) return;
    const v = bs(t);
    Ph.bySlug(v)
      .then((N) => {
        N && u(N);
      })
      .catch(() => {});
  }, [t]);
  const y = () => {
    const v = window.location.href;
    navigator.share
      ? navigator.share({ title: `${o?.nama} — Peken Banyumasan`, url: v })
      : navigator.clipboard?.writeText(v).then(() => alert("Link profil disalin!"));
  };
  if (!o)
    return p.jsx("main", {
      style: {
        background: "var(--bg-page)",
        color: "#fff",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      children: p.jsxs("div", {
        style: { textAlign: "center" },
        children: [
          p.jsx(Je, {
            style: { color: "var(--accent)", marginBottom: 24 },
            children: "404 · PROFIL TIDAK DITEMUKAN",
          }),
          p.jsx(Xe, { onClick: i, children: "← Kembali ke Karya" }),
        ],
      }),
    });
  const k = (o?.karya || []).find((v) => v.featured),
    x = o?.cover_url || k?.gambar_url || null,
    b = [
      { id: "karya", label: `Karya (${(o?.karya || []).length})` },
      { id: "story", label: `Story (${(o?.story || []).length})` },
      { id: "event", label: `Event (${(o?.events || []).length})` },
    ];
  return p.jsxs("main", {
    style: { background: "var(--bg-page)", color: "#fff" },
    children: [
      p.jsx(hg, { item: c, onClose: () => f(null) }),
      p.jsx("div", {
        style: {
          height: 200,
          background: x
            ? `linear-gradient(to bottom,rgba(13,13,13,.1),rgba(13,13,13,.75)),url('${x}') center/cover`
            : "linear-gradient(135deg,var(--bg-elevated) 0%,rgba(195,202,150,.06) 100%)",
        },
        children:
          !x &&
          p.jsx("div", {
            style: {
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 120,
            },
            children: p.jsx("span", {
              style: {
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "clamp(40px, 11vw, 100px)",
                color: "rgba(195,202,150,.04)",
                userSelect: "none",
              },
              children: "PEKEN BANYUMASAN",
            }),
          }),
      }),
      p.jsx("div", {
        style: {
          background: "var(--bg-elevated)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        },
        children: p.jsx("div", {
          style: { maxWidth: 1060, margin: "0 auto", padding: "0 var(--page-px)" },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "flex-end",
              gap: 24,
              transform: "translateY(-44px)",
              marginBottom: -20,
            },
            children: [
              p.jsx(mg, { foto_url: o?.foto_url, nama: o?.nama, size: 86 }),
              p.jsxs("div", {
                style: { flex: 1, paddingBottom: 14 },
                children: [
                  p.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" },
                    children: [
                      p.jsx("h1", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          fontSize: 28,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.1,
                        },
                        children: o.nama,
                      }),
                      p.jsx("span", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: 9,
                          fontWeight: 500,
                          background: "var(--accent)",
                          color: "var(--accent-ink)",
                          padding: "3px 9px",
                          textTransform: "uppercase",
                          letterSpacing: ".07em",
                        },
                        children: o?.role ? o.role.charAt(0).toUpperCase() + o.role.slice(1) : "",
                      }),
                      o.status === "aktif" &&
                        p.jsxs("span", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontSize: 9,
                            fontWeight: 500,
                            background: "rgba(255,255,255,.07)",
                            color: "var(--fg-secondary)",
                            padding: "3px 8px",
                            textTransform: "uppercase",
                            letterSpacing: ".07em",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          },
                          children: [p.jsx(lg, { size: 9 }), " Terverifikasi"],
                        }),
                    ],
                  }),
                  p.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 10,
                      flexWrap: "wrap",
                    },
                    children: [
                      Es(o).values.map((v) =>
                        p.jsx(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: 11,
                              color: "var(--fg-secondary)",
                              border: "1px solid rgba(255,255,255,.1)",
                              padding: "2px 8px",
                            },
                            children: v,
                          },
                          v,
                        ),
                      ),
                      o.kota &&
                        p.jsxs("span", {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            color: "var(--fg-muted)",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          },
                          children: [p.jsx(Tf, { size: 11 }), " ", o.kota],
                        }),
                      p.jsxs("span", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 11,
                          color: "var(--fg-muted)",
                        },
                        children: [
                          "Bergabung ",
                          o?.tanggal_daftar ? new Date(o.tanggal_daftar).getFullYear() : "—",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                style: {
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 14,
                },
                children: [
                  p.jsxs("button", {
                    onClick: y,
                    style: {
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,.15)",
                      color: "var(--fg-secondary)",
                      padding: "6px 14px",
                      cursor: "pointer",
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    },
                    children: [p.jsx(ug, { size: 12 }), " Bagikan"],
                  }),
                  p.jsx(Xe, { inverse: !0, onClick: i, children: "← Kembali" }),
                ],
              }),
            ],
          }),
        }),
      }),
      p.jsx("section", {
        style: { background: "var(--accent)", padding: "48px var(--page-px)" },
        children: p.jsxs("div", {
          style: {
            maxWidth: 1060,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "200px 1fr auto",
            gap: 48,
            alignItems: "flex-start",
          },
          children: [
            p.jsxs("div", {
              children: [
                p.jsx("div", {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "var(--accent-ink)",
                    letterSpacing: ".03em",
                  },
                  children: "PEKEN BANYUMASAN",
                }),
                p.jsxs("div", {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    color: "var(--peken-smoke)",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    marginTop: 6,
                  },
                  children: [
                    o?.role ? o.role.charAt(0).toUpperCase() + o.role.slice(1) : "",
                    " · ",
                    o?.tanggal_daftar ? new Date(o.tanggal_daftar).getFullYear() : "—",
                  ],
                }),
              ],
            }),
            p.jsx("p", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 13,
                lineHeight: 1.85,
                color: "var(--accent-ink)",
                margin: 0,
                maxWidth: "52ch",
              },
              children: o?.bio,
            }),
            p.jsx("div", {
              style: { display: "flex", gap: 32 },
              children: [
                ["Karya", o?.total_karya ?? 0],
                ["Story", o?.total_story ?? 0],
                ["Event", o?.total_event ?? 0],
              ].map(([v, N]) =>
                p.jsxs(
                  "div",
                  {
                    style: { textAlign: "center" },
                    children: [
                      p.jsx("div", {
                        style: {
                          fontFamily: "Inter",
                          fontWeight: 300,
                          fontSize: "clamp(26px, 5vw, 40px)",
                          lineHeight: 1,
                          color: "var(--accent-ink)",
                        },
                        children: N,
                      }),
                      p.jsx("div", {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 10,
                          color: "var(--peken-smoke)",
                          textTransform: "uppercase",
                          letterSpacing: ".06em",
                          marginTop: 4,
                        },
                        children: v,
                      }),
                    ],
                  },
                  v,
                ),
              ),
            }),
          ],
        }),
      }),
      p.jsx("div", {
        style: {
          background: "var(--bg-elevated)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
          position: "sticky",
          top: 80,
          zIndex: 40,
        },
        children: p.jsx("div", {
          style: { maxWidth: 1060, margin: "0 auto", padding: "0 var(--page-px)", display: "flex" },
          children: b.map((v) =>
            p.jsx(
              "button",
              {
                onClick: () => g(v.id),
                style: {
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  padding: "15px 0",
                  marginRight: 32,
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: m === v.id ? "var(--accent)" : "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                  borderBottom: m === v.id ? "2px solid var(--accent)" : "2px solid transparent",
                  transition: "color 200ms ease, border-color 200ms ease",
                },
                children: v.label,
              },
              v.id,
            ),
          ),
        }),
      }),
      p.jsxs("div", {
        style: { maxWidth: 1060, margin: "0 auto", padding: "52px var(--page-px) 96px" },
        children: [
          m === "karya" &&
            (o?.karya?.length
              ? p.jsx("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
                  children: o.karya.map((v) => p.jsx(gg, { item: v, onClick: f }, v.id)),
                })
              : p.jsx(Yo, { label: "Belum ada karya yang dipublikasikan." })),
          m === "story" &&
            (o?.story?.length
              ? p.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "28px 52px",
                    maxWidth: 800,
                  },
                  children: o.story.map((v) => p.jsx(yg, { story: v }, v.id)),
                })
              : p.jsx(Yo, { label: "Belum ada story yang ditulis." })),
          m === "event" &&
            (o?.events?.length
              ? p.jsx("div", {
                  style: { display: "grid", gap: 28, maxWidth: 720 },
                  children: o.events.map((v) => p.jsx(xg, { ev: v }, v.id)),
                })
              : p.jsx(Yo, { label: "Belum ada event yang diikuti." })),
        ],
      }),
      p.jsx("div", {
        style: {
          background: "var(--bg-elevated)",
          borderTop: "1px solid rgba(255,255,255,.06)",
          padding: "24px var(--page-px)",
        },
        children: p.jsxs("div", {
          style: {
            maxWidth: 1060,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          },
          children: [
            p.jsx("div", {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: 10,
                color: "var(--fg-muted)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
              },
              children: "Peken Banyumasan · Ekosistem Kreatif Banyumas",
            }),
            p.jsxs("div", {
              style: { fontFamily: "var(--font-body)", fontSize: 10, color: "var(--fg-muted)" },
              children: [
                o?.nama,
                " · ",
                o?.role ? o.role.charAt(0).toUpperCase() + o.role.slice(1) : "",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Sg(t, i) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t)
    .join((a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " "))
    .trim();
}
