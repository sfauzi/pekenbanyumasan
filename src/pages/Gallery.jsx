import { useEffect, useState } from "react";
import { PhotoTile } from "../components/PhotoTile.jsx";
import { RevealToAccent } from "../components/RevealToAccent.jsx";
import { PillButton, Eyebrow, Wordmark, AccentEm, Loading } from "../components/primitives.jsx";
import { GALLERY_DOC, GALLERY_IMAGES } from "../data/content.js";
import { companyProfile } from "../lib/api.js";

/**
 * Gallery — the documentation index (`Gh` in the origin bundle).
 *
 * A mixed-size grid (six square tiles, two wide performance frames, two banners)
 * that ends on a pinned closing statement; the reveal sheet then hands off to
 * the sage documentation panel with the download action.
 */
export function Gallery() {
  const [doc, setDoc] = useState(GALLERY_DOC);
  const [images, setImages] = useState(GALLERY_IMAGES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    companyProfile
      .get("gallery")
      .then((data) => {
        if (data?.doc) setDoc((prev) => ({ ...prev, ...data.doc }));
        if (Array.isArray(data?.images) && data.images.length) setImages(data.images);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  const closing = (
    <section
      style={{
        position: "relative",
        height: "100%",
        background: "var(--bg-deep)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 var(--page-px)",
      }}
    >
      <Eyebrow style={{ color: "var(--accent)" }}>GALLERY · DOKUMENTASI EDISI</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(28px, 5vw, 48px)",
          lineHeight: 1.25,
          color: "#fff",
          margin: "24px auto 0",
          maxWidth: 820,
        }}
      >
        {doc.headline.split("secara terbuka")[0]}
        <AccentEm>secara terbuka</AccentEm>.
      </h2>
    </section>
  );

  const docPanel = (
    <section
      style={{
        padding: "120px var(--page-px)",
        background: "var(--accent)",
        color: "var(--accent-ink)",
      }}
    >
      <div
        className="cp-stack-mobile"
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr 1fr",
          gap: 40,
          alignItems: "flex-start",
        }}
      >
        <Wordmark size={16} color="var(--accent-ink)" />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            lineHeight: 1.8,
            margin: 0,
            color: "var(--accent-ink)",
            whiteSpace: "pre-line",
          }}
        >
          {doc.body}
        </p>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            {doc.ukuran}
          </div>
          {doc.download_url ? (
            <PillButton inverse onClick={() => window.open(doc.download_url, "_blank", "noopener,noreferrer")}>
              Unduh Paket Dokumentasi
            </PillButton>
          ) : (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".04em",
                borderBottom: "1px solid rgba(13,13,13,.35)",
                paddingBottom: 4,
              }}
            >
              Paket dokumentasi segera hadir
            </span>
          )}
        </div>
      </div>
    </section>
  );

  const grid = (
    <section style={{ padding: "100px var(--page-px) 0" }}>
      <div style={{ marginBottom: 60 }}>
        <Eyebrow style={{ color: "var(--accent)", marginBottom: 16 }}>
          GALLERY · DOKUMENTASI EDISI
        </Eyebrow>
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
          Arsip visual Peken — dari mrapat pertama hingga edisi terakhir.
        </h1>
      </div>

      <div
        className="cp-gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          paddingBottom: 100,
        }}
      >
        {images.map((image, index) => {
          const isBanner = image.filename.startsWith("banner");
          const isWide = image.filename.startsWith("gallery-perform");
          return (
            <PhotoTile
              key={image.filename}
              src={`./assets/${image.filename}.jpg`}
              alt={`${image.label} — dokumentasi Peken Banyumasan ${image.year}`}
              aspect={isBanner ? "16/9" : "1/1"}
              mode="caption"
              eager={index < 3}
              style={isBanner || isWide ? { gridColumn: "span 3" } : undefined}
              caption={
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#fff",
                    }}
                  >
                    {image.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: ".06em",
                    }}
                  >
                    {image.year}
                  </div>
                </div>
              }
            />
          );
        })}
      </div>
    </section>
  );

  return (
    <main style={{ background: "var(--bg-page)", color: "#fff" }}>
      <RevealToAccent
        before={grid}
        after={docPanel}
        mode="tail"
        pinHeight="180vh"
        fromColor="var(--bg-page)"
        toColor="var(--accent)"
        pinnedTail={closing}
      />
    </main>
  );
}
