'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Shield, Zap, Target, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERTISE = [
  {
    icon: <Shield size={32} />,
    title: 'Certified Quality',
    description: 'Every slab is individually inspected and certified for structural integrity and vein consistency.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Direct Sourcing',
    description: 'Bypassing middlemen to source directly from exclusive quarries in Italy, Brazil, and Spain.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Precision Processing',
    description: 'Utilizing state-of-the-art Italian machinery for the most precise finishing and cutting.'
  },
  {
    icon: <Target size={32} />,
    title: 'Architectural Support',
    description: 'Technical guidance for master architects and designers on complex stone installations.'
  }
];

export const ExpertiseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.expertise-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
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
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="mb-24 text-center">
        <span className="font-sans text-xs tracking-[0.4em] uppercase text-champagne mb-4 block">Our Expertise</span>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-obsidian">
          Why Architects Choose <br />
          <span className="italic text-champagne">Vigneshwara.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {EXPERTISE.map((item, index) => (
          <div key={index} className="expertise-card group p-8 border border-obsidian/5 hover:border-champagne/30 transition-colors duration-500">
            <div className="text-champagne mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
              {item.icon}
            </div>
            <h3 className="font-serif text-xl mb-4 text-obsidian">{item.title}</h3>
            <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
