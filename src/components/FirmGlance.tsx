import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { home } from "@/content/home";

// Original line-art scales of justice, used as a faint watermark.
function ScalesWatermark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden="true" className={className}>
      <path d="M100 18v192M70 210h60M82 222h36M100 18a6 6 0 1 0 0-.01M30 52h140" />
      <path d="M30 52l-22 70h44zM170 52l-22 70h44z" />
      <path d="M8 122a22 10 0 0 0 44 0M148 122a22 10 0 0 0 44 0" />
    </svg>
  );
}

export default function FirmGlance() {
  const { glance, stats } = home;
  const ring = `${glance.ringText} · ${glance.ringText} · `;

  return (
    <section aria-labelledby="glance-heading" className="relative overflow-hidden bg-surface py-section">
      <ScalesWatermark className="pointer-events-none absolute -left-10 top-10 h-[34rem] text-accent/[0.08] md:-left-4" />

      <div className="relative mx-auto grid max-w-site items-center gap-16 px-gutter lg:grid-cols-[1.15fr_1fr]">
        <Reveal from="left">
          <p className="eyebrow text-accent">{glance.eyebrow}</p>
          <h2 id="glance-heading" className="mt-5 text-4xl md:text-6xl">
            {glance.heading}
          </h2>
          <p className="mt-8 max-w-xl leading-relaxed text-muted">{glance.intro}</p>
          <Link href={glance.linkHref} className="link-draw mt-8 inline-flex min-h-11 items-center gap-2 font-heading text-xl font-semibold text-primary">
            {glance.linkLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>

        <Reveal from="right" className="relative mx-auto w-full max-w-md">
          {/* Slowly rotating ring of text (decorative) */}
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            className="mx-auto mb-6 h-36 w-36 animate-[spin_40s_linear_infinite] text-accent motion-reduce:animate-none md:h-44 md:w-44"
          >
            <defs>
              <path id="glance-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text fill="currentColor" fontSize="15" letterSpacing="3" className="font-heading font-semibold uppercase">
              <textPath href="#glance-ring" textLength="486">
                {ring}
              </textPath>
            </text>
          </svg>

          <div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:gap-6">
            <StatCounter variant="circle" value={stats[0].value} suffix={stats[0].suffix} label={stats[0].label} />
            <div className="row-span-2">
              <StatCounter variant="circle" value={stats[1].value} suffix={stats[1].suffix} label={stats[1].label} />
            </div>
            <StatCounter variant="circle" value={stats[2].value} suffix={stats[2].suffix} label={stats[2].label} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
