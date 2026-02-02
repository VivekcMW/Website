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
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{countryData.name}</h1><p className="text-mw-blue-200 text-lg">Billboard & OOH Advertising Network</p></motion.div>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-mw-blue-100 max-w-3xl mb-10">{countryData.description}</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-mw-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-mw-blue-50 transition-colors">Contact Sales<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
          </motion.div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="py-12 bg-gray-50 border-b border-gray-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{countryData.stats.map((stat) => (<motion.div key={stat.label} variants={staggerItem} className="text-center"><div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.value}</div><div className="text-gray-600">{stat.label}</div></motion.div>))}</div></div></motion.section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Media Types</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive OOH advertising solutions across {countryData.name}</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{countryData.mediaTypes.map((media) => (<motion.div key={media.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"><div className="mb-4">{MediaIcons[media.icon]}</div><h3 className="text-xl font-semibold text-gray-900 mb-2">{media.name}</h3><p className="text-gray-600">{media.description}</p></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2><p className="text-lg text-gray-600">Major cities with billboard inventory</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">{countryData.majorCities.map((city) => (<motion.div key={city} variants={staggerItem} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2"><svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="font-medium text-gray-900">{city}</span></motion.div>))}</motion.div></div></section>

      <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">{countryData.caseStudies.map((study) => (<motion.div key={study.title} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"><div className="h-48 bg-gradient-to-br from-mw-blue-100 to-mw-blue-200 flex items-center justify-center"><svg className="w-16 h-16 text-mw-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><div className="p-6"><h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3><p className="text-sm text-gray-500 mb-3">{study.client}</p><div className="flex items-center gap-2 text-mw-blue-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg><span className="font-medium">{study.results}</span></div></div></motion.div>))}</motion.div></div></section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Partners</h2></div><div className="flex flex-wrap justify-center gap-6">{countryData.partners.map((partner) => (<div key={partner} className="bg-white border border-gray-200 rounded-lg px-8 py-4"><span className="font-medium text-gray-700">{partner}</span></div>))}</div></div></motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Markets</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover OOH advertising opportunities across Asia Pacific</p></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{ name: "Malaysia", flag: "🇲🇾", href: "/locations/malaysia" },{ name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },{ name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },{ name: "India", flag: "🇮🇳", href: "/locations/india" },{ name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },{ name: "Japan", flag: "🇯🇵", href: "/locations/japan" },{ name: "Australia", flag: "🇦🇺", href: "/locations/australia" },{ name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" }].map((country) => (<motion.div key={country.name} variants={staggerItem}><Link href={country.href} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"><div className="flex items-center gap-4"><span className="text-4xl">{country.flag}</span><div><h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">{country.name}</h3><p className="text-sm text-gray-500">View billboards →</p></div></div></Link></motion.div>))}</motion.div></div></section>

    </div>
  )
}
