import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroGraphic from "@/assets/hero-graphic.png";
import { ArrowRight, MessageSquare } from "lucide-react";

const credibilityItems = [
  "Built for scale. Designed for impact.",
  "Strategy-led. Execution-focused.",
  "From foundations to transformation.",
  "Clean. Confident. Works globally.",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden pt-24 lg:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95" />

      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-secondary-foreground leading-tight">
                Transforming Challenges Into <span className="text-gradient">Intelligent Digital Solutions</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-secondary-foreground/80 font-normal max-w-4xl">
                Digital foundations, smart solutions, and transformation—designed to help organizations move forward with clarity and confidence.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              ClienTech Solutions partners with organizations to build resilient digital foundations, implement scalable solutions, and drive meaningful transformation. We solve for today’s challenges while illuminating the path forward—through strategy-led execution and technology that delivers real outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="hero" size="xl" className="group">
                Get a Proposal
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5">
                <MessageSquare className="mr-2 w-4 h-4" />
                Speak with an Expert
              </Button>
            </div>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={heroGraphic}
                alt="Digital Transformation Visualization"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-secondary-foreground/10"
                loading="lazy"
              />
              {/* Overlay Card */}
              <div className="absolute top-8 -right-4 bg-card/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-border/50 max-w-[200px]">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">ClienTech</span>
                <p className="text-sm font-bold text-card-foreground leading-tight mb-2">Digital Impact</p>
                <div className="h-1 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">Measurable Outcomes</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-12 mt-8 border-t border-secondary-foreground/10"
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
