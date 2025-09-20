import React from 'react';

const MaintenanceSection = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large "25" graphic */}
          <div className="relative animate-fadeInLeft">
            <div className="text-[250px] font-bold text-orange-500/10 leading-none select-none">25</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="350" height="350" viewBox="0 0 350 350" className="text-orange-500 animate-pulse">
                <path 
                  d="M60 60 Q175 40 290 60 Q310 175 290 290 Q175 310 60 290 Q40 175 60 60 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  opacity="0.6"
                />
                <path 
                  d="M80 80 Q175 65 270 80 Q285 175 270 270 Q175 285 80 270 Q65 175 80 80 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="animate-fadeInRight">
            <h2 className="text-4xl font-bold text-white mb-6">
              Maintenance & Support
            </h2>
            <div className="flex items-center space-x-6 mb-6">
              <span className="bg-gradient-orange text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">24/7 Service</span>
              <span className="bg-gradient-orange text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">24 Hour</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum 
              sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;