import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroGraphic from "@/assets/hero-graphic.png";

const stats = [
  { value: "180M+", label: "Leads Driven For Clients", sublabel: "Acquired at a 15% Lower CPL" },
  { value: "94K", label: "Client Brand Mentions In AI", sublabel: "Tracked via FX Exclusive Technology" },
  { value: "#1", label: "Rated Agency on Clutch & G2", sublabel: "Verified with 500+ 5-Star Reviews" },
  { value: "30", label: "Years of Proven Results", sublabel: "Driving Measurable ROI for Clients" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden pt-20 lg:pt-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95" />
      
      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight">
              Your Revenue Growth{" "}
              <span className="text-gradient">Partner in the AI Era</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Grow qualified leads by 15% or more within your first 6 months with WebFX's expert team, 
              proprietary platform, and proven strategies built around brand visibility and revenue-focused decision making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Input 
                type="url" 
                placeholder="Enter your website"
                className="h-12 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" size="xl">
                Get My Free Proposal
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm font-semibold text-primary mb-2">15% Higher Lead Growth</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-secondary-foreground">Make Smarter Marketing Decisions</span>
                <br />
                Optimize investments with easy-to-read dashboards backed by expert consulting.
              </p>
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
                alt="Revenue Engine Analytics" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <span className="text-xs text-muted-foreground">WebFX</span>
                <p className="text-sm font-bold text-card-foreground">Revenue Engine</p>
                <p className="text-xs text-primary">15% Higher Lead Growth</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-12 mt-8 border-t border-secondary-foreground/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-display font-bold text-secondary-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-secondary-foreground/90 mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
