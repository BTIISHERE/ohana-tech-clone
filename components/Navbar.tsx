"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Information", href: "/information" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page flex h-20 items-center justify-between sm:h-24">
        <Link
          href="/"
          className="font-heading text-lg font-extrabold uppercase tracking-widest2 text-white sm:text-xl"
        >
          Ohana Tech Inc
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/session"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-clay-dark transition hover:bg-white/90"
          >
            Book session
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close Menu" : "Open Menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          <span className="sr-only">{open ? "Close Menu" : "Open Menu"}</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="mx-4 mb-4 rounded-2xl bg-sage px-6 py-6 text-white shadow-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="text-base font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" onClick={() => setOpen(false)} className="text-base font-medium">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/session"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-clay-dark"
              >
                Book session
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
