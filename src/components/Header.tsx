"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/content/site";

type AreaLink = { slug: string; name: string };

export default function Header({ practiceAreas }: { practiceAreas: AreaLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const dropdownId = useId();

  // Close the dropdown on outside click, close everything on Escape,
  // and tighten the header once the page has scrolled.
  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    }
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeDropdown(returnFocus: boolean) {
    setDropdownOpen(false);
    if (returnFocus) dropdownButtonRef.current?.focus();
  }

  function closeAll() {
    setDropdownOpen(false);
    setMenuOpen(false);
  }

  const navLinkClass =
    "flex min-h-11 items-center py-4 font-heading text-2xl text-white no-underline lg:py-2 lg:font-sans lg:text-[0.72rem] lg:font-medium lg:uppercase lg:tracking-[0.22em] lg:text-white/80 lg:hover:text-accent-light";

  return (
    <header
      className={`sticky top-0 z-50 border-b text-white transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-white/10 bg-primary-strong/95 backdrop-blur-md"
          : "border-white/5 bg-primary-strong"
      }`}
    >
      <div
        className={`mx-auto flex max-w-site items-center justify-between px-gutter transition-[height] duration-300 ${
          scrolled ? "h-18" : "h-20 md:h-24"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-4 rounded-card no-underline"
          aria-label={`${site.firmName} home`}
          onClick={closeAll}
        >
          <LogoLockup />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 items-center gap-3 rounded-card text-[0.7rem] uppercase tracking-[0.22em] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>

        <nav
          id={menuId}
          aria-label="Main"
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute inset-x-0 top-full h-[calc(100dvh-100%)] overflow-y-auto border-t border-white/10 bg-primary-strong px-gutter pb-10 pt-4 lg:static lg:block lg:h-auto lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-9">
            {site.navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <li
                    key={item.label}
                    ref={dropdownRef}
                    className="relative border-b border-white/10 lg:border-0"
                  >
                    <button
                      ref={dropdownButtonRef}
                      type="button"
                      className={`${navLinkClass} w-full justify-between gap-3 text-left lg:w-auto`}
                      aria-expanded={dropdownOpen}
                      aria-controls={dropdownId}
                      onClick={() => setDropdownOpen((open) => !open)}
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 12 12"
                        className={`h-3 w-3 text-accent-light transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </button>

                    <div
                      id={dropdownId}
                      className={`${
                        dropdownOpen ? "block" : "hidden"
                      } pb-4 lg:absolute lg:left-1/2 lg:top-full lg:z-10 lg:mt-6 lg:w-[34rem] lg:-translate-x-1/2 lg:border lg:border-border lg:bg-background lg:p-8 lg:shadow-[0_30px_60px_-20px_rgba(10,17,30,0.35)]`}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") closeDropdown(true);
                      }}
                    >
                      <p className="eyebrow hidden text-accent lg:block">{item.label}</p>
                      <ul className="grid gap-x-8 lg:mt-5 lg:grid-cols-2">
                        {practiceAreas.map((area, i) => (
                          <li key={area.slug} className="lg:border-t lg:border-border">
                            <Link
                              href={`/practice-areas/${area.slug}`}
                              className="group flex min-h-11 items-baseline gap-3 py-2.5 text-base text-white/80 no-underline hover:text-accent-light lg:py-3 lg:text-primary lg:hover:text-accent"
                              onClick={() => {
                                closeDropdown(false);
                                setMenuOpen(false);
                              }}
                            >
                              <span className="font-heading text-sm text-accent-light lg:text-accent">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-heading text-lg">{area.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/#practice-areas"
                        className="mt-3 inline-flex min-h-11 items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent-light no-underline hover:text-white lg:mt-6 lg:text-accent lg:hover:text-primary"
                        onClick={() => {
                          closeDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        All practice areas <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-white/10 lg:border-0">
                  <Link href={item.href} className={navLinkClass} onClick={closeAll}>
                    {item.label}
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>
      </div>
    </header>
  );
}
