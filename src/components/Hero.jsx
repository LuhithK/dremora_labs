import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-dark-primary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/5"></div>
      
      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white animate-fadeInLeft">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-shadow">
              Your <span className="relative">
                Vision
                <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-orange rounded"></div>
              </span>
            </h1>
            
            <div className="mb-8 space-y-2">
              <p className="text-xl text-gray-300">
                Evaluation & Design
              </p>
              <p className="text-lg text-gray-400">
                Best Practices
              </p>
            </div>

            <button className="btn-primary mb-12">
              Get Started
            </button>

            {/* Stats Card */}
            <div className="bg-dark-secondary/80 backdrop-blur-custom rounded-2xl p-6 border border-gray-700 inline-block animate-slideInUp">
              <div className="text-4xl font-bold text-orange-500 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right Content - Laptop Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laptop with dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-gradient-orange rounded-lg p-4 text-white text-sm animate-float shadow-lg">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.
              </div>
              
              {/* Additional floating element */}
              <div className="absolute bottom-8 left-8 bg-dark-secondary/90 backdrop-blur-custom rounded-lg p-4 text-white text-sm border border-orange-500/30 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-2xl font-bold text-orange-500">12+</div>
                <div className="text-xs text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Large "Our Code" Text */}
        <div className="mt-20 mb-16">
          <h2 className="text-8xl lg:text-[12rem] font-bold text-white/5 text-center leading-none select-none">
            Our Code
          </h2>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 animate-fadeInUp">
          {[
            'Evaluation & Design',
            'Custom Software',
            'Web Development',
            'Mobile Development',
            'Maintenance & Support'
          ].map((service, index) => (
            <div key={index} className="bg-dark-secondary/80 backdrop-blur-custom rounded-xl p-6 border border-gray-700 text-center service-card">
              <p className="text-sm text-gray-300 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;