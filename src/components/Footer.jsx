import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' }
  ];

  const serviceLinks = [
    'Enterprise Solutions',
    'Cloud Services', 
    'Mobile Development',
    'Web Development',
    'Digital Transformation',
    'IT Consulting'
  ];

  const recentBlog = [
    {
      title: 'X-Road Distributed Information Exchange Platform',
      date: 'AUG 2025',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=80'
    },
    {
      title: 'Smarter Software Testing with Heuristics',
      date: 'JUL 2025',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=80'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="text-xl font-bold text-white">
                Dremora Labs
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Leading IT solutions provider delivering innovative technology services 
              that transform businesses and drive growth.
            </p>
            
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href="mailto:info@dremoralabs.com" className="hover:text-white transition-colors">
                  info@dremoralabs.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recent Posts</h4>
            <div className="space-y-4 mb-6">
              {recentBlog.map((blog, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h5 className="text-white font-medium mb-1 text-sm leading-tight group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h5>
                    <p className="text-blue-400 text-xs">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact CTA */}
            <div className="bg-blue-600 text-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">Ready to Start?</h4>
              <p className="text-xs mb-3 opacity-90">
                Get in touch with us today!
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Copyright © 2024 Dremora Labs. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;