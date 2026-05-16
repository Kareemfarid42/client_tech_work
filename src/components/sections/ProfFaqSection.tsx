import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How secure is the client data?",
    answer: "Security is our top priority. We use bank-grade encryption and partner with SOC-2 compliant platforms to ensure all client data, documents, and communications meet strict industry standards."
  },
  {
    question: "Will this replace our existing CRM or practice management software?",
    answer: "It doesn't have to. Our systems are designed to either serve as your central hub or integrate seamlessly with your existing tools (like Clio, Salesforce, or specialized accounting software) via APIs."
  },
  {
    question: "How long does onboarding take?",
    answer: "A standard deployment, including workflow mapping, custom form creation, and team training, typically takes 2-3 weeks depending on the complexity of your existing processes."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We offer dedicated account management and ongoing technical support to ensure your automated pipelines and intake systems continue to operate flawlessly."
  },
  {
    question: "How do you qualify the leads?",
    answer: "We deploy AI-driven pre-qualification forms that act as a digital concierge. By asking specific, targeted questions, we filter out unqualified prospects so your team only spends time on high-value consultations."
  }
];

export const ProfFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#0D9488] font-bold mb-4 text-center">Questions?</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Frequently Asked <span className="text-[#0D9488]">Questions</span></h3>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-[#0D9488]/50 bg-[#0D9488]/5' : 'border-white/10 bg-white/[0.02]'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-[#0D9488] text-[#0D9488]' : 'border-white/20 text-white/40'}`}>
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
