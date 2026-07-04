import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer: "The timeline depends on the complexity, features, and scale of the website. A standard conversion-optimized marketing site typically takes 4-8 weeks, while complex web applications or large ecommerce platforms can take 3-6 months from design to launch."
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Absolutely. Over 60% of web traffic comes from mobile devices. Every website we build is fully responsive, ensuring a flawless user experience across smartphones, tablets, and desktop computers."
  },
  {
    question: "Do you use templates or build custom designs?",
    answer: "We focus on high-performance custom development tailored to your brand and business goals. While we leverage industry-standard frameworks for efficiency, your design, user experience, and architecture will be custom-built for your specific needs."
  },
  {
    question: "Will my website be optimized for SEO?",
    answer: "Yes. Technical SEO is built into the foundation of every site we develop. We ensure fast load times, proper HTML structure, clean code, and mobile optimization so search engines can easily crawl and index your site."
  },
  {
    question: "What platforms or technologies do you use?",
    answer: "We use modern, scalable technologies. For most high-performance web applications and marketing sites, we utilize React, Next.js, and modern CSS frameworks like Tailwind. For content-heavy sites, we integrate headless CMS solutions to give you full control."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance, security monitoring, and support packages. We ensure your website remains updated, secure, fast, and optimized long after the initial launch."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Definitely. We integrate user-friendly Content Management Systems (CMS) that allow you and your team to easily update text, images, blogs, and case studies without needing to write any code."
  },
  {
    question: "How do you ensure the website converts visitors into leads?",
    answer: "We design with Conversion Rate Optimization (CRO) in mind. This means strategic placement of calls-to-action (CTAs), clear value propositions, intuitive navigation, fast load speeds, and friction-less forms to maximize lead generation."
  }
];

export const WebDevFaqSection = () => {
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
              Everything you need to know about our web development process, technologies, and how we build sites that convert.
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
