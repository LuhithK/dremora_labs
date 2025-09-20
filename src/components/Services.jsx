import React from 'react';

const Services = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut tellus lorem quis bibendum sit amet, consectetur.
          </p>
        </div>

        {/* Team Images */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex -space-x-4">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Team Member"
              className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: '12+', label: 'Years of Experience' },
            { number: '2,554+', label: 'Successful Projects' },
            { number: '154+', label: 'Professional Team' },
            { number: '25+', label: 'Awards Won' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-dark-secondary/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Building With the Best Tools */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-8">
              Building With<br />
              the Best Tools
            </h2>
            
            <div className="space-y-4 mb-8">
              <button className="btn-primary">Web Platform</button>
              <div className="space-y-2">
                <div className="text-gray-400">Cloud & DevOps</div>
                <div className="text-gray-400">Database</div>
                <div className="text-gray-400">Mobile Apps</div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <div className="grid grid-cols-2 gap-8">
              {/* Front End */}
              <div>
                <h4 className="text-white font-semibold mb-4">Front End</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Gatsby', number: '05' },
                    { name: 'React Hook', number: '02' },
                    { name: 'ANT Design', number: '03' },
                    { name: 'Material UI', number: '04' }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm">{tech.number}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back End */}
              <div>
                <h4 className="text-white font-semibold mb-4">Back End</h4>
                <div className="space-y-2">
                  {[
                    { name: 'TypeScript', number: '05' },
                    { name: 'NEXT.JS', number: '06' },
                    { name: 'REACT.JS', number: '07' },
                    { name: 'Rest API', number: '08' }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm">{tech.number}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Phone Illustration */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-64 bg-gradient-orange rounded-3xl p-1">
                  <div className="w-full h-full bg-dark-primary rounded-3xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">2,554+</div>
                      <div className="text-xs">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-gray-300 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="w-32 h-64 bg-gradient-orange rounded-3xl mx-auto"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-2xl font-bold">2,554+</div>
                <div className="text-white text-xs">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;