import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Real Estate', color: 'industry-real-estate' },
    { name: 'Logistic', color: 'industry-logistic' },
    { name: 'ECommerce', color: 'industry-ecommerce' },
    { name: 'Government', color: 'industry-government' },
    { name: 'Healthcare', color: 'industry-healthcare' },
    { name: 'Oil & Gas', color: 'industry-oil-gas' }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
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

          {/* Right - Industry Cards */}
          <div className="space-y-4 animate-fadeInRight">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center justify-between bg-dark-secondary rounded-xl p-6 border border-gray-700 service-card">
                <div>
                  <h4 className="text-white font-semibold text-lg">{industry.name}</h4>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`w-20 h-14 ${industry.color} rounded-lg shadow-lg`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;