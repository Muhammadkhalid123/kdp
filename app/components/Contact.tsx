"use client";
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import Image from 'next/image';
import contactImg from '../contact/c-hero.png';
import womenImg from '../about/wmen.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${contactImg.src}')` }}
          aria-hidden
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-1 bg-red-900/40"></div>

        {/* Header on top of background */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Hero Content - Spacer to push form section below hero */}
        <div className="relative z-10 min-h-[60vh]"></div>
      </div>

      {/* Contact Form Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Form Section */}
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="max-w-md">
                  <h2 className="text-4xl text-black sm:text-5xl font-serif mb-2">
                    Fill In Your Details
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-gray-700 mb-8">
                    We&apos;ll Contact You Soon.
                  </p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 transition-colors placeholder-gray-400 text-gray-900"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 transition-colors placeholder-gray-400 text-gray-900"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 transition-colors placeholder-gray-400 text-gray-900"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 transition-colors placeholder-gray-400 text-gray-900 resize-none"
                        rows={3}
                      />
                    </div>

                    {submitted && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        Thank you! We&apos;ll contact you soon.
                      </div>
                    )}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Us A Message'}
                      {!isSubmitting && (
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 min-h-[400px] md:min-h-full">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-6 opacity-20"></div>
                    <div className="relative rounded-3xl w-full h-[500px] bg-gradient-to-br from-gray-300 to-gray-500 shadow-2xl overflow-hidden">
                      <Image
                        src={womenImg}
                        alt="Women illustration"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
