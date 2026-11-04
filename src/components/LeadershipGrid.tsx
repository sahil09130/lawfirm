"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Leader } from "@/content/types";

export default function LeadershipGrid({ leaders }: { leaders: Leader[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const active = leaders.find((leader) => leader.id === activeId) ?? null;

  function openBio(leader: Leader, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveId(leader.id);
  }

  function closeBio() {
    setActiveId(null);
    // Return focus to the button that opened the modal.
    triggerRef.current?.focus();
  }

  return (
    <>
      <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <li key={leader.id}>
            <article className="group flex h-full flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <Image
                  src={leader.photo.src}
                  alt={leader.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-4 border border-white/40" />
              </div>
              <div className="flex flex-1 flex-col pt-7">
                <p className="eyebrow text-accent">{leader.title}</p>
                <h3 className="mt-3 text-3xl">{leader.name}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{leader.shortBio}</p>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(event) => openBio(leader, event.currentTarget)}
                  className="mt-6 inline-flex min-h-11 items-center gap-3 self-start rounded-card text-[0.72rem] font-medium uppercase tracking-[0.22em] text-primary hover:text-accent"
                >
                  <span className="link-draw">Read biography</span>
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="sr-only"> for {leader.name}</span>
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {active && <BioModal leader={active} onClose={closeBio} />}
    </>
  );
}

function BioModal({ leader, onClose }: { leader: Leader; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `bio-title-${leader.id}`;

  // Lock page scroll and move focus into the dialog when it opens.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    // Trap focus inside the dialog: wrap Tab and Shift+Tab at the edges.
    if (event.key === "Tab" && dialogRef.current) {
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !dialogRef.current.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !dialogRef.current.contains(current))) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-primary-strong/90 px-gutter py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        // Clicking the backdrop (not the dialog) closes it.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleKeyDown}
        className="relative grid max-h-full w-full max-w-4xl overflow-y-auto bg-background shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] md:grid-cols-[2fr_3fr]"
      >
        <div className="relative hidden min-h-full bg-surface md:block">
          <Image
            src={leader.photo.src}
            alt={leader.photo.alt}
            fill
            sizes="(min-width: 768px) 35vw, 0px"
            className="object-cover grayscale"
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-accent">{leader.title}</p>
              <h2 id={titleId} className="mt-3 text-4xl">
                {leader.name}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-card border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" />
              </svg>
              <span className="sr-only">Close biography</span>
            </button>
          </div>

          <div aria-hidden="true" className="mt-8 h-px w-16 bg-accent" />

          <div className="mt-8 space-y-5 leading-relaxed text-ink">
            {leader.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted">
            Press <kbd className="border border-border px-1.5 py-0.5 font-sans text-[0.7rem]">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
