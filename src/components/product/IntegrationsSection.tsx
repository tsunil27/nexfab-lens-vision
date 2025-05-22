
import React from 'react';
import { Database, Cloud, Table, FileSpreadsheet } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nexfab-purple/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Agentic AI with <span className="gradient-text">Human Feedback Loop</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Learn and fine-tune our AI model through continuous human feedback, creating an ever-improving intelligence
          </p>
        </div>

        <div className="bg-nexfab-darker border border-white/10 rounded-xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Seamlessly integrate</span> with your tech stack
          </h3>
          <p className="text-lg text-white/70 text-center mb-10">
            SuperLens integrates with the tools you already use, enhancing your capabilities without disrupting your workflow.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-nexfab-dark/50 border border-white/5 rounded-lg p-5">
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 bg-nexfab-purple/20 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-nexfab-purple" />
                </div>
              </div>
              <h4 className="text-center font-bold mb-2">Data Warehouses</h4>
              <ul className="text-white/70 text-sm text-center">
                <li className="mb-1">Snowflake</li>
                <li className="mb-1">Databricks</li>
                <li className="mb-1">Google BigQuery</li>
              </ul>
            </div>
            
            <div className="bg-nexfab-dark/50 border border-white/5 rounded-lg p-5">
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 bg-nexfab-purple/20 rounded-full flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-nexfab-purple" />
                </div>
              </div>
              <h4 className="text-center font-bold mb-2">Cloud Storage</h4>
              <ul className="text-white/70 text-sm text-center">
                <li className="mb-1">Amazon S3</li>
                <li className="mb-1">Oracle</li>
                <li className="mb-1">Salesforce</li>
              </ul>
            </div>
            
            <div className="bg-nexfab-dark/50 border border-white/5 rounded-lg p-5">
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 bg-nexfab-purple/20 rounded-full flex items-center justify-center">
                  <FileSpreadsheet className="h-6 w-6 text-nexfab-purple" />
                </div>
              </div>
              <h4 className="text-center font-bold mb-2">Spreadsheets</h4>
              <ul className="text-white/70 text-sm text-center">
                <li className="mb-1">CSV</li>
                <li className="mb-1">Excel</li>
                <li className="mb-1">Google Sheets</li>
              </ul>
            </div>
            
            <div className="bg-nexfab-dark/50 border border-white/5 rounded-lg p-5">
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 bg-nexfab-purple/20 rounded-full flex items-center justify-center">
                  <Table className="h-6 w-6 text-nexfab-purple" />
                </div>
              </div>
              <h4 className="text-center font-bold mb-2">Databases</h4>
              <ul className="text-white/70 text-sm text-center">
                <li className="mb-1">PostgreSQL</li>
                <li className="mb-1">MySQL</li>
                <li className="mb-1">SQL Server</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 italic">
              And many more integrations available through our API connectors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
