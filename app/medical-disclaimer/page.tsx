import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Medical Disclaimer | Senior Citizen Villa Horana",
  description:
    "Medical disclosure, scope of healthcare services, and clinical responsibility guidelines for Senior Citizen Villa in Horana, Sri Lanka.",
};

export default function MedicalDisclaimerPage() {
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
            Medical & Clinical Disclaimer
          </h1>
          <p className="text-[#A3B0A7] text-sm md:text-base font-light max-w-2xl">
            Clear definitions of our care capabilities, medical scope, and emergency responsibilities for residents and families.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#7A8A80]">
            EFFECTIVE DATE: SEPTEMBER 2026
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6 max-w-4xl mx-auto space-y-12 leading-relaxed font-light text-[#3A453F] text-base">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            1. Residential Nursing vs. Acute Hospital Care
          </h2>
          <p>
            <strong>Senior Citizen Villa (Horana)</strong> operates as a luxury senior residential estate providing assisted living, wellness support, and 24/7 basic nursing care. 
          </p>
          <p>
            Our facility is <strong>not an acute care hospital, surgical center, or emergency medical facility</strong>. Information presented on this website or discussed during pre-admission assessments does not constitute formal medical diagnosis or surgical advice.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            2. On-Site Nursing Scope
          </h2>
          <p>
            Our on-site healthcare team delivers non-invasive daily support including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>Routine vital sign monitoring (blood pressure, blood glucose, temperature).</li>
            <li>Medication administration and prescription compliance management.</li>
            <li>Assistance with daily living activities (grooming, mobility, dietary care).</li>
          </ul>
          <p className="pt-2">
            Complex clinical interventions requiring specialized equipment or intensive care must be managed by external qualified specialists or partner hospitals.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            3. Acute Emergency Protocol
          </h2>
          <p>
            In the event of a critical health deterioration, cardiac event, stroke, or severe injury, villa staff will immediately call local emergency services and arrange transport to the nearest suitable hospital (such as Horana Base Hospital, 10 minutes away).
          </p>
          <p>
            Senior Citizen Villa is not liable for outcomes resulting from pre-existing chronic conditions or sudden medical events that require emergency clinical intervention beyond residential care scope.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            4. External Medical Expenses
          </h2>
          <p>
            All costs associated with third-party hospital admissions, specialized laboratory tests, ambulance transport, and external physician consultations remain the financial responsibility of the resident or their registered sponsor.
          </p>
        </section>

        {/* Contact Desk */}
        <section className="space-y-4 pt-4">
          <div className="bg-white p-6 border border-[#EAE5DC] space-y-2 font-mono text-xs text-[#0D1A12]">
            <p className="font-semibold text-[#C5A059] uppercase tracking-wider">
              Senior Citizen Villa — Nursing & Clinical Desk
            </p>
            <p>Location: Horana, Kalutara District, Western Province, Sri Lanka</p>
            <p>Medical Queries: care@seniorvilla-horana.lk</p>
            <p>Desk Phone: +94 (0) 34 XXX XXXX</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}