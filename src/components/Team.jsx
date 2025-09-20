import React from 'react';

const Team = () => {
  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        {/* What Our Clients Say */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut tellus lorem quis bibendum sit amet, consectetur.
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Left Testimonial */}
          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-700">
            <div className="text-center mb-4">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="text-2xl font-bold text-white mb-2">2,554+</div>
              <div className="text-gray-400 text-sm">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">"Professional"</div>
              <div className="text-gray-400 text-sm">- John Smith</div>
            </div>
          </div>

          {/* Center Testimonial */}
          <div className="bg-gradient-orange rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-white mb-2">154+</div>
              <div className="text-white/80 text-sm">Professional Team</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">"Impressive"</div>
              <div className="text-white/80 text-sm">- Robert James</div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-700">
            <div className="text-center mb-4">
              <img
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="text-2xl font-bold text-white mb-2">154+</div>
              <div className="text-gray-400 text-sm">Professional Team</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">"Good Quality"</div>
              <div className="text-gray-400 text-sm">- Mike Johnson</div>
            </div>
          </div>
        </div>

        {/* Our Teams */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-12">Our Teams</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Carter',
                position: 'Software Architect',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Michael Thompson',
                position: 'Head App Developer',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
                featured: true
              },
              {
                name: 'Daniel Wilson',
                position: 'Back End Developer',
                image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <div key={index} className={`text-center ${member.featured ? 'transform scale-105' : ''}`}>
                <div className={`relative mb-4 ${member.featured ? 'bg-gradient-orange p-1 rounded-2xl' : ''}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-48 h-64 object-cover mx-auto ${member.featured ? 'rounded-2xl' : 'rounded-xl'}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;