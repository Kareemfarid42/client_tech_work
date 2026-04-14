import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCheck, Briefcase, PiggyBank, Building2,
  AlertTriangle, CheckCircle2, ArrowRight,
  Layers, Rocket, BarChart3, TrendingUp,
  Shield, Clock, Zap, Target,
  Loader2, ChevronRight
} from "lucide-react";
import { CleansyHeader } from "@/components/cleansy/CleansyHeader";
import CleansyFooter from "@/components/cleansy/CleansyFooter";
import AnimatedHeading from "@/components/cleansy/AnimatedHeading";
import { ContactModal } from "@/components/contact/ContactModal";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: "backOut" as const } },
};

/* ─── Section Wrapper (handles inView + animations) ─── */
const AnimSection = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id={id} className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { inView })
          : child
      )}
    </section>
  );
};

/* ─── Grid Background ─── */
const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
};

/* ════════════════════════════════════════════════════════════
   DLP 1 — Franchise Alternative Landing Page
   ════════════════════════════════════════════════════════════ */
export default function DLP_1() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ─── Form state ─── */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    business_type: "",
    sms_consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((p) => ({ ...p, [name]: checked }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          service: "Franchise Alternative — Strategy Call",
          message: `Phone: ${formData.phone}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nBusiness Type: ${formData.business_type}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Request Submitted!", {
        description: "We'll be in touch within 24 hours to schedule your strategy call.",
      });
      setFormData({ name: "", email: "", phone: "", budget: "", timeline: "", business_type: "", sms_consent: false });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed", {
        description: "Please try again or email us at info@clientechsolutions.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* helper: scroll to form */
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <CleansyHeader />
      <main className="flex-grow">

        {/* ═══════════════════════════════════════════════════════
            1 ─ HERO SECTION
        ══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]" style={gridBg}>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-8 xl:gap-16 items-center">

              {/* Left — Text */}
              <motion.div
                className="flex flex-col items-start"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 variants={fadeUp} className="font-extrabold leading-snug text-white mb-6">
                  <span className="block text-4xl md:text-5xl mb-3">
                    Own a Profitable Business
                  </span>
                  <span className="block mb-3">
                    <AnimatedHeading
                      prefix=""
                      words={["Without a Franchise", "With Full Ownership", "On Your Terms"]}
                      postfix=""
                      className="!text-4xl md:!text-5xl !text-[#00c0a3]"
                    />
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
                  We build and launch a fully systemized business for you in 6–12 months — with lead generation, automation, and client acquisition built in.
                </motion.p>

                {/* Bullet points */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
                  {["No royalties", "Built for your local market", "6 months support included"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1DD1A1]/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#1DD1A1]" />
                      </div>
                      <span className="text-white font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToForm}
                    className="bg-[#00c0a3] text-white text-base font-bold px-10 py-5 rounded-2xl hover:bg-[#1b273d] transition-colors duration-300 shadow-xl"
                  >
                    Get Your Custom Business Plan
                  </button>
                  <ContactModal defaultService="Franchise Alternative — Strategy Call">
                    <div className="border-2 border-white/20 text-white text-base font-bold px-8 py-5 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-pointer">
                      Book Strategy Call
                    </div>
                  </ContactModal>
                </motion.div>
              </motion.div>

              {/* Right — Image */}
              <div className="relative flex justify-center lg:justify-end self-end">
                <motion.div
                  variants={slideRight}
                  initial="hidden"
                  animate="visible"
                  className="relative z-10 w-full max-w-[460px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop"
                    alt="Business Growth Dashboard"
                    width={460}
                    height={580}
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: "460 / 580" }}
                  />
                </motion.div>

                {/* Floating Social Proof Card */}
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white rounded-2xl shadow-2xl p-5 w-[240px]"
                >
                  <div className="text-4xl font-extrabold text-[#1DD1A1] mb-1">$20M+</div>
                  <p className="text-[#1b273d] font-extrabold text-base leading-tight">Revenue Generated</p>
                  <p className="text-xs text-gray-500 mt-0.5">For our clients across industries</p>
                </motion.div>

                {/* Glow */}
                <div
                  className="absolute top-4 left-0 right-0 mx-auto w-[420px] h-[520px] bg-[#00c0a3]/10 -z-10"
                  style={{ borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            2 ─ WHO THIS IS FOR
        ══════════════════════════════════════════════════════════ */}
        <AnimSection className="py-24 bg-white overflow-hidden" id="who">
          <motion.div
            className="container mx-auto px-4 max-w-6xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Ideal Candidates
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4">
                Who This Is For
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={stagger}
            >
              {[
                { icon: UserCheck, label: "Individuals considering buying a franchise" },
                { icon: Briefcase, label: "Retired or semi-retired professionals seeking income" },
                { icon: PiggyBank, label: "Investors looking for cash-flow businesses" },
                { icon: Building2, label: "Business owners expanding into new service markets" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-[#1B2A45] rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-14 h-14 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#1DD1A1]" />
                  </div>
                  <p className="text-white font-bold text-base leading-snug">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimSection>

        {/* ═══════════════════════════════════════════════════════
            3 ─ PROBLEM — THE HIDDEN COST OF FRANCHISES
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 overflow-hidden bg-[#0A0A0A] relative" style={gridBg}>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                The Reality
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-6">
                The Hidden Cost of Franchises
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Most people assume buying a franchise is the safest way to start a business. But in reality, franchises come with:
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {[
                { stat: "$120K–$180K", label: "Upfront investment required", icon: AlertTriangle },
                { stat: "6–10%", label: "Ongoing royalties on revenue", icon: TrendingUp },
                { stat: "Limited", label: "Control over pricing & operations", icon: Shield },
                { stat: "Slow", label: "Adaptability in competitive markets", icon: Clock },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6 border border-red-500/20 bg-red-500/[0.04] hover:border-red-500/40 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-red-400/80 mb-3" />
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-2">{item.stat}</div>
                  <p className="text-white/50 text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              You're buying a system — <span className="text-red-400">but not full ownership.</span>
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            4 ─ SOLUTION — A SMARTER WAY TO OWN A BUSINESS
        ══════════════════════════════════════════════════════════ */}
        <section id="solution" className="py-20 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Image */}
              <motion.div
                className="relative"
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative z-10 rounded-[20px] rounded-br-[200px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1000&auto=format&fit=crop"
                    alt="Business Strategy Planning"
                    width={600}
                    height={700}
                    className="object-cover w-full h-auto"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute top-10 -left-10 z-20 bg-[#1B2A45] p-8 rounded-[20px] shadow-xl max-w-[250px] hidden md:block animate-float">
                  <div className="text-4xl font-extrabold text-[#1DD1A1] mb-2">100%</div>
                  <div className="text-white font-bold text-lg leading-tight">Full Ownership</div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10" />
              </motion.div>

              {/* Right Content */}
              <motion.div
                className="flex flex-col items-start"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                  A Smarter Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6 leading-tight">
                  A Smarter Way to Own a Business
                </h2>
                <p className="text-[#1B2A45]/70 text-lg mb-4 leading-relaxed">
                  We build you a complete, revenue-ready business without franchise limitations.
                </p>
                <p className="text-[#1B2A45]/70 text-base mb-8 leading-relaxed">
                  Franchises succeed because of their systems — not just their name.
                  We build those same core systems for your business: lead generation, conversion, automation, and operational structure.
                  Then we go further, tailoring everything specifically to your market so you can compete more effectively and scale faster.
                </p>

                <div className="flex flex-col gap-4 mb-10 w-full">
                  {[
                    "Lead generation & conversion systems",
                    "Automation & operational structure",
                    "Tailored to your specific market",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-[15px] bg-[#F0F4F8] hover:bg-[#1DD1A1]/20 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#1B2A45] flex items-center justify-center text-[#1DD1A1] shrink-0">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-[#1B2A45] font-bold text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-extrabold text-[#1B2A45]">
                  Same foundation. Greater flexibility. <span className="text-[#1DD1A1]">Full ownership.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            5 ─ HOW IT WORKS
        ══════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="text-center mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-6">
                How It Works
              </h2>
              <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed mb-4">
                We start by understanding what you're already considering — whether it's a franchise or a specific type of business. From there, we validate and refine the model based on market demand, competition, and profit potential.
              </p>
              <p className="text-[#1DD1A1] font-bold text-sm max-w-xl mx-auto">
                This ensures you're not just building what you want — but building something that can perform.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start mt-16"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Business Model Alignment",
                  desc: "We align your idea with real market data — refining or adjusting it where needed to maximize success potential.",
                  dark: true,
                },
                {
                  step: "02",
                  icon: Layers,
                  title: "Business Buildout",
                  desc: "We build your brand, website, and complete business infrastructure — including systems, automation, and positioning.",
                  dark: false,
                },
                {
                  step: "03",
                  icon: Rocket,
                  title: "Lead Generation Launch",
                  desc: "We activate your lead generation systems to start bringing in real customer inquiries.",
                  dark: true,
                },
                {
                  step: "04",
                  icon: BarChart3,
                  title: "Optimize & Scale",
                  desc: "We refine performance, improve conversions, and scale your customer acquisition over time.",
                  dark: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 ${
                    item.dark
                      ? "bg-[#1B2A45]"
                      : "bg-white lg:mt-14"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-3xl font-extrabold ${item.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.dark ? "bg-[#1DD1A1]/15" : "bg-[#1B2A45]/7"
                    }`}>
                      <item.icon className={`w-5 h-5 ${item.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`} />
                    </div>
                  </div>
                  <h3 className={`text-lg font-extrabold leading-snug ${item.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 ${item.dark ? "text-white/60" : "text-[#1B2A45]/55"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            6 ─ RESULTS TIMELINE
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Expected Results
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4">
                What You Can Expect
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { time: "30–60 Days", result: "Initial leads begin", pct: 33 },
                { time: "3–6 Months", result: "Consistent client flow", pct: 66 },
                { time: "6–12 Months", result: "Scalable, stable revenue", pct: 100 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative bg-[#1B2A45] rounded-3xl p-8 text-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Progress glow bar */}
                  <div className="absolute bottom-0 left-0 h-1.5 bg-[#1DD1A1] transition-all duration-700" style={{ width: `${item.pct}%` }} />

                  <div className="text-[#1DD1A1] text-sm font-bold uppercase tracking-wider mb-3">
                    {item.time}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">{item.result}</h3>
                  <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#1DD1A1]/30 flex items-center justify-center mt-4">
                    <span className="text-lg font-extrabold text-[#1DD1A1]">{item.pct}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-center text-sm text-[#1B2A45]/50 mt-8 italic"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Actual results depend on market, budget, and execution.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            7 ─ WHAT YOU GET
        ══════════════════════════════════════════════════════════ */}
        <section id="system" className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                System Breakdown
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-6">
                What You Walk Away With
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Instead of just "assets," you walk away with a fully operational business designed to generate and convert demand in your market.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {[
                "A business that consistently generates qualified leads",
                "A system that converts inquiries into paying customers",
                "A structured pipeline that keeps your calendar filled",
                "A brand positioned to compete with established franchises",
                "Automated follow-ups so opportunities are not missed",
                "A scalable foundation built for long-term growth",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#1DD1A1]/40 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1DD1A1]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#1DD1A1]" />
                  </div>
                  <p className="text-white font-semibold text-base leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-center text-lg md:text-xl font-bold text-[#1DD1A1] mt-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              This is not a collection of tools — it's a functioning business system.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            8 ─ COST COMPARISON
        ══════════════════════════════════════════════════════════ */}
        <section id="pricing" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Investment Comparison
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4">
                Franchise vs. Custom-Built Business
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Franchise Column */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 bg-[#1B2A45]/5 border-2 border-[#1B2A45]/10 relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-extrabold text-[#1B2A45]/60 mb-1">Franchise</h3>
                  <p className="text-sm text-[#1B2A45]/40">Traditional Model</p>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Upfront Cost", value: "$120K–$150K+" },
                    { label: "Royalties", value: "6–10% ongoing" },
                    { label: "Flexibility", value: "Limited" },
                    { label: "Systems", value: "Fixed / predetermined" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-[#1B2A45]/10 last:border-0">
                      <span className="text-sm font-semibold text-[#1B2A45]/60">{row.label}</span>
                      <span className="text-base font-extrabold text-red-400">{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* With Us Column */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 bg-[#1B2A45] border-2 border-[#1DD1A1]/40 relative shadow-2xl shadow-[#1DD1A1]/10"
              >
                {/* Recommended badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1DD1A1] text-[#1B2A45] text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-extrabold text-white mb-1">With Us</h3>
                  <p className="text-sm text-white/50">Custom-Built Model</p>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Upfront Cost", value: "$45K–$65K" },
                    { label: "Royalties", value: "No royalties" },
                    { label: "Flexibility", value: "Full ownership" },
                    { label: "Systems", value: "Custom-built for your market" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/60">{row.label}</span>
                      <span className="text-base font-extrabold text-[#1DD1A1]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            9 ─ RISK REVERSAL
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeUp}>
                <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                  Our Commitment
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-6">
                  Built for Growth, Not Guesswork
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                  We don't just build your business — we support you through the critical early stages.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
                variants={stagger}
              >
                {[
                  { icon: Clock, label: "6 months of support included" },
                  { icon: Target, label: "Strategy and execution guidance" },
                  { icon: Zap, label: "Performance-focused implementation" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.04] border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1DD1A1]/15 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#1DD1A1]" />
                    </div>
                    <p className="text-white font-bold text-base">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Guarantee Box */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border-2 border-[#1DD1A1]/40 bg-[#1DD1A1]/[0.06] p-8 md:p-10 max-w-2xl mx-auto"
              >
                <Shield className="w-10 h-10 text-[#1DD1A1] mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Our Guarantee</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  We guarantee full system deployment and active lead generation within the first <span className="text-[#1DD1A1] font-bold">60–90 days</span>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            10 ─ FINAL CTA + INLINE FORM
        ══════════════════════════════════════════════════════════ */}
        <section id="contact" className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              className="text-center mb-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mb-4">
                Let's Build Your Business
              </h2>
              <p className="text-[#1B2A45]/60 text-lg max-w-2xl mx-auto">
                Book a strategy call to explore your market, business model, and growth plan.
              </p>
            </motion.div>

            {/* Inline Form */}
            <motion.div
              className="max-w-2xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 shadow-2xl space-y-5"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="dlp1-name" className="text-sm font-medium text-gray-400 block">Full Name</label>
                    <input
                      type="text"
                      id="dlp1-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dlp1-email" className="text-sm font-medium text-gray-400 block">Email Address</label>
                    <input
                      type="email"
                      id="dlp1-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="dlp1-phone" className="text-sm font-medium text-gray-400 block">Phone Number</label>
                  <input
                    type="tel"
                    id="dlp1-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="dlp1-budget" className="text-sm font-medium text-gray-400 block">Budget Range</label>
                    <div className="relative">
                      <select
                        id="dlp1-budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-600">Select budget...</option>
                        <option value="$25K–$50K" className="bg-[#111] text-white">$25K–$50K</option>
                        <option value="$50K–$75K" className="bg-[#111] text-white">$50K–$75K</option>
                        <option value="$75K+" className="bg-[#111] text-white">$75K+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dlp1-timeline" className="text-sm font-medium text-gray-400 block">Timeline</label>
                    <div className="relative">
                      <select
                        id="dlp1-timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-600">Select timeline...</option>
                        <option value="ASAP" className="bg-[#111] text-white">ASAP</option>
                        <option value="1–3 months" className="bg-[#111] text-white">1–3 months</option>
                        <option value="3–6 months" className="bg-[#111] text-white">3–6 months</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label htmlFor="dlp1-business" className="text-sm font-medium text-gray-400 block">
                    What type of business are you considering?
                  </label>
                  <textarea
                    id="dlp1-business"
                    name="business_type"
                    rows={3}
                    value={formData.business_type}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all resize-none"
                    placeholder="e.g. Home services, cleaning, tutoring, fitness..."
                  />
                </div>

                {/* SMS Consent */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="dlp1-sms"
                      name="sms_consent"
                      type="checkbox"
                      required
                      checked={formData.sms_consent}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-white/20 bg-zinc-900 text-[#1DD1A1] focus:ring-[#1DD1A1] transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="text-[11px] leading-relaxed text-gray-400">
                    <label htmlFor="dlp1-sms" className="cursor-pointer">
                      I consent to receive automated text messages from ClienTech Solutions LLC for service updates and marketing.
                      Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help.
                      <br />
                      View our <a href="/privacy-policy" className="text-[#1DD1A1] hover:underline" target="_blank">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-[#1DD1A1] hover:underline" target="_blank">Terms of Service</a>.
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group bg-[#1DD1A1] text-[#1B2A45] font-extrabold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,209,161,0.3)] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>Submitting... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Book Your Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

      </main>
      <CleansyFooter />
    </div>
  );
}
