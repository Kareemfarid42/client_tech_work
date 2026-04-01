import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Target, Eye, Lightbulb, Shield, Users,
  Award, Trophy, Star, Linkedin, Twitter
} from "lucide-react";
import { HistoryAwardsSection } from "@/components/sections/HistoryAwardsSection";

import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";
import { ContactModal } from "@/components/contact/ContactModal";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace cutting-edge technologies to deliver exceptional results." },
  { icon: Shield, title: "Integrity", description: "Transparency and honesty guide every client relationship." },
  { icon: Users, title: "Collaboration", description: "Your success is our success - we work as an extension of your team." },
  { icon: Target, title: "Results-Driven", description: "Every strategy is designed to maximize your ROI." },
];

const leaders = [
  { name: "Waleed", role: "CEO & Co-founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face" },
  { name: "Nate", role: "Co-founder & CMO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" },
  { name: "Kareem", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face" },
  { name: "Ali", role: "Principal Marketer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" },
  { name: "Rahmat", role: "Visual Consultant", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face" },
];

const whyChooseUs = [
  { number: "01", title: "Expert market insights", description: "We analyze data to identify the best strategies for maximum ROI." },
  { number: "02", title: "Hands-free marketing", description: "Let us handle the research, execution, and optimization." },
  { number: "03", title: "Diverse service options", description: "From SEO to AI solutions, we offer comprehensive digital solutions." },
  { number: "04", title: "Proven track record", description: "Join thousands of clients benefiting from our data-driven approach." },
];

const awards = [
  { year: "2025", title: "Digital Innovation Leader", description: "Recognized for pioneering AI-driven marketing solutions." },
  { year: "2024", title: "Best Client Support", description: "Awarded for exceptional customer service and client satisfaction." },
  { year: "2023", title: "Top Digital Agency", description: "Named among the top 10 digital marketing agencies worldwide." },
];

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const leadershipRef = useRef(null);
  const whyRef = useRef(null);
  const awardsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const awardsInView = useInView(awardsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-primary text-sm uppercase tracking-wider mb-4">Empowering Businesses, Inspiring Innovation</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground mb-6">
                Shaping the Future of <span className="text-gradient">Digital Marketing</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                WebFX is redefining how businesses grow online — by removing barriers, offering transparency, and focusing on real impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="py-20 lg:py-32 bg-background">
          <div className="container-max section-padding">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-primary/10"
              >
                {/* Coloured top bar */}
                <div className="h-2 w-full bg-gradient-to-r from-primary to-emerald-400" />
                <div className="p-8 lg:p-12 bg-primary/5">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6 shadow-sm">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    To empower businesses of all sizes with data-driven digital marketing strategies that deliver measurable results, foster sustainable growth, and create lasting competitive advantages in an ever-evolving digital landscape.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg relative"
                style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2a1e 100%)" }}
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                {/* Coloured top bar */}
                <div className="h-2 w-full bg-gradient-to-r from-emerald-400 to-primary" />
                <div className="p-8 lg:p-12 relative z-10">
                  {/* Decorative quote mark */}
                  <span className="absolute top-6 right-8 text-7xl font-serif text-white/5 select-none leading-none">"</span>
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-sm">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
                    Our Vision
                  </h2>
                  <p className="text-white/75 leading-relaxed text-[15px]">
                    To be the world's most trusted digital marketing partner, recognized for our innovation, integrity, and unwavering commitment to driving revenue growth for our clients across every industry and market.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 lg:py-32 bg-secondary">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">
                We Believe in Providing <span className="text-primary">Values</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyRef} className="py-20 lg:py-32 bg-background">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-sm uppercase tracking-wider text-primary mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                The smart choice for profitable growth
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-3xl font-display font-bold text-primary">{item.number}</span>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-primary">1K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-primary">$20M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* History & Awards Section (Custom Circuit Timeline) */}
        <HistoryAwardsSection />

        {/* Leadership Section */}
        <section ref={leadershipRef} className="py-20 lg:py-32 bg-background">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-sm uppercase tracking-wider text-primary mb-3">Our Leadership</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Meet Our Global Leaders
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={leadershipInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)] rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(45,178,152,0.15)] hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  {/* Image Wrapper */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <span className="text-4xl font-display font-bold text-muted-foreground/30">{leader.name.charAt(0)}</span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay for Text Polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Hover Elements */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 text-center bg-card flex-1 flex flex-col justify-center relative z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{leader.name}</h3>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section (Map) */}
        <GlobalPresenceMap />

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-primary">
          <div className="container-max section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                Book Your Complimentary Consultation Today!
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Ready to transform your digital presence? Let's discuss how we can help you achieve your business goals.
              </p>
              <ContactModal>
                <Button variant="heroDark" size="lg">
                  Get In Touch
                </Button>
              </ContactModal>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
