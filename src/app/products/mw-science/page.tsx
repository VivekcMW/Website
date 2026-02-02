'use client'

import { motion } from "framer-motion"

// Custom SVG icons
const BeakerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5a2.25 2.25 0 00-.659 1.591L4.5 18a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25l-.159-1.909a2.25 2.25 0 00-.659-1.591L14.25 10.409a2.25 2.25 0 01-.659-1.591V3.104M9.75 3.104c0-.414.336-.75.75-.75h3c.414 0 .75.336.75.75M9.75 3.104V18h4.5V3.104" />
  </svg>
)

const CpuChipIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
  </svg>
)

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const ChartPieIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

// Integration logos for Don't Replace. Integrate. section
const integrations = [
  { 
    name: 'BigQuery', 
    category: 'Data',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M6.63 18.96L1 15.86v-7.7L6.63 5v13.96zM14.74 22l-5.22-2.84V4.85L14.74 2v20zM23 15.86l-5.63 3.1V5l5.63 3.15v7.7z" fill="#4285F4"/>
      </svg>
    )
  },
  { 
    name: 'Snowflake', 
    category: 'Data',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4m0 12v4m8.49-14.49l-2.83 2.83m-11.32 5.66l-2.83 2.83m0-11.32l2.83 2.83m11.32 5.66l2.83 2.83M22 12h-4M6 12H2" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#29B5E8"/>
      </svg>
    )
  },
  { 
    name: 'Databricks', 
    category: 'AI/ML',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#FF3621"/>
        <path d="M12 12L2 7m10 5l10-5m-10 5v10" stroke="white" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    name: 'Python', 
    category: 'Research',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .58-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z" fill="#3776AB"/>
        <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.205-1.85c-.578 0-1.046-.47-1.046-1.052 0-.58.468-1.051 1.046-1.051.579 0 1.046.47 1.046 1.051 0 .582-.467 1.052-1.046 1.052z" fill="#FFD43B"/>
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
    category: 'Analytics',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4"/>
      </svg>
    )
  },
  { 
    name: 'AWS', 
    category: 'Cloud',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#232F3E"/>
        <path d="M8.52 12.75c0 .25.03.46.08.63.06.17.13.35.23.54.04.07.05.13.05.19 0 .08-.05.16-.16.24l-.54.36c-.08.05-.15.08-.21.08-.08 0-.16-.04-.23-.12-.11-.12-.2-.25-.28-.39-.08-.14-.16-.3-.24-.49-.6.71-1.36 1.07-2.27 1.07-.65 0-1.17-.19-1.54-.56-.38-.37-.57-.87-.57-1.49 0-.66.23-1.19.7-1.59.47-.4 1.09-.6 1.89-.6.26 0 .53.02.81.06.28.04.57.1.88.17v-.56c0-.59-.12-.99-.36-1.23-.24-.23-.66-.35-1.25-.35-.27 0-.54.03-.83.1-.29.07-.57.15-.84.27-.13.06-.22.09-.28.11-.06.02-.1.03-.14.03-.12 0-.18-.09-.18-.27v-.42c0-.14.02-.24.07-.31.05-.06.13-.12.26-.18.27-.14.6-.26.98-.35.38-.09.79-.14 1.22-.14.93 0 1.61.21 2.04.63.43.42.64 1.06.64 1.91v2.52h.03zm-3.14 1.18c.25 0 .51-.05.78-.14.27-.09.51-.24.72-.44.13-.13.23-.27.29-.44.06-.17.09-.37.09-.62v-.3c-.23-.05-.47-.1-.72-.13-.25-.03-.5-.05-.74-.05-.51 0-.89.1-1.14.31-.25.21-.38.5-.38.87 0 .36.09.63.28.81.19.18.45.27.79.27l.03-.14zm6.2.83c-.16 0-.26-.03-.33-.08-.07-.05-.13-.16-.18-.31l-1.98-6.52c-.05-.16-.08-.26-.08-.32 0-.13.07-.2.2-.2h.77c.17 0 .28.03.34.08.07.05.12.16.17.31l1.42 5.58 1.31-5.58c.04-.16.09-.26.16-.31.07-.05.19-.08.35-.08h.63c.17 0 .29.03.35.08.07.05.13.16.17.31l1.33 5.65 1.46-5.65c.05-.16.11-.26.17-.31.07-.05.18-.08.34-.08h.73c.13 0 .21.07.21.2 0 .04-.01.08-.02.13-.01.05-.03.11-.06.2l-2.03 6.52c-.05.16-.11.26-.18.31-.07.05-.18.08-.33.08h-.68c-.17 0-.28-.03-.35-.08-.07-.06-.13-.16-.17-.32l-1.31-5.45-1.29 5.45c-.04.16-.1.26-.17.32-.07.05-.19.08-.36.08h-.68v-.01z" fill="#FF9900"/>
      </svg>
    )
  },
  { 
    name: 'GCP', 
    category: 'Cloud',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12.19 5.599l3.49 2.017v4.035l-3.49 2.016-3.49-2.016V7.616l3.49-2.017z" fill="#4285F4"/>
        <path d="M8.7 7.616l3.49 2.017-3.49 2.018-3.49-2.018 3.49-2.017z" fill="#34A853"/>
        <path d="M15.68 7.616l3.49 2.017-3.49 2.018V7.616z" fill="#FBBC05"/>
        <path d="M12.19 13.667l3.49 2.017v4.035l-3.49 2.016v-8.068z" fill="#EA4335"/>
      </svg>
    )
  },
  { 
    name: 'Azure', 
    category: 'Cloud',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M5.483 21L13.27 3h4.63L9.31 21H5.483zM14.5 7l6 10.5H10.5L14.5 7z" fill="#0089D6"/>
      </svg>
    )
  },
]

export default function MWScience() {
  const features = [
    {
      icon: BeakerIcon,
      title: "Research & Testing",
      description: "Advanced A/B testing and multivariate analysis with statistical significance modeling."
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that surface actionable insights from complex data patterns."
    },
    {
      icon: BrainIcon,
      title: "Predictive Modeling",
      description: "Forecast audience behavior, market trends, and campaign performance with precision."
    },
    {
      icon: ChartPieIcon,
      title: "Advanced Segmentation",
      description: "Dynamic audience segmentation based on behavioral, demographic, and psychographic data."
    }
  ]

  const researchCapabilities = [
    {
      category: "Audience Research",
      capabilities: ["Behavioral Analysis", "Psychographic Profiling", "Journey Mapping", "Intent Prediction", "Lookalike Modeling", "Churn Analysis"]
    },
    {
      category: "Market Intelligence",
      capabilities: ["Competitive Analysis", "Market Trends", "Category Insights", "Opportunity Identification", "Brand Positioning", "Share of Voice"]
    },
    {
      category: "Performance Science",
      capabilities: ["Attribution Modeling", "Incrementality Testing", "Media Mix Modeling", "Geo-Testing", "Holdout Analysis", "Lift Studies"]
    },
    {
      category: "Creative Science",
      capabilities: ["Creative Testing", "Message Optimization", "Visual Analysis", "Emotional Response", "Brand Safety", "Content Performance"]
    }
  ]

  const aiModels = [
    { name: "Audience Prediction", accuracy: "94.2%", description: "Predicts audience behavior and preferences" },
    { name: "Conversion Forecasting", accuracy: "89.7%", description: "Forecasts conversion probability and timing" },
    { name: "Churn Prevention", accuracy: "91.5%", description: "Identifies at-risk customers before they churn" },
    { name: "Content Optimization", accuracy: "86.3%", description: "Optimizes creative elements for performance" },
    { name: "Budget Allocation", accuracy: "92.8%", description: "Recommends optimal budget distribution" },
    { name: "Trend Detection", accuracy: "88.9%", description: "Identifies emerging market trends and opportunities" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                MW-Science
                <span className="block text-3xl md:text-4xl font-light mt-3 text-purple-200">
                  AI-Powered Audience Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-violet-100">
                Transform data into strategic advantage with machine learning models that deliver
                <span className="text-yellow-300 font-semibold"> 94% prediction accuracy</span>.
              </p>

              {/* Key Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ), 
                    text: 'Predictive Audience Modeling' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    ), 
                    text: 'Advanced AI Research Tools' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ), 
                    text: 'Market Intelligence & Trends' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ), 
                    text: 'A/B Testing & Experimentation' 
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <div className="text-yellow-300">{item.icon}</div>
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-violet-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-2xl hover:shadow-yellow-500/50 inline-flex items-center gap-2">
                  Book Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats & Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Main Stats Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-white/90">AI Model Performance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '94.2%', label: 'Prediction Accuracy', color: 'text-yellow-300' },
                    { value: '1M+', label: 'Data Points/sec', color: 'text-green-300' },
                    { value: '250+', label: 'AI Models', color: 'text-purple-300' },
                    { value: '15K+', label: 'Tests Run', color: 'text-blue-300' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-purple-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white/90">Research Activity</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-300">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { action: 'Model trained', client: 'Audience Predict', impact: '96% accuracy', time: '1m ago' },
                    { action: 'Test completed', client: 'Creative A/B', impact: 'Winner found', time: '4m ago' },
                    { action: 'Insight generated', client: 'Market Trends', impact: 'New pattern', time: '7m ago' }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{activity.action}</div>
                        <div className="text-xs text-purple-200">{activity.client}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-300">{activity.impact}</div>
                        <div className="text-xs text-violet-300">{activity.time}</div>
                      </div>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock deeper understanding of your audiences with our comprehensive suite 
              of research tools powered by artificial intelligence and machine learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Research Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From audience research to creative optimization, our platform covers 
              every aspect of marketing science and consumer insight generation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchCapabilities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start space-x-2">
                      <CheckIcon className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Prediction Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary machine learning models deliver industry-leading accuracy 
              in predicting consumer behavior and market outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {model.name}
                  </h3>
                  <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-sm font-semibold">
                    {model.accuracy}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {model.description}
                </p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full" 
                    style={{ width: model.accuracy }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real-Time Intelligence Dashboard
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Access live insights and recommendations powered by continuous 
                data analysis and machine learning model updates.
              </p>
              <div className="space-y-6">
                {[
                  { insight: "Audience Behavioral Patterns", status: "3 new insights detected", color: "text-green-600" },
                  { insight: "Market Trend Analysis", status: "Emerging opportunity identified", color: "text-blue-600" },
                  { insight: "Creative Performance", status: "Optimization recommendations ready", color: "text-purple-600" },
                  { insight: "Competitive Intelligence", status: "2 competitor strategy updates", color: "text-orange-600" }
                ].map((item, index) => (
                  <motion.div
                    key={item.insight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 border-l-4 border-violet-500 pl-4 bg-gray-50 rounded-r-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.insight}</h4>
                      <p className={`text-sm ${item.color}`}>{item.status}</p>
                    </div>
                    <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-50 to-purple-100 p-8 rounded-2xl"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Research Impact Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Audience Understanding</span>
                    <span className="text-2xl font-bold text-violet-600">+287%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Prediction Accuracy</span>
                    <span className="text-2xl font-bold text-purple-600">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Research Speed</span>
                    <span className="text-2xl font-bold text-fuchsia-600">10x Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Insight Actionability</span>
                    <span className="text-2xl font-bold text-indigo-600">96.7%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Method Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scientific Marketing Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research follows rigorous scientific principles to ensure reliable, 
              actionable insights that drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Hypothesis", desc: "Form data-driven hypotheses based on market signals and behavioral patterns" },
              { step: "02", title: "Design", desc: "Structure experiments with proper controls and statistical significance requirements" },
              { step: "03", title: "Execute", desc: "Deploy tests across multiple channels with real-time monitoring and adjustment" },
              { step: "04", title: "Analyze", desc: "Apply advanced statistical methods and ML algorithms to extract insights" },
              { step: "05", title: "Apply", desc: "Implement findings with continuous monitoring and iterative optimization" }
            ].map((methodology, index) => (
              <motion.div
                key={methodology.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {methodology.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {methodology.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {methodology.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Don't Replace. Integrate. */}
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
                Don&apos;t Replace.
                <span className="block text-blue-600">Integrate.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MW-Science connects seamlessly with your existing data sources. No rip-and-replace—just instant insights from day one.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['Data Sources', 'Research Tools', 'AI/ML', 'Analytics'].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{category}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/integrations"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                >
                  View All Integrations
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Unlock the Science of Marketing
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your marketing strategy with AI-powered research, 
              predictive analytics, and scientific methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Research
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-violet-600 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}