import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "120% Increase in High-Net-Worth Leads",
    client: "Boutique Accounting Firm",
    metric: "2.2x Pipeline",
    description: "Implemented a local SEO and authority building campaign paired with an automated intake funnel, capturing highly qualified leads consistently.",
    icon: Users,
    color: "from-[#0D9488]/20 to-teal-500/10"
  },
  {
    title: "Save 25+ Hours per Week on Intake Admin",
    client: "Mid-Sized Law Firm",
    metric: "25hrs/wk Saved",
    description: "Deployed an integrated CRM with document collection and eSignature workflows, eliminating manual data entry and speeding up client onboarding.",
    icon: TrendingUp,
    color: "from-[#0D9488]/20 to-[#0D9488]/5"
  },
  {
    title: "3x Faster Proposal-to-Close Rate",
    client: "Management Consulting Agency",
    metric: "300% Speed",
    description: "Built an AI-powered pre-qualification and automated scheduling system, ensuring consultants only spend time on serious, budget-approved prospects.",
    icon: Zap,
    color: "from-[#0D9488]/20 to-emerald-500/10"
  }
];

export const ProfCaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="case-studies" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#0D9488] font-bold mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real results for modern <span className="text-[#0D9488]">Professionals</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We help lawyers, accountants, and consultants transition from manual tasks to automated growth. These are the measurable impacts of our digital systems.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#0D9488]/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${study.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold mb-6 border border-[#0D9488]/20 text-center">
                  <ArrowUpRight className="w-3 h-3" />
                  {study.metric}
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#0D9488] mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                  <study.icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#0D9488] transition-colors">
                  {study.title}
                </h4>
                <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">{study.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
