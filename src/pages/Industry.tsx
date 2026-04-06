import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Landmark, Scale, Factory, Stethoscope, Shield, Truck, 
  Building2, PenTool, ArrowRight, Quote
} from "lucide-react";

const industries = [
  { 
    icon: Landmark, 
    title: "Financial Services", 
    description: "Digital transformation strategies for banks, investment firms, and fintech companies to enhance customer experience and operational efficiency."
  },
  { 
    icon: Scale, 
    title: "Legal Services", 
    description: "Marketing solutions that help law firms build authority, generate qualified leads, and establish thought leadership in competitive markets."
  },
  { 
    icon: Factory, 
    title: "Manufacturing", 
    description: "B2B marketing strategies that drive demand generation, optimize supply chain communications, and accelerate digital adoption."
  },
  { 
    icon: Stethoscope, 
    title: "Healthcare", 
    description: "HIPAA-compliant marketing solutions that connect healthcare providers with patients while maintaining trust and regulatory compliance."
  },
  { 
    icon: Shield, 
    title: "Insurance", 
    description: "Customer acquisition and retention strategies tailored for insurance carriers, brokers, and insurtech innovators."
  },
  { 
    icon: Truck, 
    title: "Logistics", 
    description: "Digital marketing that streamlines lead generation and brand visibility for transportation and supply chain companies."
  },
  { 
    icon: Building2, 
    title: "Private Equity", 
    description: "Portfolio company growth acceleration through strategic marketing, operational improvements, and value creation initiatives."
  },
  { 
    icon: PenTool, 
    title: "Architecture & Design", 
    description: "Creative marketing strategies that showcase portfolios, attract premium clients, and build lasting brand recognition."
  },
];

const testimonials = [
  {
    quote: "ClienTech Solutions transformed our digital presence and increased our qualified leads by 340% in just 6 months.",
    author: "Sarah Chen",
    role: "CEO, TechVenture Capital",
    industry: "Private Equity"
  },
  {
    quote: "Their understanding of healthcare compliance combined with marketing expertise is unmatched. Our patient acquisition costs dropped by 45%.",
    author: "Dr. Michael Roberts",
    role: "CMO, Regional Health Network",
    industry: "Healthcare"
  },
  {
    quote: "The team delivered a complete digital transformation that modernized our century-old manufacturing brand.",
    author: "James Mitchell",
    role: "VP Marketing, Precision Industries",
    industry: "Manufacturing"
  },
];

const Industry = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              20+ Years of Industry Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6">
              Industries
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-foreground/80 mb-8">
              Create a Custom Strategy to Fit Your Needs
            </p>
            <p className="text-secondary-foreground/60 max-w-2xl mx-auto">
              We bring deep expertise across diverse sectors, delivering tailored digital marketing 
              solutions that drive measurable results for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise Grid */}
      <section ref={gridRef} className="py-20 lg:py-32 bg-background">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Industry <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge and proven strategies across key sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              Hear from industry leaders who transformed their digital presence with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-secondary-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-secondary-foreground/10 pt-4">
                  <p className="font-semibold text-secondary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-secondary-foreground/60">{testimonial.role}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    {testimonial.industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 lg:py-28 bg-background">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Transform Your <span className="text-primary">Industry?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 10-minute consultation and discover how our industry-specific 
              strategies can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Book Free Consultation
              </Button>
              <Button variant="heroOutline" size="lg">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industry;
