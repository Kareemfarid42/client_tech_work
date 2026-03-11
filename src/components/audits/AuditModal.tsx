import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CustomDatePicker } from "@/components/ui/multi-view-calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface AuditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
    const [date, setDate] = useState<Date>();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        projectType: "",
        projectStage: "",
        budget: "",
        description: "",
        additionalNotes: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const submissionData = {
                ...formData,
                desiredLaunchDate: date ? format(date, "PPP") : "Not specified",
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_AUDIT_TEMPLATE_ID,
                submissionData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Audit Request Sent Successfully!", {
                description: "Our engineering team will review your details and contact you within 24 hours.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                companyName: "",
                phoneNumber: "",
                projectType: "",
                projectStage: "",
                budget: "",
                description: "",
                additionalNotes: ""
            });
            setDate(undefined);
            
            // Close modal after delay
            setTimeout(onClose, 500);

        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send request", {
                description: "Please try again or email us directly at info@clientechsolutions.com",
            });
        } finally {
            setIsSubmitting(false);
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
                    onClick={onClose}
                >
                    <div className="min-h-full py-4 sm:py-6 flex items-center w-full max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full bg-[#0a0a0a] border border-[#333333] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-[#888888] hover:text-[#17aa8c] transition-colors border border-transparent hover:border-[#333333] z-50"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="px-6 py-6 md:px-8 md:pt-8 md:pb-6 border-b border-[#333333] relative">
                                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#17aa8c]/50 to-transparent" />
                                <div className="absolute top-0 right-1/4 w-24 h-24 bg-[#17aa8c]/10 blur-[40px] rounded-full pointer-events-none" />

                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1.5 tracking-tight">
                                    Schedule Your <span className="text-[#17aa8c]">Audit</span>
                                </h2>
                                <p className="text-[#888888] text-sm font-sans">
                                    Please provide context on your current architecture to help our engineering team prepare.
                                </p>
                            </div>

                            {/* Form Content */}
                            <div className="px-6 py-6 md:px-8 md:py-8 bg-[#000000]">
                                <form className="space-y-4" onSubmit={handleSubmit}>

                                    {/* Row 1: 4 Columns (or 2x2 on mobile) */}
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
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                placeholder="Enter Your Name"
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
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Company Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                required
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                placeholder="Enter Company Name"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all"
                                                placeholder="Enter Phone Number"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: 2 Columns */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Project Type <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="projectType"
                                                required
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="text-[#333333]">Select Project Type</option>
                                                <option value="web-app">Web Application</option>
                                                <option value="ecommerce">E-Commerce Architecture</option>
                                                <option value="cloud">Cloud Infrastructure</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Current Project Stage <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="projectStage"
                                                required
                                                value={formData.projectStage}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="text-[#333333]">Select Project Stage</option>
                                                <option value="planning">Initial Planning / Arch</option>
                                                <option value="development">In Development (Pre-Launch)</option>
                                                <option value="live">Live in Production (Refactoring)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 3: 2 Columns */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block pb-0.5">
                                                Desired Launch Date
                                            </label>
                                            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal bg-[#111111] hover:bg-[#1a1a1a] hover:text-white border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all h-[38px] min-h-[38px]",
                                                            !date && "text-[#333333]"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                                                        {date ? (
                                                            format(date, "PPP")
                                                        ) : (
                                                            <span className="font-mono text-[#333333]">Jan 01, 2025</span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 z-[110] bg-transparent border-none shadow-none" align="start">
                                                    <CustomDatePicker
                                                        value={date}
                                                        onChange={(newDate) => {
                                                            setDate(newDate);
                                                            setIsCalendarOpen(false);
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Estimated Budget
                                            </label>
                                            <input
                                                type="number"
                                                id="budget"
                                                min="0"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all font-mono"
                                                placeholder="5000"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 4: 2 Columns Textareas */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Project Description <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="description"
                                                required
                                                rows={3}
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all resize-none"
                                                placeholder="Enter Project Description..."
                                            ></textarea>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-semibold uppercase tracking-widest text-[#555] block">
                                                Additional Notes
                                            </label>
                                            <textarea
                                                id="additionalNotes"
                                                rows={3}
                                                value={formData.additionalNotes}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#111111] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-[#333333] focus:outline-none focus:border-[#17aa8c] focus:ring-1 focus:ring-[#17aa8c] transition-all resize-none"
                                                placeholder="I want to..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Footer / Submit */}
                                    <div className="pt-4 border-t border-[#333333] mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto relative overflow-hidden group border border-[#17aa8c] text-[#17aa8c] text-sm font-bold py-3 px-10 rounded-sm bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 170, 140,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="absolute inset-0 w-full h-full bg-[#17aa8c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
                                                {isSubmitting ? (
                                                    <>
                                                        Sending... <Loader2 className="w-4 h-4 animate-spin" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </button>

                                        <div className="text-[10px] text-[#555555]">
                                            All fields marked with <span className="text-red-500">*</span> are required.
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AuditModal;
