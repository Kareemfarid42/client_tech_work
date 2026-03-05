import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Operational excellence and digital transformation for business services.",
    color: "#1E3A8A",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Modernizing property management and digital real estate platforms.",
    color: "#334155",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description: "Scaling service-based businesses with automated workflows.",
    color: "#F97316",
  },
  {
    icon: Hammer,
    title: "Home Improvement",
    description: "Digital foundations for construction and remodeling ventures.",
    color: "#92400E",
  },
  {
    icon: Store,
    title: "Franchises",
    description: "Multi-location management and unified digital ecosystems.",
    color: "#DC2626",
    link: "https://cleansy-nine.vercel.app/",
    externalLink: true,
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient-centric digital solutions and secure health data systems.",
    color: "#10B981",
  },
  {
    icon: Palmtree,
    title: "Tourism & Hospitality",
    description: "Engaging guest experiences and streamlined booking platforms.",
    color: "#0EA5E9",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Operational platforms for complex development projects.",
    color: "#EA580C",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "High-performance digital storefronts and growth strategies.",
    color: "#FF9900",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Establishing digital foundations to scale responsibly.",
    color: "#F43F5E",
  },
  {
    icon: Cloud,
    title: "SaaS",
    description: "Enabling software-as-a-service platforms with robust foundations.",
    color: "#4F46E5",
  },
  {
    icon: Banknote,
    title: "Fintech",
    description: "Secure, automated, and scalable financial ecosystems.",
    color: "#064E3B",
  },
  {
    icon: Gamepad2,
    title: "Media & Gaming",
    description: "Scalable platforms for high-engagement digital experiences.",
    color: "#8B5CF6",
  },
];

const CARDS_PER_VIEW_DESKTOP = 3;
const CARDS_PER_VIEW_MOBILE = 1;
const AUTO_PLAY_INTERVAL = 3000;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
  }),
};

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardsPerView = isMobile ? CARDS_PER_VIEW_MOBILE : CARDS_PER_VIEW_DESKTOP;
  const totalSlides = industries.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Get visible cards (wrap around)
  const getVisibleCards = () => {
    return Array.from({ length: cardsPerView }, (_, i) => {
      const idx = (currentIndex + i) % totalSlides;
      return { ...industries[idx], originalIndex: idx };
    });
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      ref={ref}
      id="industries"
      className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-background overflow-hidden relative"
    >
      <div className="container-max section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-black">
            Who We Serve
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
            Impact Across Strategic Industries
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Track */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 30 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.3 },
                }}
                className={`grid gap-6 ${cardsPerView === 1
                  ? "grid-cols-1 max-w-[320px] mx-auto"
                  : "grid-cols-3 max-w-[1000px] mx-auto"
                  }`}
              >
                {visibleCards.map((item, i) => (
                  <IndustryCard key={`${item.originalIndex}-${i}`} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === currentIndex
                ? "w-8 h-3 bg-primary"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- INDUSTRY CARD --- */
const IndustryCard = ({ item }: { item: any }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] bg-white transition-transform duration-300 hover:-translate-y-2 ${item.link ? "cursor-pointer" : ""
        }`}
      style={{ height: "420px" }}
      onClick={() => {
        if (!item.link) return;
        if (item.externalLink) {
          window.open(item.link, "_blank", "noopener noreferrer");
        } else {
          navigate(item.link);
        }
      }}
    >
      {/* Colored Top Section */}
      <div
        className="h-[45%] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: item.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
        <item.icon className="w-20 h-20 text-white/30 relative z-10 transition-transform duration-500 group-hover:scale-110" />
      </div>

      {/* White Bottom Section */}
      <div className="h-[55%] bg-white p-6 flex flex-col justify-center items-center text-center">
        <h4 className="font-display font-bold text-lg text-foreground mb-3 transition-colors">
          {item.title}
        </h4>
        <p className="text-[11px] text-gray-500 font-medium leading-relaxed uppercase tracking-tighter">
          {item.description}
        </p>
      </div>
    </div>
  );
};
