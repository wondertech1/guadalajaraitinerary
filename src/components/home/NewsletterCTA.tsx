"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          {/* Decorative arch */}
          <div className="flex justify-center mb-6">
            <svg
              width="60"
              height="36"
              viewBox="0 0 60 36"
              fill="none"
              className="text-cantera/20"
            >
              <path
                d="M4 36 Q4 8 30 4 Q56 8 56 36"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="30" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-3">
            Get the Guadalajara Cheat Sheet
          </h2>
          <p className="text-sm text-obsidiana/55 mb-8 max-w-md mx-auto">
            One email with the top 10 mistakes tourists make, best birria spots,
            and a printable 3-day itinerary. No spam, unsubscribe anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {submitted ? (
            <div className="py-4 px-6 rounded-lg bg-agave/10 border border-agave/20">
              <p className="font-heading text-base font-bold text-agave">
                You&apos;re on the list ✓
              </p>
              <p className="text-xs text-agave/70 mt-1">
                Check your inbox for the cheat sheet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-obsidiana/10 bg-piedra text-sm text-obsidiana placeholder:text-obsidiana/30 focus:outline-none focus:border-cantera/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-cantera text-piedra font-body text-sm font-medium hover:bg-cantera-dark transition-colors shrink-0"
              >
                Send it
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
