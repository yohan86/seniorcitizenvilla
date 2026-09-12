"use client"
import Image from 'next/image'
import { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
       <>
      <div className="bg-teal-800 text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>📍 Horana, Sri Lanka</span>
          <div className="flex gap-4">
            <a href="tel:+94774298325" className="hover:text-[#C5A059] transition-colors duration-300">
              📞 Call Us: +9477 429 83 25
            </a>
            <span>•</span>
            <span>24/7 Care & Inquiries</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex text-2xl font-bold text-teal-800 tracking-tight items-center">
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt="Senior Citizen Villa Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            Senior Citizen Villa
          </div>
          <a
            href="#contact"
            className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg font-semibold text-base transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </header>
      </>
  )
}

export default Header