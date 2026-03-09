import { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { Activity } from "lucide-react";

interface AuditHeroProps {
    onOpenModal: () => void;
}

const AuditHero = ({ onOpenModal }: AuditHeroProps) => {
    const [score, setScore] = useState(0);
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const controls = useAnimation();

    // Create a motion value for the score to animate it smoothly
    const scoreValue = useMotionValue(0);
    // Transform the 0-100 score into a stroke-dashoffset value
    const strokeDashoffset = useTransform(scoreValue, [0, 100], [circumference, circumference * 0.02]);

    useEffect(() => {
        // Delay the animation slightly so it happens after the page loads
        const timer = setTimeout(() => {
            controls.start({ opacity: 1, scale: 1 });

            // Animate the score from 0 to 98
            animate(scoreValue, 98, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => setScore(Math.round(latest))
            });
        }, 800);

        return () => clearTimeout(timer);
    }, [controls, scoreValue]);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#333333]">
            {/* Ambient Pulse Glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-max section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0ea5e9]/30 bg-[#111111] text-[#0ea5e9] text-xs font-mono font-bold uppercase tracking-widest mb-8 w-fit shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                        <Activity className="w-4 h-4" />
                        System Diagnostics
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
                        Unleash Your Software's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#888]">True Potential.</span>
                    </h1>

                    <p className="text-lg text-[#888888] leading-relaxed max-w-xl mb-10 font-sans">
                        Stop hemorrhaging users due to structural latency and technical debt. Our deep-tech performance audits analyze architectural bottlenecks, security vectors, and algorithmic efficiency to forge a <span className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">sub-second</span> digital experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onOpenModal}
                            className="bg-[#0ea5e9] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-sm hover:bg-white transition-colors duration-300"
                        >
                            Start Your Audit
                        </button>
                        <button className="bg-transparent border border-[#333333] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-sm hover:border-white transition-colors duration-300">
                            View Sample Report
                        </button>
                    </div>
                </motion.div>

                {/* Right: The Animated Scanner Gauge */}
                <div className="relative flex justify-center items-center z-10 w-full aspect-square max-w-[500px] mx-auto">
                    {/* Concentric rings to look technical */}
                    <div className="absolute inset-0 rounded-full border border-[#333333] border-dashed animate-[spin_60s_linear_infinite] opacity-30"></div>
                    <div className="absolute inset-8 rounded-full border border-[#333333] opacity-20"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controls}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex items-center justify-center"
                    >
                        <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90 drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                            {/* Background Track Circle */}
                            <circle
                                cx="160"
                                cy="160"
                                r={radius}
                                stroke="#111111"
                                strokeWidth="16"
                                fill="transparent"
                                strokeLinecap="round"
                            />
                            {/* Animated Progression Circle */}
                            <motion.circle
                                cx="160"
                                cy="160"
                                r={radius}
                                stroke="#0ea5e9"
                                strokeWidth="16"
                                fill="transparent"
                                strokeLinecap="round"
                                style={{ strokeDasharray: circumference, strokeDashoffset }}
                            />
                        </svg>

                        {/* Center Score Readout */}
                        <div className="absolute flex flex-col items-center justify-center bg-[#050505] w-[200px] h-[200px] rounded-full border border-white/5 shadow-inner">
                            <div className="text-[#888888] text-xs font-mono uppercase tracking-widest mb-1">System State</div>
                            <div className="text-white text-6xl font-mono font-bold tracking-tighter">
                                {score}<span className="text-2xl text-[#555] font-light">/100</span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: score > 90 ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-[#0ea5e9] text-xs font-mono mt-2 bg-[#0ea5e9]/10 px-3 py-1 rounded border border-[#0ea5e9]/20"
                            >
                                OPTIMIZED
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AuditHero;
