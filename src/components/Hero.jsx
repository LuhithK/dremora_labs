import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-dark-primary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Your <span className="underline decoration-orange-500 decoration-4">Vision</span>
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
            <div className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 inline-block">
              <div className="text-4xl font-bold text-orange-500 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right Content - Laptop Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laptop with dashboard"
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating cards */}
              <div className="absolute top-4 right-4 bg-orange-500 rounded-lg p-3 text-white text-sm animate-float">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>

        {/* Large "Our Code" Text */}
        <div className="mt-20 mb-16">
          <h2 className="text-8xl lg:text-9xl font-bold text-white/10 text-center leading-none">
            Our Code
          </h2>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            'Evaluation & Design',
            'Custom Software',
            'Web Development',
            'Mobile Development',
            'Maintenance & Support'
          ].map((service, index) => (
            <div key={index} className="bg-dark-secondary/50 rounded-lg p-4 border border-gray-700 text-center">
              <p className="text-sm text-gray-300">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;