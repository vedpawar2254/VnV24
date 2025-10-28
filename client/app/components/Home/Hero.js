// app/components/home/Hero.js
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598454449072-354a3554b547?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600')" }}
      >
        <div className="absolute inset-0 bg-forest-green opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-gold">
          Crafted for the Senses
        </h1>
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-8">
          Discover unique fragrances and essential oils that define your essence and elevate your space.
        </p>
        <Link 
          href="/shop" 
          className="inline-flex items-center bg-gold text-text-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-600 transition-colors duration-300 group"
        >
          Explore Collection
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}