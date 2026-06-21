import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const progressStack = [
  { label: "Visibility & Awareness", color: "bg-primary/20" },
  { label: "Traffic & Engagement", color: "bg-primary/40" },
  { label: "Qualified Leads", color: "bg-primary/60" },
  { label: "Customer Conversion", color: "bg-primary/80" },
  { label: "Scalable Growth", color: "bg-primary" },
];

export const MarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            From Visibility to <span className="text-primary">Revenue</span>
          </h2>
          <p className="text-xl text-foreground font-medium mb-6">
            We help businesses turn traffic, leads, and customer interactions into measurable growth through integrated marketing and automation systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Progress Stack Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="flex flex-col items-center gap-3">
              {progressStack.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`${step.color} rounded-full px-6 py-4 text-sm font-medium text-foreground shadow-sm text-center w-full`}
                  style={{ maxWidth: `${100 - index * 5}%` }}
                >
                  {step.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Panels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Fragmented Marketing Efforts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Many businesses rely on disconnected tactics—websites, SEO, ads, and content that operate independently. The result is inconsistent lead flow, unclear performance, wasted budget, and missed growth opportunities.
              </p>
            </div>

            <div className="p-8 rounded-xl border-l-4 border-primary bg-primary/5 shadow-sm">
              <h3 className="font-display font-bold text-xl text-primary mb-3">Integrated Growth Systems</h3>
              <p className="text-foreground leading-relaxed">
                ClienTech combines websites, SEO, advertising, lead generation, and automation into a unified growth system designed to attract customers, increase conversions, and support long-term business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
