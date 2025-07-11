import { MainLayout } from '@/components/layout/main-layout';
import { HeroSection } from '@/components/sections/hero-section';
import { ConceptSection } from '@/components/sections/concept-section';
import { ProductsSection } from '@/components/sections/products-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ConceptSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
    </MainLayout>
  );
}