import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0D1A12] text-[#F7F4EE] relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase">
            Private Consultation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight text-white">
            Schedule a Private Tour of the Villa
          </h2>
          <p className="text-[#A3B0A7] text-base font-light leading-relaxed">
            We welcome families to experience our serene grounds in Horana, meet our care team, and review our residence plans in person.
          </p>

          <div className="pt-6 space-y-4 text-sm font-light text-[#D8E2D5]">
            <div className="flex items-start gap-4">
              <span className="text-[#C5A059] font-mono">LOCATION</span>
              <span>Horana, Kalutara District, Sri Lanka</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#C5A059] font-mono">PHONE</span>
              <span>+9477 429 83 25</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#C5A059] font-mono">HOURS</span>
              <span>Visits open daily from 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7 bg-[#122218] border border-[#233529] p-8 md:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#A3B0A7] mb-2 font-mono">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priyantha Perera"
                  className="w-full bg-[#0D1A12] border border-[#233529] focus:border-[#C5A059] text-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#A3B0A7] mb-2 font-mono">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  placeholder="+94 7X XXX XXXX"
                  className="w-full bg-[#0D1A12] border border-[#233529] focus:border-[#C5A059] text-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#A3B0A7] mb-2 font-mono">
                Care Required For
              </label>
              <select className="w-full bg-[#0D1A12] border border-[#233529] focus:border-[#C5A059] text-[#A3B0A7] px-4 py-3 text-sm outline-none transition-colors">
                <option>Parent / Relative</option>
                <option>Self Residential Living</option>
                <option>Short-Term Convalescent Care</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#A3B0A7] mb-2 font-mono">
                Message or Specific Medical Needs
              </label>
              <textarea
                rows={4}
                placeholder="Share any specific requirements or questions..."
                className="w-full bg-[#0D1A12] border border-[#233529] focus:border-[#C5A059] text-white px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C5A059] hover:bg-[#b08d4b] text-[#0D1A12] py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-all"
            >
              Submit Tour Request
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}