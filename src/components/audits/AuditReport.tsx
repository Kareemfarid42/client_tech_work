import { motion } from "framer-motion";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";

interface AuditReportProps {
    onOpenModal: () => void;
}

const AuditReport = ({ onOpenModal }: AuditReportProps) => {
    const deliverables = [
        "Executive Summary and Business Impact",
        "Marketing & Funnel Analysis",
        "Automation & Lead Nurture Review",
        "Digital Infrastructure Optimization",
        "Analytics & Reporting Review"
    ];

    return (
        <section className="py-24 relative overflow-hidden text-center md:text-left">
            {/* Background Hex Texture (Simulated) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

            <div className="container-max section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: The 3D PDF Representation */}
                <div className="flex justify-center items-center perspective-[1000px] h-full min-h-[400px]">
                    <motion.div
                        initial={{ opacity: 0, rotateY: 30, rotateX: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotateY: 15, rotateX: 5, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="relative w-full max-w-[340px] aspect-[1/1.4] bg-[#0a0a0a] rounded-r-3xl border border-[#333333] shadow-[30px_20px_50px_rgba(0,0,0,0.8),_inset_10px_0_20px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col"
                    >
                        {/* Book Binding effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent border-r border-white/5 z-20 pointer-events-none" />

                        {/* Report Cover Stylings */}
                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="text-[#17aa8c] text-xs font-mono mb-2 uppercase tracking-widest bg-[#17aa8c]/10 inline-block px-2 py-1 rounded">Confidential</div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">Performance<br />Diagnostic<br />Report</h3>
                                <div className="text-[#555] text-[10px] font-mono border-t border-[#333333] pt-2 mt-4 inline-block">
                                    ID: CHK-2024-X9<br />
                                    STATUS: EXECUTED
                                </div>
                            </div>

                            {/* Faux graph on cover */}
                            <div className="flex items-end h-24 gap-1 opacity-50">
                                {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#17aa8c]/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 border-t border-[#333333] pt-6">
                                <div className="w-8 h-8 rounded bg-[#111111] border border-[#333333] flex items-center justify-center">
                                    <FileText className="w-4 h-4 text-[#888888]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs font-mono text-white">45 Pages</div>
                                    <div className="text-[10px] font-mono text-[#555]">Generated in 48hrs</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Deliverables & Final CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 text-center">
                        Your Digital Performance <span className="text-[#17aa8c]">Blueprint</span>
                    </h2>
                    <p className="text-[#888888] text-lg leading-relaxed mb-8 font-sans text-center">
                        Our audit provides a clear overview of how your digital systems, marketing channels, and automation workflows are performing.
                        You receive practical insights and recommendations that help improve lead generation, customer engagement, and operational efficiency.
                    </p>

                    <div className="space-y-4 mb-10">
                        {deliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#17aa8c] flex-shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={onOpenModal}
                        className="w-full relative overflow-hidden group border border-[#17aa8c] text-[#17aa8c] font-bold py-5 rounded-sm bg-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(23, 170, 140,0.3)]"
                    >
                        <span className="absolute inset-0 w-full h-full bg-[#17aa8c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300 text-lg">
                            schedule Your Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <p className="text-[#555] text-xs font-mono text-center mt-4 tracking-widest">limited Audit Availability Each Month.</p>

                </motion.div>

            </div>
        </section>
    );
};

export default AuditReport;
