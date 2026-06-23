import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2, Check, ShieldCheck, TrendingUp } from "lucide-react";

const AuditHeroAnimation = () => {
    const [scene, setScene] = useState(1);

    useEffect(() => {
        let isMounted = true;
        
        const runLoop = async () => {
            while (isMounted) {
                setScene(1); // 0-3s
                await new Promise(r => setTimeout(r, 3000));
                if(!isMounted) break;
                
                setScene(2); // 3-6s
                await new Promise(r => setTimeout(r, 3000));
                if(!isMounted) break;
                
                setScene(3); // 6-10s
                await new Promise(r => setTimeout(r, 4000));
                if(!isMounted) break;
                
                setScene(4); // 10-15s
                await new Promise(r => setTimeout(r, 5000));
                if(!isMounted) break;
                
                setScene(5); // 15-18s
                await new Promise(r => setTimeout(r, 3000));
                if(!isMounted) break;
                
                setScene(6); // 18-22s
                await new Promise(r => setTimeout(r, 4000));
            }
        };

        runLoop();

        return () => { isMounted = false; };
    }, []);

    const springConfig = { type: "spring" as const, stiffness: 60, damping: 15, mass: 1 };
    const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }; // Apple-like ease

    return (
        <div className="relative w-full aspect-square max-w-[550px] mx-auto flex items-center justify-center perspective-[1200px]">
            {/* Ambient soft glow */}
            <motion.div 
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-[#17aa8c]/10 to-transparent rounded-full blur-[100px] pointer-events-none" 
            />

            <AnimatePresence mode="wait">
                {/* --- SCENE 1 & 2: Browser & Scanning --- */}
                {scene <= 2 && (
                    <motion.div
                        key="browser"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ 
                            opacity: 1, 
                            y: scene === 1 ? [-5, 5, -5] : 0, 
                            scale: scene === 2 ? 0.95 : 1,
                            filter: scene === 2 ? "blur(0.5px) brightness(0.7)" : "blur(0px) brightness(1)",
                        }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ ...smoothTransition, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                        className="absolute w-[420px] h-[280px] bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col z-10"
                    >
                        {/* Browser Header */}
                        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-gradient-to-b from-white/[0.05] to-transparent">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                            </div>
                            <div className="mx-auto w-48 h-5 bg-white/5 rounded-md text-[10px] text-white/40 flex items-center justify-center font-medium tracking-wide">
                                yourbusiness.com
                            </div>
                        </div>
                        {/* Browser Content */}
                        <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden bg-gradient-to-b from-transparent to-white/[0.02]">
                            <div className="flex justify-between items-center mb-2">
                                <div className="w-32 h-6 bg-white/10 rounded-md" />
                                <div className="flex gap-3">
                                    <div className="w-10 h-2 bg-white/10 rounded-full" />
                                    <div className="w-10 h-2 bg-white/10 rounded-full" />
                                    <div className="w-10 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="w-full h-8 bg-gradient-to-r from-white/10 to-transparent rounded-md" />
                                    <div className="w-3/4 h-3 bg-white/5 rounded-full" />
                                    <div className="w-2/3 h-3 bg-white/5 rounded-full" />
                                    
                                    <motion.div 
                                        animate={{ backgroundColor: scene === 1 ? ["rgba(255,255,255,0.1)", "rgba(23,170,140,0.8)", "rgba(255,255,255,0.1)"] : "rgba(255,255,255,0.1)" }}
                                        transition={{ duration: 2, times: [0, 0.5, 1] }}
                                        className="w-24 h-8 mt-2 rounded-md bg-white/10" 
                                    />
                                </div>
                                <div className="w-32 h-32 bg-white/5 rounded-lg border border-white/5" />
                            </div>
                            
                            {/* Simulated Mouse in Scene 1 */}
                            {scene === 1 && (
                                <motion.div
                                    initial={{ x: 200, y: 150, opacity: 0 }}
                                    animate={{ 
                                        x: [200, 100, 40, 40], 
                                        y: [150, 100, 100, 100],
                                        opacity: [0, 1, 1, 0]
                                    }}
                                    transition={{ duration: 3, ease: smoothTransition.ease }}
                                    className="absolute z-10 text-white drop-shadow-lg"
                                >
                                    <MousePointer2 className="w-6 h-6 fill-black stroke-white stroke-2" />
                                </motion.div>
                            )}

                            {/* Scene 2: Scanning Overlay & Progress */}
                            <AnimatePresence>
                                {scene === 2 && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]"
                                    >
                                        <motion.div
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#17aa8c] to-transparent shadow-[0_0_15px_rgba(23,170,140,0.8)]"
                                        />
                                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-20">
                                            <motion.div 
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                                className="h-full bg-[#17aa8c] shadow-[0_0_10px_rgba(23,170,140,0.5)]"
                                            />
                                        </div>
                                        <span className="text-[9px] font-mono text-[#17aa8c] mt-2 tracking-widest uppercase">Analyzing Systems...</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scene 2: Scan Cards (Floating) */}
            <AnimatePresence>
                {scene === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 perspective-[1000px]">
                        {[
                            { label: "Website Performance", x: -160, y: -100, delay: 0 },
                            { label: "SEO & AI Visibility", x: 160, y: -80, delay: 0.4 },
                            { label: "Google Business Profile", x: -170, y: 20, delay: 0.8 },
                            { label: "User Experience", x: 170, y: 40, delay: 1.2 },
                            { label: "Lead Generation", x: -140, y: 130, delay: 1.6 },
                            { label: "Competitor Snapshot", x: 140, y: 140, delay: 2.0 },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    x: card.x,
                                    y: [card.y - 5, card.y + 5, card.y - 5], // Parallax floating
                                    scale: 1
                                }}
                                exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
                                transition={{ 
                                    opacity: { duration: 0.4, delay: card.delay },
                                    scale: { type: "spring", stiffness: 100, damping: 15, delay: card.delay },
                                    x: { type: "spring", stiffness: 60, damping: 20, delay: card.delay },
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: card.delay }
                                }}
                                className="absolute flex items-center gap-2.5 px-3.5 py-2 bg-white/[0.03] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden"
                            >
                                {/* Soft glow traveling through card */}
                                <motion.div 
                                    animate={{ left: ["-100%", "200%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: card.delay + 0.5 }}
                                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                />
                                <div className="bg-[#17aa8c]/20 p-1 rounded-full border border-[#17aa8c]/30">
                                    <Check className="w-3 h-3 text-[#17aa8c]" strokeWidth={3} />
                                </div>
                                <span className="text-xs font-medium text-white/90 tracking-wide">{card.label}</span>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* --- SCENE 3, 4, 5, 6: Report Cover & Pages --- */}
            <AnimatePresence>
                {scene >= 3 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20, rotateX: 10, y: 30 }}
                        animate={{
                            opacity: scene >= 3 ? 1 : 0,
                            scale: scene === 3 ? 1 : scene >= 4 && scene <= 5 ? 0.95 : scene === 6 ? 1 : 0.8,
                            x: scene === 4 ? -120 : 0,
                            y: scene >= 4 && scene <= 5 ? 0 : [0, -5, 0], // Floating
                            rotateY: scene >= 4 && scene <= 5 ? 0 : -5,
                            rotateX: scene >= 4 && scene <= 5 ? 0 : 5,
                            zIndex: 40
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 30 }}
                        transition={{ ...springConfig, y: scene < 4 || scene === 6 ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : springConfig }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="absolute w-[280px] h-[380px]"
                    >
                        {/* Report Cover (Matte Black) */}
                        <motion.div 
                            animate={{ rotateY: scene >= 4 && scene <= 5 ? -160 : 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: "left", backfaceVisibility: "hidden" }}
                            className="absolute inset-0 bg-[#0f0f0f] rounded-r-2xl rounded-l-md border border-white/10 shadow-[20px_10px_50px_rgba(0,0,0,0.6),inset_1px_1px_0_rgba(255,255,255,0.05)] flex flex-col items-center justify-center p-8 z-20"
                        >
                            {/* Book Binding */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black via-[#151515] to-transparent border-r border-white/5 opacity-80" />
                            
                            <motion.div
                                animate={{ opacity: scene >= 4 ? 0 : 1 }}
                                className="flex flex-col items-center justify-center w-full h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#17aa8c]/20 to-transparent border border-[#17aa8c]/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(23,170,140,0.15)]">
                                    <ShieldCheck className="w-8 h-8 text-[#17aa8c]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white text-center leading-tight mb-4 tracking-tight">
                                    Digital Performance <br /> Blueprint
                                </h3>
                                <div className="w-8 h-[2px] bg-[#17aa8c] rounded-full mb-6" />
                                <p className="text-[9px] uppercase tracking-widest text-white/40 text-center mb-1 font-medium">Prepared For</p>
                                <p className="text-sm text-white/80 font-medium text-center tracking-wide">Your Business</p>
                            </motion.div>
                        </motion.div>

                        {/* Report Inside Pages */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scene >= 4 ? 1 : 0 }}
                            transition={{ duration: 0.1, delay: scene >= 4 ? 0.3 : 0 }}
                            className="absolute inset-0 bg-[#0a0a0a] rounded-r-2xl rounded-l-md border border-white/10 shadow-xl overflow-hidden p-6 flex flex-col z-10"
                        >
                            <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                                <div className="text-[8px] text-white/40 font-mono tracking-widest uppercase">Executive Summary</div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                </div>
                            </div>
                            
                            {/* Score Cards */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={scene >= 4 ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.5, ...smoothTransition }}
                                    className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#17aa8c]/50 to-transparent" />
                                    <span className="text-xl text-white font-medium mb-1">98<span className="text-[10px] text-white/40">/100</span></span>
                                    <span className="text-[8px] text-white/40 tracking-widest uppercase">Health Score</span>
                                </motion.div>
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={scene >= 4 ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.6, ...smoothTransition }}
                                    className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#17aa8c]/50 to-transparent" />
                                    <span className="text-xl text-[#17aa8c] font-medium mb-1">A+</span>
                                    <span className="text-[8px] text-white/40 tracking-widest uppercase">SEO Rating</span>
                                </motion.div>
                            </div>

                            {/* Beautiful Chart */}
                            <motion.div 
                                initial={{ y: 10, opacity: 0 }}
                                animate={scene >= 4 ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.7, ...smoothTransition }}
                                className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 relative overflow-hidden flex flex-col mb-4"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[9px] text-white/60 tracking-widest uppercase">Traffic Growth</span>
                                    <TrendingUp className="w-3 h-3 text-[#17aa8c]" />
                                </div>
                                <div className="flex-1 w-full relative mt-1">
                                    {/* Grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between">
                                        {[...Array(4)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/5" />)}
                                    </div>
                                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible absolute inset-0 z-10" preserveAspectRatio="none">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={scene >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                                            d="M 0 35 C 20 30, 40 35, 60 15 S 80 10, 100 5"
                                            fill="none"
                                            stroke="#17aa8c"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <motion.path
                                            initial={{ opacity: 0 }}
                                            animate={scene >= 4 ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 1, delay: 1.8 }}
                                            d="M 0 35 C 20 30, 40 35, 60 15 S 80 10, 100 5 L 100 40 L 0 40 Z"
                                            fill="url(#premiumGrad)"
                                            stroke="none"
                                        />
                                        <defs>
                                            <linearGradient id="premiumGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#17aa8c" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#17aa8c" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Faux text lines */}
                            <div className="flex flex-col gap-2">
                                <motion.div initial={{ width: "0%" }} animate={scene >= 4 ? { width: "100%" } : {}} transition={{ delay: 1.2, duration: 0.8 }} className="h-1.5 bg-white/10 rounded-full" />
                                <motion.div initial={{ width: "0%" }} animate={scene >= 4 ? { width: "80%" } : {}} transition={{ delay: 1.3, duration: 0.8 }} className="h-1.5 bg-white/10 rounded-full" />
                                <motion.div initial={{ width: "0%" }} animate={scene >= 4 ? { width: "60%" } : {}} transition={{ delay: 1.4, duration: 0.8 }} className="h-1.5 bg-white/10 rounded-full" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- SCENE 5: Floating Labels Around Report --- */}
            <AnimatePresence>
                {scene === 5 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                        {[
                            { label: "Website Performance", x: -260, y: -110 },
                            { label: "SEO Visibility", x: 260, y: -90 },
                            { label: "Google Business", x: -280, y: 0 },
                            { label: "Lead Generation", x: 280, y: 20 },
                            { label: "Competitor Snapshot", x: -250, y: 110 },
                            { label: "Growth Opportunities", x: 250, y: 130 },
                        ].map((item, i) => (
                            <motion.div
                                key={`label-${i}`}
                                initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                                animate={{
                                    opacity: 1,
                                    x: item.x,
                                    y: [item.y - 3, item.y + 3, item.y - 3], // Parallax float
                                    scale: 1
                                }}
                                exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                                transition={{ 
                                    opacity: { duration: 0.5, delay: i * 0.1 },
                                    scale: { type: "spring", stiffness: 80, damping: 15, delay: i * 0.1 },
                                    x: { type: "spring", stiffness: 60, damping: 20, delay: i * 0.1 },
                                    y: { duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                                }}
                                className="absolute"
                            >
                                <div className="relative text-[10px] font-medium text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] whitespace-nowrap">
                                    {/* Thin glowing connecting line */}
                                    <motion.div 
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                                        className="absolute top-1/2 -z-10 h-[1px] bg-gradient-to-r from-[#17aa8c]/60 to-transparent origin-left" 
                                        style={{
                                            width: '120px',
                                            left: item.x < 0 ? '100%' : 'auto',
                                            right: item.x > 0 ? '100%' : 'auto',
                                            transform: item.x < 0 ? 'none' : 'rotate(180deg)'
                                        }}
                                    />
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* --- SCENE 6: Final Badge --- */}
            <AnimatePresence>
                {scene === 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className="absolute bottom-[-60px] flex flex-col items-center z-50"
                    >
                        <div className="bg-white/[0.05] border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-xl flex items-center gap-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#17aa8c] shadow-[0_0_8px_rgba(23,170,140,0.8)] animate-pulse" />
                            <span className="text-[11px] font-medium text-white/90 tracking-wide uppercase">Personalized For Your Business <span className="ml-1 opacity-50">↓</span></span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default AuditHeroAnimation;
