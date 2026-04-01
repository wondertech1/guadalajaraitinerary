"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TimeBlock } from "@/components/content/TimeBlock";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

export function TwoDayItinerary() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "2-Day Itinerary", href: "/2-day-guadalajara-itinerary" },
        ]}
        article={{
          headline: "2-Day Guadalajara Itinerary 2026",
          description: "The perfect weekend in Guadalajara.",
          datePublished: "2026-02-05",
          dateModified: "2026-03-14",
          url: "https://guadalajaraitinerary.com/2-day-guadalajara-itinerary",
        }}
      />

      <GuideHero
        breadcrumbLabel="2-Day Itinerary"
        kicker="Weekend"
        kickerColor="cantera"
        title="2 Days in Guadalajara"
        subtitle="The ideal weekend — landmarks and artisan culture on Day 1, Zapopan art, Colonia Americana vibes, and Chapultepec nightlife on Day 2."
        pills={["2 Days", "~2,600 MXN budget", "16 stops", "Tequila tasting included"]}
        updatedDate="Mar 2026"
        readTime="11 min"
        image="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1600&q=80"
        imageAlt="Colorful street in Tlaquepaque, Guadalajara"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Two days gives you the colonial core plus Guadalajara&apos;s
              modern side — contemporary art, the prettiest neighborhood in
              the city, and enough nightlife to understand why locals never
              want to leave. Day 1 follows our{" "}
              <Link href="/1-day-guadalajara-itinerary" className="text-cantera hover:underline">
                1-day itinerary
              </Link>{" "}
              (Centro + Tlaquepaque). Day 2 adds everything you&apos;d miss on a
              single day.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Where to stay:</strong>{" "}
            <Link href="/where-to-stay-guadalajara" className="text-agave hover:underline">
              Colonia Americana
            </Link>{" "}
            is the best base for 2 days — walkable to Day 2&apos;s highlights and
            a quick Uber to Day 1&apos;s Centro sights.
          </TipCard>
        </div>
      </section>

      {/* DAY 1 */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 1
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Centro Histórico & Tlaquepaque
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Same route as our{" "}
              <Link href="/1-day-guadalajara-itinerary" className="text-cantera/70 hover:underline">
                1-day itinerary
              </Link>{" "}
              — the essential Guadalajara highlights
            </p>
          </ScrollReveal>

          <TimeBlock time="7:30 AM" title="Birria Breakfast — Birriería Las 9 Esquinas">
            <p>
              The city&apos;s best birriería (Colón 384, esq. Galeana (9 Esquinas), Centro). Birria
              en caldo 95 MXN. Arrive by 7:30, cash only.
            </p>
          </TimeBlock>

          <TimeBlock time="9:00 AM" title="Cathedral, Palacio de Gobierno & Plazas">
            <p>
              Walk the cathedral (free), Palacio de Gobierno staircase mural (free),
              Plaza de Armas, and Rotonda de los Jaliscienses Ilustres. Allow 45
              minutes for the full circuit.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1585975421498-1e339f0e5c5b?w=800&q=80"
            alt="Guadalajara Cathedral twin spires against a blue sky in Centro Histórico"
            caption="The cathedral anchors Centro Histórico's cluster of colonial plazas"
            aspectRatio="landscape"
          />

          <TimeBlock time="10:00 AM" title="Hospicio Cabañas">
            <p>
              UNESCO site, 90 MXN entry (free Tuesdays). Orozco&apos;s Man of Fire
              is the single best thing in Guadalajara. 45–60 minutes.
            </p>
          </TimeBlock>

          <TimeBlock time="11:15 AM" title="Mercado San Juan de Dios (Quick Walk)">
            <p>
              Ground floor for 20 minutes. Skip floor 2. Optional torta ahogada
              on the third floor food court (55–70 MXN).
            </p>
          </TimeBlock>

          <TimeBlock time="12:00 PM" title="Uber to Tlaquepaque → Artisan Browsing → El Parián Lunch">
            <p>
              Uber ~65 MXN, 20 min. Browse Calle Independencia galleries, then
              lunch at El Parián — torta ahogada + one mariachi song + a beer.
              Budget 2.5 hours for Tlaquepaque total.
            </p>
          </TimeBlock>

          <TimeBlock time="3:30 PM" title="Uber Back → Rest at Hotel">
            <p>
              Head back (~65 MXN). Recharge for Day 2 — you&apos;ll want energy
              for Chapultepec&apos;s nightlife tonight. Or if you&apos;re not tired,
              walk Av. Chapultepec and grab a coffee at Café Palreal (65 MXN).
            </p>
          </TimeBlock>

          <TimeBlock time="7:30 PM" title="Light Dinner + Early Drinks on Chapultepec">
            <p>
              Save the big night for Day 2. Tonight: street tacos on Av.
              Chapultepec (5 tacos 125 MXN) and a drink or two at{" "}
              <strong>Cervecería Loba</strong> (craft pints 80–110 MXN). Early
              night — tomorrow is packed.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* DAY 2 */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 2
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Zapopan, Colonia Americana & Chapultepec Night
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Modern art, the prettiest neighborhood, a tequila tasting, and
              GDL&apos;s best nightlife corridor
            </p>
          </ScrollReveal>

          <TimeBlock time="8:30 AM" title="Breakfast — Chilaquiles at La Flor de Calabaza">
            <p>
              Colonia Americana&apos;s best brunch spot (Calle Marsella 126).
              Chilaquiles verdes 130 MXN — crispy tortilla chips in green salsa
              with cream and cheese. Arrive before 10am on weekends to avoid
              a wait.
            </p>
          </TimeBlock>

          <TimeBlock time="10:00 AM" title="Uber to Zapopan — Basílica + MAZ Museum">
            <p>
              Uber ~45 MXN, 15 min. The Basílica de Zapopan houses the city&apos;s
              most revered religious image (free, 15 min). Next door, the{" "}
              <strong>Museo de Arte de Zapopan (MAZ)</strong> is a sleek
              contemporary art museum. Entry 40 MXN. Worth 30–45 min if you
              like modern art; skip if you don&apos;t.
            </p>
          </TimeBlock>

          <TimeBlock time="11:30 AM" title="Colonia Americana Walking Tour">
            <p>
              Uber back to Av. Chapultepec and Av. de la Paz (~35 MXN). Walk
              south on Chapultepec → right on Av. de la Paz → left on Calle
              Marsella → down to Parque de la Revolución. Art Deco houses,
              independent shops, tree-canopy streets. The most Instagrammable
              45-minute walk in GDL.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
            alt="Art Deco architecture in Colonia Americana, Guadalajara with tree-lined streets"
            caption="Colonia Americana — Art Deco facades and Guadalajara's best café scene"
            aspectRatio="wide"
          />

          <TimeBlock time="12:30 PM" title="Tequila Tasting — La Tequila or Pare de Sufrir">
            <p>
              You don&apos;t need a Tequila day trip to taste well. Two in-city
              options:
              <br />
              <strong>La Tequila</strong> (Av. México 2830): Enormous tequila
              list. Order a tasting flight of 3 (blanco, reposado, añejo) for
              ~250 MXN. Pair with lunch.
              <br />
              <strong>Pare de Sufrir</strong> (Av. Chapultepec Sur 11): Better
              for raicilla and mezcal. Flight of 3 for ~250 MXN. More bar
              setting, less restaurant.
            </p>
          </TimeBlock>

          <TipCard type="local">
            <strong>Tequila tasting cheat:</strong> Always taste blanco first
            (unaged, purest agave flavor), then reposado (2–12 months oak), then
            añejo (1–3 years). Sip, don&apos;t shoot. Chase with sangrita (a
            spicy tomato-orange juice), not lime and salt — that&apos;s for
            bad tequila.
          </TipCard>

          <TimeBlock time="2:00 PM" title="Lunch at Alcalde or Tacos Providencia">
            <p>
              <strong>Splurge:</strong> Alcalde (Av. México 2903) — modern
              Mexican tasting menu, lunch ~800 MXN. Reserve ahead.
              <br />
              <strong>Budget:</strong> Tacos Providencia (Av. Providencia 2656)
              — al pastor 25 MXN each. Locals line up here. Order 5.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80"
            alt="Tequila bottles lined up at a Guadalajara distillery tasting room"
            caption="Tasting flights — blanco, reposado, and añejo from Jalisco distilleries"
            aspectRatio="landscape"
          />

          <TimeBlock time="4:00 PM" title="Nieves at Cucuruchos + Afternoon Stroll">
            <p>
              Artisan ice cream (55 MXN) in flavors like mamey, guanábana, and
              tequila. Walk the Colonia Americana side streets as the golden hour
              light hits the Art Deco facades. This is peak GDL.
            </p>
          </TimeBlock>

          <TimeBlock time="7:00 PM" title="Dinner — Pick Your Level">
            <p>
              <strong>Street:</strong> More tacos — try barbacoa this time at
              Tacos Barba near Minerva (30 MXN each).
              <br />
              <strong>Mid-range:</strong> Bruna (Calle General San Martín 34) —
              wood-fired pizzas with Mexican twists, 150–220 MXN.
              <br />
              <strong>Nice:</strong> La Tequila for the full dinner experience
              if you only did tastings at lunch. Mains 220–380 MXN.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
            alt="Craft cocktail being prepared at a Guadalajara Chapultepec bar"
            caption="Chapultepec's bar strip — 30+ spots in a 1km stretch"
            aspectRatio="square"
          />

          <TimeBlock time="9:00 PM" title="Chapultepec Night Out">
            <p>
              This is the main event. Av. Chapultepec has 30+ bars in a 1km
              stretch. Start at <strong>Anónimo Bar</strong> (cocktails 130–180
              MXN), move to <strong>La Mutualista</strong> (live music,
              no cover), and end at whatever rooftop or dance spot the night
              takes you to. The strip stays alive until 3am on weekends.
            </p>
          </TimeBlock>

          <TipCard type="money">
            <strong>Day 2 budget estimate:</strong> Breakfast 130 MXN + Uber x3
            ~115 MXN + MAZ 40 MXN + tequila tasting 250 MXN + lunch 200 MXN +
            ice cream 55 MXN + dinner 200 MXN + drinks 400 MXN ={" "}
            <strong>~1,390 MXN ($82 USD)</strong> mid-range.
          </TipCard>
        </div>
      </section>

      {/* Total Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              2-Day Budget Summary
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Category</span>
                  <span>Budget</span>
                  <span>Mid-Range</span>
                </div>
              </div>
              {[
                { cat: "Accommodation (2 nights)", budget: "900", mid: "2,800" },
                { cat: "Food & Drink (2 days)", budget: "1,100", mid: "2,200" },
                { cat: "Transport", budget: "350", mid: "500" },
                { cat: "Activities", budget: "130", mid: "380" },
              ].map((row) => (
                <div key={row.cat} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.cat}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~2,480</span>
                <span className="font-mono text-xs text-tequila">~5,880</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$146</span>
                <span className="font-mono">$346</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is 2 days enough for Guadalajara?",
            answer: "Enough for the highlights but you'll miss the Tequila day trip (which really needs its own full day). If Tequila is important, consider 3 days. 2 days gives you Centro, Tlaquepaque, Zapopan, Colonia Americana, and Chapultepec nightlife.",
          },
          {
            question: "Should I add a Tequila day trip to 2 days?",
            answer: "Only if you cut Day 2's morning activities (skip Zapopan and Colonia Americana walking). A rushed Tequila trip is less rewarding than a proper one. We recommend 3 days if Tequila is a priority.",
          },
          {
            question: "What if I arrive Friday evening?",
            answer: "Head straight to Chapultepec for dinner and drinks (Day 2's evening). Spend Saturday on Day 1 (Centro + Tlaquepaque) and Sunday morning on Day 2's highlights (Colonia Americana walking tour + brunch). Fly out Sunday afternoon.",
          },
          {
            question: "Is the Chapultepec nightlife safe?",
            answer: "Yes. The bar corridor is well-lit, well-populated, and patrolled. Standard nightlife rules apply: watch your drink, stay with your group, Uber home. See our safety guide for details.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Even shorter? Just the essentials." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Add the Tequila day trip." },
          { label: "Nightlife Guide", href: "/guadalajara-nightlife-guide", description: "The full Chapultepec bar breakdown." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Every dish, every stall, every price." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Best base for a weekend." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zone-by-zone breakdown." },
        ]}
      />

      <GuideCTA
        href="/3-day-guadalajara-itinerary"
        label="Add a Day? Read the 3-Day Itinerary"
        description="One more day gets you the Tequila trip — arguably the best part."
      />
    </>
  );
}
