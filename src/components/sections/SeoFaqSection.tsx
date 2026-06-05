import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take to produce results?",
    answer: "SEO is a long-term growth strategy. While some improvements can be seen within a few weeks, most businesses begin noticing meaningful ranking, traffic, and lead improvements within 3–6 months, depending on competition and market conditions."
  },
  {
    question: "What's the difference between SEO, Local SEO, and Google Ads?",
    answer: "SEO improves your organic visibility in search results over time. Local SEO focuses on Google Maps and location-based searches. Google Ads provides immediate visibility by placing your business in sponsored search results."
  },
  {
    question: "Do you work with businesses outside of home services?",
    answer: "Yes. We work with home service companies, franchises, real estate businesses, healthcare providers, professional service firms, ecommerce brands, and other organizations looking to improve visibility and generate more qualified leads."
  },
  {
    question: "What is AI Search Visibility (GEO & AEO)?",
    answer: "AI Search Visibility focuses on helping businesses appear in AI-powered search experiences such as ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity. As search behavior evolves, businesses need visibility beyond traditional search engines."
  },
  {
    question: "How do you measure success?",
    answer: "Success is measured through key business metrics such as rankings, website traffic, Google Business Profile performance, lead volume, conversion rates, phone calls, and overall revenue growth—not vanity metrics."
  },
  {
    question: "Do I need to replace my current website or marketing tools?",
    answer: "Not necessarily. In many cases, we can improve your existing website, content, Google Business Profile, advertising campaigns, and marketing systems without requiring a complete rebuild."
  },
  {
    question: "Which services are right for my business?",
    answer: "That depends on your goals, industry, competition, and current online presence. During a strategy session, we'll identify the opportunities that can generate the greatest impact for your business."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "ROI varies based on your industry, competition, budget, and starting point. Our focus is on generating measurable improvements in visibility, qualified leads, and revenue while building sustainable long-term growth."
  }
];

export const SeoFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#17AA8C] font-bold mb-4 text-center">FAQs</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Frequently Asked <span className="text-[#17AA8C]">Questions</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Everything you need to know about improving visibility, generating leads, and growing your business online.
            </p>
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
