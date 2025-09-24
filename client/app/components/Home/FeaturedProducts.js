'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProductCard from '../shared/ProductCard';

const mockProducts = [
  { id: 'classic-oud', name: 'Classic Oud', category: 'Eau de Parfum', price: '₹7,999', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'saffron-bliss', name: 'Saffron Bliss', category: 'Essential Oil', price: '₹2,499', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'vanilla-sky', name: 'Vanilla Sky', category: 'Eau de Parfum', price: '₹5,499', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'amber-glow', name: 'Amber Glow', category: 'Scented Candle', price: '₹3,199', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'rose-petal', name: 'Rose Petal', category: 'Eau de Parfum', price: '₹6,499', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'sandalwood', name: 'Sandalwood', category: 'Essential Oil', price: '₹2,999', imageUrl: 'https://picsum.photos/200/200' },
  { id: 'lavender-mist', name: 'Lavender Mist', category: 'Room Spray', price: '₹1,999', imageUrl: 'https://picsum.photos/200/200' },
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