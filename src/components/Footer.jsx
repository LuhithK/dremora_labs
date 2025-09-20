import React from 'react';
import { ArrowUp, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-primary border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8">Pemogan</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Case Study</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Mobile Development</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black text-white mb-6">Quick Link</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Portfolio</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-black text-white mb-6">Information</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 font-medium">(+62) 123-4567</li>
              <li className="text-gray-400 font-medium">Jl. H. Street, 2nd Floor</li>
              <li className="text-gray-400 font-medium">support@pemogan.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p className="font-medium">Privacy Policy</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400">
              <p className="font-medium">Term Of Condition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-orange rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;