import React from 'react';

const CaseStudies = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      type: 'Branding',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: 'Healthcare Website',
      category: 'Healthcare',
      type: 'Web App',
      gradient: 'bg-gradient-to-br from-orange-400 to-yellow-500'
    },
    {
      title: 'Fintech Mobile App',
      category: 'Fintech',
      type: 'UI Design',
      gradient: 'bg-gradient-to-br from-red-500 to-orange-600'
    }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-secondary rounded-2xl overflow-hidden border border-gray-700 card-hover">
              <div className={`h-48 ${project.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">{project.category}</span>
                  <span className="text-xs text-gray-400">{project.type}</span>
                </div>
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;