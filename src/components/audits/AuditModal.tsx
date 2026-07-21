import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { trackLead } from "@/lib/analytics";

interface AuditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ModalState = "idle" | "loading" | "success";

const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
    const [modalState, setModalState] = useState<ModalState>("idle");

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        industry: "",
        biggestChallenge: "",
        budget: "",
        websiteUrl: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleClose = () => {
        onClose();
        // Reset state after animation completes
        setTimeout(() => {
            setModalState("idle");
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                companyName: "",
                industry: "",
                biggestChallenge: "",
                budget: "",
                websiteUrl: ""
            });
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setModalState("loading");

        // Keep the "Preparing your audit..." animation on screen for at least
        // 3s for UX, but only show success once the email has actually sent.
        const delay = new Promise((resolve) => setTimeout(resolve, 3000));

        try {
            const [emailResult] = await Promise.all([
                emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_AUDIT_TEMPLATE_ID,
                    formData,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                ),
                delay,
            ]);
            void emailResult;

            trackLead({ content_name: "Performance Audit Request", source: "Audit Modal" });
            setModalState("success");
        } catch (error) {
            console.error("Audit submission error:", error);
            // Return to the form so the lead is not silently lost.
            setModalState("idle");
            toast.error("We couldn't submit your audit request", {
                description:
                    "Please try again, or email us directly at admin@clientech-solutions.com",
            });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
                    onClick={handleClose}
                >
                    <div className="min-h-full py-4 sm:py-6 flex items-center w-full max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full bg-[#0a0a0a] border border-[#333333] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] min-h-[400px] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-[#888888] hover:text-[#17aa8c] transition-colors border border-transparent hover:border-[#333333] z-50"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header (Only show in idle state) */}
                            <AnimatePresence mode="wait">
                                {modalState === "idle" && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }} 
                                        animate={{ opacity: 1, height: "auto" }} 
                                        exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                                        className="px-6 py-6 md:px-8 md:pt-8 md:pb-6 border-b border-[#333333] relative"
                                    >
                                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#17aa8c]/50 to-transparent" />
                                        <div className="absolute top-0 right-1/4 w-24 h-24 bg-[#17aa8c]/10 blur-[40px] rounded-full pointer-events-none" />

                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1.5 tracking-tight">
                                            Request Your <span className="text-[#17aa8c]">Free Audit</span>
                                        </h2>
                                        <p className="text-[#888888] text-sm font-sans">
                                            Fill out the details below so our engineering team can begin analyzing your digital footprint.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Dynamic Content Area */}
                            <div className="flex-1 flex flex-col relative px-6 py-6 md:px-8 md:py-8 bg-[#000000]">
                                <AnimatePresence mode="wait">
                                    {modalState === "idle" && (
                                        <motion.form 
                                            key="form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-5 flex-1 flex flex-col" 
                                            onSubmit={handleSubmit}
                                        >
                                            {/* Row 1: 4 Columns */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                        Full Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        required
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                        Phone Number <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        required
                                                        value={formData.phoneNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                        placeholder="(555) 000-0000"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block flex items-center justify-between">
                                                        <span>Company Name</span>
                                                        <span className="text-[8px] text-[#444]">(Optional)</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="companyName"
                                                        value={formData.companyName}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                        placeholder="Company Inc."
                                                    />
                                                </div>
                                            </div>

                                            {/* Row 2: Selects */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block flex items-center justify-between">
                                                        <span>Industry</span>
                                                        <span className="text-[8px] text-[#444]">(Optional)</span>
                                                    </label>
                                                    <select
                                                        id="industry"
                                                        value={formData.industry}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="text-[#555]">Select Industry</option>
                                                        <option value="home-services">Home Services</option>
                                                        <option value="franchise">Franchise</option>
                                                        <option value="healthcare">Healthcare</option>
                                                        <option value="legal">Legal</option>
                                                        <option value="real-estate">Real Estate</option>
                                                        <option value="mortgage">Mortgage</option>
                                                        <option value="financial-services">Financial Services</option>
                                                        <option value="construction">Construction</option>
                                                        <option value="e-commerce">E-commerce</option>
                                                        <option value="manufacturing">Manufacturing</option>
                                                        <option value="professional-services">Professional Services</option>
                                                        <option value="education">Education</option>
                                                        <option value="technology-saas">Technology / SaaS</option>
                                                        <option value="non-profit">Non-Profit</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block flex items-center justify-between">
                                                        <span>Biggest Challenge</span>
                                                        <span className="text-[8px] text-[#444]">(Optional)</span>
                                                    </label>
                                                    <select
                                                        id="biggestChallenge"
                                                        value={formData.biggestChallenge}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="text-[#555]">Select Challenge</option>
                                                        <option value="need-more-leads">Need More Qualified Leads</option>
                                                        <option value="low-conversions">Low Website Conversions</option>
                                                        <option value="improve-seo">Improve Google Rankings (SEO)</option>
                                                        <option value="google-ads">Google Ads Performance</option>
                                                        <option value="meta-ads">Meta/Facebook Ads Performance</option>
                                                        <option value="ai-search-visibility">AI Search Visibility (AEO/GEO)</option>
                                                        <option value="website-performance">Website Performance / UX</option>
                                                        <option value="reputation-management">Reputation Management</option>
                                                        <option value="not-sure">Not Sure (Need an Expert Review)</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block flex items-center justify-between">
                                                        <span>Monthly Marketing Budget</span>
                                                        <span className="text-[8px] text-[#444]">(Optional)</span>
                                                    </label>
                                                    <select
                                                        id="budget"
                                                        value={formData.budget}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="text-[#555]">Select Budget</option>
                                                        <option value="under-1k">Under $1,000/month</option>
                                                        <option value="1k-2.5k">$1,000–2,499/month</option>
                                                        <option value="2.5k-5k">$2,500–4,999/month</option>
                                                        <option value="5k-10k">$5,000–9,999/month</option>
                                                        <option value="10k-plus">$10,000+/month</option>
                                                        <option value="not-investing">Not Currently Investing</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Row 3: Website URL + Submit Button */}
                                            <div className="mt-6 pt-6 border-t border-[#333333] flex-1 flex flex-col justify-end">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                        Website URL <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="relative w-full">
                                                        <input
                                                            type="url"
                                                            id="websiteUrl"
                                                            required
                                                            value={formData.websiteUrl}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#111111] border border-[#17aa8c]/50 rounded-sm pl-4 pr-32 py-4 text-base text-white placeholder:text-[#555555] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all font-mono"
                                                            placeholder="https://yourwebsite.com"
                                                        />
                                                        <button
                                                            type="submit"
                                                            className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#17aa8c] hover:bg-[#138e75] text-black font-bold uppercase tracking-wider text-sm px-8 rounded-sm transition-colors duration-300 shadow-[0_0_15px_rgba(23,170,140,0.3)]"
                                                        >
                                                            Audit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.form>
                                    )}

                                    {modalState === "loading" && (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex-1 flex flex-col items-center justify-center py-20"
                                        >
                                            <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                                                <div className="absolute inset-0 bg-[#17aa8c]/20 rounded-full blur-xl animate-pulse" />
                                                <Loader2 className="w-12 h-12 text-[#17aa8c] animate-spin relative z-10" />
                                            </div>
                                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                                                Preparing your audit...
                                            </h3>
                                            <p className="text-[#888888] font-sans text-sm">
                                                Our systems are securely capturing your request.
                                            </p>
                                        </motion.div>
                                    )}

                                    {modalState === "success" && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex-1 flex flex-col items-center justify-center py-16 text-center"
                                        >
                                            <motion.div 
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                                className="w-20 h-20 rounded-full bg-[#17aa8c]/10 flex items-center justify-center mb-6 border border-[#17aa8c]/30"
                                            >
                                                <CheckCircle2 className="w-10 h-10 text-[#17aa8c]" />
                                            </motion.div>
                                            <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                                Audit Request Received
                                            </h3>
                                            <p className="text-[#888888] font-sans text-lg max-w-md mx-auto mb-10 leading-relaxed">
                                                Thank you for submitting your audit request. You'll receive your audit via email shortly.
                                            </p>
                                            <button
                                                onClick={handleClose}
                                                className="bg-transparent border border-[#333333] text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider text-sm py-3 px-10 rounded-sm transition-all duration-300"
                                            >
                                                Close Window
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AuditModal;
