import React from 'react';

const BuildingTools = () => {
  const frontEndTech = [
    { name: 'Gatsby', number: '01' },
    { name: 'React Hook', number: '02' },
    { name: 'ANT Design', number: '03' },
    { name: 'Material UI', number: '04' }
  ];

  const backEndTech = [
    { name: 'TypeScript', number: '05' },
    { name: 'NEXT.JS', number: '06' },
    { name: 'REACT.JS', number: '07' },
    { name: 'Rest API', number: '08' }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-5xl font-black text-white mb-10 leading-tight">
              Building With<br />
              the Best Tools
            </h2>
            
            <div className="space-y-6 mb-10">
              <button className="btn-primary text-lg px-8 py-4">Web Platform</button>
              <div className="space-y-3">
                <div className="text-gray-400 font-medium">Cloud & DevOps</div>
                <div className="text-gray-400 font-medium">Database</div>
                <div className="text-gray-400 font-medium">Mobile Apps</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fadeInRight">
            <div className="grid grid-cols-2 gap-12 mb-12">
              {/* Front End */}
              <div>
                <h4 className="text-white font-bold text-xl mb-6">Front End</h4>
                <div className="space-y-4">
                  {frontEndTech.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm text-orange-500 font-bold">{tech.number}</span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back End */}
              <div>
                <h4 className="text-white font-bold text-xl mb-6">Back End</h4>
                <div className="space-y-4">
                  {backEndTech.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm text-orange-500 font-bold">{tech.number}</span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Phone Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-40 h-80 bg-gradient-orange rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-dark-primary rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl font-black text-orange-500 mb-2">2,554+</div>
                      <div className="text-xs font-medium">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Our Approach
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lorem quis 
              bibendum sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Get Started
            </button>
          </div>

          <div className="animate-fadeInRight flex justify-center">
            <div className="relative">
              <div className="w-48 h-96 bg-gradient-orange rounded-[4rem] p-3 shadow-2xl transform rotate-12">
                <div className="w-full h-full bg-dark-primary rounded-[3.5rem] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-black text-orange-500 mb-3">2,554+</div>
                    <div className="text-sm font-medium">Successful Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingTools;