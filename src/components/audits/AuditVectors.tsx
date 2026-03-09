import { motion } from "framer-motion";
import { ShieldAlert, Zap, SearchCode, TerminalSquare } from "lucide-react";

interface VectorCardProps {
    title: string;
    description: string;
    metrics: string;
    icon: React.ReactNode;
    delay: number;
}

const VectorCard = ({ title, description, metrics, icon, delay }: VectorCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#0ea5e9]/50 transition-all duration-300 overflow-hidden"
    >
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#0ea5e9]/50 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                <div className="text-white/70 group-hover:text-[#0ea5e9] transition-colors">{icon}</div>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-[#888888] text-sm mb-6 leading-relaxed bg-[#0a0a0a]/50 p-4 rounded-lg border border-white/5 font-sans">
                {description}
            </p>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#555]">Scan Vectors</span>
                <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-1 rounded">{metrics}</span>
            </div>
        </div>
    </motion.div>
);

const AuditVectors = () => {
    const vectors = [
        {
            title: "Security Risk Profile",
            description: "Deep-scan of core dependencies, authentication vectors, and API endpoint vulnerabilities to prevent zero-day exploits.",
            metrics: "142+ CHECKS",
            icon: <ShieldAlert className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.1
        },
        {
            title: "Core Web Vitals",
            description: "Analysis of LCP, FID, and CLS. We locate render-blocking scripts and unoptimized assets causing structural latency.",
            metrics: "<0.8s TARGET",
            icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.2
        },
        {
            title: "Technical SEO Matrix",
            description: "Evaluating schema markup, highly-nested DOM trees, crawler accessibility, and semantic HTML compliance.",
            metrics: "100/100 INdex",
            icon: <SearchCode className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.3
        },
        {
            title: "Code Entropy & Quality",
            description: "Static analysis identifying dead code, cyclical dependencies, and architectural patterns causing technical debt.",
            metrics: "0% TECH DEBT",
            icon: <TerminalSquare className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 relative border-b border-[#333333]">
            <div className="container-max section-padding">
                <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Deep-Tech Diagnostic <span className="text-[#0ea5e9]">Vectors</span></h2>
                    <p className="text-[#888888] text-lg font-sans">Our audits execute comprehensive sweeps across four primary pillars of software engineering.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {vectors.map((vector, index) => (
                        <VectorCard key={index} {...vector} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuditVectors;
