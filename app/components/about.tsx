"use client";
import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Footer from './footer';
import jj from '../about/jj.png';
import wmen from '../about/wmen.png';
import cgrls from '../about/cgrls.png';

export default function KindleLandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
         <Header />
          <section className="relative w-full  min-h-screen">
            {/* Background image */}
            <div className="absolute inset-0 -z-20">
              <Image src="/about/ah.png" alt="Hero background" fill className="object-cover" priority />
            </div>
            {/* Dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 md:mb-0">
                <h1 className="text-5xl md:text-serif-6xl font-noto-bold leading-tight">
                  Crafting Authors.<br />
                  Publishing Dreams.
                </h1>
                <p className="text-gray-200 mt-6 mb-8 text-lg max-w-md">
                  At Kandle, we are redefining the world of self-publishing. Our mission is simple – to empower authors with the tools, talent, and technology they need to bring their stories to life and share them with the world.
                </p>
              </div>
            </div>
          </section>
    <section className="min-h-screen bg-[#f5f1eb] px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
          <h1 className="text-2xl text-black md:text-3xl lg:text-5xl font-serif mb-2">
            Who We Are &
          </h1>
          <h1 className="text-2xl text-black md:text-3xl lg:text-5xl font-serif">
            What We Stand For
          </h1>
          </div>
           <div className="flex-1">
          <p className="mt-6 text-sm md:text-base text-gray-700 max-w">
            Kandle is a premium book publishing company supporting authors from idea to worldwide 
            release. We handle design, editing, formatting, publishing, and global distribution — making 
            the entire process simple, professional, and stress-free.
          </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="rounded-4xl overflow-hidden shadow-lg h-116 relative">
            <Image
              src= {jj}
              alt="Professional woman reading a book"
              fill
              className="object-cover"
            />
          </div>

          {/* Mission and Vision Cards */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#b89278] text-white rounded-3xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Mission</h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                To provide a seamless, transparent, and author-centric publishing experience that empowers writers
                to publish confidently and build their legacy as authors.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-[#e8d5c4] rounded-3xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">Our Vision</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                To become the world's most trusted and innovative publishing partner — where every storyteller finds their
                voice, every manuscript finds its shape, and every author finds success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="bg-[#2c3e50] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Title and decorative feathers */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
            Our Beliefs
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12">
            And Commitments
          </h3>
          
          {/* Decorative feathers */}
          <div className="relative h-64 md:h-80">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Feather 1 */}
              <path 
                d="M80 280 Q70 200 85 120 Q90 80 95 50 L105 50 Q110 80 115 120 Q130 200 120 280 Z" 
                fill="#4a5f7f" 
                opacity="0.8"
              />
              
              {/* Feather 2 */}
              <path 
                d="M180 290 Q165 210 175 130 Q180 85 185 45 L195 45 Q200 85 205 130 Q215 210 205 290 Z" 
                fill="#556b8a" 
                opacity="0.7"
              />
              
              {/* Feather 3 */}
              <path 
                d="M280 295 Q260 220 265 140 Q270 90 275 40 L285 40 Q290 90 295 140 Q305 220 290 295 Z" 
                fill="#5d7390" 
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Right side - Beliefs list */}
        <div className="space-y-8">
          {/* Creativity & Craftsmanship */}
          <div className="border-b border-gray-600 pb-8">
            <h4 className="text-xl font-semibold mb-3">Creativity & Craftsmanship</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We approach every project with artistic excellence and refined detail, 
              treating each book like a true masterpiece.
            </p>
          </div>

          {/* Author-First Philosophy */}
          <div className="border-b border-gray-600 pb-8">
            <h4 className="text-xl font-semibold mb-3">Author-First Philosophy</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your voice and story always come first — we simply enhance your vision with 
              expert guidance and professional support.
            </p>
          </div>

          {/* Integrity & Trust */}
          <div className="border-b border-gray-600 pb-8">
            <h4 className="text-xl font-semibold mb-3">Integrity & Trust</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe in transparency, honesty, and professionalism at every stage of 
              the publishing journey.
            </p>
          </div>

          {/* Innovation In Publishing */}
          <div className="border-b border-gray-600 pb-8">
            <h4 className="text-xl font-semibold mb-3">Innovation In Publishing</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              With modern tools, advanced design solutions, and global accessibility, we 
              bring a fresh and forward-thinking approach to publishing.
            </p>
          </div>

          {/* Unmatched Quality */}
          <div className="pb-8">
            <h4 className="text-xl font-semibold mb-3">Unmatched Quality</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              From concept and design to production and distribution, we ensure 
              accuracy, consistency, and perfection at every step.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#faf8f5] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe5d9] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fff0e8] opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Why Authors Choose Kindle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl h-64 md:h-80 relative">
              <Image
                src={wmen}
                alt="Author writing at desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-8">
              Why Authors<br />Choose Kindle
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">•</span>
                <span>Industry-standard editing & formatting</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">•</span>
                <span>Premium-quality designs & book interiors</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">•</span>
                <span>Guaranteed publishing success</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">•</span>
                <span>Professional guidance at every step</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">•</span>
                <span>Personalized support — NOT automated service</span>
              </li>
            </ul>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-[#2c2c2c]">
                You write the story.
              </p>
              <p className="text-gray-600">
                We bring it to the world.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Ready To Publish */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2c2c2c] mb-6">
              Ready To Publish?
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join hundreds of authors who trusted Kindle to bring their words to life.
            </p>

            <p className="text-lg font-semibold text-[#2c2c2c] mb-8">
              Start Your Publishing Journey Today
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff6b35] hover:bg-[#ff5520] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                Get Started (starts at)
              </button>
              <button className="bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                Live Chat
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src={cgrls}
                alt="Author on phone call"
                width={519}
                height={452}
                className="object-cover w-full h-auto"
                priority={false}
              />
            </div>
            {/* Image dimensions badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#00a8e8] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              519 × 452
            </div>
          </div>
        </div>
      </div>
    </section>

       <Footer />
    </div>
  );
}