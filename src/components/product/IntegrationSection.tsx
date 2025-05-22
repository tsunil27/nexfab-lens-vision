
import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="py-20 bg-nexfab-darker relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nexfab-purple/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Seamlessly integrate</span> with your tech stack
          </h2>
          <p className="text-lg text-white/70">
            SuperLens integrates with the tools you already use, enhancing your capabilities without disrupting your workflow.
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Integrate with popular data sources and platforms
            </h3>
            <p className="text-center text-white/80 mb-6">
              Connect SuperLens with your existing data infrastructure to unlock powerful insights instantly
            </p>
          </div>
          
          {/* Integration logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
            {/* First row */}
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Snowflake" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Databricks" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Google BigQuery" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="AWS" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Oracle" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Second row */}
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Salesforce" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="CSV" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Excel" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="Google Sheets" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="PostgreSQL" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Third row */}
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="MySQL" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/lovable-uploads/86de198c-f08d-453f-a396-c8467e831b35.png" alt="SQL Server" className="max-h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
