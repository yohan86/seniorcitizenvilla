"use client"
import Image from 'next/image'
import { useState } from 'react'
import NavBar from './NavBar'
import Link from 'next/link'
import { prefix } from '@/utils/prefix'

const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
       <>
      <div className="hidden md:block  bg-teal-800 text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
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
          <Link href="/">
          <div className="flex text-[18px] md:text-2xl font-bold text-teal-800 tracking-tight items-center">
            
            <div className="relative">
              <Image
                src={`${prefix}/logo.jpeg`}
                alt="Senior Citizen Villa Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            Senior Citizen Villa
          </div>
          </Link>
          <div className="menu-wrapper hidden md:flex items-center gap-4">
            <nav className="main-menu flex gap-4 items-center text-sm text-teal-800 uppercase font-semibold tracking-wider">
              <NavBar  />
            </nav>
            <Link
              href="/contact"
              className="text-[12px] bg-teal-700 hover:bg-teal-800 text-white  px-2 md:px-5 py-2.5 rounded-lg font-semibold text-base transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>


          <div className={`menu-toggle ${menuActive ? 'active': ''}`} onClick={()=> setMenuActive(!menuActive)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

           {/* --- MOBILE OVERLAY DRAWER MENU --- */}
        <div id="mobile-menu"
          className={`fixed inset-0 bg-white z-100 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            menuActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="fixed top-4 right-4"
          onClick={()=> setMenuActive(false) }
          >Close X</button>
          <nav className="flex flex-col space-y-2 w-full text-center" aria-label="Mobile navigation">
            <NavBar onClose={setMenuActive} />
          </nav>
        </div>


        </div>
      </header>
      </>
  )
}

export default Header