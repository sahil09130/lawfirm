import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { site } from "@/content/site";

// Full-height editorial hero: headline with an italic brass second line,
// an arched image with an offset brass outline, and a floating consultation card.
function QuickIcon({ kind }: { kind: "phone" | "whatsapp" | "email" }) {
  const common = { viewBox: "0 0 24 24", className: "h-5 w-5", "aria-hidden": true } as const;
  if (kind === "phone") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  if (kind === "email") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8L4 20z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2L9 8.5z" />
    </svg>
  );
}

// Positions for the rising dust motes. Fixed values keep server and client output identical.
const DUST = [
  { left: 6, size: 3, duration: 15, delay: 2, drift: 30, opacity: 0.5 },
  { left: 14, size: 5, duration: 19, delay: 9, drift: -20, opacity: 0.35 },
  { left: 22, size: 2, duration: 13, delay: 5, drift: 25, opacity: 0.6 },
  { left: 31, size: 4, duration: 17, delay: 12, drift: -35, opacity: 0.4 },
  { left: 40, size: 2, duration: 12, delay: 1, drift: 15, opacity: 0.55 },
  { left: 48, size: 6, duration: 21, delay: 7, drift: 40, opacity: 0.25 },
  { left: 57, size: 3, duration: 14, delay: 10, drift: -25, opacity: 0.5 },
  { left: 64, size: 2, duration: 16, delay: 3, drift: 20, opacity: 0.6 },
  { left: 72, size: 5, duration: 20, delay: 14, drift: -30, opacity: 0.35 },
  { left: 79, size: 3, duration: 13, delay: 6, drift: 35, opacity: 0.55 },
  { left: 86, size: 2, duration: 18, delay: 11, drift: -15, opacity: 0.6 },
  { left: 92, size: 4, duration: 15, delay: 4, drift: 25, opacity: 0.4 },
  { left: 36, size: 3, duration: 22, delay: 16, drift: -20, opacity: 0.45 },
  { left: 68, size: 2, duration: 11, delay: 8, drift: 18, opacity: 0.6 },
];

export default function HomeHero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-strong text-white"
    >
      {/* Atmosphere: warm light from the image side, grain, and an inset frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(64rem_44rem_at_80%_35%,rgb(200_165_106/0.14),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 -z-10 border border-white/[0.07] md:inset-6"
      />

      {/* Motion: slow-drifting glow and rising gold dust (decorative, off for reduced motion) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-[5%] -z-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(200_165_106/0.22),transparent)] motion-safe:animate-glow"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
        {DUST.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-[-4%] block rounded-full bg-accent-light animate-dust"
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `-${p.delay}s`,
                "--dust-x": `${p.drift}px`,
                "--dust-opacity": p.opacity,
                filter: `blur(${p.size > 4 ? 1 : 0}px)`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Vertical side label (wide screens) */}
      <p
        aria-hidden="true"
        className="absolute left-12 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.5em] text-white/35 2xl:block"
      >
        {site.firmName}
        <span className="mx-4 text-accent-light/60">&mdash;</span>
        {hero.location}
      </p>

      <div className="mx-auto grid max-w-site items-center gap-20 px-gutter pb-24 pt-14 md:pt-20 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-12 lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-accent-light motion-safe:animate-rise">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-8 text-[3.1rem] leading-[0.98] tracking-[-0.02em] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]"
          >
            <span className="block motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
              {hero.headline}
            </span>
            {hero.headlineEmphasis && (
              <span className="block pb-[0.18em] -mb-[0.18em] bg-[linear-gradient(100deg,#c8a56a_30%,#f4e3bd_50%,#c8a56a_70%)] bg-[length:200%_100%] bg-clip-text italic text-transparent motion-safe:animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_240ms_both,shimmer_6s_linear_1.5s_infinite]">
                {hero.headlineEmphasis}
              </span>
            )}
          </h1>

          <div className="mt-10 flex max-w-xl gap-6 motion-safe:animate-rise motion-safe:[animation-delay:380ms]">
            <span aria-hidden="true" className="mt-[0.85rem] hidden h-px w-12 shrink-0 bg-accent-light/60 sm:block" />
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">{hero.intro}</p>
          </div>

          <div className="mt-12 flex motion-safe:animate-rise motion-safe:[animation-delay:500ms]">
            <Link href={hero.cta.href} className="btn-accent">
              {hero.cta.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Arched image */}
        <div className="relative lg:col-span-5 lg:pl-6">
          <div className="relative mx-auto w-[86%] max-w-md sm:w-full lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 bottom-3 left-3 rounded-t-full border border-accent-light/40 motion-safe:animate-fade-in motion-safe:[animation-delay:900ms] md:-right-5 md:-top-5 md:bottom-5 md:left-5"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-primary motion-safe:animate-reveal motion-safe:[animation-delay:200ms]">
              <div className="absolute inset-0 motion-safe:animate-drift">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 86vw"
                className="object-cover motion-safe:animate-settle motion-safe:[animation-delay:200ms]"
              />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute inset-y-0 left-0 block w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent motion-safe:animate-sweep" />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-strong/45 via-transparent to-transparent"
              />
            </div>

            {/* Floating consultation card */}
            <aside
              aria-label={hero.panelLabel}
              className="absolute -bottom-10 -left-6 w-[82%] max-w-xs border border-white/10 bg-primary-strong/80 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md motion-safe:animate-rise motion-safe:[animation-delay:1100ms] sm:-left-10 md:p-7"
            >
              <p className="eyebrow text-accent-light">{hero.panelLabel}</p>
              <ul className="mt-4 flex gap-3">
                {site.quickContact.map((item) => (
                  <li key={item.kind}>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-accent-light transition-colors duration-300 hover:border-accent-light hover:bg-accent-light hover:text-primary-strong"
                    >
                      <QuickIcon kind={item.kind} />
                    </a>
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" className="my-4 h-px bg-white/10" />
              <p className="text-sm text-white/60">{site.contact.hours}</p>
            </aside>
          </div>
        </div>
      </div>

      {/* Scroll cue (very wide screens only, where it has room) */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 2xl:flex"
      >
        <span className="text-[0.58rem] uppercase tracking-[0.45em] text-white/40">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-accent-light motion-safe:animate-scroll-cue" />
        </span>
      </div>
    </section>
  );
}
