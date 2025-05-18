
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatCard from './StatCard';

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

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

        <Tabs defaultValue="overview" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-3 mb-6 bg-nexfab-dark/40 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-nexfab-purple/20">Overview</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-nexfab-purple/20">User Metrics</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-nexfab-purple/20">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            <Card className="bg-nexfab-darker border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">User Activity Timeline</h3>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-nexfab-purple/20 text-nexfab-purple cursor-pointer hover:bg-nexfab-purple/30 transition-colors">Day</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-nexfab-purple/10 text-white/70 cursor-pointer hover:bg-nexfab-purple/20 transition-colors">Week</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-nexfab-purple/10 text-white/70 cursor-pointer hover:bg-nexfab-purple/20 transition-colors">Month</span>
                  </div>
                </div>
                <div className="h-[300px] relative flex items-center justify-center bg-nexfab-dark/50 rounded-lg border border-white/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-md">
                      <div className="h-8 bg-nexfab-purple/20 rounded-full w-full animate-pulse-light"></div>
                      <div className="h-8 bg-nexfab-purple/30 rounded-full w-4/5 animate-pulse-light" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-8 bg-nexfab-purple/40 rounded-full w-3/5 animate-pulse-light" style={{ animationDelay: '0.4s' }}></div>
                      <div className="h-8 bg-nexfab-purple/20 rounded-full w-3/4 animate-pulse-light" style={{ animationDelay: '0.6s' }}></div>
                      <div className="h-8 bg-nexfab-purple/10 rounded-full w-1/2 animate-pulse-light" style={{ animationDelay: '0.8s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/50 text-sm">Interactive timeline visualization</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-nexfab-darker border-white/10 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">User Demographics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-nexfab-dark/50 rounded-lg p-4 border border-white/5">
                      <p className="text-sm text-white/60 mb-1">Age Range</p>
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs">18-24</span>
                          <span className="text-xs">24%</span>
                        </div>
                        <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                          <div className="bg-nexfab-purple h-full rounded-full" style={{width: '24%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs">25-34</span>
                          <span className="text-xs">38%</span>
                        </div>
                        <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                          <div className="bg-nexfab-purple h-full rounded-full" style={{width: '38%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs">35-44</span>
                          <span className="text-xs">21%</span>
                        </div>
                        <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                          <div className="bg-nexfab-purple h-full rounded-full" style={{width: '21%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs">45+</span>
                          <span className="text-xs">17%</span>
                        </div>
                        <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                          <div className="bg-nexfab-purple h-full rounded-full" style={{width: '17%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-nexfab-dark/50 rounded-lg p-4 border border-white/5">
                      <p className="text-sm text-white/60 mb-1">Top Regions</p>
                      <div className="space-y-3 mt-3">
                        <div className="flex justify-between">
                          <span className="text-xs">North America</span>
                          <span className="text-xs font-medium text-nexfab-purple">42%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs">Europe</span>
                          <span className="text-xs font-medium text-nexfab-purple">28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs">Asia Pacific</span>
                          <span className="text-xs font-medium text-nexfab-purple">18%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs">Latin America</span>
                          <span className="text-xs font-medium text-nexfab-purple">8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs">Other Regions</span>
                          <span className="text-xs font-medium text-nexfab-purple">4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-nexfab-darker border-white/10 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">User Growth</h3>
                  <div className="h-[200px] relative flex items-center justify-center bg-nexfab-dark/50 rounded-lg border border-white/5">
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="w-full h-full flex items-end justify-around">
                        <div className="h-[30%] w-8 bg-nexfab-purple/40 rounded-t-md"></div>
                        <div className="h-[45%] w-8 bg-nexfab-purple/40 rounded-t-md"></div>
                        <div className="h-[55%] w-8 bg-nexfab-purple/50 rounded-t-md"></div>
                        <div className="h-[65%] w-8 bg-nexfab-purple/60 rounded-t-md"></div>
                        <div className="h-[80%] w-8 bg-nexfab-purple/70 rounded-t-md"></div>
                        <div className="h-[90%] w-8 bg-nexfab-purple/80 rounded-t-md"></div>
                        <div className="h-[70%] w-8 bg-nexfab-purple/90 rounded-t-md"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-around">
                      <div className="text-xs text-white/50">Jan</div>
                      <div className="text-xs text-white/50">Feb</div>
                      <div className="text-xs text-white/50">Mar</div>
                      <div className="text-xs text-white/50">Apr</div>
                      <div className="text-xs text-white/50">May</div>
                      <div className="text-xs text-white/50">Jun</div>
                      <div className="text-xs text-white/50">Jul</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="API Response Time" 
                value="125ms" 
                change="18%" 
                isPositive={true} 
              />
              <StatCard 
                title="Success Rate" 
                value="99.8%" 
                change="0.2%" 
                isPositive={true} 
              />
              <StatCard 
                title="Error Rate" 
                value="0.2%" 
                change="0.1%" 
                isPositive={true} 
              />
            </div>
            <Card className="bg-nexfab-darker border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">System Health</h3>
                <div className="space-y-4">
                  <div className="bg-nexfab-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span>CPU Usage</span>
                      <span className="text-green-400">Normal</span>
                    </div>
                    <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: '42%'}}></div>
                    </div>
                    <div className="text-right text-xs text-white/50 mt-1">42%</div>
                  </div>
                  <div className="bg-nexfab-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span>Memory Usage</span>
                      <span className="text-green-400">Normal</span>
                    </div>
                    <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: '68%'}}></div>
                    </div>
                    <div className="text-right text-xs text-white/50 mt-1">68%</div>
                  </div>
                  <div className="bg-nexfab-dark/50 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span>Disk Space</span>
                      <span className="text-yellow-400">Warning</span>
                    </div>
                    <div className="w-full bg-nexfab-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full" style={{width: '86%'}}></div>
                    </div>
                    <div className="text-right text-xs text-white/50 mt-1">86%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardSection;
