import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Senior Citizen Villa Horana",
  description:
    "Privacy policy and data protection guidelines for residents, families, and guardians at Senior Citizen Villa, Horana.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
      {/* Header Banner */}
      <header className="bg-[#0A140E] text-[#F7F4EE] pt-28 pb-16 px-6 border-b border-[#1C2C21]">
        <div className="max-w-4xl mx-auto space-y-4 text-center md:text-left">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2"
          >
            ← Back to Sanctuary Home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-white">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-[#A3B0A7] text-sm md:text-base font-light max-w-2xl">
            How Senior Citizen Villa collects, protects, and respects personal, medical, and contact information for our residents and their families.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#7A8A80]">
            LAST UPDATED: SEPTEMBER 2026
          </div>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="py-16 px-6 max-w-4xl mx-auto space-y-12 leading-relaxed font-light text-[#3A453F] text-base">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            1. Overview & Commitment
          </h2>
          <p>
            At <strong>Senior Citizen Villa (Horana)</strong>, we understand that senior residential care requires the highest degree of trust. We are committed to protecting the personal privacy and confidentiality of our residents, prospective residents, guardians, and family members.
          </p>
          <p>
            This policy outlines how we handle personal identity data, health disclosures, and digital communications when you interact with our website or submit inquiries to our care management team.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            2. Information We Collect
          </h2>
          <p>
            To provide comprehensive care recommendations and maintain transparent communication with family members (both locally and overseas), we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>
              <strong>Contact Information:</strong> Name, phone number, email address, and relationship to the prospective resident submitted via inquiry forms or WhatsApp.
            </li>
            <li>
              <strong>Health & Care Disclosures:</strong> Voluntary pre-admission information regarding dietary preferences, mobility status, medical history, or emergency contacts required to assess care suitability.
            </li>
            <li>
              <strong>Technical Data:</strong> Anonymous browser telemetry, device identifiers, and IP addresses collected automatically via standard analytics cookies to optimize site performance.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            3. Medical & Resident Data Confidentiality
          </h2>
          <p>
            All health records, physician notes, and personal medical history shared with our nursing and clinical care team are held under strict medical confidentiality. 
          </p>
          <p>
            Resident health data is strictly restricted to authorized healthcare personnel, attending physicians, and designated emergency medical responders (such as Horana Base Hospital staff during acute care transfers). Medical records are <strong>never</strong> sold, rented, or shared for marketing purposes.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            4. Communication with Diaspora & Guardians
          </h2>
          <p>
            Many of our residents’ primary sponsors and children reside overseas (UK, Australia, US, Middle East, etc.). We utilize secure digital updates, structured reports, and pre-authorized WhatsApp/Zoom channels to provide progress reports to registered family members.
          </p>
          <p>
            Disclosures regarding a resident’s health or financial account status will only be made to individuals explicitly nominated as Authorized Representatives during the formal admission agreement.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            5. Cookies and Web Analytics
          </h2>
          <p>
            Our website uses minimal cookies to improve your navigation experience, remember form inputs, and analyze overall site traffic patterns. You can choose to disable cookies through your individual browser settings without affecting your ability to view main villa information.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            6. Contacting Our Data Privacy Desk
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, wish to update your registered contact details, or request the deletion of non-medical inquiry data, please contact our administration:
          </p>
          
          <div className="bg-white p-6 border border-[#EAE5DC] space-y-2 font-mono text-xs text-[#0D1A12] mt-4">
            <p className="font-semibold text-[#C5A059] uppercase tracking-wider">
              Senior Citizen Villa — Admissions & Privacy Desk
            </p>
            <p>Estate Location: Horana, Kalutara District, Western Province, Sri Lanka</p>
            <p>Email: privacy@seniorvilla-horana.lk</p>
            <p>Telephone: +94 (0) 34 XXX XXXX</p>
          </div>
        </section>

      </main>

      {/* Reusable Footer */}
      
    </div>
  );
}