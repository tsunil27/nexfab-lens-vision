import React, { useState, useEffect } from 'react';
import { 
  ChartContainer, 
  ChartTooltipContent
} from '@/components/ui/chart';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart3, LineChart as LineChartIcon, MessageSquare, ArrowRight, Play, Pause } from 'lucide-react';

// Revenue data for chart
const revenueData = [
  { month: 'Jan', value: 2500 },
  { month: 'Feb', value: 6500 },
  { month: 'Mar', value: 9800 },
  { month: 'Apr', value: 13500 },
  { month: 'May', value: 18200 },
  { month: 'Jun', value: 23400 },
];

// Engagement data for chart
const engagementData = [
  { day: '1', score: 45 },
  { day: '5', score: 52 },
  { day: '10', score: 61 },
  { day: '15', score: 58 },
  { day: '20', score: 68 },
  { day: '25', score: 73 },
  { day: '30', score: 82 },
];

const data = [
  { month: 'Jan', revenue: 2500, predictions: 2300, insights: 12 },
  { month: 'Feb', revenue: 3200, predictions: 3400, insights: 18 },
  { month: 'Mar', revenue: 4100, predictions: 3900, insights: 22 },
  { month: 'Apr', revenue: 4800, predictions: 5000, insights: 25 },
  { month: 'May', revenue: 5500, predictions: 5600, insights: 28 },
  { month: 'Jun', revenue: 6700, predictions: 6400, insights: 34 },
  { month: 'Jul', revenue: 7100, predictions: 7300, insights: 36 },
];

const tableData = [
  { metric: 'Customer Retention', current: '68%', predicted: '74%', improvement: '+6%' },
  { metric: 'Conversion Rate', current: '3.2%', predicted: '4.5%', improvement: '+1.3%' },
  { metric: 'Avg. Order Value', current: '$128', predicted: '$142', improvement: '+$14' },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    theme: { light: '#9b87f5', dark: '#9b87f5' },
  },
  predictions: {
    label: 'AI Predictions',
    theme: { light: '#7E69AB', dark: '#7E69AB' },
  },
  score: {
    label: 'Score',
    theme: { light: '#0EA5E9', dark: '#0EA5E9' },
  },
  value: {
    label: 'Value ($)',
    theme: { light: '#9b87f5', dark: '#9b87f5' },
  },
};

// Predefined query sequence for video-like demo
const demoQueries = [
  {
    query: "Show me the incremental revenue month by month over the last 6 months",
    view: 'revenue' as const,
    typingTime: 1200
  },
  {
    query: "Analyze customer engagement for last month",
    view: 'engagement' as const,
    typingTime: 1000
  },
  {
    query: "What are the top 3 growth opportunities for my business?",
    view: 'default' as const,
    typingTime: 1400
  },
  {
    query: "Compare conversion rates between marketing channels",
    view: 'default' as const,
    typingTime: 1300
  }
];

const SuperlensAIAssistant = () => {
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [currentView, setCurrentView] = useState<'revenue' | 'engagement' | 'default'>('default');
  const [isLoading, setIsLoading] = useState(false);
  
  const [isAutoplaying, setIsAutoplaying] = useState(false);
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [typingInProgress, setTypingInProgress] = useState(false);
  const [demoStage, setDemoStage] = useState<'typing' | 'loading' | 'result'>('typing');
  
  // Function to handle a single query demo step
  const runQueryDemo = (index: number) => {
    if (index >= demoQueries.length) {
      setCurrentDemoIndex(0);
      return;
    }
    
    const currentDemo = demoQueries[index];
    setDisplayedQuery("");
    setTypingInProgress(true);
    setDemoStage('typing');
    
    // Simulate typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= currentDemo.query.length) {
        setDisplayedQuery(currentDemo.query.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingInProgress(false);
        setActiveQuery(currentDemo.query);
        setDemoStage('loading');
        setIsLoading(true);
        
        // Simulate loading time before showing results
        setTimeout(() => {
          setIsLoading(false);
          setCurrentView(currentDemo.view);
          setDemoStage('result');
          
          // If autoplaying, continue to next query after a delay
          if (isAutoplaying) {
            setTimeout(() => {
              setCurrentDemoIndex((prev) => prev + 1);
              runQueryDemo(index + 1);
            }, 4000); // Show result for 4 seconds before moving to next query
          }
        }, 1500);
      }
    }, 50); // Speed of typing
  };
  
  // Handle autoplay toggle
  const toggleAutoplay = () => {
    const newAutoplayState = !isAutoplaying;
    setIsAutoplaying(newAutoplayState);
    
    if (newAutoplayState) {
      runQueryDemo(currentDemoIndex);
    }
  };
  
  // Handle manual query submission
  const handleQuerySubmit = (predefinedQuery = "") => {
    // Stop any ongoing autoplay
    setIsAutoplaying(false);
    
    const queryToProcess = predefinedQuery || query;
    setIsLoading(true);
    setActiveQuery(queryToProcess);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple keyword matching to decide which view to show
      if (queryToProcess.toLowerCase().includes('revenue')) {
        setCurrentView('revenue');
      } else if (queryToProcess.toLowerCase().includes('engagement')) {
        setCurrentView('engagement');
      } else {
        setCurrentView('default');
      }
    }, 1500);
  };

  // Effect to handle the demo playback state changes
  useEffect(() => {
    if (isAutoplaying && !typingInProgress && demoStage === 'result') {
      const timeout = setTimeout(() => {
        const nextIndex = (currentDemoIndex + 1) % demoQueries.length;
        setCurrentDemoIndex(nextIndex);
        runQueryDemo(nextIndex);
      }, 4000); // Show each result for 4 seconds
      
      return () => clearTimeout(timeout);
    }
  }, [isAutoplaying, currentDemoIndex, typingInProgress, demoStage]);

  return (
    <section className="py-20 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img
              src="/lovable-uploads/f9b176b0-c036-42d9-9ab5-07f83cf59e18.png"
              alt="Superlens.ai Logo"
              className="h-16 object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            SuperLens AI Assistant
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Intelligent insights and predictions to help you make better business decisions
          </p>
        </div>

        {/* Video-like Demo Interface */}
        <Card className="bg-nexfab-dark border-white/10 mb-10 shadow-xl">
          <CardContent className="p-6">
            <div className="mb-6 rounded-lg bg-black/40 p-4 flex flex-col overflow-hidden">
              {/* Video-like Controls */}
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 font-medium">SuperLens AI Assistant - Demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    onClick={toggleAutoplay} 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-1 border-white/20 hover:bg-white/10"
                  >
                    {isAutoplaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isAutoplaying ? 'Pause Demo' : 'Play Demo'}
                  </Button>
                </div>
              </div>
              
              <div className="flex-grow min-h-[480px] relative">
                {/* Video Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                  <div 
                    className="h-full bg-nexfab-purple transition-all duration-300" 
                    style={{ 
                      width: isAutoplaying ? `${((currentDemoIndex / demoQueries.length) * 100) + (typingInProgress ? 5 : demoStage === 'loading' ? 15 : 20) / demoQueries.length}%` : '0%' 
                    }}
                  ></div>
                </div>
                
                {isLoading ? (
                  <div className="flex items-center justify-center h-[400px]">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-nexfab-purple border-t-transparent rounded-full animate-spin"></div>
                      <p className="mt-4 text-nexfab-purple">Analyzing data...</p>
                    </div>
                  </div>
                ) : currentView === 'default' && !activeQuery ? (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-full bg-nexfab-purple/20 flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-10 h-10 text-nexfab-purple" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Ask SuperLens AI Assistant
                      </h3>
                      <p className="text-white/70 mt-2 max-w-md mx-auto">
                        Get instant insights and visualizations from your business data by asking questions in natural language
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
                      {demoQueries.map((suggestion, index) => (
                        <Button 
                          key={index}
                          variant="outline" 
                          className="border-white/20 hover:bg-white/5"
                          onClick={() => {
                            setCurrentDemoIndex(index);
                            runQueryDemo(index);
                          }}
                        >
                          {suggestion.query}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : currentView === 'revenue' ? (
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-nexfab-purple rounded-full mr-2"></div>
                      <p className="text-white font-medium">Here's the incremental revenue month on month over the last 6 months:</p>
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-6">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/70">Monthly Revenue (Last 6 Months)</span>
                          <div className="flex gap-2">
                            <LineChartIcon className="h-4 w-4 text-white/60" />
                            <BarChart3 className="h-4 w-4 text-white/60" />
                          </div>
                        </div>
                        <div className="h-64">
                          <ChartContainer config={chartConfig} className="h-full">
                            <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                              <XAxis dataKey="month" stroke="#888" />
                              <YAxis stroke="#888" tickFormatter={(value) => `$${value}k`} />
                              <Tooltip content={<ChartTooltipContent />} />
                              <Line 
                                type="monotone" 
                                dataKey="value" 
                                name="value" 
                                stroke="#9b87f5" 
                                strokeWidth={2} 
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }} 
                              />
                            </LineChart>
                          </ChartContainer>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Overall Growth</p>
                        <p className="text-green-400 font-bold text-xl">+94.4%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Avg. Monthly Growth</p>
                        <p className="text-green-400 font-bold text-xl">+14.2%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Projection Next Month</p>
                        <p className="text-green-400 font-bold text-xl">$27.1k</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      The data shows consistent revenue growth over the past 6 months. Would you like me to analyze specific growth factors?
                    </p>
                  </div>
                ) : currentView === 'engagement' ? (
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-nexfab-purple rounded-full mr-2"></div>
                      <p className="text-white font-medium">Here's the customer engagement analysis for last month:</p>
                    </div>
                    <Card className="bg-white/5 border-white/10 mb-6">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/70">Daily Engagement Score (Last Month)</span>
                          <div>
                            <LineChartIcon className="h-4 w-4 text-white/60" />
                          </div>
                        </div>
                        <div className="h-64">
                          <ChartContainer config={chartConfig} className="h-full">
                            <LineChart data={engagementData} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                              <XAxis dataKey="day" stroke="#888" />
                              <YAxis stroke="#888" domain={[0, 100]} />
                              <Tooltip content={<ChartTooltipContent />} />
                              <Line 
                                type="monotone" 
                                dataKey="score" 
                                name="score" 
                                stroke="#0EA5E9" 
                                strokeWidth={2} 
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }} 
                              />
                            </LineChart>
                          </ChartContainer>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Overall Increase</p>
                        <p className="text-green-400 font-bold text-xl">+82.2%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Active Users</p>
                        <p className="text-green-400 font-bold text-xl">+28.5%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/70 text-xs mb-1">Session Duration</p>
                        <p className="text-green-400 font-bold text-xl">+12.3%</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      Customer engagement has shown a significant improvement in the last month. The trend indicates increasing user interaction.
                    </p>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-nexfab-purple rounded-full mr-2"></div>
                      <p className="text-white font-medium">Analysis for: {activeQuery}</p>
                    </div>
                    <div className="h-72">
                      <ChartContainer config={chartConfig} className="h-full">
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="month" stroke="#888" />
                          <YAxis stroke="#888" />
                          <Tooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            name="revenue" 
                            stroke="#9b87f5" 
                            strokeWidth={2} 
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="predictions" 
                            name="predictions" 
                            stroke="#7E69AB" 
                            strokeWidth={2} 
                            strokeDasharray="5 5"
                            dot={{ r: 4 }} 
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                    <div className="mt-4">
                      <p className="text-white/70 text-sm">
                        Based on your query, here's an analysis of relevant metrics. Would you like to explore more specific aspects?
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Query Input Box */}
              <div className="mt-4 relative">
                <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-4 py-3 relative">
                  <div className="flex-grow">
                    {isAutoplaying ? (
                      <p className={`${typingInProgress ? 'border-r-2 border-white animate-pulse' : ''}`}>
                        {displayedQuery}
                      </p>
                    ) : (
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask SuperLens AI about your business data..."
                        className="bg-transparent border-none shadow-none focus-visible:ring-0 px-0"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleQuerySubmit();
                          }
                        }}
                      />
                    )}
                  </div>
                  <div className="ml-3 flex items-center">
                    <Button 
                      variant="outline"
                      size="icon"
                      className="rounded-full h-8 w-8 bg-nexfab-purple/20 border-none hover:bg-nexfab-purple/30"
                      onClick={isAutoplaying ? toggleAutoplay : () => handleQuerySubmit()}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Card className="bg-nexfab-dark border-white/10 col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <LineChartIcon className="h-5 w-5 text-nexfab-purple mr-2" />
                  <h3 className="text-lg font-medium">Performance Predictions</h3>
                </div>
                <Button variant="outline" className="h-8 px-3 py-1 border-white/20 text-sm">
                  Export
                </Button>
              </div>
              <div className="h-72">
                <ChartContainer config={chartConfig} className="h-full">
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      name="revenue" 
                      stroke="#9b87f5" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predictions" 
                      name="predictions" 
                      stroke="#7E69AB" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      dot={{ r: 4 }} 
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              <div className="mt-4">
                <p className="text-white/60 text-sm">
                  AI prediction confidence: <span className="text-green-400">94%</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-nexfab-dark border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 text-nexfab-purple mr-2" />
                <h3 className="text-lg font-medium">AI Insights</h3>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-nexfab-darker/70 p-3 rounded-lg border border-nexfab-purple/20">
                  <p className="text-sm font-medium text-nexfab-purple">Revenue Growth Opportunity</p>
                  <p className="text-sm text-white/70">Targeting the East region with your premium package could increase revenue by 18% in Q3.</p>
                </div>
                <div className="bg-nexfab-darker/70 p-3 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-nexfab-purple">Customer Behavior Pattern</p>
                  <p className="text-sm text-white/70">Users who engage with your weekly newsletter are 3x more likely to upgrade their subscription.</p>
                </div>
                <div className="bg-nexfab-darker/70 p-3 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-nexfab-purple">Process Optimization</p>
                  <p className="text-sm text-white/70">Automating your customer onboarding could reduce support tickets by 32%.</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                View All Insights
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-nexfab-dark border-white/10 mb-10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-nexfab-purple mr-2" />
                <h3 className="text-lg font-medium">Performance Predictions</h3>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-white/80">Metric</TableHead>
                    <TableHead className="text-white/80">Current</TableHead>
                    <TableHead className="text-white/80">AI Prediction</TableHead>
                    <TableHead className="text-white/80">Potential Improvement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index} className="border-white/10">
                      <TableCell className="font-medium">{row.metric}</TableCell>
                      <TableCell>{row.current}</TableCell>
                      <TableCell className="text-nexfab-purple">{row.predicted}</TableCell>
                      <TableCell className="text-green-400">{row.improvement}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 bg-nexfab-darker/70 p-4 rounded-lg border border-white/10">
              <p className="text-sm text-white/70 italic">
                "Based on your historical data and current market trends, our AI predicts these improvements with 
                implementation of recommended strategies. The most significant gains are expected in customer 
                retention through personalized engagement."
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-nexfab-dark border border-white/10 rounded-xl p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/lovable-uploads/b6ae6d47-33d5-4fde-b284-aa975447ed49.png"
              alt="Nexfab Agentic AI"
              className="h-12 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mb-4">Experience the power of AI-driven business insights</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            SuperLens AI Assistant continuously analyzes your business data to provide actionable recommendations and predict future trends.
          </p>
          <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6">
            Get Started with AI Assistant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuperlensAIAssistant;
