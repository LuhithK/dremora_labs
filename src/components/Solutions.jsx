import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'eRL',
      description: 'Enterprise Resource Learning platform for comprehensive business management and training solutions.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Software Development',
      description: 'Custom software development solutions tailored to meet your specific business requirements.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Digital Governance Forms',
      description: 'Digital transformation solutions for government and public sector organizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'BOD Management',
      description: 'Board of Directors management system for efficient governance and decision-making processes.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">
            Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
          {solutions.map((solution, index) => (
            <div key={index} className="product-card">
              <div className="h-32 bg-gray-100 flex items-center justify-center mb-4">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;