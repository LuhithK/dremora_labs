import React from 'react';
import { Users, Award, Target, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals with expertise in various cutting-edge technologies and industry best practices.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We ensure the highest quality standards in all our projects through rigorous testing and quality control processes.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'We focus on achieving your business objectives through strategic technology solutions and measurable outcomes.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality, ensuring your projects are delivered on schedule.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', description: 'Successfully delivered projects across various industries' },
    { number: '50+', label: 'Happy Clients', description: 'Satisfied clients who trust us with their technology needs' },
    { number: '5+', label: 'Years Experience', description: 'Years of expertise in delivering innovative solutions' },
    { number: '99.9%', label: 'Uptime Guarantee', description: 'Reliable systems with exceptional performance' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              About Dremora Labs
            </div>
            
            <h2 className="heading-secondary mb-8">
              Leading IT Solutions Provider with Innovation at Heart
            </h2>
            
            <p className="text-lead mb-8">
              With over 5 years of experience in the industry, Dremora Labs has been at the forefront 
              of delivering innovative technology solutions. We specialize in web development, 
              mobile applications, cloud services, and digital transformation.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower businesses through technology, providing scalable solutions 
              that drive growth and efficiency. We believe in building long-term partnerships with 
              our clients, understanding their unique challenges, and delivering tailored solutions 
              that exceed expectations.
            </p>

            <button className="btn-primary group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content */}
          <div className="animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Dremora Labs"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl"></div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">ISO 9001</div>
                    <div className="text-gray-600">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fadeInUp">
          {achievements.map((achievement, index) => (
            <div key={index} className="stats-card">
              <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <div className="font-semibold text-gray-900 mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {features.map((feature, index) => (
            <div key={index} className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;