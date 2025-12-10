"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
    budget: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "",
        budget: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-mw-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mw-blue-100 rounded-full mb-6">
              <svg className="w-4 h-4 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-mw-blue-600 text-sm font-medium">Let's Discuss Your Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Your Success Story Starts Here
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Share your advertising challenges and goals. Our experts will craft a tailored strategy 
              that transforms your vision into measurable business results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-mw-gray-900 mb-6">Multiple Ways to Connect</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mw-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mw-gray-900 mb-1">Global Headquarters</h4>
                      <p className="text-mw-gray-600">MW Innovation Center<br />1250 Broadway, Suite 3200<br />New York, NY 10001</p>
                      <p className="text-xs text-mw-blue-600 mt-1">8 offices worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mw-gray-900 mb-1">Direct Line</h4>
                      <p className="text-mw-gray-600 font-medium">+1 (844) MW-WORLD</p>
                      <p className="text-sm text-mw-gray-500">24/7 Support Available</p>
                      <p className="text-xs text-emerald-600 mt-1">Average response: 2 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mw-gray-900 mb-1">Priority Email</h4>
                      <p className="text-mw-gray-600 font-medium">connect@mwwst.com</p>
                      <p className="text-sm text-mw-gray-500">Dedicated response team</p>
                      <p className="text-xs text-violet-600 mt-1">Response within 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-mw-lg p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Primary Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                        >
                          <option value="">What's your primary goal?</option>
                          <option value="mw-planner">Strategic Planning & Campaign Optimization</option>
                          <option value="mw-studio">Creative Production & Asset Management</option>
                          <option value="mw-marketplace">Premium Inventory & Media Buying</option>
                          <option value="mw-reach">Audience Targeting & Reach Expansion</option>
                          <option value="mw-activate">Campaign Automation & Management</option>
                          <option value="mw-measure">Analytics & Performance Measurement</option>
                          <option value="mw-science">Market Research & Consumer Insights</option>
                          <option value="enterprise">Enterprise Solution & Custom Integration</option>
                          <option value="partnership">Strategic Partnership Discussion</option>
                          <option value="demo">Platform Demo & Product Walkthrough</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-mw-gray-700 mb-2">
                          Monthly Ad Budget (Optional)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-500k">$100,000 - $500,000</option>
                          <option value="500k-1m">$500,000 - $1,000,000</option>
                          <option value="over-1m">Over $1,000,000</option>
                          <option value="flexible">Flexible/To be discussed</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-mw-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-mw-blue-500 transition-colors resize-vertical"
                        placeholder="Share your advertising challenges, current performance metrics, and what success looks like for your business. The more details you provide, the better we can tailor our recommendations..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-mw-blue-600 to-indigo-600 hover:from-mw-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg shadow-mw-md hover:shadow-mw-lg transform hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message & Get Strategy Insights
                      </span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-mw-gray-900 mb-4">Message Received!</h3>
                    <p className="text-mw-gray-600 mb-4">
                      Thank you for sharing your advertising goals with us. Our strategy team is already reviewing your requirements.
                    </p>
                    <div className="bg-mw-blue-50 rounded-lg p-4 max-w-md mx-auto">
                      <div className="flex items-center gap-2 text-mw-blue-600 text-sm font-medium mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Next Steps:
                      </div>
                      <p className="text-mw-gray-700 text-sm">
                        Expect a personalized response within 2 hours with strategy recommendations tailored to your goals.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}