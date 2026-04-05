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

export function TlaqupaqueGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tlaquepaque", href: "/tlaquepaque-guide" },
        ]}
        article={{
          headline: "Tlaquepaque Guide 2026",
          description: "Artisan shopping, El Parián, and glass workshops.",
          datePublished: "2026-03-03",
          dateModified: "2026-03-28",
          url: "https://guadalajaraitinerary.com/tlaquepaque-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Tlaquepaque"
        kicker="Artisan Quarter"
        kickerColor="tequila"
        title="Tlaquepaque Guide"
        subtitle="(Pronounced tlah-keh-PAH-keh) Mexico's artisan capital — blown glass, Talavera pottery, El Parián mariachi, and the galleries worth your time (and the tourist traps to avoid)."
        pills={["20 min from Centro", "Half day", "Shopping + galleries", "El Parián"]}
        updatedDate="Mar 2026"
        readTime="11 min"
        image="/images/26-tlaquepaque-colorful-street.jpg"
        imageAlt="Colorful pedestrian street in Tlaquepaque"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Tlaquepaque is why Guadalajara matters for artisan culture. The
              pedestrianized Calle Independencia is lined with galleries and
              workshops that range from tourist-grade souvenirs to
              museum-quality folk art and contemporary craft. The trick is
              knowing which is which.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Getting there:</strong> Uber from Centro ~65 MXN (20 min).
            From Chapultepec ~80 MXN (25 min). The Uber pickup at Tlaquepaque
            is easy — request from the main plaza or Calle Independencia.
          </TipCard>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mt-10 mb-4">
              What to See & Do
            </h2>
          </ScrollReveal>

          <SpotCard name="Calle Independencia" type="Pedestrian street" duration="60–90 min" cost="Free" verdict="must-see">
            <p>
              The main artery. The first 4 blocks from El Parián heading west
              have the best galleries and workshops. After that, quality drops
              and tourist trinkets increase. Walk the full length but spend your
              time (and money) in the first half.
            </p>
            <p>
              <strong>Look for:</strong> Glass-blowing demonstrations (free,
              happen all day), working pottery studios where you can watch
              artisans paint Talavera, and the smaller galleries on side streets
              that most tourists miss.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/18-light-rail-station.jpg"
            alt="Blown glass artisan at work in Tlaquepaque Guadalajara"
            caption="Glass-blowing workshops line Calle Independencia"
            aspectRatio="landscape"
          />

          <SpotCard name="El Parián" type="Mariachi courtyard" duration="60–90 min" cost="Food + optional mariachi" verdict="must-see">
            <p>
              One of Mexico&apos;s most iconic mariachi venues — a covered
              courtyard ringed with cantinas. Sit at any bar, order a torta
              ahogada (65–85 MXN) and a beer (40–60 MXN). Mariachi bands
              circulate offering songs for 100–150 MXN per song.
            </p>
            <p>
              <strong>Strategy:</strong> Let the first aggressive band pass.
              The second or third group is usually better — same talent, less
              pressure. One song is the right amount. Two if you&apos;re
              celebrating. Three and your bill adds up fast.
            </p>
          </SpotCard>

          <SpotCard name="Antigua de México" type="Gallery/Shop" duration="20 min" cost="Free to browse" address="Calle Independencia 258" verdict="must-see">
            <p>
              The best Talavera pottery selection in Tlaquepaque. Quality pieces
              from Puebla and Jalisco artisans. Prices start at 200 MXN for
              small plates, 1,500+ for large platters. Fixed prices (no
              negotiation). Everything here is authentic and well-curated.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/09-mariachi-musicians.jpg"
            alt="Mariachi musicians performing at El Parián in Tlaquepaque"
            caption="Mariachi bands circulate El Parián offering songs"
            aspectRatio="landscape"
          />

          <SpotCard name="Sergio Bustamante Gallery" type="Art gallery" duration="15 min" cost="Free" verdict="worth-it">
            <p>
              Surrealist bronze and papier-mâché sculptures by Mexico&apos;s
              most famous living sculptor. The pieces are expensive (5,000+
              MXN) but the gallery is free to walk through and the art is
              striking. Even if you&apos;re not buying, it&apos;s worth 10
              minutes.
            </p>
          </SpotCard>

          <SpotCard name="Museo del Premio Nacional de la Cerámica" type="Museum" duration="20 min" cost="Free" verdict="worth-it">
            <p>
              Small museum showcasing prize-winning ceramics from across Mexico.
              Rotating exhibitions of exceptional artisan work. Free, quick,
              and genuinely impressive. Around the corner from El Parián.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/24-talavera-pottery.jpg"
            alt="Colorful Mexican pottery and ceramics at Tlaquepaque gallery"
            caption="Talavera pottery at Antigua de México gallery"
            aspectRatio="square"
          />

          <SpotCard name="Glass-Blowing Workshops" type="Workshop" duration="15 min each" cost="Free to watch" verdict="must-see">
            <p>
              Several families on Calle Independencia have workshops where you
              can watch artisans blow glass in real time. Look for open doorways
              with furnaces glowing inside. The demonstrations are free; they
              sell finished pieces alongside. Prices: ornaments 150–400 MXN,
              vases 300–1,500 MXN. Workshop quality is consistently higher than
              random stall glass.
            </p>
          </SpotCard>
        </div>
      </section>

      {/* Shopping Guide */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What to Buy (And What to Skip)
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Buy in Tlaquepaque:</strong> Talavera pottery (authentic,
            well-curated), blown glass (from workshops, not stalls), papier-mâché
            figures, fine art from proper galleries.
            <br />
            <strong>Buy in Tonalá instead:</strong> Bulk pottery, equipale
            furniture, generic ceramics — 30–50% cheaper at the{" "}
            <Link href="/tonala-guide" className="text-agave hover:underline">
              Thursday/Sunday tianguis
            </Link>.
            <br />
            <strong>Skip entirely:</strong> Mass-produced sombreros, cheap maracas,
            &quot;Mexican&quot; shot glasses, anything that looks like it came
            from a factory.
          </TipCard>

          <TipCard type="money">
            <strong>Negotiation rules:</strong> Fixed-price galleries (like
            Antigua de México) don&apos;t negotiate — and shouldn&apos;t, their
            prices are fair. Street vendors and smaller shops negotiate — ask
            &quot;¿Cuál es su mejor precio?&quot; (What&apos;s your best price?)
            and aim for 15–20% off. Buying multiple items from one vendor gives
            you more leverage.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "How long should I spend in Tlaquepaque?", answer: "2-3 hours covers El Parián, Calle Independencia, and 2-3 galleries. Add another hour if you're a serious shopper. Half a day is the maximum — beyond that, gallery fatigue sets in." },
          { question: "Is Tlaquepaque or Tonalá better for shopping?", answer: "Different things. Tlaquepaque for curated galleries, high-quality blown glass, and the El Parián experience. Tonalá for raw artisan markets, lower prices, and direct workshop visits. Serious buyers should do both." },
          { question: "Is Tlaquepaque safe?", answer: "Very safe. The pedestrianized streets are tourist-police patrolled. After El Parián closes (~10pm), it gets quiet but not dangerous. Uber back to your hotel rather than walking empty streets." },
          { question: "Can I ship purchases home?", answer: "Some galleries offer shipping (for a fee). For pottery and glass, ask the shop to bubble-wrap items for your suitcase — they're used to it. Fragile items go in carry-on between clothing layers. DHL and FedEx have offices in Guadalajara for larger shipments." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Tlaquepaque is the afternoon highlight." },
          { label: "Tonalá Guide", href: "/tonala-guide", description: "The other artisan market." },
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "Morning before Tlaquepaque." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "What to eat at El Parián." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Stay in Tlaquepaque?" },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Shopping budget planning." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
