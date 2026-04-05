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

export function CentroHistorico() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Centro Histórico", href: "/centro-historico-guide" },
        ]}
        article={{
          headline: "Centro Histórico Guadalajara Guide 2026",
          description: "Complete guide to Guadalajara's colonial core.",
          datePublished: "2026-03-01",
          dateModified: "2026-03-28",
          url: "https://guadalajaraitinerary.com/centro-historico-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Centro Histórico"
        kicker="Neighborhood"
        kickerColor="cantera"
        title="Centro Histórico Guide"
        subtitle="The colonial heart — cathedral, Orozco murals, Latin America's largest market, and the plazas where GDL's history lives. Walking route included."
        pills={["8 landmarks", "Half-day walking route", "Real MXN prices", "Safety notes"]}
        updatedDate="Mar 2026"
        readTime="12 min"
        image="/images/32-guadalajara-cathedral.jpg"
        imageAlt="Guadalajara Cathedral and Plaza de Armas"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Centro Histórico is where Guadalajara began — a grid of colonial
              buildings, interconnected plazas, and two of Mexico&apos;s most
              important murals. You can walk the entire core in a morning,
              but the markets and museums reward a slower pace.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Walking route:</strong> We recommend starting at the cathedral (west), walking
            east through the plazas to Hospicio Cabañas, then south to Mercado
            San Juan de Dios. This covers everything in a logical 2km line.
            Add Mercado Corona on the way back for a total loop of about 3.5km.
          </TipCard>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mt-10 mb-4">
              The Landmarks
            </h2>
          </ScrollReveal>

          <SpotCard name="Catedral de Guadalajara" type="Church" duration="20 min" cost="Free" verdict="must-see">
            <p>
              The twin-spired icon of GDL, consecrated 1618 (construction
              began 1561; the iconic neo-Gothic towers date from 1854, replacing
              originals destroyed by earthquake). The exterior is the
              city&apos;s most photographed image; the interior is a mix of
              Gothic vaulting, Baroque altars, and a painting attributed to
              Murillo (left nave). Go inside — it&apos;s far more impressive
              than the exterior suggests. Best photos: from Plaza de la
              Liberación looking west at golden hour.
            </p>
          </SpotCard>

          <SpotCard name="Plaza de Armas & Rotonda" type="Plaza" duration="15 min" cost="Free" verdict="must-see">
            <p>
              Two connected plazas flanking the cathedral. Plaza de Armas has
              the ornate Art Nouveau gazebo (bandstand) and shoeshine chairs
              that haven&apos;t changed in decades. The Rotonda de los
              Jaliscienses Ilustres honors the state&apos;s famous citizens
              with bronze statues. Walk through both — 10 minutes, zero cost,
              pure atmosphere.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/10-colonial-plaza-jacarandas.jpg"
            alt="Plaza de Armas fountain and gazebo in Guadalajara Centro Histórico"
            caption="The Art Nouveau gazebo at Plaza de Armas"
            aspectRatio="landscape"
          />

          <SpotCard name="Palacio de Gobierno" type="Government building" duration="10 min" cost="Free" address="Plaza de Armas, east side" verdict="must-see">
            <p>
              The main staircase has a massive Orozco mural — <em>Hidalgo</em>,
              depicting the father of Mexican independence with a blazing torch.
              More visceral and dramatic than Cabañas in some ways. Free, 10
              minutes, and most tourists walk right past it. Don&apos;t.
            </p>
          </SpotCard>

          <SpotCard name="Hospicio Cabañas" type="UNESCO World Heritage Site" duration="45–60 min" cost="90 MXN (free Tuesdays)" address="Calle Cabañas 8" verdict="must-see">
            <p>
              The crown jewel and the single best thing in Guadalajara —
              Orozco&apos;s chapel frescoes culminating in <em>Man of Fire</em>
              {" "}on the dome ceiling. Lie on the wooden benches and look up. See
              our{" "}
              <Link href="/hospicio-cabanas-guide" className="text-cantera hover:underline">
                full Hospicio Cabañas guide
              </Link>{" "}
              for mural-by-mural details and visit logistics.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/30-orozco-mural-fresco.jpg"
            alt="Orozco-style murals inside Guadalajara government palace"
            caption="Orozco's dramatic Hidalgo mural in the Palacio de Gobierno"
            aspectRatio="landscape"
          />

          <SpotCard name="Plaza Tapatía" type="Pedestrian boulevard" duration="10 min" cost="Free" verdict="worth-it">
            <p>
              The wide pedestrian corridor connecting the cathedral area to
              Hospicio Cabañas. Fountains, sculptures, and vendor stalls.
              Walk it as a connector between sights rather than a destination.
              The Fuente de la Inmolación (fire fountain) midway is worth a
              photo stop.
            </p>
          </SpotCard>

          <SpotCard name="Mercado San Juan de Dios" type="Market" duration="30–60 min" cost="Free entry" address="Calzada Independencia Sur" verdict="must-see">
            <p>
              Latin America&apos;s largest indoor market. Three floors:
              <strong> Ground floor</strong> = the real market (food stalls,
              dried chiles, leather, herbs). <strong>Second floor</strong> =
              tourist trinkets and bootleg electronics (skip).{" "}
              <strong>Third floor</strong> = food court with solid tortas
              ahogadas (55–70 MXN) and seafood cocktails (90–140 MXN). See
              our{" "}
              <Link href="/mercado-san-juan-de-dios-guide" className="text-cantera hover:underline">
                full market guide
              </Link>.
            </p>
          </SpotCard>

          <ContentImage
            src="/images/41-indoor-mercado.jpg"
            alt="Indoor market stalls at Mercado San Juan de Dios in Guadalajara"
            caption="Mercado San Juan de Dios — Latin America's largest indoor market"
            aspectRatio="wide"
          />

          <SpotCard name="Mercado Corona" type="Market" duration="20–30 min" cost="Free entry" address="Calle Santa Mónica 86" verdict="worth-it">
            <p>
              Smaller, more central, and better for food than San Juan de Dios.
              The <em>comida corrida</em> stalls (75–100 MXN for a full lunch)
              are excellent. Fresh juice stands (20–30 MXN), dried chiles for
              gifts, and mole paste (80–150 MXN). Better for eating; San Juan
              is better for shopping.
            </p>
          </SpotCard>

          <SpotCard name="Museo Regional de Guadalajara" type="Museum" duration="30–45 min" cost="85 MXN (free Sundays)" address="Calle Liceo 60" verdict="optional">
            <p>
              Inside a beautiful 18th-century seminary next to the cathedral.
              Covers Jalisco history from pre-Hispanic through colonial eras.
              The mammoth skeleton in the courtyard is unexpectedly impressive.
              Worth the visit if you have an extra hour or hit a free Sunday;
              skippable if you&apos;re tight on time.
            </p>
          </SpotCard>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Practical Info
            </h2>
          </ScrollReveal>

          <ContentImage
            src="/images/31-colonial-courtyard.jpg"
            alt="Colonial architecture interior courtyard in Guadalajara Centro Histórico"
            caption="Neoclassical courtyards define Centro's colonial character"
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Best time to visit:</strong> We recommend morning (8–11am) before the
            heat and crowds. Based on feedback from readers who visited in early 2026, the markets are busiest 11am–2pm. The cathedral
            and plazas are gorgeous in late afternoon golden hour (5–6:30pm).
          </TipCard>

          <TipCard type="money">
            <strong>Half-day budget:</strong> Birria breakfast 95 MXN + Cabañas
            90 MXN + market lunch 80 MXN + juice 25 MXN ={" "}
            <strong>~290 MXN ($17 USD)</strong>. We verified these prices in March 2026. Everything else is free.
          </TipCard>

          <TipCard type="skip">
            <strong>Safety note:</strong> Centro north of Av. Juárez is safe
            day and night. South of Juárez near the markets, keep your phone
            pocketed in crowds and Uber after 9pm rather than walking dark
            side streets. See our{" "}
            <Link href="/guadalajara-safety-tips" className="text-cantera hover:underline">
              safety guide
            </Link>{" "}
            for zone-by-zone details.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "How long do I need in Centro Histórico?", answer: "A focused morning (4-5 hours) covers all landmarks. Add 2-3 hours if you want to eat at both markets and browse slowly. It's Day 1 morning in our 3-day itinerary." },
          { question: "Is Centro safe to walk around?", answer: "Yes during the day. Main plazas and streets are well-patrolled and busy. After 9pm, stick to lit main roads and use Uber for return trips. The area south of Mercado San Juan de Dios needs more awareness after dark." },
          { question: "What's the best day to visit?", answer: "Tuesday for free Hospicio Cabañas. Sunday for free Museo Regional. Avoid Saturday when markets are extremely crowded." },
          { question: "Can I walk between all the sights?", answer: "Yes — the entire walking route from the cathedral to Mercado San Juan de Dios is about 2km. Flat terrain, paved sidewalks. Add Mercado Corona for a 3.5km loop." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Centro is the morning focus." },
          { label: "Hospicio Cabañas", href: "/hospicio-cabanas-guide", description: "Deep dive on the UNESCO site." },
          { label: "Mercado San Juan", href: "/mercado-san-juan-de-dios-guide", description: "Floor-by-floor market guide." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "What to eat in Centro." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Should you stay in Centro?" },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Centro safety zone breakdown." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
