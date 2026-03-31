'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCartStore } from '../../lib/store/useCartStore';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ALL_PRODUCTS = [
  { id: '1', name: 'Statuary White', origin: 'Carrara Region', price: 15, image: '/images/vm/474068172_589142160748720_2101783107251987927_n.jpg' },
  { id: '2', name: 'Exotic Grey', origin: 'Selected Artisanal', price: 15, image: '/images/vm/474082670_590614183934851_2750890222539040020_n.jpg' },
  { id: '3', name: 'Oceanic Blue', origin: 'Rare Granite', price: 15, image: '/images/vm/474127689_589142397415363_3759267218078555669_n.jpg' },
  { id: '4', name: 'Royal Gold', origin: 'Exclusive Collection', price: 15, image: '/images/vm/474136279_589126854083584_4227312048554785330_n.jpg' },
  { id: '5', name: 'Classic Travertine', origin: 'Timeless Beauty', price: 15, image: '/images/vm/474213189_589127120750224_1849568744871117616_n.jpg' },
  { id: '6', name: 'Nero Elegance', origin: 'Deep Contrast', price: 15, image: '/images/vm/474240775_589126880750248_8522237389156458174_n.jpg' },
  { id: '7', name: 'Verde Premium', origin: 'Lush Textures', price: 15, image: '/images/vm/474452050_589142404082029_8253562469600715087_n.jpg' },
  { id: '8', name: 'Arabesque White', origin: 'Intricate Veining', price: 15, image: '/images/vm/474461152_590614177268185_5685711141753542814_n.jpg' },
];

export default function CollectionPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.collection-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });

      gsap.from('.product-item', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.4
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 pb-20 bg-alabaster text-obsidian px-6 md:px-12 lg:px-24">
      <header className="mb-20">
        <h1 className="collection-title font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8">
          Full Collection
        </h1>
        <p className="max-w-xl font-sans text-sm tracking-widest uppercase opacity-70 leading-relaxed">
          Explore our complete inventory of world-class natural stone, hand-selected from the most prestigious quarries globally.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {ALL_PRODUCTS.map((product) => (
          <div key={product.id} className="product-item group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-obsidian/5 mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                 <button 
                  onClick={() => addItem({...product, quantity: 1})}
                  className="bg-alabaster text-obsidian px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-champagne transition-colors w-full"
                 >
                   Order Sample
                 </button>
              </div>
            </div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1">{product.origin}</p>
            <h3 className="font-serif text-xl">{product.name}</h3>
            <p className="font-sans text-xs mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
