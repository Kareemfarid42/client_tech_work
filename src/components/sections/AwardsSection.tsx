import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const awardsList = [
  { id: 1, img: "/awards/1.png", alt: "Top Staff Augmentation Company" },
  { id: 2, img: "/awards/2.png", alt: "Top Web Developers Real Estate" },
  { id: 3, img: "/awards/3.png", alt: "Top Web Developers Retail" },
  { id: 4, img: "/awards/4.png", alt: "Top AR/VR Development Company" },
  { id: 5, img: "/awards/5.png", alt: "Top Software Developers Saudi Arabia" },
  { id: 6, img: "/awards/6.png", alt: "Most Reviewed App Development Company" },
  { id: 7, img: "/awards/7.png", alt: "Top Software Developers Gaming" },
  { id: 8, img: "/awards/8.png", alt: "ISO 9001:2015 Certified" },
];

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#000000] py-24 lg:py-36 relative overflow-hidden">
      <div className="container-max px-4 md:px-8 relative">
        
        {/* Centered Heading with Custom Accent #179C83 */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight uppercase"
          >
            Awards & <span style={{ color: '#179C83' }}>Certifications</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            className="h-1 mt-6 mx-auto rounded-full" 
            style={{ 
              backgroundColor: '#179C83',
              boxShadow: '0 0 10px rgba(23, 156, 131, 0.5)' 
            }}
          />
        </div>

        {/* Matrix Grid Architecture */}
        <div className="max-w-7xl mx-auto border-t border-l border-dashed" style={{ borderColor: 'rgba(23, 156, 131, 0.2)' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {awardsList.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className={cn(
                  "relative group flex items-center justify-center p-8 md:p-14 min-h-[220px] md:min-h-[280px]",
                  "border-r border-b border-dashed transition-all duration-700"
                )}
                style={{ 
                  borderColor: 'rgba(23, 156, 131, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(23, 156, 131, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Subtle Radial Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" 
                  style={{ background: 'radial-gradient(circle at center, rgba(23, 156, 131, 0.08) 0%, transparent 70%)' }}
                />
                
                <img 
                  src={award.img} 
                  alt={award.alt} 
                  className="w-full h-auto max-w-[140px] md:max-w-[170px] object-contain transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(23, 156, 131, 0.1))'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(23, 156, 131, 0.4))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(23, 156, 131, 0.1))';
                  }}
                  loading="lazy"
                />
              </motion.div>
            ))}
            
            {/* Filler Cells to complete the Matrix */}
            {[...Array(2)].map((_, i) => (
              <div 
                key={`filler-${i}`}
                className="hidden lg:flex border-r border-b border-dashed min-h-[280px]"
                style={{ borderColor: 'rgba(23, 156, 131, 0.2)' }}
              />
            ))}
            
            <div className="hidden md:flex lg:hidden border-r border-b border-dashed min-h-[280px]" style={{ borderColor: 'rgba(23, 156, 131, 0.2)' }} />
          </div>
        </div>
      </div>

      {/* Premium Side Tab */}
      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-[60]">
        <motion.div 
          initial={{ x: 100 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.5 }}
          className="py-12 px-5 rounded-l-[2rem] border-y border-l border-white/20 backdrop-blur-md cursor-pointer group hover:pl-7 transition-all duration-500"
          style={{ 
            backgroundColor: '#179C83',
            boxShadow: '0 0 50px rgba(23, 156, 131, 0.5)' 
          }}
        >
          <span className="text-black font-black whitespace-nowrap [writing-mode:vertical-lr] tracking-[0.25em] text-[10px] md:text-xs uppercase flex items-center gap-3">
            Let&apos;s Talk Business
          </span>
        </motion.div>
      </div>
    </section>
  );
};
