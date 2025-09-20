import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: ["hello@dremoralabs.com", "support@dremoralabs.com"],
      action: "Send Email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: ["123 Innovation Drive", "Tech City, TC 12345"],
      action: "Get Directions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "Schedule Meeting",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Consulting",
    "Technical Support",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months"
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="heading-lg text-gray-800 mb-6">
            Let's Start Your
            <span className="text-gradient block">Next Project</span>
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help your business grow with innovative 
            software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-custom card-hover">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                      <button className="text-indigo-600 font-semibold text-sm mt-3 hover:text-indigo-700 transition-colors duration-300 flex items-center">
                        <span>{info.action}</span>
                        <Send className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-custom">
              <h4 className="font-bold text-gray-800 text-lg mb-6">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">24/7 Support Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Global Client Base</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-custom-lg p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h4>
                  <p className="text-gray-600 text-lg">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3">
                        Service Needed *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-3">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-3">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-5 justify-center"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    <span>Send Message & Get Free Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;