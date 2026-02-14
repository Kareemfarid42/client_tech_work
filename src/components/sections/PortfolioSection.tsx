import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const items = [
  { type: "Case Study", title: "US Fashion Resale Platform Scales to 100K Monthly Transactions", color: "from-rose-500/20 to-orange-500/20" },
  { type: "Blogs", title: "Custom Web Application Development: Everything You Need to Know", color: "from-blue-500/20 to-cyan-500/20" },
  { type: "Case Study", title: "Hospitality AI Platform Reconciles $300M+ in OTA Commissions", color: "from-emerald-500/20 to-teal-500/20" },
  { type: "Blogs", title: "How Cloud Computing Can Transform Small Businesses", color: "from-violet-500/20 to-purple-500/20" },
  { type: "Blogs", title: "Trends of Mobile Design: What's Next for Your Business?", color: "from-amber-500/20 to-yellow-500/20" },
  { type: "Case Study", title: "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth", color: "from-pink-500/20 to-rose-500/20" },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="text-sm uppercase tracking-wider text-primary mb-3">Featured Insights</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Stories of our transformations across Services and Industries
            </h2>
            <p className="text-muted-foreground mb-6">From Concept to Completion</p>
            <Button variant="hero" className="gap-2">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 card-hover cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/5 transition-colors" />
                  <span className="text-xs font-medium bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-card-foreground absolute top-4 left-4 z-10">
                    {item.type}
                  </span>
                  {/* Placeholder for actual image */}
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {item.type === "Case Study" ? "📊" : "📝"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
