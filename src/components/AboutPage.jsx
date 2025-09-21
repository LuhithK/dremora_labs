import React from 'react';
import { Shield, Zap, Settings } from 'lucide-react';

const AboutPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Services',
      number: '01',
      description: 'READ MORE'
    },
    {
      icon: Zap,
      title: 'Industries',
      number: '02',
      description: 'READ MORE'
    },
    {
      icon: Settings,
      title: 'Portfolio',
      number: '03',
      description: 'READ MORE'
    }
  ];

  const quickLinks = [
    'About Us', 'Services', 'Solutions', 'Industries', 'Portfolio', 'Blog', 'Careers', 'Contact Us'
  ];

  const serviceLinks = [
    'Enterprise-Grade Solutions', 'Advanced Technical Solutions', 'IT Resource Augmentation', 
    'Enterprise Application Integration', 'IT Consultation', 'Software Quality Assurance'
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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="About Us Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-20">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              About Us
            </h1>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="floating-social">
          <div className="social-icon">f</div>
          <div className="social-icon">📷</div>
          <div className="social-icon">in</div>
          <div className="social-icon">📺</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="animate-fadeInLeft">
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                LEADING INNOVATIVE TECHNOLOGY
              </h2>
              
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Dremora is a global IT & Consulting company providing solution-oriented approach and 
                custom software development to its clients across multiple business domains.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  We strive to maintain our good reputation of a reliable company by earning the trust 
                  of our clients and partners and building long-term relations based on the fundamental 
                  principles of honesty and mutual respect.
                </p>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl">
                  <div className="bg-black rounded-xl p-8 flex items-center justify-center h-64">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <div className="text-6xl font-bold text-gray-800 mb-4">{service.number}</div>
                
                <button className="text-red-600 font-semibold hover:text-red-500 transition-colors text-sm tracking-wider uppercase">
                  {service.description} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-4 gap-12">
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

            {/* Recent Blog */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Recent Blog</h4>
              <div className="space-y-6 mb-10">
                {recentBlog.map((blog, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-12 h-12 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h5 className="text-white font-medium mb-1 text-sm leading-tight">{blog.title}</h5>
                      <p className="text-blue-500 text-xs">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span>(+94) 112 593 623</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span>info@dremoralabs.com</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">📍</span>
                    <span>No 5 Sulaiman Terrace, Colombo 05, Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Certification Badges */}
              <div className="flex space-x-2">
                <div className="bg-red-600 text-white p-2 rounded text-xs font-bold text-center">
                  ISO 9001:2015<br />
                  BUREAU VERITAS<br />
                  Certification
                </div>
                <div className="bg-white text-black p-2 rounded text-xs font-bold text-center">
                  SLASSCOM<br />
                  MEMBER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">in</div>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">f</div>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">📷</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <div className="mb-4 md:mb-0">
                <p className="text-base">Copyright ©2025 Dremora Labs. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="hover:text-blue-500 transition-colors text-base">Privacy & Quality Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </footer>
    </div>
  );
};

export default AboutPage;