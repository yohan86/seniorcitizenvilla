import React from "react";

export default function VisionMission() {
  return (
    <section className="py-28 px-6 bg-[#F7F4EE] text-[#121B16] relative overflow-hidden">
      {/* Subtle Background Architectural Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Pre-Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase">
            Our Guiding Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D1A12] font-light tracking-wide">
            Sanctuary, Respect & Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Our Vision - Editorial Off-White Card */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-10 md:p-14 rounded-none border-t-2 border-[#C5A059] shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-4">
                <span className="text-[#C5A059] font-mono text-xs tracking-[0.2em] uppercase">
                  Statement I
                </span>
                <span className="font-serif italic text-sm text-[#736E65]">Our Vision</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0D1A12] leading-snug">
                Honoring a Lifetime of Contribution
              </h3>
              <p className="text-[#525B56] text-base md:text-lg leading-relaxed font-light">
                To ensure every senior citizen is respected, valued, and supported to live a
                comfortable, dignified, and fulfilling life, receiving the care and appreciation they
                deserve for their lifelong contribution to society.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-[#F0EBE1] flex items-center justify-between text-xs text-[#8A847A]">
              <span>Senior Citizen Villa</span>
              <span className="tracking-widest uppercase text-[#C5A059]">Horana, Sri Lanka</span>
            </div>
          </div>

          {/* Our Mission - Deep Emerald Hero Card */}
          <div className="lg:col-span-6 bg-teal-800 text-[#fafafa] p-10 md:p-14 rounded-none flex flex-col justify-between relative shadow-2xl overflow-hidden">
            {/* Ambient Gold Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#233529] pb-4">
                <span className="text-[#C5A059] font-mono text-xs tracking-[0.2em] uppercase">
                  Statement II
                </span>
                <span className="font-serif italic text-sm text-[#C5A059]">Our Mission</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-white leading-snug">
                A Haven for Golden Years
              </h3>
              <p className="text-[#e9e9e9] text-base md:text-lg leading-relaxed font-light">
                To provide senior citizens with 24-hour care, personalized meals, housekeeping,
                recreational activities, and social engagement in a safe, comfortable, and welcoming
                environment where they can enjoy their golden years with dignity and respect.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-[#233529] flex items-center justify-between text-xs text-[#C5A059] relative z-10">
              <span>24/7 Dedicated Living</span>
              <span className="tracking-widest uppercase ">Bespoke Senior Care</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}