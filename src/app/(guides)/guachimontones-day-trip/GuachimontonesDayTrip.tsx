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

export function GuachimontonesDayTrip() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guachimontones", href: "/guachimontones-day-trip" },
        ]}
        article={{
          headline: "Guachimontones Day Trip 2026",
          description: "Complete guide to Mexico's circular pyramids near Guadalajara.",
          datePublished: "2026-03-13",
          dateModified: "2026-03-28",
          url: "https://guadalajaraitinerary.com/guachimontones-day-trip",
        }}
      />

      <GuideHero
        breadcrumbLabel="Guachimontones"
        kicker="Archaeology"
        kickerColor="agave"
        title="Guachimontones Day Trip"
        subtitle="The only circular pyramids in Mesoamerica, 75 minutes from Guadalajara. Unique, uncrowded, and easy to combine with the Tequila day trip."
        pills={["75 min from GDL", "Half day", "60 MXN entry", "Combine with Tequila"]}
        updatedDate="Mar 2026"
        readTime="8 min"
        image="/images/38-guachimontones-aerial.jpg"
        imageAlt="Circular pyramids of Guachimontones aerial view"
      />

      <CanteraDivider className="my-0" />

      {/* What It Is */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What You&apos;re Looking At
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guachimontones is a pre-Columbian archaeological site built by
              the Teuchitlán tradition between 300 BCE and 900 CE. What makes it
              globally unique: <strong>the pyramids are circular.</strong> No other
              known civilization in the Americas built circular stepped pyramids.
              The main structure (Circle 1) is a tiered cone surrounded by
              platforms where priests performed the &quot;volador&quot; pole
              ceremony — spinning from a central pole, an ancestor of the
              modern Papantla Flyers performance.
            </p>
          </ScrollReveal>

          <TipCard type="local">
            <strong>Why it matters:</strong> The Teuchitlán tradition was
            contemporaneous with Teotihuacán but completely independent — they
            developed their own architectural form based on cosmic circles
            rather than the rectangular grid that dominates every other
            Mesoamerican site. It was only excavated starting in 1996 and is
            still relatively unknown outside archaeology circles.
          </TipCard>

          <ContentImage
            src="/images/11-guachimontones-ruins.jpg"
            alt="Archaeological ruins and stepped pyramids at Guachimontones near Guadalajara"
            caption="The circular stepped pyramids of Guachimontones are unique in Mesoamerica"
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>The reality:</strong> If you&apos;ve been to
            Teotihuacán or Chichén Itzá, Guachimontones is smaller and less
            dramatic. But the circular form is genuinely unprecedented, the
            hilltop setting with valley views is stunning, and you may be one
            of 20 people on site. It&apos;s not a must-see for everyone, but
            it&apos;s rewarding for anyone who appreciates unique historical
            sites.
          </TipCard>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Logistics
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Detail</span>
                  <span>Info</span>
                </div>
              </div>
              {[
                { label: "Entry fee", info: "60 MXN" },
                { label: "Hours", info: "9am–5pm, Tue–Sun (closed Monday)" },
                { label: "Time needed", info: "90 min (site + museum)" },
                { label: "From GDL", info: "75 min by car" },
                { label: "From Tequila", info: "30 min by car" },
                { label: "Facilities", info: "Small museum, restrooms, parking" },
                { label: "Shade", info: "None — bring hat and sunscreen" },
                { label: "Difficulty", info: "Easy — paved paths, some stairs" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-2 gap-4 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/50 font-mono text-xs">{row.label}</span>
                  <span className="text-obsidiana/70">{row.info}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Best approach: Combine with Tequila.</strong> Visit Tequila
            in the morning (distillery tour + lunch), then drive 30 min south
            to Guachimontones for the afternoon. Uber drivers will do the whole
            circuit for 1,200–1,600 MXN from GDL. Or hire a driver for the day
            through your hotel.
          </TipCard>

          <TipCard type="skip">
            <strong>No public bus runs directly to Guachimontones.</strong> You
            can bus to Tequila and then take a local taxi (150–200 MXN each way)
            to the site, but it&apos;s time-consuming. Car/Uber is strongly
            recommended.
          </TipCard>
        </div>
      </section>

      {/* What to See */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              What to See
            </h2>
          </ScrollReveal>

          <TimeBlock time="Start" title="Museum (15 min)">
            <p>
              Near the entrance. Small but informative — explains the Teuchitlán
              culture, the volador ceremony, and the excavation history. English
              signage is minimal; use Google Translate camera on the Spanish
              panels.
            </p>
          </TimeBlock>

          <TimeBlock time="Next" title="Circle 1 — The Main Pyramid">
            <p>
              The largest circular structure — a stepped cone approximately 12–15m tall
              with 10 surrounding platforms. You can walk up to the base but not
              climb the pyramid itself. The best photos are from the elevated
              walkway to the south, where you can see the full circle shape.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/40-agave-fields-tequila.jpg"
            alt="Green valley landscape surrounding Guachimontones archaeological site near Tequila"
            caption="The hilltop setting offers panoramic views of the valley and La Vega lake"
            aspectRatio="landscape"
          />

          <TimeBlock time="Then" title="Circles 2–4 + Ball Court">
            <p>
              Smaller circular structures in various states of excavation, plus
              a Mesoamerican ball court. The walk between circles takes you
              across the hilltop with panoramic views of the valley, the La
              Vega lake below, and surrounding mountains. This is where the site
              really impresses — the setting is extraordinary.
            </p>
          </TimeBlock>

          <TimeBlock time="Optional" title="Lunch in Teuchitlán">
            <p>
              The tiny town at the base has 3–4 restaurants on the lakeshore.
              Basic but scenic — fish from the lake, tacos, cold drinks. Mains
              80–150 MXN. Don&apos;t expect gourmet; do expect genuine small-town
              Mexican hospitality.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/03-scenic-highway-jalisco.jpg"
            alt="Road through the Jalisco countryside on the way to Guachimontones from Guadalajara"
            caption="No public bus runs directly to the site — car or Uber is recommended"
            aspectRatio="wide"
          />

          <TipCard type="money">
            <strong>Total cost:</strong> Entry 60 MXN + transport ~600 MXN
            (Uber from Tequila round trip, or ~300 MXN split if combined with
            a Tequila day trip Uber) + lunch 120 MXN ={" "}
            <strong>~480–780 MXN ($28–46 USD)</strong>.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is Guachimontones worth the trip?",
            answer: "For archaeology and history enthusiasts, absolutely. For casual tourists, it depends — if you have 5+ days in GDL and can combine it with Tequila, it's a rewarding addition. If you only have 3 days, it's optional. The circular pyramids are genuinely unique, but the site is smaller than major Mexican ruins.",
          },
          {
            question: "Can I combine Guachimontones with Tequila?",
            answer: "Yes, this is the ideal approach. Tequila in the morning (distillery + lunch), drive 30 min south to Guachimontones in the afternoon. You'll be back in GDL by 5-6pm.",
          },
          {
            question: "How long do I need at the site?",
            answer: "60-90 minutes covers the museum and all circles comfortably. 2 hours if you're a slow walker or photographer.",
          },
          {
            question: "Is there shade at Guachimontones?",
            answer: "Almost none. The site is on an exposed hilltop. Bring a hat, sunscreen, and water. Morning visits (9-11am) are cooler. Avoid midday in the dry season (March-May).",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Combine both for the ultimate day out." },
          { label: "7-Day Itinerary", href: "/7-day-guadalajara-itinerary", description: "Guachimontones is a Day 6 option." },
          { label: "Mazamitla", href: "/mazamitla-day-trip", description: "The alternative Day 6 choice." },
          { label: "Lago de Chapala", href: "/lago-de-chapala-day-trip", description: "Another great day trip." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Transport logistics." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Day trip cost planning." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
