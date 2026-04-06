import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

import { MloContactModal } from "./MloContactModal";

interface MloDemoModalProps {
    children: React.ReactNode;
}

export const MloDemoModal = ({ children }: MloDemoModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-[#0a0a0a] border-[#333333] p-0 overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative group overflow-hidden bg-black aspect-[21/9] flex items-center justify-center border-b border-white/10">
                    {/* Placeholder for Video Demo */}
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                        alt="System Demo Placeholder" 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 w-16 h-16 rounded-full bg-[#17AA8C] flex items-center justify-center shadow-[0_0_30px_rgba(23,170,140,0.4)]"
                    >
                        <Play className="w-6 h-6 text-white fill-current translate-x-0.5" />
                    </motion.button>
                    
                    <div className="absolute bottom-3 left-5 right-5 z-10">
                        <p className="text-white font-bold text-base mb-0">ClienTech MLO System Walkthrough</p>
                        <p className="text-gray-400 text-[10px]">Preview how our automated pipeline delivers qualified leads.</p>
                    </div>
                </div>

                <div className="p-5 bg-[#0a0a0a]">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-lg font-bold text-white mb-3 text-center">What's inside the demo?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {[
                                "Automated Lead Capture & AEO Systems",
                                "AI-Driven Borrower Qualification",
                                "Real-time Pipeline Management Dashboard",
                                "Automated Nurture & Referral Workflows"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-gray-400 text-[11px] leading-relaxed">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#17AA8C] shrink-0 mt-0.5" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center pb-2">
                             <MloContactModal>
                                <button className="bg-[#17AA8C] hover:bg-[#138e75] text-white px-10 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 text-sm">
                                    Schedule Your Demo Consultation
                                </button>
                             </MloContactModal>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
