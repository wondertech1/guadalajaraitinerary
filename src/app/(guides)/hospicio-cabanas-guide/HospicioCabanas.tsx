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

export function HospicioCabanas() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Hospicio Cabañas", href: "/hospicio-cabanas-guide" },
        ]}
        article={{
          headline: "Hospicio Cabañas Guide 2026",
          description: "Orozco's murals, UNESCO heritage, and visit logistics.",
          datePublished: "2026-03-20",
          dateModified: "2026-03-29",
          url: "https://guadalajaraitinerary.com/hospicio-cabanas-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Hospicio Cabañas"
        kicker="UNESCO World Heritage"
        kickerColor="mariachi"
        title="Hospicio Cabañas"
        subtitle="The single best thing in Guadalajara. Orozco's revolutionary frescoes, 23 neoclassical courtyards, and the chapel dome that changes how you see Mexican art."
        pills={["UNESCO World Heritage", "Orozco frescoes", "90 MXN (free Tue)", "45–60 min"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="/images/37-colonial-church.jpg"
        imageAlt="Hospicio Cabañas courtyard"
      />

      <CanteraDivider className="my-0" />

      {/* Context */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What You&apos;re Looking At
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Completed in 1810 as an orphanage and hospital (construction
              began 1805), commissioned by Bishop Juan Cruz Ruiz de Cabañas, the Hospicio is one of the finest neoclassical
              buildings in the Americas — 23 interconnected courtyards, a chapel
              modeled on European hospital-churches, and a scale that
              communicates care and ambition in equal measure.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              In 1938, José Clemente Orozco began painting the chapel frescoes,
              completing them in 1939 — creating 57 panels that are now considered
              among the most important murals in the Western Hemisphere. The
              building became a UNESCO World Heritage Site in 1997.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/31-colonial-courtyard.jpg"
            alt="Neoclassical courtyard with arched colonnades at Hospicio Cabañas Guadalajara"
            caption="One of 23 interconnected courtyards at Hospicio Cabañas"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Why it matters:</strong> Orozco is one of the &quot;Big
            Three&quot; Mexican muralists (alongside Diego Rivera and David
            Alfaro Siqueiros). Where Rivera painted idealized Mexican history
            and Siqueiros painted political propaganda, Orozco painted human
            suffering and transformation. His work at Cabañas is his most
            ambitious and personal — darker, more universal, and more powerful
            than anything at the Palacio de Bellas Artes in Mexico City.
          </TipCard>
        </div>
      </section>

      {/* The Murals */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Murals — What to Look For
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">
              The Chapel Dome — <em>El Hombre de Fuego</em> (Man of Fire)
            </h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The centerpiece. A human figure consumed by flames — not burning
              in agony but transforming through fire. The figure is genderless,
              raceless, and culturally unspecific. Orozco painted it as a
              universal symbol of human consciousness and its capacity for
              self-destruction and rebirth.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              <strong>How to see it:</strong> Lie down on the wooden benches
              directly under the dome and look straight up. Everyone does this —
              the benches are there for exactly this purpose. The effect is
              vertigo-inducing: the figure appears to be falling toward you
              or rising away from you depending on your angle.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-8 mb-2">
              The Wall Frescoes — Conquest & Civilization
            </h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The walls surrounding the dome depict the Spanish conquest and
              the collision of indigenous and European civilizations. Look for:
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-2">
              <strong>The Mechanical Horse:</strong> A nightmarish armored figure
              representing the dehumanization of conquest — the Spanish
              conquistador reduced to a machine of violence.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-2">
              <strong>The Cross and the Sword:</strong> Religion and military
              force depicted as intertwined — a searing critique of colonial
              evangelization that was radical for 1939.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              <strong>The Grey Figures:</strong> Depersonalized masses in the
              lower registers — Orozco&apos;s comment on how both indigenous and
              colonial systems crush individual identity.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/30-orozco-mural-fresco.jpg"
            alt="Orozco mural fresco detail showing conquest imagery at Hospicio Cabañas Guadalajara"
            caption="Orozco's wall frescoes depict the collision of civilizations"
            aspectRatio="wide"
          />

          <TipCard type="local">
            <strong>Art context you won&apos;t get from a plaque:</strong> Orozco
            painted these in 1938–1939, during the aftermath of the Mexican
            Revolution, the Spanish Civil War, and the rise of fascism in
            Europe. The murals are simultaneously about Mexico&apos;s colonial
            past and a warning about the present. The &quot;fire&quot; in Man
            of Fire is not comfort — it&apos;s the terrifying necessity of
            destroying the old world to build something new.
          </TipCard>
        </div>
      </section>

      {/* Courtyards & Contemporary Art */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Beyond the Murals
            </h2>
          </ScrollReveal>

          <ContentImage
            src="/images/16-art-gallery.jpg"
            alt="Contemporary art exhibition gallery inside Hospicio Cabañas Guadalajara"
            caption="Rotating contemporary exhibitions fill the outer galleries"
            aspectRatio="landscape"
          />

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The 23 courtyards are worth exploring even without the murals.
              The neoclassical architecture — arched colonnades, stone
              fountains, clean proportions — is peaceful and photogenic. The
              scale of the building (it housed 400+ orphans at its peak) is
              impressive on its own.
            </p>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The outer galleries host <strong>rotating contemporary art
              exhibitions</strong> — these change every few months and range
              from local Jalisco artists to international installations. Check
              their website or Instagram for current shows. Some exhibitions
              are excellent; all are free with your entry ticket.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Visit Logistics
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-4">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Detail</span>
                  <span>Info</span>
                </div>
              </div>
              {[
                { label: "Entry", info: "90 MXN (free on Tuesdays)" },
                { label: "Hours", info: "Tue–Sun 10am–6pm (closed Monday)" },
                { label: "Time needed", info: "45–60 min (chapel + courtyards)" },
                { label: "Location", info: "Calle Cabañas 8, Centro Histórico" },
                { label: "From cathedral", info: "15-min walk east" },
                { label: "Photography", info: "Allowed (no flash in chapel)" },
                { label: "Audio guide", info: "Available in English, 50 MXN" },
                { label: "Best day", info: "Tuesday (free) or weekday morning (quiet)" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-2 gap-4 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/50 font-mono text-xs">{row.label}</span>
                  <span className="text-obsidiana/70">{row.info}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Tuesday hack:</strong> Free entry on Tuesdays. The galleries
            are also less crowded. If your schedule allows, this is the day.
          </TipCard>

          <TipCard type="tip">
            <strong>Audio guide:</strong> Worth the 50 MXN. The English audio
            explains the symbolism in each panel — context that transforms
            &quot;impressive paintings&quot; into &quot;one of the most important
            artworks you&apos;ll ever see.&quot;
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Hospicio Cabañas worth visiting?", answer: "It's the single best thing in Guadalajara and one of the most important art sites in the Americas. Yes, absolutely. Even people who 'don't like museums' are moved by the chapel frescoes." },
          { question: "How long do I need?", answer: "45-60 minutes for the chapel and a courtyard walk. Add 20-30 minutes for the contemporary art galleries if something interesting is showing. Don't rush the chapel — spend at least 15 minutes lying on the benches looking up." },
          { question: "Is the audio guide worth it?", answer: "Yes. 50 MXN for context that transforms the experience. Without it, you'll see impressive paintings. With it, you'll understand what makes them some of the most important murals in the world." },
          { question: "Can I take photos?", answer: "Yes, including in the chapel. No flash. Tripods may be restricted during busy times. The best phone photos of Man of Fire are taken lying on the benches, pointed straight up at the dome." },
          { question: "Is it accessible?", answer: "The ground-floor courtyards are wheelchair accessible. The chapel is on the ground floor. Some upper galleries may have limited access — ask staff for assistance." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "Cabañas is the Centro highlight." },
          { label: "Street Art Guide", href: "/guadalajara-street-art-guide", description: "Orozco's other GDL murals." },
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Cabañas is the morning star." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Built into Day 1." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Free on Tuesdays." },
          { label: "For Couples", href: "/guadalajara-for-couples", description: "Cultural date idea." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
