

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(items[0]?.id || null);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className={`w-full space-y-3 ${className}`}>
            {items.map((item) => {
                const isOpen = openItem === item.id;

                return (
                    <div
                        key={item.id}
                        className={`border-2 rounded-2xl overflow-hidden bg-[#1a1a1a] transition-colors duration-300 ${isOpen ? 'border-[#1DD1A1]' : 'border-white/10'
                            }`}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className={`text-base font-bold pr-4 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                                {item.question}
                            </span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="shrink-0"
                            >
                                <ChevronDown
                                    size={22}
                                    className={`transition-colors ${isOpen ? 'text-[#1DD1A1]' : 'text-[#1B2A45]/40'}`}
                                />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-white/60 leading-relaxed">{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
