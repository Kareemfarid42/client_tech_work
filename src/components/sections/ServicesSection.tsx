import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Server,
  Rocket,
  Code2,
  Cloud,
  Building2,
  Palette,
  Network,
  ShieldCheck,
  Users,
  ChevronDown
} from "lucide-react";

const primaryServices = [
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Build secure, scalable, and future-ready digital infrastructure that enables growth, resilience, and long-term performance.",
  },
  {
    icon: Palette,
    title: "Digital Marketing",
    description: "Design and develop tailored digital solutions that solve real business challenges and integrate seamlessly with existing systems.",
  },
  {
    icon: Brain,
    title: "Marketing Automations",
    description: "Apply AI and data-driven intelligence to enhance decision-making, automate processes, and unlock smarter ways of working.",
  },
  {
    icon: Network,
    title: "Product Marketing",
    description: "Align strategy, technology, and execution to drive meaningful transformation with measurable, sustainable outcomes.",
  },
];

const supportingServices = [
  {
    icon: Server,
    title: "Digital Foundations and GTM",
    description: "Establish strong technical foundations combined with effective go-to-market strategies for sustainable growth.",
  },
  {
    icon: Building2,
    title: "Enterprise Systems & Platforms",
    description: "Implement and optimize enterprise platforms to improve visibility, efficiency, and operational control.",
  },
  {
    icon: Code2,
    title: "UX, Product & Experience Design",
    description: "Create intuitive, user-centered digital experiences that balance usability, performance, and business goals.",
  },
  {
    icon: Network,
    title: "Integration & Automation",
    description: "Connect systems, data, and workflows to eliminate silos and improve operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Security, Compliance & Reliability",
    description: "Design and maintain systems with security, compliance, and resilience built in from the ground up.",
  },
  {
    icon: Users,
    title: "Staff Augmentation & Managed Teams",
    description: "Scale your delivery capacity with skilled professionals aligned to your technology stack and business objectives.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-wider text-primary mb-3">Our Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">
            Transform Your Business
          </h2>
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
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-card-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Services */}
        <div className="mb-12">
          <h3 className="text-xl font-display font-semibold text-secondary-foreground mb-8">Supporting Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="flex gap-4 p-5 rounded-xl bg-background border border-border/60 hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button variant="heroDark" size="lg" className="gap-2">
            View All Capabilities
            <ChevronDown className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
