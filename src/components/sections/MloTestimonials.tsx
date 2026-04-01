import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The lead generation systems implemented by ClienTech changed my business overnight. I went from chasing cold leads to having a calendar full of qualified borrowers.",
    name: "David Miller",
    role: "Senior Loan Officer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Automation is the only way to scale in this industry. Their CRM workflows ensure I never miss a follow-up, saving me at least 15 hours of manual work every week.",
    name: "Jennifer Hayes",
    role: "Branch Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The digital presence they built for my team is world-class. Our referral partners are impressed, and our conversion rate from 'interested' to 'application' has doubled.",
    name: "Robert Wilson",
    role: "Top Producer, Mortgage Lenders",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export const MloTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="py-12 md:py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="container-max section-padding">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4"
          >
            Social Proof
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Top <span className="text-[#17AA8C]">Loan Officers</span>
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-[#17AA8C] mx-auto rounded-full shadow-[0_0_15px_rgba(23,170,140,0.5)]"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto px-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className="relative group pt-4 pb-16"
            >
              {/* Main Card Box */}
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-500 
                            group-hover:-translate-y-4 group-hover:scale-[1.03] group-hover:border-[#17AA8C]/50 
                            group-hover:bg-[#17AA8C]/5 group-hover:shadow-[0_20px_40px_-15px_rgba(23,170,140,0.2)] 
                            flex flex-col h-full min-h-[300px]">
                
                <Quote className="w-10 h-10 mb-8 text-neutral-800 group-hover:text-[#17AA8C] transition-colors shrink-0" />
                
                <p className="text-gray-400 relative z-10 text-base md:text-lg leading-relaxed mb-12 italic">
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
              <div className="absolute bottom-0 left-0 w-full text-center transition-transform duration-500 group-hover:-translate-y-4">
                <h4 className="text-white font-bold text-lg tracking-tight">{item.name}</h4>
                <p className="text-[#17AA8C] text-xs font-bold uppercase tracking-widest mt-2">{item.role}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
