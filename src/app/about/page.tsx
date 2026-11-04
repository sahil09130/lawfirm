import type { Metadata } from "next";
import Link from "next/link";
import LeadershipGrid from "@/components/LeadershipGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/content/about";
import { leadership } from "@/content/leadership";

export const metadata: Metadata = {
  title: "[ABOUT PAGE TITLE]",
  description: "[ABOUT PAGE DESCRIPTION: one to two sentences about the firm.]",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.heading}
        intro={about.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section aria-labelledby="overview-heading" className="py-section">
        <div className="mx-auto grid max-w-site gap-12 px-gutter lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="overview-heading" className="text-4xl md:text-5xl">
              {about.overviewHeading}
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-16 bg-accent" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink lg:col-span-6 lg:col-start-7">
            {about.overview.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:font-heading first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="bg-columns bg-primary py-section text-white">
        <div className="mx-auto max-w-site px-gutter">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="mission-heading" className="eyebrow font-sans text-accent-light">
              {about.mission.heading}
            </h2>
            <p className="mt-10 font-heading text-3xl italic leading-snug text-white md:text-5xl md:leading-[1.2]">
              {about.mission.body}
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Our values" className="bg-surface py-section">
        <div className="mx-auto max-w-site px-gutter">
          <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
            {about.values.map((value, i) => (
              <li key={value.title} className="border-t border-primary pt-8">
                <span className="font-heading text-lg italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-3xl">{value.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className="py-section">
        <div className="mx-auto max-w-site px-gutter">
          <SectionHeading
            align="split"
            eyebrow={about.leadership.eyebrow}
            heading={about.leadership.heading}
            intro={about.leadership.intro}
            headingId="leadership-heading"
          />
          <div className="mt-20">
            <LeadershipGrid leaders={leadership} />
          </div>
          <div className="mt-24 flex flex-col items-center gap-6 border-t border-border pt-16 text-center">
            <p className="font-heading text-3xl text-primary md:text-4xl">Ready to talk?</p>
            <Link href="/contact" className="btn-primary">
              Contact the firm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
