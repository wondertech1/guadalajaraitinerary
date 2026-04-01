"use client";

import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

interface MonthCardProps {
  month: string;
  temp: string;
  rain: string;
  crowds: string;
  verdict: "best" | "good" | "ok" | "avoid";
  events?: string;
  children: React.ReactNode;
}

const verdictStyles = {
  best: { label: "Best", color: "text-agave bg-agave/10 border-agave/20" },
  good: { label: "Good", color: "text-tequila bg-tequila/10 border-tequila/20" },
  ok: { label: "OK", color: "text-obsidiana/50 bg-obsidiana/[0.04] border-obsidiana/10" },
  avoid: { label: "Avoid", color: "text-cantera bg-cantera/10 border-cantera/20" },
};

function MonthCard({ month, temp, rain, crowds, verdict, events, children }: MonthCardProps) {
  const v = verdictStyles[verdict];
  return (
    <div className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="font-heading text-base font-bold text-obsidiana">{month}</h3>
        <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${v.color}`}>
          {v.label}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2 font-mono text-[11px] text-obsidiana/40">
        <span>🌡️ {temp}</span>
        <span>🌧️ {rain}</span>
        <span>👥 {crowds}</span>
      </div>
      {events && (
        <p className="text-xs text-tequila mb-2 font-mono">🎉 {events}</p>
      )}
      <div className="text-sm text-obsidiana/60 leading-relaxed">{children}</div>
    </div>
  );
}

export function BestTimeToVisit() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Best Time to Visit", href: "/best-time-to-visit-guadalajara" },
        ]}
        article={{
          headline: "Best Time to Visit Guadalajara 2026",
          description: "Month-by-month weather, crowds, prices, and festivals.",
          datePublished: "2026-02-21",
          dateModified: "2026-03-08",
          url: "https://guadalajaraitinerary.com/best-time-to-visit-guadalajara",
        }}
      />

      <GuideHero
        breadcrumbLabel="Best Time to Visit"
        kicker="Planning"
        kickerColor="tequila"
        title="Best Time to Visit Guadalajara"
        subtitle="Month-by-month breakdown with weather, crowd levels, prices, and festivals. The short answer: October–December. The long answer is below."
        pills={["12 months compared", "Festival calendar", "Price trends", "Real verdicts"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1600&q=80"
        imageAlt="Guadalajara plaza with jacaranda trees in bloom"
      />

      <CanteraDivider className="my-0" />

      {/* Quick Answer */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Quick Answer
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              <strong>October–December</strong> is the sweet spot. The rainy
              season just ended, the air is fresh, temperatures are perfect
              (22–26°C), and the Fiestas de Octubre — a month-long festival with free
              concerts, the Encuentro Internacional del Mariachi, charrería
              shows, and food stalls — transform the city into one giant party.
              November–December add the Día de Muertos and Christmas atmosphere.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              <strong>March–May</strong> is the second-best window — dry and
              warm, with jacaranda trees blooming purple across the city in
              March. It gets hot (30°C+) by May.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&q=80"
            alt="Colorful Guadalajara plaza with clear blue skies during dry season"
            caption="October through May offers clear skies and ideal weather for exploring Guadalajara."
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Guadalajara has two seasons:</strong> Dry (October–May) and
            rainy (June–September). The rainy season doesn&apos;t mean constant
            rain — mornings are clear, with heavy afternoon showers at 3–5pm
            that last 1–2 hours. You can still travel during rainy season; just
            plan indoor activities for afternoon.
          </TipCard>
        </div>
      </section>

      {/* Month by Month */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              Month by Month
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80"
            alt="Street food vendor in Guadalajara preparing tacos during festival season"
            caption="Fiestas de Octubre (October) transforms Guadalajara into a month-long celebration."
            aspectRatio="wide"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ScrollReveal delay={0.0}><MonthCard month="January" temp="12–24°C" rain="Minimal" crowds="Low–Med" verdict="good">
              Post-holiday calm. Cool mornings, warm afternoons. Good prices after the Christmas spike. Clear skies.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.04}><MonthCard month="February" temp="13–26°C" rain="Minimal" crowds="Low" verdict="good">
              Driest month. Warming up. Low crowds, good deals. The FICG (film festival) sometimes falls in Feb/Mar.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.08}><MonthCard month="March" temp="14–28°C" rain="Minimal" crowds="Medium" verdict="good" events="Jacaranda bloom, Semana Santa (variable)">
              Jacarandas bloom purple across the city — stunning. Semana Santa (Holy Week) can spike prices and crowds if it falls in March. Book ahead.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.12}><MonthCard month="April" temp="16–31°C" rain="Low" crowds="Med (Semana Santa)" verdict="good" events="Semana Santa (variable)">
              Getting warmer. If Semana Santa falls here, expect 30–50% price jumps and fully booked hotels for that week. Otherwise, pleasant and manageable.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.16}><MonthCard month="May" temp="18–33°C" rain="Starting" crowds="Low" verdict="ok">
              Hottest month. 33°C peaks, humidity building. First rains start late May. Low crowds and prices compensate. Drink more water than you think.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.20}><MonthCard month="June" temp="18–30°C" rain="Heavy" crowds="Low" verdict="ok">
              Full rainy season begins. Daily afternoon downpours 3–5pm. Mornings are clear and fresh. Lowest prices of the year. Lush green landscape.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.24}><MonthCard month="July" temp="17–28°C" rain="Heavy" crowds="Low" verdict="ok">
              Peak rain. Afternoons are reliably wet. Temperature actually drops — pleasant if you don&apos;t mind planning around rain. Flash flooding can disrupt traffic.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.28}><MonthCard month="August" temp="17–28°C" rain="Heavy" crowds="Low" verdict="avoid">
              Heaviest rain month. Some flooding risk. Outdoor day trips (Tequila, Guachimontones) can be disrupted. Best avoided unless budget is the only priority.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.32}><MonthCard month="September" temp="17–27°C" rain="Heavy → tapering" crowds="Low" verdict="ok" events="Independence Day (Sep 15–16)">
              Rain starts tapering mid-month. Independence Day celebrations Sep 15–16 are festive — fireworks, live music in plazas, patriotic energy. Worth timing for.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.36}><MonthCard month="October" temp="16–27°C" rain="Ending" crowds="Medium" verdict="best" events="Fiestas de Octubre (month-long), Romería Oct 12">
              The best month. Rain stops, air is fresh, the month-long Fiestas de Octubre transform the city. Centered on the Auditorio Benito Juárez fairgrounds, the festival features free concerts, the Encuentro Internacional del Mariachi (the world&apos;s premier mariachi competition), charrería (Mexican rodeo) exhibitions, regional food stalls, and nightly entertainment. The Romería de la Virgen de Zapopan (Oct 12) draws over a million pilgrims — one of Mexico&apos;s largest religious processions. Book 3+ weeks ahead.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.40}><MonthCard month="November" temp="13–26°C" rain="Minimal" crowds="Medium" verdict="best" events="Día de Muertos (Nov 1–2)">
              Perfect weather. Día de Muertos celebrations with altars, marigolds, and cemetery visits. Not as elaborate as Oaxaca&apos;s, but genuine and less touristy. Great month.
            </MonthCard></ScrollReveal>

            <ScrollReveal delay={0.44}><MonthCard month="December" temp="11–24°C" rain="Minimal" crowds="High" verdict="best" events="Christmas, New Year, posadas">
              Cool and festive. Posadas (pre-Christmas processions) fill the streets mid-Dec. Christmas and New Year spike hotel prices 40–60%. Book well ahead. The atmosphere is worth the premium.
            </MonthCard></ScrollReveal>
          </div>
        </div>
      </section>

      {/* Seasonal Summary */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Price Seasons
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Season</span>
                  <span>Months</span>
                  <span>Hotel Price Impact</span>
                </div>
              </div>
              {[
                { season: "Peak", months: "Dec 15–Jan 5, Semana Santa", impact: "+40–60%" },
                { season: "High", months: "Oct, Nov, Mar", impact: "+10–20%" },
                { season: "Shoulder", months: "Jan–Feb, Apr, May, Sep", impact: "Baseline" },
                { season: "Low", months: "Jun–Aug", impact: "−15–30%" },
              ].map((row) => (
                <div key={row.season} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium">{row.season}</span>
                  <span className="text-obsidiana/50 text-xs">{row.months}</span>
                  <span className="font-mono text-xs text-cantera">{row.impact}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
            alt="Boutique hotel courtyard in Guadalajara showing accommodation options"
            caption="Hotel prices fluctuate significantly by season — January and February offer the best deals."
            aspectRatio="landscape"
          />

          <TipCard type="money">
            <strong>Best value sweet spot:</strong> Late January or February.
            Post-holiday calm, dry weather, low crowds, baseline prices. You
            miss the festivals but save 20–40% vs peak season.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1585975421498-1e339f0e5c5b?w=800&q=80"
            alt="Colonial Guadalajara street in dry season with pleasant walking weather"
            caption="March through May brings warm, dry weather and blooming jacaranda trees across the city."
            aspectRatio="wide"
          />
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "What's the best month to visit Guadalajara?", answer: "October. Perfect weather, Fiestas de Octubre celebrations, and the Romería pilgrimage (Oct 12). November is a close second with Día de Muertos." },
          { question: "Is rainy season really that bad?", answer: "Not terrible — mornings are clear, rain hits 3-5pm for 1-2 hours, then stops. You can absolutely travel June-September; just plan outdoor activities for morning and indoor (markets, museums, restaurants) for afternoon. Prices are 15-30% lower." },
          { question: "When is it cheapest to visit?", answer: "June-August (rainy season). Flights and hotels are at their lowest. January-February is the best balance of good weather AND reasonable prices." },
          { question: "Does Guadalajara get cold?", answer: "Not really. December-January nights can drop to 5-10°C — you'll want a jacket for evenings. Daytime stays 20-25°C year-round. It never freezes in the city." },
          { question: "When should I avoid visiting?", answer: "August if you dislike rain — it's the wettest month. The week of Semana Santa and Dec 20-Jan 5 if you're on a tight budget — prices spike significantly." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Plan your trip dates." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Book accommodation." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Seasonal cost planning." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Season-specific safety notes." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Seasonal specialties." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Best during harvest (Oct–Nov)." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
