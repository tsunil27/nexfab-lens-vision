
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardSection from '@/components/DashboardSection';
import ProductSection from '@/components/ProductSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <ProductSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
