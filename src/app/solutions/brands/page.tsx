'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import TestimonialSection from '@/components/TestimonialSection'

export default function BrandsPage() {
  const [activeTab, setActiveTab] = useState('retail')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Amplify Your Brand Message<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Across Premium OOH Inventory
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Launch data-driven campaigns that reach your target audience at scale with real-time analytics and AI-powered optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Start Your Campaign
              </Link>
              <button className="inline-block bg-blue-500/20 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500/30 transition-all">
                Watch Demo
              </button>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: '500+', label: 'Active Brands' },
                { value: '385%', label: 'Average ROI' },
                { value: '12M+', label: 'Monthly Impressions' },
                { value: '99.8%', label: 'Uptime SLA' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 font-semibold">TRUSTED BY LEADING BRANDS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Nike', 'Coca-Cola', 'Apple', 'Samsung', 'McDonald\'s', 'BMW'].map((brand, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge Brands Face Today
              </h2>
              <div className="space-y-4">
                {[
                  'Fragmented OOH buying processes across multiple vendors',
                  'Lack of real-time performance data and attribution',
                  'Difficulty in reaching specific audience segments',
                  'Time-consuming campaign planning and execution',
                  'Limited creative flexibility and optimization'
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Moving Walls Solution
                </h2>
                <div className="space-y-4">
                  {[
                    'Unified platform for all OOH inventory management',
                    'Real-time analytics and attribution tracking',
                    'AI-powered audience targeting and optimization',
                    'Launch campaigns in minutes, not weeks',
                    'Dynamic creative optimization for maximum impact'
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Brands Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed specifically for brand marketers to create, launch, and optimize OOH campaigns
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Multi-Channel Campaigns',
                description: 'Seamlessly manage campaigns across digital billboards, transit ads, and traditional OOH from one unified platform',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Advanced Targeting',
                description: 'Reach your exact audience using demographics, location data, behavior patterns, and AI-powered insights',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Real-Time Analytics',
                description: 'Track impressions, engagement, and attribution metrics as they happen with comprehensive dashboards',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Creative Optimization',
                description: 'AI-powered tools to test, optimize, and personalize creative assets for maximum impact and engagement',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Campaign Automation',
                description: 'Set up automated rules and triggers to optimize budget allocation and creative rotation in real-time',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                title: 'Brand Safety Controls',
                description: 'Ensure your ads appear in brand-safe environments with advanced content filtering and location controls',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Inventory Marketplace',
                description: 'Access 250,000+ premium billboard locations worldwide with transparent pricing and instant booking',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                title: 'Integration Suite',
                description: 'Connect with your existing tools including CRM, analytics, DSPs, and creative management platforms',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                color: 'from-teal-500 to-teal-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch Your Campaign in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From planning to activation in minutes, not weeks
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Plan & Target',
                  description: 'Use MW-Planner to define your audience, select locations, and forecast campaign performance',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                },
                {
                  step: '02',
                  title: 'Book Inventory',
                  description: 'Browse MW-Marketplace to find and instantly book premium billboard locations worldwide',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  step: '03',
                  title: 'Create & Optimize',
                  description: 'Design engaging creatives with MW-Studio and optimize for each screen format automatically',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                },
                {
                  step: '04',
                  title: 'Launch & Measure',
                  description: 'Activate with MW-Activate and track real-time performance with MW-Measure analytics',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all">
                    <div className="w-16 h-16 mb-4 text-blue-600">{item.icon}</div>
                    <div className="text-sm font-bold text-blue-600 mb-2">STEP {item.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {/* Step Number Circle */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl items-center justify-center shadow-lg z-10">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Brand Vertical
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for your industry
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['retail', 'automotive', 'cpg', 'entertainment', 'tech', 'finance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTab === 'retail' && 'Retail Brands'}
                  {activeTab === 'automotive' && 'Automotive Brands'}
                  {activeTab === 'cpg' && 'CPG Brands'}
                  {activeTab === 'entertainment' && 'Entertainment Brands'}
                  {activeTab === 'tech' && 'Tech Brands'}
                  {activeTab === 'finance' && 'Financial Services'}
                </h3>
                <div className="space-y-4 mb-6">
                  {activeTab === 'retail' && (
                    <>
                      <p className="text-gray-600">Drive foot traffic to stores with location-based campaigns</p>
                      <p className="text-gray-600">Promote seasonal sales and new product launches</p>
                      <p className="text-gray-600">Target shoppers in high-traffic retail areas</p>
                    </>
                  )}
                  {activeTab === 'automotive' && (
                    <>
                      <p className="text-gray-600">Launch new vehicle models with highway billboards</p>
                      <p className="text-gray-600">Drive dealership visits with proximity targeting</p>
                      <p className="text-gray-600">Build brand awareness during launch events</p>
                    </>
                  )}
                  {activeTab === 'cpg' && (
                    <>
                      <p className="text-gray-600">Increase brand awareness at mass scale</p>
                      <p className="text-gray-600">Promote new product lines in retail corridors</p>
                      <p className="text-gray-600">Target specific demographics by location</p>
                    </>
                  )}
                  {activeTab === 'entertainment' && (
                    <>
                      <p className="text-gray-600">Promote movie releases and streaming content</p>
                      <p className="text-gray-600">Target entertainment districts and venues</p>
                      <p className="text-gray-600">Create buzz around premieres and events</p>
                    </>
                  )}
                  {activeTab === 'tech' && (
                    <>
                      <p className="text-gray-600">Launch new products in tech hubs</p>
                      <p className="text-gray-600">Build brand awareness in business districts</p>
                      <p className="text-gray-600">Target early adopters and professionals</p>
                    </>
                  )}
                  {activeTab === 'finance' && (
                    <>
                      <p className="text-gray-600">Build trust with strategic billboard placements</p>
                      <p className="text-gray-600">Promote new services in financial districts</p>
                      <p className="text-gray-600">Target high-net-worth demographics</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">+142%</div>
                    <div className="text-sm text-gray-600">Avg ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3.2M</div>
                    <div className="text-sm text-gray-600">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-600">Brand Recall</div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <div className="w-32 h-32 text-blue-600">
                  {activeTab === 'retail' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                  {activeTab === 'automotive' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                  {activeTab === 'cpg' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                  {activeTab === 'entertainment' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>}
                  {activeTab === 'tech' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {activeTab === 'finance' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-300">
              Real performance metrics from brand campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '385%', label: 'Average ROI', sublabel: 'Across all campaigns' },
              { metric: '2.3min', label: 'Avg Booking Time', sublabel: 'From search to activation' },
              { metric: '94%', label: 'Campaign Success', sublabel: 'Meeting or exceeding KPIs' },
              { metric: '12M+', label: 'Monthly Impressions', sublabel: 'Average per brand' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-2xl border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                  FEATURED CASE STUDY
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How RetailMax Increased Store Visits by 240%
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  RetailMax, a leading fashion retailer, used Moving Walls to launch a multi-city campaign targeting shoppers within 5 miles of their stores. Using MW-Planner for audience insights and MW-Activate for dynamic creative optimization, they achieved remarkable results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">240% increase in store visits</div>
                      <div className="text-sm text-gray-600">Within 30 days of campaign launch</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">420% ROI achieved</div>
                      <div className="text-sm text-gray-600">Well above industry average</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">18 cities activated in 3 days</div>
                      <div className="text-sm text-gray-600">Rapid multi-market execution</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Read Full Case Study
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="w-20 h-20 mb-4">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <blockquote className="text-xl italic mb-6">
                    "Moving Walls transformed our OOH strategy. We went from weeks of planning to launching campaigns in days, with better results than ever before."
                  </blockquote>
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-sm text-gray-200">VP of Marketing, RetailMax</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete MW Platform Suite
            </h2>
            <p className="text-xl text-gray-600">
              All the tools you need, integrated seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'MW-Planner',
                description: 'AI-powered campaign planning and audience insights',
                features: ['Audience Analysis', 'Location Planning', 'ROI Forecasting'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                name: 'MW-Marketplace',
                description: 'Access 250,000+ premium billboard locations',
                features: ['Instant Booking', 'Real-time Availability', 'Transparent Pricing'],
                color: 'from-green-500 to-green-600'
              },
              {
                name: 'MW-Studio',
                description: 'Creative design and optimization tools',
                features: ['Template Library', 'Auto-resize', 'A/B Testing'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                name: 'MW-Activate',
                description: 'Campaign activation and automation',
                features: ['One-click Launch', 'Automated Rules', 'Dynamic Optimization'],
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                name: 'MW-Measure',
                description: 'Real-time analytics and attribution',
                features: ['Live Dashboards', 'Attribution Tracking', 'Custom Reports'],
                color: 'from-pink-500 to-pink-600'
              },
              {
                name: 'MW-Science',
                description: 'Data science and predictive analytics',
                features: ['Predictive Models', 'Audience Insights', 'Market Intelligence'],
                color: 'from-cyan-500 to-cyan-600'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Moving Walls for brands
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can I launch my first campaign?",
                answer: "Most brands launch their first campaign within 24-48 hours. Our platform streamlines the entire process from planning to activation, eliminating the typical weeks-long setup time."
              },
              {
                question: "What's the minimum budget required?",
                answer: "We work with brands of all sizes. Campaigns can start from as low as $5,000, making premium OOH advertising accessible to emerging brands and enterprises alike."
              },
              {
                question: "Do you support international campaigns?",
                answer: "Yes! We have inventory in 180+ countries across 2,500+ cities. Our platform makes it easy to launch and manage multi-market campaigns from a single dashboard."
              },
              {
                question: "How do you measure campaign performance?",
                answer: "We provide real-time analytics including impressions, reach, frequency, attribution tracking, and foot traffic lift. Our MW-Measure platform integrates with your existing analytics tools for comprehensive reporting."
              },
              {
                question: "Can I integrate Moving Walls with my existing marketing stack?",
                answer: "Absolutely. We offer integrations with major CRM, DSP, analytics, and creative platforms. Our API also allows for custom integrations with your proprietary systems."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-mw-blue-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
