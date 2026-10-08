import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

/**
 * HeroCarousel — full-bleed crossfade slider (`zh` in the origin bundle).
 *
 * Advances every 6s, pauses while hovered or while the tab is hidden, and stops
 * entirely under prefers-reduced-motion. Dots act as a tablist; slides crossfade
 * over 1200ms on the site's ease-out curve.
 */
export function HeroCarousel({ slides, children }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const timer = useRef(null);

  useEffect(() => {
    if (reducedMotion || paused) return undefined;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6e3);
    return () => clearInterval(timer.current);
  }, [paused, reducedMotion, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div
      style={{ position: "relative", minHeight: 640, overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1200ms cubic-bezier(.22,.61,.36,1)",
          }}
        />
      ))}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(13,13,13,.45) 0%, rgba(13,13,13,.25) 35%, rgba(13,13,13,.85) 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, minHeight: 640 }}>{children}</div>

      <div
        role="tablist"
        aria-label="Pilih slide hero"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 24,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          zIndex: 3,
        }}
      >
        {slides.map((src, i) => (
          <button
            key={src}
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} dari ${slides.length}`}
            onClick={() => setIndex(i)}
            style={{
              width: 12,
              height: 12,
              padding: 0,
              border: 0,
              cursor: "pointer",
              background: i === index ? "var(--accent)" : "rgba(255,255,255,.45)",
              transition: "background 320ms cubic-bezier(.22,.61,.36,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
