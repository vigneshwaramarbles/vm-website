'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../lib/store/useCartStore';

export const Navbar = () => {
  const { toggleCart, items } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 w-full z-40 p-6 mix-blend-difference text-alabaster flex justify-between items-center">
      <Link href="/" className="font-serif text-2xl tracking-tighter cursor-pointer uppercase">
        Vigneshwara Marbles.
      </Link>
      
      <div className="flex items-center gap-8 font-sans text-xs uppercase tracking-[0.2em]">
        <nav className="hidden md:flex gap-8">
          <Link href="/collection" className="hover:text-champagne transition-colors">Collection</Link>
          <Link href="/heritage" className="hover:text-champagne transition-colors">Heritage</Link>
          <Link href="/journal" className="hover:text-champagne transition-colors">Journal</Link>
        </nav>
        
        <button 
          onClick={toggleCart} 
          className="relative flex items-center gap-2 hover:text-champagne transition-colors"
        >
          <span>Cart</span>
          <ShoppingBag size={16} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-champagne text-obsidian text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
