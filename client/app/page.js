import Image from "next/image";
import Hero from './components/Home/Hero';
import FeaturedProducts from './components/Home/FeaturedProducts';
import PromotionalBanners from './components/Home/PromotionalBanners';
import CategoryLinks from './components/Home/CategoryLinks';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <PromotionalBanners />
      <CategoryLinks />
    </div>
  );
}
