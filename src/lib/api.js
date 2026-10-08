/**
 * Content API client — a faithful port of the origin's `br()` helper and the
 * four endpoint groups it exposes (company profile, karya, profiles, events,
 * stats).
 *
 * Behavioural note: the origin hard-codes its base URL
 * (`https://company-profile-pb.up.railway.app`) and always attempts the fetch,
 * falling back to bundled copy when it fails. That host is currently offline —
 * every endpoint answers 404 `{"code":404,"message":"Application not found"}` —
 * so the live site always renders its fallbacks.
 *
 * The clone keeps the same shape but:
 *   - reads the base from VITE_API_BASE (unset ⇒ local content only);
 *   - aborts after 4s, so a blocked network can never strand a screen on the
 *     loading spinner the way an un-timed fetch would.
 *
 * Set VITE_API_BASE to a live backend and every screen prefers it, exactly like
 * the origin does.
 */
import { API_BASE } from "../data/content.js";

const TIMEOUT_MS = 4000;

function normaliseBase(value) {
  let base = String(value || "").trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
  return base;
}

const configured = import.meta.env?.VITE_API_BASE;

/** Resolved base URL; an empty string means "serve local content only". */
export const BASE_URL = configured ? normaliseBase(configured) : "";

async function request(path, init = {}) {
  if (!BASE_URL) throw new Error("offline");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json", ...init.headers },
      signal: controller.signal,
      ...init,
    });
    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      throw new Error(payload.message || `HTTP ${res.status}`);
    }
    const json = await res.json();
    return "data" in json ? json.data : json;
  } finally {
    clearTimeout(timer);
  }
}

export const companyProfile = {
  get: (section) =>
    request(`/api/public/company-profile?section=${encodeURIComponent(section)}`),
};

export const karya = {
  list: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/public/karya${query ? `?${query}` : ""}`);
  },
};

export const profiles = {
  bySlug: (slug) => request(`/api/public/profiles/${encodeURIComponent(slug)}`),
};

export const events = {
  list: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/public/events${query ? `?${query}` : ""}`);
  },
  upcoming: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/public/events/upcoming${query ? `?${query}` : ""}`);
  },
};

export const stats = {
  public: () => request("/api/public/stats"),
};

export { API_BASE };
