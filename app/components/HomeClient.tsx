"use client";
import React from 'react';
import Link from 'next/link';
import { Book, FileText, TrendingUp, Mic, Edit, Pen } from 'lucide-react';
import Image from 'next/image';
import Header from './Header';
import Carousel from './Carousel';
import dynamic from 'next/dynamic';
const ScrollExperience = dynamic(() => import('./ScrollExperience'), { ssr: false });
import TestimonialsSection from './Testomonial';
import CandleAnimation from './CandleAnimation';
import Footer from './footer';

import book1 from '../portfolio/cover-mock1.png';
import book2 from '../portfolio/cover-mock2.png';
import book3 from '../portfolio/cover-mock3.png';

export default function HomeClient() {
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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-noto-bold mb-4 sm:mb-6 leading-tight">
                        Your Complete Publishing <br />
                        Partner from Manuscript<br />
                        to Marketplace.
                    </h1>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-md">
                        Get expert formatting, stunning cover design, and global distribution while keeping all your rights. We&apos;re your publishing partner, handling the complexities so you can focus on your next chapter.
                    </p>
                    <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition text-sm sm:text-base inline-block">
                        Start Your Publishing Journey →
                    </Link>
                </div>
                <CandleAnimation />
            </section>

            {/* Partners */}
            <Carousel />

            {/* About Section */}
            <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=600&fit=crop"
                                alt="Library"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Kandle</h2>
                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                            At Kandle, we bridge the gap between a finished manuscript and a successfully published book. We understand that writing is your passion—dealing with technical formatting, design software, and distribution platforms often is not. That&apos;s where we step in.   </p>
                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                            We built Kandle to be the complete publishing partner that independent authors deserve. Our mission is simple: to provide the expert services and guidance you need to publish with confidence, reach a global audience, and, most importantly, retain 100% ownership and creative control of your work.   </p>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                            Our team of publishing specialists, designers, and marketers handles the complex details. From ensuring flawless ebook formatting across every device to creating custom, genre-perfect cover designs that capture readers&apos; attention, we manage the entire production process. Then, we distribute your book globally to major retailers like Amazon, Apple Books, Barnes & Noble, and Kobo.

                            We&apos;re not just a service; we&apos;re your advocate in the publishing world, committed to making professional publishing accessible and successful for every author.   </p>
                        <Link href="/about" className="text-orange-500 font-medium hover:underline text-sm sm:text-base inline-block">
                            Learn More About Our Process & Team →
                        </Link>
                    </div>
                </div>
            </section>
            {/* Scroll Experience Section */}
            <ScrollExperience />
            {/* Services Section */}
            <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-700 mb-2 sm:mb-4 text-left">Your Complete Publishing Toolkit </h2>
                    <p>Six Professional Services to Transform Your Manuscript into a Successful Book </p>
                    <hr className="flex-grow border-gray-900 mb-6 sm:mb-8" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Book className="w-10 h-10 text-orange-500" />,
                                title: "Professional Book Formatting & Conversion",
                                subtitle: "Flawless Readability on Every Device.",
                                desc: "We transform your manuscript into a polished ebook that delivers a perfect reading experience on Kindles, iPads, phones, and all major platforms. Our formatting meets strict retailer specifications, so your book looks professional from the first page to the last.",
                                linkText: "→ Learn More About Formatting",
                                linkHref: "/services"
                            },
                            {
                                icon: <FileText className="w-10 h-10 text-orange-500" />,
                                title: " Custom Book Cover Design",
                                subtitle: "A Cover That Sells Your Story.",
                                desc: "Your cover is your most important marketing tool. Our professional designers create original, genre-specific covers that grab attention in digital storefronts and compel readers to click Buy.",
                                linkText: "→ Explore Our Cover Design Portfolio ",
                                linkHref: "/services"
                            },
                            {
                                icon: <Edit className="w-10 h-10 text-orange-500" />,
                                title: "Global Distribution & Printing ",
                                subtitle: "From Digital to Physical, Worldwide. ",
                                desc: "Publish once, reach everywhere. We distribute your ebook to all major retailers like Amazon, Apple Books, Kobo, and Barnes & Noble. Want a paperback? Our integrated print-on-demand service creates high-quality physical books with no upfront inventory costs.",
                                linkText: "→ See Our Full Retailer Network ",
                                linkHref: "/services"
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
                                title: "Strategic Book Marketing",
                                subtitle: "Launch with Impact & Build Lasting Sales. ",
                                desc: "Go beyond publishing with marketing strategies designed for authors. From pre-launch campaigns and Amazon ads management to press outreach and social media plans, we help your book get discovered. ",
                                linkText: "→ Get Your Marketing Strategy Guide ",
                                linkHref: "/services"
                            },
                            {
                                icon: <Mic className="w-10 h-10 text-orange-500" />,
                                title: " Audiobook Production ",
                                subtitle: "Turn Your Book into a Captivating Listening Experience. ",
                                desc: "Expand your audience by converting your ebook into a professional audiobook. We handle everything from narrator casting and studio recording to final mastering and distribution on platforms like Audible and iTunes. ",
                                linkText: "→ Discover Audiobook Publishing ",
                                linkHref: "/services"
                            },
                            {
                                icon: <Pen className="w-10 h-10 text-orange-500" />,
                                title: "Expert Editing & Ghostwriting",
                                subtitle: "Polish Your Words or Bring Your Vision to Life. ",
                                desc: "Elevate your manuscript with our professional editing services, from proofreading to developmental edits. Have an idea but not the time to write? Our confidential ghostwriting service will craft your book for you. ",
                                linkText: "→ Discuss Your Editorial Needs ",
                                linkHref: "/services"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="p-8 border bg-white border-gray-200 rounded-2xl hover:shadow-xl transition flex flex-col items-start h-full">
                                <div className="mb-6 bg-orange-50 p-3 rounded-lg">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                                <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">{service.subtitle}</h4>
                                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">{service.desc}</p>
                                <Link href={service.linkHref} className="text-gray-900 font-semibold hover:text-orange-600 transition inline-flex items-center gap-1 group">
                                    {service.linkText.replace('→', '')} <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
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
                            Life Published With Kandle<br />
                            With Confidence
                        </h2>
                        <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                            Whether you&apos;re a first-time author or a seasoned writer, our platform is designed to make ebook publishing simple, affordable, and effective. Join thousands of authors who have trusted us to bring their stories to life.
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
                        <div className="relative rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=500&fit=crop"
                                alt="Working"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Kandle Section */}
            <section className="bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=500&fit=crop"
                                alt="Coffee reading"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-noto mb-4 sm:mb-6">Why Kandle?</h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            At Kandle, we combine cutting-edge technology with personalized support to deliver an unparalleled publishing experience. Here&apos;s what sets us apart:
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
                            Discover how authors are achieving success with our platform. From bestsellers to debut novels, see the quality and variety of books published through Kandle.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 items-end justify-items-center w-full mx-auto">
                        {[book1, book2, book3].map((book, idx) => (
                            <div key={idx} className="relative w-full aspect-[2/3] transform hover:scale-105 transition duration-300 ease-in-out">
                                <Image
                                    src={book}
                                    alt={`Book Highlight ${idx + 1}`}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 text-center">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/10 group"
                        >
                            View Full Portfolio
                            <span className="group-hover:translate-x-1 transition-transform font-bold text-xl">→</span>
                        </Link>
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
