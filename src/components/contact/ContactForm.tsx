import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        service: "",
        message: "",
        sms_consent: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target as HTMLInputElement;
        if (type === "checkbox") {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [id]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message Sent Successfully!", {
                description: "Thank you for reaching out. We'll get back to you shortly.",
            });

            // Reset form
            setFormData({
                name: "",
                company: "",
                email: "",
                service: "",
                message: "",
                sms_consent: false
            });

        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send message", {
                description: "Please try again or email us directly at info@clientechsolutions.com",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full bg-[#0a0a0a] rounded-3xl border border-[#333333] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
            <h2 className="text-2xl font-heading font-bold text-white mb-8">Send a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#888888] block">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-[#888888] block">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
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
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                        placeholder="john@acmecorp.com"
                    />
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-[#888888] block">How can we help?</label>
                    <div className="relative">
                        <select
                            id="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-[#555]">Select a service...</option>
                            <option value="performance-audit" className="bg-[#111111] text-white">Performance Audit</option>
                            <option value="digital-transformation" className="bg-[#111111] text-white">Digital Transformation</option>
                            <option value="digital-marketing" className="bg-[#111111] text-white">Digital Marketing</option>
                            <option value="marketing-automation" className="bg-[#111111] text-white">Marketing Automation</option>
                            <option value="product-marketing" className="bg-[#111111] text-white">Product Marketing</option>
                            <option value="gtm-strategy" className="bg-[#111111] text-white">GTM Strategy</option>
                            <option value="partnership-inquiry" className="bg-[#111111] text-white">Partnership Inquiry</option>
                            <option value="general-inquiry" className="bg-[#111111] text-white">General Inquiry</option>
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
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all resize-none"
                        placeholder="Tell us about your objectives, timeline, and technical constraints..."
                    ></textarea>
                </div>

                {/* SMS Opt-in Checkbox */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center h-5 mt-1">
                        <input
                            id="sms_consent"
                            type="checkbox"
                            required
                            checked={formData.sms_consent}
                            onChange={handleInputChange}
                            className="w-4 h-4 rounded border-white/20 bg-zinc-900 text-[#17aa8c] focus:ring-[#17aa8c] transition-colors cursor-pointer"
                        />
                    </div>
                    <div className="text-[11px] leading-relaxed text-gray-400">
                        <label htmlFor="sms_consent" className="cursor-pointer">
                            I consent to receive automated text messages from ClienTech Solutions LLC for service updates and marketing. 
                            Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. 
                            <br />
                            View our <a href="/privacy-policy" className="text-[#17aa8c] hover:underline" target="_blank">Privacy Policy</a> and <a href="/terms-conditions" className="text-[#17aa8c] hover:underline" target="_blank">Terms of Service</a>.
                        </label>
                    </div>
                </div>

                {/* Highly Stylized Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group border border-[#17aa8c] text-[#17aa8c] font-bold py-4 rounded-sm mt-4 bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 170, 140,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="absolute inset-0 w-full h-full bg-[#17aa8c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
                        {isSubmitting ? (
                            <>
                                Sending... <Loader2 className="w-5 h-5 animate-spin" />
                            </>
                        ) : (
                            <>
                                Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
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
