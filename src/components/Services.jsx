import React from 'react';
import { Shield, Zap, Users, ArrowRight, Code, Cloud, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions designed to meet the complex needs of large organizations with robust security, scalability, and performance.',
      features: ['Custom Development', 'System Integration', 'Security Audits'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Modern cloud infrastructure and migration services that enable businesses to scale efficiently while reducing operational costs and complexity.',
      features: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      features: ['iOS Development', 'Android Apps', 'Cross-Platform'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies, responsive design, and optimized for performance and user experience.',
      features: ['React/Vue.js', 'Node.js', 'Progressive Web Apps'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic digital transformation services that help businesses modernize their operations and embrace new technologies.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert IT consulting services providing strategic guidance, technical expertise, and best practices for your technology initiatives.',
      features: ['Technical Strategy', 'Architecture Review', 'Team Augmentation'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="heading-secondary mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            We offer a full spectrum of technology services designed to help your business 
            thrive in the digital landscape. From custom development to strategic consulting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fadeInUp">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className={`icon-wrapper bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="heading-tertiary mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h3 className="heading-tertiary mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lead mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals 
              and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;