"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { emoji: "📍", label: "28 Guides" },
  { emoji: "🥃", label: "Tequila Tested" },
  { emoji: "💰", label: "Real MXN Prices" },
  { emoji: "🔄", label: "Updated Mar 2026" },
];

export function PortalHero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Subtle cantera texture overlay */}
      <div className="absolute inset-0 cantera-texture" />

      {/* Colonnade pattern — architectural feel */}
      <div className="absolute inset-0 colonnade-pattern opacity-40" />

      {/* Large watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-heading font-bold text-[18vw] leading-none text-cantera/[0.03] tracking-tight">
          GDL
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center pt-20 pb-16">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-cantera mb-4"
        >
          Jalisco, Mexico — Honest Travel Guides
        </motion.p>

        {/* Title with arch reveal animation */}
        <motion.h1
          initial={{ clipPath: "inset(0 50% 0 50%)" }}
          animate={{ clipPath: "inset(0 0% 0 0%)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-obsidiana leading-[0.95] mb-6"
        >
          Guadalajara
          <span className="block text-cantera">Itinerary</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg sm:text-xl text-obsidiana/60 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Stop-by-stop itineraries with real prices, opinionated verdicts, and
          the stuff guidebooks skip. Birria at 7am, mezcal by midnight.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.span
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0 + i * 0.08 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidiana/[0.04] border border-obsidiana/[0.06] font-mono text-[11px] text-obsidiana/60"
            >
              <span>{stat.emoji}</span>
              {stat.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/3-day-guadalajara-itinerary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cantera text-piedra font-body text-sm font-medium hover:bg-cantera-dark transition-colors duration-200"
          >
            Start with 3 Days
            <span className="text-xs opacity-70">★ Most popular</span>
          </Link>
          <Link
            href="/#guides"
            className="inline-flex items-center gap-1 px-4 py-3 text-sm text-obsidiana/60 hover:text-cantera font-body transition-colors"
          >
            Browse all guides →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-cantera/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
