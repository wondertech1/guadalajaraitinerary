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

export function StreetArtGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Street Art", href: "/guadalajara-street-art-guide" },
        ]}
        article={{
          headline: "Guadalajara Street Art Guide 2026",
          description: "Murals, routes, and muralism history.",
          datePublished: "2026-03-26",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-street-art-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Street Art"
        kicker="Culture"
        kickerColor="cantera"
        title="Guadalajara Street Art Guide"
        subtitle="From Orozco's revolutionary frescoes to today's urban murals — GDL has a muralism tradition deeper than most cities. Two walking routes and the walls worth finding."
        pills={["2 walking routes", "Muralism history", "Specific walls", "Free + self-guided"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="/images/23-street-mural.jpg"
        imageAlt="Colorful street mural in Guadalajara"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Muralism Tradition
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara&apos;s connection to mural art runs deeper than most
              cities. José Clemente Orozco — one of the &quot;Big Three&quot;
              Mexican muralists alongside Diego Rivera and David Alfaro Siqueiros
              — was born in Jalisco and painted his greatest works in GDL. His
              frescoes at Hospicio Cabañas and Palacio de Gobierno are some of
              the most powerful public art in the Americas.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              That tradition continues today. Government-sponsored mural
              programs, street art festivals, and independent urban artists
              have filled the city with contemporary murals — particularly in
              Barrio de Analco, along Av. Federalismo, and in Colonia Americana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-lg bg-obsidiana/[0.03] border border-obsidiana/[0.06] p-5 my-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-obsidiana/40 mb-2">Route Note</p>
            <p className="text-sm text-obsidiana/60 leading-relaxed">
              The murals below are organized by neighborhood, not by walking route. If you want to see them in order, start in Centro (Hospicio Cabañas area), walk south to Analco, then Uber to Chapultepec for the contemporary pieces.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Classical Murals */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Classical Murals — Orozco&apos;s GDL
            </h2>
          </ScrollReveal>

          <ContentImage
            src="/images/30-orozco-mural-fresco.jpg"
            alt="Graffiti and mural wall art in Guadalajara continuing the city's muralism tradition"
            caption="GDL's muralism tradition stretches from Orozco's revolutionary frescoes to today's urban walls"
            aspectRatio="wide"
          />

          <SpotCard name="Hospicio Cabañas — Man of Fire" type="Fresco" duration="45–60 min" cost="90 MXN" address="Calle Cabañas 8" verdict="must-see">
            <p>
              Orozco&apos;s masterpiece. The chapel ceiling fresco — <em>El
              Hombre de Fuego</em> (Man of Fire) — depicts a human figure
              consumed by flames, symbolizing revolution and rebirth. The entire
              chapel is covered in frescoes exploring conquest, religion, and
              human suffering. Lie on the wooden benches and look up. See our{" "}
              <Link href="/hospicio-cabanas-guide" className="text-cantera hover:underline">
                full Cabañas guide
              </Link>.
            </p>
          </SpotCard>

          <SpotCard name="Palacio de Gobierno — Hidalgo" type="Fresco" duration="10 min" cost="Free" address="Plaza de Armas" verdict="must-see">
            <p>
              The staircase mural depicting Miguel Hidalgo wielding a blazing
              torch is arguably more visceral than the Cabañas works. The fire,
              the chains, the writhing figures — it&apos;s Orozco at his most
              dramatic. Free entry, 10 minutes, and most tourists walk right
              past it.
            </p>
          </SpotCard>

          <SpotCard name="Paraninfo de la Universidad" type="Fresco" duration="15 min" cost="Free" address="Av. Juárez 975" verdict="worth-it">
            <p>
              Orozco&apos;s dome fresco in the University of Guadalajara&apos;s
              auditorium. Less visited than Cabañas but equally powerful — the
              theme is education as liberation. Free, open during university
              hours. Ask at the front desk for access.
            </p>
          </SpotCard>
        </div>
      </section>

      {/* Contemporary Street Art */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Contemporary Street Art — Walking Routes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-3">
              Route 1: Barrio de Analco (45 min)
            </h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              GDL&apos;s oldest neighborhood (pre-dating the colonial center)
              has become the city&apos;s densest concentration of contemporary
              murals. Walk Calzada del Campesino from the Mercado San Juan de
              Dios area south — both sides are covered in large-scale murals
              ranging from photorealistic portraits to abstract designs.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              <strong>Key walls:</strong> The multi-story mural at Campesino
              and Calle 5 de Febrero (indigenous woman portrait), the geometric
              abstracts near Parroquia de San Sebastián de Analco, and the
              political murals along Calzada Independencia.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/29-chapultepec-nightlife.jpg"
            alt="Colorful urban street art along Av. Federalismo in Guadalajara at golden hour"
            caption="Av. Federalismo's building facades feature commissioned murals from annual street art festivals"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Safety note:</strong> Barrio de Analco is a real working-class
            neighborhood, not a tourist zone. It&apos;s safe during daylight but
            exercise basic awareness. Don&apos;t go after dark. Best visited
            morning (9–11am) when the light is good for photos.
          </TipCard>

          <ScrollReveal delay={0.15}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-8 mb-3">
              Route 2: Av. Federalismo + Colonia Americana (60 min)
            </h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              A more scattered route through safer, more tourist-friendly areas.
              Walk south on Av. Federalismo from the Rotonda — several building
              facades have commissioned murals from the city&apos;s annual
              street art festival. Then cut west into Colonia Americana where
              smaller murals and paste-ups appear on Calle Marsella, General
              San Martín, and Av. de la Paz.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed">
              The Colonia Americana art is more conceptual and design-influenced
              (think graphic illustration, typography, abstract geometry) compared
              to Analco&apos;s more political and figurative work.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/32-guadalajara-cathedral.jpg"
            alt="Guadalajara colonial street with art galleries and murals in Colonia Americana"
            caption="Colonia Americana's side streets hide design-influenced murals and paste-ups"
            aspectRatio="landscape"
          />

          <TipCard type="local">
            <strong>Best light for photos:</strong> Morning (8–10am) for Analco
            (east-facing walls). Golden hour (5–6:30pm) for Colonia Americana
            (west-facing facades). Overcast days are actually ideal — no harsh
            shadows on the murals.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Guadalajara good for street art?", answer: "Yes — and it has more depth than most cities because of the Orozco connection. You get classical revolutionary frescoes AND contemporary urban murals in the same city. The combination is unique in Mexico." },
          { question: "Do I need a guided tour?", answer: "No. Both walking routes are self-guided and easy to follow. The classical murals (Cabañas, Palacio) have on-site signage. For contemporary street art, just walk and discover. If you want context, some hostels offer free walking tours that include Analco murals." },
          { question: "Is the street art area safe?", answer: "Barrio de Analco is safe during daylight but it's a real neighborhood, not a tourist zone. Don't go after dark. Colonia Americana is safe anytime. Both routes are fine for solo travelers during the day." },
          { question: "How long do I need?", answer: "2-3 hours covers both routes plus Cabañas. Add 30 minutes for Palacio de Gobierno and Paraninfo. A half-day is ideal if you're a mural enthusiast." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Hospicio Cabañas", href: "/hospicio-cabanas-guide", description: "Orozco's masterpiece in detail." },
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "Palacio de Gobierno murals." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "Colonia Americana art scene." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Fit art into your trip." },
          { label: "For Couples", href: "/guadalajara-for-couples", description: "Art walk date idea." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Analco safety details." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
