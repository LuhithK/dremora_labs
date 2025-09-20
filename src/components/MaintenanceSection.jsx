import React from 'react';

const MaintenanceSection = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large "25" with decorative elements */}
          <div className="relative animate-fadeInLeft flex items-center justify-center">
            {/* Large 25 number */}
            <div className="text-[300px] font-black text-orange-500/10 leading-none select-none relative">
              25
              {/* Decorative curved lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="400" height="400" viewBox="0 0 400 400" className="text-orange-500 animate-pulse">
                  <path 
                    d="M80 80 Q200 60 320 80 Q340 200 320 320 Q200 340 80 320 Q60 200 80 80 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    opacity="0.6"
                  />
                  <path 
                    d="M100 100 Q200 85 300 100 Q315 200 300 300 Q200 315 100 300 Q85 200 100 100 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    opacity="0.4"
                  />
                  <path 
                    d="M120 120 Q200 110 280 120 Q290 200 280 280 Q200 290 120 280 Q110 200 120 120 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="animate-fadeInRight">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Maintenance & Support
            </h2>
            <div className="flex items-center space-x-6 mb-8">
              <span className="bg-gradient-orange text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                24/7 Service
              </span>
              <span className="bg-gradient-orange text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                24 Hour
              </span>
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