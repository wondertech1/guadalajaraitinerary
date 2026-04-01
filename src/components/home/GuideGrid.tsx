"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { getGuidesByCategory } from "@/lib/constants/guides";

const categories = [
  {
    key: "itinerary" as const,
    label: "Itineraries",
    color: "cantera",
    icon: "🗓️",
  },
  {
    key: "planning" as const,
    label: "Planning",
    color: "mariachi",
    icon: "🧭",
  },
  {
    key: "food" as const,
    label: "Food & Drink",
    color: "tequila",
    icon: "🌮",
  },
  {
    key: "neighborhood" as const,
    label: "Neighborhoods",
    color: "agave",
    icon: "🏘️",
  },
  {
    key: "day-trip" as const,
    label: "Day Trips",
    color: "cantera",
    icon: "🚐",
  },
  {
    key: "audience" as const,
    label: "Trip Types",
    color: "mariachi",
    icon: "👥",
  },
];

const awningColors: Record<string, string> = {
  cantera: "bg-cantera",
  mariachi: "bg-mariachi",
  tequila: "bg-tequila",
  agave: "bg-agave",
};

const dotColors: Record<string, string> = {
  cantera: "bg-cantera/30",
  mariachi: "bg-mariachi/30",
  tequila: "bg-tequila/30",
  agave: "bg-agave/30",
};

export function GuideGrid() {
  return (
    <section id="guides" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-2">
            All Guides
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-10">
            Everything You Need for Guadalajara
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => {
            const guides = getGuidesByCategory(cat.key);
            if (guides.length === 0) return null;

            return (
              <ScrollReveal key={cat.key} delay={ci * 0.06}>
                <div className="rounded-lg border border-obsidiana/[0.06] bg-piedra overflow-hidden">
                  {/* Awning header */}
                  <div
                    className={`${awningColors[cat.color]} px-4 py-2.5 flex items-center gap-2`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-piedra/90">
                      {cat.label}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-piedra/50">
                      {guides.length}
                    </span>
                  </div>

                  {/* Guide list */}
                  <div className="p-3 space-y-0.5">
                    {guides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-obsidiana/[0.03] transition-colors"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${dotColors[cat.color]} shrink-0`}
                        />
                        <span className="text-sm text-obsidiana/70 group-hover:text-cantera transition-colors">
                          {guide.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
