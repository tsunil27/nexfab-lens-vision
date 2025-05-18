
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StatCard from './StatCard';

const DashboardSection = () => {
  return (
    <section className="py-20 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interactive Dashboard Overview
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Monitor your Superlens.ai performance metrics in real-time with our interactive dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <StatCard 
            title="Total Users" 
            value="24.5K" 
            change="12%" 
            isPositive={true} 
          />
          <StatCard 
            title="Active Sessions" 
            value="1,429" 
            change="8%" 
            isPositive={true} 
          />
          <StatCard 
            title="Avg. Session Time" 
            value="4m 38s" 
            change="2%" 
            isPositive={false} 
          />
          <StatCard 
            title="Conversion Rate" 
            value="3.2%" 
            change="0.8%" 
            isPositive={true} 
          />
        </div>

        <Card className="bg-nexfab-darker border-white/10 overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Performance Analytics</h3>
            <div className="aspect-video relative flex items-center justify-center bg-nexfab-dark/50 rounded-lg border border-white/5">
              {/* Placeholder for chart/graph */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-4 w-full max-w-md">
                  <div className="h-8 bg-nexfab-purple/20 rounded-full w-full animate-pulse-light"></div>
                  <div className="h-8 bg-nexfab-purple/30 rounded-full w-4/5 animate-pulse-light" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-8 bg-nexfab-purple/40 rounded-full w-3/5 animate-pulse-light" style={{ animationDelay: '0.4s' }}></div>
                  <div className="h-8 bg-nexfab-purple/20 rounded-full w-3/4 animate-pulse-light" style={{ animationDelay: '0.6s' }}></div>
                  <div className="h-8 bg-nexfab-purple/10 rounded-full w-1/2 animate-pulse-light" style={{ animationDelay: '0.8s' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Interactive chart visualization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardSection;
