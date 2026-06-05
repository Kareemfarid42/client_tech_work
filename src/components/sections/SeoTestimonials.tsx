import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    category: "Home Services / Local SEO",
    quote: "Within a few months, we started showing up in Google Maps for searches that actually mattered. The increase in calls and quote requests was noticeable almost immediately. Local SEO became one of our best lead sources.",
    name: "Michael Anderson",
    role: "HVAC Company Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Franchise / Multi-Location SEO",
    quote: "Managing visibility across multiple locations was becoming a challenge. Their team helped standardize everything from our Google Business Profiles to local rankings, making it much easier for customers to find us.",
    name: "Jennifer Roberts",
    role: "Franchise Operations Manager",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Real Estate / Content Marketing",
    quote: "The content strategy completely changed our online presence. We went from relying almost entirely on referrals to generating a steady flow of organic traffic and qualified inquiries every month.",
    name: "David Thompson",
    role: "Real Estate Broker",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Google Ads",
    quote: "We had tried Google Ads before with mixed results. After restructuring our campaigns and landing pages, lead quality improved significantly and our cost per lead dropped.",
    name: "Chris Martinez",
    role: "Roofing Company Owner",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Google Business Profile & Reviews",
    quote: "Their review and reputation strategy helped us build trust online. We saw a substantial increase in reviews, profile views, and phone calls directly from our Google Business Profile.",
    name: "Sarah Collins",
    role: "Dental Practice Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "AI Search Visibility",
    quote: "What impressed us most was their focus on AI search visibility. As search behavior evolves, they've helped position our business to stay visible not just on Google, but across emerging AI-driven platforms as well.",
    name: "Robert Hughes",
    role: "Managing Partner",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    category: "Ecommerce / SEO",
    quote: "Organic traffic became one of our strongest acquisition channels. The combination of technical SEO, content optimization, and authority building helped us reach customers we weren't capturing before.",
    name: "Amanda Lee",
    role: "Ecommerce Brand Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  }
];

export const SeoTestimonials = () => {
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              className="relative group pt-4 pb-16"
            >
              {/* Main Card Box */}
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-500 
                            group-hover:-translate-y-2 group-hover:border-[#17AA8C]/50 
                            group-hover:bg-[#17AA8C]/5 group-hover:shadow-[0_20px_40px_-15px_rgba(23,170,140,0.2)] 
                            flex flex-col h-full min-h-[350px]">
                
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[#17AA8C] text-[10px] font-bold uppercase tracking-widest bg-[#17AA8C]/10 px-3 py-1 rounded-full border border-[#17AA8C]/20">{item.category}</span>
                  <Quote className="w-6 h-6 text-neutral-800 group-hover:text-[#17AA8C] transition-colors shrink-0" />
                </div>
                
                <p className="text-gray-400 relative z-10 text-sm leading-relaxed mb-12">
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

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
