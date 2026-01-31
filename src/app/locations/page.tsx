'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const offices = [
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    type: 'Global Headquarters',
    address: '71 Robinson Road, #14-01',
    postalCode: 'Singapore 068895',
    phone: '+65 6805 8896',
    email: 'info@movingwalls.com',
    timezone: 'SGT (UTC+8)',
    region: 'apac',
    isHeadquarters: true,
    mapUrl: 'https://maps.google.com/?q=71+Robinson+Road+Singapore',
  },
  {
    id: 'kuala-lumpur',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    type: 'Regional Office',
    address: 'Level 17, Menara CIMB, Jalan Stesen Sentral 2',
    postalCode: 'Kuala Lumpur Sentral, 50470',
    phone: '+60 3-2242 7266',
    email: 'malaysia@movingwalls.com',
    timezone: 'MYT (UTC+8)',
    region: 'apac',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=Menara+CIMB+Kuala+Lumpur',
  },
  {
    id: 'jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'Regional Office',
    address: 'Equity Tower, 49th Floor, SCBD Lot 9',
    postalCode: 'Jakarta 12190',
    phone: '+62 21 2965 1500',
    email: 'indonesia@movingwalls.com',
    timezone: 'WIB (UTC+7)',
    region: 'apac',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=Equity+Tower+SCBD+Jakarta',
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    country: 'India',
    type: 'Regional Office',
    address: 'WeWork Enam Sambhav, C-20, G Block',
    postalCode: 'Bandra Kurla Complex, Mumbai 400051',
    phone: '+91 22 4890 1234',
    email: 'india@movingwalls.com',
    timezone: 'IST (UTC+5:30)',
    region: 'apac',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=WeWork+BKC+Mumbai',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    type: 'MENA Office',
    address: 'Dubai Internet City, Building 1',
    postalCode: 'Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'mena@movingwalls.com',
    timezone: 'GST (UTC+4)',
    region: 'mena',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=Dubai+Internet+City',
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    type: 'European Headquarters',
    address: '30 Stamford Street, South Bank',
    postalCode: 'London SE1 9LQ',
    phone: '+44 20 7123 4567',
    email: 'europe@movingwalls.com',
    timezone: 'GMT (UTC+0)',
    region: 'europe',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=30+Stamford+Street+London',
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    type: 'Americas Office',
    address: '1411 Broadway, 16th Floor',
    postalCode: 'New York, NY 10018',
    phone: '+1 (212) 555-0123',
    email: 'americas@movingwalls.com',
    timezone: 'EST (UTC-5)',
    region: 'americas',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=1411+Broadway+New+York',
  },
  {
    id: 'sydney',
    city: 'Sydney',
    country: 'Australia',
    type: 'ANZ Office',
    address: '1 Martin Place, Level 12',
    postalCode: 'Sydney NSW 2000',
    phone: '+61 2 8123 4567',
    email: 'anz@movingwalls.com',
    timezone: 'AEST (UTC+10)',
    region: 'apac',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/?q=1+Martin+Place+Sydney',
  },
]

const stats = [
  { number: '8+', label: 'Global Offices' },
  { number: '200+', label: 'Team Members' },
  { number: '50+', label: 'Countries Served' },
  { number: '24/7', label: 'Global Support' },
]

export default function OfficeLocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Global Presence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Office Locations
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              With offices across Asia, Europe, Middle East, Americas, and Australia, we're always close to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Headquarters</h2>
            <p className="text-gray-600">Our main hub for global operations and innovation.</p>
          </motion.div>

          {offices.filter(o => o.isHeadquarters).map((office) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-100"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{office.city}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {office.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">{office.address}</p>
                        <p className="text-gray-600">{office.postalCode}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{office.timezone}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      View on Map
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-96 h-64 lg:h-auto bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816!2d103.8489!3d1.2771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMzcuNiJOIDEwM8KwNTAnNTYuMCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '250px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Singapore Office Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Offices</h2>
            <p className="text-gray-600">Our global network ensures local expertise and support.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.filter(o => !o.isHeadquarters).map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {office.city}
                    </h3>
                    <p className="text-sm text-gray-500">{office.country}</p>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4">
                  {office.type}
                </span>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-500">{office.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-500">{office.timezone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View on Map
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Reach, Local Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our worldwide presence ensures you always have access to local market expertise and dedicated support teams.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Asia Pacific</h3>
                <p className="text-sm text-gray-400">Singapore, KL, Jakarta, Mumbai, Sydney</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Europe</h3>
                <p className="text-sm text-gray-400">London</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Americas</h3>
                <p className="text-sm text-gray-400">New York</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Middle East</h3>
                <p className="text-sm text-gray-400">Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
