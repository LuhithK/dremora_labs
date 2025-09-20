import React from 'react';

const Testimonials = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-black text-white mb-8">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut tellus lorem quis bibendum sit amet, consectetur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {/* Left Testimonial */}
          <div className="bg-dark-secondary rounded-2xl p-8 border border-gray-700 service-card">
            <div className="text-center mb-6">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              />
              <div className="text-3xl font-black text-white mb-2">2,554+</div>
              <div className="text-gray-400 text-sm font-medium">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2">"Professional"</div>
              <div className="text-gray-400 text-sm">- John Smith</div>
            </div>
          </div>

          {/* Center Testimonial - Featured */}
          <div className="bg-gradient-orange rounded-2xl p-8 transform scale-105 shadow-2xl">
            <div className="text-center mb-6">
              <img
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white"
              />
              <div className="text-3xl font-black text-white mb-2">154+</div>
              <div className="text-white/80 text-sm font-medium">Professional Team</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">"Impressive"</div>
              <div className="text-white/80 text-sm">- Robert James</div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="bg-dark-secondary rounded-2xl p-8 border border-gray-700 service-card">
            <div className="text-center mb-6">
              <img
                src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              />
              <div className="text-3xl font-black text-white mb-2">25+</div>
              <div className="text-gray-400 text-sm font-medium">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2">"Good Quality"</div>
              <div className="text-gray-400 text-sm">- Mike Johnson</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;