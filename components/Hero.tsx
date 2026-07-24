"use client";

import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  BadgeCheck,
  UserSearch,
  FileCheck2,
  ScanBarcode,
} from "lucide-react";

const CHECKS = [
  { label: "FDA Establishment Verification", status: "Verified", icon: BadgeCheck },
  { label: "OIG Background Search", status: "Clear", icon: UserSearch },
  { label: "State License Verification", status: "Active", icon: FileCheck2 },
];

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
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-ohana-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-ink-100/50">ohana-compliance // live</span>
            </div>

            <div className="mt-6 space-y-4">
              {CHECKS.map((check) => (
                <div
                  key={check.label}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <check.icon className="h-4 w-4 text-ohana-400" />
                    <span className="text-sm text-ink-100/70">{check.label}</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                    {check.status}
                  </span>
                </div>
              ))}

              <div className="rounded-xl border border-ohana-400/30 bg-ohana-500/10 px-4 py-3.5">
                <div className="flex items-center gap-2 text-ohana-300">
                  <ScanBarcode className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Data Matrix Parsing Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-8 hidden animate-float rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-glow backdrop-blur-lg sm:flex sm:items-center sm:gap-2">
            <BadgeCheck className="h-4 w-4 text-ohana-400" />
            <span className="whitespace-nowrap text-xs font-medium text-white">
              FDA Check Automated
            </span>
          </div>

          <div className="absolute -bottom-6 right-2 hidden animate-float rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-glow backdrop-blur-lg [animation-delay:1.5s] sm:flex sm:items-center sm:gap-2">
            <UserSearch className="h-4 w-4 text-ohana-400" />
            <span className="whitespace-nowrap text-xs font-medium text-white">
              OIG Search Complete
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
