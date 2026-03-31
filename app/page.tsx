import { CinematicHero } from '../components/hero/CinematicHero';
import { ProductGrid } from '../components/products/ProductGrid';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CinematicHero />
      <ProductGrid />
      {/* 3D Viewer and Heritage Sections would go here */}
    </div>
  );
}
