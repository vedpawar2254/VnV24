import Link from 'next/link';

const categories = [
    { 
      name: 'Perfumes', 
      href: '/shop/perfumes', 
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Eau de Parfum and Eau de Toilette collections'
    },
    { 
      name: 'Essential Oils', 
      href: '/shop/oils', 
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Pure therapeutic grade botanical extracts'
    },
    { 
      name: 'Candles', 
      href: '/shop/candles', 
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Hand-poured soy candles with natural fragrances'
    },
    { 
      name: 'Incense', 
      href: '/shop/incense', 
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Traditional hand-rolled incense sticks'
    },
];

export default function CategoryLinks() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-4">Explore Our Collections</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Each category represents a facet of our commitment to natural luxury and artisanal craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group relative aspect-square">
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-border-color">
                <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-forest-green opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gold mb-2">{category.name}</h3>
                  <p className="text-xs md:text-sm text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}