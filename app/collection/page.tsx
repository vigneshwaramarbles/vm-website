'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCartStore } from '../../lib/store/useCartStore';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = ['All', 'Marble', 'Granite', 'Exotic', 'Travertine'];

const ALL_PRODUCTS = [
  { id: '1', name: 'Statuary White', origin: 'Carrara, Italy', type: 'Marble', price: 15, image: '/images/vm/474068172_589142160748720_2101783107251987927_n.jpg' },
  { id: '2', name: 'Exotic Grey', origin: 'Artisanal Selection', type: 'Granite', price: 15, image: '/images/vm/474082670_590614183934851_2750890222539040020_n.jpg' },
  { id: '3', name: 'Oceanic Blue', origin: 'Rare Quartzite', type: 'Exotic', price: 15, image: '/images/vm/474127689_589142397415363_3759267218078555669_n.jpg' },
  { id: '4', name: 'Royal Gold', origin: 'Exclusive Quarry', type: 'Marble', price: 15, image: '/images/vm/474136279_589126854083584_4227312048554785330_n.jpg' },
  { id: '5', name: 'Classic Travertine', origin: 'Tivoli, Italy', type: 'Travertine', price: 15, image: '/images/vm/474213189_589127120750224_1849568744871117616_n.jpg' },
  { id: '6', name: 'Nero Elegance', origin: 'Artisanal Selection', type: 'Exotic', price: 15, image: '/images/vm/474240775_589126880750248_8522237389156458174_n.jpg' },
  { id: '7', name: 'Verde Premium', origin: 'Indian Selection', type: 'Marble', price: 15, image: '/images/vm/474452050_589142404082029_8253562469600715087_n.jpg' },
  { id: '8', name: 'Arabesque White', origin: 'Carrara, Italy', type: 'Marble', price: 15, image: '/images/vm/474461152_590614177268185_5685711141753542814_n.jpg' },
];

export default function CollectionPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const { addItem } = useCartStore();

  const filteredProducts = ALL_PRODUCTS.filter(p => activeCategory === 'All' || p.type === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.collection-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });

      gsap.from('.category-btn', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 pb-20 bg-alabaster text-obsidian px-6 md:px-12 lg:px-24">
      <header className="mb-20">
        <h1 className="collection-title font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8">
          The Slabs.
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <p className="max-w-xl font-sans text-sm tracking-widest uppercase opacity-70 leading-relaxed">
            From the deep veins of Carrara to the exotic textures of Brazil, explore our rigorously curated collection of master-grade natural stone.
            </p>
            
            <div className="flex flex-wrap gap-4 border-b border-obsidian/10 pb-4 w-full md:w-auto">
                {CATEGORIES.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`category-btn font-sans text-[10px] tracking-widest uppercase transition-all pb-2 relative ${activeCategory === cat ? 'text-champagne font-bold' : 'text-obsidian hover:text-champagne'}`}
                    >
                        {cat}
                        {activeCategory === cat && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne" />}
                    </button>
                ))}
            </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item group cursor-pointer animate-fade-in">
            <div className="relative aspect-[3/4] overflow-hidden bg-obsidian/5 mb-6">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                 <button 
                  onClick={() => addItem({...product, quantity: 1})}
                  className="bg-alabaster text-obsidian px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-champagne transition-colors w-full"
                 >
                   Order Sample
                 </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1">{product.origin}</p>
                    <h3 className="font-serif text-xl">{product.name}</h3>
                </div>
                <p className="font-sans text-xs mt-1 text-champagne font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
              <p className="font-sans text-sm tracking-widest uppercase opacity-40">No products found in this category</p>
          </div>
      )}
    </div>
  );
}
