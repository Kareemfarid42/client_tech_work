import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Is the Digital Performance Audit really free?",
        answer: "Yes, 100% free. There are no hidden fees, credit card requirements, or surprise charges. We provide this as a complimentary service to help businesses understand their digital bottlenecks."
    },
    {
        question: "How long does it take?",
        answer: "Once you submit your request, our engineering and strategy team manually reviews your digital footprint. You can expect your personalized Digital Performance Blueprint within 48-72 hours."
    },
    {
        question: "Why is Clientech offering this audit for free?",
        answer: "We believe in demonstrating value first. By providing you with a high-quality, actionable audit for free, we show you exactly how we think and work. If you find our insights valuable, you might choose to hire us to implement the fixes—but there is absolutely no obligation to do so."
    },
    {
        question: "What exactly do you review?",
        answer: "We look at website performance (speed, mobile-readiness), SEO and AI search visibility, Google Business Profile optimization, lead capture effectiveness, and overall user experience to identify growth blockers."
    }
];

const AuditFAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 relative bg-[#000000] border-b border-[#333333]">
            <div className="container-max section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <h2 className="text-[26px] sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Frequently Asked <span className="text-[#17aa8c]">Questions</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                                    isOpen ? "border-[#17aa8c]/50 bg-[#111111]" : "border-[#333333] bg-[#0a0a0a] hover:border-[#555555]"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="text-lg font-bold text-white font-heading pr-8">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                            isOpen ? "bg-[#17aa8c]/20 text-[#17aa8c]" : "bg-white/5 text-[#888888]"
                                        }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-[#888888] font-sans leading-relaxed border-t border-[#333333] pt-4 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AuditFAQs;
