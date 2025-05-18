
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Check, BarChart, LineChart, Database, Lock, Zap, Code, Globe } from 'lucide-react';

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="gradient-text">Superlens.ai</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Advanced analytics and visualization platform powered by artificial intelligence.
                Transform your data into actionable insights.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-video bg-nexfab-darker rounded-xl border border-white/10 p-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-radial from-nexfab-purple/20 to-transparent opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <LineChart className="w-16 h-16 text-nexfab-purple mb-4" />
                  <h3 className="text-2xl font-bold text-center">Superlens.ai Dashboard</h3>
                  <p className="text-white/60 text-center mt-2">AI-powered data visualization</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nexfab-purple/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-nexfab-purple/20 rounded-full filter blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
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

        {/* Features Section */}
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

        {/* Dashboard Demo Section */}
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

        {/* Pricing Section */}
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
        
        {/* CTA Section */}
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
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
