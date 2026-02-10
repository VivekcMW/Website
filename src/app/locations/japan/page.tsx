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
  train: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4 0h8a1 1 0 001-1V6a1 1 0 00-1-1H7a1 1 0 00-1 1v11a1 1 0 001 1zm-3 0a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  screen: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  airport: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  store: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
}

export default function JapanPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)

  const faqs = [
    {
      question: "What is DOOH advertising in Japan?",
      answer: "DOOH (Digital Out-of-Home) advertising in Japan uses high-tech digital screens in train stations, Shibuya Crossing, shopping districts, and urban centers to deliver dynamic, engaging ads with world-class display technology.",
    },
    {
      question: "Why invest in OOH advertising in Japan?",
      answer: "Japan's 126 million population, high urbanization, affluent consumers, and tech-savvy audience make it a premium OOH market. Iconic locations like Shibuya and Shinjuku offer unparalleled brand visibility.",
    },
    {
      question: "What types of OOH advertising are available in Japan?",
      answer: "Giant LED displays, train station digital networks (JR, Metro), wrapped trains, convenience store screens, shopping district billboards, airport advertising, and cutting-edge programmatic DOOH.",
    },
    {
      question: "How can I measure OOH campaign effectiveness in Japan?",
      answer: "Track impressions using train ridership data, mobile device IDs, Wi-Fi analytics, and real-time reporting through programmatic DOOH platforms like Moving Audiences.",
    },
    {
      question: "What are the key OOH markets in Japan?",
      answer: "Major markets include Tokyo (Shibuya, Shinjuku, Ginza), Osaka (Dotonbori, Umeda), Nagoya, Fukuoka, and Sapporo. Tokyo's train network reaches over 40 million daily passengers.",
    },
    {
      question: "How does Moving Walls help advertisers in Japan?",
      answer: "Moving Walls provides access to premium OOH inventory across Japan, with precise audience targeting, real-time analytics, and programmatic buying through our Moving Audiences platform.",
    },
  ]

  const countryData = {
    name: "Japan",
    description: "Japan's sophisticated advertising market and tech-savvy consumers make it ideal for innovative digital OOH campaigns in one of the world's most advanced markets.",
    stats: [
      { label: "Billboard Sites", value: "12,000+" },
      { label: "Digital Screens", value: "8,500+" },
      { label: "Monthly Reach", value: "95M+" },
      { label: "Major Cities", value: "50+" },
    ],
    majorCities: ["Tokyo", "Osaka", "Nagoya", "Yokohama", "Shibuya", "Shinjuku", "Kyoto", "Fukuoka"],
    mediaTypes: [
      { name: "Digital Billboards", icon: "digital", description: "Premium LED screens in urban centers" },
      { name: "Train Station Media", icon: "train", description: "JR and Metro station advertising" },
      { name: "Building Wraps", icon: "building", description: "Large-scale building facades" },
      { name: "Shibuya Screens", icon: "screen", description: "Iconic crossing digital displays" },
      { name: "Airport Media", icon: "airport", description: "Narita and Haneda networks" },
      { name: "Convenience Store", icon: "store", description: "In-store digital screens" },
    ],
    caseStudies: [
      { title: "Global Tech Launch", client: "International Tech Brand", results: "89% brand recognition in Tokyo" },
      { title: "Anime Collaboration", client: "Entertainment Company", results: "3.2M social media impressions" },
      { title: "Luxury Fashion Campaign", client: "European Fashion House", results: "56% lift in store visits" },
    ],
    partners: ["JR East Media", "Dentsu", "Hakuhodo", "Tokyo Metro Advertising"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Shibuya Crossing */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[
            { left: 5, top: 15 }, { left: 15, top: 28 }, { left: 25, top: 9 }, { left: 35, top: 55 },
            { left: 45, top: 17 }, { left: 55, top: 38 }, { left: 65, top: 13 }, { left: 75, top: 58 },
            { left: 85, top: 22 }, { left: 10, top: 66 }, { left: 20, top: 78 }, { left: 30, top: 70 },
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">{countryData.name}</span>
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
                    <div className="text-3xl md:text-4xl font-bold text-rose-300">{stat.value}</div>
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

            {/* Right Side - 3D Shibuya Crossing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[450px]">
                {/* Crossing Ground Pattern */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[100px]" style={{ transform: 'rotateX(60deg) translateX(-50%)' }}>
                  {/* Zebra Crossings */}
                  {[0, 1, 2, 3].map((dir) => (
                    <div
                      key={dir}
                      className="absolute left-1/2 top-1/2 w-16 h-32"
                      style={{ 
                        transform: `translate(-50%, -50%) rotate(${dir * 45}deg)`,
                      }}
                    >
                      {[...Array(8)].map((_, si) => (
                        <div key={si} className={`h-3 mb-0.5 ${si % 2 === 0 ? 'bg-white/30' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Buildings with LED Screens */}
                {[
                  { x: -100, y: 60, h: 140, w: 55, screens: 2, delay: 0.3 },
                  { x: -40, y: 70, h: 160, w: 65, screens: 3, delay: 0.4 },
                  { x: 40, y: 65, h: 150, w: 60, screens: 2, delay: 0.5 },
                  { x: 100, y: 75, h: 130, w: 50, screens: 2, delay: 0.6 },
                ].map((bldg, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ 
                      left: `calc(50% + ${bldg.x}px)`,
                      bottom: `${bldg.y}px`,
                      transform: 'translateX(-50%)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: bldg.delay }}
                  >
                    {/* Building Structure */}
                    <div 
                      className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 rounded-t relative"
                      style={{ width: `${bldg.w}px`, height: `${bldg.h}px` }}
                    >
                      {/* Window Grid */}
                      <div className="absolute inset-2 grid grid-cols-3 gap-0.5">
                        {[...Array(15)].map((_, wi) => (
                          <motion.div
                            key={wi}
                            className="bg-yellow-200/30 rounded-sm"
                            animate={{ opacity: [0.2, 0.6, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: wi * 0.1 + i * 0.2 }}
                          />
                        ))}
                      </div>
                      
                      {/* LED Screens */}
                      {[...Array(bldg.screens)].map((_, si) => (
                        <motion.div
                          key={si}
                          className="absolute rounded"
                          style={{
                            left: '50%',
                            top: `${15 + si * 35}%`,
                            transform: 'translateX(-50%)',
                            width: `${bldg.w - 10}px`,
                            height: '28px',
                            background: `linear-gradient(${90 + si * 45}deg, ${['#ec4899', '#8b5cf6', '#06b6d4', '#10b981'][i % 4]}, ${['#f97316', '#6366f1', '#14b8a6', '#84cc16'][(i + 1) % 4]})`,
                            boxShadow: `0 0 20px ${['rgba(236, 72, 153, 0.6)', 'rgba(139, 92, 246, 0.6)', 'rgba(6, 182, 212, 0.6)', 'rgba(16, 185, 129, 0.6)'][i % 4]}`,
                          }}
                          animate={{ 
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: si * 0.5 }}
                        >
                          {/* Japanese Text Placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[8px] font-bold text-white">広告</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Rooftop Neon Signs */}
                    <motion.div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold"
                      style={{ 
                        color: ['#ec4899', '#8b5cf6', '#06b6d4', '#f97316'][i % 4],
                        textShadow: `0 0 10px ${['#ec4899', '#8b5cf6', '#06b6d4', '#f97316'][i % 4]}`,
                      }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ネオン
                    </motion.div>
                  </motion.div>
                ))}

                {/* Pedestrians (represented as dots) */}
                {[...Array(12)].map((i, idx) => (
                  <motion.div
                    key={`ped-${idx}`}
                    className="absolute w-2 h-2 bg-white/60 rounded-full"
                    style={{
                      left: `${40 + (idx % 4) * 8}%`,
                      bottom: `${20 + Math.floor(idx / 4) * 5}%`,
                    }}
                    animate={{
                      x: [0, (idx % 2 === 0 ? 1 : -1) * 30, 0],
                      y: [0, (idx % 3) * 10, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 4 + (idx % 3),
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                ))}

                {/* Iconic Starbucks Building */}
                <motion.div
                  className="absolute bottom-[80px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-20 h-10 bg-gradient-to-t from-green-800 to-green-600 rounded-t">
                    <motion.div
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.8)' }}
                    />
                  </div>
                </motion.div>

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Daily Crossing</span>
                  </div>
                  <div className="text-lg font-bold text-rose-300">2.5M+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -left-4 top-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Digital Screens</span>
                  </div>
                  <div className="text-lg font-bold text-rose-300">8,500+</div>
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
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "India", flag: "🇮🇳", href: "/locations/india" },{ name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" },{ name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

      {/* FAQs */}
      <section className="py-16 md:py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs – OOH Advertising in Japan</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">{faqs.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />))}</motion.div></div></section>

    </div>
  )
}
