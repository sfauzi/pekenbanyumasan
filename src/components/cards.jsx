import { useState } from "react";
import { PhotoTile } from "./PhotoTile.jsx";
import { Eyebrow } from "./primitives.jsx";
import { BadgeCheckIcon, CalendarIcon, MapPinIcon, Share2Icon } from "../lib/icons.jsx";
import { EVENT_STATUS_COLORS, EVENT_STATUS_LABELS } from "../data/content.js";
import { eventStatus, formatDate, relativeDay, taxonomy } from "../lib/utils.js";

/** Avatar — circular initial badge, falls back to the accent disc (`mg`). */
export function Avatar({ foto_url, nama, size = 86 }) {
  const initial = (nama || "?").charAt(0).toUpperCase();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        background: foto_url ? `url('${foto_url}') center/cover` : "var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!foto_url && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: size * 0.38,
            color: "var(--accent-ink)",
          }}
        >
          {initial}
        </span>
      )}
    </div>
  );
}

/** VerifiedBadge — the small "Terverifikasi" chip on an active profile. */
export function VerifiedBadge() {
  return (
    <span
      style={{
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
      }}
    >
      <BadgeCheckIcon size={9} /> Terverifikasi
    </span>
  );
}

/** RoleBadge — the accent chip carrying a profile's role. */
export function RoleBadge({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 9,
        fontWeight: 500,
        background: "var(--accent)",
        color: "var(--accent-ink)",
        padding: "3px 9px",
        textTransform: "uppercase",
        letterSpacing: ".07em",
      }}
    >
      {children}
    </span>
  );
}

/** WorkCard — catalogue tile with caption (`gg`). */
export function WorkCard({ item, onClick }) {
  return (
    <PhotoTile
      src={item.gambar_url}
      alt={item.judul}
      aspect="4/5"
      mode="caption"
      onClick={() => onClick(item)}
      ariaLabel={`Buka detail ${item.judul}`}
      caption={
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: ".06em",
              marginBottom: 6,
            }}
          >
            {taxonomy(item).values.join(", ")}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 15,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            {item.judul}
          </div>
          <div
            style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--fg-secondary)" }}
          >
            {item.tahun}
          </div>
        </div>
      }
    />
  );
}

/** StoryCard — a quoted update from a profile (`yg`). */
export function StoryCard({ story }) {
  return (
    <article
      style={{
        borderLeft: "2px solid var(--accent)",
        paddingLeft: 24,
        paddingBlock: 4,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {story.media_url && (
        <img
          src={story.media_url}
          alt=""
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
        />
      )}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          lineHeight: 1.85,
          color: "var(--fg-secondary)",
          margin: 0,
        }}
      >
        {story.konten}
      </p>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "var(--fg-muted)",
          textTransform: "uppercase",
          letterSpacing: ".06em",
        }}
      >
        {relativeDay(story.created_at)}
      </span>
    </article>
  );
}

/** EventCard — status-flagged event entry (`xg`). */
export function EventCard({ ev }) {
  const status = eventStatus(ev);
  const color = EVENT_STATUS_COLORS[status] || "var(--fg-muted)";
  return (
    <div
      style={{
        borderLeft: `2px solid ${color}`,
        paddingLeft: 24,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <Eyebrow style={{ color }}>{EVENT_STATUS_LABELS[status] || status}</Eyebrow>
        {ev.peran && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              color: "var(--fg-muted)",
              border: "1px solid rgba(255,255,255,.1)",
              padding: "1px 7px",
              textTransform: "uppercase",
              letterSpacing: ".06em",
            }}
          >
            {ev.peran}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: 16,
          color: "#fff",
          lineHeight: 1.3,
        }}
      >
        {ev.nama}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {ev.tanggal && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--fg-secondary)",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <CalendarIcon size={11} /> {formatDate(ev.tanggal)}
          </span>
        )}
        {ev.lokasi && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--fg-secondary)",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MapPinIcon size={11} /> {ev.lokasi}
          </span>
        )}
      </div>
      {ev.deskripsi && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            margin: 0,
          }}
        >
          {ev.deskripsi}
        </p>
      )}
    </div>
  );
}

/** EmptyState — quiet placeholder for an empty profile tab (`Yo`). */
export function EmptyState({ label }) {
  return (
    <div style={{ textAlign: "center", padding: "80px 0" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(30px, 6vw, 56px)",
          color: "rgba(195,202,150,.08)",
          marginBottom: 16,
        }}
      >
        —
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-muted)",
          textTransform: "uppercase",
          letterSpacing: ".07em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/** ShareButton — Web Share API with a clipboard fallback. */
export function ShareButton({ title }) {
  const [copied, setCopied] = useState(false);
  const share = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title, url });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };
  return (
    <button
      onClick={share}
      style={{
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
      }}
    >
      <Share2Icon size={12} /> {copied ? "Tersalin" : "Bagikan"}
    </button>
  );
}
