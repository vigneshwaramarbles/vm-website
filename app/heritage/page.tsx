'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Image from 'next/image';

export default function HeritagePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.heritage-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 bg-obsidian text-alabaster px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-4xl w-full heritage-content">
        <span className="font-sans text-xs tracking-[0.4em] uppercase text-champagne mb-8 block">Our Legacy</span>
        <div className="mb-12 relative h-20 w-64">
           <Image src="/images/vm/vm-logo.jpg" alt="Vigneshwara Marbles Logo" fill className="object-contain object-left invert" />
        </div>
        <h1 className="font-serif text-5xl md:text-8xl tracking-tighter mb-12">
          Decades of <br /><span className="italic">Stone Mastery.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
            <Image 
              src="/images/vm/485039153_632563609739908_2329041439641468377_n.jpg" 
              fill
              className="object-cover opacity-80"
              alt="Historical Quarry"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8">
              Founded on the principles of integrity and excellence, Vigneshwara Marbles has been the cornerstone of architectural luxury for over three generations.
            </p>
            <p className="font-sans text-sm tracking-wide opacity-70 leading-relaxed">
              Our journey begins in the heart of the world&apos;s most renowned quarries. We don&apos;t just supply stone; we curate the very foundation of human creativity, bringing the earth&apos;s most ancient art into modern spaces.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-24 pb-32">
          <h2 className="font-serif text-3xl md:text-5xl mb-12">Crafting the Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans text-xs tracking-widest uppercase opacity-60">
            <div>
              <p className="text-champagne mb-4">01. Sourcing</p>
              <p>Direct relationships with premium quarries in Italy, Spain, and Brazil.</p>
            </div>
            <div>
              <p className="text-champagne mb-4">02. Curation</p>
              <p>Hand-selected slabs that meet our rigorous standards for veining and structural integrity.</p>
            </div>
            <div>
              <p className="text-champagne mb-4">03. Preservation</p>
              <p>State-of-the-art processing that honors the natural characteristics of every stone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
