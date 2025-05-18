
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-nexfab-purple/10 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexfab-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Ready to transform your data with <span className="gradient-text">Superlens.ai</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of data-driven businesses that are already using Superlens.ai to gain valuable insights and make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
              Get Started Now
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
