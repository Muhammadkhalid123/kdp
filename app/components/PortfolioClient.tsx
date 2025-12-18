"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/footer';

// Import all 12 book cover mockups
import book1 from '../portfolio/cover-mock1.png';
import book2 from '../portfolio/cover-mock2.png';
import book3 from '../portfolio/cover-mock3.png';
import book4 from '../portfolio/cover-mock4.png';
import book5 from '../portfolio/cover-mock5.png';
import book6 from '../portfolio/cover-mock6.png';
import book7 from '../portfolio/cover-mock7.png';
import book8 from '../portfolio/cover-mock8.png';
import book9 from '../portfolio/cover-mock9.png';
import book10 from '../portfolio/cover-mock10.png';
import book11 from '../portfolio/cover-mock11.png';
import book12 from '../portfolio/cover-mock12.png';

const books = [
    book1, book2, book3, book4, book5, book6,
    book7, book8, book9, book10, book11, book12
];

export default function PortfolioClient() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-noto-bold mb-6 leading-tight">
                    Our Portfolio of <br />
                    <span className="text-orange-500">Published Masterpieces.</span>
                </h1>
                <p className="text-gray-400 mb-8 text-sm sm:text-base md:text-lg max-w-2xl">
                    Explore our collection of professionally designed and published books.
                    From bestsellers to debut novels, we've helped countless authors bring their
                    visions to life with premium quality and global reach.
                </p>
            </section>

            {/* Portfolio Grid */}
            <section className="bg-amber-50 text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 items-end justify-items-center">
                        {books.map((book, idx) => (
                            <div key={idx} className="relative w-full aspect-[2/3] transform hover:scale-105 transition duration-500 ease-in-out group">
                                <Image
                                    src={book}
                                    alt={`Published Book Cover ${idx + 1}`}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="bg-gray-800 py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Expert Book Design & Publishing</h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            At Kandle Direct Publishing, we specialize in creating market-ready books that stand out in digital and physical storefronts worldwide. Our portfolio showcases the breadth of our expertise across various genres including fiction, non-fiction, business, and lifestyle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-orange-500 uppercase tracking-wider">Premium Cover Design</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your book cover is your most powerful marketing tool. Our professional designers craft bespoke, genre-specific covers that capture the essence of your story and compel readers to click. We analyze market trends to ensure your book remains competitive.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-orange-500 uppercase tracking-wider">Flawless Formatting</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We bridge the gap between a manuscript and a professional ebook. Our meticulous formatting process ensures a perfect reading experience on Kindles, iPads, and all major mobile platforms, meeting strict retailer specifications every time.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition inline-block text-lg shadow-lg shadow-orange-500/20">
                            Start Your Journey with Us →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
