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

export function ChapultepecGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Chapultepec", href: "/chapultepec-guide" },
        ]}
        article={{
          headline: "Chapultepec & Colonia Americana Guide 2026",
          description: "Bars, cafés, Art Deco architecture, and the city's best corridor.",
          datePublished: "2026-03-05",
          dateModified: "2026-03-26",
          url: "https://guadalajaraitinerary.com/chapultepec-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Chapultepec"
        kicker="Neighborhood"
        kickerColor="agave"
        title="Chapultepec & Colonia Americana"
        subtitle="GDL's most walkable neighborhood — Art Deco houses, the best coffee and restaurant scene, and a 1km bar corridor that keeps the city alive until 3am."
        pills={["Most walkable", "30+ bars", "Best food scene", "Art Deco architecture"]}
        updatedDate="Mar 2026"
        readTime="11 min"
        image="/images/29-chapultepec-nightlife.jpg"
        imageAlt="Chapultepec avenue at night with bar lights"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Chapultepec and Colonia Americana are technically two neighborhoods
              that blend into one zone — GDL&apos;s answer to Roma/Condesa in
              Mexico City or Palermo in Buenos Aires. Tree-lined streets, Art
              Deco mansions converted into cafés and boutiques, and Av.
              Chapultepec: a pedestrian-friendly boulevard with 30+ bars in a
              1km stretch.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              This is where we tell most travelers to stay, eat, and spend
              their evenings. It&apos;s safe, walkable, photogenic, and has the
              city&apos;s highest concentration of good food and drink per block.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mt-10 mb-4">
              Daytime — Coffee, Architecture & Food
            </h2>
          </ScrollReveal>

          <SpotCard name="Colonia Americana Walking Route" type="Walking tour" duration="45 min" cost="Free" verdict="must-see">
            <p>
              <strong>Route:</strong> Start at Av. Chapultepec and Av. de la Paz
              → south on Chapultepec → right on Av. de la Paz → left on Calle
              Marsella → down to Parque de la Revolución. This 2km loop passes
              the best Art Deco facades, independent shops, and street art.
              Morning or golden hour light is best for photos.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/23-street-mural.jpg"
            alt="Street art and murals on Colonia Americana walls in Guadalajara"
            caption="Street art adorns Colonia Americana's tree-lined blocks"
            aspectRatio="landscape"
          />

          <SpotCard name="Café Palreal" type="Coffee shop" duration="30 min" cost="55–80 MXN" address="Av. Chapultepec Sur 435" verdict="must-see">
            <p>
              GDL&apos;s best specialty coffee. Beans sourced from Jalisco
              highland farms. Flat white 65 MXN, pour-over 75 MXN. Beautiful
              interior with exposed brick and natural light. The kind of place
              you go to once and then return every morning.
            </p>
          </SpotCard>

          <SpotCard name="Cucuruchos Nevería" type="Ice cream" duration="15 min" cost="55 MXN" address="General San Martín" verdict="worth-it">
            <p>
              Artisan ice cream in flavors like mamey, guanábana, tequila, and
              beso de ángel (rose + vanilla). Made daily. Perfect afternoon stop.
            </p>
          </SpotCard>

          <SpotCard name="La Flor de Calabaza" type="Brunch" duration="60 min" cost="120–180 MXN" address="Calle Marsella 126" verdict="must-see">
            <p>
              The neighborhood&apos;s best brunch. Chilaquiles verdes (130 MXN)
              are the signature. Courtyard seating, calm vibe. Weekends are busy
              — arrive before 10am or wait.
            </p>
          </SpotCard>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mt-10 mb-4">
              Evening — The Chapultepec Bar Corridor
            </h2>
          </ScrollReveal>

          <ContentImage
            src="/images/31-colonial-courtyard.jpg"
            alt="Art Deco architecture interior in Guadalajara Colonia Americana"
            caption="Art Deco mansions converted into cafés and boutiques"
            aspectRatio="landscape"
          />

          <SpotCard name="Anónimo Bar" type="Cocktail bar" cost="130–180 MXN" address="Av. Chapultepec Norte 110" verdict="must-see">
            <p>
              Creative cocktails in a stylish setting. The bartenders know their
              stuff — ask for a mezcal-based recommendation. One of the best
              cocktail programs in GDL.
            </p>
          </SpotCard>

          <SpotCard name="Cervecería Loba" type="Craft beer" cost="80–110 MXN pints" address="Av. Chapultepec Sur 11" verdict="worth-it">
            <p>
              Local craft brewery with a good rotation of styles. The IPA and
              stout are solid. Casual, loud, good for groups. Outdoor seating
              on the avenue for people-watching.
            </p>
          </SpotCard>

          <SpotCard name="Pare de Sufrir" type="Mezcal/Raicilla bar" cost="80–120 MXN per pour" address="Av. Chapultepec Sur (near Loba)" verdict="must-see">
            <p>
              The essential mezcal and raicilla bar on the strip — 40+ spirits,
              knowledgeable bartenders, dark moody interior. See the full review
              in our{" "}
              <Link href="/guadalajara-nightlife-guide" className="text-cantera hover:underline">
                nightlife guide
              </Link>.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/32-guadalajara-cathedral.jpg"
            alt="Guadalajara nightlife along Avenida Chapultepec bar corridor"
            caption="The Chapultepec strip comes alive after 9pm"
            aspectRatio="wide"
          />

          <SpotCard name="La Mutualista" type="Live music venue" cost="No cover most nights" verdict="worth-it">
            <p>
              Live music (rock, jazz, cumbia depending on the night) in a
              converted union hall. No cover most weeknights, 50–100 MXN on
              weekends. Drinks are cheap. The vibe is local, not tourist.
            </p>
          </SpotCard>

          <TipCard type="local">
            <strong>Bar crawl strategy:</strong> Start at Anónimo (cocktails)
            around 9pm → Pare de Sufrir (mezcal) → La Mutualista (live music)
            → end wherever the night takes you. The strip stays alive until
            3am on Fridays and Saturdays. Weeknights wind down by midnight.
          </TipCard>

          <TipCard type="tip">
            <strong>Late-night tacos:</strong> After the bars, taco stands on
            Av. Chapultepec near Fuente de la Minerva serve al pastor and
            barbacoa until 2am. The perfect night cap is 5 tacos (125 MXN) at
            a street stall while the city buzzes around you.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Chapultepec the same as Colonia Americana?", answer: "They're adjacent neighborhoods that function as one zone. Colonia Americana is the residential streets with Art Deco houses and cafés. Chapultepec is the bar corridor avenue. Most people use the names interchangeably." },
          { question: "Is it safe at night?", answer: "Yes. The bar corridor is well-lit, well-populated, and patrolled. Standard nightlife rules apply: watch your drink, stay with your group, Uber home if alone after 2am. See our safety guide." },
          { question: "What's the best night to go out?", answer: "Friday and Saturday are peak — all bars open, live music everywhere. Thursday is good and less crowded. Weeknights are quieter but some bars still have events." },
          { question: "Should I stay in this neighborhood?", answer: "Yes — it's our top recommendation for most travelers. Walkable to nightlife, 10-min Uber to Centro sights, best food density in the city. See our Where to Stay guide." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Nightlife Guide", href: "/guadalajara-nightlife-guide", description: "Full bar-by-bar breakdown." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Why we recommend this area." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Restaurants and tacos nearby." },
          { label: "Craft Beer & Mezcal", href: "/guadalajara-craft-beer-mezcal", description: "The drinks deep dive." },
          { label: "2-Day Itinerary", href: "/2-day-guadalajara-itinerary", description: "Chapultepec night is Day 2." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Nightlife safety." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
