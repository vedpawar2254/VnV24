// app/components/home/Hero.js
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598454449072-354a3554b547?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600')" }}
      >
        <div className="absolute inset-0 bg-forest-green opacity-70"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-2 border-gold opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full border-2 border-gold opacity-30 animate-pulse"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium backdrop-blur-sm">
            Crafted with Nature's Essence
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gold leading-tight">
          Where <span className="text-text-light">Nature</span> Meets <span className="text-gold">Luxury</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover our curated collection of premium fragrances and essential oils, 
          each telling a story of ancient wisdom and modern craftsmanship. 
          Transform your space and senses with every drop.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/shop" 
            className="inline-flex items-center bg-gold text-text-dark font-bold py-4 px-8 rounded-md text-lg hover:bg-amber-600 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/about" 
            className="inline-flex items-center text-text-light font-medium py-4 px-8 rounded-md text-lg hover:text-gold transition-colors duration-300 group border border-text-light/30 hover:border-gold"
          >
            Our Story
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-light animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}