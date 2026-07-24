"use client";

import { useEffect, useRef, useState } from "react";
import { Stethoscope, HandCoins, Code2, Mail } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { label: "Automated Compliance Solutions", value: 4, suffix: "" },
  { label: "Founder-Led, Direct Access", value: 1, suffix: "" },
  { label: "Focused on Drug Supply Chain Compliance", value: 100, suffix: "%" },
];

const PILLARS = [
  {
    icon: Stethoscope,
    title: "Built From Firsthand Experience",
    description:
      "Our founder is a working, multi-state licensed pharmacist — not just a software vendor — so every tool is shaped by real compliance workflows, not guesswork.",
  },
  {
    icon: HandCoins,
    title: "Priced for Teams, Not Just Enterprises",
    description:
      "Existing options tend to market toward enterprise accounts at costs that can match or exceed hiring an additional employee. We built Ohana Tech to change that.",
  },
  {
    icon: Code2,
    title: "Always Open to Custom Work",
    description:
      "If you feel there's an opportunity for our team to develop custom software to fit your needs, we want to hear about it.",
  },
];

function useCountUp(target: number, decimals = 0, shouldStart = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let animationFrame: number;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * target).toFixed(decimals)));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldStart, target, decimals]);

  return value;
}

function StatCounter({ stat, shouldStart }: { stat: Stat; shouldStart: boolean }) {
  const count = useCountUp(stat.value, stat.decimals ?? 0, shouldStart);
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-6 shadow-card">
      <p className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
        {count.toFixed(stat.decimals ?? 0)}
        <span className="text-ohana-600">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-ink-500">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-ink-50/60 py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <span className="section-eyebrow">About Ohana Tech Inc</span>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Founded by a pharmacist who felt the workload firsthand.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Ohana Tech Inc. was founded by its President, Michael Fusaro — a
              multi-state licensed pharmacist based in New York who knows
              firsthand how valuable every minute of the day is. While many
              required compliance tasks can feel mundane, they&rsquo;re
              critical to ensuring the safety and security of the US drug
              supply chain.
            </p>
            <p className="mt-4 text-lg text-ink-500">
              Existing options tend to market toward enterprise accounts, with
              annual costs that can match or exceed the cost of hiring an
              additional employee. With the intent of alleviating the workload
              on compliance teams while cutting operational costs, Michael
              developed a suite of timesaving applications to optimize the
              compliance monitoring process.
            </p>

            <div className="mt-10 space-y-6">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ohana-100 text-ohana-700">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={sectionRef}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} stat={stat} shouldStart={isVisible} />
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 rounded-xl border border-ohana-200 bg-ohana-50 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ohana-600 text-white">
                <Mail className="h-6 w-6" />
              </span>
              <p className="text-sm leading-relaxed text-ink-700">
                <span className="font-bold text-ink-900">
                  Contact us if you feel there&rsquo;s an opportunity
                </span>{" "}
                for our team to develop custom software to fit your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
