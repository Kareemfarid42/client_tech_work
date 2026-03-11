import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo-v3.png";

const footerLinks = {
  services: [
    "Digital Transformation",
    "Solutions Engineering",
    "AI & Intelligent Systems",
    "Cloud Services",
    "Enterprise Platforms",
    "Staff Augmentation",
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Partnering with organizations to build resilient digital foundations, implement scalable solutions, and drive meaningful transformation.
            </p>
            <div className="pt-2">
              <p className="text-sm font-medium mb-2">Ready to start your transformation?</p>
              <Button variant="hero" className="w-full sm:w-auto">Get a Proposal</Button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Services</h4>
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
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => {
                  let href = "#";
                  if (link === "About Us") href = "/about";
                  if (link === "What We Do") href = "/#services";
                  if (link === "Contact Us") href = "/contact";
                  if (link === "Who We Serve") href = "/#industries";

                  return (
                    <li key={link}>
                      <a href={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => {
                  const href = link === "Privacy Policy" ? "/privacy-policy" : link === "Terms & Conditions" ? "/terms-and-conditions" : "#";
                  return (
                    <li key={link}>
                      <a href={href} className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                        {link}
                      </a>
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
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
