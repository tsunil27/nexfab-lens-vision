
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeatureCard from '@/components/FeatureCard';
import { BarChart, LineChart, PieChart, Activity, Database, Lock, Zap, Code, Globe } from 'lucide-react';

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
                Transform your data with AI-powered insights. Superlens.ai helps you uncover patterns, predict trends, and make better decisions.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
                  Get Started Now
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-video bg-nexfab-darker rounded-xl border border-white/10 p-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-radial from-nexfab-purple/20 to-transparent opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <LineChart className="w-16 h-16 text-nexfab-purple mb-4" />
                  <h3 className="text-2xl font-bold text-center">Superlens.ai Dashboard</h3>
                  <p className="text-white/60 text-center mt-2">Interactive analytics visualization</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nexfab-purple/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-nexfab-purple/20 rounded-full filter blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-nexfab-darker/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Discover what makes Superlens.ai the leading choice for data analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Advanced Analytics"
                description="Leverage AI-powered algorithms to analyze complex data patterns and extract meaningful insights."
                icon={<BarChart className="w-6 h-6" />}
                delay="0.1s"
              />
              <FeatureCard
                title="Real-time Monitoring"
                description="Monitor your key metrics in real-time with customizable dashboards and alerts."
                icon={<Activity className="w-6 h-6" />}
                delay="0.2s"
              />
              <FeatureCard
                title="Data Integration"
                description="Connect with over 100 data sources seamlessly to consolidate your business information."
                icon={<Database className="w-6 h-6" />}
                delay="0.3s"
              />
              <FeatureCard
                title="Enterprise Security"
                description="Bank-grade encryption and security protocols to keep your sensitive data protected."
                icon={<Lock className="w-6 h-6" />}
                delay="0.4s"
              />
              <FeatureCard
                title="Performance Optimization"
                description="Lightning-fast query processing with our optimized data architecture."
                icon={<Zap className="w-6 h-6" />}
                delay="0.5s"
              />
              <FeatureCard
                title="Developer API"
                description="Comprehensive API for developers to build custom integrations and extensions."
                icon={<Code className="w-6 h-6" />}
                delay="0.6s"
              />
            </div>
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Interactive Dashboard Overview
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Experience the power of Superlens.ai's intuitive dashboard interface
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-nexfab-dark/40 border border-white/10">
                <TabsTrigger value="overview" className="data-[state=active]:bg-nexfab-purple/20">Overview</TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-nexfab-purple/20">Analytics</TabsTrigger>
                <TabsTrigger value="reports" className="data-[state=active]:bg-nexfab-purple/20">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 animate-fade-in">
                <div className="bg-nexfab-darker border-white/10 rounded-xl overflow-hidden p-6">
                  <h3 className="text-xl font-bold mb-4">Dashboard Overview</h3>
                  <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="space-y-4 w-full max-w-3xl px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-white/70">Total Users</span>
                              <BarChart className="w-4 h-4 text-nexfab-purple" />
                            </div>
                            <p className="text-2xl font-bold">24.5K</p>
                            <p className="text-xs text-green-400">+12% vs last month</p>
                          </div>
                          <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-white/70">Active Sessions</span>
                              <Activity className="w-4 h-4 text-nexfab-purple" />
                            </div>
                            <p className="text-2xl font-bold">1,429</p>
                            <p className="text-xs text-green-400">+8% vs last month</p>
                          </div>
                          <div className="bg-nexfab-purple/10 rounded-lg p-4 border border-nexfab-purple/20">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-white/70">Conversion Rate</span>
                              <LineChart className="w-4 h-4 text-nexfab-purple" />
                            </div>
                            <p className="text-2xl font-bold">3.2%</p>
                            <p className="text-xs text-green-400">+0.8% vs last month</p>
                          </div>
                        </div>
                        <div className="h-64 bg-nexfab-dark rounded-lg border border-white/5 p-4">
                          <div className="flex justify-between mb-4">
                            <h4 className="text-sm font-medium">User Growth Trend</h4>
                            <div className="flex space-x-2">
                              <span className="px-2 py-1 text-xs rounded-full bg-nexfab-purple/20 text-nexfab-purple">Daily</span>
                              <span className="px-2 py-1 text-xs rounded-full bg-nexfab-purple/10 text-white/50">Weekly</span>
                              <span className="px-2 py-1 text-xs rounded-full bg-nexfab-purple/10 text-white/50">Monthly</span>
                            </div>
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

              <TabsContent value="analytics" className="space-y-6 animate-fade-in">
                <div className="bg-nexfab-darker border-white/10 rounded-xl overflow-hidden p-6">
                  <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
                  <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
                      <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-white/10">
                        <h4 className="text-sm font-medium mb-3">Traffic Sources</h4>
                        <div className="aspect-square relative flex justify-center items-center">
                          <PieChart className="w-32 h-32 text-nexfab-purple/50" />
                          <div className="absolute bottom-0 w-full grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-nexfab-purple mr-1"></div>
                              <span>Direct (45%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                              <span>Social (30%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                              <span>Search (15%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                              <span>Other (10%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-white/10">
                        <h4 className="text-sm font-medium mb-3">User Demographics</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>18-24 years</span>
                              <span>24%</span>
                            </div>
                            <div className="w-full bg-nexfab-dark h-1.5 rounded-full">
                              <div className="bg-nexfab-purple h-full rounded-full" style={{width: '24%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>25-34 years</span>
                              <span>38%</span>
                            </div>
                            <div className="w-full bg-nexfab-dark h-1.5 rounded-full">
                              <div className="bg-nexfab-purple h-full rounded-full" style={{width: '38%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>35-44 years</span>
                              <span>21%</span>
                            </div>
                            <div className="w-full bg-nexfab-dark h-1.5 rounded-full">
                              <div className="bg-nexfab-purple h-full rounded-full" style={{width: '21%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>45+ years</span>
                              <span>17%</span>
                            </div>
                            <div className="w-full bg-nexfab-dark h-1.5 rounded-full">
                              <div className="bg-nexfab-purple h-full rounded-full" style={{width: '17%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6 animate-fade-in">
                <div className="bg-nexfab-darker border-white/10 rounded-xl overflow-hidden p-6">
                  <h3 className="text-xl font-bold mb-4">Custom Reports</h3>
                  <div className="aspect-video bg-nexfab-dark/50 rounded-lg border border-white/5 p-4 flex flex-col">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" className="h-8 px-3 border-white/10">New Report</Button>
                        <Button variant="outline" className="h-8 px-3 border-white/10">Export</Button>
                        <Button variant="outline" className="h-8 px-3 border-white/10">Share</Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" className="h-8 w-8 p-0 border-white/10">
                          <Globe className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="h-8 w-8 p-0 border-white/10">
                          <BarChart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-white/10 flex flex-col">
                        <h4 className="text-sm font-medium mb-2">Monthly Performance Report</h4>
                        <div className="flex-1 flex items-center justify-center">
                          <p className="text-xs text-white/50 text-center">Custom performance reports with interactive filters</p>
                        </div>
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
                          <span className="text-xs text-white/50">Last updated: Today</span>
                          <Button variant="ghost" className="h-7 text-xs">View</Button>
                        </div>
                      </div>
                      <div className="bg-nexfab-darker/80 rounded-lg p-4 border border-white/10 flex flex-col">
                        <h4 className="text-sm font-medium mb-2">Quarterly Business Analysis</h4>
                        <div className="flex-1 flex items-center justify-center">
                          <p className="text-xs text-white/50 text-center">Comprehensive business metrics and KPIs</p>
                        </div>
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
                          <span className="text-xs text-white/50">Last updated: 3 days ago</span>
                          <Button variant="ghost" className="h-7 text-xs">View</Button>
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
        <section className="py-20 bg-nexfab-purple/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nexfab-purple/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Choose the plan that works best for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-white/70 ml-1">/month</span>
                </div>
                <p className="text-white/70 mb-6">Perfect for small teams getting started with data analytics</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Up to 5 users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>1GB storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
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
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-white/70 ml-1">/month</span>
                </div>
                <p className="text-white/70 mb-6">Ideal for growing businesses with advanced needs</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Up to 20 users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>10GB storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
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
                <p className="text-white/70 mb-6">For large organizations with custom requirements</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full analytics suite</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nexfab-purple mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom integration</span>
                  </li>
                </ul>
                <Button className="w-full bg-nexfab-purple hover:bg-nexfab-purple-dark">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
