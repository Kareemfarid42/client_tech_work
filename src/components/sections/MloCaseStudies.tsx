import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "320% Increase in Qualified Borrower Leads",
    client: "National Mortgage Group",
    metric: "3.2x ROI",
    description: "Implemented a custom lead generation funnel with automated qualification scoring, reducing manual vetting time by 70%.",
    icon: Users,
    color: "from-[#17AA8C]/20 to-teal-500/10"
  },
  {
    title: "85% Higher Retention with Automated Nurture",
    client: "Regional Lending Partner",
    metric: "+85% Retention",
    description: "Deployed a multi-channel CRM automation strategy that kept past clients engaged, resulting in a massive boost in repeat business.",
    icon: Zap,
    color: "from-[#17AA8C]/20 to-emerald-500/10"
  },
  {
    title: "Save 20+ Hours per Week on Admin Tasks",
    client: "Independent MLO Team",
    metric: "20hrs/wk Saved",
    description: "Unified fragmented tools into a single digital ecosystem, automating status updates and document reminders for all active loans.",
    icon: TrendingUp,
    color: "from-[#17AA8C]/20 to-[#17AA8C]/5"
  }
];

export const MloCaseStudies = () => {
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
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real results for modern <span className="text-[#17AA8C]">Loan Officers</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We help MLOs transition from manual chaos to automated growth. These are the measurable impacts of our digital systems.
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
              className="group relative flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#17AA8C]/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${study.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17AA8C]/10 text-[#17AA8C] text-xs font-bold mb-6 border border-[#17AA8C]/20 text-center">
                  <ArrowUpRight className="w-3 h-3" />
                  {study.metric}
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#17AA8C] mb-6 group-hover:bg-[#17AA8C] group-hover:text-white transition-colors">
                  <study.icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#17AA8C] transition-colors">
                  {study.title}
                </h4>
                <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">{study.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {study.description}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 text-[#17AA8C] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Read Full Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
