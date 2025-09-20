import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "ecommerce",
      description: "Modern e-commerce solution with advanced features",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "enterprise",
      description: "Comprehensive healthcare management solution",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Food Delivery App",
      category: "mobile",
      description: "Cross-platform food delivery mobile application",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time financial analytics dashboard",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Angular", "D3.js", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "enterprise",
      description: "Comprehensive online learning platform",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Social Media App",
      category: "mobile",
      description: "Feature-rich social networking mobile app",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses achieve their goals 
            through innovative software solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;