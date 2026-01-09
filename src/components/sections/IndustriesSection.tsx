import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Plane, Building2, Radio, ShoppingCart, Droplet, Rocket, 
  Stethoscope, Gamepad2, CreditCard, ShoppingBag 
} from "lucide-react";

const industries = [
  { icon: Plane, label: "Travel & Hospitality" },
  { icon: Building2, label: "Public Sector" },
  { icon: Radio, label: "Telecommunication" },
  { icon: ShoppingBag, label: "Retail & CPG" },
  { icon: Droplet, label: "Oil, Gas, and Energy" },
  { icon: Rocket, label: "Startups" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: CreditCard, label: "Banking & Fintech" },
  { icon: Stethoscope, label: "Healthcare & Pharmaceuticals" },
  { icon: Gamepad2, label: "Gaming" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Discover our Impact Across <span className="text-primary">Industries</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{industry.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <Button variant="hero" size="lg">Let's Talk Business</Button>
        </motion.div>
      </div>
    </section>
  );
};
