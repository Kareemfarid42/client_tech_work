/**
 * FranchiseInlineComponents.tsx
 * Helper components ported from cleansy-nextjs for use in the Franchise landing page.
 * All Next.js-specific APIs have been removed.
 */

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

// ─────────────────────────────────────────────
// AnimatedHeading — cycles through words
// ─────────────────────────────────────────────
interface AnimatedHeadingProps {
    prefix?: string;
    words: string[];
    postfix?: string;
    className?: string;
}

export const AnimatedHeading = ({
    prefix = "",
    words,
    postfix = "",
    className = "",
}: AnimatedHeadingProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className={`inline-flex items-center gap-2 ${className}`}>
            {prefix && <span>{prefix}</span>}
            <span className="relative inline-block overflow-hidden" style={{ minWidth: "160px" }}>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-block font-extrabold px-4 py-1 rounded-xl bg-[#1b273d] text-[#00c0a3]"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
            {postfix && <span className="ml-2">{postfix}</span>}
        </span>
    );
};

// ─────────────────────────────────────────────
// RatingStars
// ─────────────────────────────────────────────
interface RatingStarsProps {
    rating: number;
    size?: number;
}

export const RatingStars = ({ rating, size = 16 }: RatingStarsProps) => {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                />
            ))}
        </div>
    );
};

// ─────────────────────────────────────────────
// CompanyLogos — scrolling logo row
// ─────────────────────────────────────────────
interface Logo {
    id: number;
    url: string;
}

interface CompanyLogosProps {
    title?: string;
    logos: Logo[];
}

export const CompanyLogos = ({ title, logos }: CompanyLogosProps) => {
    const doubled = [...logos, ...logos]; // seamless loop
    return (
        <div className="py-8 overflow-hidden">
            {title && (
                <p className="text-center text-sm font-bold text-[#1b273d]/50 uppercase tracking-widest mb-6">
                    {title}
                </p>
            )}
            <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
                {doubled.map((logo, i) => (
                    <img
                        key={i}
                        src={logo.url}
                        alt="Partner logo"
                        className="h-10 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                ))}
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────
// FAQAccordion
// ─────────────────────────────────────────────
interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-3">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className="rounded-[15px] border border-[#1B2A45]/10 overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#F0F4F8] transition-colors duration-200"
                        >
                            <span className="font-bold text-[#1B2A45] text-sm pr-4">{item.question}</span>
                            {isOpen ? (
                                <ChevronUp size={18} className="text-[#1DD1A1] shrink-0" />
                            ) : (
                                <ChevronDown size={18} className="text-[#1B2A45]/40 shrink-0" />
                            )}
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    <div className="px-6 pb-5 pt-2 bg-white text-sm text-[#1B2A45]/65 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};
