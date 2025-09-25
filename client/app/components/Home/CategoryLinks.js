import Link from 'next/link';

const categories = [
    { name: 'Perfumes', href: '/shop/perfumes', imageUrl: 'https://picsum.photos/200/300' },
    { name: 'Essential Oils', href: '/shop/oils', imageUrl: 'https://picsum.photos/200/300' },
    { name: 'Candles', href: '/shop/candles', imageUrl: 'https://picsum.photos/200/300' },
    { name: 'Incense', href: '/shop/incense', imageUrl: 'https://picsum.photos/200/300' },
];

export default function CategoryLinks() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center font-bold  mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group relative aspect-square">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold ">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
}