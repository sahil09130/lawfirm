import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import HeroScrollLine from "@/components/HeroScrollLine";
import { site } from "@/content/site";

// Cinematic full-width hero: photo anchored right and faded into navy, large headline on the left,
// gold corner frame, and a glass contact bar along the bottom.
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
      className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-primary-strong text-white md:min-h-[calc(100svh-6rem)]"
    >
      {/* Cinematic photograph, anchored right and faded into the navy on the left */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-30 h-[22rem] overflow-hidden sm:h-[28rem] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[68%]">
        <div className="absolute inset-0 origin-[100%_30%] motion-safe:animate-drift">
          <Image
            src={hero.image.src}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="object-cover object-[88%_30%] lg:object-[100%_30%] motion-safe:animate-settle"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 h-[22rem] bg-gradient-to-b from-primary-strong/20 via-primary-strong/20 to-primary-strong sm:h-[28rem] lg:hidden" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 hidden bg-gradient-to-r from-primary-strong from-30% via-primary-strong/75 via-48% to-primary-strong/5 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-primary-strong/90 to-transparent"
      />

      {/* Atmosphere: slow light, grain, gold dust */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-[5%] -z-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(200_165_106/0.18),transparent)] motion-safe:animate-glow"
      />
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
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

      {/* Thin frame with gold corner marks */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-3 md:inset-6">
        <div className="absolute inset-0 border border-white/[0.08]" />
        <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-accent-light/70" />
        <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-accent-light/70" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-accent-light/70" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-accent-light/70" />
      </div>

      {/* Vertical side label (very wide screens) */}
      <p
        aria-hidden="true"
        className="absolute left-12 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.5em] text-white/35 2xl:block"
      >
        {site.firmName}
        <span className="mx-4 text-accent-light/60">&mdash;</span>
        {hero.location}
      </p>

      {/* Copy */}
      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-site px-gutter pb-16 pt-[18rem] sm:pt-[23rem] lg:py-24">
          <div className="max-w-2xl">
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
                <span className="-mb-[0.18em] block bg-[linear-gradient(100deg,#c8a56a_30%,#f4e3bd_50%,#c8a56a_70%)] bg-[length:200%_100%] bg-clip-text pb-[0.18em] italic text-transparent motion-safe:animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_240ms_both,shimmer_6s_linear_1.5s_infinite]">
                  {hero.headlineEmphasis}
                </span>
              )}
            </h1>

            <div className="mt-10 flex max-w-xl gap-6 motion-safe:animate-rise motion-safe:[animation-delay:380ms]">
              <span aria-hidden="true" className="mt-[0.85rem] hidden h-px w-12 shrink-0 bg-accent-light/60 sm:block" />
              <p className="text-lg leading-relaxed text-white/75 md:text-xl">{hero.intro}</p>
            </div>

            <div className="mt-12 flex motion-safe:animate-rise motion-safe:[animation-delay:500ms]">
              <Link href={hero.cta.href} className="btn-accent">
                {hero.cta.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Glass contact bar */}
      <div className="relative mx-3 mb-3 border-t border-white/10 bg-primary-strong/55 backdrop-blur-md motion-safe:animate-rise motion-safe:[animation-delay:900ms] md:mx-6 md:mb-6">
        <div className="mx-auto flex max-w-site flex-col gap-6 px-gutter py-5 md:flex-row md:items-center md:justify-between md:py-6">
          <div className="flex items-center gap-5">
            <p className="eyebrow hidden text-accent-light sm:block">{hero.panelLabel}</p>
            <ul className="flex gap-3">
              {site.quickContact.map((item) => (
                <li key={item.kind}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-accent-light transition-colors duration-300 hover:border-accent-light hover:bg-accent-light hover:text-primary-strong"
                  >
                    <QuickIcon kind={item.kind} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="max-w-[12rem] text-sm text-white/65 sm:max-w-none">{site.contact.hours}</p>
          <p className="hidden font-heading text-lg italic text-white/70 lg:block">{site.tagline}</p>
        </div>
        <HeroScrollLine />
      </div>
    </section>
  );
}
