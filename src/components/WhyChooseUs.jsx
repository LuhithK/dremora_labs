import React from 'react';

const WhyChooseUs = () => {
  const stats = [
    { number: '12+', label: 'Years of Experience' },
    { number: '2,554+', label: 'Successful Projects' },
    { number: '154+', label: 'Professional Team' },
    { number: '25+', label: 'Awards Won' }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-black text-white mb-8">Why Choose Us</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut tellus lorem quis bibendum sit amet, consectetur.
          </p>
        </div>

        {/* Team Photos - Larger and more prominent */}
        <div className="flex justify-center mb-16 animate-fadeInUp">
          <div className="flex -space-x-6">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Team Member"
              className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover shadow-2xl hover:scale-110 transition-transform duration-300 z-30"
            />
            <img
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Team Member"
              className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover shadow-2xl hover:scale-110 transition-transform duration-300 z-20"
            />
            <img
              src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Team Member"
              className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover shadow-2xl hover:scale-110 transition-transform duration-300 z-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {stats.map((stat, index) => (
            <div key={index} className="text-center stats-card service-card">
              <div className="text-4xl font-black text-orange-500 mb-3">{stat.number}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;