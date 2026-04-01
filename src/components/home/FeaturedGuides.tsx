"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { guideLinks } from "@/lib/constants/guides";

const accentMap: Record<string, string> = {
  cantera: "border-t-cantera",
  tequila: "border-t-tequila",
  agave: "border-t-agave",
  mariachi: "border-t-mariachi",
};

const featured = guideLinks.find((g) => g.href === "/3-day-guadalajara-itinerary")!;
const secondary = [
  guideLinks.find((g) => g.href === "/tequila-day-trip")!,
  guideLinks.find((g) => g.href === "/guadalajara-food-guide")!,
  guideLinks.find((g) => g.href === "/where-to-stay-guadalajara")!,
  guideLinks.find((g) => g.href === "/centro-historico-guide")!,
  guideLinks.find((g) => g.href === "/guadalajara-safety-tips")!,
  guideLinks.find((g) => g.href === "/tlaquepaque-guide")!,
];

export function FeaturedGuides() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-piedra-dark/50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-2">
            Start Here
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-8">
            Most Popular Guides
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Primary featured card */}
          <ScrollReveal delay={0.1}>
            <Link href={featured.href} className="group block">
              <div className="relative rounded-lg overflow-hidden border border-obsidiana/[0.06] bg-piedra">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidiana/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-tequila/90 font-mono text-[10px] uppercase text-obsidiana mb-2">
                      {featured.kicker}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-piedra">
                      {featured.label}
                    </h3>
                    <p className="text-sm text-piedra/80 mt-1">
                      {featured.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Secondary cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {secondary.map((guide, i) => (
              <ScrollReveal key={guide.href} delay={0.15 + i * 0.05}>
                <Link href={guide.href} className="group block h-full">
                  <div
                    className={`h-full rounded-lg border-t-[3px] ${
                      accentMap[guide.accentColor] || "border-t-cantera"
                    } border border-obsidiana/[0.06] bg-piedra p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
                  >
                    <p className="font-heading text-sm font-bold text-obsidiana mb-1 group-hover:text-cantera transition-colors">
                      {guide.label}
                    </p>
                    <p className="text-xs text-obsidiana/50 leading-relaxed line-clamp-2">
                      {guide.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
