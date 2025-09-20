import React from 'react';

const MaintenanceSection = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large "25" graphic */}
          <div className="relative">
            <div className="text-[200px] font-bold text-orange-500/20 leading-none">25</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="300" height="300" viewBox="0 0 300 300" className="text-orange-500">
                <path 
                  d="M50 50 Q150 30 250 50 Q270 150 250 250 Q150 270 50 250 Q30 150 50 50 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Maintenance & Support
            </h2>
            <div className="flex items-center space-x-6 mb-6">
              <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">24/7 Service</span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">24 Hour</span>
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