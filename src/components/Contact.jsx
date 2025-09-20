import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start<br />
              Your Project?
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
              >
                <Send className="w-5 h-5 mr-2" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Right Content - 3D Element */}
          <div className="animate-fadeInRight flex justify-center">
            <div className="relative">
              <div className="text-9xl font-bold text-orange-500 opacity-20">25</div>
              <div className="absolute top-0 left-0">
                <svg width="200" height="200" viewBox="0 0 200 200" className="text-orange-500">
                  <path d="M40 40 Q120 20 180 40 Q200 120 180 180 Q120 200 40 180 Q20 120 40 40 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        className="animate-pulse"/>
                  <path d="M60 60 Q120 50 160 60 Q170 120 160 160 Q120 170 60 160 Q50 120 60 60 Z" 
                        fill="currentColor" 
                        fillOpacity="0.1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;