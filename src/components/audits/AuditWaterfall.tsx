import { motion } from "framer-motion";

const AuditWaterfall = () => {
    return (
        <section className="py-24 relative border-b border-[#333333] bg-[#050505]">
            <div className="container-max section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Explanation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 text-center">
                            Eliminate <span className="text-red-500">Render-Blocking</span> Delays
                        </h2>
                        <p className="text-[#888888] text-lg leading-relaxed mb-6 font-sans">
                            Fast loading times are not achieved by compressing images alone. They require optimizing how your application loads scripts, styles, and other resources that affect the page rendering process.
                        </p>
                        <p className="text-[#888888] text-lg leading-relaxed mb-8 font-sans">
                            Our performance audit identifies where delays occur in your request chain and highlights the exact scripts, dependencies, or third-party resources that slow down your application.
                        </p>

                        <div className="grid grid-cols-2 gap-6 border-t border-[#333333] pt-8">
                            <div>
                                <div className="text-[#555] text-xs font-mono uppercase tracking-widest mb-1">Average Industry TTFB</div>
                                <div className="text-white text-3xl font-mono">1.2<span className="text-sm text-[#888]">s</span></div>
                            </div>
                            <div>
                                <div className="text-[#555] text-xs font-mono uppercase tracking-widest mb-1">Optimized Target</div>
                                <div className="text-[#17aa8c] text-3xl font-mono">0.1<span className="text-sm text-[#888]">s</span></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Waterfall Comparison */}
                    <div className="relative bg-[#0a0a0a] rounded-2xl border border-[#333333] p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                        {/* Timeline Header */}
                        <div className="flex justify-between text-[#555] text-xs font-mono border-b border-[#333333] pb-2 mb-6">
                            <span>0ms</span>
                            <span>500ms</span>
                            <span>1000ms</span>
                            <span>1500ms</span>
                            <span>2000ms+</span>
                        </div>

                        {/* Unoptimized (Red) */}
                        <div className="mb-10 space-y-3 relative group">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-12 bg-red-500/20 rounded-full" />
                            <div className="text-xs font-mono text-red-400 mb-2 font-bold tracking-wider">UNOPTIMIZED WATERFALL</div>

                            {/* Document Request */}
                            <div className="w-full flex">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} transition={{ duration: 1, delay: 0.2 }} className="h-6 bg-[#333] rounded-sm relative">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white/50 font-mono">index.html (300ms)</span>
                                </motion.div>
                            </div>
                            {/* Render Blocking JS */}
                            <div className="w-full flex border-l-2 border-dashed border-[#333] ml-[30%]">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "45%" }} transition={{ duration: 1, delay: 0.4 }} className="h-6 bg-red-500/80 rounded-sm relative shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white font-mono font-bold">app-bundle.js (PARSING BLOCK)</span>
                                </motion.div>
                            </div>
                            {/* Delayed CSS */}
                            <div className="w-full flex border-l-2 border-dashed border-red-500/50 ml-[75%]">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, delay: 0.6 }} className="h-6 bg-[#444] rounded-sm relative">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white/50 font-mono">styles.css (50ms)</span>
                                </motion.div>
                            </div>
                            {/* FCP marker */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute right-0 top-0 bottom-0 w-px bg-red-500/30">
                                <span className="absolute -bottom-5 right-0 text-red-500/80 text-[10px] font-mono whitespace-nowrap translate-x-1/2">LCP: 2.1s</span>
                            </motion.div>
                        </div>

                        {/* Optimized (Cyan) */}
                        <div className="space-y-3 relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#17aa8c]/20 rounded-full" />
                            <div className="text-xs font-mono text-[#17aa8c] mb-2 font-bold tracking-wider">OPTIMIZED EXECUTION</div>

                            {/* Document Request */}
                            <div className="w-full flex">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1, delay: 0.8 }} className="h-6 bg-[#333] rounded-sm relative">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white/50 font-mono">index.html (50ms)</span>
                                </motion.div>
                            </div>
                            {/* Concurrent CSS/JS */}
                            <div className="w-full flex border-l-2 border-dashed border-[#333] ml-[10%] space-x-1">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "15%" }} transition={{ duration: 1, delay: 1.0 }} className="h-6 bg-[#17aa8c]/80 rounded-sm relative shadow-[0_0_10px_rgba(23, 170, 140,0.3)]">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white font-mono font-bold font-mono">critical.css</span>
                                </motion.div>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} transition={{ duration: 1, delay: 1.0 }} className="h-6 bg-[#17aa8c]/40 rounded-sm relative border border-[#17aa8c]/50">
                                    <span className="absolute left-2 top-1.5 text-[9px] text-white font-mono">app-defer.js</span>
                                </motion.div>
                            </div>

                            {/* FCP marker */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.0 }} className="absolute left-[25%] top-0 bottom-0 w-px bg-[#17aa8c]/80 shadow-[0_0_8px_rgba(23, 170, 140,0.8)] z-10">
                                <span className="absolute -bottom-5 left-0 text-[#17aa8c] font-bold text-[10px] font-mono whitespace-nowrap -translate-x-1/2">LCP: 0.4s</span>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditWaterfall;
