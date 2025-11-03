import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PromotionalBanners() {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-4">Curated Experiences</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover our thoughtfully composed collections designed for special moments and seasons
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 rounded-xl overflow-hidden flex flex-col justify-between p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594035918235-8b415a3a785c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800')" }}>
          <div className="absolute inset-0 bg-forest-green opacity-60"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium backdrop-blur-sm mb-4">
              Seasonal Collection
            </span>
            <h3 className="text-3xl font-serif font-bold text-gold mb-2">The Monsoon Collection</h3>
            <p className="max-w-xs mb-4 text-text-light">Experience the fresh scents of petrichor and blossoming florals that capture the essence of India's monsoon season.</p>
          </div>
          <div className="relative z-10">
            <Link href="/shop/collections/monsoon" className="font-bold inline-flex items-center group text-gold hover:text-amber-300 transition-colors">
              Discover the Collection <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative h-96 rounded-xl overflow-hidden flex flex-col justify-between p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f168a2d0c1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800')" }}>
          <div className="absolute inset-0 bg-forest-green opacity-60"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium backdrop-blur-sm mb-4">
              Gift Experience
            </span>
            <h3 className="text-3xl font-serif font-bold text-gold mb-2">Perfect for Gifting</h3>
            <p className="max-w-xs mb-4 text-text-light">Find the perfect present for your loved ones, beautifully packaged with our signature artisanal touches.</p>
          </div>
          <div className="relative z-10">
            <Link href="/shop/gifting" className="font-bold inline-flex items-center group text-gold hover:text-amber-300 transition-colors">
              Explore Gift Sets <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}