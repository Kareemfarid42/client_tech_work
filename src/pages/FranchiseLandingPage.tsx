import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendarCheck } from "lucide-react";
import {
    AnimatedHeading,
    RatingStars,
    CompanyLogos,
    FAQAccordion,
} from "@/components/sections/FranchiseInlineComponents";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6, ease: "backOut" as const } },
};

// ─── FranchiseLandingPage ─────────────────────────────────────────────────────
const FranchiseLandingPage = () => {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />

            {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
                style={{ backgroundColor: "#dce9f0" }}
            >
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-8 xl:gap-16 items-center">

                        {/* LEFT — TEXT */}
                        <motion.div
                            className="flex flex-col items-start"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                        >
                            <motion.h1 variants={fadeUpVariant} className="font-extrabold leading-snug text-[#00c0a3] mb-5">
                                <span className="block text-4xl md:text-5xl mb-3 whitespace-nowrap">
                                    Marketing for
                                </span>
                                <span className="block mb-3">
                                    <AnimatedHeading
                                        prefix=""
                                        words={["Franchises", "Growth", "Scale"]}
                                        postfix=""
                                        className="!text-4xl md:!text-5xl !text-[#00c0a3]"
                                    />
                                </span>
                                <span className="block text-4xl md:text-5xl">
                                    That Drive Revenue
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeUpVariant} className="text-[#1b273d] text-lg font-bold mb-3">
                                Inconsistent Leads? Let's Fix That.
                            </motion.p>

                            <motion.p variants={fadeUpVariant} className="text-[#1b273d]/65 text-sm leading-relaxed max-w-sm mb-10">
                                We help franchise systems and independent franchise operators like home services,
                                fitness studios, tutoring centers, and senior care companies build scalable digital
                                foundations — combining strategy and conversion systems that drive sustainable growth.
                            </motion.p>

                            <motion.div variants={fadeUpVariant} className="flex items-center gap-5 mb-10">
                                <Link to="/contact" className="flex items-center gap-3 group">
                                    <div className="w-12 h-12 rounded-full bg-[#00c0a3] flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#1b273d] transition-colors duration-300">
                                        <CalendarCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-[#1b273d] font-semibold text-sm group-hover:text-[#00c0a3] transition-colors">
                                        Book a Strategy Call
                                    </span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-[#1b273d] text-white text-sm font-bold px-7 py-3 rounded-xl hover:bg-[#00c0a3] transition-colors duration-300 shadow-md"
                                >
                                    Get a Free Growth Audit
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT — IMAGE */}
                        <div className="relative flex justify-center lg:justify-end self-end">
                            <motion.div
                                variants={slideInRight}
                                initial="hidden"
                                animate={heroInView ? "visible" : "hidden"}
                                className="relative z-10 w-full max-w-[460px] overflow-hidden shadow-2xl"
                                style={{ borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px" }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop"
                                    alt="Franchise Growth Marketing Team"
                                    className="object-cover w-full h-full"
                                    style={{ aspectRatio: "460 / 580" }}
                                />
                            </motion.div>

                            {/* Social Proof Card */}
                            <motion.div
                                variants={popIn}
                                initial="hidden"
                                animate={heroInView ? "visible" : "hidden"}
                                className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white rounded-2xl shadow-2xl p-5 w-[240px]"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex -space-x-3">
                                        {[31, 32, 33].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shrink-0">
                                                <img
                                                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                                                    alt="Franchise Owner"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-[#00c0a3] flex items-center justify-center font-bold text-white text-xs shrink-0 z-10">
                                            +40
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#1b273d] font-extrabold text-base leading-tight">40+ Franchise Clients</p>
                                <p className="text-xs text-gray-500 mt-0.5 mb-2">Trusted by franchise owners</p>
                                <RatingStars rating={5} size={15} />
                            </motion.div>

                            {/* Decorative arch */}
                            <div
                                className="absolute top-4 left-0 right-0 mx-auto w-[420px] h-[520px] bg-[#00c0a3]/10 -z-10"
                                style={{ borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          COMPANY LOGOS
      ══════════════════════════════════════════════ */}
            <section className="bg-white py-10 overflow-hidden">
                <CompanyLogos
                    title="Trusted by Leading Franchise Systems"
                    logos={[
                        { id: 1, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo1.png" },
                        { id: 2, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo2.png" },
                        { id: 3, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo3.png" },
                        { id: 4, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo4.png" },
                    ]}
                />
            </section>

            {/* ══════════════════════════════════════════════
          WHAT WE DO
      ══════════════════════════════════════════════ */}
            <section
                className="relative py-24 overflow-hidden"
                style={{
                    background: "#dce9f0",
                    backgroundImage:
                        "linear-gradient(rgba(27,42,69,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,42,69,0.05) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            >
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-20"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
                            What We Do
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4 mb-5">
                            A Complete Digital Growth<br className="hidden md:block" /> System for Franchises
                        </h2>
                        <p className="text-[#1B2A45]/65 text-lg max-w-2xl mx-auto leading-relaxed">
                            We help franchise brands build scalable lead systems, automated follow-up, and digital
                            foundations that drive measurable location-level growth.
                        </p>
                    </motion.div>

                    {/* Staggered Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                dark: true,
                                title: "Digital Foundation & Positioning",
                                desc: "We build or fix the digital base your franchise grows on — stronger brand authority, higher conversions, scalable growth.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                ),
                                offset: false,
                            },
                            {
                                dark: false,
                                title: "Lead Generation",
                                desc: "Consistent, trackable leads across every territory. Predictable cost-per-lead, more booked appointments, better ROI.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                                    </svg>
                                ),
                                offset: true,
                            },
                            {
                                dark: true,
                                title: "Automation & Follow-Up Systems",
                                desc: "Stop leads slipping through the cracks. Higher show-up rates, more closed deals, far less manual chaos at every location.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                offset: false,
                            },
                            {
                                dark: false,
                                title: "Growth & Performance Optimization",
                                desc: "Turn marketing data into scalable decisions. Lower acquisition cost, smarter scaling, happier franchisees across all locations.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                ),
                                offset: true,
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUpVariant}
                                className={`rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 ${card.dark ? "bg-[#1B2A45]" : "bg-white shadow-xl"} ${card.offset ? "lg:mt-14" : ""}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.dark ? "bg-[#1DD1A1]/15" : ""}`} style={!card.dark ? { backgroundColor: "rgba(27,42,69,0.07)" } : {}}>
                                    {card.icon}
                                </div>
                                <h3 className={`text-lg font-extrabold leading-snug ${card.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>{card.title}</h3>
                                <p className={`text-sm leading-relaxed flex-1 ${card.dark ? "text-white/60" : "text-[#1B2A45]/55"}`}>{card.desc}</p>
                                <span className={`inline-flex items-center gap-1 font-bold text-sm cursor-pointer hover:gap-2 transition-all ${card.dark ? "text-[#1DD1A1]" : "text-[#1B2A45] hover:text-[#1DD1A1]"}`}>
                                    Learn more →
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Center Image + Floating Pills */}
                    <div className="relative max-w-3xl mx-auto mt-28 flex justify-center">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-[#1DD1A1]/12 blur-3xl -z-10" />
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop&crop=top"
                                alt="ClienTech Marketing Expert"
                                className="object-cover object-top rounded-3xl shadow-2xl w-[320px]"
                                style={{ maxHeight: 440 }}
                            />
                        </motion.div>

                        {/* Pill 1 — Left */}
                        <motion.div
                            className="hidden md:flex absolute top-1/4 -left-4 lg:-left-24 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[220px]"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            animate={{ y: [0, -10, 0] }}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-[#1DD1A1]/50">
                                <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="James R." className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Doubled our lead volume!&rdquo;</p>
                                <p className="text-[#1DD1A1] text-[10px] font-semibold mt-0.5">James R.</p>
                            </div>
                        </motion.div>

                        {/* Pill 2 — Right */}
                        <motion.div
                            className="hidden md:flex absolute top-1/3 -right-4 lg:-right-24 z-20 bg-[#1DD1A1] rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[220px]"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            animate={{ y: [0, -10, 0] }}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white/40">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah M." className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Best ROI we&apos;ve seen.&rdquo;</p>
                                <p className="text-[#1B2A45]/60 text-[10px] font-semibold mt-0.5">Sarah M.</p>
                            </div>
                        </motion.div>

                        {/* Pill 3 — Bottom */}
                        <motion.div
                            className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[250px]"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            animate={{ y: [-6, 4, -6] }}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-[#1DD1A1]/50">
                                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="David C." className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Seamless automation setup.&rdquo;</p>
                                <p className="text-[#1DD1A1] text-[10px] font-semibold mt-0.5">David C.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="text-center mt-28"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#1B2A45] max-w-4xl mx-auto leading-tight mb-8">
                            See inconsistent leads hurting your franchise? Hire our team — no stress, just growth.
                        </h3>
                        <Link
                            to="/contact"
                            className="bg-[#1B2A45] text-white font-bold px-10 py-4 rounded-full text-base hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 shadow-xl inline-flex items-center gap-2 group"
                        >
                            Let's chat <span className="text-xl group-hover:rotate-12 transition-transform duration-300">💬</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          ABOUT / BUILT FOR FRANCHISE GROWTH
      ══════════════════════════════════════════════ */}
            <section className="py-20 lg:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Image */}
                        <motion.div
                            className="relative"
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="relative z-10 rounded-[20px] rounded-br-[200px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
                                    alt="Franchise Growth Team"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <div className="absolute top-10 -left-10 z-20 bg-[#1B2A45] p-8 rounded-[20px] shadow-xl max-w-[250px] hidden md:block">
                                <div className="text-4xl font-extrabold text-[#1DD1A1] mb-2">20+</div>
                                <div className="text-white font-bold text-lg leading-tight">Years of Experience</div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10" />
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            className="flex flex-col items-start"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                                Built for Franchise Growth
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6 leading-tight">
                                We Build the Digital Infrastructure Behind Scalable Franchises
                            </h2>
                            <p className="text-[#1B2A45]/80 text-lg mb-8 leading-relaxed">
                                Franchise growth is complex. Balancing brand consistency, local marketing, lead quality,
                                franchisee satisfaction, and ROI isn't easy — especially when every location performs
                                differently. We help franchise brands and independent franchise owners build strong digital
                                foundations, scalable lead systems, and automated follow-up processes that drive measurable,
                                location-level growth. This isn't just marketing. It's a digital transformation built for
                                franchise scale.
                            </p>
                            <div className="flex flex-col gap-4 mb-10 w-full">
                                {[
                                    "Built for Multi-Location Models",
                                    "Lead Generation + Automation",
                                    "Transparent, Location-Level Reporting",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-[15px] bg-[#F0F4F8] hover:bg-[#1DD1A1]/20 transition-colors duration-300">
                                        <div className="w-8 h-8 rounded-full bg-[#1B2A45] flex items-center justify-center text-[#1DD1A1] shrink-0">
                                            <span className="font-bold">✓</span>
                                        </div>
                                        <span className="text-[#1B2A45] font-bold text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/contact"
                                className="bg-[#1B2A45] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 shadow-lg"
                            >
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          STATISTICS
      ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#1B2A45] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png"
                        alt="Background"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "40+", label: "Happy Clients" },
                            { number: "250+", label: "Projects Done" },
                            { number: "50+", label: "Employees" },
                            { number: "7+", label: "Award Winner" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center"
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <span className="text-4xl md:text-5xl font-extrabold text-[#1DD1A1] mb-2">{stat.number}</span>
                                <span className="text-lg font-bold text-white/90">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-14"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <span className="text-white font-bold text-sm mb-4 bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase">
                            Client Results
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mt-5 mb-3">
                            What Franchise Owners Say
                        </h2>
                        <p className="text-[#1B2A45]/55 text-lg">
                            Real experiences. <strong className="text-[#1B2A45]">Real results.</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            {
                                name: "James Rodriguez",
                                role: "Home Services Franchise Owner",
                                quote: "CTS transformed our lead generation completely. We went from inconsistent results to a predictable pipeline of qualified leads across all 3 locations.",
                                img: "https://randomuser.me/api/portraits/men/20.jpg",
                            },
                            {
                                name: "Sarah Mitchell",
                                role: "Fitness Studio Franchisee",
                                quote: "The automation systems they set up saved us hours every week. Show-up rates doubled and cost-per-acquisition dropped by 40%.",
                                img: "https://randomuser.me/api/portraits/women/44.jpg",
                            },
                            {
                                name: "David Chen",
                                role: "Senior Care Franchise Director",
                                quote: "CTS understands the franchise model. Systems that work at both corporate level and for each individual location. Transparent reporting too.",
                                img: "https://randomuser.me/api/portraits/men/54.jpg",
                            },
                        ].map((t, i) => (
                            <motion.div key={i} variants={fadeUpVariant} className="flex flex-col gap-4">
                                <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: "4/3" }}>
                                    <img src={t.img} alt={t.name} className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-[#1B2A45]/30 group-hover:bg-[#1B2A45]/50 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#1DD1A1] transition-all duration-300">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#1B2A45] ml-1 group-hover:text-white transition-colors duration-300">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-[#1B2A45] text-lg leading-snug">{t.name}</h4>
                                    <p className="text-[#1DD1A1] font-semibold text-sm mb-2">{t.role}</p>
                                    <p className="text-[#1B2A45]/60 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                                FAQs
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-[#1B2A45]/80 text-lg mb-8 leading-relaxed">
                                Book a strategy call and we'll assess your current digital infrastructure, lead flow,
                                and growth opportunities.
                            </p>
                            <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden mt-8 hidden lg:block">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                                    alt="Franchise Strategy Session"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-[#1B2A45]/30" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[15px] text-center">
                                    <p className="font-bold text-[#1B2A45] mb-1">Still Have Questions About Scaling Your Franchise?</p>
                                    <Link to="/contact" className="text-[#1B2A45] font-extrabold hover:text-[#1DD1A1] underline transition-colors">
                                        Book a Growth Strategy Session
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <FAQAccordion
                                items={[
                                    {
                                        id: "1",
                                        question: "Do you work with franchisors or individual franchise owners?",
                                        answer: "We support both centralized franchise brands and independent franchise owners. Whether marketing is controlled at the corporate level or managed locally, we build systems that align brand consistency with location-level performance.",
                                    },
                                    {
                                        id: "2",
                                        question: "Can you generate leads for individual franchise locations?",
                                        answer: "Yes. We create territory-based campaigns using Google Ads, Meta Ads, and local landing pages designed to drive high-quality leads specific to each franchise location.",
                                    },
                                    {
                                        id: "3",
                                        question: "How do you ensure brand consistency across locations?",
                                        answer: "We build structured digital foundations — including standardized messaging, conversion frameworks, and tracking systems — while allowing flexibility for local targeting and budget control.",
                                    },
                                    {
                                        id: "4",
                                        question: "Do you offer CRM setup and automation?",
                                        answer: "Absolutely. We implement CRM systems, automated follow-ups (SMS & email), missed-call text-back, pipeline tracking, and performance dashboards to ensure no lead is wasted.",
                                    },
                                    {
                                        id: "5",
                                        question: "How do you measure ROI for franchise marketing?",
                                        answer: "We track every click, call, form submission, and booked appointment. Our reporting provides visibility at both the campaign level and location level so you know exactly what's working.",
                                    },
                                    {
                                        id: "6",
                                        question: "How quickly can we see results?",
                                        answer: "Paid media campaigns can begin generating leads within weeks. However, building a scalable, optimized franchise growth system typically takes 60–90 days for full performance maturity.",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          BLOG PREVIEW
      ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="max-w-xl">
                            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                                Our Blog
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-4">
                                Franchise Growth Insights &amp; Strategies
                            </h2>
                        </div>
                        <Link
                            to="/blog"
                            className="text-sm font-bold text-[#1B2A45] border-2 border-[#1B2A45] px-6 py-3 rounded-full hover:bg-[#1B2A45] hover:text-white transition-all duration-300"
                        >
                            View All Posts
                        </Link>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            { title: "How to Build a Scalable Lead System for Your Franchise", category: "Lead Generation", img: "1584621172942-076f8eb3d5c5" },
                            { title: "Why Franchise Marketing Fails — And How to Fix It", category: "Franchise Strategy", img: "1557804506-669a67965ba0" },
                            { title: "CRM Automation: The Secret Weapon for Franchise Growth", category: "Automation", img: "1518770660439-4636190af475" },
                        ].map((post, i) => (
                            <motion.div key={i} variants={fadeUpVariant} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${post.img}?q=80&w=800&auto=format&fit=crop`}
                                        alt="Blog"
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#1DD1A1] text-[#1B2A45] font-bold px-3 py-1 rounded-full text-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-[#1B2A45]/60 mb-3">
                                        <span>February 25, 2026</span>
                                        <span>•</span>
                                        <span>By CTS Team</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1B2A45] mb-3 group-hover:text-[#1DD1A1] transition-colors">
                                        {post.title}
                                    </h3>
                                    <Link
                                        to="#"
                                        className="font-bold text-[#1B2A45] underline decoration-[#1DD1A1] decoration-2 underline-offset-4 hover:text-[#1DD1A1] transition-colors"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#1B2A45] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 max-w-3xl mx-auto">
                        Ready to Scale Your Franchise Growth?
                    </h2>
                    <p className="text-[#7FDED0] text-xl mb-10 max-w-2xl mx-auto">
                        Let's build a digital foundation that drives consistent leads, stronger conversions,
                        and more revenue across every franchise location.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact"
                            className="bg-[#1DD1A1] text-[#1B2A45] font-bold px-10 py-4 rounded-full text-base hover:bg-white transition-all duration-300 shadow-xl"
                        >
                            Book a Strategy Call
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-base hover:bg-white hover:text-[#1B2A45] transition-all duration-300"
                        >
                            Get a Free Growth Audit
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FranchiseLandingPage;
