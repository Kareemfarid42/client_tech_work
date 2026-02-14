import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-v3.png";

const navItems = [
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Our Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Digital Audits", href: "#" }, // Placeholder for now
  { label: "Our Solutions", href: "#" }, // Placeholder for now
  { label: "News & Updates", href: "#" }, // Placeholder for now
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${isScrolled
        ? "bg-secondary border-secondary-foreground/10 py-2"
        : "bg-secondary border-transparent py-4"
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
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
              aria-label="Call to speak with an expert"
            >
              <Phone className="w-4 h-4" />
              <span>Talk to an Expert</span>
            </a>
            <Button variant="hero" size="lg" className="hidden sm:flex">
              Get a Proposal
            </Button>
            <button
              className="xl:hidden p-2 text-secondary-foreground"
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
            className="xl:hidden bg-secondary border-t border-secondary-foreground/10 overflow-hidden"
          >
            <nav className="container-max section-padding py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                item.isRoute ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="text-lg font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors block"
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
                      href={item.href}
                      className="text-lg font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                )
              ))}
              <motion.div
                className="pt-4 flex flex-col gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
                  aria-label="Call to speak with an expert"
                >
                  <Phone className="w-4 h-4" />
                  <span>Talk to an Expert</span>
                </a>
                <Button variant="hero" className="w-full">Get a Proposal</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
