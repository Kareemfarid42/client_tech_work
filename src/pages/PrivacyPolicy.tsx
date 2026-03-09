import { LegalLayout, Section } from "@/components/layout/LegalLayout";

const sections: Section[] = [
    { id: "data-collection", title: "1. Data Collection" },
    { id: "usage-policies", title: "2. Usage Policies" },
    { id: "cookie-tracking", title: "3. Cookie Tracking" },
    { id: "third-party", title: "4. Third-Party Sharing" },
    { id: "data-security", title: "5. Data Security" },
    { id: "user-rights", title: "6. Your Rights" },
];

const PrivacyPolicy = () => {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="October 15, 2025"
            sections={sections}
        >
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-gray-300 m-0">
                    At ClienTech Solutions, transparency and data integrity are the core of our operations. This Privacy Policy details the exact mechanisms by which we collect, safeguard, and utilize your information when you interact with our digital properties and services.
                </p>
            </div>

            <section id="data-collection" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">01 //</span> Data Collection
                </h2>
                <p>
                    We employ strict data minimization principles. We only collect data that is fundamentally necessary to execute our services, process your audits, and communicate effectively regarding project statuses.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                    <li><strong className="text-white font-medium">Identity Data:</strong> Name, professional title, and organizational affiliation.</li>
                    <li><strong className="text-white font-medium">Contact Data:</strong> Official corporate email addresses and direct phone numbers.</li>
                    <li><strong className="text-white font-medium">Technical Data:</strong> IP addresses, browser specifications, and timestamp metrics collected during your session on our platform.</li>
                    <li><strong className="text-white font-medium">Project Data:</strong> Internal documents, codebase access credentials, and strategic briefs provided explicitly by you during the onboarding phase.</li>
                </ul>
            </section>

            <section id="usage-policies" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">02 //</span> Usage Policies
                </h2>
                <p>
                    Your data is never monetized. We utilize your provided information exclusively for the following operational protocols:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-[#111111] border border-white/5">
                        <h4 className="text-white font-bold mb-2">Service Execution</h4>
                        <p className="text-sm text-gray-400 m-0">To deliver our performance audits, digital marketing campaigns, and technical consulting parameters.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111111] border border-white/5">
                        <h4 className="text-white font-bold mb-2">Platform Security</h4>
                        <p className="text-sm text-gray-400 m-0">To actively monitor our infrastructure for anomalous behavior, preventing DDoS attacks and unauthorized intrusions.</p>
                    </div>
                </div>
            </section>

            <section id="cookie-tracking" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">03 //</span> Cookie Tracking
                </h2>
                <p>
                    Our web architecture utilizes localized cookies to maintain user sessions and aggregate high-level performance metrics. We employ standard <code className="text-cyan-400 bg-cyan-400/10 px-1 rounded">localStorage</code> and session markers. You reserve the right to configure your browser to reject these tracking modules, though it may degrade certain interactive components of the Transparency Center.
                </p>
            </section>

            <section id="third-party" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">04 //</span> Third-Party Sharing
                </h2>
                <p>
                    We do not sell our database. We only transmit operational data to verified, SOC2-compliant sub-processors mathematically necessary to host our infrastructure (e.g., AWS, Vercel) or process secure payments (e.g., Stripe).
                </p>
            </section>

            <section id="data-security" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">05 //</span> Data Security
                </h2>
                <p>
                    ClienTech Solutions deploys enterprise-grade cryptography. All data in transit is secured via TLS 1.3 encryption. At rest, databases are protected using AES-256 standard encryption. Access to production environments requires multi-factor authentication (MFA) and is strictly granted on a zero-trust, rotating basis to cleared engineering personnel.
                </p>
            </section>

            <section id="user-rights" className="scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">06 //</span> Your Rights
                </h2>
                <p>
                    Under GDPR, CCPA, and global privacy frameworks, you retain absolute sovereignty over your data.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                    <li><strong>Right to Access:</strong> You may request a complete JSON export of your profile at any time.</li>
                    <li><strong>Right to Erasure:</strong> You can invoke the 'Right to be Forgotten.' We will purge your identifiers from our active clusters within 72 hours.</li>
                    <li><strong>Right to Rectification:</strong> If your organizational data is stale, you may demand immediate updates to our records.</li>
                </ul>
                <div className="mt-8 p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                    <p className="text-cyan-50 font-medium m-0">
                        To execute any of these data rights, immediately contact our Data Protection Officer at <br />
                        <a href="mailto:privacy@clientech.io" className="text-cyan-400 font-bold hover:underline">privacy@clientech.io</a>.
                    </p>
                </div>
            </section>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
