
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold">$49</span>
              <span className="text-white/70 ml-1">/month</span>
            </div>
            <p className="text-white/70 mb-6">For individuals and small teams getting started with data analytics</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Up to 3 users</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>5 dashboards</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Email support</span>
              </li>
            </ul>
            <Button className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Get Started</Button>
          </div>
          
          <div className="bg-nexfab-darker rounded-xl border border-nexfab-purple p-6 card-hover relative transform scale-105">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-nexfab-purple text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold">$149</span>
              <span className="text-white/70 ml-1">/month</span>
            </div>
            <p className="text-white/70 mb-6">For growing businesses with advanced analytics needs</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Up to 10 users</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Unlimited dashboards</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>API access</span>
              </li>
            </ul>
            <Button className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Get Started</Button>
          </div>
          
          <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold">Custom</span>
            </div>
            <p className="text-white/70 mb-6">For organizations with complex requirements and large teams</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Advanced AI features</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" />
                <span>SLA guarantees</span>
              </li>
            </ul>
            <Button className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
