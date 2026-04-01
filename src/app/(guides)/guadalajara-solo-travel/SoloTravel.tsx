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

export function SoloTravel() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Solo Travel", href: "/guadalajara-solo-travel" },
        ]}
        article={{
          headline: "Solo Travel in Guadalajara 2026",
          description: "Safety, hostels, and meeting people as a solo traveler.",
          datePublished: "2026-03-23",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-solo-travel",
        }}
      />

      <GuideHero
        breadcrumbLabel="Solo Travel"
        kicker="Trip Type"
        kickerColor="mariachi"
        title="Solo Travel in Guadalajara"
        subtitle="Guadalajara is excellent for solo travelers — safe, walkable, affordable, and easy to meet people. Here's how to do it right."
        pills={["Safety focused", "Social hostels", "Solo-friendly activities", "Female travel tips"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80"
        imageAlt="Solo traveler exploring a Mexican street"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Why GDL Works for Solo Travel
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara is one of Mexico&apos;s best solo destinations for
              three reasons: <strong>safety</strong> (the tourist areas are
              genuinely safe with basic awareness), <strong>walkability</strong>
              (Colonia Americana and Centro are built for strolling), and{" "}
              <strong>affordability</strong> (eating and drinking alone costs
              almost nothing here).
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              Unlike beach destinations where solo travelers stick out, GDL is
              a real city where people eat alone, work in cafés alone, and drink
              alone at cantinas. Solo travel feels natural here.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1585975421498-1e339f0e5c5b?w=800&q=80"
            alt="Walkable colonial street in Guadalajara ideal for solo travelers exploring on foot"
            caption="GDL's walkable neighborhoods make solo exploration easy and enjoyable"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Safety */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Solo Safety
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>The core rule:</strong> Stay in Colonia Americana,
            Chapultepec, Centro (north of Juárez), Tlaquepaque, or Zapopan.
            Uber everywhere after dark. Share your location with someone back
            home. That covers 95% of solo safety. See our full{" "}
            <Link href="/guadalajara-safety-tips" className="text-agave hover:underline">
              safety guide
            </Link>.
          </TipCard>

          <TipCard type="local">
            <strong>For solo female travelers:</strong> GDL is one of Mexico&apos;s
            more progressive cities — many female solo travelers report feeling
            safer here than in CDMX. Standard nightlife rules apply: watch your
            drink, trust your instincts, Uber home. For the full zone-by-zone
            breakdown, see our{" "}
            <Link href="/guadalajara-safety-tips" className="text-agave hover:underline">
              safety guide
            </Link>.
          </TipCard>

          <TipCard type="tip">
            <strong>Eating alone:</strong> Zero stigma. Market stalls, taquerías,
            and cantinas are built for solo diners — counter seating, fast
            service, communal vibes. Sit at the bar at El Parián for mariachi
            without needing a group. Restaurant dining alone is also completely
            normal — bring a book or phone, nobody cares.
          </TipCard>
        </div>
      </section>

      {/* Meeting People */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Meeting People
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80"
            alt="Social hostel common area in Guadalajara where solo travelers meet other backpackers"
            caption="Social hostels like Hospedarte are the easiest way to meet fellow travelers"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Social hostels:</strong> The easiest way to meet fellow
            travelers.
            <br />
            <strong>Hostel Hospedarte</strong> (Colonia Americana, 450 MXN dorm)
            — rooftop terrace with regular social events, walking tours, and
            bar crawls. The best backpacker social scene in GDL.
            <br />
            <strong>Selina</strong> (Chapultepec, 500 MXN dorm) — coworking +
            hostel hybrid, attracts digital nomads and younger travelers.
            Events most evenings.
            <br />
            <strong>Hostel Lit</strong> (Centro, 380 MXN dorm) — budget option
            near the cathedral with a social rooftop.
          </TipCard>

          <TipCard type="local">
            <strong>Beyond hostels:</strong> GDL&apos;s bar and café culture is
            naturally social. Sit at the bar (not a table) at Chapultepec
            venues — bartenders are conversational and other solo patrons are
            common. Coworking spaces (Selina, Centraal) are great for meeting
            other remote workers. Language exchange meetups happen weekly —
            check Facebook groups &quot;Intercambio GDL&quot; for schedules.
          </TipCard>

          <TipCard type="tip">
            <strong>Solo-friendly activities:</strong> Food tours (great for
            meeting people), walking tours of Centro (free, tip-based), cooking
            classes, bar crawls organized by hostels, and the Chapultepec
            tianguis (Saturday market on the avenue with a social vibe).
          </TipCard>
        </div>
      </section>

      {/* Solo Itinerary Tips */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Solo Itinerary Tips
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Coffee shop in Guadalajara with solo travelers working and socializing"
            caption="GDL's cafe culture makes it easy to spend a solo afternoon with a book or laptop"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Day trips alone:</strong> The Tequila bus (85 MXN from
            Central Vieja) is easy to do solo — no need for a group to split
            an Uber. Book La Fortaleza tour directly (they mix solo visitors
            into groups). Chapala is also easy solo by bus.
          </TipCard>

          <TipCard type="money">
            <strong>Solo budget advantage:</strong> GDL is one of the cheapest
            solo destinations in the Americas. Street food dinner: 150 MXN. Beer
            at a bar: 50 MXN. A full solo day including food, transport, and
            one activity: 500–800 MXN ($30–47 USD). The absence of the
            &quot;single supplement&quot; tax that kills solo budgets in resort
            destinations is refreshing.
          </TipCard>

          <TipCard type="local">
            <strong>Solo luxury that&apos;s affordable here:</strong> A
            mezcal tasting flight at Pare de Sufrir (250 MXN), a solo dinner
            at La Tequila (350 MXN with cocktail), a morning at{" "}
            <Link href="/hospicio-cabanas-guide" className="text-agave hover:underline">
              Hospicio Cabañas
            </Link>{" "}
            at your own pace, and a long afternoon in a Colonia
            Americana café. These solo pleasures would cost 3x in Europe.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Guadalajara safe for solo travelers?", answer: "Yes. The tourist areas are safe with basic urban awareness. Uber eliminates transport risk. Solo dining and drinking are completely normal — this is a real city, not a resort. See our safety guide for zone-by-zone details." },
          { question: "Is Guadalajara safe for solo female travelers?", answer: "Yes, with standard precautions. Colonia Americana and Chapultepec are safe day and night. Catcalling is less common than in some Mexican cities. The bar scene is mixed-gender and respectful. Uber home after dark, trust your instincts, and you'll be fine." },
          { question: "Will I meet people traveling solo?", answer: "Easily. Social hostels (Hospedarte, Selina) have regular events. The café and bar culture is naturally conversational. Coworking spaces attract other solo travelers and nomads. GDL's solo travel scene is growing." },
          { question: "Is it boring alone?", answer: "Not at all. GDL has enough museums, markets, neighborhoods, food, and nightlife to fill a week solo without repeating anything. The pace suits solo travel — you can linger at a birriería or spend 3 hours in a gallery without coordinating with anyone." },
          { question: "Should I book a tour or explore independently?", answer: "Independently for most things — our guides give you everything a tour would. Book a food tour if you want social interaction on Day 1 (800+ MXN). Book Tequila distillery tours directly. The free walking tours in Centro are a good solo icebreaker." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zone-by-zone breakdown." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Best solo neighborhoods." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Works perfectly solo." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Solo dining picks." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "The social neighborhood." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Solo budget planning." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
