import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProductCategories } from '../components/ProductCategories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { StatsSection } from '../components/StatsSection';
import { GalleryPreview } from '../components/GalleryPreview';
import { Testimonials } from '../components/Testimonials';
import { ConsultationCta } from '../components/ConsultationCta';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <SEO />
      <Hero />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
      <StatsSection />
      <GalleryPreview />
      <Testimonials />
      <ConsultationCta />
    </main>
  );
};
