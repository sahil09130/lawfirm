import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "[CONTACT PAGE TITLE]",
  description: "[CONTACT PAGE DESCRIPTION.]",
};

export default function ContactPage() {
  const details = [
    { label: "Telephone", value: [site.contact.phone], large: true },
    { label: "Email", value: [site.contact.email] },
    { label: "Office", value: site.contact.address },
    { label: "Hours", value: [site.contact.hours] },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contact.heading}
        intro={contact.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section aria-labelledby="office-heading" className="py-section">
        <div className="mx-auto grid max-w-site gap-16 px-gutter lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="office-heading" className="text-4xl">
              Office details
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-16 bg-accent" />
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {details.map((item) => (
                <div key={item.label} className="py-6">
                  <dt className="eyebrow text-accent">{item.label}</dt>
                  <dd className={`mt-2 ${item.large ? "font-heading text-2xl text-primary" : "text-ink"}`}>
                    {item.value.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted">
              {contact.urgentNote}
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
