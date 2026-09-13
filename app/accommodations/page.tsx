
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Residences & Suites | Senior Citizen Villa Horana",
  description: "Private and shared luxury suites designed for senior safety and comfort.",
};

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
      <header className="bg-[#0A140E] text-[#F7F4EE] pt-28 pb-16 px-6 border-b border-[#1C2C21]">
        <div className="max-w-4xl mx-auto space-y-4 text-center md:text-left">
          <Link href="/" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
            ← Back to Sanctuary Home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-white">
            Residences & Luxury Suites
          </h1>
          <p className="text-[#A3B0A7] text-sm md:text-base font-light max-w-2xl">
            Thoughtfully engineered living spaces featuring emergency call buttons, step-free access, and garden views.
          </p>
        </div>
      </header>

      <main className="py-16 px-6 max-w-4xl mx-auto space-y-8 font-light text-[#3A453F]">
        <div className="bg-white p-8 border border-[#EAE5DC] space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12]">Private Luxury Suites</h2>
          <p>Includes private en-suite bathroom, orthopaedic bed, air conditioning, and garden balcony.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}