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

function CompRow({ category, gdl, cdmx, winner }: { category: string; gdl: string; cdmx: string; winner: "gdl" | "cdmx" | "tie" }) {
  return (
    <div className="grid grid-cols-4 gap-2 px-4 py-3 border-t border-obsidiana/[0.06] text-sm">
      <span className="text-obsidiana/70 font-medium">{category}</span>
      <span className={`text-xs ${winner === "gdl" ? "text-agave font-medium" : "text-obsidiana/55"}`}>{gdl}</span>
      <span className={`text-xs ${winner === "cdmx" ? "text-tequila font-medium" : "text-obsidiana/55"}`}>{cdmx}</span>
      <span className={`font-mono text-[10px] ${winner === "gdl" ? "text-agave" : winner === "cdmx" ? "text-tequila" : "text-obsidiana/40"}`}>
        {winner === "gdl" ? "GDL ✓" : winner === "cdmx" ? "CDMX ✓" : "Tie"}
      </span>
    </div>
  );
}

export function GdlVsCdmx() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "GDL vs CDMX", href: "/guadalajara-vs-mexico-city" },
        ]}
        article={{
          headline: "Guadalajara vs Mexico City 2026",
          description: "Honest side-by-side comparison for travelers.",
          datePublished: "2026-03-25",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-vs-mexico-city",
        }}
      />

      <GuideHero
        breadcrumbLabel="GDL vs CDMX"
        kicker="Comparison"
        kickerColor="tequila"
        title="Guadalajara vs Mexico City"
        subtitle="Two great cities, very different vibes. An honest side-by-side comparison for travelers deciding where to go (or whether to do both)."
        pills={["Cost comparison", "Food • Safety • Culture", "Side-by-side data", "Who should go where"]}
        updatedDate="Mar 2026"
        readTime="11 min"
        image="/images/12-guadalajara-cityscape.jpg"
        imageAlt="Mexican cityscape comparison"
      />

      <CanteraDivider className="my-0" />

      {/* Side by Side — data first */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              Side-by-Side Comparison
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Category</span>
                  <span>Guadalajara</span>
                  <span>Mexico City</span>
                  <span>Winner</span>
                </div>
              </div>
              <CompRow category="Daily budget (mid)" gdl="$136 USD" cdmx="$175 USD" winner="gdl" />
              <CompRow category="Accommodation" gdl="30% cheaper" cdmx="More options" winner="gdl" />
              <CompRow category="Street food" gdl="Birria, tortas, tejuino" cdmx="Tacos, tlacoyos, quesadillas" winner="tie" />
              <CompRow category="Restaurants" gdl="Alcalde, La Tequila" cdmx="Pujol, Quintonil, Contramar" winner="cdmx" />
              <CompRow category="Museums" gdl="Hospicio Cabañas, MAZ" cdmx="Anthropology, Frida, MUAC" winner="cdmx" />
              <CompRow category="Nightlife" gdl="Chapultepec corridor" cdmx="Roma, Condesa, Juárez" winner="tie" />
              <CompRow category="Day trips" gdl="Tequila, Chapala, Guachi" cdmx="Teotihuacán, Taxco, Puebla" winner="tie" />
              <CompRow category="Walkability" gdl="Colonia Americana = great" cdmx="Roma/Condesa = great" winner="tie" />
              <CompRow category="Safety (tourist areas)" gdl="Very manageable" cdmx="Manageable, more petty crime" winner="gdl" />
              <CompRow category="Crowd levels" gdl="Low to moderate" cdmx="High (22M metro population)" winner="gdl" />
              <CompRow category="Air quality" gdl="Good (1,566m, wind)" cdmx="Poor (2,240m, valley smog)" winner="gdl" />
              <CompRow category="Public transit" gdl="Basic (Uber-dependent)" cdmx="Excellent metro system" winner="cdmx" />
              <CompRow category="English spoken" gdl="Less common" cdmx="More tourist-adapted" winner="cdmx" />
              <CompRow category="Artisan shopping" gdl="Tlaquepaque + Tonalá" cdmx="Coyoacán, La Ciudadela" winner="gdl" />
              <CompRow category="Tequila/Mezcal" gdl="Birthplace — unbeatable" cdmx="Good bars, no distilleries" winner="gdl" />
              <CompRow category="Architecture" gdl="Colonial + Art Deco" cdmx="Aztec to Art Nouveau" winner="cdmx" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Quick Verdict
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              <strong>Mexico City</strong> is the bigger, more internationally
              famous destination with world-class museums, more diverse
              neighborhoods, and a deeper food scene. It&apos;s also more
              expensive, more crowded, more polluted, and harder to navigate.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              <strong>Guadalajara</strong> is smaller, cheaper, more manageable,
              and more authentically Mexican. It has the better regional food
              story (birria, tortas ahogadas, tequila), better day trips, and
              a walkable bar/café scene that rivals CDMX&apos;s Roma Norte
              without the crowds.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/32-guadalajara-cathedral.jpg"
            alt="Colonial street in Guadalajara with colorful buildings contrasting Mexico City's urban sprawl"
            caption="Guadalajara's walkable colonial streets feel worlds apart from CDMX's megacity energy"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>The real answer:</strong> Do both. GDL (3–5 days) + CDMX
            (4–5 days) is the perfect Mexico trip. A 1-hour flight connects
            them for 1,000–2,500 MXN. If you can only pick one, read the
            breakdown below.
          </TipCard>
        </div>
      </section>

      {/* Category Deep Dives */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              Category Breakdown
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">Cost</h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              GDL is 20–30% cheaper across the board. Hotels, restaurants, and
              Uber rides all cost less. The gap is biggest in accommodation —
              a mid-range hotel in GDL&apos;s best neighborhood (Colonia
              Americana) runs 1,200–2,500 MXN vs 2,000–4,000 MXN for Roma
              Norte in CDMX. Street food prices are similar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">Food</h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Different strengths. GDL owns birria, tortas ahogadas, tequila,
              and tejuino — regional dishes you literally cannot get this good
              anywhere else. CDMX has more variety (tacos al pastor, mole,
              tlacoyos, international cuisine) and the higher end of fine dining
              (Pujol, Quintonil). For street food authenticity, GDL edges it.
              For restaurant diversity, CDMX wins.
            </p>
          </ScrollReveal>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Artisan market in Guadalajara's Tlaquepaque district compared to Mexico City shopping"
            caption="Tlaquepaque's artisan culture gives Guadalajara an edge in handcraft shopping"
            aspectRatio="landscape"
          />

          <ScrollReveal delay={0.2}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">Safety</h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Both are safe in tourist areas with basic awareness. CDMX has more
              petty crime (phone snatching, pickpocketing on metro) due to sheer
              population density. GDL feels smaller and more manageable — you&apos;re
              less likely to accidentally wander into a sketchy area. Neither city
              should scare you away.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">Culture & Sights</h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              CDMX has more world-class museums (Anthropology alone is worth the
              trip) and deeper layers of history (Aztec → Colonial → Revolution →
              Modern). GDL has Hospicio Cabañas (genuinely great), the mariachi
              tradition, and better artisan shopping. CDMX is more
              &quot;impressive&quot;; GDL is more &quot;genuine.&quot;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h3 className="font-heading text-lg font-bold text-obsidiana mt-6 mb-2">Vibe</h3>
            <p className="text-sm text-obsidiana/65 leading-relaxed">
              This is the biggest difference. CDMX is a megacity — intense,
              overwhelming, endlessly stimulating, exhausting. GDL is a big city
              that feels like a small one — walkable, unhurried, proud of its
              local culture without performing for tourists. CDMX impresses you.
              GDL grows on you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who Should Go Where */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Who Should Go Where
            </h2>
          </ScrollReveal>

          <ContentImage
            src="/images/10-colonial-plaza-jacarandas.jpg"
            alt="Mexican plaza with gardens in Guadalajara showing the city's relaxed atmosphere"
            caption="GDL's unhurried plazas vs CDMX's non-stop energy — different vibes for different travelers"
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>Choose Guadalajara if:</strong> You want authentic Mexican
            culture without tourist crowds, you love food and drink culture
            (especially tequila), you prefer walkable cities, you&apos;re on a
            tighter budget, or you want better day trips (Tequila alone is
            reason enough).
          </TipCard>

          <TipCard type="local">
            <strong>Choose Mexico City if:</strong> You want world-class museums,
            you love megacity energy, you want the widest variety of restaurants,
            you speak little Spanish (more English spoken), or you&apos;ve already
            been to GDL and want something bigger.
          </TipCard>

          <TipCard type="money">
            <strong>Do both if:</strong> You have 8+ days in Mexico. GDL (3–5
            days) + CDMX (4–5 days) is the perfect combo. Fly between them —
            1 hour, 1,000–2,500 MXN on Volaris or VivaAerobus. Start in GDL
            (the smaller, gentler city) and end in CDMX for the grand finale.
            See our{" "}
            <Link href="/mexico-city-to-guadalajara" className="text-cantera hover:underline">
              CDMX ↔ GDL transport guide
            </Link>.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Guadalajara worth visiting if I've already been to Mexico City?", answer: "Absolutely. They're very different experiences. GDL offers things CDMX doesn't: the Tequila day trip, Tlaquepaque artisan culture, birria in its birthplace, and a more relaxed pace. Think of it as the deep-cut Mexico experience vs CDMX's greatest hits." },
          { question: "Which is safer — Guadalajara or Mexico City?", answer: "Tourist areas of both are safe. GDL feels slightly safer due to smaller scale and less crowding. CDMX has more petty crime in transit. Neither should deter you from visiting." },
          { question: "Which has better food?", answer: "Depends what you value. GDL for regional authenticity (birria, tortas ahogadas, tequila). CDMX for variety and high-end dining. Street food quality is comparable. If you're a food traveler, the answer is: visit both." },
          { question: "How do I get between GDL and CDMX?", answer: "Flight: 1 hour, 1,000-2,500 MXN. Bus: 6-7 hours, 800-1,200 MXN on ETN (comfortable). We recommend flying unless you enjoy long bus rides through the Mexican countryside (which is actually nice on ETN's Primera Plus service)." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Plan your GDL days." },
          { label: "CDMX to GDL", href: "/mexico-city-to-guadalajara", description: "Transport between cities." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "GDL cost details." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "What makes GDL food unique." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "GDL safety breakdown." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Best neighborhoods." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
