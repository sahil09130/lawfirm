import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
};

// Dark, typographic header used at the top of every inner page.
export default function PageHero({ eyebrow, title, intro, breadcrumbs, children }: Props) {
  return (
    <section className="bg-columns relative overflow-hidden bg-primary text-white">
      <div className="mx-auto max-w-site px-gutter pb-16 pt-20 md:pb-24 md:pt-28">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-10 text-[0.72rem] uppercase tracking-[0.2em] text-white/55">
            <ol className="flex flex-wrap items-center gap-3">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden="true" className="h-px w-4 bg-white/30" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="link-draw rounded-card hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-accent-light">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow flex items-center gap-4 text-accent-light">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-6 max-w-4xl text-5xl text-white md:text-6xl lg:text-7xl">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{intro}</p>
        )}
        {children}
      </div>
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
    </section>
  );
}
