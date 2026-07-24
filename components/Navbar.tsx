"use client";

import { useEffect, useState } from "react";
import { Menu, X, Hexagon, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Information", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-ink-100 bg-white py-3 shadow-card"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5" onClick={handleNavClick}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-ohana-400 transition-colors group-hover:bg-ohana-600 group-hover:text-white">
            <Hexagon className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Ohana<span className={isScrolled ? "text-ohana-600" : "text-ohana-300"}>Tech</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-ink-600 hover:text-ohana-700"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden ${
            isScrolled
              ? "border-ink-200 text-ink-800"
              : "border-white/30 text-white"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container flex flex-col gap-1 border-t border-ink-100 bg-white pb-6 pt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-ohana-50 hover:text-ohana-700"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={handleNavClick} className="btn-primary mt-3 w-full">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
