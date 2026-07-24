"use client";

import { useState } from "react";
import {
  BadgeCheck,
  UserSearch,
  FileCheck2,
  ScanBarcode,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "fda-verification",
    title: "FDA Establishment Verification Automation",
    shortDescription: "Automated FDA registration checks",
    description:
      "Automatically verify that facilities and trading partners are properly registered with the FDA — replacing manual lookups with a streamlined, repeatable process.",
    icon: BadgeCheck,
    features: [
      "Automated FDA establishment registration lookups",
      "Continuous re-verification as registrations change",
      "Exportable records for audit and inspection readiness",
      "Reduces manual research time for compliance staff",
      "Built for pharmacies, wholesalers, and distributors",
    ],
  },
  {
    id: "oig-search",
    title: "OIG Background Search Automation",
    shortDescription: "Automated exclusion list screening",
    description:
      "Automatically screen employees, vendors, and partners against the HHS Office of Inspector General exclusion list — a required check across the healthcare and pharmaceutical industry.",
    icon: UserSearch,
    features: [
      "Automated OIG List of Excluded Individuals/Entities checks",
      "Scheduled recurring re-screening",
      "Alerts generated when a match is found",
      "Centralized results for compliance recordkeeping",
      "Eliminates manual monthly search routines",
    ],
  },
  {
    id: "state-license",
    title: "State License Verification",
    shortDescription: "Multi-state licensure checks",
    description:
      "Verify pharmacist, pharmacy, and facility licenses across multiple state boards automatically — keeping your team ahead of renewals and lapses.",
    icon: FileCheck2,
    features: [
      "Automated state board license lookups",
      "Multi-state monitoring from a single dashboard",
      "Expiration and renewal tracking",
      "Reduces risk of operating on a lapsed license",
      "Built by a multi-state licensed pharmacist",
    ],
  },
  {
    id: "data-matrix",
    title: "Data Matrix Parsing and Storing",
    shortDescription: "Automated 2D barcode data capture",
    description:
      "Parse and store Data Matrix barcodes used in pharmaceutical serialization and track-and-trace — turning scanned package data into structured, searchable records.",
    icon: ScanBarcode,
    features: [
      "Automated Data Matrix barcode parsing",
      "Structured storage for serialization data",
      "Supports track-and-trace recordkeeping",
      "Searchable historical archive",
      "Reduces manual data entry errors",
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];

  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Purpose-built automation for compliance teams.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Four focused solutions that replace routine, manual compliance
            work with automated, repeatable checks.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={isActive}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                    isActive
                      ? "border-ohana-500 bg-ohana-50 shadow-card"
                      : "border-ink-100 bg-white hover:border-ohana-300 hover:bg-ohana-50/50"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? "bg-ohana-600 text-white"
                        : "bg-ink-50 text-ink-600 group-hover:bg-ohana-100 group-hover:text-ohana-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-sm font-bold leading-snug ${
                        isActive ? "text-ohana-800" : "text-ink-900"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span className="mt-0.5 hidden truncate text-xs text-ink-400 sm:block">
                      {service.shortDescription}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-950 p-8 shadow-card sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ohana-600/20 text-ohana-400">
                <activeService.icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {activeService.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ohana-400">
                  {activeService.shortDescription}
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-ink-200">
              {activeService.description}
            </p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {activeService.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ohana-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-ohana-400 transition-colors hover:text-ohana-300"
            >
              Talk to us about {activeService.title}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
