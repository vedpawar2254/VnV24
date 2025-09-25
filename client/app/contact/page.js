'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // (e.g., send data to an API endpoint).
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    // Wrapper for a light theme on this page
    <div className="bg-white text-primary">
      {/* --- Page Header --- */}
      <motion.div 
        className="bg-gray-50/70 text-center py-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-gray-800">Get in Touch</h1>
          <p className="mt-2 text-lg text-gray-600">We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.</p>
        </div>
      </motion.div>

      {/* --- Main Content Grid --- */}
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* --- Column 1: Contact Form --- */}
          <div className="bg-gray-50/70 p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* --- Column 2: Contact Details & Map --- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-accent"/>
                    <span>Sonipat, Haryana, India</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent"/>
                    <span>+91-98765-43210</span>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent"/>
                    <span>contact@mystore.com</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Our Location</h2>
              <div className="aspect-w-16 aspect-h-32 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.016%2C28.995%2C77.026%2C29.001&layer=mapnik&marker=28.998%2C77.021"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}