'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { label: 'Stone Varieties', value: 450, suffix: '+' },
  { label: 'Global Quarries', value: 24, suffix: '' },
  { label: 'Exquisite Projects', value: 1200, suffix: '+' },
  { label: 'Years of Legacy', value: 44, suffix: '' },
];

export const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((stat, index) => {
        const counter = countersRef.current[index];
        if (counter) {
          gsap.to(counter, {
            innerText: stat.value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
            },
            onUpdate: function() {
              if (counter) counter.innerText = Math.ceil(Number(counter.innerText)).toString();
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-obsidian text-alabaster border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
          {STATS.map((stat, index) => (
            <div key={index} className="space-y-4">
              <div className="font-serif text-4xl md:text-6xl text-champagne flex items-center justify-center">
                <span ref={(el) => { countersRef.current[index] = el; }}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
