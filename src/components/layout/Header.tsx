import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "OmniSEO® & Lead Generation", href: "#services" },
  { label: "Revenue Marketing & CRO", href: "#services" },
  { label: "UX & AI Services", href: "#services" },
  { label: "Industry", href: "/industry", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo & Revenue Counter */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl lg:text-2xl font-display font-bold text-secondary-foreground">
                Web<span className="text-primary">FX</span>
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground leading-tight">
                Digital Marketing<br />That Drives Revenue®
              </span>
            </a>
            <div className="hidden lg:flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Revenue Driven For Our Clients</span>
              <span className="text-sm font-bold text-primary">$10,085,355,239+</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-3 py-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="tel:888-256-9448" className="hidden md:flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
              <Phone className="w-4 h-4" />
              <span>888-256-9448</span>
            </a>
            <Button variant="hero" size="lg" className="hidden sm:flex">
              Get a Proposal
            </Button>
            <button
              className="lg:hidden p-2 text-secondary-foreground"
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
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10"
          >
            <nav className="container-max section-padding py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="px-4 py-3 text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Button variant="hero" className="mt-4">Get a Proposal</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
