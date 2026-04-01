import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const awardsList = [
  { id: 1, img: "/awards/Clutch2.svg", alt: "Top Staff Augmentation Company" },
  { id: 2, img: "/awards/2.png", alt: "Top Web Developers Real Estate" },
  { id: 3, img: "/awards/3.png", alt: "Top Web Developers Retail" },
  { id: 4, img: "/awards/4.png", alt: "Top AR/VR Development Company" },
  { id: 5, img: "/awards/5.png", alt: "Top Software Developers Saudi Arabia" },
  { id: 6, img: "/awards/TP500.svg", alt: "Most Reviewed App Development Company" },
  { id: 7, img: "/awards/7.png", alt: "Top Software Developers Gaming" },
  { id: 8, img: "/awards/svg_logo2.svg", alt: "ISO 9001:2015 Certified" },
  { id: 9, img: "/awards/AL3.svg", alt: "App Life" },
];

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0A0A0A] pt-20 md:pt-24 pb-10 md:pb-12 relative overflow-hidden">
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

        {/* Open Matrix Grid Architecture with Custom Gradients */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {awardsList.map((award, index) => {
              // Open Matrix Logic: Determine which lines to show based on breakpoint
              const isRightEdgeMobile = index % 2 === 1;
              const isRightEdgeTablet = index % 3 === 2;
              const isRightEdgeDesktop = index % 5 === 4;

              const isBottomRowMobile = index >= 6; // Last 2 items in 8-item 2-col grid
              const isBottomRowTablet = index >= 6; // Last 3 items in 9-item (with filler) 3-col grid
              const isBottomRowDesktop = index >= 5; // Last 5 items in 10-item (with fillers) 5-col grid

              // Define the custom repeating linear gradients
              const horizontalGradient = `repeating-linear-gradient(to right, rgba(6, 182, 212, 0.6) 0px, rgba(6, 182, 212, 0.6) 4px, transparent 4px, transparent 10px)`;
              const verticalGradient = `repeating-linear-gradient(to bottom, rgba(6, 182, 212, 0.6) 0px, rgba(6, 182, 212, 0.6) 4px, transparent 4px, transparent 10px)`;

              // Base string building for responsive background styles
              return (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className={cn(
                    "relative group flex items-center justify-center p-10 md:p-12 min-h-[220px] md:min-h-[280px]",
                    "transition-all duration-700",
                    // Hide horizontal lines on bottom rows responsively
                    isBottomRowMobile ? "max-md:!bg-[length:0px_0px,1px_100%]" : "",
                    isBottomRowTablet ? "md:max-lg:!bg-[length:0px_0px,1px_100%]" : "",
                    isBottomRowDesktop ? "lg:!bg-[length:0px_0px,1px_100%]" : "",
                    // Hide vertical lines on right edges responsively
                    isRightEdgeMobile && !isBottomRowMobile ? "max-md:!bg-[length:100%_1px,0px_0px]" : "",
                    isRightEdgeTablet && !isBottomRowTablet ? "md:max-lg:!bg-[length:100%_1px,0px_0px]" : "",
                    isRightEdgeDesktop && !isBottomRowDesktop ? "lg:!bg-[length:100%_1px,0px_0px]" : "",
                    // Hide BOTH if it's the bottom right corner
                    isRightEdgeMobile && isBottomRowMobile ? "max-md:!bg-none" : "",
                    isRightEdgeTablet && isBottomRowTablet ? "md:max-lg:!bg-none" : "",
                    isRightEdgeDesktop && isBottomRowDesktop ? "lg:!bg-none" : ""
                  )}
                  style={{
                    backgroundImage: `${horizontalGradient}, ${verticalGradient}`,
                    backgroundSize: '100% 1px, 1px 100%',
                    backgroundPosition: 'bottom left, top right',
                    backgroundRepeat: 'no-repeat, no-repeat',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Subtle Radial Glow on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }}
                  />

                  <div
                    className="relative w-full max-w-[140px] md:max-w-[160px] flex items-center justify-center transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))',
                      transform: 'translateZ(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 35px rgba(6, 182, 212, 0.5))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))';
                    }}
                  >
                    <img
                      src={award.img}
                      alt={award.alt}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* Desktop Filler */}
            {[...Array(1)].map((_, i) => (
              <div
                key={`filler-desktop-${i}`}
                className="hidden lg:flex min-h-[280px] !bg-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
