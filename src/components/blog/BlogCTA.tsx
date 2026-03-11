import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const BlogCTA = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="container-max section-padding !pt-0"
        >
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-[#333333] p-10 md:p-16 text-center flex flex-col items-center">

                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#17aa8c] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
                </div>

                <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-[#333333] flex items-center justify-center mb-6 shadow-inner">
                        <Mail className="w-8 h-8 text-[#17aa8c]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                        Stay Ahead of the Curve
                    </h2>

                    <p className="text-[#888888] text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                        Get our latest insights on digital strategy, enterprise architecture, and emerging tech delivered directly to your inbox. No spam, just high-signal intel.
                    </p>

                    <form className="w-full relative flex flex-col sm:flex-row items-center gap-3">
                        <div className="relative w-full flex-grow">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                required
                                className="w-full bg-[#111111] border border-[#333333] text-white rounded-full py-4 pl-6 pr-4 focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all placeholder:text-[#555555]"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-[#17aa8c] hover:bg-[#0284c7] text-white font-semibold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(23, 170, 140,0.3)] hover:shadow-[0_0_30px_rgba(23, 170, 140,0.5)]"
                        >
                            Subscribe Now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <p className="text-[10px] text-[#555555] mt-4 uppercase tracking-widest font-semibold">
                        Join 10,000+ technology leaders
                    </p>
                </div>

            </div>
        </motion.div>
    );
};

export default BlogCTA;
