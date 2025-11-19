"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          // markers: true, // enable to debug
        },
      });

      // Start fully off-screen right → move to off-screen left
      tl.fromTo(
        textRef.current,
        { xPercent: 100, opacity: 0 },
        { xPercent: -100, opacity: 1, ease: "none" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-experience relative overflow-x-hidden bg-amber-50 h-screen flex items-center justify-center"
    >
       <h1
        ref={textRef}
        className="text-[20vw] uppercase font-serif leading-none whitespace-nowrap"
      >
        <span className="text-black">K</span>
        <span className="text-orange-500">A</span>
        <span className="text-black">N</span>
        <span className="text-orange-500">D</span>
        <span className="text-black">L</span>
        <span className="text-orange-500">E</span>
      </h1>
    </section>
  );
}
