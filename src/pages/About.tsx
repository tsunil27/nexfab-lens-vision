
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark overflow-hidden">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              About <span className="gradient-text">Nexfab.ai</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're on a mission to transform how businesses leverage AI and data analytics
              to drive innovation and growth.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-nexfab-darker/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Founded in 2020, Nexfab.ai emerged from a simple observation: businesses were 
                    collecting more data than ever before, but struggling to transform that data into 
                    actionable insights.
                  </p>
                  <p>
                    Our team of AI researchers, data scientists, and software engineers came together 
                    with a shared vision: to democratize access to powerful AI and analytics tools that 
                    were previously only available to the largest enterprises.
                  </p>
                  <p>
                    Today, Nexfab.ai is proud to serve customers across industries, helping them 
                    unlock the full potential of their data with our flagship product, Superlens.ai, 
                    and other innovative solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-nexfab-darker rounded-xl border border-white/10 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nexfab-purple/20 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-nexfab-purple/20 rounded-full filter blur-3xl"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6">
                    <div className="text-5xl font-bold gradient-text">Nexfab.ai</div>
                    <p className="text-white/60 text-center max-w-xs">Empowering organizations with AI-driven insights since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                The principles that guide everything we do at Nexfab.ai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nexfab-purple/20 text-nexfab-purple mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-white/70">
                  We continuously push the boundaries of what's possible with AI and data analytics, 
                  investing heavily in R&D to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nexfab-purple/20 text-nexfab-purple mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Security</h3>
                <p className="text-white/70">
                  We prioritize the security and privacy of our customers' data with enterprise-grade 
                  protection and transparent data handling practices.
                </p>
              </div>

              <div className="bg-nexfab-darker rounded-xl border border-white/10 p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nexfab-purple/20 text-nexfab-purple mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-white/70">
                  We build our products with our customers' needs at the center, providing exceptional 
                  support and continuously improving based on feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-nexfab-darker/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Meet the people driving innovation at Nexfab.ai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-nexfab-darker rounded-xl border border-white/10 overflow-hidden card-hover">
                <div className="h-48 bg-nexfab-purple/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Olivia Chen</h3>
                  <p className="text-nexfab-purple mb-3">Chief Executive Officer</p>
                  <p className="text-white/70">
                    Former AI research lead at Tech Institute with 15+ years of experience in machine learning and business leadership.
                  </p>
                </div>
              </div>

              <div className="bg-nexfab-darker rounded-xl border border-white/10 overflow-hidden card-hover">
                <div className="h-48 bg-nexfab-purple/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Marcus Johnson</h3>
                  <p className="text-nexfab-purple mb-3">Chief Technology Officer</p>
                  <p className="text-white/70">
                    Data science pioneer with multiple patents in predictive analytics and real-time data processing systems.
                  </p>
                </div>
              </div>

              <div className="bg-nexfab-darker rounded-xl border border-white/10 overflow-hidden card-hover">
                <div className="h-48 bg-nexfab-purple/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sophia Williams</h3>
                  <p className="text-nexfab-purple mb-3">Chief Product Officer</p>
                  <p className="text-white/70">
                    Product strategist with extensive background in building user-centered data platforms and analytics tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nexfab-purple/10 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We're always looking for talented individuals who are passionate about AI, data, and making a difference
              </p>
              <Button className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white font-medium px-8 py-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
