"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TimeBlock } from "@/components/content/TimeBlock";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

interface DistilleryCardProps {
  name: string;
  type: string;
  tourCost: string;
  verdict: "top-pick" | "worth-it" | "tourist-trap" | "niche";
  children: React.ReactNode;
}

const verdictStyles = {
  "top-pick": { label: "Top Pick", color: "bg-tequila/10 text-tequila border-tequila/20" },
  "worth-it": { label: "Worth It", color: "bg-agave/10 text-agave border-agave/20" },
  "tourist-trap": { label: "Tourist Trap", color: "bg-cantera/10 text-cantera border-cantera/20" },
  niche: { label: "For Enthusiasts", color: "bg-mariachi/10 text-mariachi border-mariachi/20" },
};

function DistilleryCard({ name, type, tourCost, verdict, children }: DistilleryCardProps) {
  const v = verdictStyles[verdict];
  return (
    <ScrollReveal>
      <div className={`rounded-[6px] border ${v.color.split(" ")[2]} bg-piedra p-5 my-5`}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-heading text-base font-bold text-obsidiana">{name}</h3>
          <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${v.color}`}>
            {v.label}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 font-mono text-[11px] text-obsidiana/50">
          <span>🏭 {type}</span>
          <span>💰 Tour: {tourCost}</span>
        </div>
        <div className="text-sm text-obsidiana/65 leading-relaxed space-y-2">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export function TequilaDayTrip() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tequila Day Trip", href: "/tequila-day-trip" },
        ]}
        article={{
          headline: "Tequila Day Trip from Guadalajara 2026",
          description: "Complete distillery guide with transport options and real costs.",
          datePublished: "2026-02-18",
          dateModified: "2026-03-22",
          url: "https://guadalajaraitinerary.com/tequila-day-trip",
        }}
      />

      <GuideHero
        breadcrumbLabel="Tequila Day Trip"
        kicker="The #1 Day Trip"
        kickerColor="tequila"
        title="Tequila Day Trip from Guadalajara"
        subtitle="The definitive guide — every distillery compared, three transport options ranked, and the tourist traps to avoid. Don't overpay for what should be an amazing day."
        pills={["60 km from GDL", "Full day", "3 distilleries compared", "Real MXN prices"]}
        updatedDate="Mar 2026"
        readTime="15 min"
        image="/images/40-agave-fields-tequila.jpg"
        imageAlt="Blue agave fields stretching to the horizon near Tequila, Jalisco"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              The town of Tequila is where the spirit was born — literally.
              The UNESCO-designated agave landscape surrounding the town is one
              of the most striking agricultural vistas in the Americas, and the
              distilleries here range from industrial giants to family operations
              using 500-year-old techniques.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              This guide ranks every way to get there, every distillery worth
              visiting, and tells you exactly how much to spend. The short
              version: skip José Cuervo, visit La Fortaleza, and don&apos;t
              take the train.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Step 1
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              How to Get There — 3 Options Ranked
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-5 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Transport</span>
                  <span>Cost</span>
                  <span>Time</span>
                  <span>Flexibility</span>
                  <span>Verdict</span>
                </div>
              </div>
              {[
                { mode: "Uber/Taxi", cost: "400 MXN/way", time: "60 min", flex: "★★★★★", verdict: "Best value", vClass: "text-agave" },
                { mode: "Public Bus", cost: "85 MXN/way", time: "90 min", flex: "★★★☆☆", verdict: "Cheapest", vClass: "text-tequila" },
                { mode: "JC Express Train", cost: "850–2,400 MXN", time: "3 hrs RT", flex: "★☆☆☆☆", verdict: "Skip", vClass: "text-cantera" },
              ].map((row) => (
                <div key={row.mode} className="grid grid-cols-5 gap-2 px-4 py-3 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium">{row.mode}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.cost}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.time}</span>
                  <span className="text-xs">{row.flex}</span>
                  <span className={`font-mono text-xs ${row.vClass}`}>{row.verdict}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>We recommend Uber with 2–4 people.</strong> Split 4
            ways, it&apos;s 200 MXN round trip per person (~$12 USD). We verified
            this fare in March 2026. You
            control the schedule, can stop for agave field photos, and aren&apos;t
            locked into a tour company&apos;s timing. Ask the driver to wait in
            town (offer 300–500 MXN for 4–5 hours of waiting) or book a return
            Uber later.
          </TipCard>

          <TipCard type="skip">
            <strong>The José Cuervo Express train is overpriced.</strong> 850 MXN
            for the basic package, up to 2,400 MXN for premium. The train ride
            through agave fields is pretty (45 min), but you&apos;re locked into
            their itinerary, which funnels you through the JC distillery gift
            shop. You can see the same agave fields from a car window for free.
            The train sells out on weekends — but that&apos;s a marketing
            tactic, not a quality indicator.
          </TipCard>

          <ContentImage
            src="/images/03-scenic-highway-jalisco.jpg"
            alt="Scenic highway through agave fields on the road from Guadalajara to Tequila"
            caption="The drive to Tequila passes through UNESCO-designated agave landscapes"
            aspectRatio="wide"
          />

          <TipCard type="money">
            <strong>Public bus is fine on a budget.</strong> From Central Vieja
            (old bus terminal, NOT the new one), Tequila Plus and TequilaExpress
            buses run hourly from 6am–8pm. 85 MXN one way, 90 min. Dropped at
            Tequila&apos;s central plaza. No advance booking needed. Last bus
            back around 7pm.
          </TipCard>
        </div>
      </section>

      {/* DISTILLERIES */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Step 2
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Distillery Comparison
            </h2>
            <p className="text-sm text-obsidiana/50 mb-4">
              Ranked by quality of experience, not marketing budget
            </p>
          </ScrollReveal>

          <DistilleryCard
            name="Destilería La Fortaleza"
            type="Family-owned, artisanal"
            tourCost="300 MXN (includes tastings)"
            verdict="top-pick"
          >
            <p>
              <strong>The best distillery experience in Tequila, period.</strong>{" "}
              Fifth-generation family operation using a traditional tahona (stone
              wheel) to crush agave, copper pot stills, and open-air fermentation.
              This is how tequila was made 150 years ago.
            </p>
            <p>
              The tour (90 min) walks you through every step. The tasting
              includes their blanco, reposado, añejo, and sometimes a special
              release. Their blanco is considered one of the best tequilas in
              the world by spirits experts.
            </p>
            <p>
              <strong>Book ahead:</strong> Email or DM on Instagram 1–2 days
              before. Tours run 10am, 12pm, and 2pm. They cap group sizes so it
              never feels cattle-herd. Buy bottles at the distillery shop —
              blanco ~650 MXN (vs. 900+ in GDL liquor stores).
            </p>
          </DistilleryCard>

          <DistilleryCard
            name="Casa Sauza (La Perseverancia)"
            type="Large producer, modernized"
            tourCost="200–450 MXN (tiers)"
            verdict="worth-it"
          >
            <p>
              Sauza is the second-largest tequila producer, and their tour is
              well-organized with a modern visitor center. Less charming than
              Fortaleza but more polished. The premium tour (450 MXN) includes
              a mixology class where you make your own cocktails. The basic tour
              (200 MXN) is informative but skips the hands-on elements.
            </p>
            <p>
              Good for: groups, people who want a structured experience, or if
              Fortaleza is booked.
            </p>
          </DistilleryCard>

          <DistilleryCard
            name="José Cuervo (La Rojeña)"
            type="Industrial giant, tourist-focused"
            tourCost="250–600 MXN (tiers)"
            verdict="tourist-trap"
          >
            <p>
              The world&apos;s largest tequila distillery and Tequila&apos;s most
              visited attraction. The basic tour (250 MXN) is rushed, crowded,
              and spends more time in the gift shop than the production floor.
              The premium &quot;Experiencia&quot; (600 MXN) is better — smaller
              group, better tastings — but still feels commercial.
            </p>
            <p>
              <strong>The catch:</strong> La Rojeña is historically significant
              (oldest active distillery in Latin America) and the building is
              beautiful. But the tour is designed to funnel you into buying
              overpriced bottles. If you go, do the premium tier or skip it.
            </p>
          </DistilleryCard>

          <DistilleryCard
            name="Casa Orendain / Tequila Cascahuín"
            type="Small-batch, off the beaten path"
            tourCost="150–250 MXN"
            verdict="niche"
          >
            <p>
              For tequila nerds who want to go deeper. Cascahuín is a
              fifth-generation family distillery producing small-batch tequila
              with ancestral techniques. Less English spoken, more intimate,
              and you may be the only visitor. Orendain is mid-sized with a good
              history tour. Both require advance arrangements — call or email.
            </p>
          </DistilleryCard>

          <ContentImage
            src="/images/27-tequila-bottles-distillery.jpg"
            alt="Tequila bottles lined up at a traditional distillery in Tequila, Jalisco"
            caption="Distillery shops offer bottles at 30-50% less than Guadalajara liquor stores"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>The ideal two-distillery day:</strong> Fortaleza at 10am
            (book ahead), then walk to Sauza for the 1pm tour. Lunch in between
            at the main plaza. You&apos;ll be tequila&apos;d out by 3pm — that&apos;s
            fine, it&apos;s enough.
          </TipCard>
        </div>
      </section>

      {/* THE AGAVE LANDSCAPE */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Don&apos;t Miss
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Agave Landscape
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The UNESCO-designated agave landscape between Guadalajara and
              Tequila is one of Mexico&apos;s most stunning agricultural
              scenes — thousands of hectares of blue-green agave plants in
              perfect rows stretching to volcanic hills. The best views are on
              the drive itself, about 40 minutes from GDL.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Photo stop:</strong> If you&apos;re in a car/Uber, ask the
            driver to stop at the mirador (viewpoint) on Highway 15D about 40
            min into the drive. There&apos;s a signed pullover area with
            panoramic agave field views. Morning light is best, but golden hour
            (around 5pm return) is stunning.
          </TipCard>

          <ContentImage
            src="/images/37-colonial-church.jpg"
            alt="Historic church and colorful buildings in the town of Tequila, Jalisco near Guadalajara"
            caption="Tequila's main plaza and church — a pleasant base between distillery tours"
            aspectRatio="landscape"
          />

          <TipCard type="local">
            <strong>Why the agave is blue:</strong> Blue Weber agave (the only
            variety allowed for tequila) takes 6–8 years to mature before
            harvest. Each plant produces one batch of tequila, then dies. The
            <em>jimadores</em> (harvesters) use a <em>coa</em> (flat-bladed
            tool) to strip the leaves and extract the piña (heart), which
            weighs 40–90 kg. One piña produces about 5–8 liters of tequila.
          </TipCard>
        </div>
      </section>

      {/* SAMPLE ITINERARY */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Sample Day
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              Recommended Tequila Day Timeline
            </h2>
          </ScrollReveal>

          <TimeBlock time="8:00 AM" title="Depart Guadalajara">
            <p>Uber or bus. Stop at the agave mirador for photos.</p>
          </TimeBlock>

          <TimeBlock time="9:15 AM" title="Arrive in Tequila Town">
            <p>Coffee on the main plaza. Walk the pedestrian streets.</p>
          </TimeBlock>

          <TimeBlock time="10:00 AM" title="Destilería La Fortaleza Tour">
            <p>90-minute tour with tastings. Budget 2 hours including shopping.</p>
          </TimeBlock>

          <TimeBlock time="12:15 PM" title="Lunch at La Antigua Casona">
            <p>
              On the main plaza. Carne en su jugo or enchiladas. Mains 120–200
              MXN. Sit on the terrace.
            </p>
          </TimeBlock>

          <TimeBlock time="1:30 PM" title="Walk the Town + Buy Tequila">
            <p>
              Church, main plaza, pedestrian street. Buy bottles at the
              distillery you toured, not from random shops. 30–45 min.
            </p>
          </TimeBlock>

          <TimeBlock time="2:30 PM" title="Option: Second Distillery or Guachimontones">
            <p>
              Sauza tour at 3pm (if booked), or drive 30 min south to the{" "}
              <Link href="/guachimontones-day-trip" className="text-cantera hover:underline">
                Guachimontones pyramids
              </Link>{" "}
              (60 MXN, 90 min visit).
            </p>
          </TimeBlock>

          <TimeBlock time="5:00 PM" title="Return to Guadalajara">
            <p>
              Uber ~60 min. If bussing, last buses around 7pm. You&apos;ll be
              back by 6–6:30pm.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* Image break before buying guide */}
      <section className="py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/08-tequila-mezcal-tasting.jpg"
            alt="Tequila tasting glasses with blanco, reposado, and añejo samples in Tequila, Mexico"
            caption="A proper tasting: blanco, reposado, and añejo side by side"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* TEQUILA BUYING GUIDE */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Tequila Buying Cheat Sheet
            </h2>
          </ScrollReveal>

          <TipCard type="local">
            <strong>Always buy &quot;100% Agave.&quot;</strong> If the label
            doesn&apos;t say &quot;100% de agave,&quot; it&apos;s a
            <em>mixto</em> — up to 49% sugar-cane filler. Mixtos cause
            hangovers. 100% agave tequila, even cheap ones, are smooth and
            clean. Our team checked multiple sources on this — always check the label.
          </TipCard>

          <TipCard type="money">
            <strong>Price guide at distillery shops (we verified these in Q1 2026):</strong>
            <br />
            Blanco (unaged): 250–700 MXN
            <br />
            Reposado (2–12 months oak): 350–900 MXN
            <br />
            Añejo (1–3 years): 500–1,500 MXN
            <br />
            Extra Añejo (3+ years): 800–3,000+ MXN
            <br />
            <strong>Best value:</strong> Fortaleza Blanco (~650 MXN) or Sauza
            Hornitos Reposado (~300 MXN). You&apos;re paying 30–50% less than
            liquor stores in Guadalajara.
          </TipCard>

          <TipCard type="skip">
            <strong>Don&apos;t buy from the &quot;free tasting&quot; shops in
            town center.</strong> These are sales floors that pour cheap mixtos
            and pressure you into buying overpriced bottles with fancy packaging.
            The good tequila is at the actual distilleries.
          </TipCard>
        </div>
      </section>

      {/* Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Day Trip Budget
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Item</span>
                  <span>Budget</span>
                  <span>Comfortable</span>
                </div>
              </div>
              {[
                { item: "Transport (round trip)", budget: "170 (bus)", mid: "200 (Uber split 4)" },
                { item: "Distillery tour", budget: "300 (Fortaleza)", mid: "500 (2 tours)" },
                { item: "Lunch", budget: "120", mid: "200" },
                { item: "Tequila bottle(s)", budget: "0 (window shop)", mid: "650 (Fortaleza blanco)" },
                { item: "Snacks & drinks", budget: "50", mid: "100" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.item}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~640</span>
                <span className="font-mono text-xs text-tequila">~1,650</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$38</span>
                <span className="font-mono">$97</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is the José Cuervo Express train worth it?",
            answer: "No, unless you specifically want a scenic train ride and don't mind the captive-audience sales pitch. At 850-2,400 MXN, it costs 4-12x more than a bus while giving you less flexibility. The agave fields are equally visible from a car window.",
          },
          {
            question: "Can I visit Tequila without a tour company?",
            answer: "Absolutely, and we recommend it. Uber or bus to Tequila, book directly with La Fortaleza or Sauza, eat at local restaurants, and Uber back. You'll spend half what a tour company charges and control your own schedule.",
          },
          {
            question: "How many distilleries should I visit?",
            answer: "One or two. After two distillery tours, the process starts to repeat and the tastings add up. Fortaleza alone is sufficient for most visitors. Add Sauza if you want a contrast between artisanal and industrial production.",
          },
          {
            question: "Can I combine Tequila with Guachimontones?",
            answer: "Yes — Guachimontones is 30 minutes south of Tequila. Visit Tequila in the morning, drive to Guachimontones after lunch. You'll need a car/Uber (no direct bus). This makes for a full but rewarding day.",
          },
          {
            question: "Is it safe to take an Uber to Tequila?",
            answer: "Yes. The highway is well-maintained and well-traveled. Request the ride from a clear pickup spot in GDL. Some drivers will negotiate a flat rate for a round trip with waiting time (1,200-1,600 MXN for the day including 4-5 hours of waiting).",
          },
          {
            question: "What's the best time to visit?",
            answer: "Year-round. October-November during the jimador harvest season is particularly interesting — you may see agave being harvested in the fields. Weekdays are less crowded than weekends at distilleries. Avoid the José Cuervo Express schedule on Saturdays when the town is at peak tourist density.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Tequila is Day 2 of the perfect trip." },
          { label: "Guachimontones", href: "/guachimontones-day-trip", description: "Combine with Tequila for a full day." },
          { label: "Craft Beer & Mezcal", href: "/guadalajara-craft-beer-mezcal", description: "Continue the spirits journey in GDL." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "What to eat before and after." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Day trip cost planning." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Transport options explained." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
