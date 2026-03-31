import { CinematicHero } from '../components/hero/CinematicHero';
import { ProductGrid } from '../components/products/ProductGrid';
import { AboutSection } from '../components/sections/AboutSection';
import { CategoryShowcase } from '../components/sections/CategoryShowcase';
import { StatsSection } from '../components/sections/StatsSection';
import { ExpertiseSection } from '../components/sections/ExpertiseSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CinematicHero />
      <AboutSection />
      <StatsSection />
      <CategoryShowcase />
      <ExpertiseSection />
      <ProductGrid />
      {/* 3D Viewer Section would go here */}
    </div>
  );
}
