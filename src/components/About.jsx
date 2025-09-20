import React from 'react';

const About = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        {/* Maintenance & Support Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <div className="relative">
              <div className="text-8xl font-bold text-orange-500 opacity-20">25</div>
              <div className="absolute top-0 left-0">
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-orange-500">
                  <path d="M20 20 Q60 10 100 20 Q110 60 100 100 Q60 110 20 100 Q10 60 20 20 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        className="animate-pulse"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInRight">
            <h2 className="text-4xl font-bold text-white mb-6">
              Maintenance & Support
            </h2>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-orange-500 font-semibold">24/7 Service</span>
              <span className="text-orange-500 font-semibold">24 Hour</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum 
              sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Solutions for Every Industry */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-6">
              Solutions for<br />
              Every Industry
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          <div className="animate-fadeInRight">
            <div className="space-y-4">
              {[
                { name: 'Real Estate', color: 'from-orange-500 to-red-500' },
                { name: 'Logistic', color: 'from-orange-500 to-yellow-500' },
                { name: 'ECommerce', color: 'from-red-500 to-orange-500' },
                { name: 'Government', color: 'from-orange-400 to-red-400' },
                { name: 'Healthcare', color: 'from-orange-500 to-red-600' },
                { name: 'Oil & Gas', color: 'from-red-500 to-orange-600' }
              ].map((industry, index) => (
                <div key={index} className="flex items-center justify-between bg-dark-secondary rounded-lg p-4 border border-gray-700">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{industry.name}</h4>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className={`w-16 h-12 bg-gradient-to-r ${industry.color} rounded-lg`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;