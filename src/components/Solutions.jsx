import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'eRL',
      description: 'Enterprise Resource Learning platform for comprehensive business management and training solutions with advanced analytics.',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Software Development',
      description: 'Custom software development solutions tailored to meet your specific business requirements with cutting-edge technologies.',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Digital Governance Forms',
      description: 'Digital transformation solutions for government and public sector organizations with secure and efficient processes.',
      logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=150',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'BOD Management',
      description: 'Board of Directors management system for efficient governance and decision-making processes with comprehensive reporting.',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Solutions
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className={`h-40 ${solution.bgColor} flex items-center justify-center mb-4`}>
                <img 
                  src={solution.logo} 
                  alt={solution.title}
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
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