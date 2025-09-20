import React from 'react';
import { Code, Smartphone, Globe, Database, Cloud, Palette, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and goals.",
      features: ["Full-stack Development", "API Integration", "Database Design", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications using cutting-edge technologies.",
      features: ["React/Vue/Angular", "Node.js", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Container Orchestration"]
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"]
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"]
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600" />,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services for all your software needs.",
      features: ["24/7 Support", "Bug Fixes", "Performance Monitoring", "Regular Updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Comprehensive Software
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end software development services 
            that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl card-hover group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;