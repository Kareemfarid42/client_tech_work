import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Shield, Settings, Cpu, TrendingUp, RefreshCcw } from "lucide-react";

const standards = [
    {
        title: "Quality & Delivery Excellence",
        description: "Aligned with ISO 9001:2015 quality management principles to ensure consistent, reliable delivery across engagements.",
        icon: CheckCircle2
    },
    {
        title: "Security & Compliance Practices",
        description: "Security-by-design approach with practices aligned to global data protection and compliance standards.",
        icon: Shield
    },
    {
        title: "Enterprise Systems Expertise",
        description: "Proven experience delivering and integrating enterprise-grade platforms across complex environments.",
        icon: Settings
    },
    {
        title: "AI & Digital Engineering Capability",
        description: "Applied experience in AI, data, and intelligent systems to support automation and informed decision-making.",
        icon: Cpu
    },
    {
        title: "Scalable Delivery Model",
        description: "Flexible delivery frameworks designed to support startups, growing organizations, and enterprises alike.",
        icon: TrendingUp
    },
    {
        title: "Continuous Improvement Framework",
        description: "Ongoing optimization, governance, and performance review embedded into every engagement.",
        icon: RefreshCcw
    },
];

export const StandardsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-secondary/50">
            <div className="container-max section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground">
                        Standards, Expertise & Recognition
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standards.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="bg-card rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-card-foreground mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
