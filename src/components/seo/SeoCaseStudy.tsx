import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HsContactModal } from "@/components/contact/HsContactModal";
import {
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Monitor,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Activity,
  Search,
  Eye,
  Users,
  MousePointerClick,
  ShieldCheck,
  Gauge,
  LayoutDashboard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Circular Score Gauge ─── */
function ScoreCircle({
  score,
  label,
  color,
}: {
  score: number;
  label: string;
  color: string;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <circle
            ref={ref}
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={inView ? offset : circumference}
            style={{
              transition: "stroke-dashoffset 1.5s ease-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white font-mono">
            {inView ? score : 0}
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-400 font-medium">{label}</span>
    </div>
  );
}

/* ─── Case Study Data ─── */
const CASE_STUDY = {
  client: "Apply USA Visa",
  website: "applyusavisas.com",
  images: {
    before: "/case-studies/apply-usa-visa/before-dec2025.jpg",
    after: "/case-studies/apply-usa-visa/after-6month.jpg",
    fullTimeline: "/case-studies/apply-usa-visa/full-timeline-16month.jpg",
    deviceCompare3m: "/case-studies/apply-usa-visa/device-compare-3month.jpg",
    deviceCompare16m: "/case-studies/apply-usa-visa/device-compare-16month.jpg",
    resultsCompare: "/case-studies/apply-usa-visa/results-compare-3month.jpg",
    coreWebVitals: "/case-studies/apply-usa-visa/core-web-vitals-desktop.jpg",
  },
  before: {
    period: "Dec 16–31, 2025",
    clicks: 47,
    impressions: 844,
    ctr: "5.6%",
    avgPosition: "15.4",
  },
  after: {
    period: "Dec 2025 – May 2026",
    clicks: 2310,
    impressions: 298000,
    ctr: "0.8%",
    avgPosition: "9.1",
  },
  comparison: {
    current: { period: "Mar 1 – May 31, 2026", clicks: 1700, impressions: 252000, ctr: "0.7%", avgPosition: "9.1" },
    previous: { period: "Nov 29, 2025 – Feb 28, 2026", clicks: 606, impressions: 46000, ctr: "1.3%", avgPosition: "9.4" },
    clicksGrowth: 181,
    impressionsGrowth: 448,
  },
  device: {
    desktop: { clicks: 589, impressions: "182K", ctr: "0.3%", avgPosition: "10" },
    mobile: { clicks: "1.1K", impressions: "69.3K", ctr: "1.6%", avgPosition: "6.7" },
  },
  coreWebVitals: {
    performance: 98,
    accessibility: 90,
    bestPractices: 100,
    seo: 100,
    fcp: "0.8s",
    lcp: "0.8s",
    tbt: "0ms",
    cls: "0.001",
  },
};

/* ─── Fade-up animation variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export function SeoCaseStudy() {
  return (
    <section
      id="case-study"
      className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* ──── 1. Section Header ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4">
            Case Study
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Real Results.{" "}
            <span className="text-[#17AA8C]">Real SEO Growth.</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            See how strategic SEO optimization transformed website visibility,
            performance, and user experience for{" "}
            <span className="text-white font-semibold">
              {CASE_STUDY.client}
            </span>
            .
          </p>
        </motion.div>

        {/* ──── 2. Key Metrics Bar ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {[
            {
              label: "Click Growth",
              value: 181,
              suffix: "%",
              prefix: "+",
              icon: <TrendingUp className="w-5 h-5" />,
            },
            {
              label: "Impression Growth",
              value: 448,
              suffix: "%",
              prefix: "+",
              icon: <BarChart3 className="w-5 h-5" />,
            },
            {
              label: "Avg. Position",
              value: 9.1,
              suffix: "",
              prefix: "",
              icon: <Target className="w-5 h-5" />,
              isDecimal: true,
            },
            {
              label: "Performance Score",
              value: 98,
              suffix: "/100",
              prefix: "",
              icon: <Zap className="w-5 h-5" />,
            },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              custom={i}
              variants={fadeUp}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center group hover:border-[#17AA8C]/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#17AA8C]/10 text-[#17AA8C] mb-4">
                {metric.icon}
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white font-mono mb-1">
                {metric.isDecimal ? (
                  <span>{metric.prefix}9.1</span>
                ) : (
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                )}
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ──── 3. Before & After Comparison ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Before &amp; After
          </h4>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BEFORE Card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <div className="absolute top-4 left-4 z-10 bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-sm">
                Before
              </div>
              <div className="p-3 bg-white/[0.02]">
                <img
                  src={CASE_STUDY.images.before}
                  alt={`Google Search Console before optimization for ${CASE_STUDY.client} — ${CASE_STUDY.before.clicks} clicks, ${CASE_STUDY.before.impressions} impressions`}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-black/40 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                  {CASE_STUDY.before.period}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-white font-mono">
                      {CASE_STUDY.before.clicks}
                    </p>
                    <p className="text-xs text-gray-500">Total Clicks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white font-mono">
                      {CASE_STUDY.before.impressions.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Total Impressions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER Card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden border border-[#17AA8C]/30 group shadow-lg shadow-[#17AA8C]/5"
            >
              <div className="absolute top-4 left-4 z-10 bg-[#17AA8C]/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-sm">
                After
              </div>
              <div className="p-3 bg-white/[0.02]">
                <img
                  src={CASE_STUDY.images.after}
                  alt={`Google Search Console after optimization for ${CASE_STUDY.client} — ${CASE_STUDY.after.clicks.toLocaleString()} clicks, ${CASE_STUDY.after.impressions.toLocaleString()} impressions`}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-black/40 border-t border-[#17AA8C]/10">
                <p className="text-xs text-[#17AA8C] uppercase tracking-wider mb-3 font-semibold">
                  {CASE_STUDY.after.period} (6 Months)
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-[#17AA8C] font-mono">
                      2.31K
                    </p>
                    <p className="text-xs text-gray-500">Total Clicks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#17AA8C] font-mono">
                      298K
                    </p>
                    <p className="text-xs text-gray-500">Total Impressions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ──── 4. Results Comparison (Period over Period) ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Period-over-Period Results
          </h4>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            3-month comparison: Mar–May 2026 vs Nov 2025–Feb 2026
          </p>

          {/* Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-10 bg-white/[0.02] p-3">
            <img
              src={CASE_STUDY.images.resultsCompare}
              alt={`Period-over-period comparison showing ${CASE_STUDY.comparison.clicksGrowth}% click growth and ${CASE_STUDY.comparison.impressionsGrowth}% impression growth`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Total Clicks",
                current: "1,700",
                previous: "606",
                change: "+181%",
                positive: true,
              },
              {
                label: "Total Impressions",
                current: "252K",
                previous: "46K",
                change: "+448%",
                positive: true,
              },
              {
                label: "Average CTR",
                current: "0.7%",
                previous: "1.3%",
                change: "Broader reach",
                positive: null,
              },
              {
                label: "Avg. Position",
                current: "9.1",
                previous: "9.4",
                change: "Improved",
                positive: true,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#17AA8C]/30 transition-all"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
                  {item.label}
                </p>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-xl md:text-2xl font-bold text-white font-mono">
                    {item.current}
                  </span>
                  <span className="text-sm text-gray-600 font-mono line-through">
                    {item.previous}
                  </span>
                </div>
                <div
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.positive === true
                      ? "bg-emerald-500/10 text-emerald-400"
                      : item.positive === false
                      ? "bg-red-500/10 text-red-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {item.positive === true && (
                    <ArrowUpRight className="w-3 h-3" />
                  )}
                  {item.positive === false && (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {item.change}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ──── 5. Device Comparison ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Desktop vs. Mobile Performance
          </h4>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            SEO improvements account for both desktop and mobile users, ensuring
            performance across all devices.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Desktop */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#17AA8C]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h5 className="text-lg font-bold text-white">Desktop</h5>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    {CASE_STUDY.device.desktop.clicks}
                  </p>
                  <p className="text-xs text-gray-500">Clicks</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    {CASE_STUDY.device.desktop.impressions}
                  </p>
                  <p className="text-xs text-gray-500">Impressions</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white font-mono">
                    {CASE_STUDY.device.desktop.ctr}
                  </p>
                  <p className="text-xs text-gray-500">CTR</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white font-mono">
                    {CASE_STUDY.device.desktop.avgPosition}
                  </p>
                  <p className="text-xs text-gray-500">Avg. Position</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#17AA8C]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h5 className="text-lg font-bold text-white">Mobile</h5>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    {CASE_STUDY.device.mobile.clicks}
                  </p>
                  <p className="text-xs text-gray-500">Clicks</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    {CASE_STUDY.device.mobile.impressions}
                  </p>
                  <p className="text-xs text-gray-500">Impressions</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white font-mono">
                    {CASE_STUDY.device.mobile.ctr}
                  </p>
                  <p className="text-xs text-gray-500">CTR</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white font-mono">
                    {CASE_STUDY.device.mobile.avgPosition}
                  </p>
                  <p className="text-xs text-gray-500">Avg. Position</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Device Compare Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3">
            <img
              src={CASE_STUDY.images.deviceCompare3m}
              alt={`Device comparison for ${CASE_STUDY.client} showing desktop vs mobile search performance over 3 months`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ──── 6. Core Web Vitals ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Core Web Vitals &amp; Performance
          </h4>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Technical performance scores from Google PageSpeed Insights,
            demonstrating the level of optimization we deliver.
          </p>

          {/* Score Circles */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <ScoreCircle
              score={CASE_STUDY.coreWebVitals.performance}
              label="Performance"
              color="#17AA8C"
            />
            <ScoreCircle
              score={CASE_STUDY.coreWebVitals.accessibility}
              label="Accessibility"
              color="#f59e0b"
            />
            <ScoreCircle
              score={CASE_STUDY.coreWebVitals.bestPractices}
              label="Best Practices"
              color="#17AA8C"
            />
            <ScoreCircle
              score={CASE_STUDY.coreWebVitals.seo}
              label="SEO"
              color="#17AA8C"
            />
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                label: "First Contentful Paint",
                value: CASE_STUDY.coreWebVitals.fcp,
                icon: <Activity className="w-4 h-4" />,
                good: true,
              },
              {
                label: "Largest Contentful Paint",
                value: CASE_STUDY.coreWebVitals.lcp,
                icon: <Gauge className="w-4 h-4" />,
                good: true,
              },
              {
                label: "Total Blocking Time",
                value: CASE_STUDY.coreWebVitals.tbt,
                icon: <Zap className="w-4 h-4" />,
                good: true,
              },
              {
                label: "Cumulative Layout Shift",
                value: CASE_STUDY.coreWebVitals.cls,
                icon: <LayoutDashboard className="w-4 h-4" />,
                good: true,
              },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                custom={i}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
                  {metric.icon}
                </div>
                <p className="text-2xl font-bold text-white font-mono mb-1">
                  {metric.value}
                </p>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  {metric.label}
                </p>
                {metric.good && (
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Good
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* PageSpeed Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3">
            <img
              src={CASE_STUDY.images.coreWebVitals}
              alt="Google PageSpeed Insights desktop report showing Performance 98, Accessibility 90, Best Practices 100, SEO 100"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ──── 7. What We Track ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            We Measure What Matters
          </h4>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            SEO performance should not be based on assumptions. We track and
            report on the indicators that directly influence your business
            growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Organic Traffic", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Keyword Positions", icon: <Search className="w-5 h-5" /> },
              { label: "Search Visibility", icon: <Eye className="w-5 h-5" /> },
              { label: "User Engagement", icon: <Users className="w-5 h-5" /> },
              { label: "Conversions", icon: <MousePointerClick className="w-5 h-5" /> },
              { label: "Technical SEO Health", icon: <ShieldCheck className="w-5 h-5" /> },
              { label: "Core Web Vitals", icon: <Activity className="w-5 h-5" /> },
              { label: "Click-Through Rate", icon: <Target className="w-5 h-5" /> },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-[#17AA8C]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#17AA8C]/10 flex items-center justify-center text-[#17AA8C] shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-white font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ──── 8. CTA ──── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c0c0c] via-[#0a0a0a] to-[#0c1815] p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#17AA8C]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to See What SEO Can Do for Your Business?
            </h4>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's identify the opportunities holding your website back and
              build a strategy focused on measurable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <HsContactModal>
                <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20 inline-flex items-center gap-2">
                  Get Your Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </HsContactModal>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
