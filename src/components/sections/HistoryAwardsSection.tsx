import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
    { year: "2024", title: "AI Innovation Recognition", subtitle: "98% Client Satisfaction Rating" },
    { year: "2023", title: "Excellence in CRM & Automation", subtitle: "100+ Client Milestone Achieved" },
    { year: "2022", title: "HubSpot & Google Certifications", subtitle: "Best Digital Strategy Implementation" },
    { year: "2021", title: "ISO-aligned Process Framework", subtitle: "50+ Successful Client Projects" },
    { year: "2020", title: "Recognized for Digital Excellence", subtitle: "Expanded AI & Automation Service Line" },
    { year: "2019", title: "Founded Digital Consultancy", subtitle: "First Enterprise Client Partnership" }
];

const HexagonNode = ({ year, isCurrent = false }: { year: string; isCurrent?: boolean }) => {
    return (
        <div className="relative w-20 h-24 md:w-24 md:h-28 flex items-center justify-center bg-[#000000]">
            <svg
                viewBox="0 0 100 115"
                className={cn(
                    "absolute inset-0 w-full h-full",
                    isCurrent ? "drop-shadow-[0_0_12px_rgba(23,156,131,0.8)]" : "drop-shadow-none"
                )}
            >
                <polygon
                    points="50,2.5 97.5,30 97.5,85 50,112.5 2.5,85 2.5,30"
                    fill="#000000"
                    stroke={isCurrent ? "#179C83" : "#1e293b"}
                    strokeWidth="3"
                />
            </svg>
            <span className={cn(
                "relative z-10 font-mono font-bold text-lg md:text-xl",
                isCurrent ? "text-[#179C83]" : "text-white"
            )}>
                {year}
            </span>
        </div>
    );
};

export const HistoryAwardsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-[#000000] relative overflow-hidden">
            <div className="container-max section-padding">

                {/* Header */}
                <div className="text-center mb-24 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        History & Awards
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#179C83] font-mono tracking-widest uppercase text-sm sm:text-base"
                    >
                        The Circuit of Achievement
                    </motion.p>
                </div>

                {/* Timeline Layout */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Central Vertical Line (Data Bus) */}
                    <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] transform md:-translate-x-1/2 z-0">
                        {/* The faded track behind */}
                        <div className="absolute inset-0 bg-slate-800 -z-10 w-full h-full" />
                        {/* The glowing neon line animating down */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full h-full bg-[#179C83] origin-top shadow-[0_0_15px_rgba(23,156,131,0.6)]"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24 relative z-10">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const isCurrent = index === 0;

                            return (
                                <div key={item.year} className="relative flex flex-col md:flex-row items-center group">

                                    {/* Hexagon Node */}
                                    {/* Position: Absolute Left on Mobile. Absolute Center on Desktop. */}
                                    <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 z-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: "-20%" }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + (index * 0.1) }}
                                        >
                                            <HexagonNode year={item.year} isCurrent={isCurrent} />
                                        </motion.div>
                                    </div>

                                    {/* Glass Content Card */}
                                    <div className={`w-full flex pl-24 md:pl-0 md:w-[calc(50%-4rem)] ${isEven ? "md:mr-auto justify-end" : "md:ml-auto justify-start"}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-20%" }}
                                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                            className="relative w-full bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#179C83]/50 transition-colors duration-500 shadow-xl"
                                        >

                                            {/* Trace Line Connector connecting card to center line (Desktop) */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true, margin: "-20%" }}
                                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                                className={cn(
                                                    "absolute top-1/2 h-[2px] bg-[#179C83] shadow-[0_0_8px_rgba(23,156,131,0.5)] z-[-1]",
                                                    "md:w-[4rem]", // width exactly covers gap
                                                    isEven
                                                        ? "hidden md:block right-0 translate-x-full origin-left"
                                                        : "hidden md:block left-0 -translate-x-full origin-right"
                                                )}
                                            />

                                            {/* Trace Line Connector (Mobile) */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true, margin: "-20%" }}
                                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                                className="md:hidden absolute top-12 left-0 w-4 h-[2px] bg-[#179C83] shadow-[0_0_8px_rgba(23,156,131,0.5)] -translate-x-full origin-right z-[-1]"
                                            />

                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-[#179C83] shrink-0" strokeWidth={3} />
                                                <span className="text-sm md:text-base text-gray-400 font-medium">{item.subtitle}</span>
                                            </div>

                                        </motion.div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};
