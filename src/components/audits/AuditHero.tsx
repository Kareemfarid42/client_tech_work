import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import AuditHeroAnimation from "./AuditHeroAnimation";

interface AuditHeroProps {
    onOpenModal: () => void;
}

const AuditHero = ({ onOpenModal }: AuditHeroProps) => {

    return (
        <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden border-b border-[#333333]">
            {/* Ambient Pulse Glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#17aa8c]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

            <div className="container-max section-padding grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#17aa8c]/30 bg-[#111111] text-[#17aa8c] text-xs font-mono font-bold uppercase tracking-widest mb-5 sm:mb-8 w-fit shadow-[0_0_15px_rgba(23, 170, 140,0.15)]">
                        <Activity className="w-4 h-4" />
                        FREE DIGITAL PERFORMANCE AUDIT
                    </div>

                    <h1 className="text-[28px] sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-tight tracking-tight">
                        Not Sure What's Holding Your Business Back?
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#888]">We'll Find It.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-[#888888] leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans">
                        Every business has untapped opportunities but they're often hidden in disconnected marketing, underperforming websites, inefficient processes, or missed conversion opportunities.
                        <br /><br />
                        Request your complimentary Digital Performance Audit and receive expert insights into what's working, what's not, and where your biggest growth opportunities lie.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onOpenModal}
                                className="w-full sm:w-max bg-[#17aa8c] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-sm hover:bg-white transition-colors duration-300"
                            >
                                Start Your Audit
                            </button>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#888888] font-sans">
                            <span className="flex items-center gap-2"><span className="text-[#17aa8c] font-bold">✓</span> Personalized Review</span>
                            <span className="flex items-center gap-2"><span className="text-[#17aa8c] font-bold">✓</span> No Obligation</span>
                            <span className="flex items-center gap-2"><span className="text-[#17aa8c] font-bold">✓</span> Actionable Recommendations</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: The 6-Scene Hero Animation */}
                <AuditHeroAnimation />

            </div>
        </section>
    );
};

export default AuditHero;
