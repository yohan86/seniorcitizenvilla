import Link from "next/link";
import VillaSlider from "./components/Slider";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import LuxuryHero from "./components/LuxuryHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Contact Bar */}
      <div className="bg-teal-800 text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>📍 Horana, Sri Lanka</span>
          <div className="flex gap-4">
            <a href="tel:+94XXXXXXXXX" className="hover:underline">
              📞 Call Us: +94 XX XXX XXXX
            </a>
            <span>•</span>
            <span>24/7 Care & Inquiries</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-800 tracking-tight">
            Senior Citizen Villa <span className="text-slate-500 font-normal text-lg">| Horana</span>
          </div>
          <a
            href="#contact"
            className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg font-semibold text-base transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="bg-teal-100 text-teal-800 font-semibold px-4 py-1.5 rounded-full text-sm">
            Professional & Compassionate Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Live with Dignity, Comfort, and Happiness
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            At Senior Citizen Villa, Horana, we provide a peaceful, secure environment where residents feel safe, respected, and connected.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2 rounded-xl font-bold text-lg shadow-md transition-all"
            >
              Inquire About Admission
            </a>
            <a
              href="tel:+94XXXXXXXXX"
              className="bg-white border-2 border-teal-700 text-teal-800 hover:bg-teal-50 px-8 py-2 rounded-xl font-bold text-lg transition-all"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>
      <div className="bg-[#0D1A12] text-[#F7F4EE] relative overflow-hidden">
      <section className="relative py-24 sm:py-32 px-6 max-w-6xl mx-auto">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-3 border-l-2 border-[#C5A059] pl-4">
            <span className="text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase">
              Exclusive Senior Living
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-white font-light leading-[1.15] tracking-wide">
            Where Dignity, Comfort, and Happiness Reside.
          </h1>

          <p className="text-[#A3B0A7] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            At Senior Citizen Villa, Horana, we provide a peaceful, secure sanctuary where older adults live with continuous professional care, total respect, and complete peace of mind.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="bg-[#C5A059] hover:bg-[#b08d4b] text-[#0D1A12] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-lg"
            >
              Inquire About Residence
            </a>
            <a
              href="tel:+94XXXXXXXXX"
              className="border border-[#3A4E40] text-[#F7F4EE] hover:border-[#C5A059] hover:text-[#C5A059] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
            >
              Speak With Our Care Team
            </a>
          </div>
        </div>
      </section>
      </div>

      {/* Photo Gallery / Slider */}
      <section className="py-8">
        <VillaSlider />
      </section>

      {/* Care Services Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <WhyChooseUs />
      </section>
      
        <VisionMission />
        <LuxuryHero />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Visit Senior Citizen Villa, Horana</h2>
          <p className="text-teal-100 text-lg">
            Reach out today to discuss care options or arrange a visit for your family member.
          </p>
          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl text-left">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+94 7X XXX XXXX"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the care required..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 rounded-lg transition-colors text-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}