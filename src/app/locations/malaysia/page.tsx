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

// SVG Icons
const Icons = {
  billboard: (
    <svg className="w-12 h-12 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  location: (
    <svg className="w-6 h-6 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5 text-mw-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  eye: (
    <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  plus: (
    <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  minus: (
    <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  ),
}

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <motion.div variants={staggerItem} className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
    >
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

export default function MalaysiaPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0)
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false)

  const highVisibilityBillboards = [
    {
      name: "KL City Center",
      location: "JLN IMBI, Berjaya Time Square, Park Royal Hotel",
      reach: "132,145",
      impressions: "1,075,680",
      description: "A premier outdoor advertising billboard located in the bustling district of Kuala Lumpur.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    },
    {
      name: "Golden Triangle",
      location: "Bukit Bintang Golden Triangle KL",
      reach: "142,820",
      impressions: "1,000,000+",
      description: "A prime spot for outdoor advertising with high-traffic ensuring substantial reach.",
      image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
    },
    {
      name: "1 Utama",
      location: "LDP Highway - From Kepong, Petaling, Selangor",
      reach: "193,818",
      impressions: "1,034,280",
      description: "A prime outdoor advertising billboard in the heart of Petaling, Selangor.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    },
  ]

  const keyMarkets = [
    {
      city: "Kuala Lumpur",
      population: "1.9 million",
      description: "The capital and economic heart of Malaysia with iconic landmarks like the Petronas Twin Towers.",
      locations: [
        { name: "Bukit Bintang", desc: "Major shopping and entertainment district" },
        { name: "KL Sentral", desc: "Main transportation hub" },
        { name: "Federal Highway", desc: "One of the busiest highways" },
        { name: "Golden Triangle", desc: "Commercial and shopping hub" },
      ],
    },
    {
      city: "Penang",
      population: "1.8 million",
      description: "Known for its rich cultural heritage and booming tourism industry.",
      locations: [
        { name: "George Town", desc: "UNESCO World Heritage Site" },
        { name: "Gurney Drive", desc: "Popular seafront promenade" },
      ],
    },
    {
      city: "Johor Bahru",
      population: "1.7 million",
      description: "The southern gateway to Malaysia, rapidly growing city.",
      locations: [
        { name: "CIQ Complex", desc: "Main entry point from Singapore" },
        { name: "Legoland Malaysia", desc: "Major family attraction" },
      ],
    },
    {
      city: "Kota Kinabalu",
      population: "500,000",
      description: "The capital of Sabah, known for its natural attractions.",
      locations: [
        { name: "Jesselton Point", desc: "Main ferry terminal" },
        { name: "Imago Shopping Mall", desc: "Premier shopping destination" },
      ],
    },
  ]

  const faqs = [
    {
      question: "What is DOOH advertising?",
      answer: "DOOH (Digital Out-of-Home) uses digital screens in public spaces to deliver dynamic, engaging ads that can be updated in real time.",
    },
    {
      question: "Why invest in OOH advertising in Malaysia?",
      answer: "Malaysia's cities, diverse population, and growing economy make it ideal for impactful campaigns that reach commuters, shoppers, and travelers.",
    },
    {
      question: "What types of OOH advertising are available?",
      answer: "Billboards, transit ads (buses, taxis, trains), street furniture, malls, airports, and digital billboards in high-traffic areas.",
    },
    {
      question: "How can I measure campaign effectiveness?",
      answer: "Track impressions, engagement rates, conversions, and real-time insights via programmatic DOOH analytics.",
    },
    {
      question: "What are the benefits of DOOH advertising?",
      answer: "High visibility, dynamic content, precise audience targeting, and actionable performance data.",
    },
    {
      question: "How does Moving Walls help advertisers in Malaysia?",
      answer: "Our Moving Audiences platform enables precise targeting, real-time analytics, and seamless campaign execution across DOOH networks.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                OOH Advertising in Malaysia
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-xl md:text-2xl text-mw-blue-100 max-w-3xl mb-6">
                Ready to plan your next OOH advertising campaign in Malaysia?
              </motion.p>
              <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-lg text-mw-blue-200 max-w-4xl mb-10">
                Leverage the power of OOH advertising in Malaysia to reach a wider audience through strategic outdoor placements and high-impact visuals.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-mw-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-mw-blue-50 transition-colors"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hidden lg:block">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <p className="text-white/80 text-sm">Watch OOH Advertising in Malaysia</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-mw-blue-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">33.4M+</div>
              <div className="text-gray-600">Population</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">76%</div>
              <div className="text-gray-600">Urbanization Rate</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">1.9M</div>
              <div className="text-gray-600">KL Residents</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Key Markets</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Digital Billboard Advertising Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Digital Billboard Advertising Malaysia
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Malaysia&apos;s dynamic market offers a rich tapestry of advertising opportunities. The country&apos;s population of over 33.4 million people is predominantly urban, with major cities experiencing rapid growth.
                </p>
                <p className="mb-4">
                  The Klang Valley, which includes Kuala Lumpur and its surrounding areas, contributes significantly to the nation&apos;s GDP and is a prime area for advertising.
                </p>
                <p>
                  The urbanization rate in Malaysia is about 76%, reflecting a high concentration of people in cities where consumer spending is robust.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-mw-blue-50 to-mw-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Malaysia?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  {Icons.check}
                  <span className="text-gray-700">Strong consumer spending power driven by growing middle class</span>
                </li>
                <li className="flex items-start gap-3">
                  {Icons.check}
                  <span className="text-gray-700">Diverse population with mix of ethnicities and cultures</span>
                </li>
                <li className="flex items-start gap-3">
                  {Icons.check}
                  <span className="text-gray-700">High urban concentration ideal for OOH campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  {Icons.check}
                  <span className="text-gray-700">Increasing disposable incomes</span>
                </li>
                <li className="flex items-start gap-3">
                  {Icons.check}
                  <span className="text-gray-700">Well-developed transportation network (LRT, MRT, Monorail)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Visibility Billboards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              High-Visibility Billboards in Malaysia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium outdoor advertising locations with maximum reach and impressions
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {highVisibilityBillboards.map((billboard) => (
              <motion.div key={billboard.name} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={billboard.image} 
                    alt={billboard.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-mw-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Premium Location
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{billboard.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{billboard.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{billboard.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="flex items-center gap-2 text-mw-blue-600 mb-1">
                        {Icons.users}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{billboard.reach}</div>
                      <div className="text-xs text-gray-500">Reach</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-mw-blue-600 mb-1">
                        {Icons.eye}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{billboard.impressions}</div>
                      <div className="text-xs text-gray-500">Impressions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Markets */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Markets for Outdoor Billboard Advertising
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-8">
            {keyMarkets.map((market, index) => (
              <motion.div key={market.city} variants={staggerItem} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-mw-blue-100 flex items-center justify-center text-xl font-bold text-mw-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{market.city}</h3>
                    <p className="text-mw-blue-600 font-medium">Population: {market.population}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{market.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {market.locations.map((loc) => (
                    <div key={loc.name} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      {Icons.location}
                      <div>
                        <div className="font-semibold text-gray-900">{loc.name}</div>
                        <div className="text-sm text-gray-600">{loc.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Story CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-mw-blue-900 to-mw-blue-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                  CASE STUDY
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our DOOH Success Stories in Malaysia
                </h2>
                <p className="text-mw-blue-100 mb-6">
                  Moving Walls is a global leader in AdTech and MediaTech, providing enterprise software solutions for Out-of-Home advertising.
                </p>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center gap-2 bg-white text-mw-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-mw-blue-50 transition-colors"
                >
                  View Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Explore Other Markets */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Markets
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover OOH advertising opportunities across Asia Pacific
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Singapore", flag: "🇸🇬", href: "/locations/singapore" },
              { name: "Indonesia", flag: "🇮🇩", href: "/locations/indonesia" },
              { name: "India", flag: "🇮🇳", href: "/locations/india" },
              { name: "Philippines", flag: "🇵🇭", href: "/locations/philippines" },
              { name: "Japan", flag: "🇯🇵", href: "/locations/japan" },
              { name: "Australia", flag: "🇦🇺", href: "/locations/australia" },
              { name: "Sri Lanka", flag: "🇱🇰", href: "/locations/sri-lanka" },
              { name: "Thailand", flag: "🇹🇭", href: "/locations/thailand" },
            ].map((country) => (
              <motion.div key={country.name} variants={staggerItem}>
                <Link
                  href={country.href}
                  className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-mw-blue-400 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-mw-blue-600 transition-colors">
                        {country.name}
                      </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FAQs – Digital Out-of-Home Advertising in Malaysia
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-mw-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Our Malaysia Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get in touch with our local experts in Kuala Lumpur. We&apos;re here to help you plan your next DOOH campaign.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-mw-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start Your Campaign?</h3>
                  <p className="text-gray-600 mb-6">Fill out our contact form and our Malaysia team will get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Open Contact Form
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsContactFormOpen(false)}
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-mw-blue-600 to-mw-blue-700">
              <h3 className="text-lg font-semibold text-white">Contact Our Malaysia Team</h3>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Form iframe */}
            <div className="h-[70vh]">
              <iframe
                src="https://forms.zoho.com/movingwallsholdingpteltd/form/MalaysiaContact"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 'none' }}
                title="Malaysia Contact Form"
                allow="geolocation"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
