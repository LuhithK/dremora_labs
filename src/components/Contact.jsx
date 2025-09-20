import React, { useState } from 'react';

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
                    className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 backdrop-blur-custom"
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
                    className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 backdrop-blur-custom"
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
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 backdrop-blur-custom"
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
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none backdrop-blur-custom"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary text-lg px-8 py-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Content - 3D Element */}
          <div className="flex justify-center animate-fadeInRight">
            <div className="relative">
              <div className="text-[200px] font-bold text-orange-500/10 leading-none select-none">25</div>
              <div className="absolute top-0 left-0">
                <svg width="300" height="300" viewBox="0 0 300 300" className="text-orange-500 animate-pulse">
                  <path d="M50 50 Q150 30 250 50 Q270 150 250 250 Q150 270 50 250 Q30 150 50 50 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        opacity="0.6"/>
                  <path d="M70 70 Q150 55 230 70 Q245 150 230 230 Q150 245 70 230 Q55 150 70 70 Z" 
                        fill="currentColor" 
                        opacity="0.3"/>
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