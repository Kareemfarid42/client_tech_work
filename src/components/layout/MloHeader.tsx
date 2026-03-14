// MLO DEDICATED HEADER - EDITING THIS WILL NOT AFFECT THE MAIN SITE
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-v4.png";

import { ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  isRoute?: boolean;
  dropdownItems?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "The Challenge", href: "#challenge" },
  { label: "Solutions", href: "#solutions" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#footer" },
];

export const MloHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    setMobileMenuOpen(false);

    const isMloPage = location.pathname.includes("mlo");
    if (!isMloPage) {
      navigate("/mlo.html" + href);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-neutral-950/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg"
        : "bg-transparent border-b border-transparent py-6"
        }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex flex-col">
              <img
                src={logo}
                alt="ClienTech Solutions"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
                loading="eager"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.dropdownItems) {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap">
                      {item.label}
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* The Glassmorphism Dropdown */}
                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-5 py-3 text-sm text-gray-300 hover:text-[#17aa8c] hover:bg-white/5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href!}
                  onClick={(e) => handleSmoothScroll(e, item.href!)}
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              );
            })}
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
              <Link to="/contact">
                <Button variant="hero" size="lg" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Speak with an Expert
                </Button>
              </Link>
            </div>
            <button
              className="xl:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <nav className="container-max section-padding py-6 flex flex-col gap-4">
              {navItems.map((item, index) => {
                if (item.dropdownItems) {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="text-sm font-semibold uppercase tracking-widest text-white/50 block">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-3 pl-4 border-l border-white/10 ml-1">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="text-sm font-medium text-white/80 hover:text-[#17aa8c] transition-colors block"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  );
                }

                return item.isRoute ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href!}
                      className="text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={item.href!}
                      className="text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors block"
                      onClick={(e) => handleSmoothScroll(e, item.href!)}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                className="pt-4 flex flex-col gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <a
                  href="tel:+19168368687"
                  className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-4 h-4" />
                  <span>(916) 836-8687</span>
                </a>
                <Link to="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full flex items-center gap-2 justify-center">
                    <MessageSquare className="w-4 h-4" />
                    Speak with an Expert
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
