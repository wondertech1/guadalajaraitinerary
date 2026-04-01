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

export function LagoDeChapala() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Lago de Chapala", href: "/lago-de-chapala-day-trip" },
        ]}
        article={{
          headline: "Lago de Chapala Day Trip from Guadalajara 2026",
          description: "Complete guide to Lake Chapala, Ajijic, and Chapala town.",
          datePublished: "2026-03-11",
          dateModified: "2026-03-28",
          url: "https://guadalajaraitinerary.com/lago-de-chapala-day-trip",
        }}
      />

      <GuideHero
        breadcrumbLabel="Lago de Chapala"
        kicker="Day Trip"
        kickerColor="agave"
        title="Lago de Chapala Day Trip"
        subtitle="Mexico's largest lake, the charming art village of Ajijic, and a vibe completely different from the city. Beautiful — with caveats."
        pills={["45 min from GDL", "Half to full day", "Chapala + Ajijic", "Lakeside dining"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="https://images.unsplash.com/photo-1570737543098-1305f902a22c?w=1600&q=80"
        imageAlt="Lake Chapala at sunset with mountains"
      />

      <CanteraDivider className="my-0" />

      {/* Honest Take */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              The Honest Take
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Set Your Expectations Right
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Lago de Chapala is Mexico&apos;s largest freshwater lake and it&apos;s
              genuinely beautiful — vast blue water backed by the Sierra Madre
              mountains. But it&apos;s not a beach destination. The water isn&apos;t
              for swimming (algae issues), and the lake&apos;s main towns have
              been heavily shaped by the largest North American expat community
              outside Florida.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              <strong>The draw is Ajijic</strong> — a cobblestoned art village
              with excellent galleries, good restaurants, and a gentler pace
              than GDL. Chapala town itself is more of a transit point. Come
              for the art, the lakeside lunch, and the mountain views. Don&apos;t
              come expecting a lake resort experience.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
            alt="Lakeside boardwalk with mountain views at Lago de Chapala near Guadalajara"
            caption="The Chapala malecón stretches along the lakeshore with Sierra Madre views"
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>Who should go:</strong> Art lovers, people who want a
            contrast to the city energy, couples looking for a quiet day, anyone
            staying 5+ days in GDL.
            <br />
            <strong>Who should skip:</strong> If you only have 3 days, the
            Tequila day trip is a better use of your time.
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
            <strong>Uber:</strong> ~180 MXN from GDL to Chapala (45 min), ~220
            MXN to Ajijic (50 min). Split 2 ways = 90–110 MXN per person.
            Best option for flexibility.
            <br />
            <strong>Bus:</strong> Chapala Plus buses from Central Vieja every
            30 min. 55 MXN one way to Chapala, 60 min. From Chapala, local
            buses to Ajijic run constantly (12 MXN, 15 min).
          </TipCard>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              Recommended Day
            </h2>
          </ScrollReveal>

          <TimeBlock time="9:00 AM" title="Chapala Malecón">
            <p>
              Start in Chapala town. The lakeside promenade stretches 1km with
              mountain-backed lake views. Walk it end to end (20 min), browse
              the souvenir stalls, and grab a nieve from the vendors (25 MXN).
              The old pier area has the best panoramic views.
            </p>
            <p>
              <strong>The reality:</strong> Chapala town is pleasant but not
              a destination in itself. Don&apos;t spend more than 45 minutes
              here — Ajijic is where you want to be.
            </p>
          </TimeBlock>

          <TimeBlock time="10:00 AM" title="Local Bus or Uber to Ajijic (15 min)">
            <p>
              Buses run from Chapala&apos;s main street constantly (12 MXN). Or
              Uber ~40 MXN. Get dropped at the main plaza.
            </p>
          </TimeBlock>

          <TimeBlock time="10:30 AM" title="Ajijic Art Galleries">
            <p>
              Walk Calle Constitución and Calle Morelos — lined with galleries
              ranging from tourist watercolors to excellent contemporary Mexican
              art. The <strong>Ajijic Art Center</strong> (free) has rotating
              exhibitions. <strong>Galería Diane Pearl</strong> has strong
              collections of Huichol beadwork and local paintings.
            </p>
            <p>
              The <strong>Neill James Garden</strong> (20 MXN) is a hidden gem —
              a lush botanical space founded by an American adventurer in the
              1940s. 15 minutes, skip if you&apos;re short on time.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1605216663980-3a58e01b4b4c?w=800&q=80"
            alt="Colorful street and church facade in the art village of Ajijic near Lake Chapala"
            caption="Ajijic's cobblestoned streets are lined with galleries and painted doorways"
            aspectRatio="landscape"
          />

          <TimeBlock time="12:30 PM" title="Lakeside Lunch">
            <p>
              <strong>Restaurant El Barco</strong> — directly on the lake with
              mountain views. Fish mains 140–220 MXN. The <em>pescado blanco</em>
              (white fish) from the lake is the local specialty — mild, pan-fried,
              excellent. Also try the <em>charales</em> (tiny fried fish eaten
              whole, 80 MXN).
            </p>
            <p>
              <strong>Budget option:</strong> Market stalls near the main plaza
              have tacos and comida corrida for 60–100 MXN.
            </p>
          </TimeBlock>

          <TimeBlock time="2:00 PM" title="Ajijic Malecón + Wander">
            <p>
              Ajijic&apos;s malecón is quieter and more scenic than Chapala&apos;s.
              Walk to the pier, take in the views. Then wander the side streets —
              bougainvillea-draped walls, painted doorways, and the kind of small-
              town Mexican charm that photographs beautifully.
            </p>
          </TimeBlock>

          <TimeBlock time="3:30 PM" title="Return to Guadalajara">
            <p>
              Uber from Ajijic ~220 MXN (50 min) or bus back via Chapala
              (~67 MXN total, 75 min). You&apos;ll be back by 4:30–5pm,
              in time for a GDL evening.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
            alt="Scenic road from Guadalajara to Lake Chapala through Jalisco countryside"
            caption="The 45-minute drive from Guadalajara to Chapala is easy and well-paved"
            aspectRatio="wide"
          />

          <TipCard type="money">
            <strong>Day trip budget:</strong> Transport ~400 MXN round trip
            (Uber) + lunch 180 MXN + Neill James Garden 20 MXN + nieves 25
            MXN = <strong>~625 MXN ($37 USD)</strong>.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Can you swim in Lake Chapala?",
            answer: "Not recommended. The lake has periodic algae blooms and water quality issues. It's for scenery, not swimming. Some locals wade in near the shore but it's not a beach destination.",
          },
          {
            question: "Is Ajijic worth visiting?",
            answer: "Yes, if you have 4+ days in GDL. The art galleries are genuinely good, the cobblestoned streets are charming, and the lakeside lunch with mountain views is a highlight. If you only have 3 days, prioritize the Tequila day trip instead.",
          },
          {
            question: "How long should I spend at Lake Chapala?",
            answer: "Half a day is perfect — arrive by 9-10am, leave by 3-4pm. A full day works if you want to linger over gallery browsing and a long lakeside lunch. There isn't enough to fill more than one day.",
          },
          {
            question: "Is the expat community overwhelming?",
            answer: "It depends on your perspective. Ajijic has English menus, American-style cafes, and you'll hear English everywhere. Some find it charming and easy; others find it too sanitized. The art and lake scenery are worth it regardless.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "5-Day Itinerary", href: "/5-day-guadalajara-itinerary", description: "Chapala is Day 4 of the deep dive." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "The other must-do day trip." },
          { label: "Guachimontones", href: "/guachimontones-day-trip", description: "An alternative day trip option." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Best base for day trips." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Bus and Uber logistics." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Day trip cost planning." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
