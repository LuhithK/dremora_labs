import React from 'react';

const CaseStudies = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      type: 'Branding',
      gradient: 'bg-gradient-orange-card',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Healthcare Website',
      category: 'Healthcare',
      type: 'Web App',
      gradient: 'bg-gradient-orange-card',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Fintech Mobile App',
      category: 'Fintech',
      type: 'UI Design',
      gradient: 'bg-gradient-orange-card',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-secondary rounded-2xl overflow-hidden border border-gray-700 card-hover shadow-xl">
              <div className={`h-48 ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{project.title}</div>
                    <div className="text-sm opacity-90">{project.type}</div>
                  </div>
                </div>
              </div>
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