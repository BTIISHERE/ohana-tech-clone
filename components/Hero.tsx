"use client";

import Image from "next/image";
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

      <div className="container relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Compliance Automation for the
            <span className="block text-ohana-300">US Drug Supply Chain.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-100/80">
            Ohana Tech Inc. builds timesaving software that automates the
            routine, mission-critical checks compliance teams run every
            day — without the enterprise price tag.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary-dark">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost-dark">
              <PlayCircle className="h-4 w-4" />
              Explore Our Solutions
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
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

        <div className="relative animate-fade-in [animation-delay:200ms] [animation-fill-mode:backwards]">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_62%_68%_at_50%_42%,#000_45%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_62%_68%_at_50%_42%,#000_45%,transparent_100%)]">
              <Image
                src="https://images.unsplash.com/photo-1758573467057-955f803660a9?fm=jpg&q=80&w=900&h=1100&fit=crop&auto=format"
                alt="Pharmacist examining a medicine bottle for verification"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 mix-blend-color bg-gradient-to-br from-ink-950 via-ink-800 to-ohana-600" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink-950/30 via-transparent to-ohana-600/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
