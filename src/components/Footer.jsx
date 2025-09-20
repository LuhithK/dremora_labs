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
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6 text-white">
              <span className="text-red-600">INOVA</span>
            </div>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-red-600" />
                <span>+94 11 2 691 691</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-red-600" />
                <span>info@inovaitsys.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-600" />
                <span>No 5, Sulaiman Terrace, Colombo 05, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Service Links</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recent Blog</h4>
            <div className="space-y-4 mb-8">
              {recentBlog.map((blog, index) => (
                <div key={index} className="border-l-2 border-red-600 pl-4">
                  <h5 className="text-white font-medium mb-1">{blog.title}</h5>
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-red-600 text-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-sm">Ready to start your project? Get in touch with us today!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>Copyright © 2024 Inova IT Systems. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms Of Conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;