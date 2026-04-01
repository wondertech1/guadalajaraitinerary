"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

const facts = [
  { icon: "✈️", label: "Airport", value: "GDL", detail: "Miguel Hidalgo, 25 min to centro" },
  { icon: "💱", label: "Currency", value: "MXN", detail: "~17 MXN = 1 USD (Mar 2026)" },
  { icon: "🌡️", label: "Climate", value: "22°C avg", detail: "Eternal spring, rainy Jun–Sep" },
  { icon: "🗣️", label: "Language", value: "Spanish", detail: "Less English than CDMX" },
  { icon: "🔌", label: "Plug", value: "Type A/B", detail: "Same as US, 127V" },
  { icon: "🕐", label: "Time Zone", value: "CST", detail: "UTC−6, same as Chicago" },
  { icon: "💵", label: "Daily Budget", value: "800–2,500", detail: "MXN per day, mid-range" },
  { icon: "📱", label: "SIM Card", value: "Telcel", detail: "Buy at OXXO, ~200 MXN/month" },
];

export function QuickFacts() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-piedra-dark/50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-2">
            At a Glance
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-8">
            Quick Reference
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {facts.map((fact, i) => (
            <ScrollReveal key={fact.label} delay={i * 0.04}>
              <div className="rounded-lg border border-obsidiana/[0.06] bg-piedra p-4 hover:border-cantera/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{fact.icon}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40">
                    {fact.label}
                  </span>
                </div>
                <p className="font-heading text-lg font-bold text-obsidiana">
                  {fact.value}
                </p>
                <p className="text-xs text-obsidiana/50 mt-0.5 leading-relaxed">
                  {fact.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
