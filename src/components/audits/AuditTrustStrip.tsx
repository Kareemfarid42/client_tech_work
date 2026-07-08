import { motion } from "framer-motion";
import { Search, MapPin, Share2, LayoutTemplate, ShoppingBag, TrendingUp } from "lucide-react";

const AuditTrustStrip = () => {
    const platforms = [
        { name: "Google Business", icon: <MapPin className="w-5 h-5" /> },
        { name: "Google Ads", icon: <Search className="w-5 h-5" /> },
        { name: "Meta Platforms", icon: <Share2 className="w-5 h-5" /> },
        { name: "WordPress", icon: <LayoutTemplate className="w-5 h-5" /> },
        { name: "Shopify", icon: <ShoppingBag className="w-5 h-5" /> },
        { name: "Local SEO", icon: <TrendingUp className="w-5 h-5" /> }
    ];

    return (
        <div className="w-full border-b border-[#333333] bg-[#000000] py-8 overflow-hidden relative flex flex-col items-center">
            <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#555] mb-5 text-center">
                Platforms & Ecosystems We Review
            </div>
            <div className="container-max flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 opacity-80">
                {platforms.map((platform, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-2.5 text-sm md:text-base font-heading font-semibold text-[#888888] hover:text-white transition-colors duration-300 cursor-default grayscale hover:grayscale-0"
                    >
                        {platform.icon}
                        <span>{platform.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AuditTrustStrip;
