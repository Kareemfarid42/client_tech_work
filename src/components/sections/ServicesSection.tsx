import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Rocket,
  Palette,
  Network,
  Server,
  Globe,
  LayoutTemplate,
  TrendingUp,
  Briefcase,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const primaryServices = [
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Build secure, scalable digital infrastructure that enables long-term growth.",
  },
  {
    icon: Palette,
    title: "Digital Marketing",
    description: "Design tailored digital solutions that solve real business challenges.",
  },
  {
    icon: Brain,
    title: "Marketing Automations",
    description: "Apply data-driven AI to automate processes and unlock smarter workflows.",
  },
  {
    icon: Network,
    title: "Product Marketing",
    description: "Align strategy and technology to drive sustainable, measurable outcomes.",
  },
];

const supportingServices = [
  {
    icon: Server,
    title: "Digital Foundations and GTM",
    description: "Establish strong technical foundations combined with effective go-to-market strategies for sustainable growth.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modernize your online presence with a high-performance, conversion-focused website built for today's digital landscape.",
  },
  {
    icon: LayoutTemplate,
    title: "Dedicated Landing Pages",
    description: "Design and deploy targeted landing pages optimized for lead generation, campaigns, and measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Sales Funnels",
    description: "Build end-to-end sales funnels that guide prospects through every stage of the buyer journey with precision.",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Identify growth opportunities, forge strategic partnerships, and execute plans that expand your market presence.",
  },
  {
    icon: Database,
    title: "CRM Solutions",
    description: "Implement and optimize CRM platforms to centralize customer data, improve pipeline visibility, and drive retention.",
  },
  {
    icon: Network,
    title: "Integration & Automation",
    description: "Connect systems, data, and workflows to eliminate silos and boost operational efficiency across your organization.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? supportingServices : supportingServices.slice(0, 6);

  return (
    <section ref={ref} id="services" className="py-20 md:py-24 bg-secondary">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mb-3">
            What We Do
          </h2>
          <p className="text-sm font-subheading uppercase tracking-wider text-primary font-semibold">Transform Your Business</p>
        </motion.div>
        {/* Primary Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden card-hover cursor-pointer h-full border border-border/50"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <service.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-5 xl:p-6">
                <h3 className="font-subheading font-bold text-lg xl:text-xl text-card-foreground mb-3 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">{service.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-subheading font-semibold text-secondary-foreground mb-8 text-center sm:text-left">Supporting Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <AnimatePresence initial={false}>
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{ duration: 0.35, delay: index >= 6 ? 0 : 0.3 + index * 0.05 }}
                  className="flex gap-4 p-5 rounded-xl bg-background border border-border/60 hover:border-primary/50 transition-colors group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="heroDark"
            size="lg"
            className="gap-2"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Capabilities
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </motion.div>

        {/* ── Call to Action Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">

            {/* Left: Circular Stat */}
            <div className="flex justify-center lg:justify-end lg:pr-10 lg:border-r border-gray-100">
              <div className="w-56 h-56 rounded-full border-[6px] border-[#D1F2E6] flex flex-col justify-center items-center text-center p-6 bg-white shrink-0">
                <span className="text-4xl lg:text-5xl font-heading font-black text-primary mb-2 line-clamp-1">
                  $10B
                </span>
                <p className="text-[10px] lg:text-xs font-subheading text-slate-500 uppercase tracking-widest font-semibold leading-relaxed">
                  Revenue Generated for Clients in the Last 5 Years
                </p>
              </div>
            </div>

            {/* Right: Copy & Form */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4 leading-tight">
                Turn Your Digital Presence Into a Revenue Engine
              </h3>
              <p className="text-base lg:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                See how Client Tech connects every click, lead, and sale into one measurable system built to grow your bottom line.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 whitespace-nowrap"
                >
                  Get My Free Proposal
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
