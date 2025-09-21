import React from 'react';
import { TrendingUp, Zap, Phone, ShoppingCart, Heart, Leaf } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: TrendingUp,
      title: 'Finance',
      description: 'Dremora is a trusted organization by financial institutions and investment companies worldwide as a facilitator to strengthen customer relationships, increase workforce productivity, and improve business agility.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Zap,
      title: 'Power and Energy',
      description: 'Development consultancy for the sector companies has made Dremora a standout from the rest for increasing service qualities and engaging newer technology with business processes.',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Phone,
      title: 'Telecommunication',
      description: "Dremora's unique expertise with developing enterprise applications for industry heavy weights has been one of the core strengths of the organization in this sector.",
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Dremora offers a diversity of e-commerce solutions ranging from small websites to online portals and auctions with payment processing systems.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: "Dremora's engagements includes developing mission critical applications for the health sector in both local and global.",
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: "Dremora's engagements includes developing mission critical applications for the agriculture sector in both local and global.",
      image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            alt="Industries Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-20">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Industries
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
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-white mb-8">
              Elevating Businesses with IT Ingenuity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center">{industry.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-center">{industry.description}</p>
                </div>
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

export default IndustriesPage;