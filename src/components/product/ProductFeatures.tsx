
import React from 'react';
import { Check, BarChart, LineChart, Database, Lock } from 'lucide-react';

const ProductFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to analyze, visualize, and act on your data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-nexfab-darker rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-8 w-8 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mr-3">
                <BarChart className="h-4 w-4 text-nexfab-purple" />
              </div>
              AI-Powered Analytics
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced pattern recognition identifies trends you might miss</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Predictive analytics forecasts future performance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Anomaly detection alerts you to unusual patterns</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-nexfab-darker rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-8 w-8 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mr-3">
                <LineChart className="h-4 w-4 text-nexfab-purple" />
              </div>
              Interactive Dashboards
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Drag-and-drop interface for custom dashboard creation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Real-time data visualization updates</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Share dashboards with team members and stakeholders</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-nexfab-darker rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-8 w-8 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mr-3">
                <Database className="h-4 w-4 text-nexfab-purple" />
              </div>
              Data Integration
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Connect to over 100 data sources with pre-built connectors</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Automatic data cleaning and preparation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom API connections for proprietary systems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-nexfab-darker rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-8 w-8 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mr-3">
                <Lock className="h-4 w-4 text-nexfab-purple" />
              </div>
              Enterprise Security
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>SOC 2 Type II compliant infrastructure</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption for all data</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-nexfab-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Granular user permission controls</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
