'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Icon Components
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// Feature Icons as SVG
const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const DocumentReportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const CurrencyDollarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const FrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const CpuChipIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const PresentationChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
)

// Trust bar client logos
const clientLogos = [
  { name: 'Samsung', logo: 'S' },
  { name: 'HSBC', logo: 'H' },
  { name: 'Unilever', logo: 'U' },
  { name: 'McDonald\'s', logo: 'M' },
  { name: 'Toyota', logo: 'T' },
  { name: 'Nike', logo: 'N' },
  { name: 'L\'Oréal', logo: 'L' },
  { name: 'Coca-Cola', logo: 'C' },
  { name: 'P&G', logo: 'P' },
  { name: 'Nestlé', logo: 'N' },
]

// Integration partners with SVG logos
const integrations = [
  { 
    name: 'Google Ads', 
    category: 'Advertising',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
      </svg>
    )
  },
  { 
    name: 'Meta Ads', 
    category: 'Advertising',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    category: 'Advertising',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
      </svg>
    )
  },
  { 
    name: 'DV360', 
    category: 'Programmatic',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    )
  },
  { 
    name: 'Trade Desk', 
    category: 'Programmatic',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0CA678"/>
        <path d="M6 8h12v2H6V8zm0 3h12v2H6v-2zm0 3h8v2H6v-2z" fill="white"/>
      </svg>
    )
  },
  { 
    name: 'Salesforce', 
    category: 'CRM',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.39 0-.78-.045-1.155-.12-.63 1.38-2.025 2.34-3.63 2.34a4.02 4.02 0 01-1.875-.465 4.186 4.186 0 01-3.885 2.64c-2.085 0-3.84-1.545-4.155-3.585a4.348 4.348 0 01-.69.06c-2.37 0-4.29-1.95-4.29-4.35 0-1.65.9-3.09 2.235-3.84a4.793 4.793 0 01-.18-1.29c0-2.58 2.055-4.68 4.59-4.68 1.5 0 2.835.72 3.69 1.845l.51-.444z" fill="#00A1E0"/>
      </svg>
    )
  },
  { 
    name: 'HubSpot', 
    category: 'CRM',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.198 2.198 0 0017.232.836h-.066a2.198 2.198 0 00-2.198 2.198v.066c0 .832.467 1.554 1.152 1.927v2.912a5.202 5.202 0 00-2.675 1.263l-7.6-5.927a2.63 2.63 0 00.087-.657 2.616 2.616 0 10-2.616 2.617c.471 0 .912-.127 1.294-.346l7.476 5.83a5.254 5.254 0 00-.576 2.374c0 .88.219 1.71.601 2.439l-2.27 2.27a1.953 1.953 0 00-.58-.095 1.971 1.971 0 101.971 1.971c0-.2-.032-.393-.087-.576l2.306-2.306a5.257 5.257 0 103.545-9.166zm-.965 7.652a2.618 2.618 0 110-5.236 2.618 2.618 0 010 5.236z" fill="#FF7A59"/>
      </svg>
    )
  },
  { 
    name: 'Analytics', 
    category: 'Analytics',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M22.84 2.998v17.004c0 1.1-.9 2-2 2H4.16c-1.1 0-2-.9-2-2V3.998c0-1.1.9-2 2-2h16.68c1.1 0 2 .9 2 2z" fill="#F9AB00"/>
        <path d="M20.16 14.498v4.504c0 .55-.45 1-1 1h-4.504c-.55 0-1-.45-1-1v-4.504c0-.55.45-1 1-1h4.504c.55 0 1 .45 1 1z" fill="#E37400"/>
      </svg>
    )
  },
  { 
    name: 'Adobe', 
    category: 'Analytics',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm.001 0h3.71L24 1.376H15.087l-1.12 21.248zM0 1.376l6.966 21.248h3.71L4.12 8.809l4.209-7.433H0z" fill="#FF0000"/>
      </svg>
    )
  },
  { 
    name: 'Tableau', 
    category: 'BI',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M11.654 5.327V3.435h-1.09v1.892H8.672v1.09h1.892v1.891h1.09V6.417h1.891v-1.09h-1.891zM17.018 9.745V6.963h-1.636v2.782h-2.782v1.636h2.782v2.782h1.636v-2.782h2.782V9.745h-2.782zM7.036 11.927V9.691H5.945v2.236H3.709v1.091h2.236v2.236h1.091v-2.236h2.236v-1.091H7.036zM17.018 16.8v-2.236h-1.636V16.8h-2.236v1.636h2.236v2.237h1.636V18.436h2.782V16.8h-2.782zM11.654 14.564v-1.891h-1.09v1.891H8.672v1.091h1.892v1.891h1.09v-1.891h1.891v-1.091h-1.891zM5.4 17.891v-1.636H4.309v1.636H2.673v1.091h1.636v1.636H5.4v-1.636h1.636v-1.091H5.4z" fill="#E97627"/>
      </svg>
    )
  },
  { 
    name: 'Looker', 
    category: 'BI',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4"/>
      </svg>
    )
  },
  { 
    name: 'Slack', 
    category: 'Collaboration',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" fill="#E01E5A"/>
      </svg>
    )
  },
]

// Features data
const features = [
  {
    title: 'AI-Powered Forecasting',
    description: 'Predict campaign performance with 94% accuracy before spending a single dollar.',
    icon: TargetIcon,
  },
  {
    title: 'Cross-Channel Optimization',
    description: 'Automatically allocate budgets across channels for maximum ROI impact.',
    icon: ChartBarIcon,
  },
  {
    title: 'Audience Intelligence',
    description: 'Discover high-value segments using machine learning on your first-party data.',
    icon: UsersIcon,
  },
  {
    title: 'Real-Time Dashboards',
    description: 'Monitor live performance metrics with customizable, shareable dashboards.',
    icon: TrendingUpIcon,
  },
  {
    title: 'Automated Reporting',
    description: 'Generate stakeholder-ready reports automatically on your schedule.',
    icon: DocumentReportIcon,
  },
  {
    title: 'Budget Optimizer',
    description: 'Maximize every dollar with AI-driven budget recommendations.',
    icon: CurrencyDollarIcon,
  },
]

// Testimonials
const testimonials = [
  {
    quote: "MW-Planner's AI recommendations saved us from a $400K budget misallocation. The predictive insights are game-changing.",
    author: 'Sarah Chen',
    role: 'CMO',
    company: 'TechFlow Solutions',
    metric: '287% ROI',
    image: '/assets/images/testimonials/sarah.jpg',
  },
  {
    quote: "We went from reactive to predictive. MW-Planner anticipated our Black Friday surge and optimized our spend perfectly.",
    author: 'Marcus Johnson',
    role: 'VP Marketing',
    company: 'RetailMax Group',
    metric: '164% CVR',
    image: '/assets/images/testimonials/marcus.jpg',
  },
  {
    quote: "The compliance-aware optimization freed up 40 hours per week while improving our lead quality significantly.",
    author: 'Diana Rodriguez',
    role: 'Marketing Director',
    company: 'FinanceFirst',
    metric: '231% Leads',
    image: '/assets/images/testimonials/diana.jpg',
  },
]

// Resources/Blog posts
const resources = [
  {
    title: 'The Future of AI in Campaign Planning',
    description: 'How machine learning is revolutionizing media buying and budget allocation.',
    category: 'Blog',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    title: 'Maximizing ROAS: A Complete Guide',
    description: 'Proven strategies from brands achieving 200%+ return on ad spend.',
    category: 'Guide',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Cross-Channel Attribution Decoded',
    description: 'Understanding the customer journey across touchpoints for better optimization.',
    category: 'Whitepaper',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
]

export default function MWPlanner() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - CloudSEK Style */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-sm font-medium">AI-Powered Campaign Intelligence</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Turn Data Into
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Campaign Success
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-blue-100/80 mb-8 max-w-xl leading-relaxed">
                The AI command center that predicts performance, optimizes budgets, and delivers measurable ROI—before you spend a dollar.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-6 h-6 text-blue-400" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-200/70 text-sm">Enterprise Teams</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">$2.4B+</div>
                  <div className="text-blue-200/70 text-sm">Ad Spend Optimized</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">156%</div>
                  <div className="text-blue-200/70 text-sm">Avg. ROAS Lift</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-white/40">MW-Planner Dashboard</div>
                </div>

                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  {/* Performance Chart */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/60 text-sm">Campaign Performance</span>
                      <span className="text-green-400 text-sm font-medium">+23.4%</span>
                    </div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 + 0.5 }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'ROAS', value: '4.2x', change: '+18%' },
                      { label: 'CPA', value: '$12.40', change: '-24%' },
                      { label: 'CTR', value: '3.8%', change: '+12%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/50 text-xs mb-1">{stat.label}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                        <div className="text-green-400 text-xs">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* AI Recommendation */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CpuChipIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 text-sm font-medium">AI Insight</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Shift 15% budget from Display to Social for projected +$24K revenue uplift this week.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Logo Marquee */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Trusted by 500+ leading brands and agencies worldwide
            </p>
          </motion.div>

          {/* Logo Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12 items-center">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-12 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-bold text-xl hover:text-gray-600 transition-colors"
                >
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stop Guessing.
                <span className="block text-blue-600">Start Predicting.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Traditional campaign planning relies on historical data and gut instinct. MW-Planner uses AI to forecast performance, optimize allocation, and maximize ROI—in real time.
              </p>

              <div className="space-y-4">
                {[
                  '94% accurate performance predictions before launch',
                  'Automated budget optimization across all channels',
                  'Real-time alerts for underperforming campaigns',
                  'Stakeholder-ready reports generated automatically',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  See How It Works
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Transformation Journey */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                {/* Timeline Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <FrownIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="font-semibold text-red-600">Before</span>
                  </motion.div>

                  {/* Animated Progress Bar */}
                  <div className="flex-1 mx-4 relative">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-red-400 via-blue-500 to-green-500 rounded-full"
                      />
                    </div>
                    {/* Animated Dot */}
                    <motion.div
                      initial={{ left: '0%' }}
                      whileInView={{ left: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-lg"
                    />
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <span className="font-semibold text-green-600">After</span>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <RocketIcon className="w-6 h-6 text-green-500" />
                    </div>
                  </motion.div>
                </div>

                {/* Transformation Steps */}
                <div className="space-y-4">
                  {[
                    { before: 'Hours on manual reporting', after: 'Reports in 2 minutes', metric: '75%', label: 'Time Saved' },
                    { before: 'Guesswork budgeting', after: 'AI-driven allocation', metric: '94%', label: 'Accuracy' },
                    { before: 'Reactive adjustments', after: 'Predictive optimization', metric: '3x', label: 'Faster' },
                    { before: 'Siloed channel data', after: 'Unified dashboard', metric: '100%', label: 'Visibility' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4">
                        {/* Before State */}
                        <motion.div
                          initial={{ opacity: 1 }}
                          whileInView={{ opacity: 0.5 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-500 line-through">{item.before}</span>
                        </motion.div>

                        {/* Arrow Animation */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 1.0 + index * 0.15 }}
                          viewport={{ once: true }}
                          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.div>

                        {/* After State */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.3 + index * 0.15 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{item.after}</span>
                        </motion.div>

                        {/* Metric Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.5 + index * 0.15, type: 'spring' }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-xs font-bold min-w-[100px] text-center shadow-lg shadow-blue-500/20"
                        >
                          <div className="text-base font-extrabold">{item.metric}</div>
                          <div className="text-[10px] opacity-80 uppercase tracking-wide">{item.label}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final Result Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  viewport={{ once: true }}
                  className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-semibold">Average ROI improvement: <span className="text-xl">156%</span> within 90 days</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                    >
                      <TrendingUpIcon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools that transform how you plan, execute, and optimize campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - CloudSEK Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-600 font-medium text-sm">50+ Integrations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Don't Replace.
                <span className="block text-blue-600">Integrate.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MW-Planner connects seamlessly with your existing tech stack. No rip-and-replace—just instant value from day one.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['Advertising', 'Analytics', 'CRM', 'BI Tools'].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{category}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/integrations"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                >
                  View All Integrations
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 hover:shadow-md transition-all text-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 mx-auto mb-3 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      {integration.logo}
                    </div>
                    <div className="text-sm font-medium text-gray-700">{integration.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{integration.category}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results. Real Customers.
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              See how leading brands transformed their campaign performance
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`${index === activeTestimonial ? 'block' : 'hidden'}`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Metric */}
                    <div className="text-center md:text-left">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        {testimonial.metric}
                      </div>
                      <div className="text-blue-200/70">Improvement</div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-32 bg-white/20"></div>

                    {/* Quote */}
                    <div className="flex-1">
                      <p className="text-xl text-white/90 mb-6 leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{testimonial.author}</div>
                          <div className="text-blue-200/70 text-sm">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-blue-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Learn & Grow
              </h2>
              <p className="text-xl text-gray-600">
                Expert insights to level up your campaign strategy
              </p>
            </div>
            <Link
              href="/resources"
              className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 mt-4 md:mt-0"
            >
              View All Resources
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                {/* Image Thumbnail */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                    <span className="text-gray-400 text-xs">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
