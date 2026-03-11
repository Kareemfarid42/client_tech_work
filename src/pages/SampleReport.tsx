import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Activity, ShieldCheck, Zap, Server, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SampleReport = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#17aa8c] selection:text-black flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#17aa8c]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="container-max section-padding">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#888] mb-8 font-mono">
            <Link to="/audits" className="hover:text-[#17aa8c] transition-colors">Performance Audits</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sample Report: Acme Corp</span>
          </div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17aa8c]/10 text-[#17aa8c] text-xs font-mono font-bold mb-4 border border-[#17aa8c]/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                AUDIT COMPLETE
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                Deep-Tech Audit Report
              </h1>
              <p className="text-[#888] text-lg">Prepared for Acme Corp • March 11, 2026</p>
            </div>
            
            <div className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-white/5">
              <div className="text-right">
                <div className="text-xs text-[#888] font-mono uppercase tracking-wider mb-1">Global Score</div>
                <div className="text-3xl font-bold font-mono text-[#17aa8c]">98<span className="text-xl text-[#555]">/100</span></div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4 text-[#17aa8c]">
                <Zap className="w-5 h-5" />
                <h3 className="font-heading font-bold text-lg text-white">Core Web Vitals</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">LCP (Load Time)</span>
                  <span className="text-[#17aa8c] font-bold">1.2s</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">FID (Interactivity)</span>
                  <span className="text-[#17aa8c] font-bold">45ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">CLS (Visual Stability)</span>
                  <span className="text-[#17aa8c] font-bold">0.01</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4 text-[#17aa8c]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-heading font-bold text-lg text-white">Security Vectors</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">Critical Vulnerabilities</span>
                  <span className="text-[#17aa8c] font-bold">0</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">XSS Exploits Found</span>
                  <span className="text-[#17aa8c] font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Outdated Dependencies</span>
                  <span className="text-yellow-500 font-bold">2 (Low Risk)</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4 text-[#17aa8c]">
                <Server className="w-5 h-5" />
                <h3 className="font-heading font-bold text-lg text-white">Architecture</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">Database Query Latency</span>
                  <span className="text-[#17aa8c] font-bold">12ms</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#888]">Asset Compression</span>
                  <span className="text-[#17aa8c] font-bold">Brotli (A+)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Redundancy Checks</span>
                  <span className="text-[#17aa8c] font-bold">Passed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Findings */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#17aa8c]" />
              Executive Summary
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#ccc] leading-relaxed mb-4">
                The technical architecture of Acme Corp's primary web application is highly robust, demonstrating exceptional adherence to modern performance standards. The integration of edge caching has effectively reduced Time to First Byte (TTFB) to levels well below industry averages.
              </p>
              <p className="text-[#ccc] leading-relaxed">
                <strong>Recommendation:</strong> While core metrics are optimal, we identified a minor payload bloat in the tertiary tracking scripts on the landing page. Deferring the execution of these scripts until post-hydration will yield a 4% improvement in the Total Blocking Time (TBT).
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <Link to="/contact">
                <button className="bg-[#17aa8c] text-black font-bold uppercase tracking-wider py-4 px-10 rounded-sm hover:bg-white transition-colors duration-300">
                  Request Your Custom Audit
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SampleReport;
