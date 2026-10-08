/**
 * Icons — the four Lucide glyphs the site uses, inlined with the exact path
 * data from the origin bundle so the stroke geometry matches byte for byte.
 * Wrapped in the same 24×24 / stroke-2 / round-cap frame Lucide applies.
 */
const FRAME = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Icon({ size = 24, strokeWidth = 2, color = "currentColor", children, ...rest }) {
  return (
    <svg
      {...FRAME}
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      className="lucide"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function CalendarIcon({ size = 24, ...rest }) {
  return (
    <Icon size={size} {...rest}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </Icon>
  );
}

export function BadgeCheckIcon({ size = 24, ...rest }) {
  return (
    <Icon size={size} {...rest}>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </Icon>
  );
}

export function MapPinIcon({ size = 24, ...rest }) {
  return (
    <Icon size={size} {...rest}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function Share2Icon({ size = 24, ...rest }) {
  return (
    <Icon size={size} {...rest}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </Icon>
  );
}
