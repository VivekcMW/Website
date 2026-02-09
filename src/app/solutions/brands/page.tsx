'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import TestimonialSection from '@/components/TestimonialSection'

export default function BrandsPage() {
  const [activeTab, setActiveTab] = useState('retail')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState('campaigns')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Globe */}
      <section className="relative bg-gradient-to-br from-mw-blue-900 via-mw-blue-800 to-mw-blue-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Stars - Fixed positions to avoid hydration mismatch */}
        <div className="absolute inset-0">
          {[
            { left: 5, top: 10 }, { left: 15, top: 25 }, { left: 25, top: 5 }, { left: 35, top: 45 },
            { left: 45, top: 15 }, { left: 55, top: 35 }, { left: 65, top: 8 }, { left: 75, top: 55 },
            { left: 85, top: 20 }, { left: 95, top: 40 }, { left: 10, top: 60 }, { left: 20, top: 75 },
            { left: 30, top: 85 }, { left: 40, top: 65 }, { left: 50, top: 90 }, { left: 60, top: 70 },
            { left: 70, top: 80 }, { left: 80, top: 95 }, { left: 90, top: 72 }, { left: 8, top: 88 },
            { left: 18, top: 42 }, { left: 28, top: 58 }, { left: 38, top: 22 }, { left: 48, top: 78 },
            { left: 58, top: 12 }, { left: 68, top: 48 }, { left: 78, top: 32 }, { left: 88, top: 62 },
            { left: 3, top: 35 }, { left: 13, top: 92 }, { left: 23, top: 18 }, { left: 33, top: 52 },
            { left: 43, top: 28 }, { left: 53, top: 82 }, { left: 63, top: 38 }, { left: 73, top: 68 },
            { left: 83, top: 15 }, { left: 93, top: 58 }, { left: 7, top: 72 }, { left: 17, top: 48 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                OOH Advertising{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                  Made Simple
                </span>
              </h1>
              <p className="text-lg md:text-xl text-mw-blue-100 max-w-xl mb-8 leading-relaxed">
                We help brands launch result-driven OOH campaigns using automation technology. 
                Our platform streamlines campaign creation, providing optimized proposals in minutes.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-300">2.5M+</div>
                  <div className="text-sm text-mw-blue-200">Screens Worldwide</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-300">50+</div>
                  <div className="text-sm text-mw-blue-200">Countries</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-300">10x</div>
                  <div className="text-sm text-mw-blue-200">Faster Planning</div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-mw-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-mw-gray-50 transition-all hover:scale-105 shadow-lg"
                >
                  Get A Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Interactive 3D Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Orbital Ring 1 */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-cyan-300/20"
                  style={{ transform: 'rotateX(60deg)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Orbital Ring 2 */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-blue-300/20"
                  style={{ transform: 'rotateX(75deg) rotateY(20deg)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className="absolute -bottom-2 right-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Main Globe */}
                <motion.div
                  className="absolute inset-12 rounded-full bg-gradient-to-br from-mw-blue-600 via-mw-blue-700 to-mw-blue-900 shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{
                    boxShadow: '0 0 60px rgba(6, 182, 212, 0.3), inset -20px -20px 60px rgba(0,0,0,0.3), inset 20px 20px 60px rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Globe Grid Lines */}
                  <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
                    {/* Horizontal Lines */}
                    {[20, 40, 60, 80].map((top, i) => (
                      <div key={`h-${i}`} className="absolute w-full h-px bg-cyan-300" style={{ top: `${top}%` }} />
                    ))}
                    {/* Vertical Lines */}
                    {[20, 40, 60, 80].map((left, i) => (
                      <div key={`v-${i}`} className="absolute h-full w-px bg-cyan-300" style={{ left: `${left}%` }} />
                    ))}
                  </div>

                  {/* Glowing Location Dots - Major Cities */}
                  {[
                    { top: '25%', left: '70%', size: 'lg', delay: 0 },     // Tokyo
                    { top: '35%', left: '15%', size: 'md', delay: 0.5 },   // New York
                    { top: '30%', left: '45%', size: 'lg', delay: 1 },     // London
                    { top: '60%', left: '75%', size: 'md', delay: 1.5 },   // Sydney
                    { top: '40%', left: '55%', size: 'sm', delay: 2 },     // Dubai
                    { top: '45%', left: '25%', size: 'md', delay: 2.5 },   // LA
                    { top: '50%', left: '65%', size: 'lg', delay: 3 },     // Singapore
                    { top: '35%', left: '48%', size: 'sm', delay: 3.5 },   // Paris
                    { top: '55%', left: '35%', size: 'md', delay: 4 },     // São Paulo
                    { top: '28%', left: '58%', size: 'sm', delay: 4.5 },   // Mumbai
                  ].map((dot, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${
                        dot.size === 'lg' ? 'w-4 h-4' : dot.size === 'md' ? 'w-3 h-3' : 'w-2 h-2'
                      }`}
                      style={{ top: dot.top, left: dot.left }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: dot.delay,
                      }}
                    >
                      <div className="w-full h-full bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80" />
                      <motion.div
                        className="absolute inset-0 bg-cyan-400 rounded-full"
                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: dot.delay }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Live Campaign</span>
                  </div>
                  <div className="text-lg font-bold text-cyan-300">Tokyo</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="absolute -left-4 bottom-1/3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Active Screens</span>
                  </div>
                  <div className="text-lg font-bold text-cyan-300">125K+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="absolute left-1/4 -bottom-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Impressions Today</span>
                  </div>
                  <div className="text-lg font-bold text-cyan-300">48.2M</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-24 bg-gradient-to-b from-white via-mw-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-mw-gray-900 mb-6">
              Leverage Advanced<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-blue-600 to-cyan-500">OOH Media Automation Technology</span>
            </h2>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto leading-relaxed">
              From planning to measurement, manage your entire OOH workflow in one unified platform
            </p>
          </motion.div>

          {/* Top Tabs - Campaigns, Real Time, Measurement */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex border border-mw-gray-200 p-1.5 rounded-xl gap-1">
              {[
                { id: 'campaigns', name: 'Campaigns', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )},
                { id: 'realtime', name: 'Real Time', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )},
                { id: 'measurement', name: 'Measurement', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )},
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePlatform(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activePlatform === tab.id
                      ? 'bg-mw-blue-600 text-white'
                      : 'text-mw-gray-600 hover:text-mw-blue-600 hover:bg-mw-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content - Left text, Right image */}
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              {activePlatform === 'campaigns' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-mw-gray-900 mb-4">
                    Create and Execute Campaigns
                  </h3>
                  <p className="text-lg text-mw-gray-600 leading-relaxed">
                    Our platform enables you to transform your briefs into optimised proposals within minutes, empowering you to deliver real-time top-quality campaigns. With this unique feature, you can seamlessly create and run OOH campaigns that are customised to your brand's specific needs and goals, all with the click of a button.
                  </p>
                </motion.div>
              )}
              {activePlatform === 'realtime' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-mw-gray-900 mb-4">
                    Execute Campaigns in Real-Time
                  </h3>
                  <p className="text-lg text-mw-gray-600 leading-relaxed">
                    Moving Walls takes OOH campaign management to the next level with our purpose-built DSP (Demand-Side Platform). Our intuitive platform empowers advertisers to effortlessly create and execute campaigns, all while harnessing the power of real-time data for optimization and maximum brand impact.
                  </p>
                </motion.div>
              )}
              {activePlatform === 'measurement' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-mw-gray-900 mb-4">
                    Measurement & Analytics
                  </h3>
                  <p className="text-lg text-mw-gray-600 leading-relaxed">
                    Moving Walls takes OOH campaign management to the next level with our purpose-built DSP (Demand-Side Platform). Our intuitive platform empowers advertisers to effortlessly create and execute campaigns, all while harnessing the power of real-time data for optimization and maximum brand impact.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-mw-gray-100 to-mw-gray-200 rounded-2xl p-4">
                <div className="rounded-xl overflow-hidden">
                  {activePlatform === 'campaigns' && (
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                      alt="Campaign Dashboard"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  )}
                  {activePlatform === 'realtime' && (
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                      alt="Real-Time Dashboard"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  )}
                  {activePlatform === 'measurement' && (
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80"
                      alt="Analytics Dashboard"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 font-semibold">Trusted by leading brands worldwide</p>
        </div>
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Marquee container */}
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
              {/* First set of logos - using img tags with CDN logos */}
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
              {/* Duplicate set for seamless loop */}
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
              Your Customer Journey with Moving Walls
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From campaign creation to measurement — experience the complete OOH transformation
            </p>
          </motion.div>

          {/* Journey Path */}
          <div className="relative">
            {/* Animated Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2 z-0">
              {/* Base gradient line - Campaigns → Real Time → Measurement */}
              <div className="absolute inset-0 bg-gradient-to-r from-mw-blue-300 via-purple-400 to-green-400 rounded-full opacity-30"></div>
              
              {/* Animated flowing particles */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {/* Particle flow - Campaigns phase */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(14,116,144,1) 0%, rgba(14,116,144,0) 70%)',
                    boxShadow: '0 0 25px 8px rgba(14,116,144,0.7)',
                  }}
                  animate={{
                    x: ['-5%', '35%'],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Particle flow - Real Time phase */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(139,92,246,0) 70%)',
                    boxShadow: '0 0 25px 8px rgba(139,92,246,0.7)',
                  }}
                  animate={{
                    x: ['30%', '70%'],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Particle flow - Measurement phase */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(34,197,94,0) 70%)',
                    boxShadow: '0 0 25px 8px rgba(34,197,94,0.7)',
                  }}
                  animate={{
                    x: ['65%', '105%'],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2,
                    ease: 'easeOut',
                  }}
                />

                {/* Connection sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 w-2 h-2 rounded-full bg-white"
                    style={{
                      left: `${10 + i * 12}%`,
                      boxShadow: '0 0 8px 2px rgba(255,255,255,0.8)',
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Journey Steps - Campaigns → Real Time → Measurement */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 - Campaigns */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-mw-blue-50 to-cyan-100 rounded-2xl p-8 border-2 border-mw-blue-200 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-mw-blue-500 to-cyan-600 flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.div>
                    <div>
                      <span className="text-xs font-bold text-mw-blue-600 uppercase tracking-wider">Step 1</span>
                      <h3 className="text-xl font-bold text-gray-800">Create Campaigns</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Transform your briefs into optimised OOH proposals within minutes using our AI-powered platform.
                  </p>
                  <div className="space-y-3">
                    {['Define target audience', 'Set campaign objectives', 'AI-optimized proposals', 'One-click activation'].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-white/70 rounded-lg p-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-mw-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Arrow */}
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-mw-blue-500 to-purple-500 shadow-lg flex items-center justify-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Step 2 - Real Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 shadow-2xl h-full transform lg:-translate-y-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <motion.span 
                      className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Live Now
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-3 mb-6 pt-2">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center"
                      animate={{ 
                        boxShadow: ['0 0 0 0 rgba(255,255,255,0.4)', '0 0 0 20px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0.4)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <div>
                      <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">Step 2</span>
                      <h3 className="text-xl font-bold text-white">Execute Real-Time</h3>
                    </div>
                  </div>
                  <p className="text-purple-100 mb-6">
                    Monitor and optimize your campaigns in real-time with our purpose-built DSP for maximum impact.
                  </p>
                  <div className="space-y-3">
                    {['Live campaign monitoring', 'Real-time optimization', 'Dynamic adjustments', 'Instant performance data'].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white font-medium text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Arrow */}
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-green-500 shadow-lg flex items-center justify-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Step 3 - Measurement */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </motion.div>
                    <div>
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Step 3</span>
                      <h3 className="text-xl font-bold text-gray-800">Measure Results</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get comprehensive analytics with attribution, footfall tracking, and full ROI visibility.
                  </p>
                  <div className="space-y-3">
                    {[
                      { text: 'Impression tracking', metric: 'Real-time' },
                      { text: 'Footfall attribution', metric: '+385% ROI' },
                      { text: 'Brand lift studies', metric: 'Full funnel' },
                      { text: 'ROI reporting', metric: 'Automated' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center justify-between gap-3 bg-white/80 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{item.text}</span>
                        </div>
                        <span className="text-green-600 text-xs font-bold">{item.metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Journey Arrows */}
            <div className="lg:hidden flex flex-col items-center gap-4 my-8">
              <motion.svg 
                className="w-8 h-8 text-mw-blue-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading brands achieved remarkable results with Moving Walls
            </p>
          </motion.div>

          {/* Case Studies Carousel */}
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
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
                {/* Case Study Cards - First Set */}
                {[
                  {
                    client: 'Luxury Auto Group',
                    category: 'Automotive',
                    title: 'Premium Automotive Brand Achieves 300% ROI in Q4',
                    description: 'Increase dealership visits and test drive bookings during competitive holiday season',
                    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
                    duration: '90 days',
                    budget: '$250K',
                    metrics: [
                      { label: 'ROI Increase', value: '+300%' },
                      { label: 'Dealership Visits', value: '+187%' },
                    ],
                  },
                  {
                    client: 'FashionForward Stores',
                    category: 'Retail',
                    title: 'National Retail Chain Drives 45% Foot Traffic Increase',
                    description: 'Combat declining in-store visits amid shift to online shopping',
                    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
                    duration: '120 days',
                    budget: '$180K',
                    metrics: [
                      { label: 'Foot Traffic', value: '+45%' },
                      { label: 'In-Store Sales', value: '+62%' },
                    ],
                  },
                  {
                    client: 'MedCare Network',
                    category: 'Healthcare',
                    title: 'Healthcare Provider Reaches 2M Patients with Compliance',
                    description: 'Increase awareness of preventive care services while maintaining HIPAA compliance',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
                    duration: '60 days',
                    budget: '$95K',
                    metrics: [
                      { label: 'Impressions', value: '2.1M' },
                      { label: 'Appointments', value: '+78%' },
                    ],
                  },
                  {
                    client: 'NextGen Financial',
                    category: 'Finance',
                    title: 'Fintech Startup Generates 5,000+ Quality Leads',
                    description: 'Build brand awareness and generate qualified leads in competitive market',
                    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
                    duration: '45 days',
                    budget: '$125K',
                    metrics: [
                      { label: 'Qualified Leads', value: '5,234' },
                      { label: 'Brand Lift', value: '+89%' },
                    ],
                  },
                  {
                    client: 'InnovateTech Corp',
                    category: 'Technology',
                    title: 'Tech Company Launches Product with 10M Impressions',
                    description: 'Create buzz for new product launch in saturated market',
                    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
                    duration: '30 days',
                    budget: '$200K',
                    metrics: [
                      { label: 'Impressions', value: '10.2M' },
                      { label: 'Pre-orders', value: '12.5K' },
                    ],
                  },
                  {
                    client: 'Global Consumer Brands',
                    category: 'FMCG',
                    title: "FMCG Giant's Multi-Market Launch Success",
                    description: 'Orchestrate a synchronized product launch across 8 Asian markets',
                    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
                    duration: '60 days',
                    budget: '$350K',
                    metrics: [
                      { label: 'Markets', value: '8' },
                      { label: 'Sales Lift', value: '+89%' },
                    ],
                  },
                ].map((study, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[380px]"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group bg-white rounded-2xl shadow-mw-lg hover:shadow-mw-xl border border-mw-blue-100 overflow-hidden h-full transition-all duration-300">
                      {/* Image Thumbnail */}
                      <div className="relative h-52 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category & Key Metric overlay */}
                        <div className="absolute inset-0 p-5 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-mw-gray-800 text-xs font-semibold rounded-full">
                              {study.category}
                            </span>
                            <span className="px-3 py-1 bg-mw-blue-600 text-white text-xs font-bold rounded-full">
                              {study.metrics[0].value}
                            </span>
                          </div>
                          <div className="flex justify-between items-end">
                            <span className="text-white/80 text-sm">{study.duration}</span>
                            <span className="text-white/80 text-sm">{study.budget}</span>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-mw-gray-900 mb-2 group-hover:text-mw-blue-600 transition-colors duration-300 leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-sm text-mw-blue-600 font-medium mb-3">{study.client}</p>
                        <p className="text-mw-gray-600 text-sm mb-5 leading-relaxed">{study.description}</p>
                        <Link
                          href="/resources/case-studies"
                          className="inline-flex items-center gap-2 text-mw-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                        >
                          View Case Study
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* Duplicate Set for Seamless Loop */}
                {[
                  {
                    client: 'Luxury Auto Group',
                    category: 'Automotive',
                    title: 'Premium Automotive Brand Achieves 300% ROI in Q4',
                    description: 'Increase dealership visits and test drive bookings during competitive holiday season',
                    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
                    duration: '90 days',
                    budget: '$250K',
                    metrics: [
                      { label: 'ROI Increase', value: '+300%' },
                      { label: 'Dealership Visits', value: '+187%' },
                    ],
                  },
                  {
                    client: 'FashionForward Stores',
                    category: 'Retail',
                    title: 'National Retail Chain Drives 45% Foot Traffic Increase',
                    description: 'Combat declining in-store visits amid shift to online shopping',
                    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
                    duration: '120 days',
                    budget: '$180K',
                    metrics: [
                      { label: 'Foot Traffic', value: '+45%' },
                      { label: 'In-Store Sales', value: '+62%' },
                    ],
                  },
                  {
                    client: 'MedCare Network',
                    category: 'Healthcare',
                    title: 'Healthcare Provider Reaches 2M Patients with Compliance',
                    description: 'Increase awareness of preventive care services while maintaining HIPAA compliance',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
                    duration: '60 days',
                    budget: '$95K',
                    metrics: [
                      { label: 'Impressions', value: '2.1M' },
                      { label: 'Appointments', value: '+78%' },
                    ],
                  },
                  {
                    client: 'NextGen Financial',
                    category: 'Finance',
                    title: 'Fintech Startup Generates 5,000+ Quality Leads',
                    description: 'Build brand awareness and generate qualified leads in competitive market',
                    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
                    duration: '45 days',
                    budget: '$125K',
                    metrics: [
                      { label: 'Qualified Leads', value: '5,234' },
                      { label: 'Brand Lift', value: '+89%' },
                    ],
                  },
                  {
                    client: 'InnovateTech Corp',
                    category: 'Technology',
                    title: 'Tech Company Launches Product with 10M Impressions',
                    description: 'Create buzz for new product launch in saturated market',
                    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
                    duration: '30 days',
                    budget: '$200K',
                    metrics: [
                      { label: 'Impressions', value: '10.2M' },
                      { label: 'Pre-orders', value: '12.5K' },
                    ],
                  },
                  {
                    client: 'Global Consumer Brands',
                    category: 'FMCG',
                    title: "FMCG Giant's Multi-Market Launch Success",
                    description: 'Orchestrate a synchronized product launch across 8 Asian markets',
                    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
                    duration: '60 days',
                    budget: '$350K',
                    metrics: [
                      { label: 'Markets', value: '8' },
                      { label: 'Sales Lift', value: '+89%' },
                    ],
                  },
                ].map((study, index) => (
                  <motion.div
                    key={`dup-${index}`}
                    className="flex-shrink-0 w-[380px]"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group bg-white rounded-2xl shadow-mw-lg hover:shadow-mw-xl border border-mw-blue-100 overflow-hidden h-full transition-all duration-300">
                      {/* Image Thumbnail */}
                      <div className="relative h-52 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category & Key Metric overlay */}
                        <div className="absolute inset-0 p-5 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-mw-gray-800 text-xs font-semibold rounded-full">
                              {study.category}
                            </span>
                            <span className="px-3 py-1 bg-mw-blue-600 text-white text-xs font-bold rounded-full">
                              {study.metrics[0].value}
                            </span>
                          </div>
                          <div className="flex justify-between items-end">
                            <span className="text-white/80 text-sm">{study.duration}</span>
                            <span className="text-white/80 text-sm">{study.budget}</span>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-mw-gray-900 mb-2 group-hover:text-mw-blue-600 transition-colors duration-300 leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-sm text-mw-blue-600 font-medium mb-3">{study.client}</p>
                        <p className="text-mw-gray-600 text-sm mb-5 leading-relaxed">{study.description}</p>
                        <Link
                          href="/resources/case-studies"
                          className="inline-flex items-center gap-2 text-mw-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                        >
                          View Case Study
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 bg-mw-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-mw-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              View All Case Studies
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-mw-gray-600">
              Get started with Moving Walls in four simple steps
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-mw-blue-200 via-purple-200 to-mw-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { title: 'Define Your Goals', description: 'Tell us your campaign objectives, target audience, and budget.' },
                { title: 'Discover Inventory', description: 'Browse our marketplace of 500K+ verified screens globally.' },
                { title: 'Launch Campaign', description: 'Activate your campaign with one-click deployment.' },
                { title: 'Measure Results', description: 'Track performance with real-time analytics and attribution.' }
              ].map((item: { title: string; description: string }, index: number) => {
                const icons = [
                  <svg key="step-0" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
                  <svg key="step-1" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  <svg key="step-2" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                  <svg key="step-3" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ];
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-mw-lg hover:shadow-mw-xl border border-mw-blue-100 transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 mb-4 text-mw-blue-600">{icons[index]}</div>
                    <h3 className="text-2xl font-bold text-mw-gray-900 mb-3">{item.title}</h3>
                    <p className="text-mw-gray-600 flex-1">{item.description}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Built for Every Brand Vertical
            </h2>
            <p className="text-xl text-mw-gray-600">
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
                    ? 'bg-mw-blue-600 text-white shadow-mw-lg scale-105'
                    : 'bg-white text-mw-gray-600 hover:bg-mw-gray-100 border border-mw-blue-100'
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
            className="bg-white rounded-2xl p-8 shadow-mw-lg border border-mw-blue-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mw-gray-900 mb-6">
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
                      <p className="text-mw-gray-600">Drive foot traffic to stores with location-based campaigns</p>
                      <p className="text-mw-gray-600">Promote seasonal sales and new product launches</p>
                      <p className="text-mw-gray-600">Target shoppers in high-traffic retail areas</p>
                    </>
                  )}
                  {activeTab === 'automotive' && (
                    <>
                      <p className="text-mw-gray-600">Launch new vehicle models with highway billboards</p>
                      <p className="text-mw-gray-600">Drive dealership visits with proximity targeting</p>
                      <p className="text-mw-gray-600">Build brand awareness during launch events</p>
                    </>
                  )}
                  {activeTab === 'cpg' && (
                    <>
                      <p className="text-mw-gray-600">Increase brand awareness at mass scale</p>
                      <p className="text-mw-gray-600">Promote new product lines in retail corridors</p>
                      <p className="text-mw-gray-600">Target specific demographics by location</p>
                    </>
                  )}
                  {activeTab === 'entertainment' && (
                    <>
                      <p className="text-mw-gray-600">Promote movie releases and streaming content</p>
                      <p className="text-mw-gray-600">Target entertainment districts and venues</p>
                      <p className="text-mw-gray-600">Create buzz around premieres and events</p>
                    </>
                  )}
                  {activeTab === 'tech' && (
                    <>
                      <p className="text-mw-gray-600">Launch new products in tech hubs</p>
                      <p className="text-mw-gray-600">Build brand awareness in business districts</p>
                      <p className="text-mw-gray-600">Target early adopters and professionals</p>
                    </>
                  )}
                  {activeTab === 'finance' && (
                    <>
                      <p className="text-mw-gray-600">Build trust with strategic billboard placements</p>
                      <p className="text-mw-gray-600">Promote new services in financial districts</p>
                      <p className="text-mw-gray-600">Target high-net-worth demographics</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-mw-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-mw-blue-600">+142%</div>
                    <div className="text-sm text-mw-gray-600">Avg ROI</div>
                  </div>
                  <div className="text-center p-3 bg-mw-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-mw-blue-600">3.2M</div>
                    <div className="text-sm text-mw-gray-600">Impressions</div>
                  </div>
                  <div className="text-center p-3 bg-mw-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-mw-blue-600">89%</div>
                    <div className="text-sm text-mw-gray-600">Brand Recall</div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-mw-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="w-32 h-32 text-mw-blue-600">
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

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-mw-gray-50 to-mw-blue-50 rounded-3xl p-12 shadow-mw-xl border border-mw-blue-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-mw-blue-100 text-mw-blue-600 rounded-full text-sm font-semibold mb-6">
                  FEATURED CASE STUDY
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-6">
                  How RetailMax Increased Store Visits by 240%
                </h3>
                <p className="text-lg text-mw-gray-700 mb-6">
                  RetailMax, a leading fashion retailer, used Moving Walls to launch a multi-city campaign targeting shoppers within 5 miles of their stores. Using MW Planner for audience insights and MW Activate for dynamic creative optimization, they achieved remarkable results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-mw-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-mw-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-mw-gray-900">240% increase in store visits</div>
                      <div className="text-sm text-mw-gray-600">Within 30 days of campaign launch</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-mw-gray-900">420% ROI achieved</div>
                      <div className="text-sm text-mw-gray-600">Well above industry average</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-mw-gray-900">18 cities activated in 3 days</div>
                      <div className="text-sm text-mw-gray-600">Rapid multi-market execution</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center gap-2 text-mw-blue-600 font-semibold hover:gap-3 transition-all group"
                >
                  Read Full Case Study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-mw-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop"
                    alt="RetailMax OOH Campaign - Digital Billboard in Shopping District"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Complete MW Platform Suite
            </h2>
            <p className="text-xl text-mw-gray-600">
              All the tools you need, integrated seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'MW Planner',
                description: 'AI-powered campaign planning and audience insights',
                features: ['Audience Analysis', 'Location Planning', 'ROI Forecasting'],
              },
              {
                name: 'MW Marketplace',
                description: 'Access 250,000+ premium billboard locations',
                features: ['Instant Booking', 'Real-time Availability', 'Transparent Pricing'],
              },
              {
                name: 'MW Studio',
                description: 'Creative design and optimization tools',
                features: ['Template Library', 'Auto-resize', 'A/B Testing'],
              },
              {
                name: 'MW Activate',
                description: 'Campaign activation and automation',
                features: ['One-click Launch', 'Automated Rules', 'Dynamic Optimization'],
              },
              {
                name: 'MW Measure',
                description: 'Real-time analytics and attribution',
                features: ['Live Dashboards', 'Attribution Tracking', 'Custom Reports'],
              },
              {
                name: 'MW Science',
                description: 'Data science and predictive analytics',
                features: ['Predictive Models', 'Audience Insights', 'Market Intelligence'],
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-mw-lg hover:shadow-mw-xl transition-all duration-300 border border-mw-blue-100 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mw-blue-600 via-mw-blue-500 to-purple-600 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-mw-gray-900 mb-3">{product.name}</h3>
                <p className="text-mw-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-mw-gray-700">
                      <svg className="w-5 h-5 text-mw-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-mw-gray-600">
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
                answer: "We provide real-time analytics including impressions, reach, frequency, attribution tracking, and foot traffic lift. Our MW Measure platform integrates with your existing analytics tools for comprehensive reporting."
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
                className="bg-mw-gray-50 rounded-2xl border border-mw-blue-100 overflow-hidden shadow-mw-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-mw-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-mw-gray-900 pr-8">{faq.question}</h3>
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
                    <p className="text-mw-gray-600 leading-relaxed">{faq.answer}</p>
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
