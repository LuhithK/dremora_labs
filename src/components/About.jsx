import React from 'react';
import { CheckCircle, Users, Award, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Expert Team",
      description: "Professional developers with 10+ years experience"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Quality Work",
      description: "High-quality solutions that exceed expectations"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Secure Code",
      description: "Enterprise-grade security in all our solutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Dremora Labs
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              We Create Digital Solutions That
              <span className="text-gradient block">Drive Business Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Dremora Labs, we specialize in creating innovative software solutions that help 
              businesses thrive in the digital age. Our team of expert developers and designers 
              work together to deliver exceptional results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">10+ Years of Industry Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">500+ Successful Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">98% Client Satisfaction Rate</span>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Content */}
          <div className="relative animate-fadeInRight">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Dremora Labs"
              className="w-full h-auto rounded-2xl shadow-custom-lg"
            />
            
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-custom p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-custom card-hover text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;