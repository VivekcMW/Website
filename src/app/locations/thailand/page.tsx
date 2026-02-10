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
  transit: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4 0h8a1 1 0 001-1V6a1 1 0 00-1-1H7a1 1 0 00-1 1v11a1 1 0 001 1zm-3 0a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  static: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
  tourism: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6M9 9h.01M15 9h.01" />
    </svg>
  ),
}

export default function ThailandPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in Thailand?",
      answer: "DOOH (Digital Out-of-Home) advertising in Thailand uses digital screens in BTS/MRT stations, shopping malls, airports, and Bangkok's busy streets to deliver dynamic, engaging ads in real time.",
    },
    {
      question: "Why invest in OOH advertising in Thailand?",
      answer: "Thailand's 70 million population, strong tourism industry, and Bangkok's vibrant urban scene make it a prime OOH market. High foot traffic at malls and transit hubs ensures excellent reach.",
    },
    {
      question: "What types of OOH advertising are available in Thailand?",
      answer: "BTS/MRT station ads, Siam Square digital billboards, mall networks (CentralWorld, Siam Paragon), airport displays, tuk-tuk advertising, and programmatic DOOH across Bangkok and tourist destinations.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in Thailand?",
      answer: "Track impressions using BTS/MRT ridership data, mall footfall, mobile attribution, and real-time analytics through programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the key OOH markets in Thailand?",
      answer: "Major markets include Bangkok (Siam, Sukhumvit, Silom), Phuket, Chiang Mai, Pattaya, and Hat Yai. Bangkok's transit network reaches millions of commuters daily.",
    },
    {
      question: "How does Moving Walls help advertisers in Thailand?",
      answer: "Moving Walls provides access to 4,200+ billboard sites across Thailand, with precise audience targeting, real-time analytics, and programmatic buying through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Thailand",
    description: "Thailand's vibrant advertising market and tourism-driven economy offer exceptional OOH opportunities across Bangkok and major tourist destinations.",
    stats: [
      { label: "Billboard Sites", value: "4,200+" },
      { label: "Digital Screens", value: "1,800+" },
      { label: "Monthly Reach", value: "35M+" },
      { label: "Major Cities", value: "25+" },
    ],
    majorCities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hua Hin", "Krabi", "Samui", "Ayutthaya"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "Premium LED screens in Bangkok CBD" },
      { name: "BTS/MRT Media", icon: "transit", description: "Skytrain and metro advertising" },
      { name: "Static Billboards", icon: "static", description: "Large format displays nationwide" },
      { name: "Airport Media", icon: "airport", description: "Suvarnabhumi and Don Mueang" },
      { name: "Mall Media", icon: "mall", description: "Central, The Mall, and Siam networks" },
      { name: "Tourism Areas", icon: "tourism", description: "Beach resort and tourist zone displays" },
    ],
    caseStudies: [
      { title: "Beverage Brand Summer Campaign", client: "Global Beverage Company", results: "58% sales increase in Bangkok" },
      { title: "Tourism Recovery Campaign", client: "National Tourism Board", results: "45% lift in booking intent" },
      { title: "E-commerce App Launch", client: "Regional E-commerce Platform", results: "1.2M new user registrations" },
    ],
    partners: ["Plan B Media", "Master Ad", "VGI Global Media", "Aqua Ad"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Grand Palace */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 4, top: 16 }, { left: 14, top: 30 }, { left: 24, top: 8 }, { left: 34, top: 54 },
            { left: 44, top: 20 }, { left: 54, top: 40 }, { left: 64, top: 14 }, { left: 74, top: 60 },
            { left: 84, top: 21 }, { left: 11, top: 65 }, { left: 21, top: 80 }, { left: 31, top: 74 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">{countryData.name}</span>
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
                    <div className="text-3xl md:text-4xl font-bold text-amber-300">{stat.value}</div>
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

            {/* Right Side - 3D Grand Palace */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Base Platform */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-gradient-to-t from-amber-800 to-amber-600 rounded-lg" />

                {/* Grand Palace Main Structure */}
                <motion.div
                  className="absolute bottom-14 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Main Building */}
                  <div className="relative w-48 h-28 bg-gradient-to-t from-amber-100 via-white to-amber-50 rounded-t">
                    {/* Ornate Windows */}
                    <div className="absolute top-4 left-4 right-4 grid grid-cols-5 gap-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-10 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          <div className="mt-1 mx-auto w-3/4 h-1 bg-amber-400/50 rounded" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Thai Pattern Band */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i}
                          className="inline-block w-4 h-full"
                          style={{ 
                            background: i % 2 === 0 ? 'rgba(217, 119, 6, 0.5)' : 'transparent',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Multi-Tiered Roof */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2">
                    {[
                      { w: 56, h: 12, offset: 0 },
                      { w: 48, h: 10, offset: 12 },
                      { w: 40, h: 9, offset: 22 },
                      { w: 32, h: 8, offset: 31 },
                    ].map((tier, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                          bottom: `${tier.offset}px`,
                          width: `${tier.w * 3.5}px`,
                          height: `${tier.h}px`,
                        }}
                        animate={{ 
                          boxShadow: [
                            '0 0 10px rgba(251, 191, 36, 0.3)',
                            '0 0 20px rgba(251, 191, 36, 0.5)',
                            '0 0 10px rgba(251, 191, 36, 0.3)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <div 
                          className="w-full h-full bg-gradient-to-b from-amber-500 via-yellow-400 to-amber-600"
                          style={{ clipPath: 'polygon(10% 100%, 50% 0%, 90% 100%)' }}
                        />
                        {/* Roof edge decorations */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-800" />
                      </motion.div>
                    ))}
                    
                    {/* Golden Spire */}
                    <motion.div
                      className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-20 bg-gradient-to-t from-amber-500 via-yellow-400 to-amber-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <motion.div
                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-300 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ boxShadow: '0 0 15px rgba(253, 224, 71, 0.8)' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Side Towers with Spires */}
                {[
                  { x: -90, delay: 0.6 },
                  { x: 90, delay: 0.7 },
                ].map((tower, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-14"
                    style={{ left: `calc(50% + ${tower.x}px)`, transform: 'translateX(-50%)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: tower.delay }}
                  >
                    <div className="w-12 h-20 bg-gradient-to-t from-amber-100 to-white rounded-t">
                      <div className="mt-2 mx-auto w-8 h-12 bg-amber-800/50 rounded-t-lg" />
                    </div>
                    <motion.div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-14 bg-gradient-to-t from-amber-500 to-yellow-400"
                      style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>
                ))}

                {/* Modern LED Screens Surrounding */}
                {[
                  { x: -140, y: 70, w: 24, h: 40, delay: 0.8 },
                  { x: 140, y: 70, w: 24, h: 40, delay: 0.9 },
                  { x: -110, y: 120, w: 30, h: 20, delay: 1.0 },
                  { x: 110, y: 120, w: 30, h: 20, delay: 1.1 },
                ].map((screen, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded"
                    style={{
                      left: `calc(50% + ${screen.x}px)`,
                      bottom: `${screen.y}px`,
                      width: `${screen.w}px`,
                      height: `${screen.h}px`,
                      background: `linear-gradient(${135 + i * 45}deg, #f59e0b, #8b5cf6, #ec4899)`,
                      boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)',
                      transform: 'translateX(-50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.7, 1, 0.7], scale: 1 }}
                    transition={{ 
                      opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                      scale: { delay: screen.delay },
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
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Tourist Reach</span>
                  </div>
                  <div className="text-lg font-bold text-amber-300">40M+/year</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Billboard Sites</span>
                  </div>
                  <div className="text-lg font-bold text-amber-300">4,200+</div>
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
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "India", flag: "🇮🇳", href: "/locations/india" },{ name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },{ name: "Japan", flag: "🇯🇵", href: "/locations/japan" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

      {/* FAQs */}
      <section className="py-16 md:py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in Thailand</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">{faqs.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />))}</motion.div></div></section>

    </div>
  )
}
