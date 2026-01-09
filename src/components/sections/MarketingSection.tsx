import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const funnel = [
  { label: "Brand Visibility", color: "bg-primary/20" },
  { label: "Website Traffic", color: "bg-primary/40" },
  { label: "Qualified Leads", color: "bg-primary/60" },
  { label: "Sales", color: "bg-primary/80" },
  { label: "Revenue-Backed Optimization", color: "bg-primary" },
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
            Move From Marketing that Reports Clicks to{" "}
            <span className="text-primary">Marketing that Reports Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We replace siloed metrics with connected insights and ongoing optimization that leads to 
            1.8X faster lead growth than industry average (source: Deloitte 2025 CMO Survey).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Funnel Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="flex flex-col items-center gap-3">
              {funnel.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`${step.color} rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-sm`}
                  style={{ width: `${280 - index * 20}px` }}
                >
                  {step.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-3">Traditional Digital Marketing</h3>
              <p className="text-muted-foreground">
                Siloed marketing and sales data leads to a broken, inefficient funnel that leads to decisions 
                based on feel rather than true ROI.
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-primary/5">
              <h3 className="font-display font-bold text-lg text-primary mb-3">Revenue Marketing</h3>
              <p className="text-foreground">
                WebFX connects your data through RevenueCloudFX to make revenue-backed marketing decisions 
                that reduce cost per lead and maximize ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
