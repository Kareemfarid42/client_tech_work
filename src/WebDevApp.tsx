import { useState } from "react";
import { motion } from "framer-motion";
import { HsHeader } from "@/components/layout/HsHeader";
import { WebDevTestimonials } from "@/components/sections/WebDevTestimonials";
import { SeoIndustriesWeServe } from "@/components/sections/SeoIndustriesWeServe";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { WebDevFaqSection } from "@/components/sections/WebDevFaqSection";
import { HsTrustMarquee } from "@/components/sections/HsTrustMarquee";
import { HsContactModal } from "@/components/contact/HsContactModal";
import { HsDemoModal } from "@/components/contact/HsDemoModal";
import { Footer } from "@/components/layout/Footer";
import {
  Code2,
  Database,
  Layout,
  Smartphone,
  Gauge,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Play,
  Search,
  PenTool,
  TrendingUp,
  Globe,
  Settings,
  ShoppingCart
} from "lucide-react";

const WebDevApp = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const webDevServices = [
    { title: "Custom Website Design", desc: "Stunning, conversion-optimized designs that perfectly align with your brand identity and capture your audience's attention.", icon: <PenTool /> },
    { title: "Responsive Web Development", desc: "Flawless performance across all devices. We build mobile-first websites that look and function perfectly on any screen size.", icon: <Smartphone /> },
    { title: "High-Performance Architecture", desc: "Lightning-fast load times. We optimize everything from code structure to server response to ensure your site is incredibly fast.", icon: <Gauge /> },
    { title: "Ecommerce Solutions", desc: "Scalable online stores designed to maximize conversions, streamline checkout, and provide an effortless shopping experience.", icon: <ShoppingCart /> },
    { title: "Web Application Development", desc: "Complex custom web apps tailored to streamline your business operations and provide exceptional user experiences.", icon: <Code2 /> },
    { title: "CMS Integration", desc: "Easy content management. We build on modern platforms like WordPress, Webflow, and Headless CMS so you can update your site effortlessly.", icon: <Layout /> },
    { title: "Technical SEO Foundation", desc: "Built-in search engine optimization. We ensure clean code, proper semantic structure, and fast performance to help you rank higher.", icon: <Search /> },
    { title: "Conversion Rate Optimization (CRO)", desc: "Websites designed to generate leads and sales. We strategically place CTAs and optimize the user journey for maximum conversions.", icon: <TrendingUp /> },
    { title: "API & Third-Party Integrations", desc: "Seamlessly connect your website with CRMs, payment gateways, marketing tools, and internal business systems.", icon: <Database /> },
    { title: "Website Maintenance & Support", desc: "Ongoing care to keep your website secure, updated, and performing at its best long after the initial launch.", icon: <Settings /> },
    { title: "Security & Compliance", desc: "Enterprise-grade security measures to protect your data, prevent attacks, and ensure compliance with industry standards.", icon: <ShieldCheck /> },
    { title: "Global & Multilingual Sites", desc: "Expand your reach with scalable architecture that supports multiple languages and regional variations flawlessly.", icon: <Globe /> }
  ];

  const displayedServices = showAllServices ? webDevServices : webDevServices.slice(0, 4);

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
                Websites Built for<br />
                <span className="text-[#17AA8C]">Speed & Conversion</span>
              </h1>
              <p className="text-white text-xl mb-4 max-w-lg leading-relaxed font-semibold">
                High-Performance Web Development That Drives Growth
              </p>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                We design and build custom websites and web applications that don't just look incredible—they load instantly, rank higher, and turn visitors into customers.
              </p>
              <div className="flex flex-wrap gap-5">
                <HsContactModal>
                  <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                    Get Free Website Audit
                  </button>
                </HsContactModal>

                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  <a href="https://calendly.com/admin-clientech-solutions/strategy-session">Book Project Strategy Call</a>
                </button>

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
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" alt="Web Development" className="rounded-xl w-full transition-transform duration-700 group-hover:scale-105" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#17AA8C] flex items-center justify-center shadow-[0_0_30px_rgba(23,170,140,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-current translate-x-1" />
                    </div>
                  </div>

                  {/* Glass Label */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-sm">ClienTech Web Development Showcase</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Most Websites Fail to Deliver Results</h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-6 font-semibold">
              A website should be your best salesperson, not an expensive digital brochure.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Many businesses invest heavily in design but ignore performance, user experience, and conversion architecture. Slow load times, confusing navigation, poor mobile experiences, and weak CTAs cause potential customers to leave before they ever contact you. We fix that by building sites engineered for performance and growth.
            </p>

          </div>
        </section>

        {/* 3. Solutions Grid */}
        <section id="solutions" className="py-24 px-6 lg:px-20 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-400">End-to-end development solutions designed to build fast, secure, and high-converting digital experiences.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {displayedServices.map((item, i) => (
              <HsContactModal key={i} defaultService={item.title}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#17AA8C]/50 transition-all group cursor-pointer h-full">
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
                Beautiful Design. <span className="text-[#17AA8C]">Flawless Execution.</span>
              </h3>
              <p className="text-gray-200 text-xl leading-relaxed mb-4 font-semibold">
                Explore Our Recent Web Development Projects
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From high-performance corporate sites and dynamic ecommerce platforms to complex custom web applications, we build digital products that elevate brands and drive measurable business results.
              </p>
            </div>

            {/* Placeholder for Screenshots Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#17AA8C]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#17AA8C]/10">
                  <div className="aspect-[4/3] bg-black/40 relative flex items-center justify-center border-b border-white/10">
                    <p className="text-gray-600 font-medium tracking-widest text-sm uppercase">Project Preview {item}</p>
                    <div className="absolute inset-0 bg-[#17AA8C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#17AA8C] transition-colors">Project Result {item}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Website screenshots, performance metrics, and case studies will be populated here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardsSection />

        {/* 5. Testimonials Section */}
        <WebDevTestimonials />

        {/* 6. Benefits Section - 2x2 Grid */}
        <section id="benefits" className="py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight">The ClienTech Difference</h2>
            <p className="text-gray-400 text-lg md:text-xl text-center mb-20 max-w-2xl mx-auto leading-relaxed">
              Why leading brands choose us as their technical partner.
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "Blazing Fast Performance", desc: "We optimize every line of code, utilize modern rendering techniques, and employ global CDNs to ensure your site loads instantly, improving both SEO and user experience.", icon: <Gauge /> },
                { title: "Conversion-Focused UX/UI", desc: "Beautiful design means nothing if it doesn't convert. We map out user journeys and strategically design interfaces that guide visitors towards taking action.", icon: <TrendingUp /> },
                { title: "Scalable & Secure Architecture", desc: "Built to grow with you. We use enterprise-grade security protocols and scalable frameworks so your website can handle traffic spikes and future feature expansions without breaking.", icon: <ShieldCheck /> },
                { title: "Flawless Mobile Experience", desc: "With a mobile-first development approach, we ensure your website functions perfectly and looks stunning on any device, from large desktop monitors to the smallest smartphones.", icon: <Smartphone /> }
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
        <WebDevFaqSection />

        {/* 8. Final CTA Section */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0a0a0a] to-[#0c1815] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#17AA8C]/5 blur-[120px] rounded-full -z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ready to Upgrade Your Digital Presence?</h2>
            <p className="text-[#17AA8C] text-xl md:text-2xl font-bold mb-6">Faster load times. Better user experiences. More conversions.</p>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need a high-converting marketing site, a complex custom web application, or a scalable ecommerce platform, our team is ready to build it.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <HsContactModal>
                <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                  Get Your Free Technical Audit
                </button>
              </HsContactModal>
              <HsDemoModal>
                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Discuss Your Project
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

export default WebDevApp;
