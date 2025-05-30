
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/components/product/ProductHero';
import KeyBenefits from '@/components/product/KeyBenefits';
import ProductFeatures from '@/components/product/ProductFeatures';
import DashboardDemo from '@/components/product/DashboardDemo';
import PricingSection from '@/components/product/PricingSection';
import ProductCTA from '@/components/product/ProductCTA';
import SuperlensAIAssistant from '@/components/product/SuperlensAIAssistant';
import IntegrationsSection from '@/components/product/IntegrationsSection';

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <ProductHero />

        {/* Key Benefits Section */}
        <KeyBenefits />

        {/* SuperLens AI Assistant Video Demo Section */}
        <SuperlensAIAssistant />

        {/* Features Section */}
        <ProductFeatures />

        {/* Dashboard Demo Section */}
        <DashboardDemo />

        {/* Integrations Section */}
        <IntegrationsSection />

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
