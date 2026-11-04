import type { Metadata } from "next";
import Link from "next/link";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: pages.notFound.title,
  description: pages.notFound.description,
};

export default function NotFound() {
  return (
    <section className="bg-columns flex flex-1 items-center bg-primary-strong text-white">
      <div className="mx-auto w-full max-w-site px-gutter py-section text-center">
        <p aria-hidden="true" className="font-heading text-[8rem] leading-none text-accent-light/30 md:text-[12rem]">
          404
        </p>
        <p className="eyebrow mt-4 text-accent-light">{pages.notFound.eyebrow}</p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl text-white md:text-6xl">{pages.notFound.heading}</h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-white/70">{pages.notFound.message}</p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-accent">
            {pages.notFound.homeButton}
          </Link>
          <Link href="/contact" className="btn-on-dark">
            {pages.notFound.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
