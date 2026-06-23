import { motion } from "framer-motion";
import { UserCheck, Target, Lightbulb, ShieldCheck, Star, StarHalf } from "lucide-react";

const AuditWhyUs = () => {
    const reasons = [
        {
            title: "Manual Expert Review",
            description: "No automated fluff. Our engineers and strategists manually review your digital footprint.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Actionable Recommendations",
            description: "We don't just give you a score. We give you a prioritized roadmap of what to fix and how.",
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Business-Focused Strategy",
            description: "Our insights are geared towards driving leads, sales, and tangible business growth.",
            icon: <Lightbulb className="w-6 h-6" />
        },
        {
            title: "No Obligation",
            description: "Our audit is completely free with absolutely no pressure to hire us afterwards.",
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#000000] border-b border-[#333333]">
            <div className="container-max section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Why Businesses Choose <span className="text-[#17aa8c]">Clientech</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-2xl p-8 hover:border-[#17aa8c]/50 hover:bg-[#111111] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#17aa8c]/10 text-[#17aa8c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading leading-tight">{reason.title}</h3>
                            <p className="text-[#888888] font-sans text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] border border-[#333333] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-around gap-8 text-center sm:text-left relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[#17aa8c]/5 pointer-events-none"></div>
                    
                    <div className="flex flex-col items-center sm:items-start gap-3 relative z-10">
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                            ))}
                            <StarHalf className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                        </div>
                        <p className="text-white font-bold font-heading text-lg tracking-wide">4.9 Google Reviews</p>
                    </div>

                    <div className="hidden sm:block w-px h-16 bg-[#333333] relative z-10"></div>

                    <div className="flex flex-col items-center sm:items-start gap-1 relative z-10">
                        <p className="text-4xl font-bold text-[#17aa8c] font-mono">500+</p>
                        <p className="text-[#888888] font-sans text-sm uppercase tracking-widest font-semibold mt-1">Audits Completed</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AuditWhyUs;
