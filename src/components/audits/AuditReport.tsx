import { motion } from "framer-motion";
import { ArrowRight, Search, MapPin, TrendingUp, CheckCircle2, AppWindow, Store, Filter, FileText, UserCheck, User, Check } from "lucide-react";

interface AuditReportProps {
    onOpenModal: () => void;
}

const AuditReport = ({ onOpenModal }: AuditReportProps) => {
    const deliverables = [
        {
            title: "Website Performance Review",
            description: "Deep-dive analysis into load times, mobile responsiveness, and structural bottlenecks affecting user experience.",
            icon: <AppWindow className="w-8 h-8" strokeWidth={1.5} />,
            tag: "Better User Experience"
        },
        {
            title: "SEO & AI Visibility Assessment",
            description: "Evaluate your search engine rankings and readiness for AI-driven discovery platforms.",
            icon: <Search className="w-8 h-8" strokeWidth={1.5} />,
            tag: "Higher Search Visibility"
        },
        {
            title: "Google Business Profile Review",
            description: "Optimize your local footprint to ensure you capture high-intent customers in your area.",
            icon: <Store className="w-8 h-8" strokeWidth={1.5} />,
            tag: "Stronger Local Presence"
        },
        {
            title: "Lead Generation Analysis",
            description: "Review your conversion funnels, forms, and CTAs to maximize the leads generated from existing traffic.",
            icon: <Filter className="w-8 h-8" strokeWidth={1.5} />,
            tag: "More Qualified Leads"
        },
        {
            title: "Growth Opportunities",
            description: "Identify untapped marketing channels and strategies to aggressively scale your business.",
            icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
            tag: "Business Growth Focused"
        },
        {
            title: "Prioritized Action Plan",
            description: "A clear, step-by-step roadmap outlining exactly what to fix first for the highest ROI.",
            icon: <FileText className="w-8 h-8" strokeWidth={1.5} />,
            tag: "Actionable Next Steps"
        }
    ];

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-[#050505]">
            <div className="container-max section-padding relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-10 sm:mb-16"
                >
                    <h2 className="text-[26px] sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Here's What You'll <span className="text-[#17aa8c]">Receive</span>
                    </h2>
                    <p className="text-[#888888] text-lg leading-relaxed font-sans">
                        Your complimentary Digital Performance Audit includes a personalized review of the key areas that influence your online visibility, lead generation, and business growth along with practical recommendations tailored to your business.
                    </p>
                </motion.div>

                {/* 6-Card Grid (Rectangles) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-10 sm:mb-16">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0a0a0a] rounded-2xl p-4 sm:p-5 hover:bg-[#111111] hover:shadow-[0_10px_30px_rgba(23,170,140,0.15)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden border border-[#333333] hover:border-[#17aa8c]/50 flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#111111] text-[#17aa8c] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#17aa8c]/20 transition-all duration-500 shadow-sm flex-shrink-0 border border-[#333333]">
                                {item.icon}
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2 font-heading leading-snug">{item.title}</h3>
                            <p className="text-[#888888] font-sans text-[11px] leading-relaxed flex-grow mb-6">
                                {item.description}
                            </p>
                            
                            <div className="w-full flex items-center justify-center gap-1.5 mt-auto pt-4 border-t border-[#333333] bg-[#111111]/50 -mx-4 px-4 pb-2 rounded-b-2xl">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#17aa8c] flex-shrink-0" />
                                <span className="text-[10px] font-bold text-[#aaaaaa] tracking-wide">{item.tag}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Strategist Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-[#111111] border border-[#333333] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-5xl mx-auto"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
                        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-md">
                            <UserCheck className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-white mb-1.5 font-heading">Every audit is reviewed by a real strategist.</h4>
                            <p className="text-[#888888] text-sm font-sans">
                                Not automated. Not AI-generated. Just practical insights from real experts who care about your business.
                            </p>
                        </div>
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-3 opacity-90 flex-shrink-0">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-[#111111] bg-[#1a1a1a] flex items-center justify-center text-[#555] shadow-sm"><User className="w-5 h-5"/></div>
                            <div className="w-10 h-10 rounded-full border-2 border-[#111111] bg-[#1a1a1a] flex items-center justify-center text-[#555] shadow-sm"><User className="w-5 h-5"/></div>
                            <div className="w-10 h-10 rounded-full border-2 border-[#111111] bg-[#1a1a1a] flex items-center justify-center text-[#555] shadow-sm"><User className="w-5 h-5"/></div>
                        </div>
                        <div className="w-12 border-t-2 border-dashed border-[#333333]"></div>
                        <div className="w-12 h-12 bg-[#0a0a0a] rounded-xl shadow-sm border border-[#333333] flex items-center justify-center text-[#17aa8c] relative">
                            <FileText className="w-6 h-6" />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#17aa8c] rounded-full border-2 border-[#111111] flex items-center justify-center text-black shadow-sm">
                                <Check className="w-3 h-3" strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                </motion.div>

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
