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

export default function IndonesiaPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in Indonesia?",
      answer: "DOOH (Digital Out-of-Home) advertising in Indonesia uses digital screens in malls, toll roads, airports, and urban centers across the archipelago to deliver dynamic, engaging ads that can be updated in real time.",
    },
    {
      question: "Why invest in OOH advertising in Indonesia?",
      answer: "Indonesia's 270+ million population, growing middle class, and rapid urbanization make it one of Southeast Asia's most attractive OOH markets. Reach diverse audiences in Jakarta, Surabaya, Bandung, and emerging cities.",
    },
    {
      question: "What types of OOH advertising are available in Indonesia?",
      answer: "Large format billboards, LED screens, toll road advertising, TransJakarta bus ads, airport displays, mall digital networks, and programmatic DOOH across major Indonesian cities.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in Indonesia?",
      answer: "Track impressions using traffic data, mobile attribution, engagement analytics, and real-time reporting through programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the key OOH markets in Indonesia?",
      answer: "Major markets include Jakarta (Greater Jakarta area), Surabaya, Bandung, Medan, Semarang, and Makassar. The Jabodetabek region offers the highest concentration of premium inventory.",
    },
    {
      question: "How does Moving Walls help advertisers in Indonesia?",
      answer: "Moving Walls provides access to 8,000+ billboard sites across Indonesia, with precise audience targeting, real-time analytics, and programmatic buying through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Indonesia",
    description: "Indonesia's vast archipelago and rapidly growing economy present massive opportunities for OOH advertising across diverse urban and regional markets.",
    stats: [
      { label: "Billboard Sites", value: "8,000+" },
      { label: "Digital Screens", value: "2,500+" },
      { label: "Monthly Reach", value: "85M+" },
      { label: "Major Cities", value: "35+" },
    ],
    majorCities: ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Bali", "Yogyakarta"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "LED screens in major metropolitan areas" },
      { name: "Static Billboards", icon: "static", description: "Large format displays across cities" },
      { name: "Transit Media", icon: "transit", description: "Bus, TransJakarta, and MRT advertising" },
      { name: "Mall Media", icon: "mall", description: "Shopping center networks nationwide" },
      { name: "Airport Media", icon: "airport", description: "International and domestic terminals" },
      { name: "Highway Media", icon: "highway", description: "Toll road and expressway displays" },
    ],
    caseStudies: [
      { title: "E-commerce Giant Campaign", client: "Leading Marketplace", results: "67% brand recall increase" },
      { title: "FMCG Product Launch", client: "Global Consumer Brand", results: "42% sales lift in target regions" },
      { title: "Banking Digital Campaign", client: "Major Indonesian Bank", results: "55% increase in app registrations" },
    ],
    partners: ["PT Mahaka Media", "MNC Media", "Elang Mahkota", "Dentsu X"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Monas Monument */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 7, top: 15 }, { left: 17, top: 30 }, { left: 27, top: 8 }, { left: 37, top: 50 },
            { left: 47, top: 20 }, { left: 57, top: 40 }, { left: 67, top: 10 }, { left: 77, top: 60 },
            { left: 87, top: 25 }, { left: 12, top: 65 }, { left: 22, top: 80 }, { left: 32, top: 70 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">{countryData.name}</span>
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

            {/* Right Side - 3D Monas Monument */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Base Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-20 bg-gradient-to-t from-yellow-500/20 to-transparent blur-2xl" />
                
                {/* Monas Monument */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  {/* Base Platform */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  
                  {/* Main Obelisk */}
                  <motion.div
                    className="relative w-8 h-56 md:h-64 mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Lower Section */}
                    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-500 to-gray-400" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 85% 0%, 15% 0%)' }} />
                    
                    {/* Middle Section */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-6 h-32 bg-gradient-to-t from-gray-400 to-gray-300" />
                    
                    {/* Upper Taper */}
                    <div className="absolute bottom-52 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-gray-300 to-white" style={{ clipPath: 'polygon(20% 100%, 80% 100%, 50% 0%)' }} />
                    
                    {/* Golden Flame */}
                    <motion.div
                      className="absolute -top-6 left-1/2 -translate-x-1/2"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-6 h-10 bg-gradient-to-t from-yellow-500 via-yellow-400 to-yellow-200 rounded-full"
                        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', boxShadow: '0 0 30px rgba(234, 179, 8, 0.8)' }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-yellow-300 rounded-full blur-md"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Orbital Billboard Rings */}
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute left-1/2 bottom-1/3 -translate-x-1/2"
                    style={{
                      width: `${180 + ring * 60}px`,
                      height: `${60 + ring * 20}px`,
                      transform: `translateX(-50%) rotateX(70deg) rotateZ(${ring * 30}deg)`,
                    }}
                    animate={{ rotateZ: [ring * 30, ring * 30 + 360] }}
                    transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 border border-cyan-400/30 rounded-full" />
                    {/* Orbiting billboards */}
                    {[0, 90, 180, 270].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-8 h-6 bg-gradient-to-br from-red-500 to-yellow-500 rounded"
                        style={{
                          left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                          top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)',
                        }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </motion.div>
                ))}

                {/* Surrounding City Buildings */}
                {[
                  { x: -100, y: 50, h: 40, delay: 0.5 },
                  { x: -80, y: 70, h: 55, delay: 0.6 },
                  { x: 80, y: 60, h: 50, delay: 0.7 },
                  { x: 100, y: 80, h: 35, delay: 0.8 },
                  { x: -60, y: 100, h: 30, delay: 0.9 },
                  { x: 70, y: 95, h: 45, delay: 1.0 },
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
                      className="bg-gradient-to-t from-blue-800 to-blue-600 rounded-t"
                      style={{ width: '20px', height: `${bldg.h}px` }}
                    >
                      <div className="grid grid-cols-2 gap-0.5 p-1">
                        {[...Array(6)].map((_, wi) => (
                          <motion.div
                            key={wi}
                            className="w-1.5 h-1.5 bg-yellow-200/50"
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
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
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Archipelago</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-300">17K+ Islands</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Population</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-300">270M+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countryData.stats.map((stat) => (<motion.div key={stat.label} variants={staggerItem} className="text-center"><div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.value}</div><div className="text-gray-600">{stat.label}</div></motion.div>))}
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Media Types</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive OOH advertising solutions across {countryData.name}</p></motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.mediaTypes.map((media) => (<motion.div key={media.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"><div className="mb-4">{MediaIcons[media.icon]}</div><h3 className="text-xl font-semibold text-gray-900 mb-2">{media.name}</h3><p className="text-gray-600">{media.description}</p></motion.div>))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2><p className="text-lg text-gray-600">Major cities with billboard inventory</p></motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">
            {countryData.majorCities.map((city) => (<motion.div key={city} variants={staggerItem} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2"><svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="font-medium text-gray-900">{city}</span></motion.div>))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2></motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countryData.caseStudies.map((study) => (<motion.div key={study.title} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"><div className="h-48 bg-gradient-to-br from-mw-blue-100 to-mw-blue-200 flex items-center justify-center"><svg className="w-16 h-16 text-mw-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><div className="p-6"><h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3><p className="text-sm text-gray-500 mb-3">{study.client}</p><div className="flex items-center gap-2 text-mw-blue-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg><span className="font-medium">{study.results}</span></div></div></motion.div>))}
          </motion.div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Partners</h2></div>
          <div className="flex flex-wrap justify-center gap-6">{countryData.partners.map((partner) => (<div key={partner} className="bg-white border border-gray-200 rounded-lg px-8 py-4"><span className="font-medium text-gray-700">{partner}</span></div>))}</div>
        </div>
      </motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },
              { name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in Indonesia</h2>
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
