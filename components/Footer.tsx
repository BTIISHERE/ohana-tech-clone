"use client";

import { useState, FormEvent } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer className="bg-sage py-20 text-white">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide">
            Subscribe
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Sign up with your email address to receive news and updates.
          </p>

          {submitted ? (
            <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-widest2">
              Thank you!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white sm:w-72"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay-dark"
              >
                Sign Up
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/60">We respect your privacy.</p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/15 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <h3 className="font-mono text-xl font-bold tracking-widest2">OTI</h3>
          <p className="font-mono text-xs text-white/60">
            &copy; {new Date().getFullYear()} Ohana Tech Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
