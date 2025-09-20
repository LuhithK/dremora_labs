import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Real Estate', color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'Logistic', color: 'bg-gradient-to-r from-orange-500 to-yellow-500' },
    { name: 'ECommerce', color: 'bg-gradient-to-r from-red-500 to-orange-500' },
    { name: 'Government', color: 'bg-gradient-to-r from-orange-400 to-red-400' },
    { name: 'Healthcare', color: 'bg-gradient-to-r from-orange-500 to-red-600' },
    { name: 'Oil & Gas', color: 'bg-gradient-to-r from-red-500 to-orange-600' }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
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

          {/* Right - Industry Cards */}
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center justify-between bg-dark-secondary rounded-lg p-4 border border-gray-700">
                <div>
                  <h4 className="text-white font-semibold text-lg">{industry.name}</h4>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`w-16 h-12 ${industry.color} rounded-lg`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;