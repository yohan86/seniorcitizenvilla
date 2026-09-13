"use client";

import Link from "next/link";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    relationship: "child",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic or API call here
    alert("Thank you for reaching out. Our Care Desk will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A140E] text-[#F7F4EE]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase font-mono">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-white">
            Arrange a Private Visit or Consultation
          </h2>
          <p className="text-[#A3B0A7] text-sm md:text-base font-light">
            We welcome families and overseas sponsors to tour our Horana sanctuary, inspect our residential suites, and meet our nursing care staff.
          </p>
              <Link href="/" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
            ← Back to Sanctuary Home
          </Link>
          
        </div>

        {/* Grid: Form & Location Info */}
        <div id="contactform" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0D1A12] p-8 md:p-10 border border-[#1C2C21] rounded-sm space-y-6">
            <h3 className="font-serif text-2xl text-white font-normal">
              Send an Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyantha Fernando"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0A140E] border border-[#1C2C21] p-3 text-white placeholder-[#526357] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 77 XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0A140E] border border-[#1C2C21] p-3 text-white placeholder-[#526357] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A140E] border border-[#1C2C21] p-3 text-white placeholder-[#526357] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                    Inquiring As
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full bg-[#0A140E] border border-[#1C2C21] p-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                  >
                    <option value="child">Son / Daughter (Sponsor)</option>
                    <option value="self">Prospective Resident</option>
                    <option value="guardian">Guardian / Relative</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                  Care Requirements or Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details about health condition, preferred stay duration, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0A140E] border border-[#1C2C21] p-3 text-white placeholder-[#526357] focus:outline-none focus:border-[#C5A059] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C5A059] hover:bg-[#b08c47] text-[#0A140E] font-medium py-3.5 px-6 uppercase tracking-wider text-xs font-mono transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Location & Details Side Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0D1A12] p-8 border border-[#1C2C21] space-y-6">
              <h3 className="font-serif text-2xl text-white font-normal border-b border-[#1C2C21] pb-3">
                Sanctuary Address
              </h3>
              
              <div className="space-y-4 text-sm font-light text-[#A3B0A7]">
                <p className="leading-relaxed">
                  <strong className="text-white font-medium block">Senior Citizen Villa</strong>
                  Horana, Kalutara District,<br />
                  Western Province, Sri Lanka.
                </p>

                <div className="space-y-2 font-mono text-xs pt-2">
                  <p>
                    <span className="text-[#C5A059]">TELEPHONE:</span><a href="tel:+94774298325"> +94 (0) 77 429 8325</a>
                  </p>
                  <p>
                    <span className="text-[#C5A059]">CARE DESK:</span><a href="tel:+94774298325"> +94 (0) 77 429 8325</a>
                  </p>
                  <p>
                    <span className="text-[#C5A059]">EMAIL:</span><a href="mailto:piyasapahan@gmail.com">info@seniorvilla-horana.lk</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Distance Highlights */}
            <div className="bg-[#0D1A12] p-6 border border-[#1C2C21] space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
                Proximity & Access
              </h4>
              <ul className="text-xs text-[#A3B0A7] space-y-2 font-light">
                <li className="flex justify-between border-b border-[#1C2C21] pb-1.5">
                  <span>Horana Base Hospital</span>
                  <span className="text-white font-mono">10 Mins</span>
                </li>
                <li className="flex justify-between border-b border-[#1C2C21] pb-1.5">
                  <span>Gelanigama Expressway Interchange</span>
                  <span className="text-white font-mono">15 Mins</span>
                </li>
                <li className="flex justify-between">
                  <span>Colombo City Limits</span>
                  <span className="text-white font-mono">~45 Mins</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-white font-normal">
              Interactive Location Map
            </h3>
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              Horana, Sri Lanka
            </span>
          </div>

          <div className="w-full h-80 md:h-96 border border-[#1C2C21] overflow-hidden rounded-sm grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <iframe
              title="Senior Citizen Villa Horana Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63391.1627993427!2d80.0247345!3d6.7153641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24a0fa889f031%3A0x6b83f0ff502a5015!2sHorana!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;