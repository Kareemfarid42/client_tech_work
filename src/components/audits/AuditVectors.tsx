import { motion } from "framer-motion";
import { Server, BarChart3, Workflow, PieChart } from "lucide-react";

interface VectorCardProps {
    title: string;
    description: string;
    metrics?: string;
    coverage?: string[];
    icon: React.ReactNode;
    delay: number;
}

const VectorCard = ({ title, description, metrics, coverage, icon, delay }: VectorCardProps) => (
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

            {coverage && (
                <div className="mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#555] mb-3 font-bold">Review Coverage</h4>
                    <ul className="space-y-2">
                        {coverage.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-[#888888] font-sans">
                                <div className="w-1 h-1 rounded-full bg-[#17aa8c]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(metrics || !coverage) && (
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#555]">Scan Vectors</span>
                    <span className="text-sm font-mono text-[#17aa8c] bg-[#17aa8c]/10 px-2 py-1 rounded">{metrics || "N/A"}</span>
                </div>
            )}
        </div>
    </motion.div>
);

const AuditVectors = () => {
    const vectors = [
        {
            title: "Digital Infrastructure Review",
            description: "We assess your website, platforms, and digital systems to identify performance issues that affect user experience and business growth.",
            coverage: [
                "Website performance",
                "Platform architecture",
                "System reliability"
            ],
            icon: <Server className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.1
        },
        {
            title: "Marketing Performance Analysis",
            description: "We evaluate your marketing channels, campaigns, and conversion flows to understand how effectively they generate and nurture leads.",
            coverage: [
                "Lead generation",
                "Conversion performance",
                "Customer engagement"
            ],
            icon: <BarChart3 className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.2
        },
        {
            title: "Automation & Workflow Efficiency",
            description: "We review your automation systems to ensure leads are captured, nurtured, and followed up consistently.",
            coverage: [
                "Marketing automation",
                "Lead nurturing systems",
                "Customer journey workflows"
            ],
            icon: <Workflow className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.3
        },
        {
            title: "Data & Analytics Insights",
            description: "We analyze your tracking systems and analytics to ensure you have clear visibility into performance and decision-making.",
            coverage: [
                "Analytics setup",
                "Reporting accuracy",
                "Performance insights"
            ],
            icon: <PieChart className="w-6 h-6" strokeWidth={1.5} />,
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 relative border-b border-[#333333]">
            <div className="container-max section-padding">
                <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Digital Performance <span className="text-[#17aa8c]">Diagnostics</span></h2>
                    <p className="text-[#888888] text-lg font-sans">Our performance audits review the most important parts of your digital ecosystem to identify inefficiencies, missed opportunities, and areas for improvement.</p>
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
