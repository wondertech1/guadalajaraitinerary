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

export function MazamitlaDayTrip() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Mazamitla", href: "/mazamitla-day-trip" },
        ]}
        article={{
          headline: "Mazamitla Day Trip from Guadalajara 2026",
          description: "Mountain pueblo mágico guide — cabins, hiking, and comfort food.",
          datePublished: "2026-03-15",
          dateModified: "2026-03-26",
          url: "https://guadalajaraitinerary.com/mazamitla-day-trip",
        }}
      />

      <GuideHero
        breadcrumbLabel="Mazamitla"
        kicker="Mountain Escape"
        kickerColor="mariachi"
        title="Mazamitla Day Trip"
        subtitle="Pine forests, fireplace cabins, and mountain comfort food — a complete contrast to Guadalajara, just 2 hours south. Best in cool weather."
        pills={["130 km from GDL", "Day trip or overnight", "2,200m altitude", "Pueblo Mágico"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="/images/06-cabin-pine-forest.jpg"
        imageAlt="Mountain cabin in pine forest"
      />

      <CanteraDivider className="my-0" />

      {/* Overview */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What to Expect
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Mazamitla is a <em>Pueblo Mágico</em> (Mexico&apos;s heritage
              town designation) nestled in the Sierra del Tigre at 2,200m.
              Think: wooden-balcony houses, pine-scented air, cascading
              waterfalls, and a town plaza where the biggest activity is
              drinking hot chocolate. It feels more like highland Guatemala
              than lowland Mexico.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              The draw is the contrast. After 4–5 days in a hot, bustling city,
              Mazamitla&apos;s cool mountain air and quiet streets feel like a
              reset button. The hiking is good, the food is hearty mountain
              comfort cooking, and the cabin stays are some of the best-value
              accommodation in Jalisco.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/07-foggy-pine-forest.jpg"
            alt="Foggy pine forest in the mountains near Mazamitla, Jalisco"
            caption="Mazamitla's pine forests feel worlds away from Guadalajara's heat"
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>Best time:</strong> November–March when it&apos;s crisp
            and cool (5–15°C), cabins have fireplaces, and the pine forests
            are at their most atmospheric. June–September is rainy and the
            waterfalls are dramatic but trails get muddy. April–May is warm
            and less interesting.
          </TipCard>

          <TipCard type="local">
            <strong>Day trip or overnight?</strong> A day trip works (leave GDL
            8am, return by 6pm) but feels rushed with a 4-hour round trip
            drive. The magic of Mazamitla is the evening — fireplace, hot
            chocolate, quiet streets. If you can, stay one night.
          </TipCard>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Getting There
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Bus:</strong> From Central Nueva bus terminal, Autobuses
            Sur de Jalisco runs 4–5 buses daily. 150 MXN one way, 2.5 hours.
            First bus ~7am, last return ~6pm.
            <br />
            <strong>Car/Driver:</strong> 2 hours on Highway 54D south. The
            drive is scenic once you climb into the mountains. A hired driver
            for the day runs 1,500–2,000 MXN. Uber can get you there but may
            be harder to find a return ride — arrange a round trip with your
            driver.
          </TipCard>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              What to Do
            </h2>
          </ScrollReveal>

          <TimeBlock time="10:30 AM" title="Arrive + Walk the Town (30 min)">
            <p>
              Mazamitla is tiny — you can walk the entire town center in 30
              minutes. The main plaza, the church (Parroquia de San Cristóbal),
              and the wooden-balcony streets are the highlights. Browse the
              artisan shops for wool textiles, pine candles, and local jams.
            </p>
          </TimeBlock>

          <TimeBlock time="11:00 AM" title="Hike to a Cascade">
            <p>
              Several waterfalls are accessible from town. The most popular:
            </p>
            <p>
              <strong>El Salto del Tigre:</strong> 45-min walk from town, a
              25m waterfall in a fern-covered ravine. Easy-moderate trail,
              some steps. Free access.
              <br />
              <strong>Las Cascadas:</strong> A managed park 10 min by car from
              town with 3 waterfalls and hiking trails. Entry ~50 MXN.
              Well-maintained, more family-friendly.
            </p>
            <p>
              Wear proper shoes — trails are rocky and can be muddy after rain.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/02-mazamitla-town.jpg"
            alt="Pine forest cabin retreat in the mountains of Mazamitla near Guadalajara"
            caption="Mazamitla's wooden-balcony town center has artisan shops and cozy cafes"
            aspectRatio="landscape"
          />

          <TimeBlock time="1:00 PM" title="Mountain Lunch — Bote or Trout">
            <p>
              <strong>Bote</strong> is Mazamitla&apos;s signature dish — a
              communal stew cooked in a massive pot with pork, chicken, beef,
              corn, cabbage, and chiles. Served family-style, 120–180 MXN per
              person. It&apos;s a sharing dish best with 2+ people.
            </p>
            <p>
              <strong>Trucha (trout)</strong> from mountain streams — pan-fried
              or al mojo de ajo, 120–160 MXN. Excellent at the restaurants
              near the cascades.
            </p>
            <p>
              <strong>Hot drinks:</strong> Hot chocolate with cinnamon (30 MXN),
              ponche de frutas (hot fruit punch with piloncillo sugar, 25 MXN),
              or café de olla (cinnamon coffee, 30 MXN). Essential on a cool day.
            </p>
          </TimeBlock>

          <TimeBlock time="2:30 PM" title="Horseback Riding or More Hiking">
            <p>
              Horseback rides through the pine forest are Mazamitla&apos;s other
              big activity. ~300 MXN per hour, arranged on the main plaza or
              through cabañas. The routes go through dense pine forest with
              mountain views — atmospheric and peaceful.
            </p>
            <p>
              Alternatively, hike the <strong>Mirador Cerro de la Cruz</strong>{" "}
              (20-min uphill walk from town) for panoramic views over the valley
              and town.
            </p>
          </TimeBlock>

          <TimeBlock time="4:00 PM" title="Return to GDL (or Stay the Night)">
            <p>
              <strong>Day trip:</strong> Head back by 4pm to arrive GDL ~6pm.
              Last bus around 6pm.
              <br />
              <strong>Overnight:</strong> Check into a cabaña. Spend the evening
              by the fireplace, walk the quiet streets, and sip ponche. Return
              to GDL next morning refreshed.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* Cabins */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Cabin Stays (If Overnighting)
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Mazamitla&apos;s cabañas are the main accommodation style —
              wooden cabins in pine forests with fireplaces. They range from
              basic to genuinely luxurious.
            </p>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Budget cabins:</strong> 600–1,000 MXN/night. Basic but cozy.
            Usually include fireplace and hot water. Book on Booking.com or call
            directly.
            <br />
            <strong>Mid-range cabins:</strong> 1,000–2,000 MXN/night. Nicer
            furnishings, kitchenette, better location in the forest.
            <br />
            <strong>Luxury cabins:</strong> 2,000–4,000 MXN/night. Full
            amenities, hot tub, premium forest setting. Book 2+ weeks ahead
            for weekends Nov–Feb.
          </TipCard>

          <TipCard type="tip">
            <strong>Weekend vs weekday:</strong> Mazamitla is packed on weekends
            (especially Dec–Feb) with GDL families. Prices double and cabins
            sell out. Visit midweek for half the price and a fraction of the
            crowds.
          </TipCard>
        </div>
      </section>

      {/* Image break before budget */}
      <section className="py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/05-lake-chapala-panoramic.jpg"
            alt="Scenic mountain valley and lake landscape near Mazamitla, Jalisco"
            caption="The Sierra del Tigre surrounding Mazamitla offers excellent hiking trails"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Day Trip Budget
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Item</span>
                  <span>Day Trip</span>
                  <span>Overnight</span>
                </div>
              </div>
              {[
                { item: "Transport (round trip)", day: "300 (bus)", night: "300 (bus)" },
                { item: "Lunch", day: "160", night: "160" },
                { item: "Activities (cascade + horse)", day: "350", night: "350" },
                { item: "Hot drinks & snacks", day: "80", night: "120" },
                { item: "Cabin", day: "—", night: "800–1,500" },
                { item: "Dinner", day: "—", night: "150" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.item}</span>
                  <span className="font-mono text-xs text-agave">{row.day}</span>
                  <span className="font-mono text-xs text-tequila">{row.night}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~890</span>
                <span className="font-mono text-xs text-tequila">~1,880–2,580</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$52</span>
                <span className="font-mono">$111–152</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is Mazamitla worth the 2-hour drive?",
            answer: "Yes, if you have 5+ days in GDL and want a contrast to city sightseeing. The mountain air, pine forests, and comfort food are genuinely refreshing. If you only have 3 days, Tequila and Chapala are better uses of your day-trip time.",
          },
          {
            question: "Can I visit Mazamitla as a day trip?",
            answer: "Yes, but it's tight. Leave GDL by 8am, arrive 10am, leave Mazamitla by 4pm, back by 6pm. That gives you 6 hours — enough for the town, one hike, and lunch. An overnight stay is more relaxing and lets you experience the evening atmosphere.",
          },
          {
            question: "What should I pack?",
            answer: "Layers — it's 10-15°C cooler than GDL. A jacket/sweater is essential, especially mornings and evenings Nov-Feb. Hiking shoes if you're doing trails. Sunscreen despite the cool temperature — altitude means stronger UV.",
          },
          {
            question: "Is Mazamitla good for couples?",
            answer: "Excellent. Fireplace cabins, quiet streets, mountain trails, and no tourist crowds midweek. One of the most romantic day trips from GDL, especially in the cool-weather months.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "7-Day Itinerary", href: "/7-day-guadalajara-itinerary", description: "Mazamitla is a Day 6 option." },
          { label: "Guachimontones", href: "/guachimontones-day-trip", description: "The other Day 6 choice." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "The must-do day trip." },
          { label: "For Couples", href: "/guadalajara-for-couples", description: "More romantic GDL ideas." },
          { label: "Lago de Chapala", href: "/lago-de-chapala-day-trip", description: "Another scenic escape." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Trip cost optimization." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
