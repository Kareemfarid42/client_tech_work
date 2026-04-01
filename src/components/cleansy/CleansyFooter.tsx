import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Send, ChevronRight } from "lucide-react";
import logo from "@/assets/logo-v4.png";

const CleansyFooter = () => {
    const serviceLinks = [
        { text: "Digital Foundation & Positioning", href: "#services" },
        { text: "Lead Generation", href: "#services" },
        { text: "Automation & Follow-Up Systems", href: "#services" },
        { text: "Growth & Performance Optimization", href: "#services" },
    ];

    const companyLinks = [
        { text: "About", href: "#about" },
        { text: "Services", href: "#services" },
        { text: "Results", href: "#results" },
        { text: "Blog", href: "#blog" },
        { text: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-[#0A0A0A] text-white border-t border-white/10">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <a href="/" className="inline-block">
                            <div className="relative h-12 sm:h-14 lg:h-16 w-48 mb-4">
                                <img
                                    src={logo}
                                    alt="ClienTech Solutions"
                                    className="object-contain object-left w-full h-full"
                                />
                            </div>
                        </a>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We help franchise systems build scalable digital foundations — combining strategy and conversion systems that drive sustainable growth.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Facebook, href: "https://facebook.com" },
                                { Icon: Linkedin, href: "https://linkedin.com" },
                                { Icon: Instagram, href: "https://instagram.com" },
                                { Icon: Youtube, href: "https://youtube.com" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-secondary-foreground transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:flex lg:justify-start lg:gap-32 gap-8">

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Our Services</h4>
                            <ul className="space-y-2">
                                {serviceLinks.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Company</h4>
                            <ul className="space-y-2">
                                {companyLinks.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Newsletter</h4>
                            <p className="text-sm text-white/60 mb-4 leading-relaxed">
                                Get weekly franchise growth strategies delivered to your inbox.
                            </p>
                            <form className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-11 pl-4 pr-12 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary outline-none text-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 w-9 h-9 bg-primary rounded-md flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                                    aria-label="Subscribe"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-secondary-foreground/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center sm:text-left">
                            © {new Date().getFullYear()} ClienTech Solutions. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CleansyFooter;
