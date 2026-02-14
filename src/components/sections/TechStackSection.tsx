import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const TechStackSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-background border-t border-border/50">
            <div className="container-max section-padding text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                        Technology Ecosystem Experience
                    </h2>
                    <p className="text-muted-foreground">
                        ClienTech Solutions brings hands-on experience across leading enterprise and cloud technology platforms. Our teams design, implement, and optimize solutions within these ecosystems to meet diverse business and industry requirements.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
                >
                    {/* Microsoft */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-2xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">Microsoft</span>
                    </div>

                    {/* Salesforce */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-2xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">Salesforce</span>
                    </div>

                    {/* Shopify */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-2xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">Shopify</span>
                    </div>

                    {/* AWS */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-2xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">AWS</span>
                    </div>

                    {/* Google Cloud */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">Google Cloud</span>
                    </div>

                    {/* Azure */}
                    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <span className="text-2xl font-bold text-foreground/70 group-hover:text-foreground transition-colors">Azure</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-border/30"
                >
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider max-w-2xl mx-auto">
                        Platform logos represent technology experience and implementation expertise. ClienTech Solutions is not an official partner unless explicitly stated.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
