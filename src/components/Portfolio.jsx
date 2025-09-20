import React from 'react';

const Portfolio = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        {/* Case Studies */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Case Studies</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'E-Commerce Platform',
              category: 'E-Commerce',
              type: 'Branding',
              image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
              title: 'Healthcare Website',
              category: 'Healthcare',
              type: 'Web App',
              image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
              title: 'Fintech Mobile App',
              category: 'Fintech',
              type: 'UI Design',
              image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          ].map((project, index) => (
            <div key={index} className="bg-dark-secondary rounded-2xl overflow-hidden border border-gray-700 card-hover">
              <div className="h-48 bg-gradient-orange"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">{project.category}</span>
                  <span className="text-xs text-gray-400">{project.type}</span>
                </div>
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
          ].map((service, index) => (
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

export default Portfolio;