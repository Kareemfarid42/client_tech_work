import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-v4.png";

// Anchor-based navigation — all sections live on this single landing page
const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const CleansyHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        scrollTo(e, href);
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${isScrolled
                ? "bg-neutral-950/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg"
                : "bg-transparent border-b border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-6">
                        <a href="/" className="flex flex-col">
                            <div className="relative h-12 sm:h-14 lg:h-16 w-48">
                                <img
                                    src={logo}
                                    alt="ClienTech Solutions"
                                    className="object-contain object-left w-full h-full"
                                    
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex flex-col items-center gap-0.5">
                            <a
                                href="tel:+19168368687"
                                className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-primary transition-colors whitespace-nowrap"
                                aria-label="Call us"
                            >
                                <Phone className="w-4 h-4" />
                                <span>(916) 836-8687</span>
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 whitespace-nowrap shadow-md"
                            >
                                <MessageSquare className="w-4 h-4" />
                                Book a Strategy Call
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="xl:hidden p-2 text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="xl:hidden border-t border-white/10 overflow-hidden"
                        style={{ backgroundColor: "#1b273d" }}
                    >
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors block"
                                    >
                                        {item.name}
                                    </a>
                                </motion.div>
                            ))}
                            <motion.div
                                className="pt-4 flex flex-col gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                            >
                                <a
                                    href="tel:+19168368687"
                                    className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
                                    aria-label="Call us"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>(916) 836-8687</span>
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 w-full"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    Book a Strategy Call
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
