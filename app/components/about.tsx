"use client";
import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Footer from './footer';
import jj from '../about/jj.png';
import wmen from '../about/wmen.png';
import cgrls from '../about/cgrls.png';

export default function KandleLandingPage() {
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
              Your Publishing Partner,
              <br />
              from Vision to Bookshelf.
            </h1>
            <p className="text-gray-200 mt-6 mb-8 text-lg max-w-md">
              At Kandle, we transform the complex journey of publishing into a clear, supported path. We provide the professional expertise and tools you need to publish confidently, reach readers globally, and keep 100% control of your work.
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
                <h1>Your End-to-End Publishing Partner. </h1>

                Kandle is a premium publishing service that guides authors from the final manuscript to a worldwide book launch. We integrate professional design, meticulous formatting, global distribution, and strategic marketing into one streamlined process. Our goal is to make publishing simple, professional, and focused on your success.

              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="rounded-4xl overflow-hidden shadow-lg h-116 relative">
              <Image
                src={jj}
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
                  To empower every author with a seamless, transparent publishing journey. We remove the technical and logistical barriers, providing the expert support and tools you need to publish with confidence, retain full control, and build a lasting legacy from your work.

                </p>
              </div>

              {/* Our Vision */}
              <div className="bg-[#e8d5c4] rounded-3xl p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">Our Vision</h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-800">
                  To be the most trusted partner for authors worldwide, recognized for innovation, integrity, and unwavering dedication to author success. We envision a publishing landscape where every dedicated storyteller has the expert resources to share their voice and find their audience.

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
              <h4 className="text-xl font-semibold mb-3">An Author-First Partnership </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your vision leads; our expertise follows. We believe you are the author, not just a client. Our role is to listen, advise, and provide the professional support to amplify your unique voice—never to replace it. You retain 100% creative control.

              </p>
            </div>

            {/* Author-First Philosophy */}
            <div className="border-b border-gray-600 pb-8">
              <h4 className="text-xl font-semibold mb-3">Uncompromising Quality & Craft</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We treat every book like a masterpiece. From pixel-perfect formatting and market-smart cover design to flawless distribution files, we apply meticulous attention to detail. Your book deserves to stand proudly on any virtual or physical shelf.

              </p>
            </div>

            {/* Integrity & Trust */}
            <div className="border-b border-gray-600 pb-8">
              <h4 className="text-xl font-semibold mb-3">Radical Transparency & Integrity</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                No hidden fees, no unclear processes. We believe trust is built on honesty. You&apos;ll receive straightforward pricing, clear timelines, and direct communication at every stage. We succeed only when you feel informed and confident.

              </p>
            </div>

            {/* Innovation In Publishing */}
            <div className="border-b border-gray-600 pb-8">
              <h4 className="text-xl font-semibold mb-3"> Innovating for Author Success </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We leverage modern tools to simplify your path. Our platform and processes are designed to remove traditional publishing barriers. We combine cutting-edge technology with expert human insight to make professional publishing more accessible and effective for you.

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
          {/* Top Section - Why Authors Choose Kandle */}
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
                Why Authors Trust
                <br />
                Our Partnership
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">•</span>
                  <span> Expert-Led Process from Start to Finish</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">•</span>
                  <span>Quality That Meets Reader Expectations</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">•</span>
                  <span>A True Partner, Not Just a Platform</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">•</span>
                  <span>Empowerment, Not Empty Promises </span>
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
                  We provide the expert blueprint to publish it successfully
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Ready To Publish */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2c2c2c] mb-6">
                Ready To Publish With a True Partner?
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Join the community of authors who have chosen Kandle to navigate the publishing journey with confidence, support, and professional results.
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