"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function LocationsPage() {
  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      type: "Headquarters",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@mwwst.com",
      timezone: "PST (UTC-8)",
      employees: "85+",
      departments: ["Engineering", "Product", "Sales", "Marketing", "Operations"],
      image: "/placeholder-sf.jpg",
      isHeadquarters: true
    },
    {
      city: "New York",
      country: "United States",
      type: "Sales & Marketing Hub",
      address: "456 Madison Avenue, New York, NY 10022",
      phone: "+1 (555) 234-5678",
      email: "ny@mwwst.com",
      timezone: "EST (UTC-5)",
      employees: "35+",
      departments: ["Sales", "Marketing", "Client Services", "Partnerships"],
      image: "/placeholder-ny.jpg",
      isHeadquarters: false
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Headquarters",
      address: "789 Canary Wharf, London E14 5AB, UK",
      phone: "+44 20 1234 5678",
      email: "london@mwwst.com",
      timezone: "GMT (UTC+0)",
      employees: "25+",
      departments: ["Sales", "Marketing", "Operations", "Client Services"],
      image: "/placeholder-london.jpg",
      isHeadquarters: false
    },
    {
      city: "Sydney",
      country: "Australia",
      type: "Asia-Pacific Hub",
      address: "321 George Street, Sydney NSW 2000, Australia",
      phone: "+61 2 1234 5678",
      email: "sydney@mwwst.com",
      timezone: "AEDT (UTC+11)",
      employees: "15+",
      departments: ["Sales", "Client Services", "Operations"],
      image: "/placeholder-sydney.jpg",
      isHeadquarters: false
    },
    {
      city: "Toronto",
      country: "Canada",
      type: "Canadian Operations",
      address: "654 King Street West, Toronto, ON M5V 1M7, Canada",
      phone: "+1 (416) 123-4567",
      email: "toronto@mwwst.com",
      timezone: "EST (UTC-5)",
      employees: "12+",
      departments: ["Sales", "Client Services", "Marketing"],
      image: "/placeholder-toronto.jpg",
      isHeadquarters: false
    },
    {
      city: "Berlin",
      country: "Germany",
      type: "Central European Office",
      address: "987 Unter den Linden, 10117 Berlin, Germany",
      phone: "+49 30 1234 5678",
      email: "berlin@mwwst.com",
      timezone: "CET (UTC+1)",
      employees: "8+",
      departments: ["Sales", "Marketing", "Client Services"],
      image: "/placeholder-berlin.jpg",
      isHeadquarters: false
    }
  ];

  const stats = [
    { number: "6", label: "Global Offices" },
    { number: "180+", label: "Team Members" },
    { number: "25+", label: "Countries Served" },
    { number: "24/7", label: "Global Support" }
  ];

  const benefits = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Local Timezone Support",
      description: "Get support in your local timezone with native language assistance"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Regional Expertise",
      description: "Deep understanding of local markets and advertising regulations"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v7.945M20 18v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M8 17.5h8M8 15h8M8 12.5h8" /></svg>,
      title: "Cultural Alignment",
      description: "Campaigns tailored to local cultures and market preferences"
    }
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
              <span className="text-mw-blue-600 text-sm font-medium">Global Presence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Our Locations
              <span className="text-mw-blue-600 block">Worldwide Reach</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              With offices across six major cities, MWWST provides local expertise 
              and global reach to serve clients worldwide. Find the office nearest 
              you and connect with our local teams.
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

      {/* Office Locations */}
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
              Our Global Offices
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Each office is staffed with local experts who understand regional markets and can provide personalized service.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-mw-lg border p-8 hover:shadow-mw-xl transition-shadow ${
                  office.isHeadquarters ? 'border-mw-blue-200 bg-gradient-to-br from-mw-blue-25 to-white' : 'border-mw-gray-100'
                }`}
              >
                {office.isHeadquarters && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-mw-blue-100 text-mw-blue-600 text-xs font-medium rounded-full mb-4">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Headquarters
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-mw-gray-900 mb-1">{office.city}</h3>
                    <p className="text-lg text-mw-gray-600 mb-2">{office.country}</p>
                    <p className="text-sm text-mw-blue-600 font-medium">{office.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-mw-blue-600">{office.employees}</div>
                    <div className="text-sm text-mw-gray-600">employees</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mw-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-mw-gray-700 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-mw-gray-700 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-mw-gray-700 text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-mw-gray-700 text-sm">{office.timezone}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-mw-gray-900 mb-3">Departments:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.departments.map((dept, deptIndex) => (
                      <span
                        key={deptIndex}
                        className="px-3 py-1 bg-mw-gray-100 text-mw-gray-700 text-xs rounded-full"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Global Reach, Local Expertise
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Our global presence ensures you get the best of both worlds - worldwide capabilities with deep local market knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mw-blue-100 rounded-full text-mw-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-mw-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-mw-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
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
                Visit Our Offices
              </h2>
              <p className="text-lg text-mw-gray-600 mb-6 leading-relaxed">
                We love meeting our clients and partners in person. Schedule a visit to any of our offices 
                for meetings, product demonstrations, or just to connect with our local teams.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Modern office spaces with meeting facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Product demonstration areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Easy access to public transportation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-mw-gray-700">Parking and accessibility options</span>
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
              <h3 className="text-2xl font-bold text-mw-gray-900 mb-4">Schedule a Visit</h3>
              <p className="text-mw-gray-600 mb-6">
                Planning to visit one of our offices? Let us know in advance so we can prepare 
                for your visit and ensure the right team members are available to meet with you.
              </p>
              <div className="space-y-4">
                <Link
                  href="#contact"
                  className="block w-full px-6 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  Schedule Office Visit
                </Link>
                <button className="block w-full px-6 py-3 border border-mw-blue-600 hover:bg-mw-blue-50 text-mw-blue-600 font-semibold rounded-lg transition-colors">
                  Download Office Guide
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
              Ready to Connect?
            </h2>
            <p className="text-xl text-mw-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find the office nearest you and get in touch with our local team. 
              We're here to help you succeed with personalized, regional expertise.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-mw-gray-50 text-mw-blue-600 font-semibold rounded-lg transition-colors shadow-lg"
            >
              Contact Local Office
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