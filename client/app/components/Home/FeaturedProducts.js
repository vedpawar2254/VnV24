'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProductCard from '../shared/ProductCard';

const mockProducts = [
  { id: 'classic-oud', name: 'Classic Oud', category: 'Eau de Parfum', price: '₹7,999', imageUrl: 'https://images.unsplash.com/photo-1541695434458-86f124f542a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'saffron-bliss', name: 'Saffron Bliss', category: 'Essential Oil', price: '₹2,499', imageUrl: 'https://images.unsplash.com/photo-1622682937529-652a2656aade?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'vanilla-sky', name: 'Vanilla Sky', category: 'Eau de Parfum', price: '₹5,499', imageUrl: 'https://images.unsplash.com/photo-1585399134919-408923472941?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'amber-glow', name: 'Amber Glow', category: 'Scented Candle', price: '₹3,199', imageUrl: 'https://images.unsplash.com/photo-1614036134372-5a7a7a3b4f5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'rose-petal', name: 'Rose Petal', category: 'Eau de Parfum', price: '₹6,499', imageUrl: 'https://images.unsplash.com/photo-1559193421-a475a8a1b6a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'sandalwood', name: 'Sandalwood', category: 'Essential Oil', price: '₹2,999', imageUrl: 'https://images.unsplash.com/photo-1596707316109-3a3699ed02c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
  { id: 'lavender-mist', name: 'Lavender Mist', category: 'Room Spray', price: '₹1,999', imageUrl: 'https://images.unsplash.com/photo-1605039912630-3814a4b4b266?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
];

export default function FeaturedProducts() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-secondary">
      <div className="sticky top-0 flex h-screen flex-col">
        <div className="container mx-auto px-4 text-center pt-24 pb-12">
            <h2 className="text-5xl font-serif font-bold text-primary mb-2">Our Bestsellers</h2>
            <p className="text-gray-600">Discover the fragrances our customers love the most.</p>
        </div>
        
        <div className="flex flex-grow items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="w-[40vw] md:w-[25vw] flex-shrink-0">
                <ProductCard product={product} scrollYProgress={scrollYProgress} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}