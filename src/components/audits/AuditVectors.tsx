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
        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#17aa8c]/50 transition-all duration-300 overflow-hidden"
    >
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#17aa8c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#17aa8c]/50 group-hover:shadow-[0_0_15px_rgba(23, 170, 140,0.3)] transition-all duration-300">
                <div className="text-white/70 group-hover:text-[#17aa8c] transition-colors">{icon}</div>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-[#888888] text-sm mb-6 leading-relaxed bg-[#0a0a0a]/50 p-4 rounded-lg border border-white/5 font-sans">
                {description}
            </p>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#555]">Scan Vectors</span>
                <span className="text-sm font-mono text-[#17aa8c] bg-[#17aa8c]/10 px-2 py-1 rounded">{metrics}</span>
            </div>
        </div>
    </motion.div>
);

const AuditVectors = () => {
    const vectors = [
        {
            title: "Security Risk Assessment",
            description: "We review authentication systems, APIs, and software dependencies to identify security risks and potential vulnerabilities.",
            metrics: "120+ SECURITY CHECKS",
            icon: <ShieldAlert className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.1
        },
        {
            title: "Core Web Performance",
            description: "We measure key performance indicators such as page loading speed, responsiveness, and visual stability. We also identify scripts and assets that slow down your system.",
            metrics: "<0.8s RESPONSE TIME",
            icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.2
        },
        {
            title: "Technical SEO Health",
            description: "We evaluate how search engines access and understand your website. This includes site structure, crawl accessibility, and technical optimization.",
            metrics: "100/100 INDEX",
            icon: <SearchCode className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.3
        },
        {
            title: "Code Quality Review",
            description: "We analyze your codebase to identify inefficient logic, unused code, and architectural issues that may affect system performance and scalability.",
            metrics: "0% TECH DEBT",
            icon: <TerminalSquare className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 relative border-b border-[#333333]">
            <div className="container-max section-padding">
                <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Software Performance <span className="text-[#17aa8c]">Diagnostics</span></h2>
                    <p className="text-[#888888] text-lg font-sans">Our performance audits evaluate four key areas of your software to identify risks, performance issues, and opportunities for improvement.</p>
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
