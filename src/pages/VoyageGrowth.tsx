import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Play, Pause, Target, Sparkles, TrendingUp, Plane } from "lucide-react";

const CALENDLY = "https://calendly.com/admin-clientech-solutions/strategy-session";

/**
 * Voyage Growth — single-page landing.
 * Standalone brand page (dark + gold), replicated from the provided design.
 * Swap the placeholder Unsplash URLs in `heroImages` for the real photos.
 */

// Full-bleed hero photos. One is shown at a time and cross-fades to the next
// every few seconds; a grid pattern is laid over the top so each single photo
// reads as a segmented collage.
const heroImages = [
  "/voyage/snowy-peak.avif",
  "/voyage/hot-tub.jpg",
  "/voyage/cabin.jpeg",
  "/voyage/scenic.jpeg",
  "/voyage/lake.avif",
  "/voyage/luxury.jpg",
];

const SLIDE_MS = 5000; // time each photo is shown
const FADE_MS = 1400; // cross-fade duration

// Sample leads shown in the floating hero card (rotates on a timer).
const leads = [
  { name: "Sarah M.", trip: "Luxury Bali Escape" },
  { name: "James T.", trip: "Amalfi Coast Getaway" },
  { name: "Priya R.", trip: "Kyoto Cherry Blossom Tour" },
  { name: "Daniel K.", trip: "Patagonia Expedition" },
];
const LEAD_MS = 3500;

// Showcase "reel" — dream-destination clips (distinct from the hero photos).
// Stock placeholders; swap for owned footage/photos when available.
const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;
const reel = [
  { src: U("1570077188670-e3a8d69ac5ff"), place: "Santorini, Greece" },
  { src: U("1514282401047-d79a71a590e8"), place: "The Maldives" },
  { src: U("1537996194471-e657df975ab4"), place: "Bali, Indonesia" },
  { src: U("1545569341-9eb8b30979d9"), place: "Kyoto, Japan" },
  { src: U("1523906834658-6e24ef2386f9"), place: "Venice, Italy" },
  { src: U("1502602898657-3e91760cbb34"), place: "Paris, France" },
];
const CLIP_MS = 4000;
const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Engagement steps — a real sequence, so the numbering carries meaning.
const steps = [
  {
    n: "01",
    icon: <Target className="h-6 w-6" />,
    title: "Audit & target",
    desc: "We map your ideal traveler and build California-only Meta audiences around the trips they actually book.",
  },
  {
    n: "02",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Launch & create",
    desc: "Daily social content and conversion-tuned ad creative go live under your brand — no lifting on your end.",
  },
  {
    n: "03",
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Track & scale",
    desc: "Every lead lands in your dashboard. We double down on what turns into booked, high-value trips.",
  },
];

// Proof points — swap for the agency's real numbers.
const proof = [
  { stat: "$4.2M+", label: "in trips booked" },
  { stat: "620+", label: "leads / month" },
  { stat: "4.9★", label: "avg. agency rating" },
  { stat: "100%", label: "California-targeted" },
];

// Scroll-reveal wrapper (respects reduced motion).
const Reveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

type Feature = { label: string; icon?: "check" | "star" };

interface Plan {
  name: string;
  price: string;
  cta: string;
  highlighted?: boolean;
  badge?: string;
  accent: "teal" | "gold";
  features: Feature[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$697",
    cta: "Start Growing",
    accent: "teal",
    features: [
      { label: "High-intent Meta Leads" },
      { label: "Lead Tracking Dashboard" },
      { label: "California-only Targeting" },
    ],
  },
  {
    name: "Growth",
    price: "$1,597",
    cta: "Select Growth Plan",
    highlighted: true,
    badge: "Most Popular",
    accent: "gold",
    features: [
      { label: "Everything in Starter", icon: "star" },
      { label: "Daily Social Media Management" },
      { label: "Professional Content Creation" },
      { label: "Ad Spend Optimization" },
    ],
  },
  {
    name: "Gold",
    price: "$2,997",
    cta: "Go Gold",
    accent: "teal",
    features: [
      { label: "Everything in Growth" },
      { label: "GBP Optimization" },
      { label: "Quarterly Website Audits" },
      { label: "Priority 1:1 Support" },
    ],
  },
];

const GOLD_GRADIENT = "bg-gradient-to-br from-[#F6D28E] to-[#E8AC5A]";

const ShowcaseReel = () => {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || prefersReducedMotion()) return;
    const id = setInterval(() => setI((v) => (v + 1) % reel.length), CLIP_MS);
    return () => clearInterval(id);
  }, [playing]);

  const clipSec = CLIP_MS / 1000;
  const cur = i * clipSec;
  const total = reel.length * clipSec;

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[#34C7BE]/10 blur-3xl" />

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_40px_100px_-25px_rgba(0,0,0,0.85)]">
        {/* Ken Burns crossfade footage */}
        <AnimatePresence>
          <motion.img
            key={i}
            src={reel[i].src}
            alt={reel[i].place}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.14 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1 }, scale: { duration: clipSec + 1.5, ease: "linear" } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* brand tint to match the hero + legibility for the chrome */}
        <div className="absolute inset-0 bg-[#0b332d]/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

        {/* center play / pause */}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="group absolute inset-0 flex items-center justify-center"
        >
          <span
            className={`flex h-20 w-20 items-center justify-center rounded-full bg-[#F2C67E] text-[#231803] shadow-[0_0_45px_rgba(242,198,126,0.55)] transition-all duration-300 group-hover:scale-105 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            {playing ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 translate-x-0.5 fill-current" />}
          </span>
        </button>

        {/* live location caption */}
        <div className="absolute left-5 top-4 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#F2C67E]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
            {reel[i].place}
          </span>
        </div>

        {/* bottom control bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-4 text-white/90">
          <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"} className="shrink-0">
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
          </button>
          {/* story-style segmented progress */}
          <div className="flex flex-1 gap-1.5">
            {reel.map((_, idx) => (
              <div key={idx} className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/25">
                <motion.div
                  key={`${idx}-${i}-${playing}`}
                  initial={{ width: idx < i ? "100%" : "0%" }}
                  animate={{ width: idx < i ? "100%" : idx === i && playing ? "100%" : "0%" }}
                  transition={{ duration: idx === i && playing ? clipSec : 0, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-[#F2C67E]"
                />
              </div>
            ))}
          </div>
          <span className="shrink-0 text-[11px] tabular-nums text-white/70">
            {fmtTime(cur)} / {fmtTime(total)}
          </span>
        </div>
      </div>
    </div>
  );
};

const VoyageGrowth = () => {
  const [active, setActive] = useState(0);
  const [lead, setLead] = useState(0);

  // Cross-fade through the hero photos. Pauses for users who prefer reduced motion.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  // Rotate the floating "new lead" card.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => {
      setLead((l) => (l + 1) % leads.length);
    }, LEAD_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white antialiased"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* ─────────────── NAV ─────────────── */}
      <header className="absolute top-0 inset-x-0 z-30">
        <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-semibold tracking-tight text-[#F2C67E]"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Voyage Growth
          </a>
          <div className="flex items-center gap-6 sm:gap-8 text-sm font-semibold">
            <a href="#services" className="hidden sm:inline text-gray-200 hover:text-white transition-colors">
              Services
            </a>
            <a href="#packages" className="hidden sm:inline text-gray-200 hover:text-white transition-colors">
              Packages
            </a>
            <a
              href="#login"
              className={`${GOLD_GRADIENT} text-[#231803] px-5 py-2 rounded-full font-bold hover:brightness-105 transition`}
            >
              Login
            </a>
          </div>
        </nav>
      </header>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
        {/* Cross-fading single photo */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
              style={{ opacity: i === active ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
            />
          ))}
        </div>
        {/* Grid pattern — each tile carries its own inner vignette so the single
            photo reads as a segmented, textured collage of framed panels. */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/[0.06] shadow-[inset_0_0_55px_rgba(0,0,0,0.5)]"
            />
          ))}
        </div>
        {/* Green/teal wash — tints the photo cool and fades it evenly so the whole
            image stays visible while the headline on top remains legible. */}
        <div className="absolute inset-0 bg-[#0b332d]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2621]/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c3a33]/35 via-transparent to-[#06201c]/50" />
        {/* gentle readability lift behind the headline + blend into the section below */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04110f]/45 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F2C67E]" />
              #1 Growth Partner for Travel Agencies
            </span>

            <h1
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Your next client is already searching. Let&apos;s make sure they{" "}
              <span className="italic font-medium text-[#F2C67E]">find</span> you.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
              Expert Meta lead generation and social media management exclusively for independent
              travel agency owners in California.
            </p>

            <div className="mt-9">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`${GOLD_GRADIENT} group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold text-[#231803] shadow-[0_10px_40px_-10px_rgba(242,198,126,0.5)] hover:brightness-105 transition`}
              >
                Get My Free Growth Plan
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                No contracts. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating "new lead" card — rotates through sample leads */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 w-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={lead}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md px-5 py-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-white font-semibold">{leads[lead].name}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34C7BE]/15 px-2.5 py-1 text-[10px] font-semibold text-[#63ded6]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34C7BE]" />
                  New lead via Meta Ads
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Interested in: <span className="font-semibold text-white">{leads[lead].trip}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────────── SHOWCASE REEL ─────────────── */}
      <section className="relative bg-[#0a0a0a] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#34C7BE]">The Voyage Reel</p>
            <h2
              className="mt-4 text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              The trips your clients are dreaming about.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              The destinations we put in front of high-intent California travelers — the moments that
              turn an idle scroll into a booked getaway.
            </p>
          </Reveal>
          <ShowcaseReel />
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section className="relative bg-[#0a0a0a] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 text-center sm:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#34C7BE]">The Flight Plan</p>
            <h2
              className="mt-4 text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Three steps from unknown to fully booked.
            </h2>
          </Reveal>

          <div className="relative grid gap-12 md:grid-cols-3">
            {/* dashed flight path connector (desktop only) */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden border-t-2 border-dashed border-white/15 md:block" />
            <Plane className="pointer-events-none absolute right-[13%] top-[22px] hidden h-4 w-4 -rotate-45 text-[#F2C67E] md:block" />

            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#34C7BE]/30 bg-[#0d1a18] text-[#34C7BE] shadow-[0_0_30px_-10px_rgba(52,199,190,0.55)]">
                  {s.icon}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="text-sm text-[#F2C67E]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {s.n}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mx-auto mt-3 max-w-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PRICING ─────────────── */}
      <section id="packages" className="relative py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-14 sm:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#34C7BE]">Investment</p>
            <h2
              className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-100 max-w-2xl mx-auto leading-[1.15]"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              One partner. Three ways we grow your agency.
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CLOSING CTA ─────────────── */}
      <section className="relative isolate overflow-hidden px-6 py-28 sm:py-32">
        <img
          src={U("1502602898657-3e91760cbb34")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0b332d]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#34C7BE]">Your next season</p>
          <h2
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Be the agency they <span className="italic text-[#F2C67E]">find</span> first.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-300">
            Book a free growth plan and we&apos;ll show you exactly where your next 30 travelers are coming from.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={`${GOLD_GRADIENT} group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold text-[#231803] shadow-[0_10px_40px_-10px_rgba(242,198,126,0.5)] hover:brightness-105 transition`}
            >
              Get My Free Growth Plan
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
              No contracts. Cancel anytime.
            </p>
          </div>

          {/* proof */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-12 sm:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label} className="text-center">
                <div className="text-3xl font-semibold text-white" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  {p.stat}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="border-t border-white/10 bg-[#080808] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="text-xl font-semibold text-[#F2C67E]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Voyage Growth
            </span>
            <p className="mt-1 text-xs text-gray-500">Meta lead generation for California travel agencies.</p>
          </div>
          <nav className="flex items-center gap-7 text-sm font-medium text-gray-400">
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#packages" className="transition-colors hover:text-white">Packages</a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Book a call
            </a>
          </nav>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Voyage Growth</p>
        </div>
      </footer>
    </div>
  );
};

const PlanCard = ({ plan }: { plan: Plan }) => {
  const highlighted = plan.highlighted;

  return (
    <div
      className={[
        "relative rounded-2xl p-8 flex flex-col transition-all duration-300",
        highlighted
          ? "bg-[#141210] border-2 border-[#E8AC5A] shadow-[0_0_60px_-15px_rgba(232,172,90,0.45)] lg:-my-6 lg:py-14 z-10 hover:shadow-[0_0_80px_-12px_rgba(232,172,90,0.6)]"
          : "bg-[#131313] border border-[#262626] hover:-translate-y-1.5 hover:border-[#3a3a3a] hover:bg-[#161616]",
      ].join(" ")}
    >
      {plan.badge && (
        <span
          className={`${GOLD_GRADIENT} absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#231803]`}
        >
          {plan.badge}
        </span>
      )}

      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          highlighted ? "text-[#F2C67E]" : "text-gray-500"
        }`}
      >
        {plan.name}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-white">{plan.price}</span>
        <span className="mb-1.5 text-sm text-gray-500">/mo</span>
      </div>

      <ul className="mt-8 space-y-4 flex-1">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-start gap-3">
            {f.icon === "star" ? (
              <Star className="mt-0.5 h-5 w-5 shrink-0 fill-[#E8AC5A] text-[#E8AC5A]" />
            ) : (
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 shrink-0 ${
                  plan.accent === "gold" ? "text-[#E8AC5A]" : "text-[#34C7BE]"
                }`}
              />
            )}
            <span className="text-sm leading-snug text-gray-200">{f.label}</span>
          </li>
        ))}
      </ul>

      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "mt-10 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition",
          highlighted
            ? `${GOLD_GRADIENT} text-[#231803] hover:brightness-105`
            : "border border-[#2f2f2f] bg-[#161616] text-gray-200 hover:border-[#454545] hover:bg-[#1c1c1c]",
        ].join(" ")}
      >
        {plan.cta}
      </a>
    </div>
  );
};

export default VoyageGrowth;
