import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Real Estate', color: 'industry-real-estate', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Logistic', color: 'industry-logistic', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'ECommerce', color: 'industry-ecommerce', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Government', color: 'industry-government', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Healthcare', color: 'industry-healthcare', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Oil & Gas', color: 'industry-oil-gas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Solutions for<br />
              Every Industry
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Get Started
            </button>
          </div>

          {/* Right - Industry Cards */}
          <div className="space-y-6 animate-fadeInRight">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center justify-between bg-dark-secondary rounded-2xl p-6 border border-gray-700 service-card">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl mb-2">{industry.name}</h4>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </div>
                <div className={`w-24 h-16 ${industry.color} rounded-xl shadow-lg ml-6`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;