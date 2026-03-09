import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AuditHero from "@/components/audits/AuditHero";
import AuditVectors from "@/components/audits/AuditVectors";
import AuditWaterfall from "@/components/audits/AuditWaterfall";
import AuditReport from "@/components/audits/AuditReport";
import AuditModal from "@/components/audits/AuditModal";
import { useState } from "react";

const PerformanceAudits = () => {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    // Ensure the page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#0ea5e9] selection:text-black flex flex-col font-sans">
            <Header />

            <main className="flex-grow">
                {/* 1. The Diagnostic HUD (Animated SVG Gauge) */}
                <AuditHero onOpenModal={() => setIsAuditModalOpen(true)} />

                {/* 2. The 2x2 Audit Vectors Grid */}
                <AuditVectors />

                {/* 3. The Before/After Waterfall Visual */}
                <AuditWaterfall />

                {/* 4. The 3D Delivered Report & CTA */}
                <AuditReport onOpenModal={() => setIsAuditModalOpen(true)} />
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
