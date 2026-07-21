import { useState } from "react";
import { motion } from "framer-motion";
import { ProfHeader } from "@/components/layout/ProfHeader";
import { ProfCaseStudies } from "@/components/sections/ProfCaseStudies";
import { ProfTestimonials } from "@/components/sections/ProfTestimonials";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ProfFaqSection } from "@/components/sections/ProfFaqSection";
import { ProfTrustMarquee } from "@/components/sections/ProfTrustMarquee";
import { ProfContactModal } from "@/components/contact/ProfContactModal";
import { ProfDemoModal } from "@/components/contact/ProfDemoModal";
import { Footer } from "@/components/layout/Footer";
import Seo from "@/components/Seo";
import {
  MapPin,
  Share2,
  Target,
  Database,
  LayoutDashboard,
  Bot,
  Star,
  Handshake,
  Clock,
  BarChart3,
  Zap,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Play
} from "lucide-react";

const ProfessionalsApp = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const profServices = [
    { title: "Automated Client Intake", desc: "Digital forms and questionnaires that automatically capture client details and securely push them into your CRM.", icon: <Database /> },
    { title: "Appointment Scheduling", desc: "Seamless calendar syncing and automated reminders that eliminate back-and-forth emails and reduce no-shows.", icon: <Clock /> },
    { title: "Document & eSignature Workflows", desc: "Securely collect documents and digital signatures automatically as part of your onboarding sequence.", icon: <ShieldCheck /> },
    { title: "CRM & Pipeline Management", desc: "Track every lead from initial contact to signed retainer in one organized, compliant dashboard.", icon: <LayoutDashboard /> },
    { title: "Professional Branding", desc: "High-converting, premium website design that positions your firm as the leading authority in your practice area.", icon: <Target /> },
    { title: "AI Pre-Qualification", desc: "Automated, conversational AI qualification to instantly separate serious prospects from tire-kickers.", icon: <Bot /> },
    { title: "Local SEO & Authority", desc: "Dominate local search rankings for your specialty so clients find you before they find your competitors.", icon: <MapPin /> },
    { title: "Review Automation", desc: "Automatically collect five-star reviews from satisfied clients to build trust and social proof on autopilot.", icon: <Star /> }
  ];

  const displayedServices = showAllServices ? profServices : profServices.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Seo
        title="Digital Systems for Professional Services"
        description="Automate client intake and maximize billable hours with digital systems built for lawyers, accountants, and consultants."
        path="/industry/professionals"
      />
      <ProfHeader />
      <main id="main-content" tabIndex={-1} aria-label="Main content" className="bg-[#0a0a0a] text-[#eaeaea] font-sans selection:bg-[#0D9488]/30 pt-20">
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                Digital Systems for<br />
                <span className="text-[#0D9488]">Professional Services</span>
              </h1>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                Scale your firm, automate client intake, and maximize billable hours
                with intelligent digital ecosystems built for lawyers, accountants, and consultants.
              </p>
              <div className="flex flex-wrap gap-5">
                <ProfContactModal>
                  <button className="bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                    Schedule a Consultation
                  </button>
                </ProfContactModal>
                <ProfDemoModal>
                  <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                    Request a Demo
                  </button>
                </ProfDemoModal>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:ml-10"
            >
              <ProfDemoModal>
                <div className="relative z-10 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl group cursor-pointer overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-xl w-full transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#0D9488] flex items-center justify-center shadow-[0_0_30px_rgba(13,148,136,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-current translate-x-1" />
                    </div>
                  </div>
                  
                  {/* Glass Label */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-sm">ClienTech Professional Services Walkthrough</p>
                    <p className="text-gray-300 text-xs mt-1">Click to watch the 2-minute demo</p>
                  </div>
                </div>
              </ProfDemoModal>
              {/* Ambient Glow */}
              <div className="absolute -inset-10 bg-[#0D9488]/10 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Logo Marquee Section */}
        <ProfTrustMarquee />

        {/* 2. The Challenge Section */}
        <section id="challenge" className="py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The Challenge for Professional Firms</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Lawyers, accountants, and consultants juggle many responsibilities at once — managing complex cases, handling client communications, chasing down documents, and trying to grow their practice. Relying on manual administrative tasks and fragmented tools severely limits your capacity and eats into valuable billable hours.
            </p>

          </div>
        </section>

        {/* 3. Solutions Grid */}
        <section id="solutions" className="py-24 px-6 lg:px-20 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You Actually Get</h2>
            <p className="text-xl text-gray-400">Streamlined Intake, Better Clients, Less Admin Work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {displayedServices.map((item, i) => (
              <ProfContactModal key={i} defaultService={item.title}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0D9488]/50 transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ProfContactModal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center gap-2 border border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white px-8 py-3 rounded-full font-bold transition-all transition-colors duration-300"
            >
              {showAllServices ? (
                <>Show Less <ChevronUp size={20} /></>
              ) : (
                <>Show More Services <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        </section>

        {/* 4. Case Studies Section */}
        <ProfCaseStudies />

        {/* Awards Section */}
        <AwardsSection />

        {/* 5. Testimonials Section */}
        <ProfTestimonials />

        {/* 6. Benefits Section - 2x2 Grid */}
        <section id="benefits" className="py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-20 text-white">Benefits for Professional Practices</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "Streamline Intake", desc: "Automate lead capture and scheduling so you only spend time on qualified, serious consultations.", icon: <Clock /> },
                { title: "Full Pipeline Visibility", desc: "Track every prospect from first contact to signed retainer in one organized, secure dashboard.", icon: <BarChart3 /> },
                { title: "Grow Your Authority", desc: "Automated review requests and local SEO systems position you as the top expert in your specific field.", icon: <Zap /> },
                { title: "Maximize Billable Hours", desc: "Reduce manual admin work, document chasing, and back-and-forth emails so you can focus on billable work.", icon: <ShieldCheck /> }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <ProfFaqSection />

        {/* 8. Final CTA Section */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0a0a0a] to-[#0c1815] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#0D9488]/5 blur-[120px] rounded-full -z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Scale Your Practice?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop relying on fragmented tools and manual admin work. Build a predictable, automated digital ecosystem for your professional firm today.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <ProfContactModal>
                <button className="bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                  Schedule a Consultation
                </button>
              </ProfContactModal>
              <ProfDemoModal>
                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Request a Demo
                </button>
              </ProfDemoModal>
            </div>
          </div>
        </section>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionalsApp;
