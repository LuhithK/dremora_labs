import React from 'react';
import { ArrowRight, Play, Star, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ clients worldwide</span>
            </div>

            <h1 className="heading-xl mb-8">
              We Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                Digital Excellence
              </span>
              <span className="block">For Your Business</span>
            </h1>

            <p className="text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
              Transform your business with cutting-edge software solutions. We build 
              innovative applications that drive growth, enhance user experiences, and 
              deliver measurable results for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button className="btn-primary group">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-outline group">
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-8 h-8 text-yellow-400 mr-2" />
                  <div className="text-3xl font-bold">500+</div>
                </div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-8 h-8 text-green-400 mr-2" />
                  <div className="text-3xl font-bold">98%</div>
                </div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Zap className="w-8 h-8 text-blue-400 mr-2" />
                  <div className="text-3xl font-bold">24/7</div>
                </div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital Innovation"
                  className="w-full h-auto rounded-3xl shadow-custom-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-custom-lg animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">Project Status</div>
                    <div className="text-green-600 font-semibold">Successfully Delivered</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-custom-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-1">150+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-custom animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Project</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;