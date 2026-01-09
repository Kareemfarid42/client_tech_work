import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketingSection } from "@/components/sections/MarketingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MarketingSection />
        <ServicesSection />
        <IndustriesSection />
        <AwardsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
