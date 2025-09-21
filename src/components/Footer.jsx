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
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' }
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
      title: 'The Future of Cloud Computing in 2024',
      date: 'Dec 15, 2024',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=80'
    },
    {
      title: 'Best Practices for Mobile App Development',
      date: 'Dec 10, 2024',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=80'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Dremora Labs</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Leading IT solutions provider delivering innovative technology services 
              that transform businesses and drive growth in the digital age.
            </p>
            
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@dremoralabs.com" className="hover:text-white transition-colors">
                  info@dremoralabs.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog & Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-8">Recent Blog Posts</h4>
            <div className="space-y-6 mb-8">
              {recentBlog.map((blog, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h5 className="text-white font-medium mb-1 text-sm leading-tight group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h5>
                    <p className="text-gray-400 text-xs">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest tech insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                Copyright © 2024 Dremora Labs. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
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
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;