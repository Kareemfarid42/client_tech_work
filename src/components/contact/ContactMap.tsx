import { motion } from "framer-motion";

const ContactMap = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#333333] relative mt-16 md:mt-24 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10"
        >
            <iframe
                src="https://maps.google.com/maps?q=3422+Hacienda+Rd,+Cameron+Park,+CA+95682,+United+States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="w-full h-full"
            ></iframe>
            {/* Optional overlay to make it fit slightly better with the dark theme and prevent direct scrolling unless clicked */}
            <div className="absolute inset-0 bg-[#17aa8c]/5 pointer-events-none mix-blend-overlay"></div>
        </motion.div>
    );
};

export default ContactMap;
