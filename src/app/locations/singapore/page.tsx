'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
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
  transit: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4 0h8a1 1 0 001-1V6a1 1 0 00-1-1H7a1 1 0 00-1 1v11a1 1 0 001 1zm-3 0a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  bus: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8m-8 4h2m4 0h2M6 19a2 2 0 01-2-2V7a4 4 0 014-4h8a4 4 0 014 4v10a2 2 0 01-2 2m-12 0h12m-12 0a2 2 0 01-2-2m14 2a2 2 0 002-2m-14 4h2m8 0h2" />
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
  airport: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
}

export default function SingaporePage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in Singapore?",
      answer: "DOOH (Digital Out-of-Home) advertising in Singapore uses digital screens in public spaces like MRT stations, bus shelters, malls, and CBD areas to deliver dynamic, engaging ads that can be updated in real time.",
    },
    {
      question: "Why invest in OOH advertising in Singapore?",
      answer: "Singapore's high urban density, world-class infrastructure, and affluent consumer base make it ideal for impactful OOH campaigns. The city-state offers excellent reach among commuters, shoppers, and business travelers.",
    },
    {
      question: "What types of OOH advertising are available in Singapore?",
      answer: "Digital billboards, MRT station ads, bus shelter displays, taxi top screens, mall digital networks, Changi Airport advertising, and programmatic DOOH across the island.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in Singapore?",
      answer: "Track impressions using LTA footfall data, engagement rates, mobile attribution, and real-time analytics via programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the regulations for OOH advertising in Singapore?",
      answer: "OOH advertising in Singapore is regulated by the Building and Construction Authority (BCA) and Urban Redevelopment Authority (URA). All outdoor ads require permits and must comply with content guidelines.",
    },
    {
      question: "How does Moving Walls help advertisers in Singapore?",
      answer: "Moving Walls provides access to premium OOH inventory across Singapore, with precise audience targeting, real-time campaign analytics, and seamless programmatic buying through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Singapore",
    description: "Singapore's world-class infrastructure and high urban density make it a premium destination for impactful OOH advertising campaigns.",
    stats: [
      { label: "Billboard Sites", value: "1,200+" },
      { label: "Digital Screens", value: "500+" },
      { label: "Monthly Reach", value: "5.5M+" },
      { label: "MRT Stations", value: "140+" },
    ],
    majorCities: [
      "Orchard Road",
      "Marina Bay",
      "Central Business District",
      "Changi",
      "Jurong",
      "Sentosa",
    ],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "Premium LED screens in high-traffic areas" },
      { name: "MRT Advertising", icon: "transit", description: "Platform screens and train wraps" },
      { name: "Bus Advertising", icon: "bus", description: "Full bus wraps and shelter displays" },
      { name: "Mall Media", icon: "mall", description: "Digital networks in premium malls" },
      { name: "Roadside Displays", icon: "highway", description: "Expressway and arterial road panels" },
      { name: "Airport Media", icon: "airport", description: "Changi Airport advertising network" },
    ],
    caseStudies: [
      {
        title: "Luxury Brand Campaign",
        client: "International Fashion House",
        results: "52% increase in store visits",
      },
      {
        title: "Fintech App Launch",
        client: "Digital Banking Startup",
        results: "180K app downloads in 4 weeks",
      },
      {
        title: "Tourism Board Campaign",
        client: "Regional Tourism Authority",
        results: "38% lift in destination interest",
      },
    ],
    partners: [
      "JCDecaux Singapore",
      "Clear Channel",
      "Moove Media",
      "Focus Media",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Marina Bay Sands */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 8, top: 12 }, { left: 18, top: 28 }, { left: 28, top: 8 }, { left: 38, top: 48 },
            { left: 48, top: 18 }, { left: 58, top: 38 }, { left: 68, top: 12 }, { left: 78, top: 58 },
            { left: 88, top: 22 }, { left: 92, top: 42 }, { left: 12, top: 62 }, { left: 22, top: 78 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200">{countryData.name}</span>
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
                    <div className="text-3xl md:text-4xl font-bold text-emerald-300">{stat.value}</div>
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

            {/* Right Side - 3D Marina Bay Sands */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[380px] md:w-[420px] md:h-[420px]">
                {/* Water Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/30 to-transparent blur-sm" />
                <motion.div
                  className="absolute bottom-2 left-8 right-8 h-16 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Marina Bay Sands Structure */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  {/* Three Towers */}
                  {[0, 1, 2].map((tower) => (
                    <motion.div
                      key={tower}
                      className="relative"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + tower * 0.2 }}
                    >
                      <div 
                        className="w-12 md:w-14 h-48 md:h-56 bg-gradient-to-t from-gray-700 via-gray-500 to-gray-400 rounded-t-lg"
                        style={{
                          transform: tower === 1 ? 'none' : `skewY(${tower === 0 ? 3 : -3}deg)`,
                          boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.3)'
                        }}
                      >
                        {/* Windows */}
                        <div className="absolute inset-2 grid grid-cols-2 gap-0.5">
                          {[...Array(24)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="bg-yellow-200/40 rounded-sm"
                              animate={{ opacity: [0.2, 0.7, 0.2] }}
                              transition={{ duration: 2, repeat: Infinity, delay: (i + tower) * 0.1 }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* SkyPark (Top Platform) */}
                <motion.div
                  className="absolute bottom-[260px] md:bottom-[300px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div 
                    className="w-52 md:w-64 h-6 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full"
                    style={{ 
                      boxShadow: '0 5px 30px rgba(6, 182, 212, 0.4)',
                      transform: 'perspective(500px) rotateX(20deg)'
                    }}
                  >
                    {/* Infinity Pool Glow */}
                    <motion.div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Trees on top */}
                  <div className="absolute -top-2 left-8 flex gap-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-3 bg-emerald-500 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Merlion */}
                <motion.div
                  className="absolute bottom-16 left-8"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="w-6 h-10 bg-gradient-to-t from-gray-400 to-white rounded-t-full" />
                  {/* Water Spray */}
                  <motion.div
                    className="absolute -top-2 left-6 w-1 h-8 bg-gradient-to-t from-cyan-400 to-transparent origin-bottom"
                    style={{ transform: 'rotate(-30deg)' }}
                    animate={{ scaleY: [0.8, 1, 0.8], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Floating Digital Screens */}
                {[
                  { x: -90, y: 100, delay: 0.5, color: 'emerald' },
                  { x: 100, y: 120, delay: 0.8, color: 'cyan' },
                  { x: -70, y: 200, delay: 1.1, color: 'blue' },
                  { x: 90, y: 220, delay: 1.4, color: 'emerald' },
                ].map((screen, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `calc(50% + ${screen.x}px)`, bottom: `${screen.y}px` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: screen.delay }}
                  >
                    <motion.div
                      className={`w-10 h-7 rounded bg-gradient-to-br ${screen.color === 'emerald' ? 'from-emerald-400 to-cyan-500' : screen.color === 'cyan' ? 'from-cyan-400 to-blue-500' : 'from-blue-400 to-indigo-500'}`}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: screen.delay }}
                      style={{ boxShadow: `0 0 15px ${screen.color === 'emerald' ? 'rgba(16, 185, 129, 0.5)' : screen.color === 'cyan' ? 'rgba(6, 182, 212, 0.5)' : 'rgba(59, 130, 246, 0.5)'}` }}
                    />
                  </motion.div>
                ))}

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">MRT Network</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-300">140+ Stations</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Monthly Reach</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-300">5.5M+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-12 bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countryData.stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Media Types */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Media Types</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive OOH advertising solutions across {countryData.name}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {countryData.mediaTypes.map((media) => (
              <motion.div key={media.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{MediaIcons[media.icon]}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{media.name}</h3>
                <p className="text-gray-600">{media.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2>
            <p className="text-lg text-gray-600">Key locations with billboard inventory</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {countryData.majorCities.map((city) => (
              <motion.div key={city} variants={staggerItem} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-900">{city}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how brands have achieved results with OOH in {countryData.name}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {countryData.caseStudies.map((study) => (
              <motion.div key={study.title} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-mw-blue-100 to-mw-blue-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-mw-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{study.client}</p>
                  <div className="flex items-center gap-2 text-mw-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-medium">{study.results}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Partners</h2>
            <p className="text-lg text-gray-600">Working with leading media owners in {countryData.name}</p>
          </motion.div>
          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-6">
            {countryData.partners.map((partner) => (
              <motion.div key={partner} variants={staggerItem} className="bg-white border border-gray-200 rounded-lg px-8 py-4">
                <span className="font-medium text-gray-700">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },
              { name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },
              { name: "India", flag: "🇮🇳", href: "/locations/india" },
              { name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },
              { name: "Japan", flag: "🇯🇵", href: "/locations/japan" },
              { name: "Australia", flag: "🇦🇺", href: "/locations/australia" },
              { name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" },
              { name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" },
            ].map((country) => (
              <motion.div key={country.name} variants={staggerItem}>
                <Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3>
                      <p className="text-sm text-gray-500">View billboards →</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in Singapore</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
