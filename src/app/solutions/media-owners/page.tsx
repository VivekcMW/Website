'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import TestimonialSection from '@/components/TestimonialSection'

export default function MediaOwnersPage() {
  const [activeTab, setActiveTab] = useState('traditional')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState('marketplace')

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
              Monetize Your OOH Inventory<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                With Smart SSP Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Connect to premium demand sources, optimize yield with AI, and automate your entire OOH sales operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Join Our Network
              </Link>
              <button className="inline-block bg-blue-500/20 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500/30 transition-all">
                Watch Demo
              </button>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: '500K+', label: 'Screens Connected' },
                { value: '95%', label: 'Fill Rate' },
                { value: '$2.4B+', label: 'Annual Revenue' },
                { value: '180+', label: 'Countries' }
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

      {/* Platform Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of tools to manage, sell, and optimize your OOH inventory
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Screenshot */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 shadow-2xl">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                    {/* Browser Header */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="bg-white rounded-md px-4 py-1 text-sm text-gray-500 max-w-md">
                          app.movingwalls.com/{activePlatform}
                        </div>
                      </div>
                    </div>
                    {/* Screenshot Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                      {activePlatform === 'marketplace' && (
                        <div className="w-full h-full grid grid-cols-3 gap-3">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-2 flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded"></div>
                            </div>
                          ))}
                        </div>
                      )}
                      {activePlatform === 'inventory' && (
                        <div className="w-full h-full flex flex-col">
                          <div className="flex gap-4 mb-4">
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                              <div className="h-8 w-full bg-blue-100 rounded"></div>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                              <div className="h-8 w-full bg-blue-100 rounded"></div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            <div className="h-full bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center">
                              <svg className="w-16 h-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      {activePlatform === 'yield' && (
                        <div className="w-full h-full flex flex-col gap-4">
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: 'Fill Rate', value: '95%', color: 'blue' },
                              { label: 'eCPM', value: '$12.40', color: 'green' },
                              { label: 'Revenue', value: '+24%', color: 'purple' },
                            ].map((stat, i) => (
                              <div key={i} className="bg-white rounded-lg p-3 shadow-sm text-center">
                                <div className={`text-lg font-bold text-${stat.color}-600`}>{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            <div className="h-full flex items-end gap-2">
                              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t" style={{ height: `${h}%` }}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {activePlatform === 'analytics' && (
                        <div className="w-full h-full flex flex-col gap-4">
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="h-3 w-32 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 w-24 bg-gray-100 rounded"></div>
                              </div>
                              <div className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-semibold">Live</div>
                            </div>
                            <div className="h-2 bg-blue-200 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full w-4/5"></div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            <div className="h-full bg-gradient-to-r from-blue-100 to-indigo-100 rounded flex items-center justify-center">
                              <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      {activePlatform === 'automation' && (
                        <div className="w-full h-full flex gap-4">
                          <div className="w-16 bg-white rounded-lg p-2 shadow-sm flex flex-col gap-2">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-full aspect-square rounded ${i === 0 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                            ))}
                          </div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                              <svg className="w-16 h-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
              </motion.div>
            </div>

            {/* Right - Tabs and Content */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              {/* Tabs */}
              <div className="flex flex-col gap-2 mb-8">
                {[
                  { id: 'marketplace', name: 'Demand Marketplace' },
                  { id: 'inventory', name: 'Inventory Management' },
                  { id: 'yield', name: 'Yield Optimization' },
                  { id: 'analytics', name: 'Analytics & Insights' },
                  { id: 'automation', name: 'Workflow Automation' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePlatform(tab.id)}
                    className={`px-6 py-3 rounded-[6px] font-semibold transition-all duration-300 text-left ${
                      activePlatform === tab.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Content */}
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activePlatform === 'marketplace' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Connect to Premium Demand
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Access thousands of advertisers and agencies through our integrated demand marketplace. Maximize fill rates with programmatic and direct sales channels.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Access 1000+ active advertisers',
                        'Programmatic & direct demand',
                        'Real-time bidding integration',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/mw-marketplace" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </>
                )}
                {activePlatform === 'inventory' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Centralized Inventory Control
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Manage all your screens, formats, and availability from a single dashboard. Define rates, set blackout periods, and control access permissions.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Unified inventory dashboard',
                        'Flexible pricing rules',
                        'Real-time availability sync',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/mw-reach" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </>
                )}
                {activePlatform === 'yield' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      AI-Powered Yield Optimization
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Maximize revenue per screen with intelligent pricing algorithms. Dynamic floor prices, demand forecasting, and automated rate adjustments.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Dynamic pricing algorithms',
                        'Demand forecasting',
                        'Revenue optimization AI',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/mw-science" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </>
                )}
                {activePlatform === 'analytics' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Real-Time Analytics & Reporting
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Track performance across your entire network with comprehensive dashboards. Proof of play, audience metrics, and revenue analytics.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Real-time performance dashboards',
                        'Automated proof of play',
                        'Audience measurement integration',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/mw-measure" className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </>
                )}
                {activePlatform === 'automation' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Automated Workflow Management
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Streamline operations with automated booking confirmations, creative trafficking, and billing reconciliation.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Automated booking workflows',
                        'Creative trafficking system',
                        'Billing & invoicing automation',
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/mw-activate" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 font-semibold">TRUSTED BY LEADING MEDIA OWNERS WORLDWIDE</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 pr-16"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[
                { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
                { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
                { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
                { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' },
                { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
                { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
                { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
                { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
                { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              ].map((brand, i) => (
                <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-8 w-auto max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {[
                { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
                { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
                { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
                { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' },
                { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
                { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
                { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
                { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
                { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              ].map((brand, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-8 w-auto max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Journey Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Maximum Yield
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Moving Walls transforms your inventory monetization
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Particle Stream Path */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-blue-300 to-green-200 opacity-40"></div>
              
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(239,68,68,1) 0%, rgba(239,68,68,0) 70%)',
                    boxShadow: '0 0 20px 5px rgba(239,68,68,0.6)',
                  }}
                  animate={{
                    x: ['0%', '33%'],
                    background: [
                      'radial-gradient(circle, rgba(239,68,68,1) 0%, rgba(239,68,68,0) 70%)',
                      'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 70%)',
                    ],
                    boxShadow: [
                      '0 0 20px 5px rgba(239,68,68,0.6)',
                      '0 0 30px 10px rgba(59,130,246,0.8)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-[33%] w-6 h-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(139,92,246,0.5) 50%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 20px 5px rgba(59,130,246,0.4)',
                      '0 0 40px 15px rgba(139,92,246,0.8)',
                      '0 0 20px 5px rgba(59,130,246,0.4)',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1.8,
                  }}
                />
                
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-[50%] w-2 h-2 rounded-full bg-white"
                    style={{
                      boxShadow: '0 0 10px 3px rgba(255,255,255,0.8)',
                    }}
                    animate={{
                      x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
                      y: [0, (i < 3 ? -1 : 1) * (15 + i * 5)],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 2 + i * 0.15,
                      ease: 'easeOut',
                    }}
                  />
                ))}
                
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 70%)',
                    boxShadow: '0 0 20px 5px rgba(59,130,246,0.6)',
                  }}
                  animate={{
                    x: ['50%', '100%'],
                    background: [
                      'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 70%)',
                      'radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(34,197,94,0) 70%)',
                    ],
                    boxShadow: [
                      '0 0 30px 10px rgba(59,130,246,0.8)',
                      '0 0 25px 8px rgba(34,197,94,0.7)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 2.5,
                    ease: 'easeOut',
                  }}
                />
                
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`trail-red-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400"
                    style={{ opacity: 0.6 - i * 0.15 }}
                    animate={{
                      x: ['0%', '30%'],
                      opacity: [0.6 - i * 0.15, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
                
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`trail-green-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400"
                    style={{ opacity: 0.7 - i * 0.15 }}
                    animate={{
                      x: ['55%', '100%'],
                      opacity: [0.7 - i * 0.15, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 2.8 + i * 0.2,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>
              
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Old Way */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-gray-300 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">The Old Way</span>
                      <h3 className="text-xl font-bold text-gray-800">Challenges</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: 'Low fill rates & unsold inventory' },
                      { icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, text: 'Limited demand access' },
                      { icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, text: 'Manual booking processes' },
                      { icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: 'No real-time performance data' },
                      { icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, text: 'Complex pricing management' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-white/60 rounded-lg p-3"
                      >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Transformation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl h-full transform lg:-translate-y-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Transformation
                    </span>
                  </div>
                  <div className="text-center mb-6 pt-4">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Moving Walls SSP</h3>
                    <p className="text-blue-200 text-sm">Your complete monetization solution</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Premium Demand Access',
                      'AI Yield Optimization',
                      'Real-Time Analytics',
                      'Automated Operations',
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white font-medium text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all text-sm">
                      Start Your Transformation
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* New Way */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wider">The New Way</span>
                      <h3 className="text-xl font-bold text-gray-800">Results</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, text: '95% average fill rate', metric: '95% fill' },
                      { icon: <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: '1000+ advertiser connections', metric: 'Global reach' },
                      { icon: <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, text: 'Real-time performance insights', metric: 'Live data' },
                      { icon: <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: 'AI-optimized pricing', metric: '+35% eCPM' },
                      { icon: <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, text: 'Fully automated workflows', metric: '80% time saved' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 bg-white/80 rounded-lg p-3"
                      >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div className="flex-1">
                          <span className="text-gray-700 text-sm block">{item.text}</span>
                          <span className="text-green-600 text-xs font-bold">{item.metric}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:hidden flex flex-col items-center gap-4 my-8">
              <svg className="w-8 h-8 text-blue-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
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
              Everything Media Owners Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed specifically for media owners to maximize revenue and operational efficiency
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SSP Technology',
                description: 'Connect to premium programmatic demand with our advanced supply-side platform',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Inventory Management',
                description: 'Centralized dashboard to manage all your screens, availability, and pricing rules',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Yield Optimization',
                description: 'AI-powered pricing algorithms that maximize revenue across your network',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Proof of Play',
                description: 'Automated verification and reporting for all campaign deliveries',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Demand Connections',
                description: 'Direct integrations with agencies, DSPs, and brand advertisers globally',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                title: 'Revenue Analytics',
                description: 'Comprehensive dashboards tracking fill rates, eCPM, and revenue trends',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Creative Trafficking',
                description: 'Automated creative approval, scheduling, and delivery to all screens',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                title: 'Billing & Invoicing',
                description: 'Automated billing, reconciliation, and financial reporting',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
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
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From integration to revenue in weeks, not months
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  title: 'Connect Inventory',
                  description: 'Integrate your screens via API or bulk upload with our simple onboarding process',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                },
                {
                  title: 'Set Your Terms',
                  description: 'Configure pricing rules, floor prices, and availability for each screen or venue',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                },
                {
                  title: 'Go Live',
                  description: 'Activate demand connections and start receiving campaign requests automatically',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: 'Grow Revenue',
                  description: 'Watch your fill rates and eCPM increase with AI-powered optimization',
                  icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all h-full flex flex-col">
                    <div className="w-16 h-16 mb-4 text-blue-600">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 flex-1">{item.description}</p>
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
              Solutions for Every Media Type
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for your inventory type
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['traditional', 'digital', 'transit', 'retail', 'placebased'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab === 'traditional' ? 'Traditional OOH' : 
                 tab === 'digital' ? 'Digital OOH' : 
                 tab === 'transit' ? 'Transit' : 
                 tab === 'retail' ? 'Retail Media' : 'Place-Based'}
              </button>
            ))}
          </div>

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
                  {activeTab === 'traditional' && 'Traditional OOH'}
                  {activeTab === 'digital' && 'Digital OOH'}
                  {activeTab === 'transit' && 'Transit Media'}
                  {activeTab === 'retail' && 'Retail Media Networks'}
                  {activeTab === 'placebased' && 'Place-Based Media'}
                </h3>
                <div className="space-y-4 mb-6">
                  {activeTab === 'traditional' && (
                    <>
                      <p className="text-gray-600">Connect static billboards to digital buying</p>
                      <p className="text-gray-600">Automated proof of posting</p>
                      <p className="text-gray-600">Unified availability management</p>
                    </>
                  )}
                  {activeTab === 'digital' && (
                    <>
                      <p className="text-gray-600">Real-time programmatic capabilities</p>
                      <p className="text-gray-600">Dynamic creative optimization</p>
                      <p className="text-gray-600">Impression-level reporting</p>
                    </>
                  )}
                  {activeTab === 'transit' && (
                    <>
                      <p className="text-gray-600">Route and schedule optimization</p>
                      <p className="text-gray-600">Mobile audience measurement</p>
                      <p className="text-gray-600">Multi-format support</p>
                    </>
                  )}
                  {activeTab === 'retail' && (
                    <>
                      <p className="text-gray-600">Shopper audience targeting</p>
                      <p className="text-gray-600">Purchase attribution</p>
                      <p className="text-gray-600">Brand advertiser connections</p>
                    </>
                  )}
                  {activeTab === 'placebased' && (
                    <>
                      <p className="text-gray-600">Venue-specific audience data</p>
                      <p className="text-gray-600">Contextual targeting options</p>
                      <p className="text-gray-600">Dwell time analytics</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-gray-600">Fill Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">+35%</div>
                    <div className="text-sm text-gray-600">eCPM Lift</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500K+</div>
                    <div className="text-sm text-gray-600">Screens</div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <div className="w-32 h-32 text-blue-600">
                  {activeTab === 'traditional' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                  {activeTab === 'digital' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {activeTab === 'transit' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                  {activeTab === 'retail' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                  {activeTab === 'placebased' && <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                </div>
              </div>
            </div>
          </motion.div>
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
                  How UrbanMedia Increased Revenue by 47%
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  UrbanMedia, a leading DOOH operator with 5,000+ screens, partnered with Moving Walls to transform their monetization strategy. Within 6 months, they achieved record revenue growth.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">47% revenue increase in 6 months</div>
                      <div className="text-sm text-gray-600">Highest growth in company history</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">95% average fill rate achieved</div>
                      <div className="text-sm text-gray-600">Up from 67% before Moving Walls</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">200+ new advertiser relationships</div>
                      <div className="text-sm text-gray-600">Through programmatic demand access</div>
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
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=600&h=450&fit=crop"
                    alt="UrbanMedia Success Story"
                    className="w-full h-[400px] object-cover"
                  />
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
                name: 'MW-Marketplace',
                description: 'Connect your inventory to premium demand sources',
                features: ['Programmatic Demand', 'Direct Deals', 'Global Reach'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                name: 'MW-Reach',
                description: 'Manage and optimize your inventory centrally',
                features: ['Inventory Dashboard', 'Pricing Rules', 'Availability Sync'],
                color: 'from-green-500 to-green-600'
              },
              {
                name: 'MW-Science',
                description: 'AI-powered yield optimization and forecasting',
                features: ['Dynamic Pricing', 'Demand Forecasting', 'Revenue AI'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                name: 'MW-Activate',
                description: 'Automated campaign delivery and trafficking',
                features: ['Auto Scheduling', 'Creative Delivery', 'Real-time Updates'],
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                name: 'MW-Measure',
                description: 'Proof of play and performance analytics',
                features: ['Play Verification', 'Audience Metrics', 'Revenue Reports'],
                color: 'from-pink-500 to-pink-600'
              },
              {
                name: 'MW-Studio',
                description: 'Creative management and approval tools',
                features: ['Creative Library', 'Approval Workflows', 'Format Validation'],
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
              Everything you need to know about partnering with Moving Walls
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How does the SSP integration work?",
                answer: "Our SSP integrates with your existing systems via APIs or direct connections. We support all major ad servers and CMS platforms. Integration typically takes 2-4 weeks depending on your technical setup, with dedicated support throughout the process."
              },
              {
                question: "What types of demand can I access?",
                answer: "You'll access programmatic demand from major DSPs, direct deals from agencies and brands, and our own marketplace of 1000+ advertisers. We handle all technical integrations so you can focus on optimizing your inventory."
              },
              {
                question: "How does yield optimization work?",
                answer: "Our AI analyzes demand patterns, historical performance, and market conditions to optimize floor prices in real-time. This typically increases eCPM by 20-40% while maintaining healthy fill rates above 90%."
              },
              {
                question: "What reporting and analytics are available?",
                answer: "Access comprehensive dashboards showing fill rates, eCPM, revenue trends, advertiser mix, and proof of play. Reports can be automated and white-labeled for your clients. We also provide predictive analytics for forecasting."
              },
              {
                question: "What are the costs and revenue share?",
                answer: "We operate on a revenue share model aligned with your success. No upfront costs or minimum commitments. Our share is competitive with industry standards and decreases as your revenue scales. Contact us for specific terms."
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
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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
