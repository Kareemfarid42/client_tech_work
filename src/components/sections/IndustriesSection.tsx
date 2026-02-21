import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  Building2,
  Wrench,
  Hammer,
  Store,
  HeartPulse,
  Palmtree,
  HardHat,
  ShoppingCart,
  Rocket,
  Cloud,
  Banknote,
  Gamepad2,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Send,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Operational excellence and digital transformation for business services.",
    color: "#1E3A8A", // Deep Navy
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Modernizing property management and digital real estate platforms.",
    color: "#334155", // Slate Blue/Grey
  },
  {
    icon: Wrench,
    title: "Home Services",
    description: "Scaling service-based businesses with automated workflows.",
    color: "#F97316", // Orange
  },
  {
    icon: Hammer,
    title: "Home Improvement",
    description: "Digital foundations for construction and remodeling ventures.",
    color: "#92400E", // Earthy Brown
  },
  {
    icon: Store,
    title: "Franchises",
    description: "Multi-location management and unified digital ecosystems.",
    color: "#DC2626", // Bold Red
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient-centric digital solutions and secure health data systems.",
    color: "#10B981", // Medical Green
  },
  {
    icon: Palmtree,
    title: "Tourism & Hospitality",
    description: "Engaging guest experiences and streamlined booking platforms.",
    color: "#0EA5E9", // Sky Blue/Teal
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Operational platforms for complex development projects.",
    color: "#EA580C", // Safety Orange
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "High-performance digital storefronts and growth strategies.",
    color: "#FF9900", // Amazon Orange
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Establishing digital foundations to scale responsibly.",
    color: "#F43F5E", // Vibrant Rose
  },
  {
    icon: Cloud,
    title: "SaaS",
    description: "Enabling software-as-a-service platforms with robust foundations.",
    color: "#4F46E5", // Indigo Blue
  },
  {
    icon: Banknote,
    title: "Fintech",
    description: "Secure, automated, and scalable financial ecosystems.",
    color: "#064E3B", // Financial Deep Green
  },
  {
    icon: Gamepad2,
    title: "Media & Gaming",
    description: "Scalable platforms for high-engagement digital experiences.",
    color: "#8B5CF6", // Gaming Purple
  },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="industries"
      className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-background overflow-hidden relative"
    >
      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-black">
            Who We Serve
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
            Impact Across Strategic Industries
          </h2>
        </motion.div>

        {/* Stacked Card Gallery Container */}
        <div
          className="relative h-[480px] lg:h-[500px] mb-0 max-w-[1400px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setFocusedIndex(null);
          }}
        >
          {/* Mobile Scroll Wrapper */}
          <div className="lg:hidden flex overflow-x-auto gap-6 pb-12 px-6 no-scrollbar snap-x">
            {industries.map((item, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                {/* Reusing the same card structure below but simplified for mobile if needed, or identical */}
                <CardContent item={item} index={index} />
              </div>
            ))}
          </div>

          {/* Desktop Stacked Deck */}
          <div
            className="hidden lg:flex justify-center h-full w-full group perspective-[2500px]"
          >
            {/* Main Floor Shadow */}
            <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-[95%] h-12 bg-black/40 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 ${focusedIndex !== null ? 'opacity-20' : 'opacity-100'}`} />

            {industries.map((item, index) => {
              const total = industries.length;
              const centerIndex = (total - 1) / 2;
              const baseOffset = (index - centerIndex) * 60;
              const hoverSpread = (index - centerIndex) * 110;

              const isFocused = focusedIndex === index;
              const isBlurred = focusedIndex !== null && focusedIndex !== index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, x: baseOffset, y: 100 }}
                  animate={isInView ? {
                    opacity: isFocused ? 1 : (isBlurred ? 0.35 : 1),
                    scale: isFocused ? 1.25 : (isBlurred ? 0.85 : 1),
                    x: isHovered ? hoverSpread : baseOffset,
                    y: isFocused ? -60 : 0,
                    rotateY: isFocused ? 0 : (isHovered ? -5 : -20),
                    rotateX: isFocused ? 0 : (isHovered ? 0 : 10),
                    z: isFocused ? 500 : (index * 10),
                    filter: isBlurred ? "blur(3px)" : "blur(0px)"
                  } : {}}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80,
                    damping: 18
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className="absolute w-[280px] h-[450px] cursor-pointer preserve-3d group/card"
                  style={{ zIndex: isFocused ? 100 : index }}
                >
                  <CardContent item={item} index={index} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- SHARED CARD CONTENT COMPONENT --- */
const CardContent = ({ item, index }: { item: any; index: number }) => (
  <div className="relative h-full w-[280px] h-[450px] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white transition-transform duration-500">
    {item.isProfile ? (
      /* --- PROFILE CARD (LAST CARD) --- */
      <div className="h-full flex flex-col bg-white">
        {/* Purple Top Section */}
        <div className="h-[35%] bg-[#4F46E5] p-6 relative flex items-center justify-between">
          <MoreVertical className="absolute top-4 right-2 text-white/50 w-5 h-5" />
          <div className="flex items-center gap-3 relative z-10 text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mario"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.role}</p>
            </div>
          </div>
        </div>

        {/* White Bottom Section with Details */}
        <div className="h-[65%] p-6 flex flex-col relative text-left">
          {/* Floating Send Button */}
          <div className="absolute -top-5 right-6 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg lg:group-hover/card:scale-110 transition-transform">
            <Send className="w-4 h-4" />
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-xs font-medium truncate">{item.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-xs font-medium">{item.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Linkedin className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-xs font-medium">{item.linkedin}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Twitter className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-xs font-medium">{item.twitter}</span>
            </div>
          </div>

          <div className="mt-auto flex justify-center pb-2">
            <span className="text-5xl font-black text-[#f8f9fa] select-none">
              UX
            </span>
          </div>
        </div>
      </div>
    ) : (
      /* --- INDUSTRY CARD --- */
      <div className="h-full flex flex-col">
        {/* Colored Top Section */}
        <div
          className="h-[45%] flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: item.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
          <item.icon className="w-20 h-20 text-white/30 relative z-10 lg:group-hover/card:scale-110 transition-transform duration-500" />
        </div>

        {/* White Bottom Section */}
        <div className="h-[55%] bg-white p-6 flex flex-col justify-center items-center relative text-center">
          <div className="w-full">
            <h4 className="font-display font-bold text-lg text-foreground mb-4 lg:group-hover/card:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed uppercase tracking-tighter">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);
