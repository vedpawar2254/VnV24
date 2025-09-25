// app/blog/page.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Dummy Data for the Blog ---
const posts = [
  {
    slug: 'the-art-of-layering-scents',
    title: 'The Art of Layering: How to Create Your Signature Scent',
    category: 'Fragrance 101',
    excerpt: 'Unlock the secrets to fragrance layering. Learn how to combine different notes to create a scent that is uniquely yours, from base notes to top accents.',
    imageUrl: 'https://images.unsplash.com/photo-1594035918235-8b415a3a785c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    isFeatured: true, // This post will be the hero
  },
  {
    slug: 'a-journey-through-sandalwood',
    title: 'A Journey Through Sandalwood: From Ancient Rituals to Modern Perfumery',
    category: 'Ingredient Spotlight',
    excerpt: 'Discover the rich history and calming properties of sandalwood, a cornerstone of fine perfumery for centuries.',
    imageUrl: 'https://images.unsplash.com/photo-1596707316109-3a3699ed02c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
  },
  {
    slug: 'top-5-essential-oils-for-relaxation',
    title: 'Top 5 Essential Oils for a Relaxing Atmosphere',
    category: 'Wellness',
    excerpt: 'Transform your space into a sanctuary of calm with these five essential oils known for their soothing benefits.',
    imageUrl: 'https://images.unsplash.com/photo-1579962308809-5f33f6b215a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
  },
  {
    slug: 'the-life-of-a-scented-candle',
    title: 'The Life of a Scented Candle: A Guide to a Perfect Burn',
    category: 'Home Fragrance',
    excerpt: 'Maximize the life and scent throw of your favorite candles with our expert tips on proper candle care.',
    imageUrl: 'https://images.unsplash.com/photo-1614036134372-5a7a7a3b4f5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
  },
    {
    slug: 'oud-the-liquid-gold-of-perfumery',
    title: 'Oud: The Liquid Gold of Perfumery',
    category: 'Ingredient Spotlight',
    excerpt: 'Explore the mystique of Oud, one of the most rare and precious ingredients in the world of fragrance.',
    imageUrl: 'https://images.unsplash.com/photo-1541695434458-86f124f542a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
  },
];

export default function BlogPage() {
  const featuredPost = posts.find(post => post.isFeatured);
  const regularPosts = posts.filter(post => !post.isFeatured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white text-primary">
      <div className="container mx-auto px-6 py-12">
        {/* --- Page Header --- */}
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-serif font-bold text-gray-800">The Alchemist's Journal</h1>
          <p className="mt-2 text-lg text-gray-600">A collection of stories, insights, and inspiration from our world of fragrance.</p>
        </motion.div>

        {/* --- Featured Post --- */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative w-full h-[50vh] rounded-lg overflow-hidden shadow-2xl mb-16">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                <span className="text-sm font-bold uppercase tracking-widest text-accent">{featuredPost.category}</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">{featuredPost.title}</h2>
                <p className="mt-4 max-w-2xl text-text-secondary hidden md:block">{featuredPost.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        )}

        {/* --- Masonry Grid for Regular Posts --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block bg-gray-50/70 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="overflow-hidden">
                   <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{post.category}</span>
                  <h3 className="mt-2 text-2xl font-serif font-bold text-gray-800 leading-tight">{post.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}