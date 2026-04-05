"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

interface NeighborhoodCardProps {
  name: string;
  bestFor: string;
  priceRange: string;
  walkability: 1 | 2 | 3 | 4 | 5;
  safety: 1 | 2 | 3 | 4 | 5;
  nightlife: 1 | 2 | 3 | 4 | 5;
  vibe: string;
  accentColor: string;
  children: React.ReactNode;
}

const accentBorders: Record<string, string> = {
  cantera: "border-l-cantera",
  tequila: "border-l-tequila",
  agave: "border-l-agave",
  mariachi: "border-l-mariachi",
};

function RatingDots({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < value ? "bg-cantera" : "bg-obsidiana/10"
          }`}
        />
      ))}
    </div>
  );
}

function NeighborhoodCard({
  name,
  bestFor,
  priceRange,
  walkability,
  safety,
  nightlife,
  vibe,
  accentColor,
  children,
}: NeighborhoodCardProps) {
  return (
    <ScrollReveal>
      <div
        className={`rounded-[6px] border border-obsidiana/[0.06] ${
          accentBorders[accentColor] || "border-l-cantera"
        } border-l-[3px] bg-piedra p-5 my-6`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="font-heading text-lg font-bold text-obsidiana">{name}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-cantera bg-cantera/[0.06] px-2 py-0.5 rounded-full">
            {bestFor}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-1">Price/Night</p>
            <p className="font-mono text-sm text-obsidiana/70">{priceRange}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-1">Walkability</p>
            <RatingDots value={walkability} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-1">Safety</p>
            <RatingDots value={safety} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-1">Nightlife</p>
            <RatingDots value={nightlife} />
          </div>
        </div>

        <p className="text-xs text-obsidiana/40 italic mb-3">Vibe: {vibe}</p>

        <div className="text-sm text-obsidiana/65 leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function WhereToStay() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Where to Stay", href: "/where-to-stay-guadalajara" },
        ]}
        article={{
          headline: "Where to Stay in Guadalajara 2026",
          description: "Neighborhood guide with honest trade-offs and specific recommendations.",
          datePublished: "2026-01-12",
          dateModified: "2026-03-18",
          url: "https://guadalajaraitinerary.com/where-to-stay-guadalajara",
        }}
      />

      <GuideHero
        breadcrumbLabel="Where to Stay"
        kicker="Neighborhood Guide"
        kickerColor="mariachi"
        title="Where to Stay in Guadalajara"
        subtitle="Every neighborhood ranked with honest trade-offs. No hotel is paying us — these are real recommendations based on location, safety, and value."
        pills={["6 neighborhoods", "All budgets", "Honest trade-offs", "Zero affiliates"]}
        updatedDate="Mar 2026"
        readTime="12 min"
        image="/images/31-colonial-courtyard.jpg"
        imageAlt="Boutique hotel courtyard in Guadalajara"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara has 6 neighborhoods worth staying in, and the right
              one depends entirely on what you care about. Want to walk to
              cathedrals and markets? Centro. Want craft cocktails and brunch?
              Colonia Americana. Want peace and a pool? Providencia.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              The wrong choice won&apos;t ruin your trip — Uber rides between
              neighborhoods are 35–65 MXN — but the right choice means you can
              walk to half your itinerary.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>The quick answer:</strong> First-timers should stay in{" "}
            <strong>Colonia Americana / Chapultepec</strong>. It splits the
            difference between Centro&apos;s sights and Providencia&apos;s safety.
            Best walkability, best food scene, best nightlife. If you want
            colonial atmosphere, Centro is the move.
          </TipCard>

          {/* Quick comparison table */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mt-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Neighborhood</span>
                  <span>Best For</span>
                  <span>Budget/Night</span>
                  <span>Mid-Range/Night</span>
                </div>
              </div>
              {[
                { area: "Centro Histórico", best: "Sightseeing", budget: "350–600", mid: "900–1,800" },
                { area: "Colonia Americana", best: "First-timers ★", budget: "400–700", mid: "1,200–2,500" },
                { area: "Chapultepec", best: "Nightlife", budget: "400–650", mid: "1,000–2,200" },
                { area: "Providencia", best: "Families", budget: "—", mid: "1,500–3,000" },
                { area: "Zapopan Centro", best: "Culture + quiet", budget: "350–550", mid: "800–1,600" },
                { area: "Tlaquepaque", best: "Artisan immersion", budget: "300–500", mid: "800–1,500" },
              ].map((row) => (
                <div
                  key={row.area}
                  className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm"
                >
                  <span className="text-obsidiana/70 font-medium">{row.area}</span>
                  <span className="text-obsidiana/50 text-xs">{row.best}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-obsidiana/40 mt-2">Prices in MXN. We cross-referenced these with Booking.com listings in March 2026.</p>
          </ScrollReveal>

          <ContentImage
            src="/images/32-guadalajara-cathedral.jpg"
            alt="Colonial street in Guadalajara with colorful buildings and walkable sidewalks"
            caption="Guadalajara's walkable colonial streets make neighborhood choice crucial for your trip."
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Neighborhood Deep Dives
            </h2>
            <p className="text-sm text-obsidiana/50 mb-4">
              Ranked by our recommendation — the order we&apos;d suggest for
              most travelers
            </p>
          </ScrollReveal>

          <NeighborhoodCard
            name="Colonia Americana / Lafayette"
            bestFor="Best for first-timers"
            priceRange="400–2,500 MXN"
            walkability={5}
            safety={4}
            nightlife={5}
            vibe="Art Deco houses, tree-lined streets, coffee shops on every corner"
            accentColor="tequila"
          >
            <p>
              <strong>The recommendation for 80% of travelers.</strong> GDL&apos;s
              most walkable, photogenic neighborhood — colonial mansions converted
              into boutique hotels, independent coffee shops, and Guadalajara&apos;s
              best restaurant scene within a 10-minute walk.
            </p>
            <p>
              You&apos;re 10 minutes by Uber from Centro sights and you can walk
              to Av. Chapultepec&apos;s bars. The architecture alone makes the
              evening walk worth it. This is where digital nomads and young
              professionals live.
            </p>
            <p>
              <strong>Stay here if:</strong> You want the best balance of sights,
              food, nightlife, and walkability.
              <br />
              <strong>Skip if:</strong> You want to roll out of bed and be at the
              cathedral, or you need total quiet at night (bars nearby can be loud
              on weekends).
            </p>
            <p className="mt-2">
              <strong>Budget pick:</strong> Hostel Hospedarte Centro (450 MXN
              dorm, 900 MXN private) — rooftop terrace, social vibe.
              <br />
              <strong>Mid-range pick:</strong> Hotel Dali Plaza Ejecutivo (1,400 MXN)
              — clean, central, reliable.
              <br />
              <strong>Splurge pick:</strong> Casa Fayette (4,500+ MXN) — design
              hotel in a restored 1940s mansion, pool. GDL&apos;s best boutique
              hotel.
            </p>
          </NeighborhoodCard>

          <NeighborhoodCard
            name="Centro Histórico"
            bestFor="Best for sightseeing"
            priceRange="350–1,800 MXN"
            walkability={4}
            safety={3}
            nightlife={2}
            vibe="Colonial grandeur, busy markets, cathedral bells at 7am"
            accentColor="cantera"
          >
            <p>
              <strong>The obvious choice if sights are your priority.</strong>{" "}
              Walk to the cathedral, Hospicio Cabañas, Mercado Corona, and
              Mercado San Juan de Dios. Colonial buildings, buzzing plazas,
              and the energy of a real Mexican city center.
            </p>
            <p>
              The trade-off: Centro gets quiet (and slightly sketchy) after 9pm
              south of Av. Juárez. North of the cathedral toward San Felipe is
              fine. The area around Mercado San Juan de Dios needs awareness
              after dark but isn&apos;t dangerous with basic precautions.
            </p>
            <p>
              <strong>Stay here if:</strong> Sightseeing is your main goal and
              you don&apos;t need trendy nightlife.
              <br />
              <strong>Skip if:</strong> You want to walk home from bars at
              midnight feeling completely relaxed.
            </p>
            <p className="mt-2">
              <strong>Budget pick:</strong> Hostel Lit (380 MXN dorm) — great
              location near the cathedral, social rooftop.
              <br />
              <strong>Mid-range pick:</strong> Hotel Morales (1,500 MXN) —
              historic building, excellent location on Plaza de la Liberación.
              <br />
              <strong>Splurge pick:</strong> Hotel de Mendoza (2,200 MXN) —
              colonial charm, central courtyard, steps from the cathedral.
            </p>
          </NeighborhoodCard>

          <ContentImage
            src="/images/29-chapultepec-nightlife.jpg"
            alt="Avenida Chapultepec in Guadalajara lit up at night with bars and restaurants"
            caption="Av. Chapultepec — the nightlife corridor bordering Colonia Americana and Chapultepec."
            aspectRatio="wide"
          />

          <NeighborhoodCard
            name="Chapultepec (Av. Chapultepec Corridor)"
            bestFor="Best for nightlife"
            priceRange="400–2,200 MXN"
            walkability={4}
            safety={4}
            nightlife={5}
            vibe="Bar-lined boulevard, craft beer, late-night taco stands"
            accentColor="agave"
          >
            <p>
              Av. Chapultepec is GDL&apos;s main nightlife strip — a pedestrian-
              friendly boulevard lined with bars, restaurants, and late-night
              taco stands. Overlaps significantly with Colonia Americana (they
              share a border), but the Chapultepec side is louder and more
              bar-focused.
            </p>
            <p>
              <strong>Stay here if:</strong> Nightlife is a priority and you want
              to walk home from bars.
              <br />
              <strong>Skip if:</strong> You&apos;re a light sleeper — weekend
              noise carries until 2am on streets near the avenue.
            </p>
            <p className="mt-2">
              <strong>Budget pick:</strong> Selina Guadalajara (500 MXN dorm) —
              coworking + social, right on the strip.
              <br />
              <strong>Mid-range pick:</strong> NH Collection Guadalajara Centro
              Histórico (1,800 MXN) — reliable chain, good location.
            </p>
          </NeighborhoodCard>

          <NeighborhoodCard
            name="Providencia / Zona Real"
            bestFor="Best for families"
            priceRange="1,500–3,000 MXN"
            walkability={2}
            safety={5}
            nightlife={1}
            vibe="Quiet residential, shopping malls, clean sidewalks"
            accentColor="mariachi"
          >
            <p>
              The safest, quietest, and most suburban neighborhood on this list.
              Tree-lined residential streets, upscale restaurants, and Galerías
              Guadalajara (the main shopping mall). Zero grit, zero edge.
            </p>
            <p>
              The trade-off: you&apos;ll Uber everywhere. Nothing is walkable
              except restaurants on Av. Providencia. The vibe is &quot;affluent
              Mexican suburb,&quot; not &quot;travel destination.&quot;
            </p>
            <p>
              <strong>Stay here if:</strong> You have kids, prioritize safety
              and quiet above all, or want a pool and parking.
              <br />
              <strong>Skip if:</strong> You want to feel like you&apos;re
              actually in Guadalajara, not a generic upscale neighborhood.
            </p>
            <p className="mt-2">
              <strong>Pick:</strong> Hilton Guadalajara (2,200 MXN) — pool,
              gym, reliable. Holiday Inn Express (1,500 MXN) for budget.
            </p>
          </NeighborhoodCard>

          <NeighborhoodCard
            name="Zapopan Centro"
            bestFor="Best for culture + quiet"
            priceRange="350–1,600 MXN"
            walkability={3}
            safety={4}
            nightlife={2}
            vibe="Basilica, modern art museum, quieter colonial feel"
            accentColor="cantera"
          >
            <p>
              A separate municipality technically, but seamlessly connected to
              GDL. Zapopan&apos;s center has its own colonial charm around the
              Basílica and MAZ (contemporary art museum), without Centro&apos;s
              crowds. Good budget options, quieter streets.
            </p>
            <p>
              <strong>Stay here if:</strong> You want colonial atmosphere without
              Centro&apos;s intensity, or you&apos;re visiting MAZ/Basilica.
              <br />
              <strong>Skip if:</strong> You want walkable access to restaurants
              and bars — you&apos;ll need Uber for nightlife.
            </p>
          </NeighborhoodCard>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Colorful Tlaquepaque artisan street in Guadalajara with craft galleries"
            caption="Tlaquepaque's pedestrian streets offer a quieter, artisan-focused base."
            aspectRatio="landscape"
          />

          <NeighborhoodCard
            name="Tlaquepaque"
            bestFor="Best for artisan immersion"
            priceRange="300–1,500 MXN"
            walkability={3}
            safety={4}
            nightlife={2}
            vibe="Craft galleries, El Parián mariachi, cobblestone pedestrian streets"
            accentColor="tequila"
          >
            <p>
              If you&apos;re here primarily for artisan culture, Tlaquepaque
              puts you in the middle of it. The pedestrian streets are beautiful,
              El Parián is a 5-minute walk, and mornings are quiet before the
              day-trippers arrive from Centro.
            </p>
            <p>
              The trade-off: you&apos;re 20 minutes by Uber from Centro and
              Chapultepec. Evenings are dead after El Parián closes. It can
              feel isolated if you want urban energy.
            </p>
            <p>
              <strong>Stay here if:</strong> Tlaquepaque is your main draw and
              you want to explore it at your pace, including early mornings.
              <br />
              <strong>Skip if:</strong> You want diverse nightlife or quick
              access to Centro&apos;s sights.
            </p>
            <p className="mt-2">
              <strong>Pick:</strong> Casa del Retiro (1,200 MXN) — boutique,
              courtyard, in the heart of the artisan zone.
            </p>
          </NeighborhoodCard>
        </div>
      </section>

      {/* Booking tips */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Booking Tips
            </h2>
          </ScrollReveal>

          <TipCard type="money">
            <strong>We recommend Booking.com over Airbnb.</strong> Guadalajara&apos;s
            hotel prices are so low that Airbnbs rarely offer savings after
            cleaning fees. A decent hotel room runs 900–1,500 MXN ($53–88 USD)
            per night. Airbnbs average the same but with less consistency.
          </TipCard>

          <TipCard type="tip">
            <strong>Fiestas de Octubre (October):</strong> Prices jump 30–50%
            and popular hotels sell out weeks ahead. We recommend booking 3+ weeks in advance
            if visiting October. Similarly, Christmas/New Year and Semana Santa
            (March/April) spike prices. We update this section quarterly.
          </TipCard>

          <ContentImage
            src="/images/37-colonial-church.jpg"
            alt="Rooftop view of Guadalajara city skyline at sunset"
            caption="Many mid-range hotels offer rooftop terraces with sweeping city views."
            aspectRatio="wide"
          />

          <TipCard type="local">
            <strong>Ask for &quot;tarifa nacional&quot;</strong> at smaller hotels
            if you speak Spanish — some offer lower rates for domestic/Latin
            American travelers. Won&apos;t work at chains, but boutique hotels
            and hostels sometimes offer 15–20% off their listed price.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "What's the safest area to stay in Guadalajara?",
            answer:
              "Providencia is the safest (affluent residential). Colonia Americana and Chapultepec are safe and much more interesting. Centro is safe during the day and mostly fine at night, with more awareness needed south of Av. Juárez after 9pm.",
          },
          {
            question: "Should I stay in Centro or Colonia Americana?",
            answer:
              "Colonia Americana for most people. It's walkable, safe, has great food and nightlife, and you're a 10-minute Uber from Centro sights. Stay in Centro only if sightseeing is your sole priority and you don't care about nightlife.",
          },
          {
            question: "How much does accommodation cost in Guadalajara?",
            answer:
              "Budget hostels: 350–600 MXN ($20–35 USD). Mid-range hotels: 900–2,000 MXN ($53–118 USD). Boutique/luxury: 2,500–5,000+ MXN ($147–294+ USD). GDL is significantly cheaper than Mexico City or resort destinations.",
          },
          {
            question: "Is Airbnb or hotels better in Guadalajara?",
            answer:
              "Hotels, in most cases. Hotel prices are so competitive that Airbnbs rarely save money after cleaning fees. Hotels also provide reception desks (helpful for package deliveries and Uber coordination) and daily cleaning. Airbnbs make sense only for groups of 4+ or stays longer than 2 weeks.",
          },
          {
            question: "Do I need a car if I stay outside Centro?",
            answer:
              "No. Uber is everywhere, cheap (35–65 MXN between neighborhoods), and faster than driving yourself (parking in Centro and Chapultepec is painful). The Mi Macro Periférico bus line is also excellent for longer distances.",
          },
          {
            question: "Is Tlaquepaque too far from everything?",
            answer:
              "It's 20 minutes by Uber from Centro (65 MXN). Not ideal as a base for 1-2 days, but fine for 3+ days when you want a slower pace. You'll spend 130 MXN round-trip each time you visit Centro, which adds up.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "See how neighborhoods fit into a 3-day plan." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Transport between neighborhoods explained." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zone-by-zone safety breakdown." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Full daily cost breakdowns." },
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "Deep dive into the historic center." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "The nightlife corridor explained." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
