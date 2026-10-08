/**
 * PhotoTile — the site's image primitive (`Si` in the origin bundle).
 *
 * Three modes:
 *  - "static"  plain image, no interaction
 *  - "caption" plain image that reveals a caption bar on hover/focus
 *  - "hover"   grayscale-to-colour reveal: a blurred, saturated copy fades in
 *              through a stepped transition while a 10px pixel grid flashes
 *              over the top, so the photo appears to resolve out of pixels.
 *
 * A content image keeps its intrinsic ratio through the `aspect` prop; the
 * gallery overrides it with `aspectRatio: "auto"` plus a padding-bottom box.
 */
export function PhotoTile({
  src,
  alt = "",
  aspect = "480/260",
  mode = "static",
  corner,
  caption,
  onClick,
  style,
  eager = false,
  ariaLabel,
}) {
  const isHover = mode === "hover";
  const isStatic = mode === "static";
  const className = `photo-tile${isHover ? " photo-tile--hover" : ""}`;

  return (
    <div
      className={className}
      role={onClick ? "button" : undefined}
      aria-label={ariaLabel}
      style={{ aspectRatio: aspect, cursor: onClick ? "pointer" : "default", ...(style || {}) }}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick(event);
        }
      }}
    >
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      {isHover && (
        <>
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading={eager ? "eager" : "lazy"}
            className="photo-tile__color"
          />
          <div aria-hidden="true" className="photo-tile__pixelgrid" />
        </>
      )}
      {corner && !isStatic && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            color: "var(--accent)",
            fontSize: 12,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          {corner}
        </div>
      )}
      {caption && <div className="photo-tile__caption">{caption}</div>}
    </div>
  );
}

/**
 * ColorPin — the map marker that jumps to the "lokasi" section (`wh`).
 *
 * The origin called scrollIntoView(); the clone scrolls the window manually to
 * the same offset, because scrollIntoView fights the embedded preview scroller.
 */
export function ColorPin({ label = "TAMAN SARI · BANYUMAS", targetId = "lokasi" }) {
  const handleClick = (event) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        color: "#fff",
      }}
    >
      <svg width="24" height="32" viewBox="0 0 24 32" aria-hidden="true">
        <path
          d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
          fill="var(--accent)"
        />
        <circle cx="12" cy="12" r="4" fill="var(--bg-deep)" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: ".04em",
          textTransform: "uppercase",
          background: "var(--bg-deep)",
          padding: "4px 8px",
        }}
      >
        {label}
      </span>
    </a>
  );
}
