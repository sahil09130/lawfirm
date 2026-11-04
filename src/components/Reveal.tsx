"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  // Direction the content slides in from.
  from?: "up" | "left" | "right";
  // Extra delay in milliseconds.
  delay?: number;
};

// Slides its content into view when it scrolls onto the screen.
// - Content is visible in the server HTML and until hydration, so nothing is lost without JavaScript.
// - Only blocks that start below the visible area are hidden and animated, so the first screen never flickers.
// - Visitors with reduced motion enabled see everything immediately.
// The animation itself lives in globals.css ([data-reveal]).
export default function Reveal({ children, className, from = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    // Whether the block starts below the fold is only known in the browser.
    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={state}
      data-from={from}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
