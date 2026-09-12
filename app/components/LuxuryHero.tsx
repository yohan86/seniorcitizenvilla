"use client";

import React, { useState } from "react";

export default function LuxuryHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0D1A12] text-[#F7F4EE] relative overflow-hidden">
      {/* Top Announcement Bar */}
      <div className="border-b border-[#233529] bg-[#0A140E] text-xs py-2.5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-[#A3B0A7] tracking-wider uppercase font-light">
            📍 Horana, Sri Lanka &nbsp;•&nbsp; Private Residential Care Sanctuary
          </span>
          <div className="flex items-center gap-6 text-[#C5A059]">
            <a href="tel:+94XXXXXXXXX" className="hover:underline tracking-widest font-mono">
              📞 +94 XX XXX XXXX
            </a>
            <span className="text-[#233529]">|</span>
            <span className="text-[#A3B0A7]">24/7 Care Desk</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0D1A12]/90 backdrop-blur-md border-b border-[#233529]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wide text-white font-normal">
              Senior Citizen Villa
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-mono">
              Horana Sanctuary
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-light tracking-widest uppercase text-[#D8E2D5]">
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-[#C5A059] transition-colors">
              Pillars of Care
            </a>
            <a href="#gallery" className="hover:text-[#C5A059] transition-colors">
              Residence Gallery
            </a>
            <a href="#contact" className="hover:text-[#C5A059] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0D1A12] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
            >
              Arrange a Private Visit
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A140E] border-b border-[#233529] px-6 py-6 space-y-4 text-sm tracking-widest uppercase text-[#D8E2D5]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C5A059]"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C5A059]"
            >
              Pillars of Care
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C5A059]"
            >
              Residence Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C5A059]"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center border border-[#C5A059] text-[#C5A059] py-3 text-xs uppercase font-semibold tracking-[0.2em] mt-4"
            >
              Arrange a Visit
            </a>
          </div>
        )}
      </header>

      
    </div>
  );
}