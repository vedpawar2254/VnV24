'use client';

import Link from 'next/link';
import { motion, useTransform } from 'framer-motion';

export default function ProductCard({ product, scrollYProgress }) {
  const y = scrollYProgress ? useTransform(scrollYProgress, [0, 1], ['-20%', '20%']) : null;
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link href={`/shop/${product.id}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-primary border border-border-color shadow-sm hover:shadow-lg transition-shadow duration-300">
        {y ? (
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            style={{ y }}
          />
        ) : (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="mt-4 text-sm text-text-secondary font-medium">{product.category}</h3>
      <p className="mt-1 text-lg font-medium text-forest-green">{product.name}</p>
      <p className="mt-1 font-medium text-text-dark">{formattedPrice}</p>
      <button className="mt-3 w-full bg-gold text-text-dark py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors duration-300">
        Add to Cart
      </button>
    </Link>
  );
}