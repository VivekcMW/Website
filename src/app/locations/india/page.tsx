'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Icons for FAQ
const Icons = {
  plus: <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
  minus: <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>,
}

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <motion.div variants={staggerItem} className="border border-gray-200 rounded-lg overflow-hidden">
    <button onClick={onClick} className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
      <span className="font-semibold text-gray-900">{question}</span>
      {isOpen ? Icons.minus : Icons.plus}
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </motion.div>
)

// SVG Icons for media types
const MediaIcons: Record<string, React.ReactElement> = {
  digital: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  static: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  transit: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4 0h8a1 1 0 001-1V6a1 1 0 00-1-1H7a1 1 0 00-1 1v11a1 1 0 001 1zm-3 0a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  airport: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  mall: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  highway: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
}

export default function IndiaPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in India?",
      answer: "DOOH (Digital Out-of-Home) advertising in India uses digital screens in metro stations, airports, malls, highways, and urban centers to deliver dynamic ads that can be updated in real time across the country's vast network.",
    },
    {
      question: "Why invest in OOH advertising in India?",
      answer: "India's 1.4 billion population, rapidly growing economy, and increasing urbanization make it one of the world's most attractive OOH markets. Reach diverse audiences across metros like Mumbai, Delhi, Bangalore, and emerging tier-2 cities.",
    },
    {
      question: "What types of OOH advertising are available in India?",
      answer: "Large format billboards, metro station ads, airport advertising, bus shelters, auto-rickshaw branding, mall digital networks, highway unipoles, and programmatic DOOH in major cities.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in India?",
      answer: "Track impressions using traffic data, mobile device IDs, engagement analytics, and real-time reporting through programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the key OOH markets in India?",
      answer: "Major markets include Mumbai, Delhi NCR, Bangalore, Chennai, Hyderabad, Kolkata, Pune, and Ahmedabad. Tier-2 cities like Jaipur, Lucknow, and Kochi are also growing rapidly.",
    },
    {
      question: "How does Moving Walls help advertisers in India?",
      answer: "Moving Walls provides access to 50,000+ billboard sites across India, with precise audience targeting, real-time analytics, and programmatic buying capabilities through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "India",
    description: "India's booming economy and diverse consumer base make it one of the most exciting OOH advertising markets in the world, with extensive reach across metros and tier-2 cities.",
    stats: [
      { label: "Billboard Sites", value: "50,000+" },
      { label: "Digital Screens", value: "15,000+" },
      { label: "Monthly Reach", value: "500M+" },
      { label: "Major Cities", value: "100+" },
    ],
    majorCities: ["Mumbai", "Delhi NCR", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "Premium LED screens in metro cities" },
      { name: "Static Billboards", icon: "static", description: "Large format hoardings nationwide" },
      { name: "Metro Advertising", icon: "transit", description: "Delhi, Mumbai, Bangalore metro networks" },
      { name: "Airport Media", icon: "airport", description: "All major international airports" },
      { name: "Mall Media", icon: "mall", description: "Premium shopping center networks" },
      { name: "Highway Media", icon: "highway", description: "National highways and expressways" },
    ],
    caseStudies: [
      { title: "Tech Unicorn Launch", client: "Leading Indian Startup", results: "78% brand awareness in 6 weeks" },
      { title: "Automotive Campaign", client: "Global Auto Manufacturer", results: "45% increase in showroom visits" },
      { title: "BFSI Digital Push", client: "Major Private Bank", results: "2.5M new account signups" },
    ],
    partners: ["Times OOH", "JCDecaux India", "Laqshya Media", "Selvel One"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Gateway of India */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 6, top: 14 }, { left: 16, top: 29 }, { left: 26, top: 7 }, { left: 36, top: 49 },
            { left: 46, top: 19 }, { left: 56, top: 39 }, { left: 66, top: 11 }, { left: 76, top: 59 },
            { left: 86, top: 24 }, { left: 11, top: 64 }, { left: 21, top: 79 }, { left: 31, top: 69 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i % 5) * 0.4 }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                OOH Advertising in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">{countryData.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-mw-blue-100 max-w-xl mb-8 leading-relaxed">
                {countryData.description}
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-8">
                {countryData.stats.slice(0, 3).map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-orange-300">{stat.value}</div>
                    <div className="text-sm text-mw-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-mw-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-mw-blue-50 transition-all hover:scale-105">
                  Contact Sales
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - 3D Gateway of India */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Water Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-400/20 to-transparent blur-sm" />
                
                {/* Gateway of India Structure */}
                <motion.div
                  className="absolute bottom-16 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Main Arch */}
                  <div className="relative">
                    {/* Left Pillar */}
                    <div className="absolute left-0 bottom-0 w-10 h-44 bg-gradient-to-t from-amber-700 via-amber-600 to-amber-500 rounded-t">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-amber-400/50 rounded" />
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-5 h-32 bg-amber-500/30" />
                    </div>
                    
                    {/* Right Pillar */}
                    <div className="absolute right-0 bottom-0 w-10 h-44 bg-gradient-to-t from-amber-700 via-amber-600 to-amber-500 rounded-t">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-amber-400/50 rounded" />
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-5 h-32 bg-amber-500/30" />
                    </div>
                    
                    {/* Central Arch */}
                    <div className="relative mx-10 w-24 h-36 border-t-[40px] border-l-[12px] border-r-[12px] border-amber-600 rounded-t-full" />
                    
                    {/* Top Dome Structure */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-12 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-amber-500 rounded-t-full" />
                    </div>
                    
                    {/* Corner Towers */}
                    <div className="absolute -left-4 -top-4 w-6 h-16 bg-gradient-to-t from-amber-700 to-amber-500 rounded-t">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full" />
                    </div>
                    <div className="absolute -right-4 -top-4 w-6 h-16 bg-gradient-to-t from-amber-700 to-amber-500 rounded-t">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Mumbai Skyline Buildings */}
                {[
                  { x: -110, y: 40, h: 70, w: 18, delay: 0.6 },
                  { x: -85, y: 50, h: 55, w: 14, delay: 0.7 },
                  { x: 85, y: 45, h: 65, w: 16, delay: 0.8 },
                  { x: 110, y: 55, h: 50, w: 14, delay: 0.9 },
                  { x: -65, y: 70, h: 40, w: 12, delay: 1.0 },
                  { x: 70, y: 65, h: 45, w: 13, delay: 1.1 },
                ].map((bldg, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `calc(50% + ${bldg.x}px)`, bottom: `${bldg.y}px` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: bldg.delay }}
                  >
                    <div 
                      className="bg-gradient-to-t from-blue-900 to-blue-700 rounded-t"
                      style={{ width: `${bldg.w}px`, height: `${bldg.h}px` }}
                    >
                      <div className="grid grid-cols-2 gap-0.5 p-1 h-full">
                        {[...Array(8)].map((_, wi) => (
                          <motion.div
                            key={wi}
                            className="bg-yellow-200/40 rounded-sm"
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: wi * 0.2 + i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Billboard on building */}
                    {i % 2 === 0 && (
                      <motion.div
                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-6 bg-gradient-to-r from-orange-500 to-green-500 rounded"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        style={{ boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Data Particles flowing to Gateway */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: `${20 + i * 12}%`,
                      bottom: '30%',
                      background: i % 2 === 0 ? '#f97316' : '#22c55e',
                      boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.8)' : 'rgba(34, 197, 94, 0.8)'}`,
                    }}
                    animate={{
                      x: [0, (50 - i * 12) * 2],
                      y: [0, -50],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Metro Cities</span>
                  </div>
                  <div className="text-lg font-bold text-orange-300">8 Major</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Monthly Reach</span>
                  </div>
                  <div className="text-lg font-bold text-orange-300">500M+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="py-12 bg-gray-50 border-b border-gray-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{countryData.stats.map((stat) => (<motion.div key={stat.label} variants={staggerItem} className="text-center"><div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.value}</div><div className="text-gray-600">{stat.label}</div></motion.div>))}</div></div></motion.section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Media Types</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive OOH advertising solutions across {countryData.name}</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{countryData.mediaTypes.map((media) => (<motion.div key={media.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"><div className="mb-4">{MediaIcons[media.icon]}</div><h3 className="text-xl font-semibold text-gray-900 mb-2">{media.name}</h3><p className="text-gray-600">{media.description}</p></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2><p className="text-lg text-gray-600">Major cities with billboard inventory</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">{countryData.majorCities.map((city) => (<motion.div key={city} variants={staggerItem} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2"><svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="font-medium text-gray-900">{city}</span></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">{countryData.caseStudies.map((study) => (<motion.div key={study.title} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"><div className="h-48 bg-gradient-to-br from-mw-blue-100 to-mw-blue-200 flex items-center justify-center"><svg className="w-16 h-16 text-mw-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><div className="p-6"><h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3><p className="text-sm text-gray-500 mb-3">{study.client}</p><div className="flex items-center gap-2 text-mw-blue-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg><span className="font-medium">{study.results}</span></div></div></motion.div>))}</motion.div></div></section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Partners</h2></div><div className="flex flex-wrap justify-center gap-6">{countryData.partners.map((partner) => (<div key={partner} className="bg-white border border-gray-200 rounded-lg px-8 py-4"><span className="font-medium text-gray-700">{partner}</span></div>))}</div></div></motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },{ name: "Japan", flag: "🇯🇵", href: "/locations/japan" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" },{ name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

      {/* FAQs */}
      <section className="py-16 md:py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in India</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">{faqs.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />))}</motion.div></div></section>

    </div>
  )
}
