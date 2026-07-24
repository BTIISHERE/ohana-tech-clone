"use client";

import { useState, type FormEvent } from "react";
import { Hexagon, Send, CheckCircle2 } from "lucide-react";

const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "FDA Establishment Verification", href: "#services" },
      { label: "OIG Background Search", href: "#services" },
      { label: "State License Verification", href: "#services" },
      { label: "Data Matrix Parsing", href: "#services" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ohana-600 text-white">
                <Hexagon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Ohana<span className="text-ohana-400">Tech</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Ohana Tech Inc. is a technology consulting corporation based in
              New York focused on optimizing routine workflows into automated
              web applications — reducing organizational demands so our
              clients can allocate their time and assets more efficiently.
            </p>

            <form onSubmit={handleSubscribe} className="mt-7 max-w-sm">
              <p className="font-display text-sm font-bold text-white">Subscribe</p>
              <p className="mt-1 text-xs text-ink-400">
                Sign up with your email address to receive news and updates.
              </p>
              {subscribed ? (
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thank you!
                </div>
              ) : (
                <div className="mt-3 flex gap-2">
                  <label htmlFor="footer-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none transition-colors focus:border-ohana-500 focus:ring-2 focus:ring-ohana-500/20"
                  />
                  <button
                    type="submit"
                    aria-label="Sign Up"
                    className="flex shrink-0 items-center justify-center rounded-lg bg-ohana-600 px-4 py-2.5 text-white transition-colors hover:bg-ohana-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
              <p className="mt-2 text-xs text-ink-500">We respect your privacy.</p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:max-w-md">
            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <h4 className="font-display text-sm font-bold text-white">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-400 transition-colors hover:text-ohana-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Ohana Tech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
