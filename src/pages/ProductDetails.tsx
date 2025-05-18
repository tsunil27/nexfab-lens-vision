
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/components/product/ProductHero';
import KeyBenefits from '@/components/product/KeyBenefits';
import ProductFeatures from '@/components/product/ProductFeatures';
import DashboardDemo from '@/components/product/DashboardDemo';
import PricingSection from '@/components/product/PricingSection';
import ProductCTA from '@/components/product/ProductCTA';

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <ProductHero />

        {/* Key Benefits Section */}
        <KeyBenefits />

        {/* Features Section */}
        <ProductFeatures />

        {/* Dashboard Demo Section */}
        <DashboardDemo />

        {/* Pricing Section */}
        <PricingSection />
        
        {/* CTA Section */}
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
