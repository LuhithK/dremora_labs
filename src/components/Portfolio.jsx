import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'web', name: 'Web Apps', count: 5 },
    { id: 'mobile', name: 'Mobile Apps', count: 4 },
    { id: 'ecommerce', name: 'E-commerce', count: 2 },
    { id: 'enterprise', name: 'Enterprise', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "ecommerce",
      description: "Modern e-commerce solution with advanced features, payment integration, and inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "enterprise",
      description: "Comprehensive healthcare management solution with patient records, appointments, and billing.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Food Delivery App",
      category: "mobile",
      description: "Cross-platform food delivery mobile application with real-time tracking and payment integration.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time financial analytics dashboard with interactive charts and data visualization.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Angular", "D3.js", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "enterprise",
      description: "Comprehensive online learning platform with course management, assessments, and progress tracking.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Social Media App",
      category: "mobile",
      description: "Feature-rich social networking mobile app with real-time messaging and content sharing.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="heading-lg text-gray-800 mb-6">
            Featured
            <span className="text-gradient block">Projects & Case Studies</span>
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            Explore our latest work and see how we've helped businesses achieve their goals 
            through innovative software solutions. Each project represents our commitment to 
            excellence and client success.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-custom'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`group bg-white rounded-2xl overflow-hidden shadow-custom card-hover ${
              project.featured ? 'lg:col-span-2' : ''
            }`}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.featured ? 'h-80' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      {project.featured && (
                        <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-2">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300 group">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn-secondary">
            <span>Load More Projects</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;