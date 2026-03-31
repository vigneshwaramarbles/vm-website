'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-obsidian text-alabaster py-24 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-20 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="relative h-16 w-56 mb-8 invert">
            <Image 
              src="/images/vm/vm-logo.jpg" 
              alt="Vigneshwara Marbles" 
              fill 
              className="object-contain object-left"
            />
          </div>
          <p className="font-serif text-2xl max-w-sm tracking-tight leading-snug">
            Curating the earth&apos;s most exquisite stone for your architectural visions.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-widest text-champagne mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest">
            <li><Link href="/collection" className="hover:text-champagne transition-colors">Collection</Link></li>
            <li><Link href="/heritage" className="hover:text-champagne transition-colors">Heritage</Link></li>
            <li><Link href="/journal" className="hover:text-champagne transition-colors">Journal</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-widest text-champagne mb-8">Contact</h4>
          <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest opacity-70">
            <li>contact@vigneshwaramarbles.com</li>
            <li>+91 98765 43210</li>
            <li>Asansol, West Bengal, India</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© 2026 Vigneshwara Marbles. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-alabaster">Privacy Policy</a>
          <a href="#" className="hover:text-alabaster">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
