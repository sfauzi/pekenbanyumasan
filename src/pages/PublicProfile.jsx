import { useEffect, useMemo, useState } from "react";
import { ProfileLightbox } from "../components/Lightboxes.jsx";
import {
  Avatar,
  EmptyState,
  EventCard,
  RoleBadge,
  ShareButton,
  StoryCard,
  VerifiedBadge,
  WorkCard,
} from "../components/cards.jsx";
import { PillButton, Eyebrow, Loading } from "../components/primitives.jsx";
import { profiles as profilesApi } from "../lib/api.js";
import { findProfile, formatDate, taxonomy } from "../lib/utils.js";

const TABS = [
  { id: "karya", label: "Karya" },
  { id: "story", label: "Story" },
  { id: "event", label: "Event" },
];

/** CountLine — one of the three numeral + caption pairs under the profile bio. */
function CountLine({ n, label }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: 32,
          lineHeight: 1,
          color: "var(--accent)",
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "var(--fg-secondary)",
          marginTop: 6,
          textTransform: "uppercase",
          letterSpacing: ".06em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/**
 * PublicProfile — a collaborator/artisan page addressed by `#/@<slug>` (`wg`).
 *
 * Header plate (avatar, name, role + verification chips, taxonomy, bio, three
 * counters, share), then a tab strip over the three content lists. Unknown
 * slugs still render — `findProfile` synthesises a stub — matching the origin.
 */
export function PublicProfile({ slug, onNavigate }) {
  const [profile, setProfile] = useState(() => findProfile(slug));
  const [tab, setTab] = useState("karya");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    profilesApi
      .bySlug(slug)
      .then((data) => {
        if (data) setProfile(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  const current = profile || findProfile(slug);
  const tax = useMemo(() => taxonomy(current), [current]);

  if (loading) return <Loading />;

  const works = current.karya || [];
  const stories = current.story || [];
  const events = current.events || [];

  const counts = {
    karya: current.total_karya ?? works.length,
    story: current.total_story ?? stories.length,
    event: current.total_event ?? events.length,
  };

  const listFor = {
    karya: works.length ? (
      <div
        className="cp-stack-mobile"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
      >
        {works.map((item) => (
          <WorkCard key={item.id} item={item} onClick={setSelected} />
        ))}
      </div>
    ) : (
      <EmptyState label="Belum ada karya yang dipublikasikan" />
    ),
    story: stories.length ? (
      <div
        className="cp-stack-mobile"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}
      >
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    ) : (
      <EmptyState label="Belum ada story" />
    ),
    event: events.length ? (
      <div
        className="cp-stack-mobile"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}
      >
        {events.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    ) : (
      <EmptyState label="Belum ada event" />
    ),
  };

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      {/* header plate */}
      <section
        style={{
          background: "var(--bg-elevated)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          padding: "80px var(--page-px) 60px",
        }}
      >
        <button
          onClick={() => onNavigate && onNavigate("PUBLICATION")}
          style={{
            background: "transparent",
            border: 0,
            padding: 0,
            color: "var(--fg-secondary)",
            fontFamily: "var(--font-display)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: ".06em",
            cursor: "pointer",
            marginBottom: 40,
          }}
        >
          ← Kembali ke Publication
        </button>

        <div
          className="cp-stack-mobile"
          style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}
        >
          <Avatar foto_url={current.foto_url} nama={current.nama} size={120} />

          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 16,
              }}
            >
              <RoleBadge>{current.role}</RoleBadge>
              {current.status === "aktif" && <VerifiedBadge />}
              {current.status === "pending" && (
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 9,
                    fontWeight: 500,
                    background: "rgba(255,255,255,.07)",
                    color: "var(--fg-muted)",
                    padding: "3px 8px",
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                  }}
                >
                  Menunggu Verifikasi
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(28px, 5vw, 44px)",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {current.nama}
            </h1>

            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--fg-secondary)",
                marginTop: 10,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <span>{current.kota}</span>
              <span aria-hidden="true">·</span>
              <span>
                {tax.label}: {tax.values.join(", ") || "—"}
              </span>
              <span aria-hidden="true">·</span>
              <span>Bergabung {formatDate(current.tanggal_daftar)}</span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--fg-secondary)",
                margin: "28px 0 0",
                maxWidth: "62ch",
              }}
            >
              {current.bio}
            </p>

            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <ShareButton title={current.nama} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              paddingTop: 8,
              flexWrap: "wrap",
            }}
          >
            <CountLine n={counts.karya} label="Karya" />
            <CountLine n={counts.story} label="Story" />
            <CountLine n={counts.event} label="Event" />
          </div>
        </div>
      </section>

      {/* tabs */}
      <section style={{ padding: "60px var(--page-px) 120px" }}>
        <div
          role="tablist"
          aria-label="Konten profil"
          style={{
            display: "flex",
            gap: 32,
            borderBottom: "1px solid rgba(255,255,255,.1)",
            marginBottom: 48,
          }}
        >
          {TABS.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                style={{
                  background: "transparent",
                  border: 0,
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                  padding: "0 0 14px",
                  marginBottom: -1,
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                  color: active ? "#fff" : "var(--fg-muted)",
                }}
              >
                {item.label}
                <span style={{ marginLeft: 8, color: "var(--accent)" }}>
                  {String(counts[item.id]).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {listFor[tab]}

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.08)" }}>
          <Eyebrow style={{ color: "var(--fg-muted)", marginBottom: 16 }}>
            PROFIL PUBLIK · PEKEN BANYUMASAN
          </Eyebrow>
          <PillButton onClick={() => onNavigate && onNavigate("PUBLICATION")}>
            Lihat Semua Publication
          </PillButton>
        </div>
      </section>

      <ProfileLightbox item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
