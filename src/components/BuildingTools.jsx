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
          <div>
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

          {/* Right Content */}
          <div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Front End */}
              <div>
                <h4 className="text-white font-semibold mb-4">Front End</h4>
                <div className="space-y-2">
                  {frontEndTech.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm text-orange-500">{tech.number}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back End */}
              <div>
                <h4 className="text-white font-semibold mb-4">Back End</h4>
                <div className="space-y-2">
                  {backEndTech.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-300">
                      <span className="text-sm text-orange-500">{tech.number}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Phone Illustration */}
            <div className="flex justify-center">
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
      </div>
    </section>
  );
};

export default BuildingTools;