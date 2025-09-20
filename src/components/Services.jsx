import React from 'react';
import { Code, Smartphone, Globe, Database, Cloud, Palette, Shield, Headphones, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-white" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and goals with cutting-edge technologies.",
      features: ["Full-stack Development", "API Integration", "Database Design", "Performance Optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices with exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications using the latest technologies and best practices.",
      features: ["React/Vue/Angular", "Node.js", "Progressive Web Apps", "E-commerce Solutions"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cloud className="w-12 h-12 text-white" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses seeking digital transformation.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Container Orchestration"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Database className="w-12 h-12 text-white" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions and machine learning.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Palette className="w-12 h-12 text-white" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement across all platforms.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure data privacy compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Headphones className="w-12 h-12 text-white" />,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services for all your software needs and ongoing projects.",
      features: ["24/7 Support", "Bug Fixes", "Performance Monitoring", "Regular Updates"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="heading-lg text-gray-800 mb-6">
            Comprehensive Software
            <span className="text-gradient block">Solutions & Services</span>
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            From concept to deployment, we offer end-to-end software development services 
            that help businesses thrive in the digital age. Our expert team delivers solutions 
            that drive growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-custom card-hover overflow-hidden">
              <div className={`bg-gradient-to-br ${service.color} p-8 text-center`}>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-12 lg:p-16 text-white text-center shadow-custom-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-md mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can help transform your ideas into reality with our 
              comprehensive software development services and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-outline">
                Get Free Consultation
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                <span>View Our Portfolio</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;