import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals with expertise in various technologies.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We ensure the highest quality standards in all our projects and deliverables.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'We focus on achieving your business objectives through strategic technology solutions.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality and attention to detail.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Dremora Labs
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Are Leading IT Solutions Provider
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 5 years of experience in the industry, Dremora Labs has been at the forefront 
              of delivering innovative technology solutions. We specialize in web development, 
              mobile applications, cloud services, and digital transformation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Content */}
          <div className="animate-fadeInRight">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 animate-fadeInUp">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg service-card">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;