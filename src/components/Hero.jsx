import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-orange rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInLeft">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your <span className="underline decoration-orange-500">Vision</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl text-gray-300 mb-4">
                Evaluation & Design
              </p>
              <p className="text-lg text-gray-400">
                Best Practices
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-4xl font-bold text-orange-500 mb-2">12+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Solutions"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Large "Our Code" Text */}
        <div className="mt-20">
          <h2 className="text-8xl lg:text-9xl font-bold text-white/10 text-center">
            Our Code
          </h2>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {[
            'Evaluation & Design',
            'Custom Software',
            'Web Development',
            'Mobile Development',
            'Maintenance & Support'
          ].map((service, index) => (
            <div key={index} className="text-center p-4 bg-dark-secondary/30 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;