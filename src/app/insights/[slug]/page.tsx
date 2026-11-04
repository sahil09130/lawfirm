import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleImage from "@/components/ArticleImage";
import ArticleBody from "@/components/ArticleBody";
import { getPracticeArea } from "@/content/practice-areas";
import { getInsight, insights } from "@/content/insights";
import { pages } from "@/content/pages";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "[ARTICLE NOT FOUND]" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const area = getPracticeArea(article.practiceArea);

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-gutter pb-16 pt-16 text-center md:pb-20 md:pt-24">
          <nav aria-label="Breadcrumb">
            <Link
              href="/insights"
              className="inline-flex min-h-11 items-center gap-3 rounded-card text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent no-underline hover:text-primary"
            >
              <span aria-hidden="true">&larr;</span>
              <span className="link-draw">All insights</span>
            </Link>
          </nav>
          <p className="eyebrow mt-10 text-muted">
            {area && <span className="text-accent">{area.name} · </span>}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] md:text-6xl">{article.title}</h1>
          <div aria-hidden="true" className="mx-auto mt-10 h-px w-16 bg-accent" />
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">
            By <span className="text-primary">{article.author}</span>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-gutter pt-12 md:pt-16">
        <ArticleImage article={article} area={article.practiceArea} priority className="aspect-[5/3] w-full sm:aspect-[2/1]" />
      </div>

      <div className="mx-auto max-w-[44rem] px-gutter py-section">
        <ArticleBody body={article.body} />

        {area && (
          <p className="mt-12 border-t border-border pt-6 text-sm text-muted">
            Related practice area:{" "}
            <Link href={`/practice-areas/${area.slug}`} className="link-draw font-medium text-primary">
              {area.name}
            </Link>
          </p>
        )}

        <aside className="mt-20 border border-border bg-white p-8 text-center md:p-12">
          <p className="font-heading text-3xl text-primary">{pages.articleCta.heading}</p>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">{pages.articleCta.body}</p>
          <Link href="/contact" className="btn-primary mt-8">
            {pages.articleCta.button}
          </Link>
        </aside>
      </div>
    </article>
  );
}
