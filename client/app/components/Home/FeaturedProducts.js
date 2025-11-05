'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '../shared/ProductCard';

const mockProducts = [
  { 
    id: 'classic-oud', 
    name: 'Classic Oud', 
    category: 'Eau de Parfum', 
    price: '₹7,999', 
    imageUrl: 'https://picsum.photos/200/200',
    story: 'A journey through ancient forests where agarwood whispers tales of timeless elegance.'
  },
  { 
    id: 'saffron-bliss', 
    name: 'Saffron Bliss', 
    category: 'Essential Oil', 
    price: '₹2,499',
    imageUrl: 'https://picsum.photos/200/200',
    story: 'Captured from the heart of Kashmir, where each drop holds the essence of golden sunrises.'
  },
  { 
    id: 'vanilla-sky', 
    name: 'Vanilla Sky', 
    category: 'Eau de Parfum', 
    price: '₹5,499', 
    imageUrl: 'https://picsum.photos/200/200',
    story: 'An ethereal blend that carries the warmth of Madagascar vanilla across twilight skies.'
  },
  { 
    id: 'amber-glow', 
    name: 'Amber Glow', 
    category: 'Scented Candle', 
    price: '₹3,199', 
    imageUrl: 'https://picsum.photos/200/200',
    story: 'Inspired by sunset hues that dance through resinous amber in distant lands.'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">Our Artisanal Collection</h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            Each fragrance is a chapter in our story, meticulously crafted to evoke emotions and memories
          </p>
        </div>
        
        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-serif font-bold text-forest-green mb-6">The Essence of Nature, Bottled</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our journey began with a simple belief: that nature holds the most exquisite fragrances, waiting to be discovered and shared. 
              We travel to the remote corners of the world, sourcing the finest botanical essences and rare ingredients to create olfactory experiences 
              that transcend the ordinary.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Each bottle in our collection tells a story – of mountain peaks kissed by morning mist, of flowers blooming under starlit skies, 
              of ancient traditions passed down through generations. We honor these stories by preserving their authenticity while elevating them 
              through modern perfumery techniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gold rounded-full mr-3"></div>
                <span className="text-text-secondary">Sustainably Sourced</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gold rounded-full mr-3"></div>
                <span className="text-text-secondary">Handcrafted</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gold rounded-full mr-3"></div>
                <span className="text-text-secondary">Small Batch</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-gold opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1597343494685-98fbf13105fc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
              alt="Artisan crafting fragrances" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-forest-green mb-2 text-center">Our Bestsellers</h3>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Discover the fragrances that have captivated our community with their exceptional character
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <ProductCard product={product} />
                <div className="mt-4 p-4 bg-primary rounded-lg border border-border-color shadow-sm">
                  <p className="text-sm text-text-secondary italic">{product.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/shop" 
            className="inline-block bg-transparent border-2 border-gold text-gold font-bold py-3 px-8 rounded-md text-lg hover:bg-gold hover:text-text-dark transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}