import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react'; // Let's add some icons

export default function Header() {
  return (
    <header className="sticky top-0 bg-primary/70 backdrop-blur-md border-b border-border-color p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-accent">
          MyStore
        </Link>
        <nav className="hidden md:flex"> 
          <ul className="flex items-center space-x-8">
            <li><Link href="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5">
          <Link href="/account/login" className="hover:text-accent transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="hover:text-accent transition-colors">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}