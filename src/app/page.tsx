import type { Metadata } from "next";
import Link from "next/link";
import ArticleImage from "@/components/ArticleImage";
import FirmGlance from "@/components/FirmGlance";
import HomeHero from "@/components/HomeHero";
import { Icon } from "@/components/icons";
import LeadershipGrid from "@/components/LeadershipGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StateMarquee from "@/components/StateMarquee";
import { home } from "@/content/home";
import { getLatestInsights } from "@/content/insights";
import { leadership } from "@/content/leadership";
import { practiceAreas } from "@/content/practice-areas";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: { absolute: `[HOME PAGE TITLE] | ${site.firmName}` },
  description: "[HOME PAGE DESCRIPTION: one to two sentences for search results.]",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function HomePage() {
  const latestInsights = getLatestInsights(3);

  return (
    <>
      {/* The entry notice (disclaimer) is rendered once in the root layout, so it gates every page. */}

      {/* 2. Hero */}
      <HomeHero />

      {/* 3. Firm at a glance */}
      <FirmGlance />

      {/* 4. Service highlights */}
      <section aria-labelledby="highlights-heading" className="py-section">
        <Reveal className="mx-auto max-w-site px-gutter">
          <SectionHeading
            align="split"
            eyebrow={home.highlights.eyebrow}
            heading={home.highlights.heading}
            intro={home.highlights.intro}
            headingId="highlights-heading"
          />
          <ul className="stagger mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            {home.highlights.items.map((item, i) => (
              <li key={item.title}>
                <article className="group flex h-full flex-col border-t border-primary pt-8">
                  <span className="font-heading text-lg italic text-accent">{pad(i + 1)}</span>
                  <h3 className="mt-6 text-3xl">{item.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex min-h-11 items-center gap-3 self-start rounded-card text-[0.72rem] font-medium uppercase tracking-[0.22em] text-primary no-underline hover:text-accent"
                  >
                    <span className="link-draw">Learn more</span>
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                    <span className="sr-only"> about {item.title}</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 5. Practice areas */}
      <section
        id="practice-areas"
        aria-labelledby="practice-areas-heading"
        className="scroll-mt-24 bg-surface py-section"
      >
        <Reveal className="mx-auto max-w-site px-gutter">
          <SectionHeading
            align="split"
            eyebrow={home.practiceAreas.eyebrow}
            heading={home.practiceAreas.heading}
            intro={home.practiceAreas.intro}
            headingId="practice-areas-heading"
          />
          <ul className="stagger mt-20 grid border-b border-border md:grid-cols-2 md:gap-x-16">
            {practiceAreas.map((area, i) => (
              <li key={area.slug} className="border-t border-border">
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex h-full items-start gap-6 py-10 no-underline md:gap-8"
                >
                  <span className="flex flex-col items-center gap-5 pt-1">
                    <span className="font-heading text-sm italic text-accent">{pad(i + 1)}</span>
                    <span className="text-primary/70 transition-colors duration-300 group-hover:text-accent">
                      <Icon name={area.icon} className="h-6 w-6" />
                    </span>
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-3xl text-primary transition-colors duration-300 group-hover:text-accent md:text-[2.1rem]">
                      {area.name}
                    </span>
                    <span className="mt-3 block leading-relaxed text-muted">{area.summary}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={1.25}>
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 6. Presence: scrolling carousel of cities and states (replaces the awards section) */}
      <section
        aria-labelledby="presence-heading"
        className="relative isolate overflow-hidden bg-primary-strong py-section text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(64rem_30rem_at_50%_0%,rgb(200_165_106/0.13),transparent_70%)]"
        />
        <div aria-hidden="true" className="bg-columns pointer-events-none absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
        />

        <Reveal className="mx-auto max-w-site px-gutter">
          <SectionHeading
            align="split"
            onDark
            eyebrow={home.practiceStates.eyebrow}
            heading={home.practiceStates.heading}
            intro={home.practiceStates.intro}
            headingId="presence-heading"
          />
        </Reveal>

        <div className="mt-16 md:mt-20">
          <StateMarquee
            label={home.practiceStates.label}
            items={home.practiceStates.items}
            headquartersLabel={home.practiceStates.headquartersLabel}
          />
        </div>
      </section>

      {/* 7. Leadership */}
      <section aria-labelledby="leadership-heading" className="bg-surface py-section">
        <Reveal className="mx-auto max-w-site px-gutter">
          <SectionHeading
            align="split"
            eyebrow={home.leadership.eyebrow}
            heading={home.leadership.heading}
            intro={home.leadership.intro}
            headingId="leadership-heading"
          />
          <div className="mt-20">
            <LeadershipGrid leaders={leadership} />
          </div>
        </Reveal>
      </section>

      {/* 9. Latest insights */}
      <section aria-labelledby="insights-heading" className="py-section">
        <Reveal className="mx-auto max-w-site px-gutter">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={home.insights.eyebrow}
              heading={home.insights.heading}
              intro={home.insights.intro}
              headingId="insights-heading"
            />
            <Link href="/insights" className="btn-secondary self-start lg:self-auto">
              All insights
            </Link>
          </div>

          <ul className="stagger mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            {latestInsights.map((article) => (
              <li key={article.slug}>
                <article className="group flex h-full flex-col border-t border-primary pt-8">
                  <ArticleImage article={article} area={article.practiceArea} className="mb-6 aspect-[5/3] w-full" />
                  <time dateTime={article.date} className="eyebrow text-accent">
                    {formatDate(article.date)}
                  </time>
                  <h3 className="mt-5 text-2xl md:text-[1.75rem]">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="rounded-card no-underline transition-colors duration-300 hover:text-accent"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">{article.excerpt}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">By {article.author}</p>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 10. Contact call-to-action */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-primary-strong text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_24rem_at_50%_100%,rgb(200_165_106/0.12),transparent_70%)]" />
        <div aria-hidden="true" className="bg-columns pointer-events-none absolute inset-0" />
        <Reveal className="relative mx-auto max-w-site px-gutter py-section text-center">
          <p className="eyebrow flex items-center justify-center gap-4 text-accent-light">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {home.cta.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-current" />
          </p>
          <h2 id="cta-heading" className="mx-auto mt-8 max-w-4xl text-5xl text-white md:text-7xl">
            {home.cta.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{home.cta.body}</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href={home.cta.href} className="btn-accent">
              {home.cta.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <span className="font-heading text-xl text-white/80">{site.contact.phone}</span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
