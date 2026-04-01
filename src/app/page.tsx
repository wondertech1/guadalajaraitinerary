import { PortalHero } from "@/components/home/PortalHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { GdlIntro } from "@/components/home/GdlIntro";
import { FeaturedGuides } from "@/components/home/FeaturedGuides";
import { GuideGrid } from "@/components/home/GuideGrid";
import { QuickFacts } from "@/components/home/QuickFacts";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <PortalHero />
      <CanteraDivider className="my-0" />
      <GdlIntro />
      <FeaturedGuides />
      <GuideGrid />
      <QuickFacts />
      <CanteraDivider className="my-0" />
      <NewsletterCTA />
    </>
  );
}
