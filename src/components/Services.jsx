import React from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for your business needs.',
      features: ['AWS/Azure', 'Migration', 'Scalability', 'Cost Optimization']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for better performance.',
      features: ['Database Design', 'Optimization', 'Backup Solutions', 'Performance Tuning']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      features: ['Strategy Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of technology services to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg service-card">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;