
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nexfab-purple/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Introducing <span className="gradient-text">Superlens.ai</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The ultimate AI-powered analytics platform for business intelligence and data visualization.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-nexfab-darker border-nexfab-purple/20 overflow-hidden glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Key Product Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexfab-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexfab-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Intelligent Data Analysis</h4>
                      <p className="text-white/70 text-sm">Advanced machine learning algorithms that automatically discover patterns and insights.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexfab-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexfab-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Interactive Visualizations</h4>
                      <p className="text-white/70 text-sm">Create stunning interactive charts and graphs with our intuitive drag-and-drop interface.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexfab-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexfab-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Real-time Collaboration</h4>
                      <p className="text-white/70 text-sm">Work with your team in real-time with shared dashboards and annotations.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white w-full">
                    Learn More About Superlens.ai
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in">
            <div className="p-4 bg-nexfab-darker rounded-xl border border-white/10 overflow-hidden relative">
              <div className="aspect-square md:aspect-video bg-gradient-to-br from-nexfab-purple/20 to-nexfab-purple-dark/20 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Product mockup/illustration placeholder */}
                  <div className="w-full h-full bg-nexfab-dark rounded-lg border border-white/10 shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-nexfab-purple/10 to-nexfab-purple-dark/20 animate-gradient-flow"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-nexfab-purple/30 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2 gradient-text">Superlens.ai</h3>
                        <p className="text-white/70">Intelligent Analytics Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
