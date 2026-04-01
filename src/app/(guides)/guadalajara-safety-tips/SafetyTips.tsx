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

interface ZoneCardProps {
  zone: string;
  rating: "safe" | "mostly-safe" | "caution" | "avoid";
  dayNote: string;
  nightNote: string;
  children: React.ReactNode;
}

const ratingConfig = {
  safe: { label: "Safe", color: "bg-agave/10 text-agave border-agave/20" },
  "mostly-safe": { label: "Mostly Safe", color: "bg-tequila/10 text-tequila border-tequila/20" },
  caution: { label: "Use Caution", color: "bg-cantera/10 text-cantera border-cantera/20" },
  avoid: { label: "Avoid", color: "bg-red-100 text-red-700 border-red-200" },
};

function ZoneCard({ zone, rating, dayNote, nightNote, children }: ZoneCardProps) {
  const r = ratingConfig[rating];
  return (
    <ScrollReveal>
      <div className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-5 my-5">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="font-heading text-base font-bold text-obsidiana">{zone}</h3>
          <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${r.color}`}>
            {r.label}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-0.5">Daytime</p>
            <p className="text-xs text-obsidiana/60">{dayNote}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-obsidiana/40 mb-0.5">After Dark</p>
            <p className="text-xs text-obsidiana/60">{nightNote}</p>
          </div>
        </div>
        <div className="text-sm text-obsidiana/65 leading-relaxed">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export function SafetyTips() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Safety Tips", href: "/guadalajara-safety-tips" },
        ]}
        article={{
          headline: "Is Guadalajara Safe? 2026 Safety Guide",
          description: "Zone-by-zone honest safety breakdown for Guadalajara.",
          datePublished: "2026-01-22",
          dateModified: "2026-03-12",
          url: "https://guadalajaraitinerary.com/guadalajara-safety-tips",
        }}
      />

      <GuideHero
        breadcrumbLabel="Safety Tips"
        kicker="Honest Assessment"
        kickerColor="cantera"
        title="Is Guadalajara Safe?"
        subtitle="No sugarcoating, no fearmongering. A zone-by-zone breakdown of what's safe, what needs awareness, and what to actually worry about (not much)."
        pills={["Zone-by-zone", "Updated Mar 2026", "Practical tips", "Scam alerts"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1600&q=80"
        imageAlt="Busy pedestrian street in Guadalajara Centro"
      />

      <CanteraDivider className="my-0" />

      {/* The Honest Take */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              The Bottom Line
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Honest Take
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              <strong>Guadalajara is safe for tourists using basic urban
              awareness.</strong> The tourist zones (Centro Histórico, Tlaquepaque,
              Colonia Americana, Chapultepec, Zapopan center) are patrolled,
              populated, and genuinely fine day and night. Millions of tourists
              visit annually without incident.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              That said, Guadalajara is Mexico&apos;s second-largest city with
              real urban issues. Petty crime (phone snatching, pickpocketing in
              crowded markets) exists. Some peripheral areas have cartel-related
              violence that does not affect tourists but makes headlines. This
              guide tells you exactly where you&apos;re fine and where you
              need awareness.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
            alt="Well-lit Guadalajara avenue at night with pedestrians and restaurants"
            caption="Tourist corridors like Av. Chapultepec stay populated and well-lit until late."
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>The one rule that covers 90% of safety:</strong> We recommend
            staying in tourist/commercial areas, using Uber instead of hailing
            street taxis, and not flashing expensive electronics in crowded
            markets. That&apos;s it. The same rules you&apos;d follow in any
            major city.
          </TipCard>
        </div>
      </section>

      {/* Zone-by-Zone */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Zone by Zone
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Safety by Neighborhood
            </h2>
            <p className="text-sm text-obsidiana/50 mb-4">
              Every area you&apos;re likely to visit, rated honestly
            </p>
          </ScrollReveal>

          <ZoneCard
            zone="Colonia Americana / Lafayette"
            rating="safe"
            dayNote="Completely safe, well-populated"
            nightNote="Safe — bars and restaurants open until 2am"
          >
            <p>
              GDL&apos;s safest tourist neighborhood. Tree-lined streets, constant
              foot traffic, well-lit at night. The bar scene on Av. Chapultepec
              means there are always people around until late. Standard awareness
              applies: don&apos;t leave bags unattended at café tables.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Centro Histórico (North of Av. Juárez)"
            rating="safe"
            dayNote="Completely safe, very busy"
            nightNote="Safe on main plazas, quieter side streets after 10pm"
          >
            <p>
              The cathedral area, Plaza de Armas, and Hospicio Cabañas zone are
              heavily policed and bustling until 9–10pm. After that, main plazas
              are still fine but side streets empty out. Walking between plazas
              on lit main roads = no issue. Cutting through dark residential
              blocks at midnight = unnecessary risk.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Centro Histórico (South of Av. Juárez / Mercado Area)"
            rating="mostly-safe"
            dayNote="Safe but crowded — watch your phone"
            nightNote="Avoid walking after 9pm, Uber instead"
          >
            <p>
              Mercado San Juan de Dios and the surrounding streets are busy
              commercial areas during the day. Pickpocketing risk is real in
              the market — keep phones in front pockets and bags zipped.
              Calzada Independencia south of the market empties out at night
              and should be avoided on foot. Always Uber from this area after dark.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Tlaquepaque"
            rating="safe"
            dayNote="Very safe, tourist-oriented"
            nightNote="Safe until El Parián closes (~10pm), then quiet"
          >
            <p>
              The pedestrianized artisan streets are some of the safest in the
              metro area. Tourist police patrol regularly. After El Parián closes
              around 10pm, the area gets quiet but isn&apos;t dangerous — just
              empty. Uber back to your hotel rather than walking empty streets.
            </p>
          </ZoneCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1585975421498-1e339f0e5c5b?w=800&q=80"
            alt="Colonial Guadalajara street during daytime with pedestrians walking safely"
            caption="Guadalajara's tourist neighborhoods are well-patrolled and safe during the day."
            aspectRatio="wide"
          />

          <ZoneCard
            zone="Chapultepec (Av. Chapultepec Corridor)"
            rating="safe"
            dayNote="Completely safe"
            nightNote="Safe — the nightlife keeps streets populated"
          >
            <p>
              The bar corridor is well-lit, well-populated, and patrolled. The
              main safety concern here is drink-spiking (same as any nightlife
              zone worldwide) — watch your drink and don&apos;t accept drinks
              from strangers. Walking home from bars along the main avenue is fine.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Zapopan Centro"
            rating="safe"
            dayNote="Safe, less crowded than Centro"
            nightNote="Safe near the Basilica, quieter than Centro"
          >
            <p>
              A quieter, more residential version of Centro. The area around the
              Basílica and MAZ museum is well-maintained and patrolled. Less foot
              traffic at night than Colonia Americana but not unsafe — just quieter.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Providencia / Zona Real"
            rating="safe"
            dayNote="Very safe, residential"
            nightNote="Very safe but deserted sidewalks"
          >
            <p>
              The affluent suburban area. Virtually zero street crime. The only
              &quot;risk&quot; is that you&apos;ll Uber everywhere because nothing
              is walkable. Feels like any safe American suburb.
            </p>
          </ZoneCard>

          <ZoneCard
            zone="Peripheral / Industrial Areas"
            rating="avoid"
            dayNote="No tourist reason to visit"
            nightNote="Avoid completely"
          >
            <p>
              Areas like Oblatos, parts of Tonalá outside the market zone,
              and the southern industrial belt have no tourist attractions and
              higher crime rates. You won&apos;t accidentally end up there
              unless you&apos;re driving to the wrong address. If your Uber
              navigation takes you through unfamiliar areas, stay in the car.
            </p>
          </ZoneCard>
        </div>
      </section>

      {/* Scams & Petty Crime */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              What to Actually Watch For
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Scams & Petty Crime
            </h2>
          </ScrollReveal>

          <TipCard type="skip">
            <strong>Street taxi overcharging.</strong> Non-app taxis routinely
            charge tourists 2–3x the real fare. Always use Uber or Didi. If you
            must take a street taxi, agree on the price before getting in. A
            Centro-to-Chapultepec ride should be 50–80 MXN, not 200.
          </TipCard>

          <TipCard type="skip">
            <strong>Mercado pickpockets.</strong> Based on feedback from readers
            who visited in early 2026, Mercado San Juan de Dios and
            Mercado Corona have active pickpockets during peak hours (11am–2pm).
            Phone in front pocket or inside a cross-body bag. Don&apos;t put your
            phone on the table while eating at market stalls.
          </TipCard>

          <TipCard type="skip">
            <strong>&quot;Friendly&quot; distraction scams.</strong> Someone bumps
            into you or squirts something on your jacket, then a &quot;helper&quot;
            offers to clean it while their partner lifts your wallet. Common near
            Mercado San Juan de Dios. If someone spills something on you, walk
            away and clean it yourself.
          </TipCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1667675068275-d822c63b1217?w=800&q=80"
            alt="Busy Mexican market stalls in Guadalajara where pickpocket awareness is important"
            caption="Markets like San Juan de Dios are safe but require awareness of your belongings."
            aspectRatio="landscape"
          />

          <TipCard type="skip">
            <strong>ATM skimming.</strong> Use ATMs inside banks, not standalone
            machines on the street. Banorte and HSBC ATMs are the most reliable.
            Cover your PIN. Avoid ATMs at convenience stores (OXXO, 7-Eleven) —
            higher fees and more skimming risk.
          </TipCard>

          <TipCard type="skip">
            <strong>Tequila shop &quot;free tastings.&quot;</strong> In Tequila
            town, shops offer free tastings of low-quality mixto tequila and
            then pressure-sell overpriced bottles. The real distilleries don&apos;t
            need to lure you off the street. See our{" "}
            <Link href="/tequila-day-trip" className="text-cantera hover:underline">
              Tequila Day Trip guide
            </Link>.
          </TipCard>
        </div>
      </section>

      {/* Practical Safety Tips */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Practical Safety Tips
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Transport:</strong> Always Uber or Didi. Never hail a random
            taxi off the street. Check that the license plate matches the app.
            Share your trip with someone. Rides are cheap (35–65 MXN within the
            city) — there&apos;s no reason to take unnecessary risks.
          </TipCard>

          <TipCard type="tip">
            <strong>Money:</strong> Carry only a day&apos;s worth of cash in
            your front pocket and leave the rest at your hotel. If someone
            demands your wallet, hand it over — nothing in it is worth a
            confrontation. See our{" "}
            <Link href="/guadalajara-budget-guide" className="text-agave hover:underline">
              budget guide
            </Link>{" "}
            for daily cash amounts and ATM tips.
          </TipCard>

          <TipCard type="tip">
            <strong>Phone:</strong> The #1 stolen item. Don&apos;t walk and
            scroll on busy streets or near the road (motorcycle phone snatching
            exists). Use your phone freely in restaurants and cafés but keep it
            pocketed while walking through markets or bus stations.
          </TipCard>

          <TipCard type="tip">
            <strong>Drinking:</strong> GDL&apos;s nightlife is generally safe.
            Standard rules: don&apos;t accept drinks from strangers, watch your
            glass, stay with your group, and Uber home (never walk alone drunk
            at 3am). Chapultepec&apos;s bars are well-populated and staff are
            attentive.
          </TipCard>

          <TipCard type="tip">
            <strong>Emergency numbers:</strong> 911 (general emergency, operators
            speak some English), 088 (tourist helpline), 800-006-8839 (tourist
            police). We verified these numbers in March 2026 — save them in your phone. The tourist police in Centro and
            Tlaquepaque are genuinely helpful.
          </TipCard>

          <TipCard type="local">
            <strong>For solo female travelers:</strong> Guadalajara is one of
            Mexico&apos;s more progressive cities but machismo culture exists.
            Catcalling is less common in Colonia Americana and Chapultepec than
            in Centro. The same nightlife rules apply as anywhere: stay with
            your group, trust your instincts, and Uber everywhere after dark.
            Many female solo travelers report feeling safer here than in Mexico
            City due to the smaller scale and walkable neighborhoods.
          </TipCard>
        </div>
      </section>

      {/* Health */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Health & Food Safety
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Water:</strong> Don&apos;t drink tap water. Buy garrafones
            (5-gallon jugs) or bottled water. Restaurants use purified water and
            ice — you don&apos;t need to avoid ice cubes at restaurants (a common
            myth). Street stalls use purified water for aguas frescas.
          </TipCard>

          <TipCard type="tip">
            <strong>Street food safety:</strong> Eat at stalls with high
            turnover. Long lines = fresh food that doesn&apos;t sit around. The
            busiest birrerías and taquerías are the safest. Avoid raw lettuce
            and garnishes at questionable stalls. Cooked food is almost always
            fine. See our{" "}
            <Link href="/guadalajara-food-guide" className="text-agave hover:underline">
              Food Guide
            </Link>{" "}
            for vetted stalls.
          </TipCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
            alt="Uber ride through Guadalajara streets showing safe transport option"
            caption="Uber and Didi are the safest way to get around Guadalajara, especially after dark."
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>Altitude & sun:</strong> GDL sits at 1,566m (5,138 ft).
            You probably won&apos;t notice altitude effects, but dehydration
            is real — drink more water than you think you need. The sun is
            strong year-round; wear sunscreen even on cloudy days.
          </TipCard>

          <TipCard type="money">
            <strong>Pharmacies:</strong> Farmacias Guadalajara (green signs)
            are everywhere and sell most medications without a prescription —
            including antibiotics, which is useful for traveler&apos;s diarrhea.
            A doctor consultation at a pharmacy clinic is 40–60 MXN.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is Guadalajara safe for tourists in 2026?",
            answer:
              "Yes. The tourist areas (Centro, Colonia Americana, Chapultepec, Tlaquepaque, Zapopan center, Providencia) are safe with basic urban awareness. Millions of tourists visit annually. The cartel-related violence you see in headlines occurs in peripheral areas and does not target tourists.",
          },
          {
            question: "Is Guadalajara safer than Mexico City?",
            answer:
              "Comparable. The tourist zones of both cities are safe. GDL feels smaller and more manageable, which some travelers find more comfortable. Mexico City has more polished tourist infrastructure but also more aggressive petty crime in some areas. Both are fine with common sense.",
          },
          {
            question: "Can I walk around Guadalajara at night?",
            answer:
              "In Colonia Americana, Chapultepec, and the main plazas in Centro — yes. These areas have nightlife, restaurants, and foot traffic until midnight or later. Avoid walking in quiet residential or industrial areas after dark. When in doubt, Uber (35-65 MXN).",
          },
          {
            question: "Is Uber safe in Guadalajara?",
            answer:
              "Yes. Uber is widely used and considered the safest transport option. Always verify the license plate matches the app, share your trip, and sit in the back seat. Didi is an equally good alternative. Both are much safer than hailing a street taxi.",
          },
          {
            question: "Should I be worried about cartels?",
            answer:
              "Not as a tourist. Cartel activity exists in Jalisco but targets rival organizations and specific commercial interests, not tourists. You will not encounter cartel-related danger in tourist areas. The media coverage is real but wildly disproportionate to the risk faced by visitors.",
          },
          {
            question: "Do I need travel insurance for Guadalajara?",
            answer:
              "Recommended but not mandatory. Mexican hospitals accept cash/card payment and costs are much lower than the US. A basic travel insurance policy ($30-50 for a week) covers medical emergencies, trip cancellation, and lost luggage. SafetyWing or World Nomads are popular options.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Pick the safest neighborhood for your trip." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Safe transport options explained." },
          { label: "Solo Travel", href: "/guadalajara-solo-travel", description: "Safety tips specific to solo travelers." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "A safe, tested route through the city." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Vetted stalls with food safety tips." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Smart money handling in GDL." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
