'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCartStore } from '../../lib/store/useCartStore';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  image: string;
  size: 'small' | 'large';
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Statuary White',
    origin: 'Premium Italian Marble',
    price: 15,
    image: '/images/vm/474068172_589142160748720_2101783107251987927_n.jpg',
    size: 'large',
  },
  {
    id: '2',
    name: 'Exotic Grey',
    origin: 'Artisanal Selection',
    price: 15,
    image: '/images/vm/474082670_590614183934851_2750890222539040020_n.jpg',
    size: 'small',
  },
  {
    id: '3',
    name: 'Oceanic Blue',
    origin: 'Rare Granite',
    price: 15,
    image: '/images/vm/474127689_589142397415363_3759267218078555669_n.jpg',
    size: 'small',
  },
  {
    id: '4',
    name: 'Royal Gold',
    origin: 'Exclusive Collection',
    price: 15,
    image: '/images/vm/474136279_589126854083584_4227312048554785330_n.jpg',
    size: 'large',
  },
];

export const ProductGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.product-card');
      
      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={gridRef} className="py-32 px-4 md:px-12 lg:px-24 bg-alabaster text-obsidian">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight max-w-2xl">
          Curated Slabs for Architectural Excellence.
        </h2>
        <a href="#" className="font-sans text-sm uppercase tracking-widest border-b border-obsidian pb-1 mt-8 md:mt-0 hover:text-champagne hover:border-champagne transition-colors">
          View Full Collection
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {MOCK_PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className={`product-card group relative overflow-hidden bg-white cursor-pointer ${
              product.size === 'large' ? 'md:mt-16 h-[600px]' : 'h-[400px] md:h-[500px]'
            }`}
          >
            {/* Image Container with Hover Scale */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Product Details */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-alabaster transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-sans text-xs tracking-widest uppercase mb-2 opacity-80">{product.origin}</p>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">{product.name}</h3>
              
              {/* Slide up Quick Add Button */}
              <button 
                className="opacity-0 group-hover:opacity-100 bg-champagne text-obsidian px-6 py-3 font-sans text-sm tracking-wide uppercase transition-all duration-500 hover:bg-white w-full md:w-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  });
                }}
              >
                Order Sample - ${product.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
