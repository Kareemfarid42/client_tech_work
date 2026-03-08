import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// ── Timeline data: years + awards ──────────────────────────────────────────────
const timeline = [
    {
        year: "2019",
        color: "#54A0FF",
        awards: [
            "Founded & Launched Digital Consultancy Practice",
            "First Enterprise Client Partnership",
        ],
    },
    {
        year: "2020",
        color: "#1DD1A1",
        awards: [
            "Top Digital Transformation Partner Award",
            "Expanded AI & Automation Service Line",
        ],
    },
    {
        year: "2021",
        color: "#A29BFE",
        awards: [
            "ISO 9001:2015 Quality Alignment Achieved",
            "50+ Successful Project Deliveries",
        ],
    },
    {
        year: "2022",
        color: "#FD9644",
        awards: [
            "Best Digital Strategy Agency — Regional",
            "Google & HubSpot Partner Certification",
        ],
    },
    {
        year: "2023",
        color: "#1DD1A1",
        awards: [
            "Excellence in CRM & Automation Award",
            "100+ Client Milestone Reached",
        ],
    },
    {
        year: "2024",
        color: "#54A0FF",
        awards: [
            "AI Innovation Recognition Award",
            "Top-Rated Agency — 98% Client Satisfaction",
        ],
    },
];

export const StandardsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [activeYear, setActiveYear] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-20 md:py-24 bg-secondary overflow-hidden">
            <div className="container-max section-padding">

                {/* Heading */}
                <motion.div
                    className="mb-14 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-subheading uppercase tracking-widest text-primary font-bold mb-2">
                        Our Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground leading-tight">
                        Awards &amp; Certifications
                    </h2>
                </motion.div>

                {/* Timeline container */}
                <div className="relative">



                    {/* ── Year columns ── */}
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
                        {timeline.map((item, i) => {
                            const isActive = activeYear === i;
                            const isAbove = i % 2 === 0; // alternate cards above/below on desktop

                            return (
                                <motion.div
                                    key={item.year}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                                >
                                    {/* Award card — on desktop alternates above/below the line */}
                                    {/* On mobile: always above the dot */}
                                    <div
                                        className={`w-full mb-4 lg:mb-0 ${isAbove
                                            ? "lg:order-first lg:mb-4"
                                            : "lg:order-last lg:mt-4"
                                            }`}
                                    >
                                        <motion.div
                                            className="rounded-2xl p-4 border text-left cursor-default transition-all duration-300"
                                            style={{
                                                borderColor: isActive ? item.color : "rgba(255,255,255,0.08)",
                                                backgroundColor: isActive
                                                    ? item.color + "15"
                                                    : "rgba(255,255,255,0.03)",
                                                boxShadow: isActive
                                                    ? `0 8px 30px ${item.color}22`
                                                    : "none",
                                            }}
                                            onMouseEnter={() => setActiveYear(i)}
                                            onMouseLeave={() => setActiveYear(null)}
                                            whileHover={{ y: -3 }}
                                        >
                                            <p
                                                className="text-[11px] font-subheading font-black uppercase tracking-wider mb-2"
                                                style={{ color: item.color }}
                                            >
                                                {item.year}
                                            </p>
                                            <ul className="space-y-1.5">
                                                {item.awards.map((award) => (
                                                    <li
                                                        key={award}
                                                        className="text-xs text-secondary-foreground/70 leading-relaxed flex gap-2 items-start"
                                                    >
                                                        <span
                                                            className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full"
                                                            style={{ backgroundColor: item.color }}
                                                        />
                                                        {award}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Year node (dot on the line) */}
                                    <motion.div
                                        className="relative z-10 flex flex-col items-center"
                                        style={{ order: 0 }}
                                    >
                                        <motion.div
                                            className="w-[36px] h-[36px] rounded-full border-2 flex items-center justify-center text-[11px] font-black transition-all duration-300"
                                            style={{
                                                borderColor: isActive ? item.color : "rgba(255,255,255,0.2)",
                                                backgroundColor: isActive ? item.color : "#1b273d",
                                                color: isActive ? "#0d1b2a" : item.color,
                                                boxShadow: isActive ? `0 0 18px ${item.color}66` : "none",
                                            }}
                                            animate={{
                                                scale: isActive ? 1.2 : 1,
                                            }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            {item.year.slice(2)}
                                        </motion.div>
                                    </motion.div>

                                    {/* Spacer card slot (desktop only — keeps alignment for alternating) */}
                                    {/* On desktop odd items have a blank above, even have blank below */}
                                    <div
                                        className={`hidden lg:block w-full ${isAbove ? "lg:order-last" : "lg:order-first"
                                            }`}
                                        style={{ height: "1px" }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom stat strip */}
                <motion.div
                    className="mt-16 pt-10 border-t border-secondary-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {[
                        { value: "6+", label: "Years in Operation" },
                        { value: "120+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "10+", label: "Certifications & Awards" },
                    ].map((s) => (
                        <div key={s.label} className="flex flex-col gap-1 items-center">
                            <span className="text-4xl font-heading font-black text-primary mb-1">{s.value}</span>
                            <span className="text-xs font-subheading text-secondary-foreground/50 uppercase tracking-widest font-semibold">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
