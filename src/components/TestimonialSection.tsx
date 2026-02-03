"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Moving Walls transformed our DOOH strategy. We saw a 156% increase in ROI within the first quarter. Their platform is incredibly intuitive and the support team is world-class.",
      author: "Sarah Johnson",
      role: "CMO",
      company: "TechVision Inc.",
      metric: "156% ROI Increase",
      industry: "Technology"
    },
    {
      quote: "The MW Planner tool alone saved us 40 hours per month in campaign planning. The AI recommendations are spot-on, and the attribution reporting finally gives us the visibility we needed.",
      author: "Michael Chen",
      role: "VP of Marketing",
      company: "RetailCo Global",
      metric: "40 Hours Saved/Month",
      industry: "Retail"
    },
    {
      quote: "Moving to Moving Walls was the best decision we made this year. Their marketplace gave us access to premium inventory we couldn't get elsewhere, and the results speak for themselves.",
      author: "Emily Rodriguez",
      role: "Head of Media",
      company: "FinanceFirst",
      metric: "2.8B+ Inventory Access",
      industry: "Finance"
    },
    {
      quote: "The real-time analytics changed everything for us. We can now optimize campaigns on the fly and see immediate results. Our cost per acquisition dropped by 45% in just two months.",
      author: "David Park",
      role: "Digital Marketing Director",
      company: "AutoMax Group",
      metric: "45% Lower CPA",
      industry: "Automotive"
    },
    {
      quote: "As a media owner, partnering with Moving Walls increased our fill rates dramatically. The programmatic capabilities brought in advertisers we never had access to before.",
      author: "Amanda Foster",
      role: "Chief Revenue Officer",
      company: "CityScreen Media",
      metric: "78% Fill Rate Increase",
      industry: "Media"
    },
    {
      quote: "The cross-market campaign orchestration is phenomenal. We launched across 12 countries simultaneously with localized creative, something that would have taken months before.",
      author: "Raj Patel",
      role: "Global Brand Manager",
      company: "Unilever APAC",
      metric: "12 Markets in 1 Week",
      industry: "FMCG"
    },
    {
      quote: "Healthcare advertising requires precision and compliance. Moving Walls delivered both while helping us reach 2 million patients with our wellness campaigns.",
      author: "Dr. Lisa Wang",
      role: "Marketing Director",
      company: "HealthFirst Network",
      metric: "2M Patient Reach",
      industry: "Healthcare"
    },
    {
      quote: "The audience targeting capabilities are unmatched. We reached premium travelers at exactly the right moments, driving a 320% increase in luxury bookings.",
      author: "James Morrison",
      role: "CMO",
      company: "Wanderlust Travel",
      metric: "320% Booking Increase",
      industry: "Travel"
    },
    {
      quote: "Moving Walls helped us prove the ROI of OOH for the first time. The attribution data convinced our CFO to triple our outdoor advertising budget.",
      author: "Patricia Lee",
      role: "Head of Performance Marketing",
      company: "TechStartup Asia",
      metric: "3x Budget Increase",
      industry: "Technology"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Get visible testimonials for current slide
  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
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

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-mw-gray-600 hover:text-mw-blue-600 hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-mw-gray-600 hover:text-mw-blue-600 hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-1">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${testimonial.author}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-mw-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-mw-gray-200 hover:border-mw-blue-300 flex flex-col group"
                >
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-mw-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Quote */}
                  <p className="text-mw-gray-700 mb-6 flex-grow leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-mw-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-mw-blue-600 to-mw-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-mw-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-mw-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-mw-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 h-3 bg-mw-blue-600 rounded-full"
                    : "w-3 h-3 bg-mw-gray-300 rounded-full hover:bg-mw-blue-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="h-1 bg-mw-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-mw-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                key={currentIndex}
              />
            </div>
          </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-mw-blue-600 text-white font-semibold rounded-lg hover:bg-mw-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
