import type { Metadata } from "next";
import Link from "next/link";
import ArticleImage from "@/components/ArticleImage";
import PageHero from "@/components/PageHero";
import { getPracticeArea } from "@/content/practice-areas";
import { sortedInsights } from "@/content/insights";
import { pages } from "@/content/pages";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Insights",
  description: "Plain-language guides to Indian law, written to help clients understand their rights, options and next steps.",
};

export default function InsightsPage() {
  const [featured, ...rest] = sortedInsights;

  return (
    <>
      <PageHero
        eyebrow={pages.insightsIndex.eyebrow}
        title={pages.insightsIndex.heading}
        intro={pages.insightsIndex.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="py-section">
        <div className="mx-auto max-w-site px-gutter">
          {!featured ? (
            <p className="text-muted">{pages.insightsIndex.empty}</p>
          ) : (
            <>
              {/* Featured (newest) article */}
              <article className="group grid gap-8 border-y border-primary py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-3">
                  <p className="eyebrow text-accent">Latest · {getPracticeArea(featured.practiceArea)?.name}</p>
                  <time dateTime={featured.date} className="mt-3 block text-sm text-muted">
                    {formatDate(featured.date)}
                  </time>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <Link href={`/insights/${featured.slug}`} tabIndex={-1} aria-hidden="true" className="mb-8 block">
                    <ArticleImage article={featured} area={featured.practiceArea} priority className="aspect-[2/1] w-full" />
                  </Link>
                  <h2 className="text-4xl md:text-5xl">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="rounded-card no-underline transition-colors duration-300 hover:text-accent"
                    >
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted">{featured.excerpt}</p>
                  <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted">By {featured.author}</p>
                </div>
              </article>

              {/* Remaining articles */}
              <ul className="divide-y divide-border">
                {rest.map((article) => (
                  <li key={article.slug}>
                    <article className="group grid gap-4 py-10 lg:grid-cols-12 lg:gap-12">
                      <div className="pt-2 lg:col-span-3">
                        <p className="eyebrow text-accent">{getPracticeArea(article.practiceArea)?.name}</p>
                        <time dateTime={article.date} className="mt-2 block text-sm text-muted">
                          {formatDate(article.date)}
                        </time>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-[14rem_1fr] sm:gap-8 lg:col-span-8 lg:col-start-5">
                        <Link href={`/insights/${article.slug}`} tabIndex={-1} aria-hidden="true" className="block">
                          <ArticleImage article={article} area={article.practiceArea} className="aspect-[5/3] w-full" />
                        </Link>
                        <div>
                        <h2 className="text-3xl">
                          <Link
                            href={`/insights/${article.slug}`}
                            className="rounded-card no-underline transition-colors duration-300 hover:text-accent"
                          >
                            {article.title}
                          </Link>
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted">{article.excerpt}</p>
                        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">By {article.author}</p>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}
