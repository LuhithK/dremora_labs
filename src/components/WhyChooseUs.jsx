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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut tellus lorem quis bibendum sit amet, consectetur.
          </p>
        </div>

        {/* Team Photos */}
        <div className="flex justify-center mb-12">
          <div className="flex -space-x-4">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-dark-secondary/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;