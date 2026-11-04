import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import PageHero from "@/components/PageHero";
import { contact } from "@/content/contact";
import { pages } from "@/content/pages";
import { getPracticeArea, practiceAreas } from "@/content/practice-areas";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "[PRACTICE AREA NOT FOUND]" };
  return {
    title: area.name,
    description: area.summary,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const index = practiceAreas.findIndex((item) => item.slug === area.slug);
  const otherAreas = practiceAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow={`Practice ${String(index + 1).padStart(2, "0")}`}
        title={area.name}
        intro={area.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/#practice-areas" },
          { label: area.name },
        ]}
      >
        <span className="mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-accent-light">
          <Icon name={area.icon} className="h-6 w-6" />
        </span>
      </PageHero>

      <div className="mx-auto grid w-full max-w-site gap-16 px-gutter py-section lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-6 text-xl leading-relaxed text-ink">
            {area.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-20 border-b border-border">
            {area.sections.map((section, i) => (
              <li key={section.heading} className="grid gap-4 border-t border-border py-10 md:grid-cols-[4rem_1fr]">
                <span className="font-heading text-lg italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <section>
                  <h2 className="text-3xl">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
                </section>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-label="Next steps" className="space-y-12 lg:sticky lg:top-32 lg:col-span-4 lg:col-start-9 lg:self-start">
          <div className="bg-columns bg-primary p-8 text-white md:p-10">
            <p className="eyebrow text-accent-light">{site.headerCta.label}</p>
            <h2 className="mt-5 text-3xl text-white">{pages.practiceCta.heading}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{contact.intro}</p>
            <p className="mt-6 font-heading text-2xl text-white">{site.contact.phone}</p>
            <Link href="/contact" className="btn-accent mt-8 w-full">
              {pages.practiceCta.button}
            </Link>
          </div>

          <div>
            <h2 className="eyebrow font-sans text-accent">{pages.practiceCta.otherAreasHeading}</h2>
            <ul className="mt-5 border-b border-border">
              {otherAreas.map((item) => (
                <li key={item.slug} className="border-t border-border">
                  <Link
                    href={`/practice-areas/${item.slug}`}
                    className="group flex min-h-11 items-center justify-between gap-4 py-4 font-heading text-xl text-primary no-underline transition-colors hover:text-accent"
                  >
                    {item.name}
                    <span aria-hidden="true" className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
