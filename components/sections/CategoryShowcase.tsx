'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  {
    title: 'Imported Marble',
    description: 'The finest Italian Statuario and Greek marbles.',
    image: '/images/vm/474068172_589142160748720_2101783107251987927_n.jpg',
  },
  {
    title: 'Exotic Granite',
    description: 'Rare patterns and textures from Brazil and India.',
    image: '/images/vm/474127689_589142397415363_3759267218078555669_n.jpg',
  },
  {
    title: 'Signature Travertine',
    description: 'Classic, timeless stone for modern facades.',
    image: '/images/vm/474213189_589127120750224_1849568744871117616_n.jpg',
  },
];

export const CategoryShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-card', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-alabaster">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-obsidian max-w-2xl">
          A Curated Selection <br />
          <span className="italic">of Global Stone.</span>
        </h2>
        <Link href="/collection" className="font-sans text-xs uppercase tracking-[0.3em] border-b border-obsidian pb-2 hover:text-champagne hover:border-champagne transition-colors">
          Explore All Categories
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((cat, index) => (
          <div key={index} className="category-card group relative aspect-[4/5] overflow-hidden cursor-pointer">
            <Image 
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-2xl text-alabaster mb-2 transition-transform duration-500 group-hover:-translate-y-2">{cat.title}</h3>
              <p className="font-sans text-xs text-alabaster/70 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
