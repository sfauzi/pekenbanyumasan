/**
 * Shared helpers — ported 1:1 from the origin bundle.
 */
import { DAY_NAMES, MONTH_NAMES, PROFILES, STATIC_EVENTS } from "../data/content.js";

/** Slugify a name the way the origin does (NFD, strip diacritics, hyphenate). */
export function slugify(value) {
  if (!value) return "";
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Long-form Indonesian date, e.g. "10 April 2025". */
export function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Relative day label used by the profile story feed. */
export function relativeDay(value) {
  if (!value) return "";
  const days = Math.floor((Date.now() - new Date(value)) / 864e5);
  if (days === 0) return "Hari ini";
  if (days === 1) return "Kemarin";
  if (days < 7) return `${days} hari lalu`;
  return formatDate(value);
}

/** Resolve a stored event status into one of the display states. */
export function eventStatus(ev) {
  return ev.status === "published" && new Date(ev.tanggal) > new Date() ? "upcoming" : ev.status;
}

/** Derive the hero/agenda copy for an event. */
export function describeEvent(ev) {
  if (!ev) return null;
  const d = new Date(ev.tanggal);
  const day = String(d.getDate()).padStart(2, "0");
  const weekday = DAY_NAMES[d.getDay()];
  const month = MONTH_NAMES[d.getMonth()];
  const year = d.getFullYear();
  const window =
    ev.jam_mulai && ev.jam_selesai
      ? ` · ${ev.jam_mulai.slice(0, 5).replace(":", ".")}–${ev.jam_selesai
          .slice(0, 5)
          .replace(":", ".")} WIB`
      : "";
  return {
    agenda_date: day,
    agenda_nama: ev.nama || "",
    agenda_label: `${weekday} · ${month} ${year}${window}`,
    agenda_lokasi: ev.lokasi || "",
    agenda_deskripsi:
      ev.deskripsi ||
      [ev.nama ? `${ev.nama} akan segera digelar` : null, ev.lokasi ? `di ${ev.lokasi}` : null]
        .filter(Boolean)
        .join(" ") +
        (ev.nama || ev.lokasi ? ". Sampai jumpa di lokasi!" : ""),
  };
}

/** Upcoming published events, soonest first. */
export function upcomingEvents(limit = 1) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return STATIC_EVENTS.filter(
    (ev) => ev.status === "published" && new Date(ev.tanggal) >= today,
  )
    .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    .slice(0, limit);
}

/** Which taxonomy a profile/work exposes (artisan → kategori_usaha). */
export function taxonomy(item) {
  const isArtisan = item?.role === "artisan" || item?.owner_type === "artisan";
  const raw = isArtisan
    ? item?.kategori_usaha ?? item?.subsektor
    : item?.subsektor ?? item?.kategori_usaha;
  const values = Array.isArray(raw) ? raw : raw ? [raw] : [];
  return {
    key: isArtisan ? "kategori_usaha" : "subsektor",
    label: isArtisan ? "Kategori Usaha" : "Subsektor",
    values,
  };
}

/** Look up a profile by slug, synthesising a stub when the slug is unknown. */
export function findProfile(nameOrSlug) {
  if (!nameOrSlug) return null;
  const slug = slugify(nameOrSlug);
  return (
    PROFILES.find((p) => p.slug === slug) || {
      id: slug,
      slug,
      nama: nameOrSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
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
}

/** Compact number formatting for the stats band (86, 1.2k, 3.4jt). */
export function compactNumber(value) {
  if (value >= 1e6) return `${(value / 1e6).toFixed(1).replace(/\.0$/, "")}jt`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(1).replace(/\.0$/, "")}k`;
  return String(value);
}
