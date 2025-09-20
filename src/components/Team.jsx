import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in software development and business strategy.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@dremoralabs.com"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "CTO",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technical expert specializing in scalable architecture and emerging technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@dremoralabs.com"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer with expertise in modern web technologies and cloud solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael@dremoralabs.com"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer focused on user-centered design and exceptional user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily@dremoralabs.com"
      }
    },
    {
      id: 5,
      name: "David Kim",
      position: "DevOps Engineer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@dremoralabs.com"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Experienced project manager ensuring timely delivery and client satisfaction.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@dremoralabs.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Meet The
            <span className="gradient-text"> Experts</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together years of experience 
            and passion for creating exceptional software solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-2xl p-8 text-center card-hover group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 transition-all duration-300 shadow-md"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-md"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300 shadow-md"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Amazing Team</h3>
          <p className="text-lg mb-8 opacity-90">
            We're always looking for talented individuals to join our growing team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;