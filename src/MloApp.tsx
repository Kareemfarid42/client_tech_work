import { motion } from "framer-motion";
import { MloHeader } from "@/components/layout/MloHeader";
import { Footer } from "@/components/layout/Footer";
import {
  Users,
  Database,
  Workflow,
  HeartHandshake,
  Clock,
  BarChart3,
  Zap,
  ShieldCheck,
  LayoutDashboard
} from "lucide-react";

const MloApp = () => {
  return (
    <div className="min-h-screen">
      <MloHeader />
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
                <span className="text-[#17AA8C]">Mortgage Loan Officers</span>
              </h1>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                Generate more qualified borrowers, nurture existing leads, and stay top of mind
                with automated digital systems built for mortgage professionals.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-[#17AA8C] hover:bg-[#17AA8C] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20">
                  Schedule a Consultation
                </button>
                <button className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Request a Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:ml-10"
            >
              <div className="relative z-10 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-xl w-full" />
              </div>
              {/* Ambient Glow */}
              <div className="absolute -inset-10 bg-[#17AA8C]/10 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </section>

        {/* 2. The Challenge Section */}
        <section id="challenge" className="py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The Challenge for Mortgage Loan Officers</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Mortgage loan officers manage many responsibilities at once — generating leads, nurturing prospects,
              staying compliant, and managing loan pipelines. Many still rely on disconnected tools and manual
              follow-ups, which makes it difficult to stay organized.
            </p>
            <div className="flex justify-center gap-5">
              <button className="bg-[#17AA8C] text-white px-8 py-4 rounded-lg font-bold">Schedule a Consultation</button>
              <button className="border border-white/10 text-white px-8 py-4 rounded-lg font-bold">Request a Demo</button>
            </div>
          </div>
        </section>

        {/* 3. Solutions Grid */}
        <section id="solutions" className="py-24 px-6 lg:px-20 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Solutions for Mortgage Loan Officers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Lead Generation Systems", desc: "Attract qualified borrowers through optimized digital marketing funnels.", icon: <Users /> },
              { title: "CRM & Pipeline Management", desc: "Track every borrower and maintain full visibility across your pipeline.", icon: <LayoutDashboard /> },
              { title: "Digital Automation", desc: "Automate follow-ups and reminders so you can stay top of mind.", icon: <Zap /> },
              { title: "Lead Nurturing Workflows", desc: "Use automated campaigns to keep relationships active until they are ready.", icon: <HeartHandshake /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#17AA8C]/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#17AA8C]/10 flex items-center justify-center text-[#17AA8C] mb-6 group-hover:bg-[#17AA8C] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Benefits Section - Restored to 2x2 Grid */}
        <section id="benefits" className="py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-20 text-white">Benefits for Mortgage Loan Officers</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "Stay Top of Mind", desc: "Automated communication keeps you visible to prospects and referral partners.", icon: <Clock /> },
                { title: "Improve Pipeline Visibility", desc: "Track every lead and loan stage in one organized system.", icon: <BarChart3 /> },
                { title: "Nurture Existing Leads", desc: "Automated email and follow-up systems keep borrowers engaged.", icon: <Zap /> },
                { title: "Save Time with Automation", desc: "Reduce manual tasks through digital automation so you can focus on closing.", icon: <ShieldCheck /> }
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
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MloApp;