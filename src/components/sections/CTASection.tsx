import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Stats Circle */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full border-8 border-primary/20 flex flex-col items-center justify-center">
                <span className="text-4xl font-display font-bold text-primary">$10B</span>
                <span className="text-xs text-muted-foreground text-center px-4 mt-2">
                  Revenue Generated for Clients in the Last 5 Years
                </span>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground mb-4">
                Turn Your Marketing Into a Revenue Engine
              </h2>
              <p className="text-muted-foreground mb-6">
                See how WebFX connects every click, lead, and sale into one measurable system built to grow your bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="url" 
                  placeholder="Enter your website"
                  className="h-12"
                />
                <Button variant="hero" size="xl" className="whitespace-nowrap">
                  Get My Free Proposal
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Your Revenue Growth Starts Here
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Tell us about your business, and we'll create a custom plan to grow your traffic, leads, and predictable revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input 
              type="url" 
              placeholder="Enter your website"
              className="h-12"
            />
            <Button variant="hero" size="xl">
              Get My Free Proposal
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
