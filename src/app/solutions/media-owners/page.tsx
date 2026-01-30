'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import TestimonialSection from '@/components/TestimonialSection'

// CDN Logo URLs for Trust Bar
const trustedBrands = [
  { name: 'Clear Channel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Clear_Channel_Outdoor_logo.svg/200px-Clear_Channel_Outdoor_logo.svg.png' },
  { name: 'JCDecaux', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/JCDecaux_logo.svg/200px-JCDecaux_logo.svg.png' },
  { name: 'Lamar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lamar_Advertising_Company_logo.svg/200px-Lamar_Advertising_Company_logo.svg.png' },
  { name: 'Outfront', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Outfront_Media_logo.svg/200px-Outfront_Media_logo.svg.png' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Adobe_Acrobat_DC_logo_2020.svg' },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Zoom', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg' },
  { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Platform tour data
const platformTabs = [
  {
    id: 'inventory',
    title: 'List Inventory',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    headline: 'Showcase Your Assets Globally',
    description: 'List your entire inventory on our marketplace and reach thousands of advertisers and agencies worldwide.',
    features: ['Bulk inventory upload', 'Rich media specs', 'Geo-tagged locations', 'Real-time availability'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
  },
  {
    id: 'pricing',
    title: 'Dynamic Pricing',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Maximize Revenue with Smart Pricing',
    description: 'Set floor prices, enable dynamic pricing, and let our AI optimize rates based on demand and seasonality.',
    features: ['Floor price control', 'Demand-based pricing', 'Seasonal adjustments', 'Premium time slots'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
  },
  {
    id: 'bookings',
    title: 'Manage Bookings',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    headline: 'Streamlined Booking Management',
    description: 'Automate the entire booking workflow from inquiry to confirmation with smart scheduling tools.',
    features: ['Automated approvals', 'Conflict detection', 'Campaign scheduling', 'Client portal'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    id: 'revenue',
    title: 'Track Revenue',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    headline: 'Real-Time Revenue Insights',
    description: 'Track bookings, revenue, and occupancy rates in real-time. Get paid faster with automated invoicing.',
    features: ['Live dashboards', 'Revenue forecasting', 'Automated invoicing', 'Payment tracking'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 'analytics',
    title: 'Audience Analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    headline: 'Prove Your Value with Data',
    description: 'Provide advertisers with impression data, audience demographics, and campaign performance metrics.',
    features: ['Impression counting', 'Audience demographics', 'Proof of play', 'Performance reports'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
  }
]

// Use case tabs data
const useCaseTabs = [
  {
    id: 'billboards',
    title: 'Billboard Operators',
    description: 'Maximize billboard inventory value with programmatic access and AI-powered demand generation.',
    benefits: ['Fill unsold inventory', 'Premium pricing optimization', 'National advertiser access', 'Automated operations'],
    metrics: { value: '35%', label: 'Revenue Increase' },
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&h=350&fit=crop'
  },
  {
    id: 'transit',
    title: 'Transit Authorities',
    description: 'Monetize transit assets with digital advertising solutions that enhance passenger experience.',
    benefits: ['Station displays', 'Vehicle wraps', 'Digital screens', 'Integrated campaigns'],
    metrics: { value: '50%', label: 'Occupancy Rate' },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=350&fit=crop'
  },
  {
    id: 'street',
    title: 'Street Furniture',
    description: 'Connect bus shelters, kiosks, and urban furniture to premium advertising demand.',
    benefits: ['Urban network monetization', 'Smart city integration', 'Contextual targeting', 'High-traffic locations'],
    metrics: { value: '2x', label: 'CPM Growth' },
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=350&fit=crop'
  },
  {
    id: 'dooh',
    title: 'DOOH Networks',
    description: 'Scale your digital screen network with programmatic demand and real-time content management.',
    benefits: ['Programmatic SSP', 'Content management', 'Real-time bidding', 'Network analytics'],
    metrics: { value: '80%', label: 'Fill Rate' },
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop'
  },
  {
    id: 'placebased',
    title: 'Place-Based Media',
    description: 'Unlock advertising revenue from retail, hospitality, healthcare, and entertainment venues.',
    benefits: ['Venue monetization', 'Audience measurement', 'Contextual campaigns', 'Footfall attribution'],
    metrics: { value: '$5M+', label: 'Monthly Revenue' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop'
  }
]

// Features data
const features = [
  {
    title: 'Global Marketplace',
    description: 'Connect your inventory to thousands of advertisers and agencies actively looking for OOH placements.',
    icon: '🌐',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Programmatic SSP',
    description: 'Enable real-time bidding on your digital inventory with our integrated supply-side platform.',
    icon: '⚡',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Smart Pricing Engine',
    description: 'Maximize yield with AI-driven dynamic pricing that responds to market demand in real-time.',
    icon: '💰',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Inventory Management',
    description: 'Manage all your assets in one place with bulk uploads, scheduling, and availability tracking.',
    icon: '📦',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Audience Measurement',
    description: 'Provide verified impression data and audience demographics to justify premium pricing.',
    icon: '👥',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    title: 'Automated Billing',
    description: 'Streamline financial operations with automated invoicing, payment tracking, and reconciliation.',
    icon: '📄',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Content Management',
    description: 'Approve, schedule, and manage advertiser content across your entire network from one dashboard.',
    icon: '🎬',
    gradient: 'from-green-500 to-lime-500'
  },
  {
    title: 'Partner Dashboard',
    description: 'Give advertisers self-service access to book, manage, and track campaigns on your inventory.',
    icon: '🤝',
    gradient: 'from-lime-500 to-yellow-500'
  }
]

// FAQ data
const faqs = [
  {
    question: 'How do I list my inventory on the marketplace?',
    answer: 'Getting started is simple. Create an account, upload your inventory details (location, specs, photos), set your pricing, and you\'re live. We support bulk uploads via CSV or API integration for larger networks. Our team can assist with onboarding to ensure your assets are presented optimally.'
  },
  {
    question: 'What types of inventory can I list?',
    answer: 'We support all OOH formats including static and digital billboards, street furniture, transit advertising, place-based media, retail screens, airport displays, stadium signage, and more. If it reaches audiences in the physical world, we can help you monetize it.'
  },
  {
    question: 'How does pricing work for media owners?',
    answer: 'You maintain full control over your pricing. Set floor prices, enable dynamic pricing based on demand, create premium rates for high-value time slots, and offer programmatic rates for automated buying. We charge a small transaction fee on bookings made through the platform.'
  },
  {
    question: 'How do advertisers find and book my inventory?',
    answer: 'Your inventory is visible to all advertisers and agencies on our marketplace. They can search by location, audience, format, and availability. Bookings can be instant (if you enable auto-approval) or require your confirmation. You\'re always in control of what runs on your assets.'
  },
  {
    question: 'What reporting and analytics do you provide?',
    answer: 'Our platform provides comprehensive analytics including occupancy rates, revenue trends, audience impressions, campaign performance, and financial reporting. For digital inventory, we offer proof of play and real-time impression data that advertisers value highly.'
  }
]

export default function MediaOwnersPage() {
  const [activePlatform, setActivePlatform] = useState('inventory')
  const [activeTab, setActiveTab] = useState('billboards')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activePlatformData = platformTabs.find(tab => tab.id === activePlatform)
  const activeTabData = useCaseTabs.find(tab => tab.id === activeTab)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-gray-950 to-indigo-950"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium">For Media Owners</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Maximize Your
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Inventory Value
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect to global advertising demand, automate operations, and unlock new revenue streams 
                with the world&apos;s leading OOH marketplace and supply-side platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  List Your Inventory
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '500K+', label: 'Screens Listed' },
                  { value: '50+', label: 'Countries' },
                  { value: '$2B+', label: 'Media Transacted' },
                  { value: '35%', label: 'Avg Revenue Lift' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm">Media Owner Dashboard</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Media Owner Dashboard"
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Tour Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Tour</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover how Moving Walls helps media owners grow revenue and streamline operations
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePlatform(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePlatform === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          {activePlatformData && (
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activePlatformData.headline}</h3>
                <p className="text-gray-400 text-lg mb-8">{activePlatformData.description}</p>
                <ul className="space-y-4">
                  {activePlatformData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={activePlatformData.image}
                  alt={activePlatformData.title}
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-16 bg-gray-950 border-y border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider">
            Trusted by Leading Media Owners Worldwide
          </p>
        </div>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
          
          {/* Marquee */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {/* First set of logos */}
            {trustedBrands.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {trustedBrands.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Journey Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Unsold to <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Fully Booked</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how media owners transform their business with our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">The Old Way</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  High unsold inventory rates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  Manual booking processes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  Limited advertiser reach
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  No audience data to share
                </li>
              </ul>
            </motion.div>

            {/* Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-950/40 to-indigo-950/40 border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">The Transformation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  Global marketplace access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  Automated operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  Dynamic pricing engine
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  Rich audience analytics
                </li>
              </ul>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-purple-950/20 border border-purple-900/30 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">The New Way</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  80%+ fill rates achieved
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  24/7 automated bookings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  Thousands of active buyers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  Premium CPMs justified with data
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Grow Revenue</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A complete suite of tools designed for media owner success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">4 Simple Steps</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              List your inventory and start earning more revenue in days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'List Inventory', description: 'Upload your screens, billboards, and assets to our marketplace', icon: '📍' },
              { step: '02', title: 'Set Pricing', description: 'Configure floor prices, enable dynamic pricing, and set availability', icon: '💵' },
              { step: '03', title: 'Connect Demand', description: 'Get discovered by advertisers and agencies worldwide', icon: '🔗' },
              { step: '04', title: 'Grow Revenue', description: 'Manage bookings, track performance, and scale your business', icon: '📈' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
                <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-purple-400 font-mono text-sm mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Tabs Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions for Every <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Media Type</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you own billboards, transit, or digital networks, we have the tools you need
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-purple-400 font-bold text-2xl">{activeTabData.metrics.value}</span>
                  <span className="text-purple-300 text-sm">{activeTabData.metrics.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeTabData.title}</h3>
                <p className="text-gray-400 text-lg mb-8">{activeTabData.description}</p>
                <ul className="space-y-4 mb-8">
                  {activeTabData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&h=450&fit=crop"
                alt="Media Owner Case Study"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    UM
                  </div>
                  <div>
                    <p className="text-white font-semibold">Urban Media Group</p>
                    <p className="text-gray-400 text-sm">Billboard Operator • 15 Markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-300 text-sm font-medium">Case Study</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How a Billboard Network <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Doubled Fill Rates</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Urban Media Group partnered with Moving Walls to transform their sales operations. 
                Within 6 months, they increased occupancy from 40% to 85% across their network.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">85%</div>
                  <div className="text-sm text-gray-400">Fill Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">45%</div>
                  <div className="text-sm text-gray-400">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">200+</div>
                  <div className="text-sm text-gray-400">New Advertisers</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-purple-500 pl-6 mb-8">
                <p className="text-gray-300 italic text-lg">
                  &quot;Moving Walls opened doors to advertisers we never knew existed. Our programmatic revenue 
                  alone now exceeds what we made from direct sales before.&quot;
                </p>
                <cite className="text-gray-500 mt-4 block">— Michael Torres, CEO</cite>
              </blockquote>

              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Read Full Case Study
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about listing your inventory
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your
              <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Inventory Value?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ media owners already growing revenue with Moving Walls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                List Your Inventory
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
