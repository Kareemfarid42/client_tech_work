import { motion } from "framer-motion";
import { User, Star, ClipboardList, Check, Target, ArrowUpRight, Shield, Users, Lock } from "lucide-react";

const AuditWhyUs = () => {
    const reasons = [
        {
            title: "Manual Expert Review",
            description: "Your audit is personally reviewed by experienced digital experts—never automated or AI-generated.",
            icon: (
                <div className="relative flex items-center justify-center w-full h-full">
                    <User className="w-12 h-12 text-[#dddddd] stroke-[1.5]" />
                    <div className="absolute -bottom-1 -right-1 bg-[#0a0a0a] rounded-full p-0.5">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    </div>
                </div>
            )
        },
        {
            title: "Actionable Recommendations",
            description: "Get clear, prioritized recommendations you can understand and implement to see real results.",
            icon: (
                <div className="relative flex items-center justify-center w-full h-full">
                    <ClipboardList className="w-12 h-12 text-[#dddddd] stroke-[1.5]" />
                    <div className="absolute -bottom-0 -right-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                        <Check className="w-3 h-3 text-black stroke-[3]" />
                    </div>
                </div>
            )
        },
        {
            title: "Business-Focused Strategy",
            description: "We focus on what matters most for your business—visibility, leads, and measurable growth.",
            icon: (
                <div className="relative flex items-center justify-center w-full h-full">
                    <Target className="w-12 h-12 text-[#dddddd] stroke-[1.5]" />
                    <div className="absolute top-1 right-1 bg-[#0a0a0a] rounded-full p-0.5">
                        <ArrowUpRight className="w-5 h-5 text-amber-500 stroke-[3]" />
                    </div>
                </div>
            )
        },
        {
            title: "No Obligation",
            description: "This audit is 100% free and comes with no obligation. Use the insights however you choose.",
            icon: (
                <div className="relative flex items-center justify-center w-full h-full">
                    <Shield className="w-12 h-12 text-[#dddddd] stroke-[1.5]" />
                    <Check className="w-5 h-5 text-amber-500 absolute stroke-[3]" />
                </div>
            )
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
                    <div className="inline-flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 sm:w-16 h-[1px] bg-amber-500/50"></div>
                        <span className="text-amber-500 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">THE CLIENTECH DIFFERENCE</span>
                        <div className="w-12 sm:w-16 h-[1px] bg-amber-500/50"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Why Businesses Choose Clientech
                    </h2>
                    <p className="text-[#888888] text-lg font-sans max-w-2xl mx-auto">
                        We go beyond automated reports. Every audit is carefully reviewed by our experts to deliver insights that actually help your business grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-2xl p-8 hover:border-amber-500/30 hover:bg-[#111111] transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4 font-heading leading-tight">{reason.title}</h3>
                            <p className="text-[#888888] font-sans text-[13px] leading-relaxed">
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
                    className="max-w-6xl mx-auto bg-[#111111] border border-[#333333] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                    {/* Left: Trusted By */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 lg:w-2/5">
                        <div className="flex -space-x-3 flex-shrink-0 relative">
                            <div className="w-12 h-12 rounded-full border-2 border-[#111111] bg-[#1a1a1a] flex items-center justify-center text-[#555] overflow-hidden"><User className="w-6 h-6"/></div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#111111] bg-[#222222] flex items-center justify-center text-[#777] overflow-hidden"><User className="w-6 h-6"/></div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#111111] bg-[#1a1a1a] flex items-center justify-center text-[#555] overflow-hidden"><User className="w-6 h-6"/></div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-[#111111] flex items-center justify-center text-[#111111]">
                                <Star className="w-3 h-3 fill-[#111111]" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold font-heading text-[15px] mb-1.5">Trusted by Businesses Like Yours</h4>
                            <p className="text-[#888888] text-[11px] font-sans leading-relaxed">
                                We've helped professional service firms and small businesses across California improve their digital performance and grow with confidence.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-16 bg-[#333333]"></div>

                    {/* Middle: Reviews */}
                    <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-[#111111]">
                            <Star className="w-6 h-6 fill-[#111111]" />
                        </div>
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-white font-mono">5.0</span>
                                <div className="flex gap-0.5">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />)}
                                </div>
                            </div>
                            <p className="text-[#888888] text-[11px] font-sans mt-0.5">Google Reviews</p>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-16 bg-[#333333]"></div>

                    {/* Middle: Audits */}
                    <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
                        <Users className="w-10 h-10 text-amber-500 flex-shrink-0 stroke-[1.5]" />
                        <div>
                            <p className="text-2xl font-bold text-white font-mono">500+</p>
                            <p className="text-[#888888] text-[11px] font-sans mt-0.5">Audits Completed</p>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-16 bg-[#333333]"></div>

                    {/* Right: Confidential */}
                    <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
                        <div className="relative flex items-center justify-center flex-shrink-0">
                            <Shield className="w-10 h-10 text-white stroke-[1.5]" />
                            <Lock className="w-4 h-4 text-white absolute" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white font-mono">100%</p>
                            <p className="text-[#888888] text-[11px] font-sans mt-0.5">Confidential</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AuditWhyUs;
