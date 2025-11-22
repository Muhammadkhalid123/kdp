import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import local images
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-800 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 md:mb-12 text-left">Testimonials</h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left testimonial */}
          <div className="w-full lg:w-1/2 rounded-2xl relative px-4 sm:px-8 md:px-12">
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[24rem] text-orange-500 absolute -top-8 sm:-top-12 md:-top-16 lg:-top-29 -left-4 sm:-left-8 md:-left-16 lg:-left-40">&ldquo;</span>
            <p className="text-gray-300 mt-12 sm:mt-20 md:mt-24 lg:mt-30 text-sm sm:text-base leading-relaxed relative z-10">
              I didn't think it was possible to get my book published so quickly and easily. Kindle made the entire process seamless, from formatting to distribution. The team was incredibly supportive and professional. I'm so grateful for their expertise and dedication. My book is now available on all major platforms!
            </p>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] text-white absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-29 right-8 sm:right-16 md:right-32 lg:right-60">&rdquo;</span>
          </div>

          {/* Right gallery */}
          <div className="w-full lg:w-1/2 max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[450px] mx-auto flex justify-center gap-2 sm:gap-3 md:gap-4 gallery overflow-hidden">
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
            {/* Additional images for larger screens */}
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

        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;