import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    "Digital Marketing Services",
    "SEO Services",
    "PPC Services",
    "Content Marketing Services",
    "Social Media Services",
    "Web Design Services",
  ],
  knowledgebase: [
    "Digital Marketing",
    "SEO",
    "PPC",
    "Content Marketing",
    "Social Media",
    "Web Design",
  ],
  company: [
    "About Us",
    "Careers",
    "Contact Us",
    "Industries We Serve",
    "Locations",
  ],
  tools: [
    "Color Picker",
    "Lorem Ipsum Generator",
    "ROAS Calculator",
    "Return on Ad Spend",
    "Readability Checker",
  ],
};

const stats = [
  { value: "24,859,684+", label: "Leads Driven For Clients" },
  { value: "$10,085,355,239+", label: "Revenue Driven For Clients" },
  { value: "3,212,407", label: "Hours of Expertise" },
  { value: "750", label: "Experts On Staff" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Stats Bar */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container-max section-padding py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-xl lg:text-2xl font-display font-bold text-secondary-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-xl">
            <div className="flex-1 bg-primary/20 rounded-lg px-4 py-2">
              <span className="text-sm text-primary">Discover how we can help your business grow</span>
            </div>
            <Input 
              placeholder="Enter your website" 
              className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground"
            />
            <Button variant="hero">Send Me a Proposal!</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <span className="text-2xl font-display font-bold">
              Web<span className="text-primary">FX</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Celebrating 25+ Years of Digital Marketing Excellence
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium">Ready to speak with a marketing expert?</p>
              <p className="text-xs text-muted-foreground">Give us a ring</p>
              <a href="tel:888-256-9448" className="flex items-center gap-2 mt-2 text-primary font-semibold">
                <Phone className="w-4 h-4" />
                888-256-9448
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
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
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Knowledgebase</h4>
            <ul className="space-y-2">
              {footerLinks.knowledgebase.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 1995-2026 WebFX. Sitemap | Privacy & Terms of Use
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
