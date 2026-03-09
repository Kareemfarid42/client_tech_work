import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full bg-[#0a0a0a] rounded-3xl border border-[#333333] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
            <h2 className="text-2xl font-heading font-bold text-white mb-8">Send a Message</h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#888888] block">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-[#888888] block">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                            placeholder="Acme Corp"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#888888] block">Work Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                        placeholder="john@acmecorp.com"
                    />
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-[#888888] block">How can we help?</label>
                    <div className="relative">
                        <select
                            id="service"
                            defaultValue=""
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-[#555]">Select a service...</option>
                            <option value="digital-strategy" className="bg-[#111111] text-white">Digital Strategy & Advisory</option>
                            <option value="cloud-migration" className="bg-[#111111] text-white">Cloud Infrastructure Migration</option>
                            <option value="ai-integration" className="bg-[#111111] text-white">AI & Machine Learning Integration</option>
                            <option value="custom-software" className="bg-[#111111] text-white">Custom Software Engineering</option>
                            <option value="other" className="bg-[#111111] text-white">Other Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#888888]">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#888888] block">Project Details</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all resize-none"
                        placeholder="Tell us about your objectives, timeline, and technical constraints..."
                    ></textarea>
                </div>

                {/* Highly Stylized Submit Button */}
                <button
                    type="submit"
                    className="w-full relative overflow-hidden group border border-[#0ea5e9] text-[#0ea5e9] font-bold py-4 rounded-sm mt-4 bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                >
                    <span className="absolute inset-0 w-full h-full bg-[#0ea5e9] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
                        Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>

                <p className="text-xs text-[#555555] text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy. We never share your data.
                </p>

            </form>
        </motion.div>
    );
};

export default ContactForm;
