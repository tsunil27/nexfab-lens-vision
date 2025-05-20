
import React from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { BarChart3, LineChart as LineChartIcon, MessageSquare } from 'lucide-react';

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
};

const SuperlensAIAssistant = () => {
  return (
    <section className="py-20 bg-nexfab-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            SuperLens AI Assistant
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Intelligent insights and predictions to help you make better business decisions
          </p>
        </div>

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
