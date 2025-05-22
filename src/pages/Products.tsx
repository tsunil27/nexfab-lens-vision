
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our range of innovative solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Superlens.ai Product Card */}
            <Card className="bg-nexfab-darker border-white/10 overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Superlens.ai</CardTitle>
                <CardDescription>AI-Powered Analytics Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-nexfab-purple/20 rounded-lg flex items-center justify-center p-4">
                    <img
                      src="/lovable-uploads/f9b176b0-c036-42d9-9ab5-07f83cf59e18.png"
                      alt="Superlens.ai Logo"
                      className="max-h-32 object-contain"
                    />
                  </div>
                </div>
                <p className="text-white/70">
                  Transform your data with Superlens.ai. Our AI-powered analytics platform delivers valuable insights for better business decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/products/superlens" className="w-full">
                  <Button variant="default" className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* Additional product cards can be added here */}
            <Card className="bg-nexfab-darker border-white/10 overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">NexFabric</CardTitle>
                <CardDescription>Enterprise Integration Framework</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-nexfab-purple/20 rounded-lg flex items-center justify-center">
                    <div className="text-nexfab-purple text-4xl font-bold">NexFabric</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Seamlessly connect your enterprise systems with our powerful integration framework. Designed for modern businesses.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Coming Soon</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-nexfab-darker border-white/10 overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">NexGuard</CardTitle>
                <CardDescription>Advanced Security Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-nexfab-purple/20 rounded-lg flex items-center justify-center">
                    <div className="text-nexfab-purple text-4xl font-bold">NexGuard</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Protect your digital assets with our comprehensive security solution. Stay one step ahead of threats.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Coming Soon</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
