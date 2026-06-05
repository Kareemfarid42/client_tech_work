import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-v4.png";
import { ContactModal } from "@/components/contact/ContactModal";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    "Web Development",
    "SEO",
    "Paid Advertising",
    "Content Marketing",
    "Lead Generation",
    "Marketing Automation",
  ],
  company: [
    "About Us",
    "What We Do",
    "Contact Us",
    "Who We Serve",
  ],
  legal: [
    "Privacy Policy",
    "Terms & Conditions"
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">

      {/* Main Footer */}
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="ClienTech Solutions"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain mb-4 transition-all duration-300"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Helping businesses increase visibility, generate qualified leads, and grow through digital marketing, automation, and conversion-focused solutions.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:admin@clientechsolutions.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                admin@clientechsolutions.com
              </a>
              <a href="tel:+15306093136" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (530) 609-3136
              </a>
            </div>
            <div className="pt-2">
              <p className="text-sm font-medium mb-2">Ready to grow your business?</p>
              <ContactModal defaultService="Performance Audit">
                <Button variant="hero" className="w-full sm:w-auto">Get a Proposal</Button>
              </ContactModal>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-8 lg:gap-12 lg:pl-16 xl:pl-24">
            <div>
              <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => {
                  let href = "#";
                  if (link === "About Us") href = "/about";
                  if (link === "What We Do") href = "/#services";
                  if (link === "Contact Us") href = "/contact";
                  if (link === "Who We Serve") href = "/#industries";

                  return (
                    <li key={link}>
                      {href.startsWith("/") ? (
                        <Link to={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                          {link}
                        </Link>
                      ) : (
                        <a href={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => {
                  const href = link === "Privacy Policy" ? "/privacy-policy" : link === "Terms & Conditions" ? "/terms-and-conditions" : "#";
                  return (
                    <li key={link}>
                      {href.startsWith("/") ? (
                        <Link to={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                          {link}
                        </Link>
                      ) : (
                        <a href={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} ClienTech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
