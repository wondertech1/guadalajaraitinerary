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

export function ForCouples() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "For Couples", href: "/guadalajara-for-couples" },
        ]}
        article={{
          headline: "Guadalajara for Couples 2026",
          description: "Romantic itinerary, date nights, and couples activities.",
          datePublished: "2026-03-22",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-for-couples",
        }}
      />

      <GuideHero
        breadcrumbLabel="For Couples"
        kicker="Trip Type"
        kickerColor="cantera"
        title="Guadalajara for Couples"
        subtitle="Candlelit mezcalerías, Art Deco strolls, mariachi serenades, and a mountain cabin escape — GDL is surprisingly romantic once you know where to look."
        pills={["Date restaurants", "Romantic activities", "Boutique hotels", "Mazamitla cabin trip"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="/images/15-couple-dining-courtyard.jpg"
        imageAlt="Couple dining at a romantic restaurant"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Why GDL Works for Couples
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara isn&apos;t marketed as a romantic destination — and
              that&apos;s exactly why it works. No resort markup, no staged
              experiences, just a beautiful city with excellent food, stunning
              neighborhoods, and the kind of atmospheric bars that feel like
              they were designed for date nights.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Where to stay:</strong>{" "}
            <strong>Casa Fayette</strong> (Colonia Americana, 4,500+ MXN) is
            GDL&apos;s most romantic hotel — a restored 1940s mansion with a
            pool and design-magazine interiors. For mid-range: <strong>Hotel
            Dali Plaza</strong> (1,400 MXN) is clean and central. For
            boutique charm: <strong>Casa del Retiro</strong> in Tlaquepaque
            (1,200 MXN) has courtyard rooms.
          </TipCard>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Colorful pedestrian street in Guadalajara with colonial architecture perfect for a couples stroll"
            caption="Colonia Americana's Art Deco streets are ideal for a romantic evening walk"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Romantic Activities */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Romantic Activities
            </h2>
          </ScrollReveal>

          <SpotCard name="Golden Hour Walk — Colonia Americana" type="Activity" duration="60 min" cost="Free" verdict="must-see">
            <p>
              Walk the Art Deco streets at 5–6:30pm when the light is warm and
              the neighborhood comes alive. Start at Av. de la Paz, wander
              through Calle Marsella, and end at Parque de la Revolución. Stop
              for nieves at Cucuruchos. This costs nothing and is one of the
              most romantic hours in GDL.
            </p>
          </SpotCard>

          <SpotCard name="Mariachi at El Parián" type="Experience" duration="60 min" cost="100–150 MXN per song" verdict="must-see">
            <p>
              Hire a mariachi band to play one song at your table. Yes, it&apos;s
              touristy. Yes, it&apos;s also genuinely romantic when 6 musicians
              are serenading your partner with <em>Bésame Mucho</em> over
              tequila. Order a cantarito (clay cup cocktail) and lean into it.
            </p>
          </SpotCard>

          <SpotCard name="Tequila Day Trip for Two" type="Day trip" duration="Full day" cost="~1,500 MXN/couple" verdict="must-see">
            <p>
              Uber to Tequila (~400 MXN), La Fortaleza distillery tour (300 MXN
              each), lunch at La Antigua Casona, buy a bottle together. The
              agave field photos alone are worth the trip. More romantic than
              any organized &quot;couples tour.&quot;
            </p>
          </SpotCard>

          <SpotCard name="Mazamitla Cabin Weekend" type="Overnight trip" duration="1–2 nights" cost="800–2,500 MXN/night" verdict="must-see">
            <p>
              The most romantic option near GDL: a fireplace cabin in the pine
              forests of{" "}
              <Link href="/mazamitla-day-trip" className="text-cantera hover:underline">
                Mazamitla
              </Link>
              , 2 hours south. Hot chocolate, mountain hikes, absolute quiet.
              Best November–February when it&apos;s cool enough for the
              fireplace. Book midweek for half the price and no crowds.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Artisan crafts in Tlaquepaque near Guadalajara, a romantic shopping destination for couples"
            caption="Tlaquepaque's artisan shops make for a charming couples day trip"
            aspectRatio="landscape"
          />

          <SpotCard name="Mezcal Tasting at Pare de Sufrir" type="Bar experience" duration="60 min" cost="250 MXN (flight of 3)" verdict="worth-it">
            <p>
              Dark, intimate mezcalería perfect for a date night — share a
              raicilla flight and let the bartender guide you. See the full
              review in our{" "}
              <Link href="/guadalajara-nightlife-guide" className="text-cantera hover:underline">
                nightlife guide
              </Link>.
            </p>
          </SpotCard>
        </div>
      </section>

      {/* Date Restaurants */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Date Night Restaurants
            </h2>
          </ScrollReveal>

          <SpotCard name="Alcalde" type="Fine dining" cost="800 MXN lunch tasting" address="Av. México 2903" verdict="must-see">
            <p>
              Latin America&apos;s 50 Best. Modern Mexican tasting menu with
              Jalisco ingredients. The lunch tasting is more relaxed and
              affordable than dinner. Reserve 3+ days ahead. The best food
              experience in the city, full stop.
            </p>
          </SpotCard>

          <SpotCard name="La Tequila" type="Upscale Mexican" cost="220–380 MXN mains" address="Av. México 2830" verdict="must-see">
            <p>
              Converted 1940s house, excellent cocktail list, romantic
              courtyard seating. The mole negro is outstanding. More accessible
              than Alcalde, equally atmospheric. Reserve for Friday/Saturday.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/22-romantic-candlelit-dinner.jpg"
            alt="Romantic candlelit dinner setting in Guadalajara restaurant for date night"
            caption="GDL's upscale restaurants offer candlelit ambiance at a fraction of US prices"
            aspectRatio="landscape"
          />

          <SpotCard name="Bruna" type="Italian-Mexican" cost="150–220 MXN" address="Calle General San Martín 34" verdict="worth-it">
            <p>
              Wood-fired pizzas with Mexican twists in a cozy Colonia Americana
              space. Casual romantic — the kind of place for a midweek date
              without the formality. Good natural wine list.
            </p>
          </SpotCard>

          <TipCard type="money">
            <strong>Couples dinner budget:</strong> A romantic dinner for two
            at La Tequila with cocktails: ~1,200 MXN ($70 USD). The same
            caliber dinner in Mexico City or any US city would cost 2–3x. GDL
            makes romantic splurges very affordable.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Guadalajara good for a couples trip?", answer: "Excellent. Beautiful neighborhoods for strolling, romantic restaurants at affordable prices, mariachi serenades, tequila tasting, and the Mazamitla cabin escape. It's one of Mexico's most underrated romantic destinations." },
          { question: "What's the most romantic thing to do?", answer: "Tie between a golden hour walk through Colonia Americana (free, stunning) and a Mazamitla cabin weekend (fireplace, mountain air, total escape). For a single evening: mariachi serenade at El Parián over cantaritos." },
          { question: "Best hotel for couples?", answer: "Casa Fayette (4,500+ MXN) is GDL's most romantic hotel — design-magazine interiors, pool, converted mansion. For mid-range charm: Hotel de Mendoza (2,200 MXN) in Centro with a colonial courtyard." },
          { question: "Is it safe for couples at night?", answer: "Yes. Colonia Americana and Chapultepec are safe for evening strolls and bar hopping. The nightlife corridor is well-lit and populated. Uber home for anything after midnight. See our safety guide." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Works great for couples." },
          { label: "Mazamitla", href: "/mazamitla-day-trip", description: "Cabin weekend escape." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Romantic day out." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Restaurant picks." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "Date night bars." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Romantic hotel options." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
