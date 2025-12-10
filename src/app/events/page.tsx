"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "The Future of Programmatic Advertising",
      type: "Webinar",
      date: "December 15, 2024",
      time: "2:00 PM - 3:00 PM PST",
      location: "Virtual Event",
      description: "Join our experts as we explore emerging trends in programmatic advertising and discuss how AI is reshaping the industry.",
      speakers: ["Sarah Mitchell, CEO", "David Chen, CTO"],
      price: "Free",
      capacity: "500 attendees",
      category: "Technology",
      featured: true
    },
    {
      title: "MWWST at AdTech Conference 2025",
      type: "Conference",
      date: "January 22-24, 2025",
      time: "9:00 AM - 6:00 PM PST",
      location: "Moscone Center, San Francisco",
      description: "Meet our team at booth #245 and see live demos of our latest advertising technology innovations.",
      speakers: ["Maria Rodriguez, CMO", "Product Demo Team"],
      price: "Conference Pass Required",
      capacity: "Meet at Booth #245",
      category: "Conference",
      featured: false
    },
    {
      title: "Data Privacy in Modern Advertising",
      type: "Workshop",
      date: "February 8, 2025",
      time: "10:00 AM - 4:00 PM EST",
      location: "New York Office",
      description: "Interactive workshop covering privacy-first advertising strategies and compliance with global data regulations.",
      speakers: ["Dr. Lisa Park, CDO", "Legal & Compliance Team"],
      price: "$299",
      capacity: "30 attendees",
      category: "Compliance",
      featured: false
    },
    {
      title: "Customer Success Stories & Best Practices",
      type: "Webinar",
      date: "February 20, 2025",
      time: "1:00 PM - 2:00 PM EST",
      location: "Virtual Event",
      description: "Learn from successful campaigns and discover best practices from leading brands using MWWST platforms.",
      speakers: ["Michael Brown, CRO", "Customer Success Team"],
      price: "Free",
      capacity: "1000 attendees",
      category: "Case Studies",
      featured: false
    },
    {
      title: "MWWST European Summit",
      type: "Summit",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM GMT",
      location: "London Office",
      description: "Annual European summit featuring keynotes, networking, and deep-dive sessions on advertising innovation.",
      speakers: ["Full Leadership Team", "Industry Guest Speakers"],
      price: "Invitation Only",
      capacity: "150 attendees",
      category: "Summit",
      featured: true
    },
    {
      title: "Mobile Advertising Masterclass",
      type: "Training",
      date: "March 28, 2025",
      time: "11:00 AM - 3:00 PM PST",
      location: "San Francisco Office",
      description: "Hands-on training session focused on mobile advertising strategies and campaign optimization techniques.",
      speakers: ["Product Training Team", "Mobile Strategy Experts"],
      price: "$199",
      capacity: "25 attendees",
      category: "Training",
      featured: false
    }
  ];

  const eventTypes = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: "Webinars",
      description: "Free online sessions covering industry trends and product updates",
      count: "12+ per year"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" /></svg>,
      title: "Workshops",
      description: "Interactive, hands-on training sessions at our global offices",
      count: "8+ per year"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Conferences",
      description: "Industry conferences where you can meet our team and see demos",
      count: "15+ per year"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: "Training",
      description: "Deep-dive training sessions and certification programs",
      count: "6+ per year"
    }
  ];

  const stats = [
    { number: "25+", label: "Events This Year" },
    { number: "5000+", label: "Total Attendees" },
    { number: "15+", label: "Industry Conferences" },
    { number: "95%", label: "Satisfaction Rating" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mw-blue-100 rounded-full mb-8">
              <span className="text-mw-blue-600 text-sm font-medium">Learning & Networking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Events & Training
              <span className="text-mw-blue-600 block">Learn & Connect</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join us for webinars, workshops, conferences, and training sessions. 
              Stay ahead of industry trends, learn best practices, and connect with 
              fellow advertising professionals.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-mw-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Event Types
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              We offer various types of events to suit different learning preferences and professional development needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mw-blue-100 rounded-full text-mw-blue-600 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-mw-gray-900 mb-3">{type.title}</h3>
                <p className="text-mw-gray-600 mb-3 leading-relaxed">{type.description}</p>
                <p className="text-mw-blue-600 font-medium text-sm">{type.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Don't miss these upcoming opportunities to learn, network, and advance your advertising expertise.
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-mw-lg border p-8 hover:shadow-mw-xl transition-shadow ${
                  event.featured ? 'border-mw-blue-200 bg-gradient-to-r from-mw-blue-25 to-white' : 'border-mw-gray-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {event.featured && (
                        <span className="px-3 py-1 bg-mw-blue-100 text-mw-blue-600 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        event.type === 'Webinar' ? 'bg-green-100 text-green-600' :
                        event.type === 'Workshop' ? 'bg-purple-100 text-purple-600' :
                        event.type === 'Conference' ? 'bg-orange-100 text-orange-600' :
                        event.type === 'Summit' ? 'bg-red-100 text-red-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {event.type}
                      </span>
                      <span className="px-3 py-1 bg-mw-gray-100 text-mw-gray-600 text-xs font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-mw-gray-900 mb-3">{event.title}</h3>
                    <p className="text-mw-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-mw-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-mw-gray-700">{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-mw-gray-700">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-mw-gray-700">{event.capacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-mw-gray-600">
                        <span className="font-medium">Speakers:</span> {event.speakers.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 min-w-[180px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mw-blue-600">{event.price}</div>
                      <div className="text-sm text-mw-gray-600">Registration</div>
                    </div>
                    <button className="w-full px-6 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-semibold rounded-lg transition-colors">
                      {event.price === 'Free' ? 'Register Free' : 
                       event.price === 'Conference Pass Required' ? 'Find Us There' :
                       event.price === 'Invitation Only' ? 'Request Invite' : 'Register Now'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-6">
                Never Miss an Event
              </h2>
              <p className="text-lg text-mw-gray-600 mb-6 leading-relaxed">
                Subscribe to our events newsletter and be the first to know about upcoming webinars, 
                workshops, conferences, and exclusive training opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Early access to event registration</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Exclusive discounts on paid events</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Event recordings and exclusive content</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-mw-blue-50 to-mw-blue-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-mw-gray-900 mb-4">Subscribe to Events</h3>
              <p className="text-mw-gray-600 mb-6">
                Get notified about new events, early registration access, and exclusive content.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-mw-gray-300 rounded-lg focus:ring-2 focus:ring-mw-blue-500 focus:border-transparent"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="updates" className="rounded" />
                  <label htmlFor="updates" className="text-sm text-mw-gray-600">
                    Also subscribe to product updates and industry insights
                  </label>
                </div>
                <button className="w-full px-6 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mw-blue-600 to-mw-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Host an Event With Us
            </h2>
            <p className="text-xl text-mw-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Interested in co-hosting an event, speaking at one of our sessions, or having us present 
              at your event? We'd love to collaborate and share our expertise with your audience.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-mw-gray-50 text-mw-blue-600 font-semibold rounded-lg transition-colors shadow-lg"
            >
              Partner With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}