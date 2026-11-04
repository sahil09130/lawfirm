"use client";

import { useEffect, useRef } from "react";

// Thin gold line along the bottom of the hero that fills as the visitor scrolls past it.
// It updates a CSS transform directly (no state) so scrolling stays smooth.
export default function HeroScrollLine() {
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function update() {
      const line = lineRef.current;
      if (!line) return;
      const progress = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 0), 1);
      line.style.transform = `scaleX(${progress})`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 block h-px bg-white/10">
      <span ref={lineRef} className="block h-full origin-left scale-x-0 bg-accent-light" />
    </span>
  );
}
