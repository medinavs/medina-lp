import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioGallery />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
