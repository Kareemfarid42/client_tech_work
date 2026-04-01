import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

export const GlobalPresenceMap = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-secondary overflow-hidden">
            <div className="container-max section-padding">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    >
                        <Globe className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4"
                    >
                        Our Global Presence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Headquartered in California with a global reach. We deliver localized expertise with enterprise scale.
                    </motion.p>
                </div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                >
                    {/* Dark Map Iframe */}
                    <iframe
                        src="https://maps.google.com/maps?q=3422+Hacienda+Rd,+Cameron+Park,+CA+95682,+United+States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Global Headquarters Map"
                        className="w-full h-full"
                    ></iframe>


                    {/* Subtle Overlay to unify theme */}
                    <div className="absolute inset-0 bg-[#2DB298]/5 pointer-events-none mix-blend-overlay" />
                </motion.div>

            </div>
        </section>
    );
};
