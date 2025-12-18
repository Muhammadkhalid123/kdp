"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Import local images
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "First-Time Author Success",
      content: "As a debut novelist, I was lost after finishing my manuscript. Kandle's team demystified the entire publishing process. Their guidance on cover design and their marketing checklist were invaluable. My book found its audience, and I retained all my rights—exactly what I wanted.",
      author: "Elena R.",
      role: "Fiction Author"
    },
    {
      title: "From Idea to Bestseller",
      content: "I had a niche non-fiction idea but no time for the technicalities. From professional formatting to distributing my ebook and paperback globally, Kandle handled it all efficiently. Seeing my book rank in its category on Amazon was a dream come true.",
      author: "David L.",
      role: "Business & Lifestyle Author"
    },
    {
      title: "Expanding to New Formats",
      content: "After my ebook's success, I wanted to reach audio listeners. Kandle's audiobook production service was seamless. They matched my book with a perfect narrator and handled all the distribution. It opened up a whole new audience for my work.",
      author: "Sophie T.",
      role: "Mystery & Thriller Author"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-800 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-white">
            Read Stories from Published Authors.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Join a community of writers who brought their books to life with Kandle.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left testimonial content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[400px]">
            <div className="relative px-4 pl-8 sm:px-8">
              <span className="text-6xl sm:text-8xl text-orange-500 absolute -top-10 -left-2 opacity-30">“</span>
              <div className="relative z-10">
                <h3 className="text-xl text-orange-400 font-semibold mb-4 tracking-wide uppercase">
                  {testimonials[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="text-white font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pl-8 flex items-center gap-6">
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <Link href="/success-stories" className="text-orange-500 font-medium hover:text-white transition flex items-center gap-2 group">
                Read More Author Success Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right gallery */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[450px] flex justify-center gap-2 sm:gap-3 md:gap-4 gallery overflow-hidden">
            {[
              { src: img1, alt: "Author 1" },
              { src: img2, alt: "Author 2" },
              { src: img3, alt: "Author 3" },
            ].map((img, idx) => (
              <div key={idx} className="gallery-panel flex-1 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out relative min-w-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={idx === 0}
                />
              </div>
            ))}
            <div className="hidden md:flex gap-2 sm:gap-3 md:gap-4 flex-1">
              {[
                { src: img4, alt: "Author 4" },
                { src: img5, alt: "Author 5" },
              ].map((img, idx) => (
                <div key={idx + 3} className="gallery-panel flex-1 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out relative min-w-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .gallery:has(.gallery-panel:hover) .gallery-panel:not(:hover) img {
            filter: grayscale(100%);
          }

          .gallery-panel:hover {
            flex: 2.5;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;