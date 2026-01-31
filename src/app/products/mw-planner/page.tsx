import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MW-Planner - Strategic OOH Campaign Planning',
  description: 'Plan and optimize your out-of-home advertising campaigns with MW-Planner. AI-powered media planning, audience insights, and strategic campaign optimization.',
  openGraph: {
    title: 'MW-Planner - Strategic OOH Campaign Planning | Moving Walls',
    description: 'Plan and optimize your out-of-home advertising campaigns with AI-powered media planning and strategic optimization.',
  },
}

'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Custom SVG icons to replace Heroicons
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const LightBulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const CalculatorIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008V18H8.25v-.008zM12 13.5h.008v.008H12V13.5zm0 2.25h.008v.008H12v-.008zm0 2.25h.008V18H12v-.008zM15.75 13.5h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zM6 3.75A2.25 2.25 0 013.75 6v12A2.25 2.25 0 016 20.25h12A2.25 2.25 0 0120.25 18V6A2.25 2.25 0 0118 3.75H6z" />
  </svg>
)

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)



// Fully Interactive Campaign Dashboard
const InteractiveCampaignDashboard = () => {
  const [activeView, setActiveView] = useState('campaign-builder')
  const [campaignData, setCampaignData] = useState({
    name: 'Holiday Electronics Campaign',
    budget: 50000,
    duration: 30,
    platforms: ['Google', 'Facebook', 'TikTok'],
    targeting: {
      age: [25, 45],
      interests: ['Electronics', 'Gaming', 'Tech'],
      locations: ['US', 'Canada', 'UK']
    },
    bidStrategy: 'Auto-Optimize',
    creativeFormats: ['Video', 'Display', 'Native']
  })
  
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    ctr: 3.2,
    cpc: 1.45,
    cvr: 8.7,
    roas: 4.2
  })
  
  const [isSimulating, setIsSimulating] = useState(false)
  
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSimulating) {
      interval = setInterval(() => {
        setOptimizationMetrics(prev => ({
          ctr: Math.max(2.0, Math.min(5.0, prev.ctr + (Math.random() - 0.5) * 0.3)),
          cpc: Math.max(0.8, Math.min(2.5, prev.cpc + (Math.random() - 0.5) * 0.2)),
          cvr: Math.max(5.0, Math.min(12.0, prev.cvr + (Math.random() - 0.5) * 0.5)),
          roas: Math.max(2.5, Math.min(6.0, prev.roas + (Math.random() - 0.5) * 0.3))
        }))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isSimulating])
  
  // Dashboard Tab Icons
  const CampaignBuilderIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )

  const UsersIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )

  const CurrencyDollarIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.197-2.093-.523-1.147-.595-1.147-2.359 0-2.955C10.533 8.197 11.275 8 12 8s1.467.197 2.093.523c.626.326.626.994 0 1.32M12 6V4m0 2v2m0 8v2" />
    </svg>
  )

  const ChartBarSquareIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  )

  const LightBulbSolidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.865.525 3.607 1.425 5.097.375.625.975 1.125 1.725 1.425V21a.75.75 0 00.75.75h9a.75.75 0 00.75-.75v-2.478c.75-.3 1.35-.8 1.725-1.425.9-1.49 1.425-3.232 1.425-5.097 0-5.385-4.365-9.75-9.75-9.75zM8.25 19.5v.75h7.5V19.5c0-.621-.504-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125z" />
    </svg>
  )

  const views = [
    { id: 'campaign-builder', label: 'Campaign Builder', icon: CampaignBuilderIcon },
    { id: 'audience-insights', label: 'AI Audience Insights', icon: UsersIcon },
    { id: 'budget-optimizer', label: 'Budget Optimizer', icon: CurrencyDollarIcon },
    { id: 'performance-forecast', label: 'Performance Forecast', icon: ChartBarSquareIcon }
  ]
  
  const handleBudgetChange = (newBudget: number) => {
    setCampaignData(prev => ({ ...prev, budget: newBudget }))
  }
  
  const togglePlatform = (platform: string) => {
    setCampaignData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform) 
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }))
  }
  
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">MW-Planner Dashboard</h3>
            <p className="text-blue-100 text-sm">AI-Powered Campaign Planning</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 px-3 py-1 rounded-full text-sm">Live Demo</div>
            <div className={`w-3 h-3 rounded-full ${isSimulating ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeView === view.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <view.icon className="w-5 h-5" />
              <span>{view.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-6">
        {activeView === 'campaign-builder' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campaign Settings */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Campaign Setup</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                  <input 
                    type="text" 
                    value={campaignData.name}
                    onChange={(e) => setCampaignData(prev => ({...prev, name: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget: ${campaignData.budget.toLocaleString()}
                  </label>
                  <input 
                    type="range" 
                    min="10000" 
                    max="500000" 
                    step="5000"
                    value={campaignData.budget}
                    onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$10K</span>
                    <span>$500K</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
                  <div className="flex flex-wrap gap-2">
                    {['Google', 'Facebook', 'TikTok', 'LinkedIn', 'Twitter'].map((platform) => (
                      <button
                        key={platform}
                        onClick={() => togglePlatform(platform)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          campaignData.platforms.includes(platform)
                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                            : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Live Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Campaign Preview</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Reach</span>
                    <span className="font-semibold">{(campaignData.budget * 50).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected CTR</span>
                    <span className="font-semibold text-green-600">{optimizationMetrics.ctr.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected ROAS</span>
                    <span className="font-semibold text-purple-600">{optimizationMetrics.roas.toFixed(1)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platforms</span>
                    <span className="font-semibold">{campaignData.platforms.length}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`w-full mt-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isSimulating 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isSimulating ? 'Stop Live Simulation' : 'Start Live Simulation'}
                </button>
              </div>
            </div>
            
            {/* AI Recommendations */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-yellow-600 mr-3">
                  <LightBulbSolidIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-1">AI Recommendation</h5>
                  <p className="text-yellow-700 text-sm">
                    Based on your budget and targeting, consider adding Instagram to increase reach by 23% 
                    with similar demographics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'audience-insights' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Audience Size</h4>
                <div className="text-2xl font-bold text-purple-700">2.4M</div>
                <div className="text-sm text-purple-600">Potential reach</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Engagement Score</h4>
                <div className="text-2xl font-bold text-green-700">8.7/10</div>
                <div className="text-sm text-green-600">Above average</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Competition</h4>
                <div className="text-2xl font-bold text-blue-700">Medium</div>
                <div className="text-sm text-blue-600">Good opportunity</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Audience Breakdown</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Age 25-34</div>
                  <div className="font-semibold">42%</div>
                </div>
                <div>
                  <div className="text-gray-600">Age 35-44</div>
                  <div className="font-semibold">35%</div>
                </div>
                <div>
                  <div className="text-gray-600">Mobile Users</div>
                  <div className="font-semibold">78%</div>
                </div>
                <div>
                  <div className="text-gray-600">High Intent</div>
                  <div className="font-semibold">64%</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'budget-optimizer' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Budget Allocation</h4>
                <div className="space-y-4">
                  {campaignData.platforms.map((platform, index) => {
                    const percentage = Math.floor(100 / campaignData.platforms.length)
                    const amount = Math.floor(campaignData.budget * percentage / 100)
                    return (
                      <div key={platform} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-3 ${
                            index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'
                          }`}></div>
                          <span className="font-medium">{platform}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{percentage}%</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Optimization Impact</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="text-green-800 font-semibold">Potential Savings</div>
                    <div className="text-2xl font-bold text-green-700">$12,400</div>
                    <div className="text-sm text-green-600">Through AI optimization</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="text-blue-800 font-semibold">Performance Boost</div>
                    <div className="text-2xl font-bold text-blue-700">+34%</div>
                    <div className="text-sm text-blue-600">Expected ROI increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'performance-forecast' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Impressions', value: `${(campaignData.budget * 50).toLocaleString()}`, change: '+12%' },
                { label: 'Clicks', value: `${Math.floor(campaignData.budget * 50 * optimizationMetrics.ctr / 100).toLocaleString()}`, change: '+8%' },
                { label: 'Conversions', value: `${Math.floor(campaignData.budget * 50 * optimizationMetrics.ctr * optimizationMetrics.cvr / 10000).toLocaleString()}`, change: '+15%' },
                { label: 'Revenue', value: `$${Math.floor(campaignData.budget * optimizationMetrics.roas).toLocaleString()}`, change: '+23%' }
              ].map((metric, index) => (
                <div key={metric.label} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">30-Day Forecast</h4>
              <div className="text-sm text-gray-600 mb-4">
                Based on historical data and AI modeling
              </div>
              <div className="space-y-2">
                {['Week 1: Ramp-up phase', 'Week 2: Optimization kicks in', 'Week 3: Peak performance', 'Week 4: Sustained results'].map((week, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : index === 2 ? 'bg-green-400' : 'bg-blue-400'
                    }`}></div>
                    <span className="text-gray-700">{week}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MWPlanner() {
  const features = [
    {
      icon: LightBulbIcon,
      title: "Strategic Planning",
      description: "AI-driven campaign strategy development with predictive modeling and market analysis."
    },
    {
      icon: ChartBarIcon,
      title: "Performance Forecasting",
      description: "Advanced algorithms predict campaign outcomes and optimize budget allocation across channels."
    },
    {
      icon: CogIcon,
      title: "Automated Optimization",
      description: "Real-time campaign adjustments based on performance data and market conditions."
    },
    {
      icon: CheckCircleIcon,
      title: "Goal Tracking",
      description: "Comprehensive KPI monitoring with custom dashboards and automated reporting."
    }
  ]

  const benefits = [
    "Reduce campaign planning time by 75%",
    "Increase ROI through predictive optimization",
    "Seamless integration with existing workflows",
    "Real-time performance monitoring",
    "Advanced attribution modeling",
    "Cross-channel budget optimization"
  ]

  const integrations = [
    { name: "Google Ads", logo: "/assets/icons/google-ads.svg" },
    { name: "Meta Ads", logo: "/assets/icons/meta.svg" },
    { name: "Amazon DSP", logo: "/assets/icons/amazon.svg" },
    { name: "The Trade Desk", logo: "/assets/icons/ttd.svg" },
    { name: "Salesforce", logo: "/assets/icons/salesforce.svg" },
    { name: "HubSpot", logo: "/assets/icons/hubspot.svg" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                MW-Planner
                <span className="block text-3xl md:text-4xl font-light mt-3 text-blue-200">
                  Strategic Intelligence for Every Campaign
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
                Transform scattered campaign data into strategic advantage with AI-powered planning 
                that predicts performance, optimizes budgets, and delivers 
                <span className="text-yellow-300 font-semibold"> measurable ROI growth</span>.
              </p>

              {/* Key Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ), 
                    text: 'Predictive Performance Modeling' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ), 
                    text: 'Real-Time Budget Optimization' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    ), 
                    text: 'Cross-Channel Intelligence' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ), 
                    text: 'AI-Driven Recommendations' 
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
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-2xl hover:shadow-yellow-500/50 inline-flex items-center gap-2">
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
                <h3 className="text-xl font-semibold mb-6 text-white/90">Platform Performance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '145%', label: 'Avg ROI Increase', color: 'text-yellow-300' },
                    { value: '75%', label: 'Time Saved', color: 'text-green-300' },
                    { value: '$2.4M', label: 'Annual Savings', color: 'text-purple-300' },
                    { value: '10K+', label: 'Campaigns Optimized', color: 'text-blue-300' }
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
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white/90">Live Campaign Activity</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-300">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { action: 'Campaign optimized', client: 'TechCorp', impact: '+12% CTR', time: '2m ago' },
                    { action: 'Budget reallocated', client: 'RetailMax', impact: '$5.2K saved', time: '5m ago' },
                    { action: 'Performance alert', client: 'FinanceHub', impact: 'Action needed', time: '8m ago' }
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
                        <div className="text-xs text-blue-200">{activity.client}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-300">{activity.impact}</div>
                        <div className="text-xs text-blue-300">{activity.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by 2,500+ marketing teams worldwide</p>
            
            {/* Animated Logo Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex items-center justify-center gap-12 mb-8">
                {['TechCorp', 'RetailMax', 'FinanceHub', 'HealthPlus', 'AutoDrive', 'FoodCo'].map((company, index) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-lg font-bold text-gray-400">{company}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Review Scores & Awards */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5 on G2</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.8/5 on Capterra</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-blue-700">Leader in Marketing Planning</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full"
              >
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-semibold text-green-700">SOC 2 Type II Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Planning to Performance in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our intuitive workflow designed for marketers, not engineers
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Connect Your Data',
                  description: 'Integrate your ad platforms, CRM, and analytics tools in just 15 minutes',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  time: '~15 min',
                  color: 'blue'
                },
                {
                  step: '02',
                  title: 'AI Analyzes & Forecasts',
                  description: 'Our ML models process your data and generate predictive insights automatically',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  time: 'Instant',
                  color: 'indigo'
                },
                {
                  step: '03',
                  title: 'Build Optimized Campaigns',
                  description: 'Use AI recommendations to create campaigns with maximum ROI potential',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  time: '~30 min',
                  color: 'purple'
                },
                {
                  step: '04',
                  title: 'Monitor & Auto-Optimize',
                  description: 'Real-time performance tracking with automated budget and bid adjustments',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  time: '24/7',
                  color: 'green'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-600 mb-4`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                    {/* Time Badge */}
                    <div className={`inline-flex items-center bg-${item.color}-50 text-${item.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.time}
                    </div>
                  </div>

                  {/* Arrow Connector (mobile) */}
                  {index < 3 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Stats Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              { metric: '15 min', label: 'Average Setup Time' },
              { metric: '30 days', label: 'To Measurable ROI' },
              { metric: '24/7', label: 'Automated Optimization' }
            ].map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
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
              See MW-Planner in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven campaign planning with live dashboard previews
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <InteractiveCampaignDashboard />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Intelligence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>AI predicts campaign performance before launch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Automatic budget reallocation based on real-time data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Cross-platform optimization in real-time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Predictive alerts for underperforming segments</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">145%</div>
                  <div className="text-sm text-green-700">ROI Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">75%</div>
                  <div className="text-sm text-blue-700">Time Savings</div>
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
              Powerful Planning Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and AI-driven insights to optimize your campaign planning from strategy to execution.
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
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
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

      {/* Customer Success Stories */}
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
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading brands transformed their campaign performance with MW-Planner
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "TechFlow Solutions",
                industry: "SaaS", 
                challenge: "Struggling with multi-channel attribution and budget waste",
                result: "287% ROI increase, $1.2M annual savings",
                metric: "287% ROI",
                quote: "MW-Planner's AI recommendations saved us from a $400K budget misallocation. The predictive insights are game-changing.",
                author: "Sarah Chen, CMO",
                color: "blue"
              },
              {
                company: "RetailMax Group",
                industry: "E-commerce",
                challenge: "Poor seasonal planning and inventory-marketing alignment", 
                result: "164% conversion rate improvement, 43% faster planning",
                metric: "164% CVR",
                quote: "We went from reactive to predictive. MW-Planner anticipated our Black Friday surge and optimized our spend perfectly.",
                author: "Marcus Johnson, VP Marketing",
                color: "green"
              },
              {
                company: "FinanceFirst",
                industry: "Financial Services",
                challenge: "Complex compliance requirements limiting campaign agility",
                result: "231% qualified lead increase, 67% cost reduction",
                metric: "231% Leads", 
                quote: "The compliance-aware optimization freed up 40 hours per week while improving our lead quality significantly.",
                author: "Diana Rodriguez, Marketing Director",
                color: "purple"
              }
            ].map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex items-center bg-${story.color}-100 text-${story.color}-800 px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                  {story.industry}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                
                <div className={`text-4xl font-bold text-${story.color}-600 mb-3`}>
                  {story.metric}
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{story.quote}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Challenge:</div>
                  <div className="text-sm text-gray-700 mb-3">{story.challenge}</div>
                  
                  <div className="text-sm text-gray-500 mb-2">Result:</div>
                  <div className="text-sm font-semibold text-gray-900 mb-3">{story.result}</div>
                  
                  <div className="text-sm font-medium text-gray-900">— {story.author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified campaign planning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {integration.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about MW-Planner
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How accurate are MW-Planner's performance predictions?",
                answer: "Our AI models achieve 94.2% accuracy in performance forecasting, validated across 10,000+ campaigns. The system continuously learns from your campaign data, improving predictions over time. We also provide confidence intervals for all forecasts, so you know exactly how reliable each prediction is."
              },
              {
                question: "How long does integration and setup take?",
                answer: "Most customers are fully operational within 15-30 minutes. Our one-click integrations connect with major ad platforms (Google Ads, Meta, LinkedIn, etc.) instantly. Historical data import typically completes within 2-4 hours depending on data volume. Our onboarding team provides live support to ensure smooth setup."
              },
              {
                question: "What happens to my campaign data? Is it secure?",
                answer: "Your data security is our top priority. MW-Planner is SOC 2 Type II certified and fully compliant with GDPR, CCPA, and other privacy regulations. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never share your data with third parties or use it to train models for other customers. You maintain full ownership and can export or delete your data anytime."
              },
              {
                question: "Do I need technical skills or training to use MW-Planner?",
                answer: "No technical skills required! MW-Planner is designed for marketers, not engineers. The interface is intuitive with guided workflows and contextual help. We provide: 1) Interactive onboarding tutorial, 2) Live training sessions (weekly), 3) Video library with 50+ how-to guides, 4) Dedicated customer success manager for enterprise plans. Most users are productive within their first day."
              },
              {
                question: "Can MW-Planner handle multiple brands or clients?",
                answer: "Absolutely! MW-Planner supports unlimited workspaces, making it perfect for agencies and multi-brand enterprises. Each workspace has isolated data, custom branding, and separate team access controls. You can easily switch between clients and consolidate reporting across all accounts."
              },
              {
                question: "What's included in the 30-day free trial?",
                answer: "Full access to all MW-Planner features with no limitations: unlimited campaigns, all AI forecasting tools, complete integrations, advanced reporting, and priority support. No credit card required to start. If you don't see measurable ROI improvement within 30 days, we'll extend your trial for free until you do."
              },
              {
                question: "How does MW-Planner compare to Google Ads Manager or Meta Ads Manager?",
                answer: "MW-Planner complements (not replaces) platform-native tools. Key differences: 1) Cross-platform optimization - we optimize across ALL your channels simultaneously, not just one, 2) Predictive AI - we forecast performance before you spend, not just report after, 3) Strategic planning - we help with budget allocation and audience strategy, not just execution, 4) Time savings - automate 75% of manual planning work. Most customers use MW-Planner for strategic planning and native tools for day-to-day execution."
              },
              {
                question: "What kind of ROI improvement can I realistically expect?",
                answer: "Based on 2,500+ customer deployments: Average ROAS improvement of 156% within 90 days (median: 134%), Cost savings of 24-42% through waste reduction, Time savings of 68-82% on campaign planning tasks. Results vary by industry, campaign maturity, and implementation. E-commerce typically sees faster results (30-45 days), while B2B SaaS takes 60-90 days. We guarantee measurable improvement or your money back."
              },
              {
                question: "Can I export my data and reports?",
                answer: "Yes! Export options include: CSV, Excel, PDF for all reports and data tables, API access for custom integrations (available on Pro and Enterprise plans), Scheduled email reports (daily, weekly, monthly), Direct integrations with BI tools (Tableau, Looker, Power BI), Webhook support for real-time data streaming. You own your data and can take it with you anytime."
              },
              {
                question: "What support options are available?",
                answer: "Support varies by plan: Starter: Email support (24-hour response), Knowledge base, Video tutorials; Professional: Priority email support (4-hour response), Monthly strategy calls, Slack channel access; Enterprise: 24/7 phone support, Dedicated customer success manager, Custom onboarding and training, Quarterly business reviews. All plans include access to our community forum and weekly group training webinars."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-lg text-gray-900 cursor-pointer list-none">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <svg 
                    className="w-6 h-6 text-blue-600 flex-shrink-0 transition-transform group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Schedule a personalized demo or chat with our product experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}