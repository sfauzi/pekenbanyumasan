import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

/**
 * RevealToAccent — the scroll-driven scene transition (`Cf` in the origin).
 *
 * A sticky viewport pins the "before" panel while a gradient sheet rises from
 * the bottom edge and floods the screen with the sage accent; the "after" panel
 * then follows in normal flow. Progress is read from the pinned block's scroll
 * offset, throttled through rAF and gated by an IntersectionObserver so nothing
 * runs off-screen. Reduced motion gets a plain gradient instead.
 *
 * `mode="tail"` is used by the gallery, which pins the closing statement and
 * hands off to the documentation panel.
 */
export function RevealToAccent({
  before,
  after,
  mode = "sticky",
  pinHeight = "200vh",
  fromColor = "var(--bg-page)",
  toColor = "var(--accent)",
  pinnedTail,
}) {
  const reducedMotion = usePrefersReducedMotion();
  const pinRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion || typeof window === "undefined" || !pinRef.current) return undefined;

    let frame = 0;
    let visible = false;

    const measure = () => {
      const node = pinRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollable = node.offsetHeight - viewportHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };

    const onScroll = () => {
      if (!visible) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: "100% 0px" },
    );

    observer.observe(pinRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <>
        {before}
        <div
          aria-hidden="true"
          style={{
            height: "60vh",
            background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`,
          }}
        />
        <div style={{ background: toColor }}>{after}</div>
      </>
    );
  }

  const sheet = (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        background: `linear-gradient(to top, ${toColor} 0%, ${toColor} 65%, transparent 100%)`,
        transform: `translateY(${(1 - progress) * 100}%)`,
        willChange: "transform",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );

  if (mode === "tail") {
    return (
      <>
        {before}
        <div ref={pinRef} style={{ position: "relative", height: pinHeight, background: fromColor }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden",
              background: fromColor,
            }}
          >
            {pinnedTail || <div style={{ position: "absolute", inset: 0, background: fromColor }} />}
            {sheet}
          </div>
        </div>
        <div style={{ background: toColor }}>{after}</div>
      </>
    );
  }

  return (
    <>
      <div ref={pinRef} style={{ position: "relative", height: pinHeight, background: fromColor }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: fromColor,
          }}
        >
          <div style={{ position: "absolute", inset: 0, overflow: "auto" }}>{before}</div>
          {sheet}
        </div>
      </div>
      <div style={{ background: toColor }}>{after}</div>
    </>
  );
}
