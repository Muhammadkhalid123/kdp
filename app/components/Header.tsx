"use client";
import React from 'react';
import Image from 'next/image';
import Logo from '../Kandle Direct Publishing-Logo-01.png';

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="bg-[#3b362f]/70 backdrop-blur-xl rounded-full flex items-center justify-between shadow-md px-6 py-3">
          
          {/* Logo Section */}
          <div className="flex items-right">
            <div className="scale-180">
              <Image src={Logo} alt="Kindle" width={100} height={40} />
            </div>
          </div>

          {/* Navigation Menu Section */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center gap-8 text-700 font-sans">
              <a href="/" className="text-orange-500/80 hover:text-orange-500">Home</a>
              <a href="/about" className="text-white/80 hover:text-orange-500">About</a>
              <a href="/services" className="text-white/80 hover:text-orange-500">Our Services</a>
              <a href="/contact" className="text-white/80 hover:text-orange-500">Contact</a>
            </nav>
          </div>

          {/* Button Section */}
          <div className="flex items-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-medium text-white shadow-md">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}