import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to set up the system?",
    answer: "Most MLOs are up and running within 10-14 business days. This includes CRM integration, lead funnel setup, and initial automation testing."
  },
  {
    question: "Do I need to change my current CRM?",
    answer: "Not necessarily. Our systems integrate with most major mortgage CRMs (like Encompass, Total Expert, or Jungo). If you don't have one, we can recommend and set up a best-in-class solution for you."
  },
  {
    question: "How are the leads qualified?",
    answer: "We use multi-step digital funnels that capture more than just contact info. We vet for credit range, loan type, and timeline before they ever reach your inbox."
  },
  {
    question: "Is this compliant with state and federal regulations?",
    answer: "Yes. All our digital systems and messaging templates are designed with compliance in mind, including TCPA and RESPA guidelines. We always recommend a final review by your compliance officer."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "While results vary, our average client sees a 3x return on their investment within the first 90 days through a combination of new lead conversion and past-client retention automation."
  }
];

export const MloFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4 text-center">Questions?</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Frequently Asked <span className="text-[#17AA8C]">Questions</span></h3>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-[#17AA8C]/50 bg-[#17AA8C]/5' : 'border-white/10 bg-white/[0.02]'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-[#17AA8C] text-[#17AA8C]' : 'border-white/20 text-white/40'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
