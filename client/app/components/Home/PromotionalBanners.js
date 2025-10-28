import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PromotionalBanners() {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-80 rounded-lg overflow-hidden flex items-end p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594035918235-8b415a3a785c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800')" }}>
          <div className="absolute inset-0 bg-forest-green opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-gold">The Monsoon Collection</h3>
            <p className="max-w-xs mt-2 mb-4 text-text-light">Experience the fresh scents of petrichor and blossoming florals.</p>
            <Link href="/shop/collections/monsoon" className="font-bold inline-flex items-center group text-gold hover:text-amber-300 transition-colors">
              Shop Now <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

    
        <div className="relative h-80 rounded-lg overflow-hidden flex items-end p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f168a2d0c1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800')" }}>
          <div className="absolute inset-0 bg-forest-green opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-gold">Perfect for Gifting</h3>
            <p className="max-w-xs mt-2 mb-4 text-text-light">Find the perfect present for your loved ones, beautifully packaged.</p>
            <Link href="/shop/gifting" className="font-bold inline-flex items-center group text-gold hover:text-amber-300 transition-colors">
              Explore Gifts <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}