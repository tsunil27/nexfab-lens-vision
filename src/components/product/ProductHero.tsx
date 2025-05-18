
import React from 'react';
import { Button } from '@/components/ui/button';
import { LineChart } from 'lucide-react';

const ProductHero = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gradient-text">Superlens.ai</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Advanced analytics and visualization platform powered by artificial intelligence.
            Transform your data into actionable insights.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5">
              View Documentation
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-video bg-nexfab-darker rounded-xl border border-white/10 p-4 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-radial from-nexfab-purple/20 to-transparent opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center">
              <LineChart className="w-16 h-16 text-nexfab-purple mb-4" />
              <h3 className="text-2xl font-bold text-center">Superlens.ai Dashboard</h3>
              <p className="text-white/60 text-center mt-2">AI-powered data visualization</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nexfab-purple/30 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-nexfab-purple/20 rounded-full filter blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
