"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "entry-notice-acknowledged";

// How long the visitor's "Proceed" is remembered:
//  - "never":   the disclaimer appears on every full page load (every refresh and new visit).
//  - "session": it appears once per browser tab or window session.
//  - "forever": it appears once per browser, until site data is cleared.
// Clicking links inside the site never brings it back, because the layout stays mounted.
export type RememberMode = "never" | "session" | "forever";

type Props = {
  title: string;
  intro: string;
  points: string[];
  closing?: string;
  buttonLabel: string;
  remember?: RememberMode;
};

// Disclaimer shown before the site. It cannot be dismissed with Escape: the visitor must click
// the button. In "never" mode it is part of the server-rendered page, so the site is never
// visible before it. In the storage modes it renders nothing until after hydration, because the
// stored acknowledgment can only be read in the browser; reading it in an effect avoids a
// hydration mismatch.
export default function EntryNotice({
  title,
  intro,
  points,
  closing,
  buttonLabel,
  remember = "never",
}: Props) {
  const [open, setOpen] = useState(remember === "never");
  const dialogRef = useRef<HTMLDivElement>(null);
  const proceedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (remember === "never") return;
    let acknowledged = false;
    try {
      const store = remember === "session" ? window.sessionStorage : window.localStorage;
      acknowledged = store.getItem(STORAGE_KEY) === "true";
    } catch {
      // Storage may be blocked (private mode, disabled cookies). Show the notice.
    }
    // Intentional: storage is only readable on the client, so the open state is set here
    // after hydration. This is the hydration-safe pattern for a stored acknowledgment.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!acknowledged) setOpen(true);
  }, [remember]);

  useEffect(() => {
    if (!open) return;
    proceedRef.current?.focus({ preventScroll: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  function proceed() {
    if (remember !== "never") {
      try {
        const store = remember === "session" ? window.sessionStorage : window.localStorage;
        store.setItem(STORAGE_KEY, "true");
      } catch {
        // Ignore: the notice will simply reappear on the next visit.
      }
    }
    setOpen(false);
  }

  // Trap focus between the scrollable terms and the button.
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const current = document.activeElement;
    const inside = dialogRef.current.contains(current);

    if (event.shiftKey && (current === first || !inside)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (current === last || !inside)) {
      event.preventDefault();
      first.focus();
    }
  }

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-strong/90 px-gutter py-5 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="entry-notice-title"
        aria-describedby="entry-notice-intro"
        onKeyDown={handleKeyDown}
        className="max-h-full w-full max-w-3xl overflow-y-auto bg-background shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="relative p-7 md:p-12">
          {/* Inner frame */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-border" />

          <div className="relative">
            <div className="text-center">
              <p className="eyebrow flex items-center justify-center gap-4 text-accent">
                <span aria-hidden="true" className="h-px w-10 bg-current" />
                Before you enter
                <span aria-hidden="true" className="h-px w-10 bg-current" />
              </p>
              <h2 id="entry-notice-title" className="mt-5 text-4xl md:text-5xl">
                {title}
              </h2>
              <div aria-hidden="true" className="mx-auto mt-6 h-px w-16 bg-accent" />
            </div>

            <p id="entry-notice-intro" className="mt-8 leading-relaxed text-ink">
              {intro}
            </p>

            {/* Scrollable terms. Focusable so keyboard users can scroll with the arrow keys. */}
            <div
              role="region"
              aria-label="Disclaimer terms"
              tabIndex={0}
              className="scroll-shadows mt-6 max-h-[36vh] overflow-y-auto border border-border p-5 md:max-h-[44vh] md:p-7"
            >
              <ol className="divide-y divide-border">
                {points.map((point, i) => (
                  <li key={point} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                    <span aria-hidden="true" className="font-heading text-lg font-bold leading-snug text-accent">
                      {pad(i)}
                    </span>
                    <span className="leading-relaxed text-ink">{point}</span>
                  </li>
                ))}
              </ol>
            </div>

            {closing && <p className="mt-6 text-center text-sm text-muted">{closing}</p>}

            <div className="mt-8 flex justify-center">
              <button ref={proceedRef} type="button" onClick={proceed} className="btn-primary">
                {buttonLabel}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
