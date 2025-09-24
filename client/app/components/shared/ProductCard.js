'use client';

import Link from 'next/link';
import { motion, useTransform } from 'framer-motion';

export default function ProductCard({ product, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <Link href={`/shop/${product.id}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
          style={{ y }}
        />
      </div>
      <h3 className="mt-4 text-sm text-text-secondary">{product.category}</h3>
      <p className="mt-1 text-lg font-medium text-text-primary">{product.name}</p>
      <p className="mt-1 font-medium text-text-primary">{product.price}</p>
    </Link>
  );
}