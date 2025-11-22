"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '../Kandle Direct Publishing-Logo-01.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="bg-[#3b362f]/70 backdrop-blur-xl rounded-full flex items-center justify-between shadow-md px-4 sm:px-6 py-3">

          {/* Logo Section */}
          <div className="flex items-center pl-2">
            <div className="scale-150 sm:scale-175 md:scale-[2.0]">
              <Image src={Logo} alt="Kindle" width={120} height={48} className="w-auto h-10 sm:h-12" />
            </div>
          </div>

          {/* Navigation Menu Section - Desktop */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-6 xl:gap-8 text-sm font-sans">
              <a href="/" className="text-orange-500/80 hover:text-orange-500 transition">Home</a>
              <a href="/about" className="text-white/80 hover:text-orange-500 transition">About</a>
              <a href="/services" className="text-white/80 hover:text-orange-500 transition">Our Services</a>
              <a href="/contact" className="text-white/80 hover:text-orange-500 transition">Contact</a>
            </nav>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-white shadow-md transition">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#3b362f]/95 backdrop-blur-xl rounded-2xl shadow-lg px-6 py-4">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-orange-500/80 hover:text-orange-500 transition py-2 border-b border-white/10">Home</a>
              <a href="/about" className="text-white/80 hover:text-orange-500 transition py-2 border-b border-white/10">About</a>
              <a href="/services" className="text-white/80 hover:text-orange-500 transition py-2 border-b border-white/10">Our Services</a>
              <a href="/contact" className="text-white/80 hover:text-orange-500 transition py-2 border-b border-white/10">Contact</a>
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-full text-sm font-medium text-white shadow-md transition mt-2 text-center">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}