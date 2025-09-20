import React from 'react';
import { Code, Smartphone, Globe, Database, Cloud, Palette, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Vue/Angular", "Node.js", "Full-stack Solutions", "API Development"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Database Solutions",
      description: "Scalable database design and optimization for your applications.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Analytics"],
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management for scalable applications.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Container Solutions"],
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business online.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Digital
            <span className="text-gradient block">Solutions & Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full range of digital services to help your business succeed in the modern world. 
            From web development to digital marketing, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-custom card-hover overflow-hidden">
              <div className={`${service.color} p-8 text-center`}>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-blue rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your ideas to life with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;