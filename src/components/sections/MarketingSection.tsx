import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const progressStack = [
  { label: "Digital Visibility", color: "bg-primary/20" },
  { label: "User & System Engagement", color: "bg-primary/40" },
  { label: "Qualified Demand", color: "bg-primary/60" },
  { label: "Operational Enablement", color: "bg-primary/80" },
  { label: "Outcome-Driven Optimization", color: "bg-primary" },
];

export const MarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Move From Digital Effort to <span className="text-primary">Digital Impact</span>
          </h2>
          <p className="text-xl text-foreground font-medium mb-6">
            We help organizations move beyond fragmented initiatives by aligning strategy, technology, and execution—turning digital investments into outcomes that matter.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Too many organizations invest in technology without a clear path to value. ClienTech Solutions replaces disconnected systems and siloed decision-making with integrated digital foundations, intelligent solutions, and continuous optimization—so progress is measurable, scalable, and sustainable.
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
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Traditional Digital Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Disconnected tools, siloed teams, and fragmented data often result in initiatives that look active but lack clarity, alignment, and measurable impact—leading to decisions driven by assumptions rather than outcomes.
              </p>
            </div>

            <div className="p-8 rounded-xl border-l-4 border-primary bg-primary/5 shadow-sm">
              <h3 className="font-display font-bold text-xl text-primary mb-3">Integrated, Outcome-Driven Transformation</h3>
              <p className="text-foreground leading-relaxed">
                ClienTech aligns strategy, technology, and execution through connected digital foundations—enabling organizations to optimize continuously, reduce inefficiencies, and make informed decisions backed by real-world performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
