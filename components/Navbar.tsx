"use client";

import { useEffect, useState } from "react";
import { contact, navItems } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/92 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="rounded-md text-sm font-semibold text-navy transition-colors hover:text-primary-blue"
          onClick={() => setOpen(false)}
        >
          Orlando Jordán Núñez
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`button-press rounded-md px-3 py-2 text-sm font-medium ${
                active === item.href
                  ? "bg-light-blue text-primary-blue shadow-[inset_0_0_0_1px_rgba(30,102,245,0.08)]"
                  : "text-muted-text hover:bg-light-bg hover:text-main-text"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={contact.pdfHref}
          download
          className="button-press hidden rounded-lg bg-primary-blue px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(30,102,245,0.2)] hover:bg-navy md:inline-flex"
        >
          Descargar CV
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 text-navy transition-colors hover:bg-light-bg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? "x" : "="}
          </span>
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-navy/10 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="button-press rounded-md px-3 py-2 text-sm font-medium text-muted-text hover:bg-light-bg hover:text-main-text"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contact.pdfHref}
              download
              className="button-press mt-2 inline-flex w-fit rounded-lg bg-primary-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy"
              onClick={() => setOpen(false)}
            >
              Descargar CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
