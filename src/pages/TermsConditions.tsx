import { LegalLayout, Section } from "@/components/layout/LegalLayout";

const sections: Section[] = [
    { id: "use-of-website", title: "Use of Our Website" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "services-information", title: "Services Information" },
    { id: "user-submissions", title: "User Submissions" },
    { id: "third-party-links", title: "Third-Party Links" },
    { id: "limitation-of-liability", title: "Limitation of Liability" },
    { id: "changes-to-terms", title: "Changes to These Terms" },
    { id: "governing-law", title: "Governing Law" },
    { id: "sms-terms", title: "SMS Terms and Conditions" },
    { id: "contact-information", title: "Contact Information" },
];

const TermsConditions = () => {
    return (
        <LegalLayout
            title="Terms and Conditions"
            lastUpdated="03/11/2026"
            sections={sections}
        >
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-gray-300 m-0 mb-4">
                    Welcome to the ClienTech Solutions website. These Terms and Conditions outline the rules and guidelines for using our website and services.
                </p>
                <p className="text-gray-300 m-0 font-medium text-white/90">
                    By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
                </p>
            </div>

            <section id="use-of-website" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Use of Our Website
                </h2>
                <p className="mb-4">
                    The content provided on this website is for general informational purposes related to ClienTech Solutions and the digital services we offer.
                </p>
                <p className="mb-4">By using this website, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>Use the website only for lawful purposes</li>
                    <li>Not attempt to disrupt or damage the website or its functionality</li>
                    <li>Not misuse any information or content available on the website</li>
                </ul>
                <p className="font-medium text-white/90">
                    ClienTech Solutions reserves the right to restrict or terminate access to the website if these terms are violated.
                </p>
            </section>

            <section id="intellectual-property" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Intellectual Property
                </h2>
                <p className="mb-4">
                    All content on this website, including text, graphics, logos, designs, and other materials, is the property of ClienTech Solutions unless otherwise stated.
                </p>
                <p>
                    You may not copy, reproduce, distribute, or use website content for commercial purposes without written permission from ClienTech Solutions.
                </p>
            </section>

            <section id="services-information" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Services Information
                </h2>
                <p className="mb-4">
                    ClienTech Solutions provides digital services including digital transformation support, technology solutions, and related consulting services.
                </p>
                <p>
                    Information about services presented on this website is provided for general guidance. Specific project details, timelines, and pricing may vary depending on client requirements and will be discussed directly during consultation.
                </p>
            </section>

            <section id="user-submissions" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    User Submissions
                </h2>
                <p className="mb-4">
                    If you submit information through forms on our website, such as contact forms or proposal requests, you agree that the information you provide is accurate and complete.
                </p>
                <p>
                    ClienTech Solutions may use this information to respond to your inquiry or provide service-related communication.
                </p>
            </section>

            <section id="third-party-links" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Third-Party Links
                </h2>
                <p className="mb-4">
                    Our website may contain links to external websites. These links are provided for convenience and informational purposes.
                </p>
                <p>
                    ClienTech Solutions does not control or take responsibility for the content, privacy practices, or policies of third-party websites.
                </p>
            </section>

            <section id="limitation-of-liability" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Limitation of Liability
                </h2>
                <p className="mb-4">
                    ClienTech Solutions strives to keep the information on this website accurate and up to date. However, we do not guarantee that all information is always complete, accurate, or current.
                </p>
                <p>
                    ClienTech Solutions is not responsible for any direct or indirect damages that may result from the use of this website or reliance on its content.
                </p>
            </section>

            <section id="changes-to-terms" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Changes to These Terms
                </h2>
                <p className="mb-4">
                    ClienTech Solutions may update these Terms and Conditions from time to time. Updated versions will be posted on this page with the revised effective date.
                </p>
                <p>
                    Continued use of the website after changes are made indicates acceptance of the updated terms.
                </p>
            </section>

            <section id="governing-law" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Governing Law
                </h2>
                <p>
                    These Terms and Conditions are governed by and interpreted in accordance with applicable laws in the jurisdiction where ClienTech Solutions operates.
                </p>
            </section>

            <section id="sms-terms" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    SMS Terms and Conditions
                </h2>
                <p className="mb-4">
                    By providing your phone number and opting in to text messaging, you agree to receive automated service notifications, appointment reminders, and marketing messages from ClienTech Solutions LLC.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <ul className="space-y-4 text-gray-300">
                        <li><strong className="text-white">Message Frequency:</strong> Message frequency varies. We send messages only when relevant to your service or inquiry.</li>
                        <li><strong className="text-white">Rates:</strong> Message and data rates may apply depending on your mobile carrier plan.</li>
                        <li><strong className="text-white">Opt-Out:</strong> Text <span className="text-[#17aa8c] font-bold">STOP</span> to any message to unsubscribe at any time. Once you opt out, you will receive one final confirmation message.</li>
                        <li><strong className="text-white">Support:</strong> Text <span className="text-[#17aa8c] font-bold">HELP</span> for assistance or contact us directly at info@clientechsolutions.com.</li>
                    </ul>
                </div>
                <p>
                    Your consent to receive text messages is not a condition of purchase. Mobile information will not be shared with third parties for marketing purposes.
                </p>
            </section>

            <section id="contact-information" className="scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Contact Information
                </h2>
                <p className="mb-4">
                    If you have questions about these Terms and Conditions, please contact us.
                </p>
                <div className="mt-8 p-6 rounded-2xl bg-[#17aa8c]/10 border border-[#17aa8c]/20">
                    <h3 className="text-xl font-bold text-white mb-2">ClienTech Solutions</h3>
                    <ul className="space-y-4">
                        <li>
                            <span className="text-gray-400 block text-sm uppercase tracking-wider mb-1">Email</span>
                            <a href="mailto:info@clientechsolutions.com" className="text-[#17aa8c] font-bold hover:underline">info@clientechsolutions.com</a>
                        </li>
                        <li>
                            <span className="text-gray-400 block text-sm uppercase tracking-wider mb-1">Website</span>
                            <a href="https://www.clientech-solutions.com" target="_blank" rel="noopener noreferrer" className="text-[#17aa8c] font-bold hover:underline">www.clientech-solutions.com</a>
                        </li>
                    </ul>
                </div>
            </section>

        </LegalLayout>
    );
};

export default TermsConditions;
