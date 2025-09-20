import React from 'react';

const Team = () => {
  const teamMembers = [
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
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-12">Our Teams</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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