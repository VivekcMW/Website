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
  mall: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  airport: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  highway: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
}

export default function PhilippinesPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in the Philippines?",
      answer: "DOOH (Digital Out-of-Home) advertising in the Philippines uses digital screens in malls, EDSA, airports, and urban centers to deliver dynamic ads that can be updated in real time across Metro Manila and key cities.",
    },
    {
      question: "Why invest in OOH advertising in the Philippines?",
      answer: "The Philippines' 115+ million population, young demographics, and growing economy make it an attractive OOH market. High traffic along EDSA and mall culture create excellent advertising opportunities.",
    },
    {
      question: "What types of OOH advertising are available in the Philippines?",
      answer: "LED billboards, EDSA highway displays, MRT/LRT station ads, jeepney advertising, mall digital networks, airport displays, and programmatic DOOH across Metro Manila and provincial cities.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in the Philippines?",
      answer: "Track impressions using MMDA traffic data, mobile attribution, engagement analytics, and real-time reporting through programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the key OOH markets in the Philippines?",
      answer: "Major markets include Metro Manila (especially EDSA corridor), Cebu, Davao, Clark, and emerging regional hubs. The SM and Ayala mall networks offer premium indoor advertising.",
    },
    {
      question: "How does Moving Walls help advertisers in the Philippines?",
      answer: "Moving Walls provides access to 3,500+ billboard sites across the Philippines, with precise audience targeting, real-time analytics, and programmatic buying through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Philippines",
    description: "The Philippines' vibrant urban centers and growing middle class create excellent opportunities for impactful OOH advertising campaigns across the archipelago.",
    stats: [
      { label: "Billboard Sites", value: "3,500+" },
      { label: "Digital Screens", value: "1,200+" },
      { label: "Monthly Reach", value: "45M+" },
      { label: "Major Cities", value: "20+" },
    ],
    majorCities: ["Metro Manila", "Cebu City", "Davao", "Quezon City", "Makati", "BGC", "Clark", "Iloilo"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "LED screens in prime Metro Manila locations" },
      { name: "Static Billboards", icon: "static", description: "Large format displays across cities" },
      { name: "Transit Media", icon: "transit", description: "MRT, LRT, and bus advertising" },
      { name: "Mall Media", icon: "mall", description: "SM, Ayala, and Robinsons networks" },
      { name: "Airport Media", icon: "airport", description: "NAIA and regional airports" },
      { name: "EDSA Billboards", icon: "highway", description: "Premium highway corridor displays" },
    ],
    caseStudies: [
      { title: "Telco Network Launch", client: "Major Philippine Telco", results: "62% brand awareness growth" },
      { title: "Retail Chain Campaign", client: "National Retail Brand", results: "38% increase in foot traffic" },
      { title: "Banking App Promotion", client: "Digital Bank", results: "850K new app downloads" },
    ],
    partners: ["United Neon", "Dooh PH", "Mediascape", "AdReach"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Jeepney Fleet */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 7, top: 12 }, { left: 18, top: 32 }, { left: 28, top: 8 }, { left: 38, top: 52 },
            { left: 48, top: 18 }, { left: 58, top: 42 }, { left: 68, top: 14 }, { left: 78, top: 62 },
            { left: 88, top: 26 }, { left: 13, top: 68 }, { left: 23, top: 82 }, { left: 33, top: 72 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400">{countryData.name}</span>
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
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">{stat.value}</div>
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

            {/* Right Side - 3D Jeepney Fleet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Road/Ground */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[350px] h-3 bg-gray-600 rounded-full transform skewX-12">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-yellow-400/50" />
                </div>

                {/* Lead Jeepney - Front and Center */}
                <motion.div
                  className="absolute bottom-16 left-1/2 -translate-x-1/2"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Jeepney Body */}
                  <div className="relative w-36 h-24 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-lg">
                    {/* Chrome Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-300 via-white to-gray-300" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-400" />
                    
                    {/* Windows */}
                    <div className="absolute top-4 left-2 right-2 flex gap-1">
                      {[...Array(5)].map((_, wi) => (
                        <div key={wi} className="flex-1 h-6 bg-blue-200/80 rounded border border-gray-400" />
                      ))}
                    </div>
                    
                    {/* Digital Billboard on Roof */}
                    <motion.div
                      className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded border-2 border-gray-300"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                    >
                      <div className="absolute inset-1 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">AD SPACE</span>
                      </div>
                    </motion.div>
                    
                    {/* Headlights */}
                    <motion.div
                      className="absolute -left-1 top-10 w-3 h-3 bg-yellow-300 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ boxShadow: '0 0 10px rgba(253, 224, 71, 0.8)' }}
                    />
                    <motion.div
                      className="absolute -right-1 top-10 w-3 h-3 bg-yellow-300 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ boxShadow: '0 0 10px rgba(253, 224, 71, 0.8)' }}
                    />
                    
                    {/* Wheels */}
                    <motion.div
                      className="absolute -bottom-3 left-3 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-400"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute inset-1 bg-gray-600 rounded-full" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-3 right-3 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-400"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute inset-1 bg-gray-600 rounded-full" />
                    </motion.div>
                    
                    {/* Decorative Text */}
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-[8px] font-bold text-white drop-shadow-lg">MANILA</span>
                    </div>
                  </div>
                </motion.div>

                {/* Supporting Jeepneys in Formation */}
                {[
                  { x: -100, y: 50, scale: 0.75, delay: 0.3, color: 'from-blue-500 via-cyan-400 to-teal-500' },
                  { x: 100, y: 50, scale: 0.75, delay: 0.5, color: 'from-pink-500 via-rose-400 to-red-500' },
                  { x: -60, y: 80, scale: 0.6, delay: 0.7, color: 'from-orange-500 via-amber-400 to-yellow-500' },
                  { x: 60, y: 80, scale: 0.6, delay: 0.9, color: 'from-purple-500 via-violet-400 to-indigo-500' },
                ].map((jeep, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-16"
                    style={{ 
                      left: `calc(50% + ${jeep.x}px)`,
                      bottom: `${jeep.y}px`,
                      transform: `scale(${jeep.scale})`,
                    }}
                    initial={{ opacity: 0, x: jeep.x > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: jeep.delay }}
                  >
                    <motion.div
                      animate={{ x: [-3, 3, -3] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className={`relative w-28 h-18 bg-gradient-to-r ${jeep.color} rounded-lg`}>
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gray-300 via-white to-gray-300" />
                        <div className="absolute top-3 left-1.5 right-1.5 flex gap-0.5">
                          {[...Array(4)].map((_, wi) => (
                            <div key={wi} className="flex-1 h-4 bg-blue-200/70 rounded" />
                          ))}
                        </div>
                        {/* Mini Billboard */}
                        <motion.div
                          className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        {/* Wheels */}
                        <motion.div
                          className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Data Particles Trail */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={`trail-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${25 + i * 7}%`,
                      bottom: '20%',
                      width: '4px',
                      height: '4px',
                      background: ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6'][i % 4],
                      boxShadow: `0 0 8px ${['#ef4444', '#f59e0b', '#22c55e', '#3b82f6'][i % 4]}`,
                    }}
                    animate={{
                      x: [-10, -50],
                      opacity: [1, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
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
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">EDSA Coverage</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-300">24/7 Live</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Monthly Reach</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-300">45M+</div>
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
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "India", flag: "🇮🇳", href: "/locations/india" },{ name: "Japan", flag: "🇯🇵", href: "/locations/japan" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" },{ name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

      {/* FAQs */}
      <section className="py-16 md:py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in the Philippines</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">{faqs.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />))}</motion.div></div></section>

    </div>
  )
}
