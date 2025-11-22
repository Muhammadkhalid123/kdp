"use client";
import Image from 'next/image';

export default function Carousel() {
  // Using the actual brand logos from the image
  const brands = [
    {
      img: "/kobo.png",
      name: "Kobo",
    },
    {
      img: "/ibooks.png",
      name: "Apple Books",

    },
    {
      img: "/hachette.png",
      name: "Hachette",

    },
    {
      img: "/simon.png",
      name: "Simon & Schuster",

    },
    {
      img: "/scribd.png",
      name: "Scribd",

    },
  ];

  return (
    <div className="w-full overflow-hidden bg-orange-500 py-3">
      {/* Scrolling container */}
      <div className="flex animate-scroll-left whitespace-nowrap">
        {/* Duplicate content 3 times for seamless infinite effect */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {brands.map((brand, index) => (
              <div
                key={`${i}-${index}`}
                className="mx-4 flex h-12 items-center justify-center px-8"

              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}