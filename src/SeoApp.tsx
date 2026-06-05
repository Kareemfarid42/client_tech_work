import { useState } from "react";
import { motion } from "framer-motion";
import { HsHeader } from "@/components/layout/HsHeader";
import { SeoTestimonials } from "@/components/sections/SeoTestimonials";
import { SeoIndustriesWeServe } from "@/components/sections/SeoIndustriesWeServe";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { SeoFaqSection } from "@/components/sections/SeoFaqSection";
import { HsTrustMarquee } from "@/components/sections/HsTrustMarquee";
import { HsContactModal } from "@/components/contact/HsContactModal";
import { HsDemoModal } from "@/components/contact/HsDemoModal";
import { Footer } from "@/components/layout/Footer";
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
  Play,
  Search,
  Megaphone,
  PenTool,
  Link,
  TrendingUp,
  Globe,
  Building2
} from "lucide-react";

const SeoApp = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const seoServices = [
    { title: "Local SEO & Google Business Profile", desc: "Improve your visibility in local search and Google Maps so customers find your business when they're actively looking for your services.", icon: <MapPin /> },
    { title: "Google Business Profile Optimization", desc: "Optimize your Google Business Profile to improve rankings, generate more calls, increase direction requests, and build trust with potential customers.", icon: <Star /> },
    { title: "Search Engine Optimization (SEO)", desc: "Increase organic rankings, website traffic, and long-term visibility through strategic on-page, technical, and content optimization.", icon: <Search /> },
    { title: "Google Ads & Paid Search", desc: "Generate qualified leads quickly with highly targeted search campaigns designed to capture customers ready to buy.", icon: <Target /> },
    { title: "Local Service Ads (LSA)", desc: "Appear at the top of Google with Google Guaranteed visibility and pay only for qualified leads.", icon: <ShieldCheck /> },
    { title: "GEO & AEO Optimization", desc: "Position your business for AI-powered search experiences, helping customers discover your brand through ChatGPT, Gemini, Perplexity, and Google's AI Overviews.", icon: <Bot /> },
    { title: "Content Writing", desc: "Create optimized website content, service pages, blogs, and landing pages that attract traffic and convert visitors into customers.", icon: <PenTool /> },
    { title: "Content Marketing", desc: "Build authority, trust, and visibility with strategic content designed to educate prospects and strengthen your search presence.", icon: <Megaphone /> },
    { title: "Authority Building & Backlinks", desc: "Strengthen your website's credibility and improve rankings through quality link acquisition and authority-building strategies.", icon: <Link /> },
    { title: "Review & Reputation Management", desc: "Generate more positive reviews, strengthen customer trust, and improve local search performance with reputation management systems.", icon: <Handshake /> },
    { title: "Conversion Rate Optimization (CRO)", desc: "Turn more visitors into leads through landing page improvements, user experience enhancements, and conversion-focused optimization.", icon: <TrendingUp /> },
    { title: "Multi-Location SEO", desc: "Help franchises and businesses with multiple locations improve visibility, rankings, and lead generation across every service area.", icon: <Building2 /> }
  ];

  const displayedServices = showAllServices ? seoServices : seoServices.slice(0, 4);

  return (
    <div className="min-h-screen">
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
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Get Found Before<br />
                <span className="text-[#17AA8C]">Your Competitors</span>
              </h1>
              <p className="text-white text-xl mb-4 max-w-lg leading-relaxed font-semibold">
                SEO, Ads & Visibility Systems That Generate More Leads
              </p>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                We help services, professionals, and ecommerce brands increase visibility, rank higher in search results, attract qualified leads, and turn more traffic into revenue.
              </p>
              <div className="flex flex-wrap gap-5">
                <HsContactModal>
                  <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                    Get Free Visibility Audit
                  </button>
                </HsContactModal>
                <HsDemoModal>
                  <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                    Book Strategy Call
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
                    <p className="text-white font-bold text-sm">ClienTech SEO System Walkthrough</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Great Businesses Still Struggle to Grow</h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-6 font-semibold">
              Most businesses don't have a service problem, they have a visibility problem.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Potential customers are searching every day, but without strong rankings, local visibility, reviews, content, and advertising systems, many businesses remain invisible at the exact moment buyers are ready to make a decision. This creates inconsistent leads, unpredictable revenue, and unnecessary dependence on referrals.
            </p>

          </div>
        </section>

        {/* 3. Solutions Grid */}
        <section id="solutions" className="py-24 px-6 lg:px-20 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Visibility & Growth Services</h2>
            <p className="text-xl text-gray-400">The systems, strategies, and campaigns (organic + paid) designed to help your business get found, generate leads, and grow consistently.</p>
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

        {/* Industries We Serve */}
        <SeoIndustriesWeServe />

        {/* 4. Portfolio / Success Stories Section */}
        <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4">Our Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Proven Visibility. <span className="text-[#17AA8C]">Measurable Growth.</span>
              </h3>
              <p className="text-gray-200 text-xl leading-relaxed mb-4 font-semibold">
                Real Results Across Search, Maps, Ads & AI Visibility
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From Google rankings and Maps visibility to lead generation and paid advertising performance, our strategies are built around one thing: helping businesses get found before their competitors. Explore real screenshots, analytics, rankings, and campaign performance from businesses we've helped grow.
              </p>
            </div>

            {/* Placeholder for Screenshots Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#17AA8C]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#17AA8C]/10">
                  <div className="aspect-[4/3] bg-black/40 relative flex items-center justify-center border-b border-white/10">
                    <p className="text-gray-600 font-medium tracking-widest text-sm uppercase">Screenshot Area {item}</p>
                    <div className="absolute inset-0 bg-[#17AA8C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#17AA8C] transition-colors">Performance Result {item}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Actual screenshots, analytics, and campaign performance will be populated here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardsSection />

        {/* 5. Testimonials Section */}
        <SeoTestimonials />

        {/* 6. Benefits Section - 2x2 Grid */}
        <section id="benefits" className="py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight">Outcomes That Matter</h2>
            <p className="text-gray-400 text-lg md:text-xl text-center mb-20 max-w-2xl mx-auto leading-relaxed">
              Visibility is only valuable when it creates measurable business growth.
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "More Qualified Leads", desc: "Attract customers who are actively searching for your products or services through SEO, Local SEO, Google Ads, Local Service Ads, and AI-powered search experiences.", icon: <Target /> },
                { title: "Greater Visibility", desc: "Increase your presence across Google Search, Google Maps, AI search platforms, and other high-intent channels where buying decisions are made.", icon: <Globe /> },
                { title: "Stronger Authority & Trust", desc: "Build credibility through optimized business profiles, positive reviews, valuable content, and a stronger online reputation that sets you apart from competitors.", icon: <ShieldCheck /> },
                { title: "More Revenue Opportunities", desc: "Turn increased visibility into phone calls, inquiries, appointments, sales, and long-term business growth with a strategy focused on measurable results.", icon: <TrendingUp /> }
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
        <SeoFaqSection />

        {/* 8. Final CTA Section */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0a0a0a] to-[#0c1815] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#17AA8C]/5 blur-[120px] rounded-full -z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ready to Be Found Before Your Competitors?</h2>
            <p className="text-[#17AA8C] text-xl md:text-2xl font-bold mb-6">More Visibility. More Leads. More Revenue.</p>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              From Google Search and Maps to AI-powered search and paid advertising, we help businesses create predictable growth by showing up where customers are already looking.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <HsContactModal>
                <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                  Get Your Free Visibility Audit
                </button>
              </HsContactModal>
              <HsDemoModal>
                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Book Strategy Session
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

export default SeoApp;
