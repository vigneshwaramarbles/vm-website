'use client';

import React from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '../../lib/store/useCartStore';

export const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem } = useCartStore();
  const subtotal = useCartStore(state => state.getTotals().subtotal);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 transition-opacity data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-alabaster z-50 shadow-2xl flex flex-col transform transition-transform duration-500 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-obsidian/10">
            <Dialog.Title className="font-serif text-2xl text-obsidian">Your Samples</Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-obsidian hover:text-champagne transition-colors" aria-label="Close">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-obsidian/50">
                <p className="font-sans text-sm tracking-widest uppercase">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-obsidian/5 pb-6">
                  <div className="relative w-24 h-24 bg-gray-200 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-obsidian">{item.name}</h4>
                      <p className="font-sans text-xs text-obsidian/60 mt-1">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 font-sans text-sm">
                        <button className="hover:text-champagne transition-colors"><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button className="hover:text-champagne transition-colors"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-obsidian/40 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Upsell Section */}
          <div className="p-6 bg-obsidian/5">
             <p className="font-sans text-xs tracking-widest uppercase mb-2">Complete your project</p>
             <div className="flex justify-between items-center">
                <p className="font-serif text-sm">Matching grout & sealants</p>
                <button className="text-xs uppercase border-b border-obsidian pb-0.5 hover:text-champagne transition-colors">Add +</button>
             </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-obsidian/10 bg-alabaster">
            <div className="flex justify-between items-center mb-6 text-obsidian">
              <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl">${subtotal}</span>
            </div>
            <button className="w-full bg-obsidian text-alabaster py-4 font-sans text-sm tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
