import ProductCard from '../shared/ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product, index) => {
        // THIS IS THE CRITICAL FIX
        // This check prevents the app from crashing if the `products` array
        // somehow contains an undefined item.
        if (!product) {
          return null;
        }

        return <ProductCard key={product.id || index} product={product} />;
      })}
    </div>
  );
}