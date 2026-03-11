import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, CheckCircle2 } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="flex flex-col h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#17aa8c]/30 bg-[#17aa8c]/10 text-[#17aa8c] text-xs font-bold uppercase tracking-widest mb-6">
                    Let's Connect
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
                    Ready to Accelerate Your <span className="text-[#17aa8c]">Digital Transformation?</span>
                </h1>
                <p className="text-lg text-[#888888] leading-relaxed max-w-xl">
                    Whether you're looking to migrate legacy systems, implement AI workflows, or require a comprehensive digital audit, our engineering team is ready to deliver. We typically respond within 2 hours during business operations.
                </p>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
                initial="hidden"
                animate="show"
                className="grid gap-6 flex-grow"
            >
                {/* Email Card */}
                <motion.div
                    variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#17aa8c]/50 hover:shadow-[0_0_30px_rgba(23, 170, 140,0.1)] transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#17aa8c]/50 group-hover:shadow-[0_0_15px_rgba(23, 170, 140,0.3)] transition-all duration-300">
                        <Mail className="w-6 h-6 text-white/70 group-hover:text-[#17aa8c] transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-white font-heading font-bold text-xl mb-1">Email Us</h3>
                        <p className="text-[#888888] text-sm mb-2">For general inquiries, project discussions, or partnership opportunities.</p>
                        <a href="mailto:info@clientechsolutions.com" className="text-[#17aa8c] font-semibold hover:text-white transition-colors">
                            info@clientechsolutions.com
                        </a>
                    </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                    variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#17aa8c]/50 hover:shadow-[0_0_30px_rgba(23, 170, 140,0.1)] transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#17aa8c]/50 group-hover:shadow-[0_0_15px_rgba(23, 170, 140,0.3)] transition-all duration-300">
                        <Phone className="w-6 h-6 text-white/70 group-hover:text-[#17aa8c] transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-white font-heading font-bold text-xl mb-1">Talk to Our Team</h3>
                        <p className="text-[#888888] text-sm mb-2">Speak with a member of our team for questions about our services or your project.</p>
                        <div className="text-[#888888] text-xs mb-2">Monday – Friday, 8am – 5pm (PST)</div>
                        <a href="tel:+19168368687" className="text-[#17aa8c] font-semibold hover:text-white transition-colors">
                            (916) 836-8687
                        </a>
                    </div>
                </motion.div>

                {/* HQ Card */}
                <motion.div
                    variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#17aa8c]/50 hover:shadow-[0_0_30px_rgba(23, 170, 140,0.1)] transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#17aa8c]/50 group-hover:shadow-[0_0_15px_rgba(23, 170, 140,0.3)] transition-all duration-300">
                        <MapPin className="w-6 h-6 text-white/70 group-hover:text-[#17aa8c] transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-white font-heading font-bold text-xl mb-1">Office Location</h3>
                        <p className="text-[#888888] text-sm mb-2">ClienTech Solutions</p>
                        <span className="text-[#17aa8c] font-semibold">
                            3422 Hacienda Rd, <br /> Cameron Park, CA 95682, United States
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Social Proof Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 pt-8 border-t border-[#333333] flex flex-wrap gap-6 items-center"
            >
                <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#333333]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Trusted by 50+ Enterprises</span>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactInfo;
