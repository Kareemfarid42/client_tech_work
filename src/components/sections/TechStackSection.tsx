import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
    { name: "Microsoft", color: "00A4EF", slug: "microsoft" },
    { name: "Salesforce", color: "00A1E0", slug: "salesforce" },
    { name: "Shopify", color: "95BF47", slug: "shopify" },
    { name: "AWS", color: "232F3E", slug: "amazonaws" },
    { name: "Google Cloud", color: "4285F4", slug: "googlecloud" },
    { name: "Azure", color: "0078D4", slug: "microsoftazure" },
    { name: "Oracle", color: "F80000", slug: "oracle" },
    { name: "Snowflake", color: "29B5E8", slug: "snowflake" },
    { name: "Databricks", color: "FF3621", slug: "databricks" },
    { name: "HubSpot", color: "FF7A59", slug: "hubspot" }
];

// Duplicate the array to create a seamless infinite loop
const duplicatedStack = [...techStack, ...techStack];

export const TechStackSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
            <div className="container-max section-padding text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 leading-tight">
                        Technology Ecosystem Experience
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        ClienTech Solutions brings hands-on experience across leading enterprise and cloud technology platforms. Our teams design, implement, and optimize solutions within these ecosystems to meet diverse business and industry requirements.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden group">
                {/* Subtle gradient masks on the edges for a fading effect */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#f2f4f6] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#f0f2f4] to-transparent z-10 pointer-events-none" />

                {/* Animated Track */}
                <motion.div
                    className="flex gap-6 items-center w-max py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {duplicatedStack.map((tech, i) => (
                        <div
                            key={`${tech.slug}-${i}`}
                            className="group/card flex gap-4 items-center justify-center px-10 py-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 min-w-[240px] cursor-default"
                        >
                            {/* Crisp SVG Logo via CSS Mask */}
                            <div
                                className="w-8 h-8 transition-colors duration-300 bg-slate-400 group-hover/card:!bg-current"
                                style={{
                                    WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${tech.slug}.svg)`,
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    WebkitMaskSize: 'contain',
                                    maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${tech.slug}.svg)`,
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    maskSize: 'contain',
                                    color: `#${tech.color}` // The current color on hover
                                }}
                            />
                            <span className="text-xl font-heading font-bold bg-gradient-to-br from-slate-700 to-slate-400 bg-clip-text text-transparent group-hover/card:from-slate-900 group-hover/card:to-slate-700 transition-colors whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container-max section-padding">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-slate-200/60 text-center"
                >
                    <p className="text-[10px] font-subheading text-slate-500 uppercase tracking-widest max-w-2xl mx-auto font-semibold">
                        Platform logos represent technology experience and implementation expertise. ClienTech Solutions is not an official partner unless explicitly stated.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
