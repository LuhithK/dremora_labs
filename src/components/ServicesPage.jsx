import React from 'react';
import { Shield, Clock, Users, Zap, Database, Cog } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Solutions',
      description: 'Craft your own customized software application and get your organization to streamline the business processes that improve overall organizational efficiency.',
      link: 'READ MORE'
    },
    {
      icon: Clock,
      title: 'Advanced Technical Solutions',
      description: 'INOVA holds its reputation of delivering customized solutions and support business users and achieve organizational technological process improvements.',
      link: 'READ MORE'
    },
    {
      icon: Users,
      title: 'IT Resource Augmentation',
      description: 'IT service outsourcing could help the organizations to maximize the benefits of technology both Offshore and On site growth while reducing the operational costs while it minimizes the IT expenditure as the need for investment in development resources is minimal.',
      link: 'READ MORE'
    },
    {
      icon: Zap,
      title: 'Enterprise Application Integration',
      description: 'INOVA is highly skilled in enterprise application integration using the latest middleware solutions. We have helped many organizations by integrating CRM / Supply chain systems.',
      link: 'READ MORE'
    },
    {
      icon: Database,
      title: 'IT Consultation',
      description: 'INOVA has many experts in the web development context including Web 2.0 technologies, content management, creative design, 3D animations and graphics.',
      link: 'READ MORE'
    },
    {
      icon: Cog,
      title: 'Software Quality Assurance',
      description: 'INOVA Software Testing Service provides you the full purview of services from the creation of a test plan to preparation of test cases with the precise knowledge of our QA experts.',
      link: 'READ MORE'
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Services Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-20">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Services
            </h1>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="floating-social">
          <div className="social-icon">f</div>
          <div className="social-icon">in</div>
          <div className="social-icon">@</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {services.map((service, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-base">{service.description}</p>
                
                <button className="text-blue-500 font-semibold hover:text-blue-400 transition-colors text-sm tracking-wider uppercase">
                  {service.link} →
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
                  <span className="text-blue-500 mr-3">📞</span>
                  <span>(+94) 112 593 623</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3">✉️</span>
                  <span>info@dremoralabs.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3">📍</span>
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
                <p className="text-base">Copyright © 2025 Dremora Labs. All rights reserved.</p>
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

export default ServicesPage;