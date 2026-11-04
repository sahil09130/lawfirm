type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "center" | "left" | "split";
  onDark?: boolean;
  headingId?: string;
};

// Editorial section header. "split" puts the heading left and the intro right on large screens.
export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  onDark = false,
  headingId,
}: Props) {
  const eyebrowEl = eyebrow && (
    <p
      className={`eyebrow flex items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      } ${onDark ? "text-accent-light" : "text-accent"}`}
    >
      <span aria-hidden="true" className="h-px w-10 bg-current" />
      {eyebrow}
    </p>
  );

  const headingEl = (
    <h2
      id={headingId}
      className={`mt-6 text-4xl md:text-5xl lg:text-[3.5rem] ${
        onDark ? "text-white" : "text-primary"
      }`}
    >
      {heading}
    </h2>
  );

  const introEl = intro && (
    <p
      className={`text-lg leading-relaxed ${onDark ? "text-white/70" : "text-muted"}`}
    >
      {intro}
    </p>
  );

  if (align === "split") {
    return (
      <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          {eyebrowEl}
          {headingEl}
        </div>
        {introEl && <div className="lg:col-span-4 lg:col-start-9">{introEl}</div>}
      </header>
    );
  }

  return (
    <header className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrowEl}
      {headingEl}
      {introEl && <div className="mt-6">{introEl}</div>}
    </header>
  );
}
