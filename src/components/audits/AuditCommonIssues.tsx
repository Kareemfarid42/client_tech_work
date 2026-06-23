import { motion } from "framer-motion";
import { MousePointerClick, MapPin, Smartphone, Gauge, ShieldAlert, Users, Store } from "lucide-react";

interface AuditCommonIssuesProps {
    onOpenModal: () => void;
}

const AuditCommonIssues = ({ onOpenModal }: AuditCommonIssuesProps) => {
    const issues = [
        {
            title: "Weak Calls-to-Action",
            description: "Visitors don't know what to do next, leading to high bounce rates.",
            icon: <MousePointerClick className="w-5 h-5" />
        },
        {
            title: "Missing Local SEO",
            description: "Your business isn't showing up when local customers search for your services.",
            icon: <MapPin className="w-5 h-5" />
        },
        {
            title: "Poor Mobile Experience",
            description: "Frustrating navigation and unreadable text on mobile devices.",
            icon: <Smartphone className="w-5 h-5" />
        },
        {
            title: "Slow Website",
            description: "Slow loading times causing potential customers to leave before seeing your offer.",
            icon: <Gauge className="w-5 h-5" />
        },
        {
            title: "Low Trust Signals",
            description: "Missing reviews, testimonials, or security badges that build confidence.",
            icon: <ShieldAlert className="w-5 h-5" />
        },
        {
            title: "Ineffective Lead Capture",
            description: "Forms that are too long, broken, or simply not compelling enough to fill out.",
            icon: <Users className="w-5 h-5" />
        },
        {
            title: "Weak Google Business Profiles",
            description: "Incomplete profiles with missing info, photos, or unmanaged reviews.",
            icon: <Store className="w-5 h-5" />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0a0a] border-b border-[#333333]">
            <div className="container-max section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Common Issues <span className="text-[#17aa8c]">We Find</span>
                    </h2>
                    <p className="text-[#888888] text-lg font-sans">
                        Many businesses suffer from invisible bottlenecks. We help identify and eliminate these growth blockers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {issues.map((issue, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#111111] border border-[#333333] rounded-2xl p-6 hover:border-yellow-500/30 transition-colors duration-300 flex flex-col group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {issue.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 font-heading">{issue.title}</h3>
                            <p className="text-[#888888] font-sans text-sm leading-relaxed flex-grow">
                                {issue.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* 8th Card: Highlighted CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="bg-gradient-to-br from-amber-500/20 to-orange-500/5 border border-amber-500/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        <h3 className="text-xl font-bold text-white mb-6 font-heading leading-tight z-10">
                            Is your business experiencing these?
                        </h3>
                        <button
                            onClick={onOpenModal}
                            className="w-full py-3 px-6 bg-amber-500 text-black font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-colors duration-300 z-10 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        >
                            Get My Free Audit
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuditCommonIssues;
