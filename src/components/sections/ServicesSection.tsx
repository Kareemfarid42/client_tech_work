import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Server, Smartphone, Users, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Generative AI",
    description: "Leverage AI to transform your digital presence and automate marketing processes.",
  },
  {
    icon: Server,
    title: "Dynamics 365 ERP",
    description: "Streamline operations with enterprise resource planning solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create stunning mobile experiences that engage and convert users.",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Scale your team with skilled professionals when you need them.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-primary mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">
            Transform Your Business
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden card-hover cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <service.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button variant="heroDark" size="lg" className="gap-2">
            View More Services
            <ChevronDown className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
