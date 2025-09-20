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
            <h2 className="text-5xl font-black text-white mb-10 leading-tight">
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
                    className="form-input"
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
                    className="form-input"
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
                  className="form-input"
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
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary text-lg px-10 py-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Content - Large decorative "25" */}
          <div className="flex justify-center animate-fadeInRight">
            <div className="relative">
              <div className="text-[350px] font-black text-orange-500/10 leading-none select-none">25</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="400" height="400" viewBox="0 0 400 400" className="text-orange-500 animate-pulse">
                  <path d="M80 80 Q200 60 320 80 Q340 200 320 320 Q200 340 80 320 Q60 200 80 80 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        opacity="0.6"/>
                  <path d="M100 100 Q200 85 300 100 Q315 200 300 300 Q200 315 100 300 Q85 200 100 100 Z" 
                        fill="currentColor" 
                        opacity="0.1"/>
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