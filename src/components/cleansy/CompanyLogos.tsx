import React from 'react';

interface CompanyLogo {
    id: number;
    url: string;
    alt?: string;
}

interface CompanyLogosProps {
    logos: CompanyLogo[];
    title?: string;
}

export default function CompanyLogos({ logos, title = "Trusted by Leading Franchise Systems" }: CompanyLogosProps) {
    // Quadruple the logos to ensure a seamless infinite scroll with enough items
    const repeated = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="w-full py-12">
            <div className="container mx-auto px-4">
                {title && (
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-10 text-[#1B2A45]">
                        {title}
                    </h3>
                )}

                <div className="w-full overflow-hidden relative select-none">
                    {/* Fade masks */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling track */}
                    <div className="flex animate-marquee gap-12 md:gap-20 w-max">
                        {repeated.map((logo, index) => (
                            <div
                                key={`logo-${logo.id}-${index}`}
                                className="relative h-24 md:h-32 w-48 md:w-64 flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src={logo.url}
                                    alt={logo.alt || 'Partner logo'}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
