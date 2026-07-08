import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, Lightbulb, Lock } from "lucide-react";

interface AuditFooterCTAProps {
    onOpenModal: () => void;
}

const AuditFooterCTA = ({ onOpenModal }: AuditFooterCTAProps) => {
    const badges = [
        { label: "100% FREE", icon: <CheckCircle2 className="w-4 h-4" /> },
        { label: "EXPERT REVIEW", icon: <UserCheck className="w-4 h-4" /> },
        { label: "ACTIONABLE INSIGHTS", icon: <Lightbulb className="w-4 h-4" /> },
        { label: "100% CONFIDENTIAL", icon: <Lock className="w-4 h-4" /> }
    ];

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0a0a]">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#17aa8c]/5 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="container-max section-padding relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto flex flex-col items-center text-center"
                >
                    <h2 className="text-[26px] sm:text-3xl md:text-5xl font-heading font-bold text-white mb-10 leading-tight">
                        Still thinking? Request your complimentary <span className="text-[#17aa8c]">Digital Performance Audit</span> today.
                    </h2>
                    
                    <button
                        onClick={onOpenModal}
                        className="mb-12 w-full sm:w-auto relative overflow-hidden group bg-[#17aa8c] text-black font-bold uppercase tracking-wider py-4 sm:py-5 px-8 sm:px-12 rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(23,170,140,0.5)] hover:scale-105"
                    >
                        <span className="relative z-10 text-lg">
                            Get My Free Audit
                        </span>
                    </button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 pt-8 border-t border-[#333333] w-full max-w-3xl">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-2 text-[#888888]"
                            >
                                <span className="text-[#17aa8c]">{badge.icon}</span>
                                <span className="text-xs font-mono tracking-widest uppercase font-semibold">{badge.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AuditFooterCTA;
