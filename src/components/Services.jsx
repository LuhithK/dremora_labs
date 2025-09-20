import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      features: [
        'User Centric Research',
        'Wireframing & Prototyping',
        'Visual Design & Branding'
      ]
    },
    {
      title: 'Web Development',
      features: [
        'Understanding Client Objectives',
        'Responsive Design',
        'User Centric Design'
      ]
    },
    {
      title: 'Mobile Development',
      features: [
        'User Centric Research',
        'Platform Selection Stack',
        'Agile Development Process'
      ]
    },
    {
      title: 'Cloud Services',
      features: [
        'Comprehensive Cloud Strategy',
        'Scalable Infrastructure Design',
        'Security and Compliance'
      ]
    },
    {
      title: 'Test Automation',
      features: [
        'Comprehensive Test Strategy',
        'Test Execution & Reporting',
        'Maintenance & Enhancement'
      ]
    }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-secondary rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut tellus lorem quis bibendum sit amet, consectetur.
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;