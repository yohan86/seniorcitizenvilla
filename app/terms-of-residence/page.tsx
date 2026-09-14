
import { prefix } from "@/utils/prefix";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Residence | Senior Citizen Villa Horana",
  description:
    "Official residential terms, admission guidelines, medical protocols, and stay conditions for Senior Citizen Villa in Horana, Sri Lanka.",
};

export default function TermsOfResidencePage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
      {/* Header Banner */}
      <header className="header-blk">
        <div className="relative max-w-4xl mx-auto space-y-4 text-center md:text-left z-2">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2"
          >
            ← Back to Sanctuary Home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-white">
            Terms & Conditions of Residence
          </h1>
          <p className="text-sm md:text-base font-light max-w-2xl">
            Operational guidelines, residential care standards, medical protocols, and mutual commitments for residents, sponsors, and family guardians.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#C5A059]">
            EFFECTIVE DATE: SEPTEMBER 2026
          </div>
        </div>
         <div className="absolute inset-0 w-full h-full bg-teal-800/70 z-1" />
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image src={`${prefix}/images/citizen-care.jpg`} alt="Senior citizen villa-Horana"
            fill  className="object-cover object-center" />
          </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="py-16 px-6 max-w-4xl mx-auto space-y-12 leading-relaxed font-light text-[#3A453F] text-base">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            1. Admission & Health Assessment
          </h2>
          <p>
            Admission to <strong>Senior Citizen Villa (Horana)</strong> is subject to a preliminary medical evaluation and personal assessment conducted by our qualified health team.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>
              <strong>Medical Records:</strong> Sponsors or guardians must provide accurate, up-to-date medical history, current prescriptions, and attending physician details prior to check-in.
            </li>
            <li>
              <strong>Care Classification:</strong> Residence is categorized based on required support levels (Independent Living, Assisted Living, or High-Care Nursing). Any change in a resident’s health condition may require a adjustment in their care plan.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            2. Medical & Emergency Transfer Protocols
          </h2>
          <p>
            Our estate provides continuous nursing care and vital monitoring. However, Senior Citizen Villa is a residential sanctuary and not an acute surgical hospital.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>
              <strong>Emergency Authorization:</strong> In the event of a critical medical emergency, villa staff will immediately initiate emergency transfer procedures to the nearest medical facility (e.g., Horana Base Hospital or a designated private hospital in Colombo).
            </li>
            <li>
              <strong>External Medical Costs:</strong> Ambulance fees, specialized hospital treatments, external doctor consultations, and specialized medication outside the standard villa formulary remain the financial responsibility of the registered sponsor.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            3. Residential Fees & Payment Terms
          </h2>
          <p>
            To maintain our boutique hospitality standards and high staff-to-resident ratio, residential fees are structured as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>
              <strong>Billing Cycle:</strong> Monthly residential fees are payable in advance on or before the 5th business day of each calendar month.
            </li>
            <li>
              <strong>Inclusions:</strong> Standard fees include private or shared suite accommodation, three daily tailored meals, morning/evening tea, daily housekeeping, routine nursing care, and laundry.
            </li>
            <li>
              <strong>Overseas Payments:</strong> International sponsors (diaspora family members) can settle invoices securely via international bank wire transfers or credit card payment portals.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            4. Visitor Policies & Estate Respect
          </h2>
          <p>
            We preserve a tranquil, serene atmosphere for all residents on our Horana grounds.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A554F]">
            <li>
              <strong>Visiting Hours:</strong> Standard visiting hours are daily between 9:00 AM and 6:00 PM. Visiting overseas relatives can request flexible visiting schedules in advance with management.
            </li>
            <li>
              <strong>Resident Conduct & Harmony:</strong> All residents and visitors are expected to maintain respect towards fellow residents and staff members. 
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            5. Notice of Voluntary Departure or Termination
          </h2>
          <p>
            A 30-day written notice is required from the sponsor or guardian for voluntary withdrawal or end of long-term residence. Short-term or convalescent stays follow the specific duration agreed upon during initial booking.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] font-normal border-b border-[#EAE5DC] pb-2">
            6. Inquiries Regarding Terms
          </h2>
          <p>
            For questions or detailed discussions regarding admission contracts, please reach out to our management office:
          </p>
          
          <div className="bg-white p-6 border border-[#EAE5DC] space-y-2 font-mono text-xs text-[#0D1A12] mt-4">
            <p className="font-semibold text-[#C5A059] uppercase tracking-wider">
              Senior Citizen Villa — Legal & Admissions Desk
            </p>
            <p>Location: Horana, Kalutara District, Western Province, Sri Lanka</p>
            <p>Email: legal@seniorvilla-horana.lk</p>
            <p>Telephone: +94 (0) 77 429 8325</p>
          </div>
        </section>

      </main>

    </div>
  );
}