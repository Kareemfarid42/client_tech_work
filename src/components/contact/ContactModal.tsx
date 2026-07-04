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

interface ContactModalProps {
    children: React.ReactNode;
    defaultService?: string;
    website?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const ContactModal = ({ children, defaultService, website, open, onOpenChange }: ContactModalProps) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open !== undefined ? open : internalOpen;
    const setIsOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        service: defaultService || "",
        initial_service: defaultService || "General Inquiry",
        message: website ? `Website to Audit: ${website}\n\nProject details:` : ""
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

            // Reset form and close modal
            setFormData({
                name: "",
                company: "",
                email: "",
                service: defaultService || "",
                initial_service: defaultService || "General Inquiry",
                message: website ? `Website to Audit: ${website}\n\nProject details:` : ""
            });
            setIsOpen(false);

        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send message", {
                description: "Please try again or email us directly at admin@clientechsolutions.com",
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
            <DialogContent className="w-[95vw] max-w-sm bg-[#0a0a0a] border-[#333333] p-0 rounded-3xl max-h-[calc(100vh-var(--nav-height)-30px)] overflow-y-auto no-scrollbar shadow-2xl !top-[calc(var(--nav-height)+15px)] !translate-y-0 mb-4">
                <div className="p-4 md:p-5">
                    <h2 className="text-lg font-heading font-bold text-white mb-4">Speak with an Expert</h2>

                    <form className="space-y-3" onSubmit={handleSubmit}>
                        {/* Name & Company Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#888888] block">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-2.5 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#2DB298] focus:ring-1 focus:ring-[#2DB298] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-[#888888] flex items-center justify-between whitespace-nowrap gap-1">
                                    <span>Company Name</span>
                                    <span className="text-[10px] text-[#555]">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-2.5 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#2DB298] focus:ring-1 focus:ring-[#2DB298] transition-all"
                                    placeholder="Acme Corp"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[#888888] block">Work Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-2.5 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#2DB298] focus:ring-1 focus:ring-[#2DB298] transition-all"
                                placeholder="john@acmecorp.com"
                            />
                        </div>

                        {/* Service Selection Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-[#888888] block flex items-center justify-between">
                                <span>How can we help?</span>
                                <span className="text-[10px] text-[#555]">(Optional)</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-[#2DB298] focus:ring-1 focus:ring-[#2DB298] transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="text-[#555]">Select your area of interest...</option>
                                    
                                    {(() => {
                                        const dynamicOptions: Record<string, string[]> = {
                                            "Content Marketing": [
                                                "Content Marketing", "Content Strategy", "SEO Content Writing", "Website Copywriting", 
                                                "Blog Writing", "Landing Page Copy", "Social Media Content", "Short-Form Video Scripts",
                                                "Video Shorts (Reels, TikTok & YouTube Shorts)", "Email Marketing Content", "Content Calendar Planning"
                                            ],
                                            "Google Ads": [
                                                "Google Ads", "Google Ads Account Setup", "Search Campaigns", "Display Campaigns", 
                                                "Performance Max Campaigns", "Local Services Ads (LSA)", "Google Shopping Ads", 
                                                "Remarketing Campaigns", "Conversion Tracking Setup", "Campaign Optimization", "Monthly Campaign Management"
                                            ],
                                            "Meta Ads": [
                                                "Meta Ads", "Facebook Ads", "Instagram Ads", "Lead Generation Campaigns", "Brand Awareness Campaigns",
                                                "Retargeting Campaigns", "Lookalike Audience Setup", "Meta Pixel & Conversion API Setup",
                                                "Creative Testing", "Campaign Optimization", "Monthly Ad Management"
                                            ],
                                            "Lead Generation": [
                                                "Lead Generation", "Landing Pages", "Lead Funnels", "Lead Capture Forms", "CRM Integration",
                                                "Appointment Booking Systems", "Email Lead Nurturing", "SMS Follow-up Campaigns",
                                                "Local Lead Generation", "B2B Lead Generation", "Pipeline Management"
                                            ],
                                            "Marketing Automation": [
                                                "Marketing Automation", "CRM Automation", "Email Automation", "SMS Automation", "Workflow Automation",
                                                "Lead Scoring", "Appointment Reminders", "Follow-up Sequences", "Review Request Automation",
                                                "Sales Pipeline Automation", "AI Workflow Integration"
                                            ],
                                            "AI Chatbots": [
                                                "AI Chatbots", "Website AI Chatbots", "Lead Qualification Bots", "Appointment Booking Bots",
                                                "Customer Support Chatbots", "FAQ Automation", "Messenger Chatbots",
                                                "Instagram DM Automation", "WhatsApp Automation", "AI Sales Assistant", "CRM Integration"
                                            ]
                                        };

                                        if (defaultService && dynamicOptions[defaultService]) {
                                            return dynamicOptions[defaultService].map((opt) => (
                                                <option key={opt} value={opt} className="bg-[#111111] text-white">{opt}</option>
                                            ));
                                        }

                                        return (
                                            <>
                                                {/* Primary Capabilities */}
                                                <option value="Digital Foundations" className="bg-[#111111] text-white">Digital Foundations</option>
                                                <option value="Digital Solutions Engineering" className="bg-[#111111] text-white">Digital Solutions Engineering</option>
                                                <option value="AI, Data & Intelligent Systems" className="bg-[#111111] text-white">AI, Data & Intelligent Systems</option>
                                                <option value="Digital Transformation & Advisory" className="bg-[#111111] text-white">Digital Transformation & Advisory</option>
                                                {/* Supporting Capabilities */}
                                                <option value="Cloud & Infrastructure Services" className="bg-[#111111] text-white">Cloud & Infrastructure Services</option>
                                                <option value="Enterprise Systems & Platforms" className="bg-[#111111] text-white">Enterprise Systems & Platforms</option>
                                                <option value="UX, Product & Experience Design" className="bg-[#111111] text-white">UX, Product & Experience Design</option>
                                                <option value="Integration & Automation" className="bg-[#111111] text-white">Integration & Automation</option>
                                                <option value="Security, Compliance & Reliability" className="bg-[#111111] text-white">Security, Compliance & Reliability</option>
                                                <option value="Staff Augmentation & Managed Teams" className="bg-[#111111] text-white">Staff Augmentation & Managed Teams</option>
                                                {/* Specialized & General */}
                                                <option value="SEO & Search Optimization" className="bg-[#111111] text-white">SEO & Search Optimization</option>
                                                <option value="Social Media Marketing" className="bg-[#111111] text-white">Social Media Marketing</option>
                                                <option value="Performance Audit" className="bg-[#111111] text-white">Complimentary Performance Audit</option>
                                                <option value="General Inquiry" className="bg-[#111111] text-white">General Inquiry</option>
                                            </>
                                        );
                                    })()}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#888888]">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[#888888] block flex items-center justify-between">
                                <span>Project Details</span>
                                <span className="text-[10px] text-[#555]">(Optional)</span>
                            </label>
                            <textarea
                                id="message"
                                rows={2}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-2 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#2DB298] focus:ring-1 focus:ring-[#2DB298] transition-all resize-none"
                                placeholder="Objectives..."
                            ></textarea>
                        </div>

                        {/* Highly Stylized Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative overflow-hidden group border border-[#2DB298] text-[#2DB298] font-bold py-3 rounded-sm mt-1 bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,178,152,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#2DB298] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
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
                </div>
            </DialogContent>
        </Dialog>
    );
};
