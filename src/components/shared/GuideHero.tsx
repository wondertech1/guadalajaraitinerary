"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";

interface GuideHeroProps {
  breadcrumbLabel: string;
  kicker?: string;
  kickerColor?: string;
  title: string;
  subtitle?: string;
  pills?: string[];
  updatedDate?: string;
  readTime?: string;
  image: string;
  imageAlt: string;
}

const kickerColors: Record<string, string> = {
  cantera: "text-cantera",
  tequila: "text-tequila",
  agave: "text-agave",
  mariachi: "text-mariachi",
};

export function GuideHero({
  breadcrumbLabel,
  kicker,
  kickerColor = "cantera",
  title,
  subtitle,
  pills,
  updatedDate,
  readTime,
  image,
  imageAlt,
}: GuideHeroProps) {
  return (
    <section className="relative">
      {/* Image */}
      <div className="relative h-[220px] sm:h-[320px] md:h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidiana/60 via-obsidiana/20 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-6 md:pb-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: breadcrumbLabel, href: "#" },
              ]}
              light
            />

            {kicker && (
              <p
                className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                  kickerColors[kickerColor] || "text-cantera"
                } mt-3`}
              >
                {kicker}
              </p>
            )}

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-piedra mt-1 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-sm sm:text-base text-piedra/75 mt-2 max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* Pills + meta */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {pills?.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex px-2.5 py-1 rounded-full border border-piedra/20 font-mono text-[10px] text-piedra/70"
                >
                  {pill}
                </span>
              ))}
              {updatedDate && (
                <span className="font-mono text-[10px] text-piedra/50">
                  Prices verified {updatedDate}
                </span>
              )}
              {readTime && (
                <span className="font-mono text-[10px] text-piedra/50">
                  · {readTime} read
                </span>
              )}
              <span className="font-mono text-[10px] text-piedra/40">
                · Prices may vary
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
