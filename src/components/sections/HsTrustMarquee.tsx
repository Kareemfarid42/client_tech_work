import React from 'react';

const logos = [
  // Reusing existing partner logos from the public/logos directory
  { id: 1, url: "/logos/12.svg", alt: "Partner 1", h: "h-[75px] md:h-[110px]" },
  { id: 2, url: "/logos/13.svg", alt: "Partner 2", h: "h-[85px] md:h-[120px]" },
  { id: 3, url: "/logos/14.svg", alt: "Partner 3", h: "h-[95px] md:h-[125px]" },
  { id: 4, url: "/logos/15.svg", alt: "Partner 4", h: "h-[95px] md:h-[125px]" },
  { id: 5, url: "/logos/16.svg", alt: "Partner 5", h: "h-[110px] md:h-[145px]" },
  { id: 6, url: "/logos/17.svg", alt: "Partner 6", h: "h-[95px] md:h-[125px]" },
  { id: 7, url: "/logos/18.svg", alt: "Partner 7", h: "h-[110px] md:h-[145px]" },
  { id: 8, url: "/logos/19.svg", alt: "Partner 8", h: "h-[95px] md:h-[125px]" },
  { id: 9, url: "/logos/20.svg", alt: "Partner 9", h: "h-[110px] md:h-[145px]" },
];

export const HsTrustMarquee = () => {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container-max px-4">

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-14 text-white tracking-tight">
          Trusted by Top <span className="text-[#17AA8C]">Home Service Professionals</span>
        </h3>

        <div
          className="w-full relative select-none overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex animate-marquee gap-6 md:gap-10 w-max items-center py-4 px-4 will-change-transform">
            {repeated.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center shrink-0 w-[180px] md:w-[260px] h-20 md:h-32 bg-white rounded-[1.25rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04),0_4px_10px_-6px_rgba(0,0,0,0.02)] border border-gray-50/50 group transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 cursor-default"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className={`
                    ${logo.h} w-auto max-w-[98%] max-h-[98%] object-contain transition-all duration-700 
                    group-hover:scale-105
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 max-w-3xl mx-auto leading-relaxed opacity-80 font-medium">
          Partner Logos Represent Industry Experience And Integration Expertise.
        </p>
      </div>
    </div>
  );
};
