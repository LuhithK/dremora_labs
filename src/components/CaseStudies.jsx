import React from 'react';

const CaseStudies = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      type: 'Branding',
      gradient: 'bg-gradient-orange'
    },
    {
      title: 'Healthcare Website',
      category: 'Healthcare',
      type: 'Web App',
      gradient: 'bg-gradient-orange'
    },
    {
      title: 'Fintech Mobile App',
      category: 'Fintech',
      type: 'UI Design',
      gradient: 'bg-gradient-orange'
    }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-black text-white mb-8">Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-secondary rounded-3xl overflow-hidden border border-gray-700 card-hover shadow-2xl">
              <div className={`h-64 ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-500/90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-black mb-3">{project.title}</div>
                    <div className="text-sm opacity-90 font-medium">{project.type}</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400 font-medium">{project.category}</span>
                  <span className="text-xs text-gray-400 font-medium">{project.type}</span>
                </div>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;