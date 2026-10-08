import { useEffect, useRef } from "react";

/**
 * Modal — accessible dialog ported from the origin's `Ss`.
 *
 * Locks body scroll, closes on Escape and on backdrop click, traps Tab focus
 * inside the dialog and restores focus to the trigger on close.
 */
export function Modal({ open, onClose, labelledBy, children, width = 720, padded = true }) {
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previousFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"]), input, select, textarea',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = setTimeout(() => {
      const target =
        dialogRef.current &&
        dialogRef.current.querySelector(
          'a[href], button, input, [tabindex]:not([tabindex="-1"])',
        );
      if (target) target.focus();
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      if (previousFocus.current && previousFocus.current.focus) previousFocus.current.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="peken-modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--accent)",
          width: `min(${width}px, calc(100vw - 48px))`,
          maxHeight: "calc(100vh - 48px)",
          overflowY: "auto",
          padding: padded ? 48 : 0,
          color: "#fff",
        }}
      >
        {children}
      </div>
    </div>
  );
}
