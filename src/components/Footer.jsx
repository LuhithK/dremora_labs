import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'News & Blog', href: '#' },
      { name: 'Case Studies', href: '#' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Downloads', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="w-6 h-6" />, href: '#', name: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: <Linkedin className="w-6 h-6" />, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <Instagram className="w-6 h-6" />, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <Github className="w-6 h-6" />, href: '#', name: 'GitHub', color: 'hover:bg-gray-800' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dremora Labs</h3>
                <p className="text-gray-400 text-sm">Software Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We're a leading software development company dedicated to creating 
              innovative solutions that transform businesses and enhance user experiences 
              across the globe.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-white font-medium">hello@dremoralabs.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit Us</p>
                  <p className="text-white font-medium">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Stay Updated with Our Newsletter</h4>
              <p className="text-gray-300 text-lg">
                Subscribe to receive the latest updates, insights, and exclusive content 
                from our team of experts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 text-lg"
              />
              <button className="btn-primary whitespace-nowrap">
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              <p>© 2024 Dremora Labs. All rights reserved.</p>
              <p className="text-sm mt-1">Crafted with ❤️ by our amazing team</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Trusted by 500+ clients worldwide</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;