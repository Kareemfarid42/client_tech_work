import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutTemplate,
  Search,
  PenTool,
  Target,
  Share2,
  Zap,
  Bot,
  Brain,
} from "lucide-react";
import { ContactModal } from "@/components/contact/ContactModal";

const servicesList = [
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "Build fast, secure, and conversion-optimized websites that serve as the foundation of your digital presence.",
    link: "/industry/web-development",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "Increase organic visibility, outrank competitors, and drive high-intent traffic to your website consistently.",
    link: "/industry/seo",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engage your audience and build authority with strategic content that educates prospects and drives conversions.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Capture high-intent searchers immediately with targeted campaigns designed to maximize ROI and lead quality.",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    description: "Reach your ideal customers on Facebook and Instagram with highly targeted, creative-driven social campaigns.",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Build predictable pipelines with multi-channel systems designed to attract, qualify, and convert prospects.",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    description: "Streamline your follow-ups and nurture sequences to close more deals with less manual effort.",
  },
  {
    icon: Brain,
    title: "AI Chatbots",
    description: "Provide 24/7 intelligent customer support and lead qualification right on your website with conversational AI.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const cardContent = (
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
                  <h3 className="font-subheading font-bold text-lg xl:text-xl text-card-foreground mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );

            if (service.link) {
              return (
                <Link to={service.link} key={service.title} className="block h-full">
                  {cardContent}
                </Link>
              );
            }

            return (
              <ContactModal key={service.title} defaultService={service.title}>
                {cardContent}
              </ContactModal>
            );
          })}
        </div>

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
