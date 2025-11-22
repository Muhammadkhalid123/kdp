"use client";
import React from 'react';
import Link from 'next/link';
import { Book, FileText, TrendingUp, Mic, Edit, Pen, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Header from './components/Header';
import Carousel from './components/Carousel';
import dynamic from 'next/dynamic';
const ScrollExperience = dynamic(() => import('./components/ScrollExperience'), { ssr: false });
import TestimonialsSection from './components/Testomonial';

import Footer from './components/footer';

export default function KindleLandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kandle Direct Publishing",
    "description": "Professional ebook publishing services including formatting, cover design, marketing, and distribution for authors worldwide",
    "url": "https://kandledirectpublishing.com",
    "logo": "https://kandledirectpublishing.com/Kandle Direct Publishing-Logo-01.png",
    "image": "https://kandledirectpublishing.com/og-image.png",
    "telephone": "+44 7918 934410",
    "email": "kandledirectpublishing@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "priceRange": "$$",
    "serviceType": [
      "Ebook Publishing",
      "Book Formatting",
      "Cover Design",
      "Book Marketing",
      "Ghostwriting",
      "Audiobook Creation"
    ],
    "areaServed": "Worldwide",
    "sameAs": [
      "https://facebook.com/kandledirectpublishing",
      "https://twitter.com/kandlepublish",
      "https://instagram.com/kandledirectpublishing"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 mb-8 sm:mb-12 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-noto-bold mb-4 sm:mb-6 leading-tight">
            Turn Your<br />
            Manuscript Into A<br />
            Published Ebook
          </h1>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-md">
            We'll help you bring your book to life through our simple and easy-to-use ebook publishing service. Our platform provides everything you need to turn your manuscript into a professionally designed ebook.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition text-sm sm:text-base inline-block">
            Get Started Now
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop"
            alt="Candle"
            className="rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-sm md:w-80 h-72 sm:h-80 md:h-96 object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Partners */}
      <Carousel />

      {/* About Section */}
      <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=600&fit=crop"
              alt="Library"
              className="rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Kindle</h2>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              At Kindle, we believe that every aspiring author deserves a chance to share their unique story with the world. Our mission is to empower writers by providing a seamless and user-friendly ebook publishing service that simplifies the entire process.
            </p>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              We are passionate about democratizing the digital publishing world, ensuring that quality literature is accessible to all. Our platform is designed to guide you every step of the way, from manuscript formatting to distribution across major ebook retailers.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Our experienced team understands the challenges writers face in today's competitive market. That's why we offer comprehensive support, including professional editing, eye-catching cover design, and strategic marketing assistance to help your ebook stand out.
            </p>
            <Link href="/about" className="text-orange-500 font-medium hover:underline text-sm sm:text-base inline-block">
              Why Kindle - Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/* Scroll Experience Section */}
      <ScrollExperience />
      {/* Services Section */}
      <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-700 mb-2 sm:mb-4 text-left">Our Services</h2>
          <hr className="flex-grow border-gray-900 mb-6 sm:mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Book className="w-8 h-8 text-orange-500" />,
                title: "Book Formatting",
                desc: "Transform your manuscript into a professionally formatted ebook that meets industry standards across all devices and platforms."
              },
              {
                icon: <FileText className="w-8 h-8 text-orange-500" />,
                title: "Book Cover Design",
                desc: "Get a stunning, eye-catching cover designed by professionals that captures your story and attracts readers."
              },
              {
                icon: <Edit className="w-8 h-8 text-orange-500" />,
                title: "Book Printing",
                desc: "Bring your ebook to life in physical form with our high-quality print-on-demand services."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
                title: "Book Marketing",
                desc: "Reach your target audience with strategic marketing campaigns designed to maximize your book's visibility."
              },
              {
                icon: <Mic className="w-8 h-8 text-orange-500" />,
                title: "Audio Books",
                desc: "Expand your reach by converting your ebook into an engaging audiobook with professional narration."
              },
              {
                icon: <Pen className="w-8 h-8 text-orange-500" />,
                title: "Ghost Writing",
                desc: "Let our experienced writers bring your ideas to life with professional ghostwriting services."
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 border bg-white border-gray-200 rounded-xl hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl bg-white p-4 sm:p-6 md:p-8 mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 rounded-2xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
              Bring Your Story To<br />
              Life Published On Kindle<br />
              With Confidence
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Whether you're a first-time author or a seasoned writer, our platform is designed to make ebook publishing simple, affordable, and effective. Join thousands of authors who have trusted us to bring their stories to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition text-sm sm:text-base inline-block text-center">
                Get Started Now
              </Link>
              <Link href="/about" className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition text-sm sm:text-base inline-block text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=500&fit=crop"
              alt="Working"
              className="rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Kindle Section */}
      <section className="bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=500&fit=crop"
              alt="Coffee reading"
              className="rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-noto mb-4 sm:mb-6">Why Kindle?</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              At Kindle, we combine cutting-edge technology with personalized support to deliver an unparalleled publishing experience. Here's what sets us apart:
            </p>
            <hr className='mb-4 sm:mb-6 mt-4 sm:mt-6 text-gray-400' />
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-400 text-sm sm:text-base">
              {[
                "Simple and intuitive platform",
                "Professional formatting and design",
                "Distribution to all major retailers",
                "Transparent pricing with no hidden fees",
                "Expert support every step of the way",
                "Marketing tools to boost visibility",
                "Retain full rights to your work"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-medium transition inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Professional<br />Highlights</h2>
            <p className="text-gray-600 max-w-md text-xs sm:text-sm">
              Discover how authors are achieving success with our platform. From bestsellers to debut novels, see the quality and variety of books published through Kindle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={`/highlights/bc${idx + 1}.jpg`}
                  alt={`Book ${idx + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* Bottom Banner */}
      <div className="bg-orange-500 py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white gap-3 md:gap-0">
          <p className="text-center md:text-left">Copyright 2025 | All Rights Reserved </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:underline">Disclaimer</a>
            <a href="#" className="hover:underline">Cookies Statement</a>
          </div>
        </div>
      </div>
    </div>
  );
}