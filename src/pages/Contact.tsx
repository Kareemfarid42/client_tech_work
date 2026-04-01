import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
    // Ensure the page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#17aa8c] selection:text-white flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
                {/* Background ambient glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#17aa8c]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="container-max section-padding relative z-10 w-full max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                        {/* Left Column: Authority & Info (RomeTheme Ref) */}
                        <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
                            <ContactInfo />
                        </div>

                        {/* Right Column: High-Trust Form (WebEvis Ref) */}
                        <div className="flex flex-col justify-center order-1 lg:order-2">
                            <ContactForm />
                        </div>

                    </div>

                    {/* Integrated Map View */}
                    <ContactMap />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
