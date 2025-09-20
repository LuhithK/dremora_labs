import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-dark-primary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-red-900/5"></div>
      
      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white animate-fadeInLeft">
            <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Your <span className="vision-underline">Vision</span>
            </h1>
            
            <div className="mb-8 space-y-2">
              <p className="text-xl text-gray-300 font-medium">
                Evaluation & Design
              </p>
              <p className="text-lg text-gray-400">
                Best Practices
              </p>
            </div>

            <button className="btn-primary mb-12 text-lg px-8 py-4">
              Get Started
            </button>

            {/* Stats Card */}
            <div className="stats-card inline-block animate-slideInUp">
              <div className="text-5xl font-black text-orange-500 mb-2">12+</div>
              <div className="text-gray-300 text-sm font-medium">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right Content - Laptop with Dashboard */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              {/* Main laptop image */}
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laptop with dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating info card - top right */}
              <div className="floating-card top-8 right-8 text-white text-sm max-w-[200px]">
                <div className="text-orange-500 font-bold mb-1">12+</div>
                <div className="text-xs text-gray-300">Years of Experience</div>
              </div>
              
              {/* Floating description card - top left */}
              <div className="floating-card delay-1 top-16 -left-8 text-white text-sm max-w-[180px]">
                <p className="text-xs text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              
              {/* Floating stats card - bottom right */}
              <div className="floating-card delay-2 bottom-8 right-4 text-white text-sm">
                <div className="text-2xl font-bold text-orange-500">12+</div>
                <div className="text-xs text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Large "Our Code" Background Text */}
        <div className="mt-20 mb-16 text-center">
          <h2 className="large-bg-text">
            Our Code
          </h2>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 animate-fadeInUp">
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