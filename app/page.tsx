
import VillaSlider from "./components/Slider";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import Accommodations from "./components/Accomodations";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Image from "next/image";
import { prefix } from "../utils/prefix";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">


      {/* Hero Section */}
      
      <div className="bg-[#e4f3e0] text-[#F7F4EE] relative overflow-hidden">
      <section className="flex flex-col md:flex-row relative py-8 md:py-24 sm:py-32 px-6 max-w-6xl mx-auto">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 md:space-y-8 mb-10 md:mb-0">
          <div className="inline-flex items-center gap-3 border-l-2 border-[#C5A059] pl-4">
            <span className="text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase">
              Exclusive Senior Living
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3b485a]! font-light leading-[1.15] tracking-wide">
            Where Dignity, Comfort, and Happiness Reside.
          </h1>

          <p className="text-[#4c554f] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            At Senior Citizen Villa, Horana, we provide a peaceful, secure sanctuary where older adults live with continuous professional care, total respect, and complete peace of mind.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="bg-[#C5A059] hover:bg-[#b08d4b] text-[#0D1A12] hover:text-white px-8 py-2 md:py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-lg"
            >
              Inquire About Residence
            </Link>
            <Link
              href="tel:+94774298325"
              className="bg-teal-800 border border-[#3A4E40] text-[#F7F4EE] hover:border-[#C5A059] hover:text-[#C5A059] px-8 py-2 md:py-4  text-xs font-semibold uppercase tracking-[0.2em] transition-all"
            >
              Speak With Care Team
            </Link>
          </div>
        </div>
        
        <div className="flex items-center w-full h-100 md:h-full overflow-hidden">
        {/* Parent container needs 'relative' and fixed/responsive sizing */}
          <div className="relative w-full h-80 md:h-[480px] rounded-full border-5 border-[#fff] overflow-hidden md:py-8 shadow-lg">
            <Image
              src={`${prefix}/images/citizens2.jpg`}
              alt="Senior Citizen Villa Exterior"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-right"
              priority
            />
          </div>
        </div>
        
      </section>
      </div>

      {/* Photo Gallery / Slider */}
      <section className="pb-8">
        <VillaSlider />
      </section>

      {/* Care Services Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <WhyChooseUs />
      </section>
      
        <VisionMission />
        <Accommodations />
        <Testimonials />
        <FAQSection />
    </main>
  );
}