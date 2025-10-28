export default function Footer() {
  return (
    <footer className="bg-forest-green text-text-light border-t border-border-color p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">VnV24</h3>
            <p className="text-text-light/80">Premium fragrances and essential oils crafted with nature's finest ingredients.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-text-light/80 hover:text-gold transition-colors duration-300">Shop</a></li>
              <li><a href="/about" className="text-text-light/80 hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="/blog" className="text-text-light/80 hover:text-gold transition-colors duration-300">Blog</a></li>
              <li><a href="/contact" className="text-text-light/80 hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-text-light/80 hover:text-gold transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="text-text-light/80 hover:text-gold transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="/shipping" className="text-text-light/80 hover:text-gold transition-colors duration-300">Shipping Info</a></li>
              <li><a href="/returns" className="text-text-light/80 hover:text-gold transition-colors duration-300">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-text-light/80 not-italic">
              <p className="mb-2">123 Fragrance Street</p>
              <p className="mb-2">Mumbai, Maharashtra 400001</p>
              <p className="mb-2">India</p>
              <p className="mb-2">Email: info@vnv24.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        <div className="border-t border-text-light/20 mt-8 pt-6 text-center text-text-light/60">
          <p>&copy; {new Date().getFullYear()} VnV24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}