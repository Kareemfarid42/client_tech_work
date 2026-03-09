import { useEffect, useState, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface Section {
    id: string;
    title: string;
}

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    sections: Section[];
    children: ReactNode;
}

export const LegalLayout = ({ title, lastUpdated, sections, children }: LegalLayoutProps) => {
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

    useEffect(() => {
        const observers = new Map<string, IntersectionObserver>();

        // Create an observer for each section to track which one is currently in view
        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            // If the section is intersecting the viewport, mark it active
                            if (entry.isIntersecting) {
                                setActiveSection(id);
                            }
                        });
                    },
                    // Adjust rootMargin so it triggers when the section hits the upper third of the screen
                    { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
                );
                observer.observe(element);
                observers.set(id, observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sections]);

    const scrollToSection = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // 100px offset for the fixed header
            const top = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[#000000] text-gray-300 selection:bg-cyan-500/30 selection:text-white">
            <Header />

            <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 container-max section-padding">

                {/* Page Header */}
                <div className="mb-12 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-mono text-sm"
                    >
                        Last Updated: <span className="text-white">{lastUpdated}</span>
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">

                    {/* LEFT COLUMN: Sticky Table of Contents (Desktop) */}
                    <div className="hidden md:block md:col-span-3 lg:col-span-3">
                        <nav className="sticky top-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
                            <h3 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 pb-4 border-b border-white/10">
                                Contents
                            </h3>
                            <ul className="space-y-1">
                                {sections.map(({ id, title }) => {
                                    const isActive = activeSection === id;
                                    return (
                                        <li key={id}>
                                            <a
                                                href={`#${id}`}
                                                onClick={(e) => scrollToSection(id, e)}
                                                className={cn(
                                                    "block py-2 px-4 border-l-2 text-sm transition-all duration-300",
                                                    isActive
                                                        ? "border-cyan-500 text-cyan-400 bg-cyan-500/10 font-medium"
                                                        : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                {title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* TOP DROP-DOWN: Mobile Only "Jump To Section" */}
                    <div className="md:hidden sticky top-24 z-30 mb-8 bg-[#0a0a0a]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                        <select
                            className="w-full bg-[#111111] text-white border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:border-cyan-500 cursor-pointer appearance-none"
                            value={activeSection}
                            onChange={(e) => {
                                const id = e.target.value;
                                const element = document.getElementById(id);
                                if (element) {
                                    const top = element.getBoundingClientRect().top + window.scrollY - 160; // Extra offset for mobile dropdown
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                        >
                            <option value="" disabled>Jump to section...</option>
                            {sections.map(({ id, title }) => (
                                <option key={id} value={id}>
                                    {title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* RIGHT COLUMN: The Document Content */}
                    <div className="md:col-span-9 lg:col-span-8">
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 hover:prose-a:underline prose-strong:text-white/90">
                            {children}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};
