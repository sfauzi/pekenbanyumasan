import { Modal } from "./Modal.jsx";
import { Eyebrow, PillButton } from "./primitives.jsx";
import { taxonomy } from "../lib/utils.js";

/**
 * WorkLightbox — the publication detail dialog (`Yh` in the origin bundle).
 *
 * A two-up: the work shown `contain` on a deep-ink plate, and its metadata
 * column. The "Profil Kolaborator" action appears only when the work has a
 * public profile behind it.
 */
export function WorkLightbox({ work, onClose, onViewProfile }) {
  const hasProfile = Boolean(onViewProfile) && Boolean(work?.has_profile);
  const openProfile = () => {
    if (!work || !hasProfile) return;
    onClose();
    onViewProfile(work.owner_id || work.owner);
  };

  return (
    <Modal
      open={Boolean(work)}
      onClose={onClose}
      labelledBy="lightbox-title"
      width={1080}
      padded={false}
    >
      {work && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            minHeight: "min(480px, 70vh)",
          }}
        >
          <div
            style={{
              background: `var(--bg-deep) url('${work.gambar_url}') center/contain no-repeat`,
              aspectRatio: "4/3",
              minHeight: 200,
            }}
          />
          <div
            style={{
              padding: "clamp(24px, 5vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <Eyebrow style={{ color: "var(--accent)" }}>
                PUBLICATION · {(work.kategori_display || "").toUpperCase()} · {work.tahun}
              </Eyebrow>
              <button
                onClick={onClose}
                aria-label="Tutup lightbox"
                style={{
                  background: "transparent",
                  border: 0,
                  color: "#fff",
                  fontSize: 20,
                  lineHeight: 1,
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  padding: 4,
                }}
              >
                ✕
              </button>
            </div>

            <h2
              id="lightbox-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.25,
                color: "#fff",
                margin: 0,
              }}
            >
              {work.judul}
            </h2>

            <div style={{ paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              <button
                onClick={openProfile}
                title={hasProfile ? `Lihat profil publik ${work.owner}` : undefined}
                style={{
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  cursor: hasProfile ? "pointer" : "default",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
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
                  }}
                >
                  {(work.owner || "?").charAt(0).toUpperCase()}
                </span>
                <span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      color: "var(--accent)",
                      display: "block",
                      lineHeight: 1.25,
                      ...(hasProfile
                        ? {
                            textDecoration: "underline",
                            textUnderlineOffset: 3,
                            textDecorationColor: "rgba(195,202,150,.45)",
                          }
                        : {}),
                    }}
                  >
                    {work.owner}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                    }}
                  >
                    {work.kategori_display || ""}
                    {hasProfile ? " · Lihat profil →" : ""}
                  </span>
                </span>
              </button>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                lineHeight: 1.8,
                color: "var(--fg-secondary)",
                margin: 0,
              }}
            >
              {work.deskripsi ||
                "Karya ini dirilis sebagai bagian dari katalog kontributor Peken Banyumasan."}
            </p>

            <div
              style={{
                marginTop: "auto",
                paddingTop: 16,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {hasProfile && <PillButton onClick={openProfile}>Profil Kolaborator</PillButton>}
              <PillButton inverse onClick={onClose}>
                Tutup Karya
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

/**
 * ProfileLightbox — the per-work detail inside a public profile (`hg`).
 * Slightly narrower and denser than WorkLightbox, with a 1.4fr/1fr split.
 */
export function ProfileLightbox({ item, onClose }) {
  const kindValues = taxonomy(item).values;
  const kind = kindValues.length ? kindValues.join(", ") : "—";

  return (
    <Modal open={Boolean(item)} onClose={onClose} labelledBy="pp-lb" width={960} padded={false}>
      {item && (
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", minHeight: 440 }}>
          <div
            style={{
              background: `var(--bg-deep) url('${item.gambar_url}') center/contain no-repeat`,
              aspectRatio: "4/3",
            }}
          />
          <div style={{ padding: 36, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Eyebrow style={{ color: "var(--accent)" }}>
                {kind} · {item.tahun}
              </Eyebrow>
              <button
                onClick={onClose}
                aria-label="Tutup karya"
                style={{
                  background: "none",
                  border: 0,
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <h3
              id="pp-lb"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 24,
                color: "#fff",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              {item.judul}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                lineHeight: 1.85,
                color: "var(--fg-secondary)",
                margin: 0,
              }}
            >
              {item.deskripsi}
            </p>
            <div style={{ marginTop: "auto", paddingTop: 12 }}>
              <PillButton onClick={onClose}>Tutup Karya</PillButton>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
