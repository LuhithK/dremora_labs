import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum sit amet, consectetur.',
      features: [
        'User Centric Research',
        'Wireframing & Prototyping',
        'Visual Design & Branding'
      ]
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum sit amet, consectetur.',
      features: [
        'Understanding Client Objectives',
        'Responsive Design',
        'User Centric Design'
      ]
    },
    {
      title: 'Mobile Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum sit amet, consectetur.',
      features: [
        'User Centric Research',
        'Platform Selection Stack',
        'Agile Development Process'
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum sit amet, consectetur.',
      features: [
        'Comprehensive Cloud Strategy',
        'Scalable Infrastructure Design',
        'Security and Compliance'
      ]
    },
    {
      title: 'Test Automation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis bibendum sit amet, consectetur.',
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
            <div key={index} className="bg-dark-secondary rounded-2xl p-8 border border-gray-700 service-card">
              <h3 className="text-2xl font-black text-white mb-6">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="font-medium">{feature}</span>
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