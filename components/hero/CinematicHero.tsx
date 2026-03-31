'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text and slide up slowly
      gsap.fromTo(
        [textRef.current, subtextRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian text-alabaster"
    >
      {/* Background Video/Image (Using placeholder color/gradient for prototype if video not present) */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/vm/485163713_632593396403596_1200771540076677241_n.jpg"
          alt="Marble Texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4">
        <h1
          ref={textRef}
          className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight opacity-0"
        >
          Forged by time.
          <br />
          <span className="italic font-light text-champagne uppercase">Curated for you.</span>
        </h1>
        <p
          ref={subtextRef}
          className="mt-8 font-sans text-sm md:text-lg tracking-widest uppercase opacity-0"
        >
          The Vigneshwara Marbles Collection
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 flex flex-col items-center animate-pulse">
        <span className="text-xs uppercase tracking-[0.2em] mb-2 font-sans">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-alabaster/50" />
      </div>
    </section>
  );
};
