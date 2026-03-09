import { LegalLayout, Section } from "@/components/layout/LegalLayout";

const sections: Section[] = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "intellectual-property", title: "2. Intellectual Property" },
    { id: "service-availability", title: "3. Service Availability" },
    { id: "liability", title: "4. Liability Limitations" },
    { id: "termination", title: "5. Termination" },
    { id: "governing-law", title: "6. Governing Law" },
];

const TermsConditions = () => {
    return (
        <LegalLayout
            title="Terms & Conditions"
            lastUpdated="November 02, 2025"
            sections={sections}
        >
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-gray-300 m-0">
                    These Terms & Conditions constitute a legally binding agreement between you (the "Client") and ClienTech Solutions. By accessing our platform, utilizing our auditing tools, or engaging our engineering teams, you expressly acknowledge and agree to be bound by these operational parameters.
                </p>
            </div>

            <section id="acceptance" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">01 //</span> Acceptance of Terms
                </h2>
                <p>
                    Accessing the ClienTech infrastructure obligates you to these terms. If you do not possess the organizational authority to bind your company to this contract, or if you fundamentally disagree with any clause outlined in this document, you must immediately sever connection to our domain map and cease using our services.
                </p>
            </section>

            <section id="intellectual-property" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">02 //</span> Intellectual Property
                </h2>
                <p>
                    All proprietary algorithms, analytical methodologies, dashboard UIs, and backend architectural designs remain the exclusive intellectual property of ClienTech Solutions.
                </p>
                <p>
                    Upon full execution of a Master Service Agreement (MSA) and cleared payment, the specific, customized deliverables (e.g., source code commits, finalized audit PDFs, campaign assets) naturally transfer ownership to the Client. However, ClienTech retains the right to reuse the foundational frameworks and non-customized codeblocks used to construct those deliverables.
                </p>
            </section>

            <section id="service-availability" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">03 //</span> Service Availability
                </h2>
                <p>
                    We architect our diagnostic dashboards for 99.9% uptime. However, ClienTech Solutions does not guarantee uninterrupted operational status. The platform may experience scheduled downtime during off-peak hours (Sunday 02:00-04:00 UTC) for critical cluster scaling and security patching. We are not liable for any secondary business revenue lost during these standard maintenance windows.
                </p>
            </section>

            <section id="liability" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">04 //</span> Liability Limitations
                </h2>
                <p>
                    To the maximum extent permitted by global law, ClienTech Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, loss of profits, organizational data degradation, or intangible digital losses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                    <li>Your inability to access or execute scripts on our platform.</li>
                    <li>Any unverified third-party scripts executing malfeasance across our integration layer.</li>
                    <li>Server-side compromises originating from zero-day vulnerabilities in upstream dependencies (e.g., Cloudflare, AWS).</li>
                </ul>
                <div className="mt-6 p-4 rounded-xl border-l-4 border-cyan-500 bg-[#111111]">
                    <p className="text-sm text-gray-300 m-0">Our total liability, in any aggregated claim related to the service, shall remain strictly capped at the total financial amount explicitly paid by you to ClienTech Solutions over the preceding 12-month fiscal period.</p>
                </div>
            </section>

            <section id="termination" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">05 //</span> Termination
                </h2>
                <p>
                    We reserve the sovereign right to suspend or instantly terminate your access to the ClienTech network environment if we detect malicious activity, hostile reverse-engineering attempts, or blatant violation of our Acceptable Use Policies. Upon termination, backend access tokens will be immediately revoked and your ability to interact with the API will cease.
                </p>
            </section>

            <section id="governing-law" className="scroll-mt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="text-cyan-500 font-mono text-xl">06 //</span> Governing Law
                </h2>
                <p>
                    These Terms shall be interpreted and enforced strictly in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or dispute resolution arising out of these terms shall be settled exclusively in the state or federal courts located within San Francisco County.
                </p>
            </section>

        </LegalLayout>
    );
};

export default TermsConditions;
