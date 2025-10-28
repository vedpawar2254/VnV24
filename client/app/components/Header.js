import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-primary/90 backdrop-blur-md border-b border-border-color p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-gold">
          VnV24
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li><Link href="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors duration-300">Blog</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5">
          <Link href="/account/login" className="hover:text-gold transition-colors duration-300">
            <User size={20} />
          </Link>
          <Link href="/cart" className="hover:text-gold transition-colors duration-300">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}