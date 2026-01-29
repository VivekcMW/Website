"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Moving Walls transformed our DOOH strategy. We saw a 156% increase in ROI within the first quarter. Their platform is incredibly intuitive and the support team is world-class.",
      author: "Sarah Johnson",
      role: "CMO",
      company: "TechVision Inc.",
      metric: "156% ROI Increase"
    },
    {
      quote: "The MW-Planner tool alone saved us 40 hours per month in campaign planning. The AI recommendations are spot-on, and the attribution reporting finally gives us the visibility we needed.",
      author: "Michael Chen",
      role: "VP of Marketing",
      company: "RetailCo Global",
      metric: "40 Hours Saved/Month"
    },
    {
      quote: "Moving to Moving Walls was the best decision we made this year. Their marketplace gave us access to premium inventory we couldn't get elsewhere, and the results speak for themselves.",
      author: "Emily Rodriguez",
      role: "Head of Media",
      company: "FinanceFirst",
      metric: "2.8B+ Inventory Access"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-mw-blue-600 text-sm font-medium uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mw-gray-900 mt-4 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-mw-gray-600 max-w-2xl mx-auto text-lg">
            See what marketing leaders have to say about their experience with Moving Walls
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-mw-gray-50 rounded-2xl p-8 hover:shadow-mw-lg transition-all duration-300 border border-mw-gray-200 hover:border-mw-blue-300 flex flex-col"
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-mw-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-mw-gray-700 mb-6 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-mw-gray-200">
                <div className="w-12 h-12 bg-mw-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-mw-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-mw-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 text-mw-blue-600 font-medium hover:text-mw-blue-700 transition-colors"
          >
            View All Success Stories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
