import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, ArrowRight, XCircle,
  Rocket, BarChart3, TrendingUp,
  Shield, Clock, Zap, Target,
  Loader2, ChevronRight, PlayCircle,
  DollarSign, Lock, Shuffle, HelpCircle,
  Users, Lightbulb, AlertTriangle,
  CalendarCheck, Search, Map, Wrench, UserPlus
} from "lucide-react";
import { CleansyHeader } from "@/components/cleansy/CleansyHeader";
import CleansyFooter from "@/components/cleansy/CleansyFooter";
import AnimatedHeading from "@/components/cleansy/AnimatedHeading";
import FAQAccordion from "@/components/cleansy/FAQAccordion";
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
   DLP 2 — Franchise Alternative Landing Page v2
   ════════════════════════════════════════════════════════════ */
export default function DLP_2() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ─── Form state ─── */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_interest: "",
    timeline: "",
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
          service: "DLP2 — Franchise Alternative Strategy Call",
          message: `Phone: ${formData.phone}\nBusiness Interest: ${formData.business_interest}\nTimeline: ${formData.timeline}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Application Submitted!", {
        description: "We'll review your application and be in touch within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", business_interest: "", timeline: "", sms_consent: false });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed", {
        description: "Please try again or email us at info@clientechsolutions.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* helper: scroll to booking section */
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <CleansyHeader
        navItems={[
          { name: "About", href: "#about" },
          { name: "Services", href: "#value" },
          { name: "Our Solution", href: "#results" },
          { name: "Process", href: "#how-it-works" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "Contact", href: "#booking" },
        ]}
        ctaHref="#booking"
      />
      <main className="flex-grow">

        {/* ═══════════════════════════════════════════════════════
            1 ─ HERO SECTION
        ══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]" style={gridBg}>
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c0a3]/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 max-w-7xl w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-8 xl:gap-16 items-center">

              {/* Left — Text */}
              <motion.div
                className="flex flex-col items-start"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="mb-5">
                  <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase">
                    Franchise Alternative
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="font-extrabold leading-snug text-white mb-6">
                  <span className="block text-3xl md:text-4xl lg:text-5xl mb-3">
                    Start a Cash-Flowing Service Business
                  </span>
                  <span className="block mb-3">
                    <AnimatedHeading
                      prefix=""
                      words={["Without a Franchise", "Without Guessing", "With Proven Systems"]}
                      postfix=""
                      className="!text-3xl md:!text-4xl lg:!text-5xl !text-[#00c0a3]"
                    />
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed max-w-xl mb-8">
                  We build and launch your service-based business with proven systems, so you can start generating clients and revenue without starting from scratch.
                </motion.p>

                {/* Bullet points */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
                  {[
                    "No franchise fees or restrictions",
                    "Done-for-you systems and setup",
                    "Built for fast client acquisition",
                    "Designed for scalability",
                  ].map((item) => (
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
                    onClick={scrollToBooking}
                    className="bg-[#00c0a3] text-white text-base font-bold px-10 py-5 rounded-2xl hover:bg-[#1b273d] transition-colors duration-300 shadow-xl"
                  >
                    Apply for a Strategy Call
                  </button>
                  <ContactModal defaultService="DLP2 — Franchise Alternative Strategy Call">
                    <div className="border-2 border-white/20 text-white text-base font-bold px-8 py-5 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-pointer">
                      Learn More
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
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop"
                    alt="Business owner planning strategy"
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
                  <div className="text-4xl font-extrabold text-[#1DD1A1] mb-1">500+</div>
                  <p className="text-[#1b273d] font-extrabold text-base leading-tight">Businesses Launched</p>
                  <p className="text-xs text-gray-500 mt-0.5">Using our proven systems</p>
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
            2 ─ VIDEO SECTION
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden" id="about">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Watch First
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4 mb-4">
                Watch This Before Booking Your Call
              </h2>
              <p className="text-[#1B2A45]/60 text-lg max-w-2xl mx-auto leading-relaxed">
                This short video explains how our system works, who it's for, and what you can expect.
              </p>
            </motion.div>

            <motion.div
              className="relative max-w-3xl mx-auto"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Video placeholder — replace src with actual video embed */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#1B2A45] border-2 border-[#1B2A45]/20">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#1DD1A1]/20 flex items-center justify-center cursor-pointer hover:bg-[#1DD1A1]/30 transition-colors duration-300 group">
                    <PlayCircle className="w-12 h-12 text-[#1DD1A1] group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white/60 text-sm font-medium">Video Coming Soon</p>
                </div>
                {/* 
                  Replace the above placeholder with your actual video embed:
                  <iframe 
                    src="YOUR_VIDEO_URL" 
                    className="absolute inset-0 w-full h-full" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen 
                  />
                */}
              </div>
              {/* Decorative glow below video */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#1DD1A1]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            3 ─ PROBLEM + REFRAME
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 overflow-hidden bg-[#0A0A0A] relative" id="results" style={gridBg}>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-6">
                Two Paths. Both Broken.
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Most people trying to start a business fall into one of two paths:
              </p>
            </motion.div>

            {/* Two-Path Comparison */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Path 1: Buy a Franchise */}
              <motion.div
                variants={slideLeft}
                className="rounded-3xl p-8 border border-red-500/20 bg-red-500/[0.04]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Buy a Franchise</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: AlertTriangle, text: "High upfront cost" },
                    { icon: TrendingUp, text: "Ongoing fees" },
                    { icon: Lock, text: "Limited flexibility" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400/80 shrink-0" />
                      <span className="text-white/70 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Path 2: Start from Scratch */}
              <motion.div
                variants={slideRight}
                className="rounded-3xl p-8 border border-red-500/20 bg-red-500/[0.04]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Start from Scratch</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Shuffle, text: "No clear direction" },
                    { icon: AlertTriangle, text: "Trial and error" },
                    { icon: Clock, text: "Slow or no results" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400/80 shrink-0" />
                      <span className="text-white/70 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* The Third Option */}
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-3xl border-2 border-[#1DD1A1]/40 bg-[#1DD1A1]/[0.06] p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1DD1A1]/15 flex items-center justify-center mx-auto mb-5">
                  <Zap className="w-7 h-7 text-[#1DD1A1]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  We Built a <span className="text-[#1DD1A1]">Third Option.</span>
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
                  A structured, done-for-you business system that gives you the speed of a franchise without the limitations,
                  and the control of your own business without the confusion.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            4 ─ OUTCOME-BASED VALUE
        ══════════════════════════════════════════════════════════ */}
        <section id="value" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Deliverables
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4 mb-6">
                What You Actually Get
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {[
                { icon: Target, text: "A fully structured service-based business model tailored for your market" },
                { icon: Wrench, text: "Done-for-you setup — branding, systems, and foundational assets" },
                { icon: Users, text: "Client acquisition systems designed to bring in leads" },
                { icon: Map, text: "Clear roadmap to your first paying customers" },
                { icon: BarChart3, text: "Scalable structure so you can grow beyond a single income stream" },
                { icon: Lightbulb, text: "Ongoing guidance on operations and growth" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#1B2A45] hover:bg-[#1B2A45]/90 transition-colors duration-300 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1DD1A1]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-[#1DD1A1]" />
                  </div>
                  <p className="text-white font-semibold text-base leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            5 ─ DIFFERENTIATION
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4">
                Why This Is Different
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Not a Franchise */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 bg-[#1B2A45] shadow-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-5">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">This is not a franchise.</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  You don't pay ongoing royalties or operate under someone else's brand. You own everything.
                </p>
              </motion.div>

              {/* Not DIY */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 bg-[#1B2A45] shadow-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-5">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">This is not DIY.</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  You're not left guessing what works or wasting months figuring things out on your own.
                </p>
              </motion.div>

              {/* Hybrid Model */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 bg-[#1B2A45] border-2 border-[#1DD1A1]/40 shadow-2xl shadow-[#1DD1A1]/10 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1DD1A1]/15 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6 text-[#1DD1A1]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1DD1A1] mb-3">This is a hybrid model.</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A business built for you, with systems that are already proven, and the flexibility to scale it your way.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            6 ─ WHO THIS IS FOR / NOT FOR
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* WHO THIS IS FOR */}
              <motion.div variants={slideLeft} className="rounded-3xl p-8 bg-[#1B2A45] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1DD1A1]/15 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#1DD1A1]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Who This Is For</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Individuals serious about building a service-based business",
                    "People willing to invest time and effort into growth",
                    "Those looking for a structured, proven path instead of guessing",
                    "Operators who want control, not just ownership in name",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1DD1A1]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1DD1A1]" />
                      </div>
                      <span className="text-white/80 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WHO THIS IS NOT FOR */}
              <motion.div variants={slideRight} className="rounded-3xl p-8 bg-[#1B2A45]/5 border-2 border-[#1B2A45]/10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1B2A45]">Who This Is Not For</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "People looking for \"get rich quick\" opportunities",
                    "Those unwilling to take action",
                    "Anyone expecting passive income without involvement",
                    "Individuals not ready to invest in building a business",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-[#1B2A45]/70 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            7 ─ PROCESS OVERVIEW
        ══════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4">
                How It Works
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { step: "01", icon: CalendarCheck, title: "Apply for a strategy call", desc: "Fill out a short application so we can learn about your goals and background." },
                { step: "02", icon: Search, title: "We assess your goals, market, and fit", desc: "Our team evaluates whether this model aligns with your experience, market, and ambitions." },
                { step: "03", icon: Map, title: "If qualified, we map out your business launch plan", desc: "We create a custom roadmap tailored to your market with clear milestones and deliverables." },
                { step: "04", icon: Wrench, title: "We build and launch your system", desc: "Our team handles branding, systems, automation, and your entire business infrastructure." },
                { step: "05", icon: UserPlus, title: "You start acquiring clients and scaling", desc: "With your system live, you begin generating leads, closing clients, and growing revenue." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-6 p-6 md:p-8 rounded-3xl bg-[#1B2A45] shadow-2xl hover:-translate-y-1 transition-transform duration-300 group"
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-3xl font-extrabold text-[#1DD1A1]">{item.step}</span>
                    {i < 4 && <div className="w-px h-6 bg-[#1DD1A1]/20 mt-2 hidden md:block" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-[#1DD1A1]/15 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#1DD1A1]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-[52px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            8 ─ CALL BOOKING SECTION (CONVERSION)
        ══════════════════════════════════════════════════════════ */}
        <section id="booking" className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              className="text-center mb-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mb-4">
                Apply for a Strategy Call
              </h2>
              <p className="text-[#1B2A45]/60 text-lg max-w-2xl mx-auto">
                This is a short call to see if this model is the right fit for you. If it is, we'll walk you through the next steps.
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
                    <label htmlFor="dlp2-name" className="text-sm font-medium text-gray-400 block">Full Name</label>
                    <input
                      type="text"
                      id="dlp2-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dlp2-email" className="text-sm font-medium text-gray-400 block">Email Address</label>
                    <input
                      type="email"
                      id="dlp2-email"
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
                  <label htmlFor="dlp2-phone" className="text-sm font-medium text-gray-400 block">Phone Number</label>
                  <input
                    type="tel"
                    id="dlp2-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="dlp2-timeline" className="text-sm font-medium text-gray-400 block">How soon are you looking to start?</label>
                  <div className="relative">
                    <select
                      id="dlp2-timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-600">Select timeline...</option>
                      <option value="Immediately" className="bg-[#111] text-white">Immediately</option>
                      <option value="1–3 months" className="bg-[#111] text-white">1–3 months</option>
                      <option value="3–6 months" className="bg-[#111] text-white">3–6 months</option>
                      <option value="Just exploring" className="bg-[#111] text-white">Just exploring</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Business Interest */}
                <div className="space-y-2">
                  <label htmlFor="dlp2-business" className="text-sm font-medium text-gray-400 block">
                    What type of service business interests you?
                  </label>
                  <textarea
                    id="dlp2-business"
                    name="business_interest"
                    rows={3}
                    value={formData.business_interest}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1DD1A1] focus:ring-1 focus:ring-[#1DD1A1] transition-all resize-none"
                    placeholder="e.g. Cleaning, HVAC, landscaping, consulting, tutoring..."
                  />
                </div>

                {/* SMS Consent */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="dlp2-sms"
                      name="sms_consent"
                      type="checkbox"
                      required
                      checked={formData.sms_consent}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-white/20 bg-zinc-900 text-[#1DD1A1] focus:ring-[#1DD1A1] transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="text-[11px] leading-relaxed text-gray-400">
                    <label htmlFor="dlp2-sms" className="cursor-pointer">
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
                      <>Apply for a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
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

        {/* ═══════════════════════════════════════════════════════
            9 ─ WHAT PEOPLE SAY (TESTIMONIALS)
        ══════════════════════════════════════════════════════════ */}
        <section id="testimonials" className="py-24 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                What People Say
              </h2>
              <div className="w-16 h-1 bg-[#1DD1A1] rounded-full mx-auto" />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {[
                {
                  quote: "The automation workflows implemented by ClienTech reduced our manual overhead by 40%. Their systems architecture is world-class and built for true enterprise scale.",
                  name: "Sarah Johnson",
                  role: "Operations Director",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  quote: "Scaling our AI infrastructure was seamless. The team doesn't just write code; they build digital foundations that actually support growth and predictable revenue.",
                  name: "Marcus Chen",
                  role: "CTO, Fintech Solutions",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  quote: "From lead generation to fulfillment automation, the integration was flawless. We've seen a 3x increase in processing speed since launching our new unified ecosystem.",
                  name: "Elena Rodriguez",
                  role: "Head of Growth",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-3xl p-8 bg-[#111] border border-white/10 hover:border-[#1DD1A1]/30 transition-colors duration-300 flex flex-col"
                >
                  {/* Quote icon */}
                  <div className="text-[#1DD1A1] text-5xl font-serif leading-none mb-4 select-none">
                    &ldquo;&ldquo;
                  </div>

                  {/* Quote text */}
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-3 ring-2 ring-[#1DD1A1]/30">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white font-extrabold text-sm">{t.name}</p>
                    <p className="text-[#1DD1A1] text-xs font-semibold uppercase tracking-widest mt-1">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            10 ─ FAQ SECTION
        ══════════════════════════════════════════════════════════ */}
        <section id="faq" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-[#1DD1A1] rounded-full mx-auto mb-4" />
              <p className="text-[#1B2A45]/60 text-lg max-w-xl mx-auto">
                Have questions? We have answers.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <FAQAccordion
                items={[
                  {
                    id: "1",
                    question: "Is this a franchise?",
                    answer: "No. You own 100% of your business. There are no franchise fees, no royalties, and no restrictions on how you run it. We provide the proven systems and setup — you keep full control and ownership."
                  },
                  {
                    id: "2",
                    question: "What kind of business will I be starting?",
                    answer: "A service-based business tailored for your local market. This could range from home services, cleaning, consulting, tutoring, senior care, and more — depending on your goals, market, and background."
                  },
                  {
                    id: "3",
                    question: "Do I need prior business experience?",
                    answer: "No prior experience is required, but you do need to be serious about putting in the work. Our system provides the structure, training, and systems — you bring the commitment."
                  },
                  {
                    id: "4",
                    question: "How much does it cost to get started?",
                    answer: "Investment details are discussed during the strategy call, as packages vary based on your market and goals. This is not a get-rich-quick scheme — it's a real business investment."
                  },
                  {
                    id: "5",
                    question: "How quickly can I start generating revenue?",
                    answer: "Many clients begin acquiring customers within the first few weeks after launch. However, building a sustainable, scalable business typically takes 60–90 days for full momentum."
                  },
                  {
                    id: "6",
                    question: "What's included in the done-for-you setup?",
                    answer: "We handle your branding, website, client acquisition systems, CRM setup, automation workflows, and provide a clear operational roadmap. You get everything you need to launch and start serving clients."
                  }
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            11 ─ SCARCITY / FRICTION
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-[#0A0A0A] overflow-hidden" style={gridBg}>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeUp} className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1DD1A1]/15 flex items-center justify-center mx-auto mb-5">
                  <Shield className="w-7 h-7 text-[#1DD1A1]" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Before You Book</h3>
              </motion.div>

              <motion.div
                variants={stagger}
                className="space-y-4 mb-8"
              >
                {[
                  "Due to demand, we only take on a limited number of new clients.",
                  "Missed or no-show appointments will not be rescheduled.",
                  "Please only book if you are serious about moving forward.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 justify-center p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-xl mx-auto"
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                    <p className="text-white/70 text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  onClick={scrollToBooking}
                  className="bg-[#00c0a3] text-white text-base font-bold px-10 py-5 rounded-2xl hover:bg-[#1b273d] transition-colors duration-300 shadow-xl"
                >
                  Apply Now — Limited Spots Available
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <CleansyFooter />
    </div>
  );
}
