import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Search, MapPin, Users, TrendingUp, CheckSquare } from "lucide-react";

interface AuditReportProps {
    onOpenModal: () => void;
}

const AuditReport = ({ onOpenModal }: AuditReportProps) => {
    const deliverables = [
        {
            title: "Website Performance Review",
            description: "Deep-dive analysis into load times, mobile responsiveness, and structural bottlenecks affecting user experience.",
            icon: <LayoutDashboard className="w-6 h-6" />
        },
        {
            title: "SEO & AI Visibility Assessment",
            description: "Evaluate your search engine rankings and readiness for AI-driven discovery platforms.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Google Business Profile Review",
            description: "Optimize your local footprint to ensure you capture high-intent customers in your area.",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Lead Generation Analysis",
            description: "Review your conversion funnels, forms, and CTAs to maximize the leads generated from existing traffic.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Growth Opportunities",
            description: "Identify untapped marketing channels and strategies to aggressively scale your business.",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "Prioritized Action Plan",
            description: "A clear, step-by-step roadmap outlining exactly what to fix first for the highest ROI.",
            icon: <CheckSquare className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="container-max section-padding relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Here's What You'll <span className="text-[#17aa8c]">Receive</span>
                    </h2>
                    <p className="text-[#888888] text-lg leading-relaxed font-sans">
                        Your complimentary Digital Performance Audit includes a personalized review of the key areas that influence your online visibility, lead generation, and business growth along with practical recommendations tailored to your business.
                    </p>
                </motion.div>

                {/* 6-Card Grid (White Card UI Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(23,170,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden border border-transparent"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#f0f9f7] text-[#17aa8c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#17aa8c] group-hover:text-white transition-all duration-300 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading leading-tight">{item.title}</h3>
                            <p className="text-gray-600 font-sans text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center"
                >
                    <button
                        onClick={onOpenModal}
                        className="relative overflow-hidden group bg-[#17aa8c] text-black font-bold py-5 px-10 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(23,170,140,0.4)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 text-lg uppercase tracking-wider">
                            Schedule Your Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <p className="text-[#555] text-xs font-mono text-center mt-6 tracking-widest uppercase">
                        Limited Audit Availability Each Month.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default AuditReport;
