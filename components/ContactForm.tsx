"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  HeartHandshake,
  Code2,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.08 ? resolve() : reject(new Error("network"));
        }, 1400);
      });

      setStatus("success");
      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Think we can help? Let&rsquo;s talk.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Contact us if you feel there&rsquo;s an opportunity for our team
              to develop custom software to fit your needs.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ohana-100 text-ohana-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Based In</p>
                  <p className="text-sm text-ink-500">New York, NY</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ohana-100 text-ohana-700">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Direct Access</p>
                  <p className="text-sm text-ink-500">
                    You&rsquo;ll hear directly from our founder — no call
                    center, no account managers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ohana-100 text-ohana-700">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Custom Work Welcome</p>
                  <p className="text-sm text-ink-500">
                    Open to building custom software beyond our core solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6 shadow-card sm:p-10">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink-900">
                  Message sent successfully!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-500">
                  Thanks for reaching out. A member of our team will get back
                  to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-secondary mt-8"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-semibold text-ink-800">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ohana-500 focus:ring-2 focus:ring-ohana-500/20 ${
                        errors.firstName ? "border-red-400" : "border-ink-200"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="text-sm font-semibold text-ink-800">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Cooper"
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ohana-500 focus:ring-2 focus:ring-ohana-500/20 ${
                        errors.lastName ? "border-red-400" : "border-ink-200"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-ink-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ohana-500 focus:ring-2 focus:ring-ohana-500/20 ${
                      errors.email ? "border-red-400" : "border-ink-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-ink-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current setup and what you're looking to solve..."
                    className={`mt-2 w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ohana-500 focus:ring-2 focus:ring-ohana-500/20 ${
                      errors.message ? "border-red-400" : "border-ink-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong sending your message. Please try
                    again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
