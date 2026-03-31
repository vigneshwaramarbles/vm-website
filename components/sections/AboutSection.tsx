'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.fromTo('.reveal-mask',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div ref={textRef} className="space-y-8">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-champagne">Since 1982</span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-obsidian leading-tight">
            The Standard of <br />
            <span className="italic">Architectural Luxury.</span>
          </h2>
          <p className="font-sans text-lg text-obsidian/70 leading-relaxed max-w-xl">
            Vigneshwara Marbles has been the premier destination for the world&apos;s finest natural stones. Our legacy is built on direct relationships with elite quarries across Italy, Spain, and Brazil, ensuring every slab meets the rigorous standards of master architects.
          </p>
          <div className="pt-4">
            <a href="/heritage" className="font-sans text-xs uppercase tracking-widest border-b border-obsidian pb-1 hover:text-champagne hover:border-champagne transition-colors inline-block">
              Discover Our Heritage
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
          <div className="absolute inset-0 border border-obsidian/10 translate-x-4 translate-y-4 -z-10" />
          <div className="reveal-mask relative w-full h-full overflow-hidden">
            <Image 
              src="/images/vm/485039153_632563609739908_2329041439641468377_n.jpg"
              alt="Craftsmanship"
              fill
              className="object-cover scale-110 motion-safe:hover:scale-100 transition-transform duration-[2s]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
