import React from 'react';
import { CheckCircle, Users, Award, Zap, Shield, Globe, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Expert Team",
      description: "Skilled developers and designers with years of experience in cutting-edge technologies"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure flawless delivery"
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or functionality"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security implemented in all our applications and systems"
    }
  ];

  const achievements = [
    { icon: <Target className="w-6 h-6" />, text: "500+ Successful Projects Delivered" },
    { icon: <Users className="w-6 h-6" />, text: "98% Client Satisfaction Rate" },
    { icon: <Globe className="w-6 h-6" />, text: "50+ Countries Served Worldwide" },
    { icon: <Award className="w-6 h-6" />, text: "24/7 Premium Customer Support" },
    { icon: <Shield className="w-6 h-6" />, text: "ISO 9001:2015 Certified Company" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Award-winning Digital Solutions" }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="mb-8">
              <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Dremora Labs
              </span>
              <h2 className="heading-lg text-gray-800 mb-6">
                We Build The Future With
                <span className="text-gradient block">Innovation & Excellence</span>
              </h2>
              <p className="text-body mb-8">
                At Dremora Labs, we're passionate about creating cutting-edge software solutions 
                that transform businesses and enhance user experiences. With over a decade of 
                experience, we've helped hundreds of companies achieve their digital transformation goals.
              </p>
              <p className="text-body">
                Our team of expert developers, designers, and strategists work collaboratively to 
                deliver solutions that not only meet your current needs but also scale with your 
                future growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1">
                    {achievement.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">{achievement.text}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Discover Our Story
            </button>
          </div>

          {/* Right Content */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Dremora Labs"
                className="w-full h-auto rounded-3xl shadow-custom-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Overlay Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-custom-lg max-w-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">10+ Years</div>
                  <div className="text-gray-600">Industry Leadership</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Leading the industry with innovative solutions and exceptional service quality.
              </p>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-custom-lg p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h3 className="heading-md text-gray-800 mb-6">Why Dremora Labs Stands Out?</h3>
            <p className="text-body max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations 
              and drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-custom card-hover text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;