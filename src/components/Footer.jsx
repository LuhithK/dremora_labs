import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    'Home', 'Services', 'Solutions', 'Industries', 'Portfolio', 'Blog', 'Contact Us'
  ];

  const serviceLinks = [
    'Custom Software', 'Web Development', 'Advanced Technical Solutions', 'Enterprise Applications Integration', 'Software Quality Assurance'
  ];

  const recentBlog = [
    {
      title: 'Information Exchange Platform',
      date: 'Jul 24, 2023'
    },
    {
      title: 'Smarter Software Testing with Analytics',
      date: 'Jul 15, 2023'
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="/assets/logo copy.png" 
                alt="Dremora Labs" 
                className="h-8 w-auto mr-3"
              />
              <div className="text-3xl font-bold text-white">
                <span className="text-blue-500">Dremora Labs</span>
              </div>
            </div>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                <span>+94 11 2 691 691</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                <span>info@inovaitsys.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                <span>No 5, Sulaiman Terrace, Colombo 05, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Service Links</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog & Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Recent Blog</h4>
            <div className="space-y-6 mb-10">
              {recentBlog.map((blog, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h5 className="text-white font-medium mb-2 text-base">{blog.title}</h5>
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
              <p className="text-sm leading-relaxed">Ready to start your project? Get in touch with us today!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <p className="text-base">Copyright © 2024 Inova IT Systems. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-blue-500 transition-colors text-base">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors text-base">Terms Of Conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;