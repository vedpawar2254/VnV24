"use client"
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Calendar, User, Twitter, Facebook, Linkedin } from 'lucide-react';


const posts = [
  {
    slug: 'the-art-of-layering-scents',
    title: 'The Art of Layering: How to Create Your Signature Scent',
    category: 'Fragrance 101',
    excerpt: 'Unlock the secrets to fragrance layering. Learn how to combine different notes to create a scent that is uniquely yours, from base notes to top accents.',
    imageUrl: 'https://images.unsplash.com/photo-1594035918235-8b415a3a785c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    isFeatured: true,
    author: 'Admin',
    date: 'September 22, 2025',
    readingTime: '6 min read',
    content: `
      <p class="lead">Creating a signature scent is a personal art form. While any perfume can smell good, layering fragrances allows you to craft a unique aroma that tells your story. Here’s how to master the art of layering.</p>
      <h2>Understanding Fragrance Notes</h2>
      <p>Every perfume is a pyramid of notes: top, middle (heart), and base. The top notes are what you smell first, but they evaporate quickly. The middle notes form the core of the scent, and the base notes are the deep, long-lasting aromas that linger. Successful layering respects this structure.</p>
      
      <blockquote>Start with a heavier scent as your base and layer lighter scents on top. A deep oud or sandalwood works wonders as a foundation.</blockquote>
      
      <h2>Techniques for Layering</h2>
      <ul>
        <li><strong>Complementary Notes:</strong> Pair scents that share a common note, like jasmine and tuberose, to enhance their floral character.</li>
        <li><strong>Contrasting Notes:</strong> Create a dynamic, complex scent by pairing opposites, such as a spicy vanilla with a fresh citrus.</li>
        <li><strong>Location, Location:</strong> Apply your base scent to your pulse points (wrists, neck) and mist the lighter scent over your clothes or hair.</li>
      </ul>
      <p>Experimentation is key. There are no hard and fast rules, only guidelines. The most important thing is that you love the way you smell. So, get creative and start blending your own unique masterpiece.</p>
    `
  },
  { slug: 'a-journey-through-sandalwood', title: 'A Journey Through Sandalwood', category: 'Ingredient Spotlight', imageUrl: '...url', author: 'Admin', date: 'September 18, 2025', readingTime: '4 min read', content: '<p>Content for sandalwood post...</p>' },
  { slug: 'top-5-essential-oils-for-relaxation', title: 'Top 5 Essential Oils for Relaxation', category: 'Wellness', imageUrl: '...url', author: 'Admin', date: 'September 15, 2025', readingTime: '5 min read', content: '<p>Content for essential oils post...</p>' },
  { slug: 'the-life-of-a-scented-candle', title: 'The Life of a Scented Candle', category: 'Home Fragrance', imageUrl: '...url', author: 'Admin', date: 'September 12, 2025', readingTime: '3 min read', content: '<p>Content for candle post...</p>' },
  { slug: 'oud-the-liquid-gold-of-perfumery', title: 'Oud: The Liquid Gold of Perfumery', category: 'Ingredient Spotlight', imageUrl: '...url', author: 'Admin', date: 'September 10, 2025', readingTime: '7 min read', content: '<p>Content for Oud post...</p>' },
];

const getPost = (slug) => {
  const post = posts.find(p => p.slug === slug);
  return post;
};


export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white text-primary">
      <header className="relative h-[60vh] flex items-center justify-center text-center ">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}>
            <div className="absolute inset-0 bg-primary opacity-60"></div>
         </div>
         <motion.div 
            className="relative z-10 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
         >
            <span className="text-sm font-bold uppercase tracking-widest text-accent">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 max-w-4xl">{post.title}</h1>
         </motion.div>
      </header>
      <main className="container mx-auto px-6 py-16">
        <article className="max-w-3xl mx-auto">
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2"><User size={14}/> {post.author}</div>
                <div className="flex items-center gap-2"><Calendar size={14}/> {post.date}</div>
                <div className="flex items-center gap-2"><Clock size={14}/> {post.readingTime}</div>
            </div>
            <div
              className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-serif prose-h2:font-bold prose-blockquote:border-accent prose-blockquote:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
          
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <h3 className="font-bold text-gray-700 mb-4">Share this article</h3>
              <div className="flex justify-center items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Twitter size={24}/></a>
                <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Facebook size={24}/></a>
                <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Linkedin size={24}/></a>
              </div>
            </div>
        </article>
      </main>
      <section className="bg-gray-50/70 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-center mb-10 text-gray-800">More From The Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map(p => (
                 <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                       <img src={p.imageUrl} alt={p.title} className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">{p.category}</span>
                      <h3 className="mt-2 text-xl font-serif font-bold text-gray-800 leading-tight">{p.title}</h3>
                    </div>
                  </Link>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}