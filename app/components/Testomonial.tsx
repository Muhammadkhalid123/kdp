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
    <section className="bg-gray-800 py-20 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif mb-12 text-left">Testimonials</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left testimonial */}
          <div className="md:w-1/2 rounded-2xl relative ">
            <span className="text-[24rem] text-orange-500 absolute -top-29 -left-40">&ldquo;</span>
            <p className="text-gray-300 mt-30 mr-40 leading-relaxed">
              I didn't think it was possible to get my book published so quickly and easily. Kindle made the entire process seamless, from formatting to distribution. The team was incredibly supportive and professional. I'm so grateful for their expertise and dedication. My book is now available on all major platforms!
            </p>
            <span className="text-[6rem] text-white absolute -bottom-29 right-60">&rdquo;</span>
          </div>

          {/* Right gallery */}
          <div className="md:w-1/2 max-w-4xl h-[450px] mx-auto flex justify-center gap-4 gallery">
            {[
              { src: img1, alt: "Author 1" },
              { src: img2, alt: "Author 2" },
              { src: img3, alt: "Author 3" },
              { src: img4, alt: "Author 4" },
              { src: img5, alt: "Author 5" },
            ].map((img, idx) => (
              <div key={idx} className="gallery-panel flex-1 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out relative">
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
              ))}
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
  );
};

export default TestimonialsSection;