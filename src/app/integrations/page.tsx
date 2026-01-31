'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

// Search Icon
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

// Arrow Right Icon
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// Check Icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// External Link Icon
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

// Code Icon
const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

// Categories
const categories = [
  { id: 'all', name: 'All Integrations', count: 32 },
  { id: 'advertising', name: 'Advertising', count: 8 },
  { id: 'programmatic', name: 'Programmatic', count: 5 },
  { id: 'analytics', name: 'Analytics', count: 6 },
  { id: 'crm', name: 'CRM', count: 4 },
  { id: 'bi', name: 'BI & Reporting', count: 5 },
  { id: 'collaboration', name: 'Collaboration', count: 4 },
]

// All integrations data
const integrations = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'advertising',
    description: 'Connect your Google Ads campaigns for unified reporting and AI-powered optimization across Search, Display, and YouTube.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate'],
    features: ['Real-time sync', 'Automated bidding', 'Cross-channel attribution', 'Budget optimization'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    category: 'advertising',
    description: 'Seamlessly integrate Facebook and Instagram ad campaigns with automated audience sync and performance tracking.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate', 'MW-Reach'],
    features: ['Audience sync', 'Conversion API', 'Creative optimization', 'Lookalike audiences'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
      </svg>
    ),
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    category: 'advertising',
    description: 'Connect LinkedIn Campaign Manager for B2B advertising optimization with professional audience targeting.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate'],
    features: ['Account targeting', 'Lead gen forms', 'Conversion tracking', 'ABM campaigns'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
      </svg>
    ),
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    category: 'advertising',
    description: 'Integrate TikTok For Business to reach Gen Z and Millennial audiences with creative-first advertising.',
    products: ['MW-Planner', 'MW-Activate', 'MW-Studio'],
    features: ['Spark ads', 'Pixel integration', 'Creative insights', 'Audience targeting'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#000"/>
      </svg>
    ),
  },
  {
    id: 'amazon-ads',
    name: 'Amazon Ads',
    category: 'advertising',
    description: 'Connect Amazon DSP and Sponsored Ads for e-commerce advertising optimization and attribution.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Marketplace'],
    features: ['DSP integration', 'Sponsored products', 'Attribution', 'Retail analytics'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.502.126.112.172.04.322-.216.45-.12.06-.245.12-.37.18l-.29.14c-2.924 1.2-5.923 1.8-8.996 1.8-4.478 0-8.612-1.14-12.403-3.418-.206-.127-.283-.253-.23-.38.03-.086.093-.134.19-.145l.09.002zM22.97 16.88c.19-.167.455-.14.615.012.16.153.157.41-.007.573-.162.165-.413.177-.57.012-.157-.165-.22-.431-.04-.597zm-1.01.687c-.2-.16-.52-.27-.8-.3l-.39.01c-.207.014-.35.07-.433.17l-.078.13-.018.06c0 .017.01.038.02.063l.03.043.07.063c.087.072.188.133.303.184l.17.068.112.04.11.04c.24.097.42.194.56.29.14.096.27.21.39.34.05.057.08.12.1.19l.01.14c0 .05-.003.093-.01.13-.007.04-.02.08-.04.12-.053.11-.143.2-.27.27-.127.07-.31.13-.55.19-.13.027-.28.04-.46.04-.4 0-.74-.1-.9-.19l-.14-.09-.09-.07-.02-.02-.014-.02-.007-.02.013-.04.04-.11.022-.05c.03-.053.063-.09.1-.11.037-.02.096-.025.18-.01.03.007.07.016.12.03.15.044.29.065.42.065.21 0 .37-.027.48-.083.11-.054.165-.127.165-.22 0-.073-.024-.134-.072-.18-.048-.048-.14-.092-.275-.13l-.26-.075-.248-.07c-.136-.04-.26-.09-.374-.14-.116-.052-.22-.115-.32-.19-.1-.073-.18-.163-.24-.27-.06-.107-.09-.23-.09-.37 0-.19.05-.353.15-.49.1-.137.26-.25.48-.34.22-.088.49-.133.81-.133.26 0 .48.03.68.08.2.052.39.12.57.21.18.09.31.17.39.24l.1.1.03.03.015.03.01.033-.01.04-.02.04-.11.1-.17.11c-.05.03-.09.048-.12.05-.03 0-.08-.015-.15-.05l-.12-.065c-.1-.06-.2-.11-.3-.148-.1-.036-.22-.055-.36-.055zm-3.77.28l.11-.002c.14 0 .26.025.38.068l.07.03.08.052c.027.02.05.04.07.06l.025.026.02.026.01.03v.038l-.01.04-.02.04-.07.06-.078.045-.09.034-.11.015c-.19.01-.35-.027-.47-.11-.12-.08-.18-.195-.18-.34v-.008l.02-.07c.03-.067.1-.12.2-.16l.05-.014zm-.22.53l.07.04c.12.067.28.1.48.1.1 0 .2-.02.28-.05l.1-.043c.03-.02.06-.042.08-.068l.035-.04.02-.04.01-.04v-.12l-.01-.05c-.01-.02-.02-.04-.04-.058l-.053-.05-.08-.05c-.093-.057-.21-.087-.35-.09h-.058c-.2.003-.35.06-.45.17-.1.113-.14.26-.12.44l.01.05.03.06.05.048zm-.28-.71l.05.02c.06.03.09.08.09.14v1.19c0 .173-.03.32-.1.438-.07.12-.18.212-.33.28-.15.07-.35.13-.6.18l-.17.02c-.26.02-.5.01-.71-.03-.21-.04-.38-.1-.5-.19-.12-.087-.19-.19-.21-.31l-.005-.06.01-.05.04-.06.08-.06.1-.04.09-.01c.043 0 .085.015.124.046.04.03.07.08.09.15.01.05.05.1.11.14.06.04.13.07.22.09l.13.02c.11 0 .21-.02.3-.05l.12-.06c.05-.037.09-.08.12-.13l.02-.053c.01-.02.02-.04.02-.07V17.7l-.05.03c-.07.04-.16.07-.26.1-.1.025-.21.038-.33.038-.14 0-.27-.023-.39-.07-.12-.048-.22-.12-.3-.21-.08-.09-.14-.21-.18-.35-.04-.14-.06-.31-.06-.5 0-.18.02-.35.07-.49.05-.14.12-.26.21-.37.09-.11.2-.2.33-.27.13-.067.27-.12.42-.15l.14-.02c.14 0 .26.015.37.04.11.03.2.07.28.12l.08.06zm-.13.79l-.04-.05-.07-.06c-.073-.047-.17-.07-.29-.07-.12 0-.23.027-.33.08-.1.053-.18.14-.24.26-.06.12-.09.28-.09.48 0 .2.03.36.09.48.06.12.15.21.26.27.11.06.23.09.36.09.11 0 .2-.014.27-.044l.07-.04.04-.032.02-.03V17.4l-.01-.04z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    id: 'snapchat-ads',
    name: 'Snapchat Ads',
    category: 'advertising',
    description: 'Integrate Snap Ads Manager for immersive AR advertising and reaching younger demographics.',
    products: ['MW-Planner', 'MW-Activate', 'MW-Studio'],
    features: ['AR lenses', 'Story ads', 'Snap Pixel', 'Dynamic ads'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.465-.104.135 0 .27.027.39.08.195.088.42.252.42.54 0 .24-.18.479-.42.6-.315.18-.615.3-.87.435-.27.135-.5.254-.69.42-.09.09-.225.27-.27.495l-.015.06a7.017 7.017 0 01-.27.838c-.48 1.14-1.17 2.145-2.01 2.94a7.543 7.543 0 01-.855.645c-.27.165-.54.315-.825.435.225.06.45.09.675.09h.135c.57 0 1.095-.135 1.545-.315.165-.075.36-.105.555-.105.285 0 .57.09.795.27.345.285.48.69.36 1.095-.135.45-.54.78-1.095.9-.57.135-1.185.195-1.83.195-.54 0-1.095-.045-1.665-.135-.195-.03-.375-.06-.54-.09-.165-.03-.315-.06-.45-.075-.39 0-.69.135-.945.45-.315.39-.78.645-1.5.915-.615.24-1.335.36-2.145.36-.81 0-1.53-.12-2.145-.36-.72-.27-1.185-.525-1.5-.915-.255-.315-.555-.45-.945-.45-.135.015-.285.045-.45.075-.165.03-.345.06-.54.09-.57.09-1.125.135-1.665.135-.645 0-1.26-.06-1.83-.195-.555-.12-.96-.45-1.095-.9-.12-.405.015-.81.36-1.095.225-.18.51-.27.795-.27.195 0 .39.03.555.105.45.18.975.315 1.545.315H5.1c.225 0 .45-.03.675-.09-.285-.12-.555-.27-.825-.435a7.543 7.543 0 01-.855-.645c-.84-.795-1.53-1.8-2.01-2.94a7.017 7.017 0 01-.27-.838l-.015-.06c-.045-.225-.18-.405-.27-.495-.19-.166-.42-.285-.69-.42-.255-.135-.555-.255-.87-.435-.24-.12-.42-.36-.42-.6 0-.288.225-.452.42-.54.12-.053.255-.08.39-.08.121 0 .3.016.465.104.374.181.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C3.647 1.069 7.004.793 7.994.793h4.212z" fill="#FFFC00"/>
      </svg>
    ),
  },
  {
    id: 'pinterest-ads',
    name: 'Pinterest Ads',
    category: 'advertising',
    description: 'Connect Pinterest Ads for visual discovery marketing and shopping-focused campaigns.',
    products: ['MW-Planner', 'MW-Activate'],
    features: ['Shopping ads', 'Idea pins', 'Tag integration', 'Audience insights'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" fill="#E60023"/>
      </svg>
    ),
  },
  {
    id: 'twitter-ads',
    name: 'X (Twitter) Ads',
    category: 'advertising',
    description: 'Integrate X Ads for real-time marketing, trend-jacking, and conversation-based targeting.',
    products: ['MW-Planner', 'MW-Activate'],
    features: ['Promoted tweets', 'Follower targeting', 'Conversation ads', 'Event targeting'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000"/>
      </svg>
    ),
  },
  {
    id: 'dv360',
    name: 'Display & Video 360',
    category: 'programmatic',
    description: 'Connect Google\'s enterprise DSP for programmatic display, video, and connected TV advertising.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate', 'MW-Marketplace'],
    features: ['Programmatic guaranteed', 'Custom bidding', 'Audience activation', 'Cross-device'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    id: 'the-trade-desk',
    name: 'The Trade Desk',
    category: 'programmatic',
    description: 'Integrate with the leading independent DSP for omnichannel programmatic advertising.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate', 'MW-Marketplace'],
    features: ['Unified ID 2.0', 'Kokai AI', 'CTV/OTT', 'Retail media'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0CA678"/>
        <path d="M6 8h12v2H6V8zm0 3h12v2H6v-2zm0 3h8v2H6v-2z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'xandr',
    name: 'Xandr (Microsoft)',
    category: 'programmatic',
    description: 'Connect Microsoft\'s advertising platform for premium inventory and advanced targeting.',
    products: ['MW-Planner', 'MW-Activate', 'MW-Marketplace'],
    features: ['Curated deals', 'Identity solutions', 'Video marketplace', 'Native ads'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" fill="#00A4EF"/>
      </svg>
    ),
  },
  {
    id: 'amazon-dsp',
    name: 'Amazon DSP',
    category: 'programmatic',
    description: 'Access Amazon\'s demand-side platform for programmatic ads on and off Amazon properties.',
    products: ['MW-Planner', 'MW-Activate', 'MW-Marketplace'],
    features: ['Amazon audiences', 'Streaming TV', 'Twitch ads', 'Attribution'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#FF9900"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    id: 'mediamath',
    name: 'MediaMath',
    category: 'programmatic',
    description: 'Integrate with MediaMath\'s omnichannel DSP for advanced programmatic campaigns.',
    products: ['MW-Planner', 'MW-Activate'],
    features: ['Brain AI', 'Omnichannel', 'Identity', 'Transparency'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E3A5F"/>
        <path d="M6 12l4-6 4 6-4 6-4-6zm8 0l4-6v12l-4-6z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    category: 'analytics',
    description: 'Connect GA4 for unified measurement, cross-platform tracking, and predictive analytics.',
    products: ['MW-Measure', 'MW-Planner', 'MW-Science'],
    features: ['Event tracking', 'Predictive metrics', 'Audiences', 'Attribution'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M22.84 2.998v17.004c0 1.1-.9 2-2 2H4.16c-1.1 0-2-.9-2-2V3.998c0-1.1.9-2 2-2h16.68c1.1 0 2 .9 2 2z" fill="#F9AB00"/>
        <path d="M20.16 14.498v4.504c0 .55-.45 1-1 1h-4.504c-.55 0-1-.45-1-1v-4.504c0-.55.45-1 1-1h4.504c.55 0 1 .45 1 1z" fill="#E37400"/>
      </svg>
    ),
  },
  {
    id: 'adobe-analytics',
    name: 'Adobe Analytics',
    category: 'analytics',
    description: 'Enterprise analytics integration for advanced customer journey analysis and attribution.',
    products: ['MW-Measure', 'MW-Planner', 'MW-Science'],
    features: ['Analysis Workspace', 'Attribution IQ', 'Segment IQ', 'Real-time'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm.001 0h3.71L24 1.376H15.087l-1.12 21.248zM0 1.376l6.966 21.248h3.71L4.12 8.809l4.209-7.433H0z" fill="#FF0000"/>
      </svg>
    ),
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    category: 'analytics',
    description: 'Product analytics integration for user behavior tracking and conversion optimization.',
    products: ['MW-Measure', 'MW-Science'],
    features: ['Funnel analysis', 'Retention', 'A/B testing', 'Cohorts'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#7856FF"/>
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    category: 'analytics',
    description: 'Digital analytics platform for product intelligence and customer behavior insights.',
    products: ['MW-Measure', 'MW-Science'],
    features: ['Behavioral cohorts', 'Journey maps', 'Experiments', 'Predictions'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E61CD"/>
        <path d="M12 6l6 12H6l6-12z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'heap',
    name: 'Heap',
    category: 'analytics',
    description: 'Auto-capture analytics for complete user journey tracking without manual instrumentation.',
    products: ['MW-Measure'],
    features: ['Auto-capture', 'Session replay', 'Heatmaps', 'Funnels'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#5B2D8E"/>
        <path d="M12 5l7 7-7 7-7-7 7-7z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'segment',
    name: 'Segment',
    category: 'analytics',
    description: 'Customer data platform for unified data collection and activation across tools.',
    products: ['MW-Measure', 'MW-Planner', 'MW-Science'],
    features: ['CDP', 'Identity resolution', 'Protocols', 'Warehouses'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#52BD95"/>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'Connect Salesforce CRM for lead sync, opportunity tracking, and closed-loop attribution.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate'],
    features: ['Lead sync', 'Opportunity tracking', 'Campaign attribution', 'Custom objects'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.39 0-.78-.045-1.155-.12-.63 1.38-2.025 2.34-3.63 2.34a4.02 4.02 0 01-1.875-.465 4.186 4.186 0 01-3.885 2.64c-2.085 0-3.84-1.545-4.155-3.585a4.348 4.348 0 01-.69.06c-2.37 0-4.29-1.95-4.29-4.35 0-1.65.9-3.09 2.235-3.84a4.793 4.793 0 01-.18-1.29c0-2.58 2.055-4.68 4.59-4.68 1.5 0 2.835.72 3.69 1.845l.51-.444z" fill="#00A1E0"/>
      </svg>
    ),
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'HubSpot integration for marketing automation, lead scoring, and campaign tracking.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate'],
    features: ['Contact sync', 'Lead scoring', 'Workflow triggers', 'Attribution'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.198 2.198 0 0017.232.836h-.066a2.198 2.198 0 00-2.198 2.198v.066c0 .832.467 1.554 1.152 1.927v2.912a5.202 5.202 0 00-2.675 1.263l-7.6-5.927a2.63 2.63 0 00.087-.657 2.616 2.616 0 10-2.616 2.617c.471 0 .912-.127 1.294-.346l7.476 5.83a5.254 5.254 0 00-.576 2.374c0 .88.219 1.71.601 2.439l-2.27 2.27a1.953 1.953 0 00-.58-.095 1.971 1.971 0 101.971 1.971c0-.2-.032-.393-.087-.576l2.306-2.306a5.257 5.257 0 103.545-9.166zm-.965 7.652a2.618 2.618 0 110-5.236 2.618 2.618 0 010 5.236z" fill="#FF7A59"/>
      </svg>
    ),
  },
  {
    id: 'marketo',
    name: 'Marketo',
    category: 'crm',
    description: 'Adobe Marketo Engage integration for B2B marketing automation and lead management.',
    products: ['MW-Planner', 'MW-Measure'],
    features: ['Program sync', 'Lead nurturing', 'Revenue attribution', 'ABM'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#5C4C9F"/>
        <path d="M12 5l7 14H5l7-14z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    description: 'Sales CRM integration for pipeline tracking and deal-based campaign attribution.',
    products: ['MW-Planner', 'MW-Measure'],
    features: ['Deal sync', 'Activity tracking', 'Pipeline stages', 'Revenue reports'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#25292C"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#00D68F"/>
      </svg>
    ),
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'bi',
    description: 'Business intelligence integration for advanced data visualization and executive dashboards.',
    products: ['MW-Measure', 'MW-Planner', 'MW-Science'],
    features: ['Data extract', 'Custom viz', 'Embedded analytics', 'Auto-refresh'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M11.654 5.327V3.435h-1.09v1.892H8.672v1.09h1.892v1.891h1.09V6.417h1.891v-1.09h-1.891zM17.018 9.745V6.963h-1.636v2.782h-2.782v1.636h2.782v2.782h1.636v-2.782h2.782V9.745h-2.782zM7.036 11.927V9.691H5.945v2.236H3.709v1.091h2.236v2.236h1.091v-2.236h2.236v-1.091H7.036zM17.018 16.8v-2.236h-1.636V16.8h-2.236v1.636h2.236v2.237h1.636V18.436h2.782V16.8h-2.782zM11.654 14.564v-1.891h-1.09v1.891H8.672v1.091h1.892v1.891h1.09v-1.891h1.891v-1.091h-1.891zM5.4 17.891v-1.636H4.309v1.636H2.673v1.091h1.636v1.636H5.4v-1.636h1.636v-1.091H5.4z" fill="#E97627"/>
      </svg>
    ),
  },
  {
    id: 'looker',
    name: 'Looker',
    category: 'bi',
    description: 'Google Cloud Looker integration for semantic data modeling and embedded analytics.',
    products: ['MW-Measure', 'MW-Planner', 'MW-Science'],
    features: ['LookML', 'Embedded', 'Actions', 'Schedules'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'bi',
    description: 'Microsoft Power BI integration for enterprise reporting and self-service analytics.',
    products: ['MW-Measure', 'MW-Planner'],
    features: ['DirectQuery', 'Dataflows', 'Paginated reports', 'Embedded'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M10 12v8H6v-8h4zm4-6v14h-4V6h4zm4 3v11h-4V9h4z" fill="#F2C811"/>
      </svg>
    ),
  },
  {
    id: 'domo',
    name: 'Domo',
    category: 'bi',
    description: 'Cloud BI platform integration for real-time business insights and data apps.',
    products: ['MW-Measure', 'MW-Planner'],
    features: ['Magic ETL', 'Beast Mode', 'Alerts', 'Apps'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0095D5"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'bi',
    description: 'Sync campaign data directly to Google Sheets for custom reporting and collaboration.',
    products: ['MW-Measure', 'MW-Planner'],
    features: ['Auto-sync', 'Custom schedules', 'Templates', 'Formulas'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 7h-15v14c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7z" fill="#0F9D58"/>
        <path d="M17 5v2H7V5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1z" fill="#0F9D58"/>
        <path d="M8 12h8v1H8v-1zm0 3h8v1H8v-1zm0 3h5v1H8v-1z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'collaboration',
    description: 'Real-time alerts, reports, and campaign notifications delivered to Slack channels.',
    products: ['MW-Planner', 'MW-Measure', 'MW-Activate'],
    features: ['Alerts', 'Daily digests', 'Slash commands', 'Workflows'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" fill="#E01E5A"/>
      </svg>
    ),
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'collaboration',
    description: 'Microsoft Teams integration for campaign updates, approvals, and team collaboration.',
    products: ['MW-Planner', 'MW-Measure'],
    features: ['Channel posts', 'Adaptive cards', 'Approvals', 'Tabs'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M20.625 8.5h-6.25a.625.625 0 00-.625.625v6.25c0 .345.28.625.625.625h6.25c.345 0 .625-.28.625-.625v-6.25a.625.625 0 00-.625-.625z" fill="#5059C9"/>
        <path d="M17.5 7.5a2 2 0 100-4 2 2 0 000 4z" fill="#5059C9"/>
        <path d="M12.5 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#7B83EB"/>
        <path d="M16.875 8.5h-8.75A1.125 1.125 0 007 9.625v7.75A1.125 1.125 0 008.125 18.5h8.75a1.125 1.125 0 001.125-1.125v-7.75A1.125 1.125 0 0016.875 8.5z" fill="#7B83EB"/>
      </svg>
    ),
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'collaboration',
    description: 'Project management integration for campaign tasks, timelines, and team coordination.',
    products: ['MW-Planner'],
    features: ['Task sync', 'Projects', 'Timelines', 'Automations'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M18.78 12.653c-2.478 0-4.487 2.009-4.487 4.487s2.009 4.487 4.487 4.487 4.487-2.009 4.487-4.487-2.009-4.487-4.487-4.487zm-13.56 0c-2.478 0-4.487 2.009-4.487 4.487s2.009 4.487 4.487 4.487 4.487-2.009 4.487-4.487-2.009-4.487-4.487-4.487zM12 2.373c-2.478 0-4.487 2.009-4.487 4.487s2.009 4.487 4.487 4.487 4.487-2.009 4.487-4.487S14.478 2.373 12 2.373z" fill="#F06A6A"/>
      </svg>
    ),
  },
  {
    id: 'monday',
    name: 'Monday.com',
    category: 'collaboration',
    description: 'Work OS integration for campaign workflows, resource planning, and team visibility.',
    products: ['MW-Planner'],
    features: ['Boards sync', 'Automations', 'Dashboards', 'Updates'],
    apiDocs: '/resources/api-reference',
    status: 'live',
    logo: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF3D57"/>
        <circle cx="8" cy="12" r="3" fill="white"/>
        <circle cx="16" cy="12" r="3" fill="#FFCC00"/>
      </svg>
    ),
  },
]

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedIntegration, setSelectedIntegration] = useState<typeof integrations[0] | null>(null)

  // Filter integrations
  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Integration Marketplace
            </h1>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-10">
              Connect your entire marketing stack in minutes. Seamless integrations with the tools you already use.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* API Documentation Link */}
                <div className="mt-6 pt-6 border-t">
                  <Link
                    href="/resources/api-reference"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <CodeIcon className="w-4 h-4" />
                    <span>API Documentation</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Integration Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredIntegrations.length}</span> integrations
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedIntegration(integration)}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-100 hover:border-blue-200 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        {integration.logo}
                      </div>
                      <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Live
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {integration.description}
                    </p>

                    {/* Products */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {integration.products.slice(0, 3).map((product) => (
                        <span
                          key={product}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {product}
                        </span>
                      ))}
                      {integration.products.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{integration.products.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xs text-gray-500 capitalize">{integration.category}</span>
                      <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Detail Modal */}
      {selectedIntegration && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIntegration(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    {selectedIntegration.logo}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedIntegration.name}</h2>
                    <p className="text-sm text-gray-500 capitalize">{selectedIntegration.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIntegration(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-600">{selectedIntegration.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedIntegration.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Products */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Compatible Products</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedIntegration.products.map((product) => (
                    <Link
                      key={product}
                      href={`/products/${product.toLowerCase().replace('mw-', 'mw-')}`}
                      className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              </div>

              {/* API Configuration */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-3">API Configuration</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Authentication</span>
                    <span className="text-gray-900 font-medium">OAuth 2.0 / API Key</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rate Limit</span>
                    <span className="text-gray-900 font-medium">1000 req/min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Data Sync</span>
                    <span className="text-gray-900 font-medium">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Webhook Support</span>
                    <span className="text-green-600 font-medium flex items-center gap-1">
                      <CheckIcon className="w-4 h-4" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex items-center justify-between">
              <Link
                href={selectedIntegration.apiDocs}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
              >
                <CodeIcon className="w-4 h-4" />
                View API Docs
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedIntegration(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Connect Integration
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don't See Your Integration?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're constantly adding new integrations. Let us know what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Integration
              </Link>
              <Link
                href="/resources/api-reference"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <CodeIcon className="w-5 h-5" />
                Build Custom Integration
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
