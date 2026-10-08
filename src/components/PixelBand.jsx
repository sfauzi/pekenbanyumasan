import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import { PIXEL_POSITIONS, PIXEL_SIZE, PIXEL_VIEWBOX } from "../data/content.js";

/**
 * PixelBand — the site's signature pixel motif (`xh` in the origin bundle).
 *
 * A crisp-edged SVG grid of 40px squares anchored to the bottom of its box.
 * Each square blinks on its own staggered delay so the band flickers like a
 * failing LED matrix; reduced-motion users get a static, fully-lit band.
 */
export function PixelBand({ height, bgColor = "transparent", style, fullHeight = false }) {
  const reducedMotion = usePrefersReducedMotion();
  const [viewW, viewH] = PIXEL_VIEWBOX;

  const svgStyle = fullHeight
    ? { width: "100%", height: "100%", display: "block" }
    : { height: height || 200, width: "100%", display: "block" };

  const wrapperStyle = fullHeight
    ? { background: bgColor, lineHeight: 0, position: "absolute", inset: 0, ...(style || {}) }
    : { background: bgColor, lineHeight: 0, ...(style || {}) };

  return (
    <div style={wrapperStyle}>
      <svg
        className="pixel-flicker"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="xMidYMax meet"
        shapeRendering="crispEdges"
        fill="var(--accent)"
        style={svgStyle}
        aria-hidden="true"
      >
        {PIXEL_POSITIONS.map(([x, y], index) => (
          <rect
            key={index}
            x={x}
            y={y}
            width={PIXEL_SIZE}
            height={PIXEL_SIZE}
            style={
              reducedMotion
                ? null
                : {
                    animationDelay: `${
                      index % 2 === 0 ? (index * 389) % 14e3 : (index * 647 + 4200) % 14e3
                    }ms`,
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}
