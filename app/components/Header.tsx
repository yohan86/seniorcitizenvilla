"use client"
import Image from 'next/image'
import { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <div className="relative w-20 h-20 md:w-25 md:h-25">
                <Image src="/logo.jpeg" alt="senior citizen villa logo - Horana" width={100} height={100} />
            </div>
            <div>
                <nav className="hidden md:flex space-x-10 text-[#4e4b4b]">
                    <NavBar />
                </nav>
                <div className={`mobile-menu md:hidden ${isMenuOpen ? "active block" : ""}`}>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex gap-2 text-[#4b4e4c] mr-4 items-center">
                        <span className="uppercase">
                            Menu
                        </span>
                        <div className="menu-toggle block h-[18px] flex-col justify-center items-center">
                            <span className="w-6 h-[3px] bg-[#2aa13e] block"></span>
                            <span className="w-6 h-[3px] bg-[#2aa13e] block my-1"></span>
                            <span className="w-6 h-[3px] bg-[#2aa13e] block"></span>
                        </div>
                    </div>
                    <div className={`menu-dropdown absolute top-24 left-0 w-full h-0 overflow-hidden bg-white shadow-md z-50 transition-all duration-500 ${isMenuOpen ? "h-auto" : ""}`}>
                        <nav className="flex flex-col space-y-2 text-[#4e4b4b] p-4">
                            <NavBar />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header