import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wrench,
  Store,
  Building2,
  ShoppingCart,
  Plane,
  Briefcase,
  HeartPulse,
  Utensils
} from "lucide-react";

const industriesList = [
  { name: "Home Services", icon: Wrench, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Franchises", icon: Store, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Real Estate", icon: Building2, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Ecommerce", icon: ShoppingCart, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Travel", icon: Plane, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Professional Services", icon: Briefcase, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Healthcare", icon: HeartPulse, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
  { name: "Restaurants", icon: Utensils, color: "bg-[#17AA8C] border border-[#17AA8C]", iconColor: "text-white" },
];

export const SeoIndustriesWeServe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-[#17AA8C] mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Business isn't one size fits all. Every industry requires a custom solution.<br />
            Learn more about how we've helped businesses in your industry by clicking below.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-5">
          {industriesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Colored Square Card */}
              <div className={`w-full aspect-square ${item.color} rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]`}>
                <item.icon className={`w-10 h-10 md:w-12 md:h-12 ${item.iconColor}`} strokeWidth={1.5} />
              </div>
              {/* Industry Name */}
              <h3 className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center group-hover:text-white transition-colors">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
