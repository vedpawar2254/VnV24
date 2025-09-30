'use client';

import { motion } from 'framer-motion';
import { Leaf, Droplets, FlaskConical, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white text-primary antialiased">
      
      {/* --- Hero Section --- */}
      <motion.section 
        className="relative h-[50vh] flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598454449072-354a3554b547?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600')" }}
        >
          <div className="absolute inset-0 bg-primary opacity-60"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">A Symphony of Scents</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">Discover the story behind every bottle.</p>
        </div>
      </motion.section>

      {/* --- Our Story Section (Image Left, Text Right) --- */}
      <motion.section 
        className="container mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img src="https://images.unsplash.com/photo-1593121925328-91e769a7c0a9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" alt="Sourcing natural ingredients" className="rounded-lg shadow-xl" />
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">Rooted in Tradition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">MyStore was born not in a lab, but in the lush spice gardens of the Western Ghats and the fragrant floral valleys of the Himalayas. Our founder, inspired by ancient traditions of perfumery, embarked on a mission to capture the soul of these landscapes in a bottle. We believe that fragrance is a journey, and our story began with a single step: to honor the purity of nature.</p>
            <p className="text-gray-600 leading-relaxed">We started as a small workshop, meticulously blending oils and resins by hand, driven by a passion for creating authentic, memorable scents. This hands-on approach remains at the heart of everything we do today.</p>
          </div>
        </div>
      </motion.section>
      
      {/* --- The Craftsmanship Section (Text Left, Image Right) --- */}
      <motion.section 
        className="bg-gray-50/70"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">The Art of Perfumery</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Our process is a delicate dance between art and science. It is slow, deliberate, and uncompromising.</p>
              <div className="space-y-4">
                  <div className="flex items-start gap-4">
                      <Leaf className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="font-bold">Sustainable Harvest</h3>
                          <p className="text-gray-600">We partner with local farmers to ethically source the world's most precious botanicals at their peak potency.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <Droplets className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="font-bold">Meticulous Extraction</h3>
                          <p className="text-gray-600">Using both traditional and modern techniques like steam distillation and CO2 extraction, we capture the purest essence of each ingredient.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <FlaskConical className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="font-bold">Patient Maturation</h3>
                          <p className="text-gray-600">Our blends are aged for weeks, sometimes months, allowing the complex notes to marry and mature into a harmonious symphony.</p>
                      </div>
                  </div>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1557626202-6c5a021cb0a7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" alt="Perfumery workshop" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </motion.section>

      {/* --- Our Timeline --- */}
      <motion.section
        className="container mx-auto px-6 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-gray-800">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <p className="text-3xl font-bold text-accent mb-2">2021</p>
                <h3 className="text-xl font-semibold mb-1">The Spark</h3>
                <p className="text-gray-600">Our founder begins experimenting with essential oil blends, sparking the idea for a modern yet traditional fragrance house.</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-accent mb-2">2023</p>
                <h3 className="text-xl font-semibold mb-1">First Workshop</h3>
                <p className="text-gray-600">We open our first small-batch workshop in Sonipat, dedicated to artisanal craftsmanship.</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-accent mb-2">2025</p>
                <h3 className="text-xl font-semibold mb-1">Sharing Our Passion</h3>
                <p className="text-gray-600">MyStore launches online, sharing our unique creations with fragrance lovers across India.</p>
            </div>
        </div>
      </motion.section>

      {/* --- Contact Info --- */}
      <motion.section 
        className="bg-gray-50/70"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We are always here to help you find your perfect scent or answer any questions you may have.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-gray-700">
                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent"/>
                    <span>Sonipat, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent"/>
                    <span>+91-98765-43210</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent"/>
                    <span>contact@mystore.com</span>
                </div>
            </div>
        </div>
      </motion.section>
    </div>
  );
}