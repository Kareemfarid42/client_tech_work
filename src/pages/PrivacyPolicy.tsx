import { LegalLayout, Section } from "@/components/layout/LegalLayout";

const sections: Section[] = [
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-your-information", title: "How We Use Your Information" },
    { id: "cookies-and-tracking", title: "Cookies and Tracking Technologies" },
    { id: "data-security", title: "Data Security" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "sms-privacy", title: "SMS and Mobile Communication Privacy" },
    { id: "external-links", title: "External Links" },
    { id: "your-privacy-rights", title: "Your Privacy Rights" },
    { id: "updates", title: "Updates to This Privacy Policy" },
    { id: "contact-us", title: "Contact Us" },
];

const PrivacyPolicy = () => {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="03/11/2026"
            sections={sections}
        >
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-gray-300 m-0 mb-4">
                    ClienTech Solutions respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, interact with our digital platforms, or communicate with our team.
                </p>
                <p className="text-gray-300 m-0 mb-4">
                    ClienTech Solutions provides digital services including technology solutions, digital transformation support, and related consulting services. We are committed to responsible data handling and protecting the privacy of individuals and organizations that interact with our services.
                </p>
                <p className="text-gray-300 m-0 font-medium text-white/90">
                    By using our website, you agree to the practices described in this Privacy Policy.
                </p>
            </div>

            <section id="information-we-collect" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Information We Collect
                </h2>
                <p>
                    We may collect certain information when you interact with our website or communicate with us.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-4">Personal Information</h3>
                <p className="mb-4">
                    When you submit a contact form, request a proposal, or communicate with our team, we may collect information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company or organization name</li>
                    <li>Any message or information you provide</li>
                </ul>
                <p className="italic text-gray-400">This information is only collected when you voluntarily provide it.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">Usage Information</h3>
                <p className="mb-4">
                    When you visit our website, certain technical information may be collected automatically. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Pages visited on our website</li>
                    <li>Time spent on pages</li>
                </ul>
                <p>
                    This information helps us understand how visitors interact with our website and allows us to improve our digital services and user experience.
                </p>
            </section>

            <section id="how-we-use-your-information" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    How We Use Your Information
                </h2>
                <p className="mb-4">
                    ClienTech Solutions may use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>Respond to inquiries and communication requests</li>
                    <li>Provide information about our services</li>
                    <li>Process consultation or proposal requests</li>
                    <li>Improve our website and digital platforms</li>
                    <li>Maintain website performance and security</li>
                    <li>Communicate important updates related to our services</li>
                </ul>
                <p className="font-medium text-white/90">
                    We do not sell, rent, or trade personal information to third parties.
                </p>
            </section>

            <section id="cookies-and-tracking" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                    Our website may use cookies or similar technologies to improve website functionality and understand how visitors use our website.
                </p>
                <p className="mb-4">Cookies may help us:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>Analyze website traffic</li>
                    <li>Improve website performance</li>
                    <li>Remember visitor preferences</li>
                </ul>
                <p>
                    You may choose to disable cookies through your browser settings if you prefer.
                </p>
            </section>

            <section id="data-security" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Data Security
                </h2>
                <p className="mb-4">
                    ClienTech Solutions takes reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, or disclosure.
                </p>
                <p>
                    While we work to maintain secure systems, no internet transmission or electronic storage method can be guaranteed to be completely secure.
                </p>
            </section>
            <section id="third-party" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Third-Party Services
                </h2>
                <p className="mb-4">
                    Our website may use trusted third-party services such as website hosting, analytics tools, or communication platforms to support our digital services.
                </p>
                <p>
                    These providers may collect limited technical information necessary to operate their services and follow their own privacy policies.
                </p>
            </section>

            <section id="sms-privacy" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    SMS and Mobile Communication Privacy
                </h2>
                <p className="mb-4">
                    ClienTech Solutions is committed to protecting your mobile privacy. If you opt-in to receive text messages from us, we handle your information with the highest level of confidentiality.
                </p>
                <div className="p-6 rounded-2xl bg-[#17aa8c]/5 border border-[#17aa8c]/20">
                    <p className="text-white font-medium mb-0 leading-relaxed">
                        Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                    </p>
                </div>
            </section>

            <section id="external-links" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    External Links
                </h2>
                <p className="mb-4">
                    Our website may contain links to external websites for informational purposes. ClienTech Solutions is not responsible for the privacy practices or content of external websites.
                </p>
                <p>
                    We encourage visitors to review the privacy policies of any third-party websites they visit.
                </p>
            </section>

            <section id="your-privacy-rights" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Your Privacy Rights
                </h2>
                <p className="mb-4">
                    Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                    <li>Request access to the personal information we hold about you</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Withdraw consent for certain communications</li>
                </ul>
                <p>
                    To make a request regarding your information, please contact us using the details below.
                </p>
            </section>

            <section id="updates" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Updates to This Privacy Policy
                </h2>
                <p className="mb-4">
                    ClienTech Solutions may update this Privacy Policy from time to time. Any updates will be posted on this page along with the updated effective date.
                </p>
                <p>
                    We encourage visitors to review this page periodically to stay informed.
                </p>
            </section>

            <section id="contact-us" className="scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    Contact Us
                </h2>
                <p className="mb-4">
                    If you have questions about this Privacy Policy or how your information is handled, please contact us.
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

export default PrivacyPolicy;
