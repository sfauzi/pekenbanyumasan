import { Modal } from "./Modal.jsx";
import { Eyebrow, PillButton } from "./primitives.jsx";
import { LOGIN_TARGETS } from "../data/content.js";

/** RoleCard — one selectable login role inside the login modal (`Ld`). */
function RoleCard({ role, tagline, body, onClick }) {
  return (
    <div
      style={{
        background: "var(--bg-page)",
        border: "1px solid rgba(195,202,150,.25)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: 280,
      }}
    >
      <img src="./assets/logo-peken-banyumasan.png" alt="" style={{ width: 32, height: 32 }} />
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 20,
            color: "#fff",
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--accent)",
            marginTop: 4,
          }}
        >
          {tagline}
        </div>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          lineHeight: 1.7,
          color: "var(--fg-secondary)",
          margin: 0,
        }}
      >
        {body}
      </p>
      <div style={{ marginTop: "auto", paddingTop: 16 }}>
        <PillButton onClick={onClick}>Masuk sebagai {role}</PillButton>
      </div>
    </div>
  );
}

/**
 * LoginModal — role picker that hands off to the two companion apps (`$o`).
 *
 * Selecting a role navigates to that app's /login on its own origin, exactly as
 * the origin does.
 */
export function LoginModal({ open, onClose }) {
  const openRole = (key) => () => {
    const target = LOGIN_TARGETS[key];
    const url = target?.url;
    if (!url) {
      console.warn(
        `[LoginModal] ${target?.envVar ?? "env var"} is not set; cannot navigate to ${key} login.`,
      );
      return;
    }
    window.location.href = `${url.replace(/\/+$/, "")}/login`;
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} labelledBy="login-modal-title" width={760}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
          }}
        >
          <div>
            <Eyebrow style={{ color: "var(--accent)" }}>MASUK · PILIH PERAN</Eyebrow>
            <h2
              id="login-modal-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.25,
                color: "#fff",
                margin: "16px 0 0",
                maxWidth: "32ch",
              }}
            >
              Pilih peranmu untuk melanjutkan.
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            style={{
              background: "transparent",
              border: 0,
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
              padding: 4,
              fontFamily: "var(--font-display)",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 16,
          }}
        >
          <RoleCard
            role="Kolaborator"
            tagline="Profesional kreatif & institusi terkurasi"
            body="Untuk fotografer, jurnalis, kurator, brand, dan lembaga yang ingin berkontribusi karya editorial atau program kolaboratif ke ekosistem Peken."
            onClick={openRole("kolaborator")}
          />
          <RoleCard
            role="Artisan"
            tagline="Perajin & pelaku usaha lokal Peken"
            body="Untuk perajin dan pelaku usaha lokal yang ingin memajang produk dan profil usaha sebagai bagian dari katalog karya Peken."
            onClick={openRole("artisan")}
          />
        </div>
      </div>
    </Modal>
  );
}
