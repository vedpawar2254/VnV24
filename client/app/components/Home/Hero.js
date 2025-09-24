// app/components/home/Hero.js
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          Crafted for the Senses
        </h1>
        <p className="text-lg md:text-xl text-text-primary max-w-2xl mx-auto mb-8">
          Discover unique fragrances and essential oils that define your essence and elevate your space.
        </p>
        <Link 
          href="/shop" 
          className="inline-flex items-center bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-accent-hover transition-colors group"
        >
          Explore Collection
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}