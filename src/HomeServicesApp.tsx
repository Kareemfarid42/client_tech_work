import { useState } from "react";
import { motion } from "framer-motion";
import { HsHeader } from "@/components/layout/HsHeader";
import { HsCaseStudies } from "@/components/sections/HsCaseStudies";
import { HsTestimonials } from "@/components/sections/HsTestimonials";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { HsFaqSection } from "@/components/sections/HsFaqSection";
import { HsTrustMarquee } from "@/components/sections/HsTrustMarquee";
import { HsContactModal } from "@/components/contact/HsContactModal";
import { HsDemoModal } from "@/components/contact/HsDemoModal";
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

const HomeServicesApp = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const hsServices = [
    { title: "Local SEO / Google Business (AEO, GEO etc.)", desc: "Dominate \"plumber near me\" and \"electrician near me\" searches — make your business the top choice when homeowners need help.", icon: <MapPin /> },
    { title: "Social Media Localization", desc: "Build local brand authority with project showcases, before-and-after content, and community-targeted posts across platforms.", icon: <Share2 /> },
    { title: "Paid Ads", desc: "Highly targeted Google and Meta campaigns delivering pre-qualified homeowner leads for both emergency and scheduled services.", icon: <Target /> },
    { title: "CRM Setup", desc: "Organize your clients, job history, and follow-ups meticulously so no opportunity or repeat customer slips through the cracks.", icon: <Database /> },
    { title: "Job Pipeline Management", desc: "Track every job from estimate to completion with automated stage updates, crew assignments, and invoicing triggers.", icon: <LayoutDashboard /> },
    { title: "AI Lead Qualification", desc: "Automated, immediate conversational AI qualification to instantly separate serious homeowners from tire-kickers.", icon: <Bot /> },
    { title: "Review & Reputation Management", desc: "Automatically collect and manage five-star reviews from happy homeowners to build trust and dominate local rankings.", icon: <Star /> },
    { title: "Referral & Repeat Client Systems", desc: "Systematic follow-ups and referral incentives that turn one-time jobs into lifetime clients and steady word-of-mouth.", icon: <Handshake /> }
  ];

  const displayedServices = showAllServices ? hsServices : hsServices.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Seo
        title="Digital Systems for General Contractors & Home Services"
        description="Book more jobs, manage your pipeline, and grow your reputation with automated marketing systems for home service pros."
        path="/industry/home-services"
      />
      <HsHeader />
      <main id="main-content" tabIndex={-1} aria-label="Main content" className="bg-[#0a0a0a] text-[#eaeaea] font-sans selection:bg-[#17AA8C]/30 pt-20">
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
                <span className="text-[#17AA8C]">General Contractors</span>
              </h1>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                Book more jobs, manage your pipeline, and grow your reputation
                with automated digital systems built for home service professionals.
              </p>
              <div className="flex flex-wrap gap-5">
                <HsContactModal>
                  <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                    Schedule a Consultation
                  </button>
                </HsContactModal>
                <HsDemoModal>
                  <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                    Request a Demo
                  </button>
                </HsDemoModal>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:ml-10"
            >
              <HsDemoModal>
                <div className="relative z-10 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl group cursor-pointer overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-xl w-full transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#17AA8C] flex items-center justify-center shadow-[0_0_30px_rgba(23,170,140,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-current translate-x-1" />
                    </div>
                  </div>
                  
                  {/* Glass Label */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-sm">ClienTech Home Services System Walkthrough</p>
                    <p className="text-gray-300 text-xs mt-1">Click to watch the 2-minute demo</p>
                  </div>
                </div>
              </HsDemoModal>
              {/* Ambient Glow */}
              <div className="absolute -inset-10 bg-[#17AA8C]/10 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Logo Marquee Section */}
        <HsTrustMarquee />

        {/* 2. The Challenge Section */}
        <section id="challenge" className="py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The Challenge for General Contractors</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Home service professionals juggle many responsibilities at once — answering calls, sending estimates,
              managing crews, and keeping customers happy. Many still rely on word-of-mouth, missed calls,
              and scattered tools, which makes it difficult to grow consistently.
            </p>

          </div>
        </section>

        {/* 3. Solutions Grid */}
        <section id="solutions" className="py-24 px-6 lg:px-20 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You Actually Get</h2>
            <p className="text-xl text-gray-400">More Booked Jobs, Better Reviews, Less Admin Work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {displayedServices.map((item, i) => (
              <HsContactModal key={i} defaultService={item.title}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#17AA8C]/50 transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#17AA8C]/10 flex items-center justify-center text-[#17AA8C] mb-6 group-hover:bg-[#17AA8C] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </HsContactModal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center gap-2 border border-[#17AA8C] text-[#17AA8C] hover:bg-[#17AA8C] hover:text-white px-8 py-3 rounded-full font-bold transition-all transition-colors duration-300"
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
        <HsCaseStudies />

        {/* Awards Section */}
        <AwardsSection />

        {/* 5. Testimonials Section */}
        <HsTestimonials />

        {/* 6. Benefits Section - 2x2 Grid */}
        <section id="benefits" className="py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-20 text-white">Benefits for Home Service Professionals</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "Never Miss a Lead", desc: "Automated intake and instant response systems ensure every inquiry gets answered — even at 2 AM.", icon: <Clock /> },
                { title: "Full Pipeline Visibility", desc: "Track every job from first call to final invoice in one organized, real-time dashboard.", icon: <BarChart3 /> },
                { title: "Grow Your Reputation", desc: "Automated review requests and reputation monitoring build trust and dominate local search rankings.", icon: <Zap /> },
                { title: "Save Time with Automation", desc: "Reduce manual scheduling, follow-ups, and paperwork so you can focus on the work that pays.", icon: <ShieldCheck /> }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl border border-[#17AA8C]/30 flex items-center justify-center text-[#17AA8C]">
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
        <HsFaqSection />

        {/* 8. Final CTA Section */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0a0a0a] to-[#0c1815] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#17AA8C]/5 blur-[120px] rounded-full -z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Book More Jobs on Autopilot?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop relying on word-of-mouth alone, missed calls, and manual follow-ups. Build a predictable, automated pipeline for your home services business today.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <HsContactModal>
                <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                  Schedule a Consultation
                </button>
              </HsContactModal>
              <HsDemoModal>
                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Request a Demo
                </button>
              </HsDemoModal>
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

export default HomeServicesApp;
