import React from 'react';
import { ChevronLeft, ChevronRight, Book, Pen, FileText, TrendingUp, Mic, Edit } from 'lucide-react';

export default function KindleLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-90 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Pen className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-semibold">Kindle</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Pages</a>
          <a href="#" className="hover:text-orange-500">Our Services</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-medium transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
      <section className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-around gap-8">
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8" />
            <span className="font-semibold">Kobo</span>
          </div>
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8" />
            <span className="font-semibold">Google</span>
          </div>
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8" />
            <span className="font-semibold">Amazon Publishing</span>
          </div>
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8" />
            <span className="font-semibold">Barnes & Noble Press</span>
          </div>
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8" />
            <span className="font-semibold">Scribd</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-amber-50 text-gray-900 py-20 px-6">
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

      {/* Services Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
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
              <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 bg-gray-700 p-8 rounded-2xl relative">
              <span className="text-6xl text-orange-500 absolute top-4 left-4">&ldquo;</span>
              <p className="text-gray-300 mt-8 mb-6 leading-relaxed">
                I didn't think it was possible to get my book published so quickly and easily. Kindle made the entire process seamless, from formatting to distribution. The team was incredibly supportive and professional. I'm so grateful for their expertise and dedication. My book is now available on all major platforms!
              </p>
              <span className="text-6xl text-orange-500 absolute bottom-4 right-8">&rdquo;</span>
            </div>
            <div className="md:w-1/2 flex gap-4 overflow-x-auto">
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="min-w-[200px] bg-gray-700 rounded-2xl p-4 text-center">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + idx * 1000000}?w=150&h=150&fit=crop&faces=1`}
                    alt={`Testimonial ${idx + 1}`}
                    className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
                  />
                  <p className="font-semibold">Sarah K.</p>
                  <p className="text-sm text-gray-400">Author</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Why Kindle?</h2>
            <p className="text-gray-400 mb-8">
              At Kindle, we combine cutting-edge technology with personalized support to deliver an unparalleled publishing experience. Here's what sets us apart:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Simple and intuitive platform",
                "Professional formatting and design",
                "Distribution to all major retailers",
                "Transparent pricing with no hidden fees",
                "Expert support every step of the way",
                "Marketing tools to boost visibility",
                "Retain full rights to your work"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span className="text-gray-300">{item}</span>
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
                  src={`https://images.unsplash.com/photo-${1500000000000 + idx * 5000000}?w=350&h=400&fit=crop`}
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
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Pen className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-semibold">Kindle</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                From Writing To<br />
                Publishing.
              </h3>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-medium transition mt-4">
                Support
              </button>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Home</a></li>
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Services</a></li>
                <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">f</a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">t</a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">in</a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">Contact Us</p>
                <p className="text-sm">info@kindle.com</p>
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get the latest news and updates
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-medium transition w-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>Copyright 2024 - All Rights Reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Banner */}
      <div className="bg-orange-500 py-2 text-center text-sm font-medium">
        🎉 Special Offer: Get 20% off your first ebook publication! Use code: FIRST20
      </div>
    </div>
  );
}