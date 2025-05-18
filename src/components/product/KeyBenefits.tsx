
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Zap, Database } from 'lucide-react';

const KeyBenefits = () => {
  return (
    <section className="py-16 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Superlens.ai?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our platform delivers insights that transform how you make decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-nexfab-dark border-white/10 hover:border-nexfab-purple/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-nexfab-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Decisions</h3>
              <p className="text-white/70">
                Transform complex data into clear, actionable insights to guide strategic business decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-nexfab-dark border-white/10 hover:border-nexfab-purple/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-nexfab-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Efficiency</h3>
              <p className="text-white/70">
                Automate data analysis processes and reduce time spent on manual reporting by up to 80%.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-nexfab-dark border-white/10 hover:border-nexfab-purple/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-nexfab-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unified Data View</h3>
              <p className="text-white/70">
                Connect all your data sources to create a comprehensive view of your business performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
