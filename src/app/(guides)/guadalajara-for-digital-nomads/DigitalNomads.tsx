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

export function DigitalNomads() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Digital Nomads", href: "/guadalajara-for-digital-nomads" },
        ]}
        article={{
          headline: "Guadalajara for Digital Nomads 2026",
          description: "Coworking, cost of living, and remote work guide.",
          datePublished: "2026-03-24",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-for-digital-nomads",
        }}
      />

      <GuideHero
        breadcrumbLabel="Digital Nomads"
        kicker="Remote Work"
        kickerColor="agave"
        title="Guadalajara for Digital Nomads"
        subtitle="Mexico's tech capital with fast internet, cheap living, excellent coffee shops, and a growing remote work community. Here's everything you need."
        pills={["Cost of living", "Coworking spaces", "Internet speeds", "Visa info"]}
        updatedDate="Mar 2026"
        readTime="11 min"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        imageAlt="Coworking space in Guadalajara"
      />

      <CanteraDivider className="my-0" />

      {/* Why GDL */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Why Guadalajara for Remote Work
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara is Mexico&apos;s Silicon Valley — home to Oracle, Intel,
              IBM, and hundreds of tech startups. This means fast, reliable
              internet, a growing coworking scene, and a city that understands
              remote work culture. Add in CST timezone (same as Chicago — friendly
              for US meetings), a cost of living 60–70% below US cities, and
              direct flights to major US hubs, and GDL is one of Latin
              America&apos;s most underrated nomad bases.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Digital nomads working at a coffee shop in Guadalajara with laptops"
            caption="GDL's cafe culture and fast WiFi make it a natural fit for remote workers"
            aspectRatio="landscape"
          />

          <TipCard type="local">
            <strong>GDL vs CDMX for nomads:</strong> CDMX is the bigger nomad
            hub with more coworking options and a larger international community.
            GDL is smaller, cheaper, less saturated, and has a tighter
            community. If you want to be one of 50,000 nomads, go to CDMX. If
            you want to actually integrate into a city, GDL is better.
          </TipCard>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Monthly Cost of Living
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-4">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Expense</span>
                  <span>Budget</span>
                  <span>Comfortable</span>
                </div>
              </div>
              {[
                { item: "Rent (furnished 1BR)", budget: "8,000–12,000", mid: "14,000–22,000" },
                { item: "Coworking", budget: "0 (cafés)", mid: "2,500–4,500" },
                { item: "Food", budget: "5,000–7,000", mid: "8,000–12,000" },
                { item: "Transport", budget: "1,500", mid: "2,500" },
                { item: "Phone/Internet", budget: "500", mid: "800" },
                { item: "Entertainment", budget: "2,000", mid: "4,000" },
                { item: "Gym", budget: "500–800", mid: "800–1,500" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 text-xs">{row.item}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Monthly Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~17,500</span>
                <span className="font-mono text-xs text-tequila">~32,800</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">~$1,030</span>
                <span className="font-mono">~$1,930</span>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>$1,000–2,000 USD/month</strong> covers everything
            comfortably including a private apartment, coworking, eating out
            daily, and weekend activities. That&apos;s less than rent alone in
            most US cities.
          </TipCard>
        </div>
      </section>

      {/* Coworking & WiFi */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Coworking & WiFi
            </h2>
          </ScrollReveal>

          <SpotCard name="Selina Coworking" type="Coworking + hostel" cost="Day pass 250 MXN / Monthly 3,500 MXN" address="Av. Chapultepec" verdict="worth-it">
            <p>
              International coworking chain with a social vibe. Good for meeting
              other nomads. Fast WiFi (80+ Mbps), decent desks, common areas.
              The hostel downstairs means it can get social/noisy.
            </p>
          </SpotCard>

          <SpotCard name="Centraal Coworking" type="Dedicated coworking" cost="Monthly ~4,000 MXN" address="Colonia Americana" verdict="must-see">
            <p>
              Purpose-built coworking with private offices, meeting rooms, and
              100+ Mbps fiber. Quieter, more professional than Selina. The local
              tech startup crowd works here. Good for focused work days.
            </p>
          </SpotCard>

          <SpotCard name="Café Palreal" type="Café with WiFi" cost="65+ MXN (coffee)" address="Av. Chapultepec Sur 435" verdict="must-see">
            <p>
              The best café for working. Reliable WiFi (40+ Mbps), outlets at
              most seats, no time pressure from staff. Buy a coffee every 2 hours
              to be polite. Best for morning sessions; gets social by afternoon.
            </p>
          </SpotCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
            alt="Chapultepec avenue in Guadalajara at night near coworking spaces and cafes"
            caption="Av. Chapultepec is the hub for nomad-friendly coworking and social life"
            aspectRatio="wide"
          />

          <TipCard type="tip">
            <strong>Internet speeds:</strong> Telmex fiber in Colonia Americana
            delivers 100–200 Mbps. Most apartments include internet. Coworking
            spaces run 80–150 Mbps. Café WiFi varies (30–60 Mbps typical). For
            Zoom calls, any coworking space or decent café works fine. Backup:
            Telcel 4G/5G data is reliable in the city center.
          </TipCard>
        </div>
      </section>

      {/* Neighborhoods & Visa */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Best Neighborhoods for Nomads
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Colonia Americana / Chapultepec</strong> is the obvious
            choice — walkable to coworking, cafés, restaurants, and nightlife.
            Most nomads end up here. Apartments: 12,000–20,000 MXN/month on
            Facebook groups or Inmuebles24.
          </TipCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80"
            alt="Tree-lined plaza and gardens in Guadalajara residential neighborhood for digital nomads"
            caption="Leafy plazas in Colonia Americana offer a peaceful break between work sessions"
            aspectRatio="landscape"
          />

          <TipCard type="local">
            <strong>Providencia</strong> for the quieter, more suburban option.
            Bigger apartments, safer feel, but you&apos;ll need Uber for
            everything social. Better if you&apos;re working long hours and
            don&apos;t need walkable nightlife.
          </TipCard>

          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mt-10 mb-4">
              Visa & Logistics
            </h2>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Tourist visa:</strong> US, Canadian, and EU citizens get 180
            days visa-free on arrival. Immigration may stamp less (90 or 120
            days) — politely request 180 days and show a return flight. This
            covers most nomad stays. For longer: exit to Guatemala or the US
            and re-enter for a fresh 180 days.
          </TipCard>

          <TipCard type="money">
            <strong>Temporary Resident visa:</strong> If you want to stay 1–4
            years legally, apply for Residente Temporal at a Mexican consulate.
            Requires proof of income (~$2,500 USD/month or ~$43,000 savings).
            Takes 2–4 weeks to process. Gives you a CURP (tax ID) and ability
            to open a Mexican bank account.
          </TipCard>

          <TipCard type="local">
            <strong>SIM card:</strong> Buy a Telcel SIM at any OXXO for ~200
            MXN/month with data. Or use eSIM (Airalo, Holafly) if your phone
            supports it. Telcel has the best coverage in Jalisco.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Guadalajara good for digital nomads?", answer: "Yes — fast internet, low cost of living, CST timezone, growing coworking scene, and excellent quality of life. It's less saturated than CDMX or Playa del Carmen, which means cheaper rents and easier integration." },
          { question: "How much does it cost to live in Guadalajara as a nomad?", answer: "Budget: ~$1,000 USD/month. Comfortable: ~$1,900 USD/month. This includes rent, coworking, food, transport, and entertainment. You can live well here on very little." },
          { question: "What's the internet like?", answer: "Good to excellent. Fiber internet (100-200 Mbps) is available in Colonia Americana and most central neighborhoods. Coworking spaces offer 80-150 Mbps. 4G/5G mobile data is reliable for backup." },
          { question: "Is it easy to find a monthly apartment?", answer: "Yes. Facebook groups (Departamentos Guadalajara, Roommates GDL) and Inmuebles24 are the main platforms. Furnished 1BR apartments in Colonia Americana run 12,000-20,000 MXN/month. Many landlords don't require Mexican IDs for short-term furnished rentals." },
          { question: "What timezone is Guadalajara?", answer: "CST (UTC-6), same as Chicago and Dallas. Good overlap with US East Coast (1 hour behind) and US West Coast (2 hours ahead). Less ideal for European collaboration (7-8 hours behind)." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Neighborhood deep dives." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Daily cost breakdowns." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "The nomad neighborhood." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Long-term safety awareness." },
          { label: "GDL vs CDMX", href: "/guadalajara-vs-mexico-city", description: "Nomad comparison." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Daily transport." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
