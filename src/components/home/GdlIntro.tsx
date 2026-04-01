"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function GdlIntro() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-3">
            Why Guadalajara
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-obsidiana mb-6 leading-tight">
            Mexico&apos;s most underrated city isn&apos;t trying to impress you.
            That&apos;s the point.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
            Everyone flies to Mexico City or Cancún. Meanwhile, Guadalajara sits
            there being the birthplace of mariachi, tequila, and birria — three
            of Mexico&apos;s greatest exports — without putting on a show for
            tourists. The streets of Tlaquepaque have more craft galleries per
            block than most cities have total. The food markets haven&apos;t
            been sanitized for Instagram. And a tequila distillery tour here
            costs a fraction of what you&apos;d pay in a resort town.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-6">
            These guides are built from actual trips — verified prices, tested
            routes, and unfiltered opinions. If a tourist trap wastes your time,
            we&apos;ll say so. If a 40-peso taco stand changes your life,
            we&apos;ll give you the exact address.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cantera hover:text-cantera-dark transition-colors"
          >
            About this guide
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
