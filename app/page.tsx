"use client";
import React from 'react';
import { Book, FileText, TrendingUp, Mic, Edit, Pen, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Header from './components/Header';
import Carousel from './components/Carousel';
import dynamic from 'next/dynamic';
const ScrollExperience = dynamic(() => import('./components/ScrollExperience'), { ssr: false });
import TestimonialsSection from './components/Testomonial';

import Footer from './components/footer';

export default function KindleLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-serif-6xl font-noto-bold mb-6 leading-tight">
            Turn Your<br />
            Manuscript Into A<br />
            Published Ebook
          </h1>
          <p className="text-gray-400 mb-8 text-lg max-w-md">
            We'll help you bring your book to life through our simple and easy-to-use ebook publishing service. Our platform provides everything you need to turn your manuscript into a professionally designed ebook.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-medium transition">
            Get Started Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop" 
            alt="Candle" 
            className="rounded-3xl w-80 h-96 object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Partners */}
      <Carousel />

      {/* About Section */}
      <section className="bg-amber-50 text-gray-900 py-20 px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=600&fit=crop" 
              alt="Library" 
              className="rounded-3xl w-full h-96 object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Kindle</h2>
            <p className="text-gray-700 mb-4">
              At Kindle, we believe that every aspiring author deserves a chance to share their unique story with the world. Our mission is to empower writers by providing a seamless and user-friendly ebook publishing service that simplifies the entire process.
            </p>
            <p className="text-gray-700 mb-4">
              We are passionate about democratizing the digital publishing world, ensuring that quality literature is accessible to all. Our platform is designed to guide you every step of the way, from manuscript formatting to distribution across major ebook retailers.
            </p>
            <p className="text-gray-700 mb-6">
              Our experienced team understands the challenges writers face in today's competitive market. That's why we offer comprehensive support, including professional editing, eye-catching cover design, and strategic marketing assistance to help your ebook stand out.
            </p>
            <button className="text-orange-500 font-medium hover:underline">
              Why Kindle - Learn more &rarr;
            </button>
          </div>
        </div>
      </section>
      {/* Scroll Experience Section */}
      <ScrollExperience />
      {/* Services Section */}
      <section className="bg-amber-50 text-gray-900 py-20 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif-700 m-2 mr-0 text-left">Our Services</h2>
          <hr className="flex-grow border-gray-900" />
          <br />
          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="bg-amber-50 text-gray-900 py-20 px-6">
        <div className="max-w-7xl bg-white p-6 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Bring Your Story To<br />
              Life Published On Kindle<br />
              With Confidence
            </h2>
            <p className="text-gray-700 mb-8">
              Whether you're a first-time author or a seasoned writer, our platform is designed to make ebook publishing simple, affordable, and effective. Join thousands of authors who have trusted us to bring their stories to life.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition">
                Get Started Now
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=500&fit=crop" 
              alt="Working" 
              className="rounded-3xl w-full h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Kindle Section */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=500&fit=crop" 
              alt="Coffee reading" 
              className="rounded-3xl w-full h-96 object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl font-noto mb-6 ">Why Kindle?</h2>
            <p className="text-gray-400 ">
              At Kindle, we combine cutting-edge technology with personalized support to deliver an unparalleled publishing experience. Here's what sets us apart:
            </p>
            <hr className='mb-6 mt-6 text-gray-400'/>
            <ul className="space-y-3 mb-8 text-gray-400">
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
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="bg-amber-50 text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Professional<br />Highlights</h2>
            <p className="text-gray-600 max-w-md text-sm">
              Discover how authors are achieving success with our platform. From bestsellers to debut novels, see the quality and variety of books published through Kindle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
    <div className="bg-orange-500 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>Copyright 2025 | All Rights Reserved | Powered by WordPress</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Disclaimer</a>
            <a href="#" className="hover:underline">Cookies Statement</a>
          </div>
        </div>
      </div>
      </div>
  );
}