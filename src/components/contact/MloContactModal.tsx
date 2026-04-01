import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

interface MloContactModalProps {
    children: React.ReactNode;
}

export const MloContactModal = ({ children }: MloContactModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                {
                    ...formData,
                    service: "Mortgage Loan Officer Solutions",
                    source: "MLO Landing Page",
                    form_type: "Schedule a Consultation"
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Inquiry Sent Successfully!", {
                description: "Our MLO systems expert will contact you within 24 hours.",
            });

            // Reset form and close modal
            setFormData({
                name: "",
                company: "",
                email: "",
                message: ""
            });
            setIsOpen(false);

        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send inquiry", {
                description: "Please try again or call us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-md bg-[#0a0a0a] border-[#333333] p-0 overflow-hidden rounded-3xl">
                <div className="p-5">
                    <h2 className="text-xl font-heading font-bold text-white mb-0.5">Send a Message</h2>
                    <p className="text-[#888888] text-[11px] mb-4">Fill out the form below and we'll get back to you shortly.</p>

                    <form className="space-y-3" onSubmit={handleSubmit}>
                        {/* Name & Company Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-[11px] font-medium text-[#888888] block">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17AA8C] focus:ring-1 focus:ring-[#17AA8C] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="company" className="text-[11px] font-medium text-[#888888] block">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    required
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17AA8C] focus:ring-1 focus:ring-[#17AA8C] transition-all"
                                    placeholder="Acme Corp"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-[11px] font-medium text-[#888888] block">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17AA8C] focus:ring-1 focus:ring-[#17AA8C] transition-all"
                                placeholder="john@acmecorp.com"
                            />
                        </div>

                        {/* Message Box */}
                        <div className="space-y-1">
                            <label htmlFor="message" className="text-[11px] font-medium text-[#888888] block">Project Details</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full bg-[#111111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17AA8C] focus:ring-1 focus:ring-[#17AA8C] transition-all resize-none"
                                placeholder="Tell us about your objectives, timeline, and technical constraints..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative overflow-hidden group border border-[#17AA8C] text-[#17AA8C] font-bold py-2.5 rounded-xl mt-1 bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(23,170,140,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#17AA8C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
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
                </div>
            </DialogContent>
        </Dialog>
    );
};
