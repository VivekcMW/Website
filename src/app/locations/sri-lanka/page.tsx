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
  bus: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8m-8 4h2m4 0h2M6 19a2 2 0 01-2-2V7a4 4 0 014-4h8a4 4 0 014 4v10a2 2 0 01-2 2m-12 0h12m-12 0a2 2 0 01-2-2m14 2a2 2 0 002-2m-14 4h2m8 0h2" />
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

export default function SriLankaPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in Sri Lanka?",
      answer: "DOOH (Digital Out-of-Home) advertising in Sri Lanka uses digital screens in Colombo, shopping malls, and urban centers to deliver dynamic ads that can be updated in real time across the island's growing digital network.",
    },
    {
      question: "Why invest in OOH advertising in Sri Lanka?",
      answer: "Sri Lanka's 22 million population, growing economy, and increasing urbanization create excellent OOH opportunities. Colombo's development and tourism recovery offer strong advertising potential.",
    },
    {
      question: "What types of OOH advertising are available in Sri Lanka?",
      answer: "Static and digital billboards, street furniture, mall advertising, airport displays, bus shelter ads, highway billboards, and emerging programmatic DOOH in Colombo and key cities.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in Sri Lanka?",
      answer: "Track impressions using traffic data, mobile attribution, engagement analytics, and reporting through our Moving Audiences platform for campaign optimization.",
    },
    {
      question: "What are the key OOH markets in Sri Lanka?",
      answer: "Major markets include Colombo (including CBD and suburbs), Kandy, Galle, Negombo, and growing urban centers. Colombo Fort and Galle Road offer premium billboard locations.",
    },
    {
      question: "How does Moving Walls help advertisers in Sri Lanka?",
      answer: "Moving Walls provides access to 1,800+ billboard sites across Sri Lanka, with audience targeting, analytics, and programmatic capabilities through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Sri Lanka",
    description: "Sri Lanka's growing economy and strategic location make it an emerging hub for OOH advertising, with increasing digital adoption across major urban centers.",
    stats: [
      { label: "Billboard Sites", value: "1,800+" },
      { label: "Digital Screens", value: "350+" },
      { label: "Monthly Reach", value: "8M+" },
      { label: "Major Cities", value: "10+" },
    ],
    majorCities: ["Colombo", "Kandy", "Galle", "Negombo", "Jaffna", "Matara", "Kurunegala", "Batticaloa"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "LED screens in Colombo and key cities" },
      { name: "Static Billboards", icon: "static", description: "Large format displays nationwide" },
      { name: "Transit Media", icon: "bus", description: "Bus and railway advertising" },
      { name: "Airport Media", icon: "airport", description: "Bandaranaike International Airport" },
      { name: "Mall Media", icon: "mall", description: "Shopping center networks" },
      { name: "Highway Media", icon: "highway", description: "Expressway and major road displays" },
    ],
    caseStudies: [
      { title: "Telecom Brand Refresh", client: "Major Sri Lankan Telco", results: "54% brand recall improvement" },
      { title: "Banking Campaign", client: "Leading Commercial Bank", results: "42% increase in new accounts" },
      { title: "Tourism Promotion", client: "Tourism Development Board", results: "38% lift in tourist arrivals" },
    ],
    partners: ["Grant Advertising", "MullenLowe Sri Lanka", "Phoenix Ogilvy", "Leo Burnett"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Lotus Tower */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 9, top: 13 }, { left: 19, top: 33 }, { left: 29, top: 5 }, { left: 39, top: 53 },
            { left: 49, top: 15 }, { left: 59, top: 43 }, { left: 69, top: 10 }, { left: 79, top: 63 },
            { left: 89, top: 25 }, { left: 14, top: 69 }, { left: 24, top: 83 }, { left: 34, top: 73 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">{countryData.name}</span>
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
                    <div className="text-3xl md:text-4xl font-bold text-fuchsia-300">{stat.value}</div>
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

            {/* Right Side - 3D Lotus Tower */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Base Platform */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-6 bg-gradient-to-t from-gray-400 to-gray-200 rounded-lg" />

                {/* Lotus Tower Structure */}
                <motion.div
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Tower Stem/Core */}
                  <div className="relative w-8 h-56 bg-gradient-to-t from-purple-700 via-fuchsia-600 to-pink-500 rounded-full mx-auto">
                    {/* Observation Deck Rings */}
                    {[0.3, 0.5, 0.65].map((pos, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          bottom: `${pos * 100}%`,
                          width: `${50 + i * 10}px`,
                          height: '12px',
                          background: 'linear-gradient(to right, #d946ef, #a855f7, #ec4899)',
                          boxShadow: '0 0 15px rgba(217, 70, 239, 0.5)',
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                    
                    {/* Lotus Petals (Top) */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-end">
                      {[-2, -1, 0, 1, 2].map((idx) => (
                        <motion.div
                          key={idx}
                          className="w-8 h-20 bg-gradient-to-t from-fuchsia-500 via-pink-400 to-pink-300 rounded-t-full mx-0.5"
                          style={{
                            transform: `rotate(${idx * 15}deg) translateY(${Math.abs(idx) * 8}px)`,
                            boxShadow: '0 0 10px rgba(236, 72, 153, 0.4)',
                          }}
                          animate={{
                            opacity: [0.8, 1, 0.8],
                            scale: [1, 1.02, 1],
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: (idx + 2) * 0.2 }}
                        />
                      ))}
                    </div>
                    
                    {/* Antenna/Spire */}
                    <motion.div
                      className="absolute -top-32 left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-t from-fuchsia-400 to-pink-300"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <motion.div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-300 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ boxShadow: '0 0 20px rgba(244, 114, 182, 0.8)' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Data Broadcast Waves */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="absolute left-1/2 -translate-x-1/2 rounded-full border border-fuchsia-400/30"
                    style={{
                      bottom: '50%',
                      width: `${80 + i * 50}px`,
                      height: `${80 + i * 50}px`,
                    }}
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.5, 0.2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  />
                ))}

                {/* Colombo Skyline */}
                {[
                  { x: -100, y: 40, h: 50, w: 18, delay: 0.6 },
                  { x: -75, y: 45, h: 40, w: 14, delay: 0.7 },
                  { x: 75, y: 42, h: 45, w: 16, delay: 0.8 },
                  { x: 100, y: 48, h: 35, w: 14, delay: 0.9 },
                ].map((bldg, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ 
                      left: `calc(50% + ${bldg.x}px)`,
                      bottom: `${bldg.y}px`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: bldg.delay }}
                  >
                    <div 
                      className="bg-gradient-to-t from-gray-700 to-gray-500 rounded-t"
                      style={{ width: `${bldg.w}px`, height: `${bldg.h}px` }}
                    >
                      <div className="grid grid-cols-2 gap-0.5 p-0.5 h-full">
                        {[...Array(6)].map((_, wi) => (
                          <motion.div
                            key={wi}
                            className="bg-yellow-200/30 rounded-sm"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: wi * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Broadcast Reach</span>
                  </div>
                  <div className="text-lg font-bold text-fuchsia-300">8M+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Billboard Sites</span>
                  </div>
                  <div className="text-lg font-bold text-fuchsia-300">1,800+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="py-12 bg-gray-50 border-b border-gray-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{countryData.stats.map((stat) => (<motion.div key={stat.label} variants={staggerItem} className="text-center"><div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.value}</div><div className="text-gray-600">{stat.label}</div></motion.div>))}</div></div></motion.section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Media Types</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive OOH advertising solutions across {countryData.name}</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{countryData.mediaTypes.map((media) => (<motion.div key={media.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"><div className="mb-4">{MediaIcons[media.icon]}</div><h3 className="text-xl font-semibold text-gray-900 mb-2">{media.name}</h3><p className="text-gray-600">{media.description}</p></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2><p className="text-lg text-gray-600">Major cities with billboard inventory</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">{countryData.majorCities.map((city) => (<motion.div key={city} variants={staggerItem} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2"><svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="font-medium text-gray-900">{city}</span></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">{countryData.caseStudies.map((study) => (<motion.div key={study.title} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"><div className="h-48 bg-gradient-to-br from-mw-blue-100 to-mw-blue-200 flex items-center justify-center"><svg className="w-16 h-16 text-mw-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><div className="p-6"><h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3><p className="text-sm text-gray-500 mb-3">{study.client}</p><div className="flex items-center gap-2 text-mw-blue-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg><span className="font-medium">{study.results}</span></div></div></motion.div>))}</motion.div></div></section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Partners</h2></div><div className="flex flex-wrap justify-center gap-6">{countryData.partners.map((partner) => (<div key={partner} className="bg-white border border-gray-200 rounded-lg px-8 py-4"><span className="font-medium text-gray-700">{partner}</span></div>))}</div></div></motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "India", flag: "🇮🇳", href: "/locations/india" },{ name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },{ name: "Japan", flag: "🇯🇵", href: "/locations/japan" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

      {/* FAQs */}
      <section className="py-16 md:py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in Sri Lanka</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">{faqs.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />))}</motion.div></div></section>

    </div>
  )
}
