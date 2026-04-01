import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The automation workflows implemented by ClienTech reduced our manual overhead by 40%. Their systems architecture is world-class and built for true enterprise scale.",
    name: "Sarah Johnson",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Scaling our AI infrastructure was seamless. The team doesn't just write code; they build digital foundations that actually support growth and predictable revenue.",
    name: "Marcus Chen",
    role: "CTO, Fintech Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "From lead generation to fulfillment automation, the integration was flawless. We've seen a 3x increase in processing speed since launching our new unified ecosystem.",
    name: "Elena Rodriguez",
    role: "Head of Growth",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-[#050505] overflow-hidden">
      <div className="container-max section-padding">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            What People Say
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            className="h-1 bg-[#2DB298] mx-auto rounded-full shadow-[0_0_10px_rgba(45,178,152,0.5)]"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto px-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group pt-4 pb-16"
            >
              {/* 1. The Main Card Box */}
              <div className="relative p-8 rounded-2xl bg-neutral-900 border border-white/10 transition-all duration-300 
                            group-hover:-translate-y-4 group-hover:scale-105 group-hover:border-[#2DB298] 
                            group-hover:bg-[#2DB298]/5 group-hover:shadow-[0_20px_40px_-15px_rgba(45,178,152,0.3)] 
                            flex flex-col h-full min-h-[280px]">
                
                <Quote className="w-10 h-10 mb-6 text-neutral-700 group-hover:text-[#2DB298] transition-colors shrink-0" />
                
                <p className="text-gray-300 relative z-10 text-sm md:text-base leading-relaxed mb-12">
                  "{item.quote}"
                </p>
                
                {/* 2. The Overlapping Avatar (Absolute positioned to bottom edge) */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                  <div className="relative">
                    <img 
                      src={item.avatar} 
                      alt={item.name}
                      className="w-16 h-16 rounded-full border-4 border-[#050505] object-cover shadow-xl" 
                    />
                    {/* Subtle status ring can be added if needed, sticking to primary request for now */}
                  </div>
                </div>
              </div>

              {/* 3. Name & Title (Positioned below the absolute avatar) */}
              <div className="absolute bottom-0 left-0 w-full text-center transition-transform duration-300 group-hover:-translate-y-4">
                <h4 className="text-white font-bold text-lg tracking-tight">{item.name}</h4>
                <p className="text-[#2DB298]/80 text-xs font-semibold uppercase tracking-widest mt-1.5">{item.role}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

