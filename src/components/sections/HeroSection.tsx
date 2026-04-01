import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DigitalEngineAnimation } from "./DigitalEngineAnimation";

const credibilityItems = [
  "Built for scale. Designed for impact.",
  "Strategy-led. Execution-focused.",
  "From foundations to transformation.",
  "Clean. Confident. Works globally.",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary w-full overflow-x-hidden pt-24 lg:pt-32 pb-32 md:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95" />

      {/* Subtle radial glow in the right half */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1DD1A1 0%, transparent 70%)" }} />

      <div className="relative container-max section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between w-full max-w-7xl mx-auto px-4 min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 w-full lg:w-1/2 pt-10 pb-5"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-secondary-foreground leading-tight">
                Build Smarter Systems. <span className="text-gradient">Automate Growth.</span> <br className="hidden sm:block" />Scale Your Digital Business.
              </h1>

              <h2 className="text-xl sm:text-2xl font-subheading font-medium text-secondary-foreground/80 max-w-4xl leading-relaxed">
                We design automation, AI systems, and digital infrastructure that help modern businesses scale faster and operate smarter.
              </h2>
            </div>

            <div className="pt-6 relative z-20">
              <Button variant="hero" size="xl" className="group w-full sm:w-max">
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right — Digital Engine Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center mt-4 lg:mt-0 h-[350px] sm:h-[400px] md:h-auto md:min-h-[500px] w-full lg:w-1/2"
          >
            {/* The Protective Scaling Wrapper */}
            <div className="absolute md:relative flex justify-center items-center transform scale-[0.65] sm:scale-[0.85] md:scale-100 origin-center w-full z-10">
              <DigitalEngineAnimation />
            </div>
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="py-12 mt-4 lg:mt-0 border-t border-secondary-foreground/10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {credibilityItems.map((item, index) => (
              <div key={index} className="text-center lg:text-left flex items-start lg:items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 lg:mt-0 shrink-0" />
                <p className="text-sm font-medium text-secondary-foreground/80 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
