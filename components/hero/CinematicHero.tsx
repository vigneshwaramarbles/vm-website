'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const SLIDES = [
  {
    image: '/images/vm/485163713_632593396403596_1200771540076677241_n.jpg',
    title: 'Forged by Time.',
    subtitle: 'Nature\'s Ancient Masterpieces',
    accent: 'Curated for you.'
  },
  {
    image: '/images/vm/474068172_589142160748720_2101783107251987927_n.jpg',
    title: 'Architectural Grace.',
    subtitle: 'Premium Italian Statuario',
    accent: 'Pure Elegance.'
  },
  {
    image: '/images/vm/474127689_589142397415363_3759267218078555669_n.jpg',
    title: 'Global Excellence.',
    subtitle: 'Rare Exotic Selections',
    accent: 'The World\'s Finest.'
  }
];

export const CinematicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-part',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Slide Transition Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(`.slide-${currentSlide}`, 
        { opacity: 0, scale: 1.1 }, 
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      );
      
      gsap.fromTo('.hero-text-part',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian text-alabaster"
    >
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index} 
          className={`slide-bg slide-${index} absolute inset-0 z-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt="Marble Texture"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 text-center flex flex-col items-center px-4">
        <span className="hero-text-part font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-champagne mb-6">
          {SLIDES[currentSlide].subtitle}
        </span>
        <h1
          className="hero-text-part font-serif text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-4"
        >
          {SLIDES[currentSlide].title}
          <br />
          <span className="italic font-light text-alabaster/90">
             {SLIDES[currentSlide].accent}
          </span>
        </h1>
        
        <div className="hero-text-part mt-12 flex gap-6">
            <button className="bg-champagne text-obsidian px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-white transition-all">
                View Collection
            </button>
            <button className="border border-white/30 text-white px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-white hover:text-obsidian transition-all">
                Our Heritage
            </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        {SLIDES.map((_, i) => (
          <div 
            key={i} 
            className={`h-[2px] w-8 transition-all duration-500 ${i === currentSlide ? 'bg-champagne w-12' : 'bg-white/20'}`} 
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-12 z-20 flex flex-col items-start opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 font-sans vertical-text">Explore</span>
        <div className="w-[1px] h-16 bg-white animate-scroll-line" />
      </div>
    </section>
  );
};
