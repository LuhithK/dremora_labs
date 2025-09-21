import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '50+', label: 'Happy Clients', icon: '⭐' },
    { number: '5+', label: 'Years Experience', icon: '💼' },
    { number: '24/7', label: 'Support Available', icon: '🤝' }
  ];

  const features = [
    'Enterprise-grade solutions',
    'Cutting-edge technology',
    '24/7 dedicated support',
    'Scalable architecture'
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-social">
        <div className="social-icon">f</div>
        <div className="social-icon">📷</div>
        <div className="social-icon">in</div>
        <div className="social-icon">📺</div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-20">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Welcome to Dremora Labs
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Innovative IT Solutions for
              <span className="block text-blue-400">
                Modern Businesses
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              We deliver cutting-edge technology solutions that transform businesses, 
              streamline operations, and drive sustainable growth in the digital age.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span>Trusted by 50+ companies</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fadeInRight">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional Team"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Fast</div>
                    <div className="text-sm text-gray-300">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fadeInUp">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 text-center card-hover">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;