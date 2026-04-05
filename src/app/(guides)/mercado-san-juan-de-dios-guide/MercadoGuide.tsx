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

interface FloorCardProps {
  floor: string;
  verdict: "go" | "skip" | "eat";
  what: string;
  children: React.ReactNode;
}

const floorStyles = {
  go: { label: "Worth It", color: "border-l-agave" },
  skip: { label: "Skip", color: "border-l-cantera" },
  eat: { label: "Eat Here", color: "border-l-tequila" },
};

function FloorCard({ floor, verdict, what, children }: FloorCardProps) {
  const f = floorStyles[verdict];
  return (
    <ScrollReveal>
      <div className={`rounded-[6px] border border-obsidiana/[0.06] ${f.color} border-l-[3px] bg-piedra p-5 my-5`}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-heading text-lg font-bold text-obsidiana">{floor}</h3>
          <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
            verdict === "go" ? "bg-agave/10 text-agave border border-agave/20" :
            verdict === "eat" ? "bg-tequila/10 text-tequila border border-tequila/20" :
            "bg-cantera/10 text-cantera border border-cantera/20"
          }`}>
            {f.label}
          </span>
        </div>
        <p className="font-mono text-[11px] text-obsidiana/40 mb-3">{what}</p>
        <div className="text-sm text-obsidiana/65 leading-relaxed space-y-2">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export function MercadoGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Mercado San Juan de Dios", href: "/mercado-san-juan-de-dios-guide" },
        ]}
        article={{
          headline: "Mercado San Juan de Dios Guide 2026",
          description: "Floor-by-floor guide to Latin America's largest indoor market.",
          datePublished: "2026-03-19",
          dateModified: "2026-03-29",
          url: "https://guadalajaraitinerary.com/mercado-san-juan-de-dios-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Mercado San Juan de Dios"
        kicker="Market Guide"
        kickerColor="tequila"
        title="Mercado San Juan de Dios"
        subtitle="Latin America's largest indoor market — 3 floors, 3,000+ stalls, and a clear strategy for what to see, eat, and skip."
        pills={["3 floors", "3,000+ stalls", "Floor-by-floor guide", "Pickpocket warnings"]}
        updatedDate="Mar 2026"
        readTime="8 min"
        image="/images/41-indoor-mercado.jpg"
        imageAlt="Inside Mercado San Juan de Dios"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Mercado San Juan de Dios (officially Mercado Libertad) is
              overwhelming by design — a three-story labyrinth of 3,000+ stalls
              covering an entire city block. It&apos;s been operating since 1958
              and is commonly cited as the largest indoor market in Latin America. It&apos;s also
              a place where tourists waste time if they don&apos;t know which
              floor to focus on.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>The 30-second strategy:</strong> Ground floor = yes. Second
            floor = no. Third floor = food. You&apos;re done.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/33-tropical-fruit-stall.jpg"
            alt="Colorful fruit and produce stalls inside a Guadalajara market"
            caption="The ground floor is the real market — dried chiles, spices, leather goods, and herbal remedies"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* Floor by Floor */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Floor-by-Floor Guide
            </h2>
          </ScrollReveal>

          <FloorCard floor="Ground Floor" verdict="go" what="Food stalls, dried chiles, leather goods, herbs, pottery">
            <p>
              <strong>This is the real market.</strong> Sections are loosely
              organized: the south end has dried chiles, spices, and mole paste
              (excellent gifts, 50–150 MXN). The west side has leather goods —
              belts, wallets, huarache sandals (negotiate, start at 60% of
              asking). The northeast corner has herbal remedies and traditional
              medicine (fascinating to browse even if you don&apos;t buy).
            </p>
            <p>
              <strong>Best buys:</strong> Dried chile sets (50–100 MXN), mole
              paste (80–150 MXN), vanilla extract (40–80 MXN), leather belts
              (150–400 MXN after negotiation), handmade huaraches (200–500 MXN).
            </p>
          </FloorCard>

          <FloorCard floor="Second Floor" verdict="skip" what="Electronics, knockoffs, tourist trinkets">
            <p>
              <strong>Skip entirely.</strong> This floor is bootleg electronics,
              knockoff clothing, counterfeit goods, and low-quality tourist
              souvenirs. Nothing here is authentic or good value. The same
              sombreros and maracas are available in every Mexican tourist zone.
              If you want real artisan crafts, go to{" "}
              <Link href="/tlaquepaque-guide" className="text-cantera hover:underline">
                Tlaquepaque
              </Link>{" "}
              or{" "}
              <Link href="/tonala-guide" className="text-cantera hover:underline">
                Tonalá
              </Link>.
            </p>
          </FloorCard>

          <FloorCard floor="Third Floor" verdict="eat" what="Food court — tortas ahogadas, seafood, comida">
            <p>
              The top-floor food court is where locals eat lunch. Dozens of
              stalls compete for your business with <strong>tortas ahogadas</strong>{" "}
              (55–70 MXN), <strong>seafood cocktails and ceviches</strong>{" "}
              (90–140 MXN), <strong>comida corrida</strong> (75–100 MXN), and
              fresh juices (20–30 MXN).
            </p>
            <p>
              <strong>The aguachile verde</strong> (raw shrimp in spicy green
              lime juice) is punishingly spicy and excellent. The ceviche
              tostadas are solid. For tortas ahogadas, any busy stall will do —
              watch where the longest line forms.
            </p>
          </FloorCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/35-street-tacos-grill.jpg"
            alt="Fresh street tacos being prepared at a Guadalajara market food stall"
            caption="The third-floor food court serves some of the best market food in Guadalajara"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Safety */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Safety & Practical Tips
            </h2>
          </ScrollReveal>

          <TipCard type="skip">
            <strong>Pickpocket hotspot.</strong> The market is GDL&apos;s #1
            location for pickpocketing, especially 11am–2pm when it&apos;s most
            crowded. Phone in your front pocket or inside a cross-body bag.
            Don&apos;t set your phone on market tables while eating. Keep cash
            in multiple pockets. Be aware of the &quot;bump and grab&quot; scam.
          </TipCard>

          <TipCard type="tip">
            <strong>Best time to visit:</strong> Early morning (9–10am) for
            thinner crowds and better safety. Weekday mornings are ideal.
            Saturday is the most chaotic day.
          </TipCard>

          <TipCard type="tip">
            <strong>How long:</strong> 30 minutes for a quick ground-floor walk
            + third-floor lunch. 60 minutes if you want to browse and shop.
            There&apos;s no reason to spend more than an hour here — the
            interesting parts are concentrated.
          </TipCard>

          <TipCard type="local">
            <strong>Uber pickup:</strong> The market interior is confusing for
            Uber pickups. Walk to the main entrance on Calzada Javier Mina
            (east side) and request from there. The PIN is easier to find
            outside than inside the maze.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/39-churros-cajeta.jpg"
            alt="Freshly made churros dusted with cinnamon sugar — a popular Guadalajara market snack"
            caption="Churros from market vendors make the perfect post-lunch snack"
            aspectRatio="square"
          />
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Is Mercado San Juan de Dios worth visiting?", answer: "Yes, but with a strategy. The ground floor and third-floor food court are genuinely interesting. The second floor is a waste of time. Spend 30-60 minutes max." },
          { question: "Is it safe?", answer: "During daytime, yes — with awareness. Pickpocketing is real in crowded aisles. Keep valuables secure, don't flash electronics, and stay alert in the densest sections. Don't visit after dark." },
          { question: "Can I negotiate prices?", answer: "Ground floor: yes, especially for leather goods and bulk items. Start at 60% of asking price. Third-floor food: prices are fixed and fair. Second floor: don't buy anything there period." },
          { question: "Mercado San Juan de Dios or Mercado Corona?", answer: "Different purposes. San Juan de Dios for the experience of Latin America's largest market and the third-floor seafood. Corona for better comida corrida, fresh juice, and dried chile gifts. Corona is also closer to the cathedral and safer." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "The market is part of Centro." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Market food picks." },
          { label: "Tlaquepaque", href: "/tlaquepaque-guide", description: "For real artisan shopping." },
          { label: "Tonalá Guide", href: "/tonala-guide", description: "The better craft market." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Market safety details." },
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Market fits Day 1 morning." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
