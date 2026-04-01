import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketingSection } from "@/components/sections/MarketingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  const location = useLocation();

  // Scroll to section when arriving from another page via /#hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Small delay to let sections render first
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1} aria-label="Main content">
        <HeroSection />
        <MarketingSection />
        <ServicesSection />
        <IndustriesSection />
        <AwardsSection />
        <TechStackSection />
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
