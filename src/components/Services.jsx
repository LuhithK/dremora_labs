import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Solutions',
      description: 'Comprehensive enterprise solutions designed to meet the complex needs of large organizations with robust security and scalability. Our enterprise-grade solutions ensure your business operates at peak efficiency.',
      link: 'READ MORE'
    },
    {
      icon: Clock,
      title: 'Advanced Technical Solutions',
      description: 'Cutting-edge technical solutions leveraging the latest technologies to streamline your business processes and enhance productivity. We deliver innovative solutions that drive digital transformation.',
      link: 'READ MORE'
    },
    {
      icon: Users,
      title: 'Outsourcing IT and Augmentation',
      description: 'Professional IT outsourcing services and team augmentation to help you scale your development capabilities efficiently. Access top-tier talent and expertise to accelerate your projects.',
      link: 'READ MORE'
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Key Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-base">{service.description}</p>
              
              <button className="text-red-600 font-semibold hover:text-red-500 transition-colors text-sm tracking-wider uppercase">
              <button className="text-blue-500 font-semibold hover:text-blue-400 transition-colors text-sm tracking-wider uppercase">
                {service.link} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;