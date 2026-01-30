'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import TestimonialSection from '@/components/TestimonialSection'

// CDN Logo URLs for Trust Bar
const trustedBrands = [
  { name: 'Dentsu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Dentsu_logo.svg/200px-Dentsu_logo.svg.png' },
  { name: 'WPP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/WPP_logo.svg/200px-WPP_logo.svg.png' },
  { name: 'Publicis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Publicis_Groupe_logo.svg/200px-Publicis_Groupe_logo.svg.png' },
  { name: 'Omnicom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Omnicom_logo.svg/200px-Omnicom_logo.svg.png' },
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
    id: 'planning',
    title: 'Smart Planning',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    headline: 'AI-Powered Campaign Planning',
    description: 'Create winning OOH strategies with AI-driven recommendations. Access real-time inventory across 500,000+ screens worldwide.',
    features: ['Audience-first planning', 'Budget optimization', 'Multi-market campaigns', 'Predictive performance'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    id: 'whitelabel',
    title: 'White-Label Platform',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    headline: 'Your Brand, Your Platform',
    description: 'Deploy a fully branded OOH buying platform for your agency. Custom domains, logos, and complete control over client experience.',
    features: ['Custom branding', 'Client portals', 'Branded reporting', 'SSO integration'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
  },
  {
    id: 'reporting',
    title: 'Real-Time Reporting',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    headline: 'Impress Clients with Live Data',
    description: 'Generate stunning campaign reports with real-time metrics, foot traffic attribution, and competitive insights.',
    features: ['Live dashboards', 'Automated reports', 'Custom templates', 'Export to PDF/PPT'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 'workflow',
    title: 'Agency Workflow',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    headline: 'Streamlined Operations',
    description: 'Manage multiple clients, campaigns, and teams from a single dashboard. Automate approvals and track progress in real-time.',
    features: ['Multi-client management', 'Approval workflows', 'Team collaboration', 'Campaign scheduling'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: 'billing',
    title: 'Billing & Invoicing',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    headline: 'Simplified Financial Management',
    description: 'Handle client billing, vendor payments, and margin tracking all in one place. Automated invoicing saves hours every week.',
    features: ['Auto invoicing', 'Margin tracking', 'Payment processing', 'Financial reporting'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
  }
]

// Use case tabs data
const useCaseTabs = [
  {
    id: 'media',
    title: 'Media Agencies',
    description: 'Become the OOH experts your clients need with AI-powered planning tools and global inventory access.',
    benefits: ['Access 500,000+ screens globally', 'AI audience targeting', 'Competitive share of voice', 'Unified media planning'],
    metrics: { value: '3x', label: 'OOH Revenue Growth' },
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=350&fit=crop'
  },
  {
    id: 'creative',
    title: 'Creative Agencies',
    description: 'Bring creative visions to life with dynamic content capabilities and real-time creative testing.',
    benefits: ['Dynamic creative optimization', 'Multi-format support', 'Real-time A/B testing', 'Creative performance analytics'],
    metrics: { value: '45%', label: 'Better Engagement' },
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=350&fit=crop'
  },
  {
    id: 'digital',
    title: 'Digital Agencies',
    description: 'Extend digital campaigns into the physical world with programmatic OOH that mirrors online strategies.',
    benefits: ['Programmatic buying', 'Real-time bidding', 'Cross-channel attribution', 'Digital-OOH integration'],
    metrics: { value: '68%', label: 'Campaign Efficiency' },
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop'
  },
  {
    id: 'fullservice',
    title: 'Full-Service Agencies',
    description: 'Offer end-to-end OOH services from strategy to execution with our comprehensive platform.',
    benefits: ['Complete campaign management', 'Strategy to execution', 'Client self-service portals', 'White-glove support'],
    metrics: { value: '150+', label: 'Agency Partners' },
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop'
  },
  {
    id: 'boutique',
    title: 'Boutique Agencies',
    description: 'Compete with larger agencies using enterprise-grade tools at boutique-friendly pricing.',
    benefits: ['Flexible pricing', 'No minimum spend', 'Self-service platform', 'Expert support included'],
    metrics: { value: '$0', label: 'Platform Fees' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=350&fit=crop'
  }
]

// Features data
const features = [
  {
    title: 'Global Inventory Access',
    description: 'Connect your clients to 500,000+ OOH screens across 50+ countries from a single platform.',
    icon: '🌍',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'White-Label Solutions',
    description: 'Deploy a branded OOH buying platform for your agency with custom domains and complete control.',
    icon: '🏷️',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'AI-Powered Planning',
    description: 'Create winning OOH strategies with AI-driven recommendations and real-time audience insights.',
    icon: '🤖',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Real-Time Reporting',
    description: 'Impress clients with live campaign dashboards, foot traffic attribution, and ROI analytics.',
    icon: '📊',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Programmatic Buying',
    description: 'Access programmatic DOOH inventory with real-time bidding and automated campaign optimization.',
    icon: '⚡',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Client Management',
    description: 'Manage multiple clients, campaigns, and budgets from a centralized agency dashboard.',
    icon: '👥',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Competitive Intelligence',
    description: 'Track competitor OOH activity and share of voice to inform client strategies.',
    icon: '🎯',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Training & Support',
    description: 'Get dedicated account management, onboarding, and 24/7 support for your team.',
    icon: '🎓',
    gradient: 'from-rose-500 to-orange-500'
  }
]

// FAQ data
const faqs = [
  {
    question: 'How does the white-label platform work?',
    answer: 'Our white-label solution allows you to deploy a fully branded OOH buying platform under your agency\'s domain. Clients see your branding, colors, and logo throughout the experience. You maintain full control over pricing, margins, and client access while we handle the technology and media owner relationships.'
  },
  {
    question: 'What inventory is available through the platform?',
    answer: 'Access over 500,000 OOH screens across 50+ countries including billboards, digital displays, transit advertising, street furniture, and place-based media. Our inventory spans premium locations in major cities and extends to regional markets worldwide.'
  },
  {
    question: 'How does pricing work for agencies?',
    answer: 'We offer flexible pricing models including percentage of media spend, flat monthly fees, or hybrid arrangements. There are no minimum spend requirements, making our platform accessible to agencies of all sizes. Contact us for a customized quote.'
  },
  {
    question: 'Can we integrate with our existing tools?',
    answer: 'Yes, our platform offers APIs and integrations with popular agency tools including DSPs, DMPs, project management systems, and financial software. We also support SSO for seamless team access management.'
  },
  {
    question: 'What training and support do you provide?',
    answer: 'Every agency partner receives dedicated onboarding, platform training, and ongoing support. We provide sales enablement materials, pitch deck templates, and can join client calls to help close deals. Enterprise partners get dedicated account managers.'
  }
]

export default function AgenciesPage() {
  const [activePlatform, setActivePlatform] = useState('planning')
  const [activeTab, setActiveTab] = useState('media')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activePlatformData = platformTabs.find(tab => tab.id === activePlatform)
  const activeTabData = useCaseTabs.find(tab => tab.id === activeTab)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-gray-950 to-teal-950"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-300 text-sm font-medium">For Agencies</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Become Your Clients&apos;
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  OOH Expert
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access global OOH inventory, AI-powered planning, and real-time analytics. 
                Launch campaigns in minutes, not weeks. White-label our platform as your own.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Become a Partner
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '150+', label: 'Agency Partners' },
                  { value: '2,500+', label: 'Clients Served' },
                  { value: '68%', label: 'Time Saved' },
                  { value: '$500M+', label: 'Media Managed' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
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
                  <span className="ml-4 text-gray-400 text-sm">Agency Dashboard</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Agency Dashboard"
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
              Platform <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Tour</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore how Moving Walls empowers agencies to deliver exceptional OOH campaigns
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePlatform(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePlatform === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
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
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
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
            Trusted by Leading Agencies Worldwide
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
              From Manual to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automated</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how agencies transform their OOH operations with our platform
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
                  Weeks spent on manual RFPs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  Limited inventory options
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  No real-time performance data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  Complex billing reconciliation
                </li>
              </ul>
            </motion.div>

            {/* Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">The Transformation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  Instant inventory access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  AI-powered optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  Automated workflows
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  White-label capabilities
                </li>
              </ul>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">The New Way</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Launch campaigns in minutes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  500K+ screens globally
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Real-time analytics & reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Automated billing & invoicing
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
              Everything You Need to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Win More Business</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A complete suite of tools designed specifically for agency success
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
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300"
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
              Get Started in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">4 Simple Steps</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Partner with us and start delivering exceptional OOH campaigns in days, not months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sign Partnership', description: 'Complete onboarding and access our global inventory network', icon: '🤝' },
              { step: '02', title: 'Setup White-Label', description: 'Configure your branded platform with custom domains and styling', icon: '⚙️' },
              { step: '03', title: 'Add Your Clients', description: 'Create client workspaces and invite your team members', icon: '👥' },
              { step: '04', title: 'Launch Campaigns', description: 'Start planning, booking, and measuring OOH campaigns', icon: '🚀' }
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
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                )}
                <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-emerald-400 font-mono text-sm mb-2">{item.step}</div>
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
              Solutions for Every <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Agency Type</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you&apos;re a global network or boutique shop, we have the tools you need
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
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
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-emerald-400 font-bold text-2xl">{activeTabData.metrics.value}</span>
                  <span className="text-emerald-300 text-sm">{activeTabData.metrics.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeTabData.title}</h3>
                <p className="text-gray-400 text-lg mb-8">{activeTabData.description}</p>
                <ul className="space-y-4 mb-8">
                  {activeTabData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
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
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop"
                alt="Agency Case Study"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    DG
                  </div>
                  <div>
                    <p className="text-white font-semibold">Digital Growth Agency</p>
                    <p className="text-gray-400 text-sm">Global Media Agency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-300 text-sm font-medium">Case Study</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How a Media Agency <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Tripled OOH Revenue</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Digital Growth Agency partnered with Moving Walls to transform their OOH capabilities. 
                Within 12 months, they expanded from 5 to 50+ active OOH clients.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400">3x</div>
                  <div className="text-sm text-gray-400">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400">50+</div>
                  <div className="text-sm text-gray-400">Active Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400">70%</div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-emerald-500 pl-6 mb-8">
                <p className="text-gray-300 italic text-lg">
                  &quot;Moving Walls transformed how we approach OOH. What used to take weeks now takes hours. 
                  Our clients are thrilled with the results and transparency.&quot;
                </p>
                <cite className="text-gray-500 mt-4 block">— Sarah Chen, Head of Media</cite>
              </blockquote>

              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
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
              Frequently Asked <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about partnering with Moving Walls
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
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-gray-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                OOH Capabilities?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 150+ agencies already growing their OOH business with Moving Walls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Become a Partner
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
