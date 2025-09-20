import React from 'react';
import { Linkedin, Twitter, Github, Mail, MapPin, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in software development and business strategy. Passionate about innovation and client success.",
      location: "San Francisco, CA",
      experience: "15+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@dremoralabs.com"
      },
      featured: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technical expert specializing in scalable architecture and emerging technologies. Leading our technical innovation.",
      location: "Seattle, WA",
      experience: "12+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@dremoralabs.com"
      },
      featured: true
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Lead Full-Stack Developer",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer with expertise in modern web technologies and cloud solutions. Mentor to junior developers.",
      location: "Austin, TX",
      experience: "10+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael@dremoralabs.com"
      },
      featured: false
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Head of Design",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer focused on user-centered design and exceptional user experiences. Award-winning design portfolio.",
      location: "New York, NY",
      experience: "8+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily@dremoralabs.com"
      },
      featured: false
    },
    {
      id: 5,
      name: "David Kim",
      position: "DevOps Engineer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments. Expert in cloud technologies.",
      location: "Denver, CO",
      experience: "9+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@dremoralabs.com"
      },
      featured: false
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Experienced project manager ensuring timely delivery and client satisfaction. Certified PMP and Agile practitioner.",
      location: "Chicago, IL",
      experience: "11+ Years",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@dremoralabs.com"
      },
      featured: false
    }
  ];

  const featuredMembers = teamMembers.filter(member => member.featured);
  const regularMembers = teamMembers.filter(member => !member.featured);

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="heading-lg text-gray-800 mb-6">
            Meet The
            <span className="text-gradient block">Expert Team</span>
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            Our diverse team of talented professionals brings together years of experience 
            and passion for creating exceptional software solutions. We're united by our 
            commitment to innovation and client success.
          </p>
        </div>

        {/* Featured Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {featuredMembers.map((member) => (
            <div key={member.id} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-custom card-hover group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover shadow-custom-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-semibold text-lg mb-4">{member.position}</p>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {regularMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-8 text-center shadow-custom card-hover group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-indigo-600 font-semibold mb-4">{member.position}</p>
              
              <div className="flex items-center justify-center space-x-4 mb-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>{member.experience}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{member.bio}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-primary rounded-3xl p-12 lg:p-16 text-white text-center shadow-custom-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-md mb-6">Join Our Amazing Team</h3>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. Join us in creating the future of software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-outline">
                View Open Positions
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;