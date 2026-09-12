import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A140E] text-[#F7F4EE] border-t border-[#1C2C21] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid: Brand, Links, Location & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C2C21]">
          
          {/* Brand Identity & Vision */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center font-serif text-2xl tracking-wide text-white font-normal">
                <div className="relative">
                    <Image
                      src="/senior-citizen-villa-logo.png"
                      alt="Senior Citizen Villa Logo"
                      width={48}
                      height={48}
                      className="inline-block mr-2"
                    />                
                </div>
                <span className="flex flex-col">
                    <span>Senior Citizen Villa</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-mono mt-1">
                        Horana Sanctuary
                    </span>
                </span>
              </div>
              
            </div>
            
            <p className="text-[#A3B0A7] text-sm font-light leading-relaxed max-w-sm">
              A private luxury residential estate in Horana, Sri Lanka. Providing senior citizens with dignified living, 24/7 dedicated medical assistance, and complete peace of mind for families.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs text-[#A3B0A7] font-mono tracking-wider uppercase">
                Admissions & Care Desk Active
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase border-b border-[#1C2C21] pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#D8E2D5]">
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  Our Guiding Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  Pillars of Care & Services
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-[#C5A059] transition-colors">
                  Residences & Suites
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A059] transition-colors">
                  Estate Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A059] transition-colors">
                  Arrange a Private Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Proximity */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase border-b border-[#1C2C21] pb-2 inline-block">
              Key Proximity
            </h4>
            <ul className="space-y-3 text-xs text-[#A3B0A7] font-light">
              <li className="flex flex-col">
                <span className="text-white font-medium">Horana Base Hospital</span>
                <span className="text-[#7A8A80]">10 Mins Drive</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Gelanigama Expressway Interchange</span>
                <span className="text-[#7A8A80]">15 Mins Drive</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Colombo City Limits</span>
                <span className="text-[#7A8A80]">approx. 45 Mins</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase border-b border-[#1C2C21] pb-2 inline-block">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm font-light text-[#D8E2D5]">
              <p className="leading-relaxed text-[#A3B0A7]">
                Senior Citizen Villa,<br />
                Horana, Kalutara District,<br />
                Western Province, Sri Lanka.
              </p>

              <div className="pt-2 space-y-1 font-mono text-xs">
                <p>
                  <span className="text-[#C5A059]">TEL:</span>{" "}
                  <a href="tel:+94774298325" className="hover:text-[#C5A059] text-white">
                    +94 (0) 77 429 8325
                  </a>
                </p>
                <p>
                  <span className="text-[#C5A059]">CARE:</span>{" "}
                  <a href="tel:+94774298325" className="hover:text-[#C5A059] text-white">
                    +94 (0) 77 429 8325
                  </a>
                </p>
                <p>
                  <span className="text-[#C5A059]">EMAIL:</span>{" "}
                  <a href="mailto:piyasapahan@gmail.com" className="hover:text-[#C5A059] text-white">
                    info@seniorvilla-horana.lk
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Developer Credit */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-light text-[#7A8A80]">
          <p>
            © {new Date().getFullYear()} Senior Citizen Villa, Horana. All Rights Reserved.
          </p>

          {/* Legal Pages & Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <a href="/privacy-policy" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#1C2C21]">|</span>
            <a href="/terms-of-residence" className="hover:text-[#C5A059] transition-colors">
              Terms of Residence
            </a>
            <span className="text-[#1C2C21]">|</span>
            <a href="/medical-disclaimer" className="hover:text-[#C5A059] transition-colors">
              Medical Disclaimer
            </a>
          </div>

          {/* Developer Credit */}
          <div className="font-mono text-[11px] text-[#A3B0A7]">
            Designed & Developed by{" "}
            <a
              href="https://diyoshit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline font-semibold"
            >
              Diyosh IT
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}