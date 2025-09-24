'use client';

import { useState, useEffect } from 'react';
import FilterSidebar from '../components/Shop/FilterSidebar';
import ProductGrid from '../components/Shop/ProductGrid';
import SortDropdown from '../components/Shop/SortDropdown';

const allProducts = [
  { id: 'saffron-bliss', name: 'Saffron Bliss', category: 'Oils', price: 2499, imageUrl: 'https://picsum.photos/200/200' },
  { id: 'classic-oud', name: 'Classic Oud', category: 'Perfumes', price: 7999, imageUrl: 'https://picsum.photos/200/300' },
  { id: 'vanilla-sky', name: 'Vanilla Sky', category: 'Perfumes', price: 5499, imageUrl: 'https://picsum.photos/200/400' },
  { id: 'amber-glow', name: 'Amber Glow', category: 'Candles', price: 3199, imageUrl: 'https://picsum.photos/200/600' },
  { id: 'rose-petal', name: 'Rose Petal', category: 'Perfumes', price: 6499, imageUrl: 'https://picsum.photos/200/800' },
  { id: 'sandalwood', name: 'Sandalwood', category: 'Oils', price: 2999, imageUrl: 'https://picsum.photos/200/900' },
  { id: 'lavender-mist', name: 'Lavender Mist', category: 'Incense', price: 1999, imageUrl: 'https://picsum.photos/100/200' },
  { id: 'cedar-smoke', name: 'Cedar Smoke', category: 'Incense', price: 2199, imageUrl: 'https://picsum.photos/100/400' },
];

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    let products = [...allProducts];

    if (selectedCategories.length > 0) {
      products = products.filter(p => selectedCategories.includes(p.category));
    }

    if (sortOrder === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(products);
  }, [selectedCategories, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold">Our Collection</h1>
        <p className="mt-2 text-text-secondary">Browse our curated selection of fine fragrances and goods.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FilterSidebar 
          selectedCategories={selectedCategories} 
          onCategoryChange={handleCategoryChange} 
        />
        <main className="lg:col-span-3">
          <div className="flex justify-end mb-6">
             <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <p className="text-center text-text-secondary">No products found for the selected filters.</p>
          )}
        </main>
      </div>
    </div>
  );
}