import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, ChevronDown, ChevronUp, MapPin, Share2, Megaphone, Users, Cpu, Star, Network } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import AnimatedHeading from "@/components/cleansy/AnimatedHeading";
import { Button } from "@/components/ui/button";
import CompanyLogos from "@/components/cleansy/CompanyLogos";
import RatingStars from "@/components/cleansy/RatingStars";
import FAQAccordion from "@/components/cleansy/FAQAccordion";
import { CleansyHeader } from "@/components/cleansy/CleansyHeader";
import CleansyFooter from "@/components/cleansy/CleansyFooter";
import { ContactModal } from "@/components/contact/ContactModal";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6, ease: "backOut" as const } }
};

const franchiseServices = [
  {
    title: "Local SEO / Google Business",
    description: "Dominating local search results and maps across every territory. We optimize for AEO, GEO, and hyper-local visibility.",
    icon: <MapPin className="w-7 h-7 text-[#1DD1A1]" />,
    isDark: true
  },
  {
    title: "Social Media Localization",
    description: "Tailored social content that resonates with local communities while maintaining global brand consistency across all franchise locations.",
    icon: <Share2 className="w-7 h-7 text-[#1B2A45]" />,
    isDark: false
  },
  {
    title: "Paid Ads",
    description: "Scalable performance marketing on Google, Meta, and beyond. Precision targeting to drive high-intent leads to every location.",
    icon: <Megaphone className="w-7 h-7 text-[#1DD1A1]" />,
    isDark: true
  },
  {
    title: "CRM + Pipeline Setup",
    description: "Centralized systems to track every lead. We build the pipelines and automation that turn prospects into loyal customers.",
    icon: <Users className="w-7 h-7 text-[#1B2A45]" />,
    isDark: false
  },
  {
    title: "AI Lead Qualification",
    description: "Smart automation that vets leads in real-time. Only pass the most qualified prospects to your sales teams.",
    icon: <Cpu className="w-7 h-7 text-[#1DD1A1]" />,
    isDark: true
  },
  {
    title: "Review & Reputation Management",
    description: "Automated systems to collect positive reviews and manage your brand's reputation across all local search platforms.",
    icon: <Star className="w-7 h-7 text-[#1B2A45]" />,
    isDark: false
  },
  {
    title: "Partnership & Referral Systems",
    description: "Building scalable referral loops and local partnership networks that drive organic, high-trust growth.",
    icon: <Network className="w-7 h-7 text-[#1DD1A1]" />,
    isDark: true
  }
];

export default function FranchiseLandingPage() {
  const [showAllServices, setShowAllServices] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <CleansyHeader />
      <main className="flex-grow">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          Structure: Image 1 (Cleansy layout)
          Content + Colors: Image 2 (CTS brand)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]">

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-8 xl:gap-16 items-center">

            {/* ══════════════
                LEFT — TEXT
            ══════════════ */}
            <motion.div
              className="flex flex-col items-start"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >

              {/* ── Heading ── */}
              {/* "Performance Marketing for" plain teal text */}
              <motion.h1 variants={fadeUpVariant} className="font-extrabold leading-snug text-[#00c0a3] mb-5">
                <span className="block text-4xl md:text-5xl mb-3 whitespace-nowrap">
                  Marketing for
                </span>

                {/* Animated highlighted word — dark navy pill, teal text */}
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

              {/* ── Sub-heading ── */}
              <motion.p variants={fadeUpVariant} className="text-white text-lg font-bold mb-3">
                Inconsistent Leads? Let&apos;s Fix That.
              </motion.p>

              {/* ── Body text ── */}
              <motion.p variants={fadeUpVariant} className="text-white/70 text-sm leading-relaxed max-w-sm mb-10">
                We help franchise systems and independent franchise operators like home
                services, fitness studios, tutoring centers, and senior care companies
                build scalable digital foundations — combining strategy and conversion
                systems that drive sustainable growth.
              </motion.p>

              {/* ── CTA Buttons ── */}
              <motion.div variants={fadeUpVariant} className="flex justify-start mb-10">
                <ContactModal defaultService="Performance Audit">
                  <div className="bg-[#00c0a3] text-white text-base font-bold px-10 py-5 rounded-2xl hover:bg-[#1b273d] transition-colors duration-300 shadow-xl cursor-pointer">
                    Get a Free Growth Audit
                  </div>
                </ContactModal>
              </motion.div>
            </motion.div>

            {/* ══════════════
                RIGHT — IMAGE
            ══════════════ */}
            <div className="relative flex justify-center lg:justify-end self-end">


              {/* Arch/Tombstone container — Image 1 style */}
              {/* elliptical top radius → true tombstone arch shape */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-[460px] overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop"
                  alt="Franchise Growth Marketing Team"
                  width={460}
                  height={580}
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: "460 / 580" }}
                />
              </motion.div>

              {/* ── Social Proof Card ── overlapping bottom-left of image */}
              {/* Styled after Image 1's card: clean white, shadow, avatar overlap + count + stars + subtitle */}
              <motion.div
                variants={popIn}
                initial="hidden"
                animate="visible"
                className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white rounded-2xl shadow-2xl p-5 w-[240px]"
              >

                {/* Avatar cluster */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-3">
                    {[31, 32, 33].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                          alt="Franchise Owner"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                    {/* "+40" badge */}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#00c0a3] flex items-center justify-center font-bold text-white text-xs shrink-0 z-10">
                      +40
                    </div>
                  </div>
                </div>

                {/* Title */}
                <p className="text-[#1b273d] font-extrabold text-base leading-tight">
                  40+ Franchise Clients
                </p>
                {/* Subtitle */}
                <p className="text-xs text-gray-500 mt-0.5 mb-2">
                  Trusted by franchise owners
                </p>
                {/* Stars */}
                <RatingStars rating={5} size={15} />
              </motion.div>

              {/* Decorative arch glow behind image */}
              <div
                className="absolute top-4 left-0 right-0 mx-auto w-[420px] h-[520px] bg-[#00c0a3]/10 -z-10"
                style={{ borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="bg-white py-10">
        <CompanyLogos
          title="Trusted by Leading Franchise Systems"
          logos={[
            { id: 1,  url: "/logos/12.svg", alt: "Partner Logo 1" },
            { id: 2,  url: "/logos/13.svg", alt: "Partner Logo 2" },
            { id: 3,  url: "/logos/14.svg", alt: "Partner Logo 3" },
            { id: 4,  url: "/logos/15.svg", alt: "Partner Logo 4" },
            { id: 5,  url: "/logos/16.svg", alt: "Partner Logo 5" },
            { id: 6,  url: "/logos/17.svg", alt: "Partner Logo 6" },
            { id: 7,  url: "/logos/18.svg", alt: "Partner Logo 7" },
            { id: 8,  url: "/logos/19.svg", alt: "Partner Logo 8" },
            { id: 9,  url: "/logos/20.svg", alt: "Partner Logo 9" },
            { id: 10, url: "/logos/21.svg", alt: "Partner Logo 10" },
            { id: 11, url: "/logos/22.svg", alt: "Partner Logo 11" },
            { id: 12, url: "/logos/23.svg", alt: "Partner Logo 12" },
            { id: 13, url: "/logos/24.svg", alt: "Partner Logo 13" },
            { id: 14, url: "/logos/SMAP-Logo.svg", alt: "SMAP Logo" },
          ]}
        />
      </section>

      {/* Services / What We Do Section */}
      <section
        id="services"
        className="relative py-24 overflow-hidden bg-[#0A0A0A]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          {/* ── Section Header ── */}
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-5">
              A Complete Digital Growth<br className="hidden md:block" /> System for Franchises
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We help franchise brands build scalable lead systems, automated follow-up, and digital foundations that drive measurable location-level growth.
            </p>
          </motion.div>

          {/* ══════════════════════════════
              PART 1 — Staggered Cards
          ══════════════════════════════ */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {franchiseServices.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUpVariant}
                className={`${
                  service.isDark ? "bg-[#1B2A45]" : "bg-white"
                } rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 ${
                  !service.isDark ? "lg:mt-14 shadow-xl" : ""
                }`}
              >
                <div className={`w-14 h-14 ${service.isDark ? "bg-[#1DD1A1]/15" : ""} rounded-2xl flex items-center justify-center`} style={!service.isDark ? { backgroundColor: "rgba(27,42,69,0.07)" } : {}}>
                  {service.icon}
                </div>
                <h3 className={`${service.isDark ? "text-[#1DD1A1]" : "text-[#1B2A45]"} text-lg font-extrabold leading-snug`}>
                  {service.title}
                </h3>
                <p className={`${service.isDark ? "text-white/60" : "text-[#1B2A45]/55"} text-sm leading-relaxed flex-1`}>
                  {service.description}
                </p>
                <span className={`inline-flex items-center gap-1 ${service.isDark ? "text-[#1DD1A1]" : "text-[#1B2A45]"} font-bold text-sm cursor-pointer hover:gap-2 transition-all`}>
                  Learn more →
                </span>
              </motion.div>
            ))}

            <AnimatePresence>
              {showAllServices && (
                franchiseServices.slice(4).map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`${
                      service.isDark ? "bg-[#1B2A45]" : "bg-white"
                    } rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 ${
                      !service.isDark ? "lg:mt-14 shadow-xl" : ""
                    }`}
                  >
                    <div className={`w-14 h-14 ${service.isDark ? "bg-[#1DD1A1]/15" : ""} rounded-2xl flex items-center justify-center`} style={!service.isDark ? { backgroundColor: "rgba(27,42,69,0.07)" } : {}}>
                      {service.icon}
                    </div>
                    <h3 className={`${service.isDark ? "text-[#1DD1A1]" : "text-[#1B2A45]"} text-lg font-extrabold leading-snug`}>
                      {service.title}
                    </h3>
                    <p className={`${service.isDark ? "text-white/60" : "text-[#1B2A45]/55"} text-sm leading-relaxed flex-1`}>
                      {service.description}
                    </p>
                    <span className={`inline-flex items-center gap-1 ${service.isDark ? "text-[#1DD1A1]" : "text-[#1B2A45]"} font-bold text-sm cursor-pointer hover:gap-2 transition-all`}>
                      Learn more →
                    </span>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex justify-center mt-16"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAllServices(!showAllServices)}
              variant="outline"
              className="group border-[#00c0a3] text-[#00c0a3] hover:bg-[#00c0a3] hover:text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              {showAllServices ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  More Services <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>



        </div>
      </section>

      {/* About / Built for Franchise Growth Section */}
      <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
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
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Decorative floating card */}
              <div className="absolute top-10 -left-10 z-20 bg-[#1B2A45] p-8 rounded-[20px] shadow-xl max-w-[250px] hidden md:block animate-float">
                <div className="text-4xl font-extrabold text-[#1DD1A1] mb-2">6+</div>
                <div className="text-white font-bold text-lg leading-tight">Years of Experience</div>
              </div>

              {/* Background blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10"></div>
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
              <p className="text-text/80 text-lg mb-8 leading-relaxed">
                Franchise growth is complex. Balancing brand consistency, local marketing, lead quality, franchisee satisfaction, and ROI isn&apos;t easy — especially when every location performs differently. We help franchise brands and independent franchise owners build strong digital foundations, scalable lead systems, and automated follow-up processes that drive measurable, location-level growth. This isn&apos;t just marketing. It&apos;s a digital transformation built for franchise scale.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                {[
                  "Built for Multi-Location Models",
                  "Lead Generation + Automation",
                  "Transparent, Location-Level Reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-[15px] bg-[#F0F4F8] hover:bg-[#1DD1A1]/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#1B2A45] flex items-center justify-center text-[#1DD1A1] shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <span className="text-[#1B2A45] font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button size="lg">Learn More About Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* Background Image Overlay */}
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
              { number: "500+", label: "Employees" },
              { number: "7+", label: "Award Winner" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-extrabold text-[#1DD1A1] mb-2">{stat.number}</span>
                <span className="text-lg font-bold text-white/90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-24 bg-white">
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
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Sarah Mitchell",
                role: "Fitness Studio Franchisee",
                quote: "The automation systems they set up saved us hours every week. Show-up rates doubled and cost-per-acquisition dropped by 40%.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "David Chen",
                role: "Senior Care Franchise Director",
                quote: "CTS understands the franchise model. Systems that work at both corporate level and for each individual location. Transparent reporting too.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="flex flex-col gap-4">
                {/* Video thumbnail */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#1B2A45]/30 group-hover:bg-[#1B2A45]/50 transition-colors duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#1DD1A1] transition-all duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#1B2A45] ml-1 group-hover:text-white transition-colors duration-300">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Info below */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Book a strategy call and we&apos;ll assess your current digital infrastructure, lead flow, and growth opportunities.
              </p>

              <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden mt-8 hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Franchise Strategy Session"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#1B2A45]/30"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[15px] text-center">
                  <p className="font-bold text-[#1B2A45] mb-1">Scale Your Franchise and Growth Revenue Today</p>
                  <ContactModal defaultService="Performance Audit">
                    <span className="text-[#1B2A45] font-extrabold hover:text-[#00c0a3] underline transition-colors cursor-pointer">Request Your Free Revenue Audit</span>
                  </ContactModal>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Component */}
            <div className="w-full">
              <FAQAccordion
                items={[
                  {
                    id: "1",
                    question: "Do you work with franchisors or individual franchise owners?",
                    answer: "We support both centralized franchise brands and independent franchise owners. Whether marketing is controlled at the corporate level or managed locally, we build systems that align brand consistency with location-level performance."
                  },
                  {
                    id: "2",
                    question: "Can you generate leads for individual franchise locations?",
                    answer: "Yes. We create territory-based campaigns using Google Ads, Meta Ads, and local landing pages designed to drive high-quality leads specific to each franchise location."
                  },
                  {
                    id: "3",
                    question: "How do you ensure brand consistency across locations?",
                    answer: "We build structured digital foundations — including standardized messaging, conversion frameworks, and tracking systems — while allowing flexibility for local targeting and budget control."
                  },
                  {
                    id: "4",
                    question: "Do you offer CRM setup and automation?",
                    answer: "Absolutely. We implement CRM systems, automated follow-ups (SMS & email), missed-call text-back, pipeline tracking, and performance dashboards to ensure no lead is wasted."
                  },
                  {
                    id: "5",
                    question: "How do you measure ROI for franchise marketing?",
                    answer: "We track every click, call, form submission, and booked appointment. Our reporting provides visibility at both the campaign level and location level so you know exactly what's working."
                  },
                  {
                    id: "6",
                    question: "How quickly can we see results?",
                    answer: "Paid media campaigns can begin generating leads within weeks. However, building a scalable, optimized franchise growth system typically takes 60–90 days for full performance maturity."
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-[#F0F4F8]">
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
            <Button variant="outline">View All Posts</Button>
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
                title: "How to Build a Scalable Lead System for Your Franchise",
                category: "Lead Generation",
                img: "1584621172942-076f8eb3d5c5"
              },
              {
                title: "Why Franchise Marketing Fails — And How to Fix It",
                category: "Franchise Strategy",
                img: "1557804506-669a67965ba0"
              },
              {
                title: "CRM Automation: The Secret Weapon for Franchise Growth",
                category: "Automation",
                img: "1518770660439-4636190af475"
              }
            ].map((post, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${post.img}?q=80&w=800&auto=format&fit=crop`}
                    alt="Blog"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1DD1A1] text-[#1B2A45] font-bold px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-text/60 mb-3">
                    <span>February 25, 2026</span>
                    <span>•</span>
                    <span>By CTS Team</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A45] mb-3 group-hover:text-[#1DD1A1] transition-colors">
                    {post.title}
                  </h3>
                  <Link to="#" className="font-bold text-[#1B2A45] underline decoration-[#1DD1A1] decoration-2 underline-offset-4 hover:text-[#1DD1A1] transition-colors">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 max-w-3xl mx-auto">
            Ready to Scale Your Franchise Growth?
          </h2>
          <p className="text-[#7FDED0] text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s build a digital foundation that drives consistent leads, stronger conversions, and more revenue across every franchise location.
          </p>
          <div className="flex justify-center">
            <ContactModal defaultService="Performance Audit">
              <Button size="lg" className="bg-[#1DD1A1] text-[#1B2A45] hover:bg-white font-bold border-0 px-10 py-6 text-lg rounded-2xl">
                Get Your Free Growth Audit
              </Button>
            </ContactModal>
          </div>
        </div>
      </section>
      </main>
      <CleansyFooter />
    </div>
  );
}
