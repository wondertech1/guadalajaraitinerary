"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotCard } from "@/components/content/SpotCard";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

export function ZapopanGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Zapopan", href: "/zapopan-guide" },
        ]}
        article={{
          headline: "Zapopan Guide 2026",
          description: "Basílica, MAZ museum, and quiet colonial charm.",
          datePublished: "2026-03-07",
          dateModified: "2026-03-26",
          url: "https://guadalajaraitinerary.com/zapopan-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Zapopan"
        kicker="Neighborhood"
        kickerColor="mariachi"
        title="Zapopan Guide"
        subtitle="Guadalajara's quieter side — a revered basilica, one of Mexico's best contemporary art museums, and a colonial center without the crowds."
        pills={["15 min from Centro", "Half day", "Basílica + MAZ", "Quieter vibe"]}
        updatedDate="Mar 2026"
        readTime="8 min"
        image="https://images.unsplash.com/photo-1605216663980-3a58e01b2b4c?w=1600&q=80"
        imageAlt="Zapopan basilica exterior"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Zapopan is technically a separate municipality but seamlessly
              connected to Guadalajara. Its colonial center has a fraction of
              Centro&apos;s crowds but genuine charm — anchored by the Basílica
              de Zapopan (one of Mexico&apos;s most important religious sites)
              and MAZ, a contemporary art museum that would be notable in any
              world city.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              Come for a morning: basilica, museum, walk the plaza, grab lunch.
              It&apos;s a clean half-day that pairs well with an afternoon in
              Colonia Americana or Chapultepec.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Getting there:</strong> Uber from Centro ~45 MXN (15 min).
            From Chapultepec ~50 MXN (15 min). Both the Basílica and MAZ are
            on the same plaza — everything is walkable once you arrive.
          </TipCard>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mt-10 mb-4">
              What to See
            </h2>
          </ScrollReveal>

          <SpotCard name="Basílica de Zapopan" type="Church" duration="15–20 min" cost="Free" verdict="must-see">
            <p>
              Houses the Virgen de Zapopan — a tiny 16th-century corn-paste
              figure that&apos;s Guadalajara&apos;s most revered religious image.
              Every October 12, over a million people walk her back to the
              Basílica in the Romería procession (one of Mexico&apos;s largest
              pilgrimages).
            </p>
            <p>
              The church interior is ornate and peaceful. Even non-religious
              visitors find it moving. Free entry, 15 minutes. The small
              museum inside has ex-votos (painted prayer offerings) — naive art
              that&apos;s genuinely fascinating.
            </p>
          </SpotCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80"
            alt="Plaza with fountain in front of Basílica de Zapopan Guadalajara"
            caption="The peaceful plaza outside the Basílica de Zapopan"
            aspectRatio="landscape"
          />

          <SpotCard name="Museo de Arte de Zapopan (MAZ)" type="Contemporary art museum" duration="30–45 min" cost="40 MXN" verdict="must-see">
            <p>
              A sleek white cube that hosts some of Mexico&apos;s best rotating
              contemporary art exhibitions. Past shows have included major
              international installations. The building itself — designed by
              architect Ignacio Díaz Morales — is beautiful.
            </p>
            <p>
              <strong>Our take:</strong> If you like contemporary art, this
              is a highlight. If modern art isn&apos;t your thing, you can skip
              MAZ and spend the time at the plaza and market instead. Check
              their Instagram for current exhibitions before visiting.
            </p>
          </SpotCard>

          <SpotCard name="Plaza Zapopan & Surrounding Streets" type="Plaza" duration="20–30 min" cost="Free" verdict="worth-it">
            <p>
              The plaza in front of the Basílica is broad and peaceful — shaded
              benches, food vendors, and none of Centro&apos;s intensity. Walk
              the surrounding blocks for a sense of small-town Mexican colonial
              architecture. The Arco de Ingreso (entry arch) and Palacio
              Municipal are worth photos.
            </p>
          </SpotCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80"
            alt="Modern art gallery interior at MAZ museum in Zapopan Guadalajara"
            caption="MAZ hosts rotating contemporary art from Mexico and beyond"
            aspectRatio="wide"
          />

          <SpotCard name="Barranca de Huentitán" type="Nature/Viewpoint" duration="30 min–2 hrs" cost="Free" address="15 min from Zapopan center" verdict="optional">
            <p>
              A dramatic river canyon on Guadalajara&apos;s northeastern edge.
              The viewpoints are free and impressive — 600m deep canyon with
              the Santiago River below. The Zoológico Guadalajara (130 MXN)
              is at the canyon rim if you have kids. Hiking trails descend into
              the canyon but require preparation (water, shoes, 2+ hours).
            </p>
            <p>
              <strong>Worth it if:</strong> You want nature and have a half day.
              <strong> Skip if:</strong> You prefer urban sights — it&apos;s a
              detour from Zapopan center and requires Uber (~35 MXN).
            </p>
          </SpotCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
            alt="Colonial architecture and arched colonnades in Zapopan center Guadalajara"
            caption="Zapopan's colonial center has a fraction of Centro's crowds"
            aspectRatio="landscape"
          />

          <TipCard type="money">
            <strong>Half-day budget:</strong> Uber from Centro 45 MXN + MAZ 40
            MXN + market lunch 80 MXN + Uber back 45 MXN ={" "}
            <strong>~210 MXN ($12 USD)</strong>. The Basílica and plaza are free.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "How long do I need in Zapopan?", answer: "2-3 hours covers the Basílica, MAZ, and the plaza. Add Huentitán for a 4-5 hour trip. It's a morning activity that pairs well with an afternoon elsewhere." },
          { question: "Is Zapopan worth visiting?", answer: "Yes, if you have 3+ days. The Basílica is genuinely significant and MAZ is excellent. If you only have 1-2 days, Centro and Tlaquepaque take priority." },
          { question: "Is Zapopan safe?", answer: "The center around the Basílica and MAZ is safe and well-patrolled. Quieter than Centro, less foot traffic at night. Standard awareness applies." },
          { question: "When is the Romería procession?", answer: "October 12. Over a million people walk the Virgin from GDL's Cathedral back to the Basílica. It's incredible but the city is packed. Book accommodation months ahead if you want to see it." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Zapopan is Day 3 morning." },
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "The other colonial center." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Stay in Zapopan?" },
          { label: "Best Time to Visit", href: "/best-time-to-visit-guadalajara", description: "October Romería details." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zapopan safety info." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Free and cheap things to do." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
