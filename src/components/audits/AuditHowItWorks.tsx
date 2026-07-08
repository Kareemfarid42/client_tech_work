import { motion } from "framer-motion";
import { AppWindow, Search, FileCheck, ShieldCheck, Lock, DollarSign, Handshake, ArrowRight } from "lucide-react";

const AuditHowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Request Your Audit",
            description: "Fill out the details below so our engineering team can begin analyzing your digital footprint.",
            tag: "Takes 60 Seconds",
            icon: <AppWindow className="w-8 h-8" strokeWidth={1.5} />,
            delay: 0.1
        },
        {
            number: "2",
            title: "AI-Powered Analysis",
            description: "Our advanced AI systems and engineering team deeply analyze your website, SEO, and lead generation to uncover hidden growth opportunities.",
            tag: "AI & Human Expertise",
            icon: <Search className="w-8 h-8" strokeWidth={1.5} />,
            delay: 0.2
        },
        {
            number: "3",
            title: "Receive Your Personalized Audit",
            description: "Get a detailed, easy-to-understand report with actionable recommendations to help you grow your business.",
            tag: "Delivered to Your Email",
            icon: <FileCheck className="w-8 h-8" strokeWidth={1.5} />,
            delay: 0.3
        }
    ];

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-[#000000] border-b border-[#333333]">
            <div className="container-max section-padding relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#17aa8c]/30 bg-[#17aa8c]/10 text-[#17aa8c] text-xs font-mono font-bold uppercase tracking-widest mb-6 w-fit">
                        SIMPLE • FAST • PERSONALIZED
                    </div>
                    <h2 className="text-[26px] sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        How It <span className="text-[#17aa8c]">Works</span>
                    </h2>
                    <p className="text-[#888888] text-lg font-sans">
                        Getting your free Digital Performance Audit is quick and easy. <br className="hidden sm:block" />
                        Here's what happens next.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-[1px] border-t-2 border-dashed border-[#333333] z-0" />
                    
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10">
                            {/* Arrow icon between cards */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute -right-6 top-[40%] -translate-y-1/2 w-8 h-8 bg-[#111111] border border-[#333333] rounded-full items-center justify-center text-[#17aa8c] z-20">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: step.delay }}
                                className="bg-[#0a0a0a] border border-[#333333] rounded-2xl p-8 pt-12 relative flex flex-col h-full items-center text-center hover:border-[#17aa8c]/50 transition-colors duration-300 group"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#17aa8c] text-black font-bold font-heading flex items-center justify-center text-xl shadow-[0_0_20px_rgba(23,170,140,0.4)] border-4 border-[#000000]">
                                    {step.number}
                                </div>

                                {/* Icon Circle */}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#17aa8c]/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <div className="w-16 h-16 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center text-[#17aa8c] shadow-lg">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-heading leading-tight">{step.title}</h3>
                                <p className="text-[#888888] font-sans text-sm leading-relaxed flex-grow mb-8">
                                    {step.description}
                                </p>

                                {/* Tag */}
                                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-[#17aa8c]/10 text-[#17aa8c] text-xs font-medium font-sans w-full">
                                    {step.tag}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-[#0a0a0a] to-[#111111] border border-[#333333] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                >
                    {/* Left part */}
                    <div className="flex items-start gap-4 flex-1">
                        <div className="w-14 h-14 rounded-full bg-[#17aa8c] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(23,170,140,0.3)] text-black">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2 font-heading">100% Free. No Obligation.</h4>
                            <p className="text-[#888888] text-sm font-sans leading-relaxed">
                                There's absolutely no cost and no obligation. Just valuable insights to help your business grow.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-16 bg-[#333333]" />

                    {/* Right part */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1 justify-between w-full">
                        <div className="flex items-start gap-3">
                            <Lock className="w-5 h-5 text-[#17aa8c] flex-shrink-0 mt-0.5" />
                            <div>
                                <h5 className="text-white text-sm font-bold font-heading mb-1">100% Confidential</h5>
                                <p className="text-[#555555] text-xs font-sans">Your information<br/>is always secure.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-[#17aa8c] flex-shrink-0 mt-0.5" />
                            <div>
                                <h5 className="text-white text-sm font-bold font-heading mb-1">No Obligation</h5>
                                <p className="text-[#555555] text-xs font-sans">You are not obligated<br/>to buy anything.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Handshake className="w-5 h-5 text-[#17aa8c] flex-shrink-0 mt-0.5" />
                            <div>
                                <h5 className="text-white text-sm font-bold font-heading mb-1">Built for Your Growth</h5>
                                <p className="text-[#555555] text-xs font-sans">Our goal is to help you<br/>succeed.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AuditHowItWorks;
