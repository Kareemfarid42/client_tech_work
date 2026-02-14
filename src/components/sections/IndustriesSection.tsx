import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Landmark,
  Banknote,
  HeartPulse,
  ShoppingBag,
  RadioTower,
  Zap,
  Plane,
  ShoppingCart,
  Rocket,
  Gamepad2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Supporting government and public organizations with secure, scalable, and compliant digital systems that improve service delivery and operational efficiency.",
  },
  {
    icon: Banknote,
    title: "Banking & Fintech",
    description: "Enabling financial institutions and fintechs with robust digital foundations, intelligent automation, and systems built for security, compliance, and scale.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description: "Designing digital solutions that enhance patient experiences, streamline operations, and support data-driven decision-making within regulated environments.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Consumer Goods",
    description: "Helping retailers and CPG brands modernize systems, connect data, and improve customer engagement across digital and physical channels.",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    description: "Supporting telecom providers with scalable platforms, system integration, and optimization to improve performance and customer experience.",
  },
  {
    icon: Zap,
    title: "Energy, Oil & Utilities",
    description: "Delivering resilient digital systems and data-driven solutions that support complex operations, compliance, and long-term sustainability.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Enhancing digital experiences and operational platforms to improve customer journeys, efficiency, and service reliability.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Building and optimizing digital platforms that support growth, performance, and seamless customer experiences.",
  },
  {
    icon: Rocket,
    title: "Startups & Growth-Stage",
    description: "Partnering with startups to establish strong digital foundations, accelerate execution, and scale responsibly.",
  },
  {
    icon: Gamepad2,
    title: "Media, Gaming & Digital Entertainment",
    description: "Supporting digital-first businesses with scalable platforms, engaging user experiences, and performance-focused systems.",
  },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="industries" className="py-20 lg:py-32 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-wider text-primary mb-3">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Discover Our Impact Across Industries
          </h2>
          <p className="text-muted-foreground text-lg">
            ClienTech Solutions partners with organizations across industries to design, build, and transform digital capabilities adapting our approach to each sector’s unique challenges, regulations, and opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-secondary/10 hover:bg-secondary hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground group-hover:text-white mb-3 transition-colors duration-300">{industry.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed mb-4 transition-colors duration-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/10"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">Do they understand my industry?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">We adapt our proven digital transformation frameworks to your specific sector requirements.</p>
          <Button variant="default" size="lg" className="gap-2">
            Talk to an Industry Expert
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
