import { useEffect, useState } from "react";
import { PhotoTile } from "../components/PhotoTile.jsx";
import { WorkLightbox } from "../components/Lightboxes.jsx";
import { Eyebrow, Loading } from "../components/primitives.jsx";
import { WORKS } from "../data/content.js";
import { companyProfile, karya as karyaApi } from "../lib/api.js";

/** Publication — catalogue of collaborator + artisan works (`Dd`). */
export function Publication({ onNavigate }) {
  const [selected, setSelected] = useState(null);
  const [works, setWorks] = useState(WORKS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([companyProfile.get("works"), karyaApi.list({ limit: 100 })])
      .then(([local, remote]) => {
        const fromContent =
          local.status === "fulfilled" && Array.isArray(local.value)
            ? local.value
                .filter((item) => item.visible !== false)
                .map((item) => ({ ...item, has_profile: false }))
            : [];

        const fromApi =
          remote.status === "fulfilled" && Array.isArray(remote.value)
            ? remote.value.map((item) => ({
                id: item.id,
                judul: item.judul,
                gambar_url: item.gambar_url,
                owner: item.owner,
                owner_id: item.owner_slug || item.owner_id,
                kategori_display: item.subsektor,
                tahun: item.tahun,
                deskripsi: item.deskripsi,
                has_profile: true,
              }))
            : [];

        const merged = [...fromApi, ...fromContent];
        if (merged.length) setWorks(merged);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const openProfile = (slug) => {
    if (onNavigate) onNavigate("PUBLIC_PROFILE", slug);
  };

  if (loading) return <Loading />;

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      <section style={{ padding: "100px var(--page-px) 40px" }}>
        <Eyebrow style={{ color: "var(--accent)" }}>
          PUBLICATION · KATALOG KOLABORATOR &amp; ARTISAN
        </Eyebrow>
        <div
          className="cp-stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 40,
            alignItems: "flex-end",
            marginTop: 24,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(30px, 6vw, 56px)",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 900,
            }}
          >
            Karya kolaborator dan artisan yang pernah berproses di Peken.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.9,
              color: "var(--fg-secondary)",
              margin: 0,
            }}
          >
            Klik pada karya untuk melihat detail — foto besar, deskripsi karya, dan tautan ke profil
            kreatornya.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px clamp(16px, 4vw, 60px) 120px" }}>
        <div
          className="cp-stack-mobile"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {works.map((work) => (
            <PhotoTile
              key={work.id}
              src={work.gambar_url}
              alt={`${work.judul} oleh ${work.owner}`}
              aspect="4/5"
              mode="caption"
              onClick={() => setSelected(work)}
              ariaLabel={`Buka detail karya ${work.judul} oleh ${work.owner}`}
              caption={
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {work.kategori_display}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: 16,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    {work.owner}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      color: "var(--fg-secondary)",
                    }}
                  >
                    {work.judul}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </section>

      <WorkLightbox work={selected} onClose={() => setSelected(null)} onViewProfile={openProfile} />
    </main>
  );
}
