function Hv({ programId: t, onBack: i }) {
  const [a, o] = re.useState(null),
    [u, c] = re.useState(!0);
  return (
    re.useEffect(() => {
      const f = (m) => (Array.isArray(m) ? m : []).find((g) => g.slug === t || g.n === t);
      It.get("programs")
        .then((m) => {
          o(f(m) || f(cs) || null);
        })
        .catch(() => {
          o(f(cs) || null);
        })
        .finally(() => c(!1));
    }, [t]),
    u
      ? p.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40vh",
            background: "var(--bg-page)",
          },
          children: p.jsx("div", {
            style: {
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "3px solid rgba(195,202,150,.2)",
              borderTopColor: "var(--accent, #C3CA96)",
              animation: "spin .8s linear infinite",
            },
          }),
        })
      : a
        ? p.jsxs("main", {
            style: { background: "var(--bg-page)", color: "#fff" },
            children: [
              p.jsxs("section", {
                style: {
                  position: "relative",
                  height: "60vh",
                  background: `url('${a.image_url}') center/cover no-repeat`,
                },
                children: [
                  p.jsx("div", {
                    "aria-hidden": "true",
                    style: {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(13,13,13,.3), rgba(13,13,13,.85))",
                    },
                  }),
                  p.jsxs("div", {
                    style: {
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "60px var(--page-px)",
                    },
                    children: [
                      p.jsxs(Je, {
                        style: { color: "var(--accent)", marginBottom: 12 },
                        children: ["PROGRAM · ", a.n],
                      }),
                      p.jsx("h1", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          fontSize: "clamp(30px, 6vw, 52px)",
                          lineHeight: 1.15,
                          margin: 0,
                          maxWidth: 900,
                        },
                        children: a.title,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("section", {
                style: { padding: "80px var(--page-px) 120px", maxWidth: 1200 },
                children: p.jsxs("div", {
                  style: { display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80 },
                  children: [
                    p.jsxs("div", {
                      children: [
                        p.jsx("div", {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: 15,
                            lineHeight: 2,
                            color: "var(--fg-secondary)",
                          },
                          children: p.jsx(Bv, { children: a.body || a.body_short || "" }),
                        }),
                        p.jsx("div", {
                          style: { marginTop: 48 },
                          children: p.jsx(Xe, { onClick: i, children: "← Kembali ke Program" }),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: {
                        borderLeft: "1px solid rgba(255,255,255,.08)",
                        paddingLeft: 48,
                        display: "flex",
                        flexDirection: "column",
                        gap: 28,
                      },
                      children: [
                        a.target_peserta &&
                          p.jsxs("div", {
                            children: [
                              p.jsx("div", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 11,
                                  color: "var(--accent)",
                                  textTransform: "uppercase",
                                  letterSpacing: ".08em",
                                  marginBottom: 8,
                                },
                                children: "Target Peserta",
                              }),
                              p.jsx("p", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 13,
                                  color: "var(--fg-secondary)",
                                  margin: 0,
                                },
                                children: a.target_peserta,
                              }),
                            ],
                          }),
                        a.durasi &&
                          p.jsxs("div", {
                            children: [
                              p.jsx("div", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 11,
                                  color: "var(--accent)",
                                  textTransform: "uppercase",
                                  letterSpacing: ".08em",
                                  marginBottom: 8,
                                },
                                children: "Durasi",
                              }),
                              p.jsx("p", {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: 13,
                                  color: "var(--fg-secondary)",
                                  margin: 0,
                                },
                                children: a.durasi,
                              }),
                            ],
                          }),
                        p.jsxs("div", {
                          children: [
                            p.jsx("div", {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: 11,
                                color: "var(--accent)",
                                textTransform: "uppercase",
                                letterSpacing: ".08em",
                                marginBottom: 8,
                              },
                              children: "Program",
                            }),
                            p.jsx("p", {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: 13,
                                color: "var(--fg-secondary)",
                                margin: 0,
                              },
                              children: "Enam program berulang setiap edisi Peken Banyumasan",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : p.jsxs("main", {
            style: {
              background: "var(--bg-page)",
              color: "#fff",
              padding: "clamp(40px, 8vw, 120px)",
              textAlign: "center",
            },
            children: [
              p.jsx(Je, {
                style: { color: "var(--accent)" },
                children: "PROGRAM · TIDAK DITEMUKAN",
              }),
              p.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  color: "var(--fg-secondary)",
                  marginTop: 24,
                },
                children: "Program tidak ditemukan.",
              }),
              p.jsx("div", {
                style: { marginTop: 36 },
                children: p.jsx(Xe, { onClick: i, children: "← Kembali ke Program" }),
              }),
            ],
          })
  );
}
const Wv = { HOME: _f, ABOUT: Kh, PROGRAM: Vh, PUBLICATION: Dd, KARYA: Dd, GALLERY: Gh },
  Kv = () => {
    const t = window.location.hash.match(/^#\/@(.+)$/);
    return t ? decodeURIComponent(t[1]) : null;
  };
function Vv() {
  const t = Kv(),
    [i, a] = re.useState(t ? "PUBLIC_PROFILE" : localStorage.getItem("peken_page") || "HOME"),
    [o, u] = re.useState(t),
    [c, f] = re.useState(null),
    [m, g] = re.useState(!1);
  re.useEffect(() => {
    (i === "PUBLIC_PROFILE" && o
      ? history.replaceState(null, "", `${window.location.pathname}#/@${o}`)
      : (window.location.hash.startsWith("#/@") &&
          history.replaceState(null, "", window.location.pathname),
        localStorage.setItem("peken_page", i)),
      window.scrollTo(0, 0));
  }, [i, o]);
  const y = (x, b) => {
    x === "PUBLIC_PROFILE"
      ? (u(bs(b)), f(null), a("PUBLIC_PROFILE"))
      : x === "PROGRAM_DETAIL"
        ? (f(b), u(null), a("PROGRAM_DETAIL"))
        : (u(null), f(null), a(x));
  };
  if (i === "PUBLIC_PROFILE" && o)
    return p.jsxs("div", {
      children: [
        p.jsx(Wo, { current: "PUBLICATION", onNavigate: y, onLogin: () => g(!0) }),
        p.jsx(wg, { ownerName: o, onBack: () => y("PUBLICATION") }),
        p.jsx(Ko, { onNavigate: y }),
        p.jsx($o, { open: m, onClose: () => g(!1) }),
      ],
    });
  if (i === "PROGRAM_DETAIL" && c)
    return p.jsxs("div", {
      children: [
        p.jsx(Wo, { current: "PROGRAM", onNavigate: y, onLogin: () => g(!0) }),
        p.jsx(Hv, { programId: c, onBack: () => y("PROGRAM") }),
        p.jsx(Ko, { onNavigate: y }),
        p.jsx($o, { open: m, onClose: () => g(!1) }),
      ],
    });
  const k = Wv[i] || _f;
  return p.jsxs("div", {
    children: [
      p.jsx(Wo, { current: i, onNavigate: y, onLogin: () => g(!0) }),
      p.jsx(k, { onNavigate: y }),
      p.jsx(Ko, { onNavigate: y }),
      p.jsx($o, { open: m, onClose: () => g(!1) }),
    ],
  });
}
gh.createRoot(document.getElementById("root")).render(
  p.jsx(uh.StrictMode, { children: p.jsx(Vv, {}) }),
);
