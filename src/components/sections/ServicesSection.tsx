import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Rocket,
  Palette,
  Server,
  Cloud,
  LayoutTemplate,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Target,
  Zap,
} from "lucide-react";
import { ContactModal } from "@/components/contact/ContactModal";

const primaryServices = [
  {
    icon: Server,
    title: "Digital Foundations",
    description: "Build secure, scalable, and future-ready digital infrastructure that enables growth, resilience, and long-term performance.",
  },
  {
    icon: Palette,
    title: "Digital Solutions Engineering",
    description: "Design and develop tailored digital solutions that solve real business challenges and integrate seamlessly with existing systems.",
  },
  {
    icon: Brain,
    title: "AI, Data & Intelligent Systems",
    description: "Apply AI and data-driven intelligence to enhance decision-making, automate processes, and unlock smarter ways of working.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation & Advisory",
    description: "Align strategy, technology, and execution to drive meaningful transformation with measurable, sustainable outcomes.",
  },
];

const supportingServices = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Services",
    description: "Enable cloud readiness, modernization, and performance optimization across enterprise environments.",
  },
  {
    icon: LayoutTemplate,
    title: "Enterprise Systems & Platforms",
    description: "Implement and optimize enterprise platforms to improve visibility, efficiency, and operational control.",
  },
  {
    icon: Palette,
    title: "UX, Product & Experience Design",
    description: "Create intuitive, user-centered digital experiences that balance usability, performance, and business goals.",
  },
  {
    icon: Zap,
    title: "Integration & Automation",
    description: "Connect systems, data, and workflows to eliminate silos and improve operational efficiency.",
  },
  {
    icon: Target,
    title: "Security, Compliance & Reliability",
    description: "Design and maintain systems with security, compliance, and resilience built in from the ground up.",
  },
  {
    icon: Briefcase,
    title: "Staff Augmentation & Managed Teams",
    description: "Scale your delivery capacity with skilled professionals aligned to your technology stack and business objectives.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? supportingServices : supportingServices.slice(0, 6);

  return (
    <section ref={ref} id="services" className="py-20 md:py-24 bg-secondary relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #17aa8c 0%, transparent 70%)" }} />
 
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
            <ContactModal key={service.title} defaultService={service.title}>
              <motion.div
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
            </ContactModal>
          ))}
        </div>

        {/* Supporting Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-subheading font-semibold text-secondary-foreground mb-8 text-center sm:text-left">Supporting Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <AnimatePresence initial={false}>
              {visibleServices.map((service, index) => (
                <ContactModal key={service.title} defaultService={service.title}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{ duration: 0.35, delay: index >= 6 ? 0 : 0.3 + index * 0.05 }}
                    className="flex h-full gap-4 p-5 rounded-xl bg-background border border-border/60 hover:border-primary/50 transition-colors group cursor-pointer"
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
                </ContactModal>
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
                  $20M+
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
                <ContactModal defaultService="General Inquiry">
                  <button
                    type="button"
                    className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 whitespace-nowrap"
                  >
                    Kick off your project
                  </button>
                </ContactModal>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
