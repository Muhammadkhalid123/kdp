"use client";
import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Footer from './footer';

export default function Services() {
  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image (use CSS background to avoid stacking bleed) */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/services/services-hero.png')" }}
          aria-hidden
        />

        {/* Header on top of background */}
        <div className="relative z-30">
          <Header />
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center min-h-screen px-6 md:px-12 lg:px-20 pt-10">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-5xl lg:text-5xl m-0 font-serif text-white mb-6 leading-tight">
              Bring Your Book To <br /> Life With Kandle
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              From writing to publishing and beyond — we turn your story into a beautifully produced, professionally marketed book that readers remember.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
                Start Your Book Journey
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-8 py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
                Get A Free Consultation
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section (placed just after hero) */}
      <section className="bg-amber-50 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="flex items-start">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">Why Choose Us</h2>
          </div>

          <div className="text-gray-700 space-y-4">
            <p>
              At Kandle, we don&apos;t just publish books — we build authors.
            </p>

            <p>
              Whether you&apos;re a first-time writer or a seasoned storyteller, our team guides you through every step of the journey with care, creativity, and professionalism.
            </p>

            <p>
              We combine world-class design, editorial excellence, and proven marketing strategies to help your book shine — on shelves, on screens, and in readers&apos; hands.
            </p>

            <p className="font-semibold">At Kandle, your words matter.</p>
          </div>
        </div>
      </section>

      {/* Our Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Our Services</h3>
            <hr className="mt-4 border-t border-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
              title: 'Book Formatting',
              desc: 'We turn raw manuscripts into polished, professional layouts for print and digital.'
            }, {
              img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
              title: 'Book Cover Design',
              desc: 'Custom, eye-catching covers that speak to your genre and audience.'
            }, {
              img: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80',
              title: 'Book Printing',
              desc: 'High-quality printing with premium paper and beautiful finish options.'
            }, {
              img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
              title: 'Book Marketing',
              desc: 'Strategic marketing campaigns designed to build your author brand.'
            }, {
              img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
              title: 'Audiobooks',
              desc: 'Studio-quality recording with professional voice actors and production.'
            }, {
              img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
              title: 'Ghost Writing',
              desc: 'Experienced writers to craft your manuscript while preserving your voice.'
            }].map((s, idx) => (
              <article key={idx} className="relative group overflow-hidden rounded-2xl shadow-md">
                <div className="relative w-full h-56 bg-gray-100">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={idx < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
