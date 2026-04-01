

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedHeadingProps {
    prefix?: string;
    words: string[];
    postfix?: string;
    className?: string;
}

export default function AnimatedHeading({
    prefix = "Fast and Reliable",
    words = ["Growth", "Franchises", "Brands", "Scale"],
    postfix = "Cleaning Services",
    className = ""
}: AnimatedHeadingProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className={`flex flex-col items-start font-extrabold text-[#00c0a3] leading-snug ${className}`}>
            {prefix && <span className="block mb-2">{prefix}</span>}

            {/* Fixed height + overflow-hidden: the box slides in/out without collapsing the line */}
            <div className="mb-2 overflow-hidden" style={{ height: '3.4rem' }}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={words[index]}
                        /* whole box enters from right, exits to left */
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                        className="h-full flex items-center"
                    >
                        <span
                            className="whitespace-nowrap text-[#00c0a3] rounded-[16px] inline-flex items-center text-inherit font-extrabold"
                            style={{
                                backgroundColor: 'white',
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 20,
                                paddingRight: 20,
                            }}
                        >
                            {words[index]}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {postfix && <span className="block">{postfix}</span>}
        </div>
    );
}
