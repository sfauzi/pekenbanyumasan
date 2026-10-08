import { useCallback, useEffect, useState } from "react";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { LoginModal } from "./components/LoginModal.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Program } from "./pages/Program.jsx";
import { ProgramDetail } from "./pages/ProgramDetail.jsx";
import { Publication } from "./pages/Publication.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { PublicProfile } from "./pages/PublicProfile.jsx";
import { NAV_ITEMS } from "./data/content.js";
import { slugify } from "./lib/utils.js";

/**
 * App — the site shell.
 *
 * Routing mirrors the origin: there is no router. The current screen lives in a
 * `page` string persisted to localStorage, and a public profile is addressed by
 * a `#/@<slug>` hash so the link is shareable. `ProgramDetail` carries its
 * program id in the `page` value (`PROGRAM_DETAIL:<slug>`).
 */

const PAGE_KEY = "peken_page";

function readHashSlug() {
  if (typeof window === "undefined") return null;
  const match = window.location.hash.match(/^#\/@(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function initialPage() {
  if (typeof window === "undefined") return "HOME";
  if (readHashSlug()) return "PUBLIC_PROFILE";
  try {
    const stored = window.localStorage.getItem(PAGE_KEY);
    const known = ["HOME", "ABOUT", "PROGRAM", "PUBLICATION", "GALLERY"];
    const base = stored ? stored.split(":")[0] : "";
    if (known.includes(base)) return stored;
  } catch {
    /* localStorage unavailable (private mode / file://) — fall through */
  }
  return "HOME";
}

export function App() {
  const [page, setPage] = useState(initialPage);
  const [profileSlug, setProfileSlug] = useState(() => readHashSlug());
  const [loginOpen, setLoginOpen] = useState(false);

  /* keep the URL hash in step with the public-profile screen */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (page === "PUBLIC_PROFILE" && profileSlug) {
      const next = `#/@${profileSlug}`;
      if (window.location.hash !== next) window.location.hash = next;
    } else if (window.location.hash.startsWith("#/@")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, [page, profileSlug]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHashChange = () => {
      const slug = readHashSlug();
      if (slug) {
        setProfileSlug(slug);
        setPage("PUBLIC_PROFILE");
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((target, arg) => {
    if (target === "PUBLIC_PROFILE") {
      setProfileSlug(arg ? slugify(arg) : null);
      setPage("PUBLIC_PROFILE");
      return;
    }
    setPage(arg ? `${target}:${arg}` : target);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const onNavigate = useCallback(
    (target, arg) => {
      if (NAV_ITEMS.includes(target)) {
        navigate(target);
        return;
      }
      navigate(target, arg);
    },
    [navigate],
  );

  /* persist the current screen, exactly as the origin does */
  useEffect(() => {
    try {
      window.localStorage.setItem(PAGE_KEY, page);
    } catch {
      /* ignore */
    }
  }, [page]);

  const base = page.split(":")[0];
  const detailId = page.includes(":") ? page.slice(page.indexOf(":") + 1) : null;

  let screen;
  if (base === "ABOUT") screen = <About />;
  else if (base === "PROGRAM") screen = <Program onNavigate={onNavigate} />;
  else if (base === "PROGRAM_DETAIL") {
    screen = <ProgramDetail programId={detailId} onBack={() => navigate("PROGRAM")} />;
  } else if (base === "PUBLICATION") screen = <Publication onNavigate={onNavigate} />;
  else if (base === "GALLERY") screen = <Gallery />;
  else if (base === "PUBLIC_PROFILE") {
    screen = <PublicProfile slug={profileSlug} onNavigate={onNavigate} />;
  } else screen = <Home onNavigate={onNavigate} />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)" }}>
      <Nav
        current={NAV_ITEMS.includes(base) ? base : ""}
        onNavigate={(item) => onNavigate(item)}
        onLogin={() => setLoginOpen(true)}
      />
      {screen}
      <Footer onNavigate={(item) => onNavigate(item)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
