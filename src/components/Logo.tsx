import { site } from "@/content/site";

// Monogram mark: the firm's initials inside a double arch, echoing the hero image frame.
// Drawn inline so it uses the site's display serif and inherits color via `currentColor`.
export function LogoMark({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 68"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer and inner arches */}
      <path d="M2 66V28a26 26 0 0 1 52 0v38z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6.5 61.5V28a21.5 21.5 0 0 1 43 0v33.5z" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.75" />
      {/* Keystone */}
      <path d="M28 6.5l2 3-2 3-2-3z" fill="currentColor" />
      {/* Initials */}
      <text
        x="28"
        y="47"
        textAnchor="middle"
        fill="currentColor"
        fontSize="22"
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-heading-family)", fontWeight: 500 }}
      >
        {site.brand.monogram}
      </text>
      {/* Base rule */}
      <path d="M20 53.5h16" stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.75" />
    </svg>
  );
}

// Full lockup: mark plus a two-line wordmark.
export function LogoLockup({
  size = "md",
  className = "",
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  const large = size === "lg";
  return (
    <span className={`flex items-center ${large ? "gap-6" : "gap-3.5 md:gap-4"} ${className}`}>
      <LogoMark
        className={`${large ? "h-20 md:h-24" : "h-11 md:h-12"} w-auto shrink-0 text-accent-light`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading uppercase text-white ${
            large
              ? "text-3xl tracking-[0.08em] md:text-5xl"
              : "text-[1.05rem] tracking-[0.12em] sm:text-lg md:text-xl"
          }`}
        >
          {site.brand.primary}
        </span>
        <span
          className={`flex items-center gap-3 uppercase text-accent-light ${
            large ? "mt-3 text-xs tracking-[0.5em] md:mt-4 md:text-sm" : "mt-1.5 text-[0.58rem] tracking-[0.42em] md:text-[0.62rem]"
          }`}
        >
          <span aria-hidden="true" className={`h-px bg-current opacity-60 ${large ? "w-10" : "w-5"}`} />
          {site.brand.secondary}
        </span>
      </span>
    </span>
  );
}
