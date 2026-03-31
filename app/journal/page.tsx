'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const POSTS = [
  {
    title: 'The Art of Veining: Understanding Patterns',
    date: 'April 01, 2026',
    category: 'Education',
    excerpt: 'How the geological formation of marble creates the dramatic aesthetic we admire today.',
    image: '/images/vm/486668363_638168439179425_2649956183878213473_n.jpg'
  },
  {
    title: 'Minimalist Interiors and Natural Stone',
    date: 'March 24, 2026',
    category: 'Design',
    excerpt: 'Exploring the role of large-scale slabs in modern architectural silhouettes.',
    image: '/images/vm/544906187_771682615828006_8034722888373729015_n.jpg'
  },
  {
    title: 'Sustainable Quarrying: Our Commitment',
    date: 'March 15, 2026',
    category: 'News',
    excerpt: 'How we ensure the longevity of the environments that provide our most precious materials.',
    image: '/images/vm/545325624_771682589161342_6377757125197033162_n.jpg'
  }
];

export default function JournalPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.journal-post', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 bg-alabaster text-obsidian px-6 md:px-12 lg:px-24">
      <header className="mb-24 flex justify-between items-end border-b border-obsidian/10 pb-12">
        <h1 className="font-serif text-6xl md:text-8xl tracking-tighter">Journal.</h1>
        <p className="max-w-xs font-sans text-[10px] tracking-widest uppercase opacity-60 text-right leading-loose">
          Insights on design, materiality, and the geological history of the Earth.
        </p>
      </header>

      <div className="flex flex-col gap-24">
        {POSTS.map((post, i) => (
          <article key={i} className="journal-post group flex flex-col md:flex-row gap-8 md:gap-16 cursor-pointer">
            <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden bg-obsidian/5">
              <Image 
                src={post.image} 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={post.title}
              />
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <div className="flex gap-4 font-sans text-[10px] tracking-widest uppercase mb-6 opacity-60">
                <span>{post.date}</span>
                <span className="text-champagne">—</span>
                <span>{post.category}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 group-hover:italic transition-all">
                {post.title}
              </h2>
              <p className="max-w-xl font-sans text-sm md:text-base leading-relaxed opacity-70 mb-8">
                {post.excerpt}
              </p>
              <div className="font-sans text-[10px] tracking-[0.3em] uppercase border-b border-obsidian/20 self-start pb-1 group-hover:border-champagne group-hover:text-champagne transition-all">
                Read Article
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
