
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart, LineChart } from 'lucide-react';

const DashboardDemo = () => {
  return (
    <section className="py-20 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Superlens.ai in Action
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore the intuitive interface and powerful capabilities
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-nexfab-dark/40 border border-white/10">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-nexfab-purple/20">Dashboard</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-nexfab-purple/20">Reports</TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-nexfab-purple/20">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="bg-nexfab-dark border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-4 w-full max-w-4xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-white/70">Revenue</span>
                          <BarChart className="w-4 h-4 text-nexfab-purple" />
                        </div>
                        <p className="text-2xl font-bold">$1.24M</p>
                        <p className="text-xs text-green-400">+18% vs last month</p>
                      </div>
                      <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-white/70">Customers</span>
                          <LineChart className="w-4 h-4 text-nexfab-purple" />
                        </div>
                        <p className="text-2xl font-bold">8,642</p>
                        <p className="text-xs text-green-400">+12% vs last month</p>
                      </div>
                      <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-white/70">Conversion</span>
                          <LineChart className="w-4 h-4 text-nexfab-purple" />
                        </div>
                        <p className="text-2xl font-bold">4.2%</p>
                        <p className="text-xs text-green-400">+0.8% vs last month</p>
                      </div>
                    </div>
                    <div className="h-64 bg-nexfab-darker rounded-lg border border-white/5 p-4">
                      <div className="flex justify-between mb-4">
                        <h4 className="text-sm font-medium">Monthly Revenue Trend</h4>
                      </div>
                      <div className="h-40 relative flex items-end">
                        <div className="absolute inset-0 flex items-end justify-around">
                          <div className="h-[30%] w-[5%] bg-nexfab-purple/40 rounded-t-md"></div>
                          <div className="h-[45%] w-[5%] bg-nexfab-purple/50 rounded-t-md"></div>
                          <div className="h-[55%] w-[5%] bg-nexfab-purple/60 rounded-t-md"></div>
                          <div className="h-[65%] w-[5%] bg-nexfab-purple/70 rounded-t-md"></div>
                          <div className="h-[80%] w-[5%] bg-nexfab-purple/80 rounded-t-md"></div>
                          <div className="h-[90%] w-[5%] bg-nexfab-purple/90 rounded-t-md"></div>
                          <div className="h-[70%] w-[5%] bg-nexfab-purple rounded-t-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6 animate-fade-in">
            <div className="bg-nexfab-dark border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex items-center justify-center">
                <div className="space-y-4 w-full max-w-4xl px-4">
                  <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-white/10">
                    <h4 className="text-sm font-medium mb-3">Custom Report Builder</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="bg-nexfab-dark/60 p-3 rounded border border-white/5">
                        <h5 className="text-xs font-medium mb-2">Data Sources</h5>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs bg-nexfab-purple/10 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-2"></div>
                            <span>Sales Database</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/10 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-2"></div>
                            <span>CRM System</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/5 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-white/30 mr-2"></div>
                            <span>Marketing Analytics</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-nexfab-dark/60 p-3 rounded border border-white/5">
                        <h5 className="text-xs font-medium mb-2">Metrics</h5>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs bg-nexfab-purple/10 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-2"></div>
                            <span>Revenue</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/10 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-2"></div>
                            <span>Conversion Rate</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/5 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-white/30 mr-2"></div>
                            <span>Customer Acquisition Cost</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-nexfab-dark/60 p-3 rounded border border-white/5">
                        <h5 className="text-xs font-medium mb-2">Visualization</h5>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs bg-nexfab-purple/10 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-2"></div>
                            <span>Line Chart</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/5 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-white/30 mr-2"></div>
                            <span>Bar Chart</span>
                          </div>
                          <div className="flex items-center text-xs bg-nexfab-purple/5 px-2 py-1 rounded">
                            <div className="w-2 h-2 rounded-full bg-white/30 mr-2"></div>
                            <span>Pie Chart</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-40 bg-nexfab-dark mt-4 rounded flex items-center justify-center border border-dashed border-white/10">
                      <div className="text-sm text-white/50">Report Preview Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6 animate-fade-in">
            <div className="bg-nexfab-dark border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex items-center justify-center">
                <div className="space-y-4 w-full max-w-4xl px-4">
                  <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-nexfab-purple/20">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-lg bg-nexfab-purple/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexfab-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-medium">AI-Generated Insights</h4>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="bg-nexfab-dark p-3 rounded border border-white/5">
                        <h5 className="text-sm font-medium mb-1 text-nexfab-purple">Revenue Growth Opportunity</h5>
                        <p className="text-sm text-white/70">Your customer retention rate is 15% higher in segments where personalized follow-ups are used. Expanding this approach could increase revenue by an estimated 8-12% in Q3.</p>
                      </div>
                      <div className="bg-nexfab-dark p-3 rounded border border-white/5">
                        <h5 className="text-sm font-medium mb-1 text-nexfab-purple">Operational Efficiency Alert</h5>
                        <p className="text-sm text-white/70">Processing times for customer service requests have increased by 22% in the last month. Analysis suggests this is due to the new ticketing system implementation.</p>
                      </div>
                      <div className="bg-nexfab-dark p-3 rounded border border-white/5">
                        <h5 className="text-sm font-medium mb-1 text-nexfab-purple">Market Trend Detection</h5>
                        <p className="text-sm text-white/70">We've identified a 34% increase in demand for your premium services in the Southeast region, correlating with recent marketing campaigns targeting high-income demographics.</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/50">Updated 2 hours ago</span>
                      <Button variant="ghost" className="h-7 text-xs">View All Insights</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardDemo;
