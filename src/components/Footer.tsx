import Link from "next/link";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-primary-strong text-white/65">
      <div className="mx-auto max-w-site px-gutter">
        {/* Signature row */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <Link href="/" aria-label={`${site.firmName} home`} className="inline-block rounded-card no-underline">
              <LogoLockup size="lg" />
            </Link>
            <p className="mt-6 text-sm text-white/55">{site.tagline}</p>
          </div>
          <Link href={site.headerCta.href} className="btn-on-dark self-start md:self-auto">
            {site.headerCta.label}
          </Link>
        </div>

        {/* Details */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="eyebrow font-sans text-white">Office</h2>
            <address className="mt-5 text-sm not-italic leading-loose">
              {site.contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2 className="eyebrow font-sans text-white">Contact</h2>
            <ul className="mt-5 space-y-1 text-sm leading-loose">
              <li>{site.contact.phone}</li>
              <li>{site.contact.email}</li>
              <li>{site.contact.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow font-sans text-white">Explore</h2>
            <ul className="mt-5 space-y-1 text-sm leading-loose">
              {site.navItems.map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <Link href={item.href} className="link-draw rounded-card hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href="/#practice-areas" className="link-draw rounded-card hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow font-sans text-white">Follow</h2>
            <ul className="mt-5 space-y-1 text-sm leading-loose">
              {site.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="link-draw rounded-card hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs tracking-wide md:flex-row md:items-center md:justify-between">
          <p>{site.copyright}</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {site.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="link-draw rounded-card hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
