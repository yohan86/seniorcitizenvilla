
import { prefix } from "@/utils/prefix";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Care & Services | Senior Citizen Villa Horana",
  description: "Explore our care packages, 24/7 nursing, dietary management, and wellness programs.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
      <header className="header-blk">
        <div className="relative max-w-4xl mx-auto space-y-4 md:text-lef z-2">
          <Link href="/" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
            ← Back to Sanctuary Home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-normal">
            Pillars of Care & Services
          </h1>
          <p className="text-sm md:text-base font-light max-w-2xl">
            Personalized medical oversight, tailored nutrition, and active senior living.
          </p>
        </div>
        <div className="absolute inset-0 w-full h-full bg-teal-800/70 z-1" />
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image src={`${prefix}/images/citizen-care.jpg`} alt="Senior citizen villa-Horana"
          fill  className="object-cover object-center" />
        </div>
      </header>

      <main className="py-16 px-6 max-w-4xl mx-auto space-y-8 leading-relaxed font-light text-[#3A453F]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-[#EAE5DC] space-y-3">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">01. Clinical Care</span>
            <h3 className="font-serif text-xl text-[#0D1A12]">24/7 Medical & Nursing Support</h3>
            <p className="text-sm">Continuous vitals monitoring, prescription compliance, and doctor visit coordination.</p>
          </div>
          <div className="bg-white p-8 border border-[#EAE5DC] space-y-3">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">02. Nutrition</span>
            <h3 className="font-serif text-xl text-[#0D1A12]">Tailored Culinary Plans</h3>
            <p className="text-sm">Diabetic-friendly, low-sodium, and physician-guided traditional Sri Lankan cuisine.</p>
          </div>
        </div>
      </main>


    </div>
  );
}