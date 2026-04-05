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

export function SevenDayItinerary() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "7-Day Itinerary", href: "/7-day-guadalajara-itinerary" },
        ]}
        article={{
          headline: "7-Day Guadalajara Itinerary 2026",
          description: "The complete Guadalajara experience in one full week.",
          datePublished: "2026-02-14",
          dateModified: "2026-03-16",
          url: "https://guadalajaraitinerary.com/7-day-guadalajara-itinerary",
        }}
      />

      <GuideHero
        breadcrumbLabel="7-Day Itinerary"
        kicker="Full Week"
        kickerColor="mariachi"
        title="One Week in Guadalajara"
        subtitle="The complete experience — every day trip, every neighborhood, time to slow down, and enough birria to last a lifetime. This is the definitive Guadalajara trip."
        pills={["7 Days", "~10,500 MXN budget", "40+ stops", "3 day trips"]}
        updatedDate="Mar 2026"
        readTime="18 min"
        image="/images/38-guachimontones-aerial.jpg"
        imageAlt="Guachimontones circular pyramids at sunset"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              A full week lets you see everything Guadalajara has to offer
              without ever rushing. Three day trips (Tequila, Lago de Chapala,
              Guachimontones or Mazamitla), deep dives into every neighborhood,
              and built-in slow days where you eat, wander, and live like a
              tapatío.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              Days 1–5 follow our{" "}
              <Link href="/5-day-guadalajara-itinerary" className="text-cantera hover:underline">
                5-day itinerary
              </Link>
              . Days 6 and 7 add a third day trip and a proper farewell day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Days 1-5 Summary */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Days 1–5 Recap
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              The 5-Day Foundation
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Centro Histórico & Tlaquepaque", highlights: "Birria, Cathedral, Hospicio Cabañas, Mercado, Tlaquepaque galleries, El Parián" },
                { day: "Day 2", title: "Tequila Day Trip", highlights: "Agave fields, Destilería La Fortaleza, Tequila town, optional Guachimontones" },
                { day: "Day 3", title: "Zapopan & Colonia Americana", highlights: "Basílica, MAZ museum, Art Deco walking tour, coffee culture, Plaza de los Mariachis" },
                { day: "Day 4", title: "Lago de Chapala & Ajijic", highlights: "Chapala malecón, Ajijic galleries, lakeside lunch, pescado blanco" },
                { day: "Day 5", title: "Tonalá Market", highlights: "Thursday/Sunday tianguis, blown glass workshops, artisan shopping, Mercado Corona gifts" },
              ].map((d) => (
                <div key={d.day} className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cantera">{d.day}</span>
                    <span className="font-heading text-sm font-bold text-obsidiana">{d.title}</span>
                  </div>
                  <p className="text-xs text-obsidiana/50">{d.highlights}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex gap-3 mt-4">
              <Link href="/3-day-guadalajara-itinerary" className="text-sm text-cantera hover:underline">
                Days 1–3 details →
              </Link>
              <Link href="/5-day-guadalajara-itinerary" className="text-sm text-cantera hover:underline">
                Days 4–5 details →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DAY 6 */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 6
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Guachimontones or Mazamitla
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              Pick your adventure — ancient circular pyramids or a mountain
              pueblo mágico
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Choose based on your interests:</strong>
            <br />
            <strong>Guachimontones</strong> — if you like archaeology, unique
            historical sites, or skipped it on Day 2. Combine with a second
            Tequila visit.
            <br />
            <strong>Mazamitla</strong> — if you want mountains, pine forests,
            cool weather, and a contrast to the city heat. Best Nov–Mar when
            it&apos;s crisp and cabins have fireplaces.
          </TipCard>

          <ScrollReveal>
            <h3 className="font-heading text-xl font-bold text-obsidiana mt-8 mb-4">
              Option A: Guachimontones
            </h3>
          </ScrollReveal>

          <TimeBlock time="8:00 AM" title="Drive to Guachimontones (75 min)">
            <p>
              Uber or hired driver to the archaeological site near Teuchitlán,
              ~300 MXN one way. Or combine with Tequila town (30 min from
              Tequila). Entry: 60 MXN. The site opens at 9am.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/38-guachimontones-aerial.jpg"
            alt="Guachimontones circular pyramids archaeological site near Guadalajara, Jalisco"
            caption="Guachimontones — the only circular pyramids in Mesoamerica"
            aspectRatio="wide"
          />

          <TimeBlock time="9:30 AM" title="The Circular Pyramids">
            <p>
              These are unique in all of Mesoamerica — circular stepped pyramids
              built by the Teuchitlán tradition (300 BCE–900 CE). No other
              pre-Columbian site in Mexico has this shape. The main pyramid
              (Circle 1) is impressive, and the hilltop views of the surrounding
              valley and lake are stunning. Budget 90 minutes at the site, plus
              30 min at the small museum near the entrance.
            </p>
            <p>
              <strong>The reality:</strong> If you&apos;ve been to Teotihuacán
              or Chichén Itzá, Guachimontones is smaller and less dramatic. But
              the circular form is genuinely unique, the setting is beautiful,
              and there are zero crowds. It&apos;s not a must-see but it&apos;s
              a rewarding half-day.
            </p>
          </TimeBlock>

          <TimeBlock time="12:00 PM" title="Lunch in Teuchitlán or Tequila">
            <p>
              The tiny town of Teuchitlán at the base has a few restaurants on
              the lakeshore — basic but scenic. Or drive 30 min to Tequila for
              lunch at La Antigua Casona (mains 120–200 MXN) and a second
              distillery visit if you want.
            </p>
          </TimeBlock>

          <ScrollReveal>
            <h3 className="font-heading text-xl font-bold text-obsidiana mt-10 mb-4">
              Option B: Mazamitla
            </h3>
          </ScrollReveal>

          <TimeBlock time="8:00 AM" title="Drive to Mazamitla (2 hrs)">
            <p>
              Longer drive (~130 km south), best with a hired driver or rental
              car. Buses run from Central Nueva (150 MXN, 2.5 hrs). The drive
              climbs through pine forests — a dramatic change from the GDL
              plateau.
            </p>
          </TimeBlock>

          <TimeBlock time="10:30 AM" title="Pueblo Mágico Village">
            <p>
              Mazamitla is a designated <em>Pueblo Mágico</em> — a small mountain
              town at 2,200m with wooden-balcony houses, a central plaza, and a
              vibe closer to a Swiss village than anything else in Jalisco. Walk
              the town in 30 minutes. Browse the artisan shops for wool textiles
              and pine-scented candles.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/06-cabin-pine-forest.jpg"
            alt="Mountain town surrounded by pine forests in Jalisco, Mexico"
            caption="Mazamitla — a mountain pueblo mágico with pine forests and cool air"
            aspectRatio="landscape"
          />

          <TimeBlock time="11:30 AM" title="Hiking or Horseback Riding">
            <p>
              Several short hikes start from town — the cascade trails (1–2 hrs
              round trip, moderate) are the most popular. Horseback riding tours
              through the pine forest run ~300 MXN per hour. The air here is
              noticeably cooler and fresher than GDL.
            </p>
          </TimeBlock>

          <TimeBlock time="1:00 PM" title="Lunch — Mountain Comfort Food">
            <p>
              Try <em>bote</em> (a stew cooked in a giant pot with multiple
              meats and vegetables, served communal-style) — it&apos;s Mazamitla&apos;s
              signature dish, 120–180 MXN. Also excellent: trout from mountain
              streams and hot ponche (fruit punch) with piloncillo sugar.
            </p>
          </TimeBlock>

          <TimeBlock time="3:00 PM" title="Return to GDL">
            <p>
              Head back (~2 hrs). You&apos;ll arrive around 5pm, in time for a
              relaxed evening. If you rented a cabin overnight (600–1,500 MXN),
              stay the night and return Day 7 morning.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* DAY 7 */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 7
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              The Slow Farewell
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              No agenda. Revisit favorites, fill gaps, and say goodbye properly.
            </p>
          </ScrollReveal>

          <TimeBlock time="8:00 AM" title="Final Birria (You Know Where)">
            <p>
              Third birria of the trip? At this point you have a preference —
              Las 9 Esquinas or El Chololo. Go to whichever you liked more. This
              is a farewell ritual, not a tourist activity. You&apos;ve earned it.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/19-birria-tacos.jpg"
            alt="Birria tacos with rich red consomé at a Guadalajara taqueria"
            caption="Third birria of the trip — by now you have your favorite spot"
            aspectRatio="landscape"
          />

          <TimeBlock time="9:30 AM" title="The Thing You Missed">
            <p>
              Every trip has one. Some ideas for what you might not have fit in:
            </p>
            <p>
              <strong>Museo Regional de Guadalajara</strong> (free on Sundays) —
              Jalisco history from pre-Hispanic to colonial, inside a beautiful
              seminary building next to the cathedral.
              <br />
              <strong>Barrio de Analco</strong> — the oldest neighborhood in GDL,
              with excellent street art murals on Calzada del Campesino.
              <br />
              <strong>Parque Metropolitano</strong> — a massive urban park in
              Zapopan with running trails and picnic areas. Good morning escape.
              <br />
              <strong>Deeper Colonia Americana</strong> — the streets south of
              Av. de la Paz (Libertad, Reforma, Marsella) have hidden galleries,
              mezcalerías, and concept stores that most tourists never find.
            </p>
          </TimeBlock>

          <TimeBlock time="12:00 PM" title="Last Lunch — Your Favorite">
            <p>
              Revisit the restaurant or stall that impressed you most this week.
              By Day 7, you have a personal Guadalajara food map that no
              guidebook can replicate. Trust it.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/29-chapultepec-nightlife.jpg"
            alt="Illuminated avenue at night with bars and pedestrians in Guadalajara"
            caption="One last evening on Chapultepec — the farewell cantarito awaits"
            aspectRatio="landscape"
          />

          <TimeBlock time="2:00 PM" title="Last-Minute Shopping">
            <p>
              If you haven&apos;t already: dried chiles and mole paste from
              Mercado Corona (gifts, 50–150 MXN), tequila bottles from your
              preferred distillery, and any Tlaquepaque or Tonalá crafts you
              regret not buying.
            </p>
          </TimeBlock>

          <TipCard type="tip">
            <strong>Packing tequila:</strong> You can bring up to 3 liters of
            alcohol in checked luggage on domestic Mexican flights. For
            international flights to the US/Canada, 1 liter duty-free. Wrap
            bottles in clothes in the center of your suitcase. The distillery
            shops will bubble-wrap bottles if you ask.
          </TipCard>

          <TimeBlock time="4:00 PM" title="Departure — Or One More Night">
            <p>
              GDL airport is 25 min from Centro by Uber (~130 MXN). Budget 90
              min for domestic, 2 hrs for international. There&apos;s a
              surprisingly good taco spot inside Terminal 1 if you need one
              final fix.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              7-Day Budget Summary
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Category</span>
                  <span>Budget</span>
                  <span>Mid-Range</span>
                  <span>Splurge</span>
                </div>
              </div>
              {[
                { cat: "Accommodation (7 nights)", budget: "3,500", mid: "10,500", high: "21,000" },
                { cat: "Food & Drink", budget: "4,200", mid: "7,700", high: "12,600" },
                { cat: "Transport (incl. day trips)", budget: "2,000", mid: "3,200", high: "5,000" },
                { cat: "Activities & Entry", budget: "800", mid: "1,600", high: "3,500" },
                { cat: "Shopping", budget: "500", mid: "2,500", high: "6,000" },
              ].map((row) => (
                <div key={row.cat} className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.cat}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                  <span className="font-mono text-xs text-cantera">{row.high}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">11,000</span>
                <span className="font-mono text-xs text-tequila">25,500</span>
                <span className="font-mono text-xs text-cantera">48,100</span>
              </div>
              <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$647</span>
                <span className="font-mono">$1,500</span>
                <span className="font-mono">$2,829</span>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>A full week in Guadalajara for $647 USD on a budget</strong> —
            that includes accommodation, all food, three day trips, and shopping.
            That&apos;s less than 3 nights in a mid-range NYC hotel. Mexico&apos;s
            second city is absurdly good value.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is one week too long for Guadalajara?",
            answer: "No. 7 days fills naturally with 3 day trips, 5+ neighborhoods to explore, and a food scene deep enough to discover something new every meal. By Day 7, you'll feel like a local — that's the point.",
          },
          {
            question: "What's the best day-to-day order?",
            answer: "Start with Centro (Day 1) to orient yourself, do day trips mid-week when you're energized, and save the slow farewell for Day 7. The order in this guide is optimized for pacing — you alternate between intense sightseeing days and slower exploration days.",
          },
          {
            question: "Can I do Guachimontones AND Mazamitla?",
            answer: "With 7 days, yes. Use Day 6 for one and swap a city day (e.g., Day 5 or Day 7) for the other. Or combine Guachimontones with a Tequila revisit on Day 2 and do Mazamitla on Day 6.",
          },
          {
            question: "Should I rent a car for the week?",
            answer: "Not recommended. Uber handles everything in the city (35-65 MXN per ride). For day trips, a hired driver for the day (1,200-2,000 MXN) is less stressful than driving yourself on unfamiliar mountain roads. Parking in Centro and Chapultepec is painful and expensive.",
          },
          {
            question: "What about extending to Oaxaca or Mexico City?",
            answer: "Both are excellent add-ons. GDL to CDMX is a 1-hour flight (~1,500 MXN on Volaris). GDL to Oaxaca is ~2 hours with a connection. If extending, we'd suggest GDL (7 days) + CDMX (4-5 days) or GDL (5 days) + Oaxaca (5 days) for a 10-12 day Mexico trip.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Core Days 1–3 in detail." },
          { label: "5-Day Itinerary", href: "/5-day-guadalajara-itinerary", description: "Days 4–5 in detail." },
          { label: "Guachimontones", href: "/guachimontones-day-trip", description: "Full circular pyramid guide." },
          { label: "Mazamitla", href: "/mazamitla-day-trip", description: "Mountain pueblo mágico guide." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "7 days of eating planned." },
          { label: "GDL vs CDMX", href: "/guadalajara-vs-mexico-city", description: "Should you add Mexico City?" },
        ]}
      />

      <GuideCTA
        href="/guadalajara-food-guide"
        label="Plan Your Meals"
        description="7 days means 21 meals to optimize. The food guide has every dish, stall, and price."
      />
    </>
  );
}
