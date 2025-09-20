import React from 'react';
import { CheckCircle, Users, Award, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled developers and designers with years of experience"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security in all our applications"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support"
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "98% Client Satisfaction Rate",
    "50+ Team Members",
    "24/7 Customer Support",
    "ISO 9001 Certified",
    "Award-winning Solutions"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Dremora Labs</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
                We Build The Future With
                <span className="gradient-text"> Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Dremora Labs, we're passionate about creating cutting-edge software solutions 
                that transform businesses and enhance user experiences. With over a decade of 
                experience, we've helped hundreds of companies achieve their digital goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Dremora Labs"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">10+ Years</div>
                  <div className="text-sm text-gray-600">Industry Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Dremora Labs?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;