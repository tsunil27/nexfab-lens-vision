
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nexfab-purple/20 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-nexfab-purple/30 rounded-full filter blur-3xl opacity-20 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Welcome to <span className="gradient-text">Nexfab</span> Dashboard
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Manage your <span className="text-nexfab-purple font-medium">Superlens.ai</span> product and analyze your data with powerful visualization tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
              Dashboard Overview
            </Button>
            <Button variant="outline" className="border-nexfab-purple text-nexfab-purple hover:bg-nexfab-purple/10">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
