import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Dremora Labs delivered an exceptional web application that exceeded our expectations. Their team is professional, responsive, and truly understands business needs. The project was completed on time and within budget.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateCorp',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The mobile app they developed for us has been a game-changer. The user experience is fantastic, and the performance is outstanding. Our customer engagement has increased by 300% since launch.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, HealthTech Solutions',
      company: 'HealthTech Solutions',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with Dremora Labs was a pleasure. They provided excellent cloud solutions that improved our scalability and reduced our operational costs significantly. Highly recommended for any tech project.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about our services and the results we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-600" />
                <p className="text-gray-300 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center animate-fadeInUp">
          <div className="bg-gray-900 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40">
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="font-semibold text-gray-300">Company 1</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="font-semibold text-gray-300">Company 2</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="font-semibold text-gray-300">Company 3</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="font-semibold text-gray-300">Company 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;