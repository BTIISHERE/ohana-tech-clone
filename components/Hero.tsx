"use client";

import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ohana-gradient pb-24 pt-36 sm:pb-28 sm:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-ohana-radial" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-ohana-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-ink-500/30 blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Compliance Automation for the
            <span className="block text-ohana-300">US Drug Supply Chain.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-100/80">
            Ohana Tech Inc. builds timesaving software that automates the
            routine, mission-critical checks compliance teams run every
            day — without the enterprise price tag.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary-dark">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost-dark">
              <PlayCircle className="h-4 w-4" />
              Explore Our Solutions
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {[
              "Founded by a Licensed Pharmacist",
              "Built for Compliance Teams",
              "New York, NY",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-ink-100/70">
                <CheckCircle2 className="h-4 w-4 text-ohana-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
