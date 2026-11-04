"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Landmark } from "@/components/Landmarks";
import type { PlaceCard } from "@/content/types";

// How long the carousel rests on the first card (the headquarters) before it starts scrolling.
const START_DELAY_MS = 2000;

// Continuously scrolling carousel of arch-shaped cards. It rests on the first card for
// 2 seconds after scrolling into view, then starts moving. The list is duplicated so the loop
// is seamless; the duplicate is hidden from assistive tech. A Pause button lets keyboard and
// touch users stop the motion, and it also pauses on hover. With reduced motion, the cards
// are shown as a static, horizontally scrollable row instead.
export default function StateMarquee({
  label,
  items,
  headquartersLabel,
}: {
  label: string;
  items: PlaceCard[];
  // Tags the first card as the headquarters. Leave empty for no tag.
  headquartersLabel?: string;
}) {
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Start the delay only once the carousel is on screen, so visitors see the rest on Delhi first.
  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timer = setTimeout(() => setStarted(true), START_DELAY_MS);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={rootRef} role="group" aria-label={label}>
      {/* Control row: hairline with the pause button at the right edge */}
      <div className="mx-auto flex max-w-site items-center gap-6 px-gutter">
        <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/20 to-white/5" />
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-card text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-accent-light motion-reduce:hidden"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
              {paused ? (
                <path d="M4 2.5v11l9-5.5z" />
              ) : (
                <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
              )}
            </svg>
          </span>
          <span className="hidden sm:inline">{paused ? "Play" : "Pause"}</span>
          <span className="sr-only">scrolling list of places</span>
        </button>
      </div>

      {/* Edge fades so cards glide in and out of view; padding leaves room for the hover lift */}
      <div className="mt-8 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        <div
          className={`ml-[max(var(--space-gutter),calc((100%-var(--site-max-width))/2+var(--space-gutter)))] flex w-max hover:[animation-play-state:paused] motion-reduce:ml-0 motion-reduce:w-full ${
            started ? "motion-safe:animate-marquee" : ""
          }`}
          style={{
            animationDuration: `${items.length * 7}s`,
            animationPlayState: paused ? "paused" : undefined,
          }}
        >
          {[false, true].map((isCopy) => (
            <ul
              key={String(isCopy)}
              aria-hidden={isCopy || undefined}
              className={`flex shrink-0 ${isCopy ? "motion-reduce:hidden" : ""}`}
            >
              {items.map((item, i) => {
                const isHq = i === 0 && Boolean(headquartersLabel);
                return (
                  <li key={`${isCopy ? "b" : "a"}-${item.name}`} className="mr-5 shrink-0 md:mr-7">
                    <article
                      className={`group relative flex h-[23rem] w-60 flex-col justify-end overflow-hidden rounded-t-full border px-6 pb-8 text-center transition-all duration-500 hover:-translate-y-2 md:h-[27rem] md:w-72 md:px-8 md:pb-10 ${
                        isHq
                          ? "border-accent-light/60 bg-gradient-to-b from-accent-light/20 via-accent-light/[0.06] to-transparent hover:shadow-[0_40px_70px_-35px_rgba(200,165,106,0.55)]"
                          : "border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent hover:border-accent-light/60 hover:shadow-[0_40px_70px_-35px_rgba(200,165,106,0.4)]"
                      }`}
                    >
                      {/* Real photo, when one is provided */}
                      {item.image && (
                        <>
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            fill
                            sizes="(min-width: 768px) 288px, 240px"
                            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-primary-strong via-primary-strong/55 to-transparent"
                          />
                        </>
                      )}

                      {/* Inner arch outline */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-2 rounded-t-full border border-white/10 transition-colors duration-500 group-hover:border-accent-light/30"
                      />

                      {/* Glow that rises on hover */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(18rem_14rem_at_50%_100%,rgb(200_165_106/0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />

                      {/* Landmark illustration, set inside the crown of the arch */}
                      {!item.image && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 top-12 flex justify-center md:top-10"
                        >
                          <Landmark
                            name={item.landmark}
                            className={`h-32 w-44 transition duration-500 md:h-44 md:w-60 ${
                              isHq
                                ? "text-accent-light drop-shadow-[0_0_20px_rgba(200,165,106,0.35)]"
                                : "text-accent-light/80 group-hover:text-accent-light group-hover:drop-shadow-[0_0_22px_rgba(200,165,106,0.45)]"
                            }`}
                          />
                        </span>
                      )}

                      {/* Text */}
                      <div className="relative">
                        {isHq && (
                          <p className="mb-4 inline-block border border-accent-light/50 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-accent-light">
                            {headquartersLabel}
                          </p>
                        )}
                        <h3 className="font-heading text-[1.65rem] font-bold leading-[1.1] text-white md:text-3xl">
                          {item.name}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mx-auto mt-6 block h-px w-10 bg-accent-light transition-all duration-500 group-hover:w-24"
                        />
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
