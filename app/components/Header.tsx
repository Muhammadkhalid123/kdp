"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '../Kandle Direct Publishing-Logo-01.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="bg-[#3b362f]/70 backdrop-blur-xl rounded-full flex items-center justify-between shadow-md px-4 sm:px-6 py-3">

          {/* Logo Section */}
          <div className="flex items-center pl-2">
            <Link href="/" className="scale-150 sm:scale-175 md:scale-[2.0]">
              <Image src={Logo} alt="Kandle" width={120} height={48} className="w-auto h-10 sm:h-12" />
            </Link>
          </div>

          {/* Navigation Menu Section - Desktop */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-6 xl:gap-8 text-sm font-sans">
              <Link
                href="/"
                className={`${isActive('/') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition font-medium`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive('/about') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition font-medium`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${isActive('/services') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition font-medium`}
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className={`${isActive('/portfolio') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition font-medium`}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className={`${isActive('/contact') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition font-medium`}
              >
                Contact
              </Link>
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
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition py-2 border-b border-white/10`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/about') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition py-2 border-b border-white/10`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/services') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition py-2 border-b border-white/10`}
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/portfolio') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition py-2 border-b border-white/10`}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/contact') ? 'text-orange-500' : 'text-white/80'} hover:text-orange-500 transition py-2 border-b border-white/10`}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-full text-sm font-medium text-white shadow-md transition mt-2 text-center">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}