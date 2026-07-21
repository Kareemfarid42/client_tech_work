import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import Seo from "@/components/Seo";
import { Footer } from "@/components/layout/Footer";
import AuditHero from "@/components/audits/AuditHero";
import AuditTrustStrip from "@/components/audits/AuditTrustStrip";
import AuditWaterfall from "@/components/audits/AuditWaterfall";
import AuditReport from "@/components/audits/AuditReport";
import AuditCommonIssues from "@/components/audits/AuditCommonIssues";
import AuditWhyUs from "@/components/audits/AuditWhyUs";
import AuditFAQs from "@/components/audits/AuditFAQs";
import AuditFooterCTA from "@/components/audits/AuditFooterCTA";
import AuditModal from "@/components/audits/AuditModal";
import AuditHowItWorks from "@/components/audits/AuditHowItWorks";
import { useState } from "react";

const PerformanceAudits = () => {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    // Ensure the page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#17aa8c] selection:text-black flex flex-col font-sans">
            <Seo
                title="Free Digital Performance Audit"
                description="Request a free, expert-reviewed audit of your website, SEO, and paid marketing campaigns."
                path="/audits"
            />
            <Header />

            <main className="flex-grow pb-20 lg:pb-0">
                {/* 1. The Diagnostic HUD */}
                <AuditHero onOpenModal={() => setIsAuditModalOpen(true)} />

                {/* Trust Strip */}
                <AuditTrustStrip />

                {/* How It Works */}
                <AuditHowItWorks />

                {/* 2. Here's What You'll Receive (6-card grid) */}
                <AuditReport onOpenModal={() => setIsAuditModalOpen(true)} />

                {/* 3. Common Issues 8-card grid */}
                <AuditCommonIssues onOpenModal={() => setIsAuditModalOpen(true)} />

                {/* 4. Why Us & Social Proof */}
                <AuditWhyUs />

                {/* 5. The Before/After Waterfall Visual */}
                <AuditWaterfall />

                {/* 6. FAQs */}
                <AuditFAQs />

                {/* 7. Footer CTA */}
                <AuditFooterCTA onOpenModal={() => setIsAuditModalOpen(true)} />
            </main>

            <AuditModal
                isOpen={isAuditModalOpen}
                onClose={() => setIsAuditModalOpen(false)}
            />

            <Footer />
        </div>
    );
};

export default PerformanceAudits;
