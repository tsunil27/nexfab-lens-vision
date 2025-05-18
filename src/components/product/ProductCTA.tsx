
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductCTA = () => {
  return (
    <section className="py-20 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Ready to transform your data with <span className="gradient-text">Superlens.ai</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join leading companies already using Superlens.ai to gain deeper insights and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5">
              View Documentation
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            No credit card required • Free consultation • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
