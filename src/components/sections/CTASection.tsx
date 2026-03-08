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
        {/* First CTA removed (moved to Services section) */}

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
