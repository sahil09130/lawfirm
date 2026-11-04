"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  durationMs?: number;
  // "circle" renders a round navy badge (used in the firm-at-a-glance section).
  variant?: "band" | "circle";
};

// Counts up from 0 to `value` once the element scrolls into view.
// With reduced motion enabled, the final value is shown immediately.
export default function StatCounter({
  value,
  suffix = "",
  label,
  durationMs = 1800,
  variant = "band",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let started = false;

    function animate() {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          animate();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  if (variant === "circle") {
    return (
      <div
        ref={ref}
        className="flex aspect-square w-40 flex-col items-center justify-center rounded-full bg-primary-strong p-4 text-center text-white shadow-[0_24px_40px_-18px_rgba(10,17,30,0.55)] ring-1 ring-accent/40 ring-offset-4 ring-offset-surface sm:w-48 md:w-56"
      >
        <p className="font-heading text-5xl font-bold leading-none md:text-6xl">
          <span className="lining-nums tabular-nums">{display}</span>
          <span className="text-accent-light">{suffix}</span>
        </p>
        <p className="mt-2 max-w-[8rem] text-xs font-medium uppercase leading-snug tracking-[0.14em] text-white/75 md:text-[0.8rem]">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className="px-2 py-8 text-center sm:py-2">
      <p className="font-heading text-6xl leading-none text-white md:text-7xl">
        <span className="lining-nums tabular-nums">{display}</span>
        <span className="text-accent-light">{suffix}</span>
      </p>
      <p className="eyebrow mt-5 text-white/60">{label}</p>
    </div>
  );
}
