import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    category: "Custom Web Application",
    quote: "The custom web app they built completely streamlined our internal processes. It's incredibly fast, intuitive, and exactly what we needed to scale operations without hiring more administrative staff.",
    name: "James Wilson",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "High-Performance Ecommerce",
    quote: "Our old site was painfully slow and losing us sales. Since launching the new custom ecommerce platform, our page load times dropped by 70% and our conversion rate doubled in the first month.",
    name: "Sarah Jenkins",
    role: "Ecommerce Founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Corporate Website Redesign",
    quote: "They didn't just build a website; they built a digital extension of our brand. The design is stunning, the UX is flawless, and it positions us perfectly as industry leaders.",
    name: "Michael Chang",
    role: "Marketing Executive",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Conversion Optimization",
    quote: "The previous agency built something pretty but it didn't convert. The new site focuses on user journey and clear CTAs. We're seeing 3x more qualified leads coming through the site organically.",
    name: "Elena Rodriguez",
    role: "B2B Sales Manager",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Franchise Platform",
    quote: "Managing 50+ location websites was a nightmare before. The scalable architecture they built allows us to spin up new localized sites in minutes while maintaining perfect brand consistency.",
    name: "Robert Hughes",
    role: "Franchise Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "SaaS Marketing Site",
    quote: "We needed a marketing site that could explain our complex software simply. The interactive elements, flawless animations, and lightning-fast load times make a massive difference in how our product is perceived.",
    name: "Amanda Lee",
    role: "Tech Startup CEO",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  }
];

export const WebDevTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container-max section-padding">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our <span className="text-[#17AA8C]">Clients Say</span>
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-[#17AA8C] mx-auto rounded-full shadow-[0_0_15px_rgba(23,170,140,0.5)]"
          />
        </div>

        {/* Testimonials Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-full mx-auto overflow-hidden group/carousel"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-8 py-4 px-4 md:px-8">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="relative group pt-4 pb-12 w-[280px] md:w-[320px] shrink-0"
              >
                {/* Main Card Box */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-500 
                              group-hover:-translate-y-2 group-hover:border-[#17AA8C]/50 
                              group-hover:bg-[#17AA8C]/5 group-hover:shadow-[0_20px_40px_-15px_rgba(23,170,140,0.2)] 
                              flex flex-col h-full min-h-[300px]">
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[#17AA8C] text-[9px] font-bold uppercase tracking-widest bg-[#17AA8C]/10 px-2 py-1 rounded-full border border-[#17AA8C]/20">{item.category}</span>
                    <Quote className="w-5 h-5 text-neutral-800 group-hover:text-[#17AA8C] transition-colors shrink-0" />
                  </div>
                  
                  <p className="text-gray-400 relative z-10 text-sm leading-relaxed mb-10">
                    "{item.quote}"
                  </p>
                  
                  {/* Overlapping Avatar */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110">
                    <div className="relative">
                      <img 
                        src={item.avatar} 
                        alt={item.name}
                        className="w-16 h-16 rounded-full border-4 border-[#0a0a0a] object-cover shadow-2xl group-hover:border-[#17AA8C]/30 transition-colors" 
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="absolute bottom-0 left-0 w-full text-center transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-white font-bold text-base tracking-tight">{item.name}</h4>
                  <p className="text-gray-500 text-xs font-medium tracking-wide mt-1">{item.role}</p>
                </div>

              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
