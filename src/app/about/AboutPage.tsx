"use client";

import Link from "next/link";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StructuredData } from "@/components/seo/StructuredData";

export function AboutPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 bg-obsidiana">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-3">
            About Us
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-piedra leading-tight mb-4">
            We&apos;re the Guadalajara Itinerary team.
          </h1>
          <p className="text-base sm:text-lg text-piedra/60 leading-relaxed">
            A small editorial team that researches, writes, and maintains
            Guadalajara travel guides — part of a network covering{" "}
            <span className="text-piedra/80">28 cities</span> across Asia,
            Europe, and the Americas.
          </p>
        </div>
      </section>

      <CanteraDivider className="my-0" />

      {/* Who We Are */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Who We Are
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base text-obsidiana/65 leading-relaxed mb-4">
              We&apos;re a distributed team of researchers and writers behind{" "}
              <a href="https://itine.ai" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">
                itine.ai
              </a>
              , a travel guide platform covering cities like{" "}
              <a href="https://tokyoitine.com" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">Tokyo</a>,{" "}
              <a href="https://nycitine.com" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">New York</a>,{" "}
              <a href="https://pragueitinerary.com" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">Prague</a>,{" "}
              <a href="https://osakaitinerary.com" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">Osaka</a>, and{" "}
              <a href="https://mexicocityitinerary.com" className="text-cantera hover:underline" target="_blank" rel="noopener noreferrer">Mexico City</a>.
              Guadalajara Itinerary is one of our city-specific sites.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base text-obsidiana/65 leading-relaxed mb-4">
              Our Guadalajara content is compiled from on-the-ground research,
              local contacts in Jalisco, traveler feedback, and cross-referencing
              with Spanish-language sources that English guides typically miss.
              We verify prices, routes, and opening hours on a rolling basis —
              the &quot;Updated&quot; date on each guide reflects the last
              verification pass.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base text-obsidiana/65 leading-relaxed">
              We don&apos;t pretend every team member has walked every block.
              We&apos;re transparent about our process: research-driven guides
              verified by people who know the city, not fabricated
              first-person narratives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-3">
              Part of a Larger Network
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              We apply the same research methodology across all our city guides.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Tokyo", href: "https://tokyoitine.com" },
                { name: "NYC", href: "https://nycitine.com" },
                { name: "Prague", href: "https://pragueitinerary.com" },
                { name: "Osaka", href: "https://osakaitinerary.com" },
                { name: "Kyoto", href: "https://kyotoitinerary.com" },
                { name: "Mexico City", href: "https://mexicocityitinerary.com" },
                { name: "Oaxaca", href: "https://oaxacaitinerary.com" },
                { name: "Lisbon", href: "https://lisbonitinerary.com" },
                { name: "Porto", href: "https://portoitinerary.com" },
                { name: "Vienna", href: "https://viennaitinerary.com" },
                { name: "Krakow", href: "https://krakowitinerary.com" },
                { name: "Istanbul", href: "https://istanbulitinerary.com" },
                { name: "Goa", href: "https://goaitinerary.com" },
                { name: "Delhi", href: "https://delhiitinerary.com" },
                { name: "Jaipur", href: "https://jaipuritinerary.com" },
              ].map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-1.5 rounded-full border border-obsidiana/10 text-xs text-obsidiana/60 hover:text-cantera hover:border-cantera/30 transition-colors"
                >
                  {city.name}
                </a>
              ))}
              <span className="inline-flex px-3 py-1.5 text-xs text-obsidiana/40">
                + 13 more cities
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              How We Research
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Local Sources First",
                description: "We cross-reference with Spanish-language forums, local Jalisco news, and contacts in Guadalajara. English-language travel blogs are secondary sources, not primary ones.",
                color: "border-t-agave",
              },
              {
                title: "Prices Verified Quarterly",
                description: "MXN prices are checked against current menus, Google Maps listings, and traveler reports every 3 months. When prices drift, we update the guides.",
                color: "border-t-tequila",
              },
              {
                title: "Negative Verdicts Included",
                description: "\"Skip it\" means we assessed it and it wasn't worth the time or money. We don't soften verdicts to avoid offending businesses — this site exists for travelers, not operators.",
                color: "border-t-cantera",
              },
              {
                title: "Zero Sponsorships",
                description: "No restaurant, hotel, tour company, or distillery pays for placement. If we add affiliate links in the future, they'll be clearly labeled. Recommendations are based on quality.",
                color: "border-t-mariachi",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.06}>
                <div
                  className={`rounded-[6px] border border-obsidiana/[0.06] border-t-[3px] ${card.color} bg-piedra p-5 h-full`}
                >
                  <h3 className="font-heading text-base font-bold text-obsidiana mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-obsidiana/55 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Get in Touch
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base text-obsidiana/65 leading-relaxed mb-4">
              Found an outdated price? A closed restaurant? A better birria
              spot we missed? We rely on traveler feedback to keep these
              guides accurate.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-5">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-obsidiana/40 w-24 shrink-0 pt-0.5">Email</span>
                  <a href="mailto:hello@guadalajaraitinerary.com" className="text-sm text-cantera hover:underline">
                    hello@guadalajaraitinerary.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-obsidiana/40 w-24 shrink-0 pt-0.5">Platform</span>
                  <a href="https://itine.ai" className="text-sm text-cantera hover:underline" target="_blank" rel="noopener noreferrer">
                    itine.ai
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-obsidiana/40 w-24 shrink-0 pt-0.5">Corrections</span>
                  <span className="text-sm text-obsidiana/60">
                    If a price or detail is wrong, email us. We typically update within 48 hours.
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-3">
              Start Planning
            </h2>
            <p className="text-sm text-obsidiana/55 mb-6 max-w-md mx-auto">
              The 3-day itinerary is the best place to start — it covers the
              highlights and links to every specialized guide.
            </p>
            <Link
              href="/3-day-guadalajara-itinerary"
              className="inline-flex px-6 py-3 rounded-lg bg-cantera text-piedra font-body text-sm font-medium hover:bg-cantera-dark transition-colors"
            >
              Read the 3-Day Itinerary →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
