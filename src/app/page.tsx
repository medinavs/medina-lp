import { Hero } from "@/components/hero";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioGallery />
      <PortfolioGallery />
    </>
  );
}
